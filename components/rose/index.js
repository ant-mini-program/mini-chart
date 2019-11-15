import F2 from '@antv/my-f2';
import methods from '../mixins/methods';
import util from '../util';

function render(chart, props, width, height) {
  if(!chart) {
    return;
  }
  const { series, legend, tooltip, style } = props;

  chart.clear();

  let data = series.map(item => {
    return item;
  });
  chart.source(data);
  chart.coord('polar');

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
    .position('type*data')
    .color('type', color)
    .style(style);

  chart.changeSize(width, height);
}

Component({
  mixins: [methods],
  props: {
    series: [],
    tooltip: false,
    legend: false,
  },
  didMount() {
    my.call('getStartupParams', {}, (result) => {
      util.tracert('rose', result.appId, result.url);
    });

    const id = `am-mc-rose-${this.$id}`;
    const ctx = this.ctx = my.createCanvasContext(id);
    const canvas = this.canvas = new F2.Renderer(ctx);

    const pixelRatio = this.pixelRatio = my.getSystemInfoSync().pixelRatio;
    ctx.scale(pixelRatio, pixelRatio);

    my.createSelectorQuery()
      .select(`#${id}`)
      .boundingClientRect()
      .exec(res => {
        if(!res || !res.length) {
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
    const id = `am-mc-rose-${this.$id}`;
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
