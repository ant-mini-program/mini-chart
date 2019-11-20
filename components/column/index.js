import F2 from '@antv/my-f2';
import methods from '../mixins/methods';
import util from '../util';

function render(chart, props, width, height) {
  if(!chart) {
    return;
  }
  const { categories, series, xAxis, yAxis, tooltip, legend, adjust, coord } = props;

  chart.clear();

  let data = [];
  if(series.length === 1) {
    data = series[0].data.map((item, i) => {
      return {
        key: categories[i],
        value: item,
        type: series[0].type,
      }
    });
  }
  else if(series.length > 1) {
    series.forEach(kind => {
      data = data.concat(kind.data.map((item, i) => {
        return {
          key: categories[i],
          value: item,
          type: kind.type,
        };
      }));
    });
  }
  chart.source(data);

  if(coord) {
    chart.coord(coord);
  }
  if(xAxis) {
    if(xAxis.htAlign) {
      if(!coord || !coord.transposed) {
        xAxis.label = util.label;
      }
      else {
        yAxis.label = util.label;
      }
    }
    chart.scale('key', util.scale(xAxis));
    chart.axis('key', util.axis(xAxis));
  }
  if(yAxis) {
    chart.scale('value', util.scale(yAxis));
    chart.axis('value', util.axis(yAxis));
  }
  chart.tooltip(tooltip);
  chart.legend(legend);

  const color = {};
  series.forEach(kind => {
    color[kind.type] = kind.color;
  });

  if(series.length === 1) {
    chart.interval().position('key*value').color('type', type => {
      return color[type];
    }).adjust(adjust);
  }
  else if(series.length > 1) {
    chart.interval().position('key*value').color('type', type => {
      return color[type];
    }).adjust(adjust);
  }

  chart.changeSize(width, height);
}

Component({
  mixins: [methods],
  props: {
    categories: [],
    series: [],
    xAxis: {
      tickCount: 3,
    },
    yAxis: {
      tickCount: 3,
    },
    tooltip: false,
    legend: false,
    adjust: 'stack',
  },
  didMount() {
    my.call('getStartupParams', {}, (result) => {
      util.tracert('column', result.appId, result.url);
    });

    const id = `am-mc-column-${this.$id}`;
    const ctx = this.ctx = my.createCanvasContext(id);
    const canvas = this.canvas = new F2.Renderer(ctx);

    const pixelRatio = this.pixelRatio = my.getSystemInfoSync().pixelRatio;
    ctx.scale(pixelRatio, pixelRatio);

    my.createSelectorQuery()
      .select(`#${id}`)
      .boundingClientRect()
      .exec(res => {
        if(!res || !res.length || !res[0]) {
          return;
        }
        const { width, height } = res[0];

        this.setData({
          width: width * pixelRatio,
          height: height * pixelRatio,
        }, () => {
          const { padding, appendPadding } = this.props;

          this.chart = new F2.Chart({
            el: canvas,
            width,
            height,
            padding,
            appendPadding,
          });

          render(this.chart, this.props, width, height);
        });
      });
  },
  didUpdate() {
    const id = `am-mc-column-${this.$id}`;
    const pixelRatio = this.pixelRatio;

    my.createSelectorQuery()
      .select(`#${id}`)
      .boundingClientRect()
      .exec(res => {
        if(!res || !res.length || !res[0]) {
          return;
        }
        const { width, height } = res[0];
        if(this.data.width !== width * pixelRatio || this.data.height !== height * pixelRatio) {
          this.ctx.scale(pixelRatio, pixelRatio);
        }

        this.setData({
          width: width * pixelRatio,
          height: height * pixelRatio,
        }, () => {
          render(this.chart, this.props, width, height);
        });
      });
  },
});
