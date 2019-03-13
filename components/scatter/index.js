import F2 from '@antv/my-f2';
import methods from '../mixins/methods';
import util from '../util';

Component({
  mixins: [methods],
  props: {
    series: [],
    tooltip: false,
    legend: false,
  },
  didMount() {
    my.call('getStartupParams', {}, (result) => {
      util.tracert('scatter', result.appId, result.url);
    });

    const id = `am-mc-scatter-${this.$id}`;
    const ctx = my.createCanvasContext(id);
    const canvas = this.canvas = new F2.Renderer(ctx);

    const pixelRatio = my.getSystemInfoSync().pixelRatio;
    ctx.scale(pixelRatio, pixelRatio);

    my.createSelectorQuery()
      .select(`#${id}`)
      .boundingClientRect()
      .exec(res => {
        if (!res || !res.length) {
          return;
        }
        const { width, height } = res[0];
        this.setData({
          width: width * pixelRatio,
          height: height * pixelRatio,
        });
        const { padding, appendPadding } = this.props;

        this.chart = new F2.Chart({
          el: canvas,
          width,
          height,
          padding,
          appendPadding,
        });
      });
  },
  didUpdate() {
    const { series, xAxis, yAxis, tooltip, legend, style } = this.props;

    const chart = this.chart;
    chart.clear();

    let data = [];
    if (series.length === 1) {
      series[0].data.forEach(item => {
        item.type = series[0].type;
      });
      data = series[0].data;
    }
    else if (series.length > 1) {
      series.forEach((item, i) => {
        item.data.forEach(item2 => {
          item2.type = item.type || i;
        });
        data = data.concat(item.data);
      });
    }
    chart.source(data);

    if (xAxis) {
      if(xAxis.htAlign) {
        xAxis.label = util.label;
      }
      chart.scale('key', util.scale(xAxis));
      chart.axis('key', util.axis(xAxis));
    }
    if (yAxis) {
      chart.scale('value', util.scale(yAxis));
      chart.axis('value', util.axis(yAxis));
    }
    chart.tooltip(tooltip);
    chart.legend(legend);

    const color = [];
    const size = [];
    const dftColors = F2.Global.colors;
    const length = dftColors.length;

    series.forEach((kind, i) => {
      color.push(kind.color || dftColors[i % length]);
      size.push(kind.size || 3)
    });

    chart.point()
      .position('key*value')
      .color('type', color)
      .size('type', size)
      .style(style);

    chart.render();
  },
});
