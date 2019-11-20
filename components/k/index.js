import F2 from '@antv/my-f2';
import methods from '../mixins/methods';
import util from '../util';

function render(chart, props, width, height) {
  if(!chart) {
    return;
  }
  const { series, xAxis, yAxis, tooltip, guide } = props;

  chart.clear();

  let data = series.map(item => {
    return Object.assign({}, item, {
      range: [item.start, item.end, item.max, item.min],
      trend: item.start <= item.end ? 0 : 1,
    });
  });
  chart.source(data);

  if(xAxis) {
    if(xAxis.htAlign) {
      xAxis.label = util.label;
    }
    chart.scale('time', util.scale(xAxis));
    chart.axis('time', util.axis(xAxis));
  }
  if(yAxis) {
    chart.scale('range', util.scale(yAxis));
    chart.axis('range', util.axis(yAxis));
  }
  chart.tooltip(tooltip);
  chart.legend(false);

  chart.schema().position('time*range').color('trend', function(trend) {
    return ['#F4333C', '#1CA93D'][trend];
  }).shape('candle');

  if(guide) {
    if(guide.line) {
      chart.guide().line(guide.line);
    }
    if(guide.text) {
      chart.guide().text(guide.text);
    }
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
  },
  didMount() {
    my.call('getStartupParams', {}, (result) => {
      util.tracert('k', result.appId, result.url);
    });

    const id = `am-mc-k-${this.$id}`;
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
    const id = `am-mc-k-${this.$id}`;
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
