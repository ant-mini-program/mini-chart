import F2 from '@antv/my-f2';
import methods from '../mixins/methods';
import util from '../util';

function render(chart, props, width, height) {
  if(!chart) {
    return;
  }
  const { series, legend, style, radius, innerRadius, tooltip, guide, cascade, pieLabel, sidePadding, activeShape } = props;

  chart.clear();

  let data = cascade ? series : series.map(item => {
    item.key = 'key';
    return item;
  });
  chart.source(data);
  chart.coord('polar', {
    transposed: true,
    innerRadius,
    radius: radius || 1,
  });

  if (pieLabel) {
    // 添加饼图文本
    chart.pieLabel({
      sidePadding,
      activeShape,
      label1: function label1(data, color) {
        return {
          text: data.type,
          fill: color
        };
      },
      label2: function label2(data, color) {
        return {
          text: data.data,
          fill: color,
          fontWeight: 'bold'
        };
      }
    });
  }

  const color = [];
  const dftColors = F2.Global.colors;
  const length = dftColors.length;
  series.forEach((kind, i) => {
    color.push(kind.color || dftColors[i % length]);
  });
  chart.axis(false);
  chart.tooltip(tooltip);
  chart.legend(legend);

  chart.interval()
    .position('key*data')
    .color('type', color)
    .adjust('stack')
    .style(style);

  if (guide) {
    if (guide.text) {
      chart.guide().text(guide.text);
    }
  }

  chart.changeSize(width, height);
}

Component({
  mixins: [methods],
  props: {
    series: [],
    radius: 1,
    innerRadius: 0,
    cascade: false,
    pieLabel: false,
    sidePadding: 40,
    tooltip: false,
    legend: false,
  },
  didMount() {
    my.call('getStartupParams', {}, (result) => {
      util.tracert('pie', result.appId, result.url);
    });

    const id = `am-mc-pie-${this.$id}`;
    const ctx = this.ctx= my.createCanvasContext(id);
    const canvas = this.canvas = new F2.Renderer(ctx);

    const pixelRatio = this.pixelRatio = my.getSystemInfoSync().pixelRatio;
    ctx.scale(pixelRatio, pixelRatio);

    my.createSelectorQuery()
      .select(`#${id}`)
      .boundingClientRect()
      .exec(res => {
        if (!res || !res.length || !res[0]) {
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
    const id = `am-mc-pie-${this.$id}`;
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
