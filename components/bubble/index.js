import F2 from '@antv/my-f2';
import methods from '../mixins/methods';
import util from '../util';

const BLUE = '#1890ff';
const TEXTBLUE = '#1890FF';

function render(chart, props, width, height) {
  if(!chart) {
    return;
  }
  const { series, xAxis, yAxis, tooltip, grid } = props;

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

  // 开始配置坐标轴
  chart.axis('key', {
    label: function label(text) {
      return {
        text: text + ' ' + series[0].xExtAlias, // 格式化坐标轴显示文本
      };
    },
    grid: grid ? {
      stroke: '#d9d9d9',
      lineWidth: 1,
      lineDash: [2, 2],
    } : null
  });
  chart.axis('value', {
    line: F2.Util.mix({}, F2.Global._defaultAxis.line, {
      top: false
    }),
    label: function label(text) {
      if (text > 0) {
        return {
          text: text + ' ' + series[0].yExtAlias,
        };
      }
    }
  });

  //配置坐标轴的伸长比
  if (xAxis) {
    if(xAxis.htAlign) {
      xAxis.label = util.label;
    }
    chart.scale('key', util.scale(xAxis));
  }
  if (yAxis) {
    chart.scale('value', util.scale(yAxis));
  }

  //ToolTip 展示desc和x，y坐标
  if (tooltip) {
    chart.tooltip(Object.assign(tooltip, {
      onShow: function onChange(ev) {
        let items = ev.items;
        items[0].title = items[0].origin.desc;
        items[0].name = 'x ' + items[0].origin.key;
        items[0].value = 'y ' + items[0].origin.value;
      }
    }));
  }

  //绘制气泡，半径范围[10,40],气泡颜色跟随设置中的颜色或者默认BLUE颜色
  chart.point()
    .position('key*value')
    .color(series[0].color || BLUE)
    .size('size', [10, 40])
    .shape('circle')
    .style({
      lineWidth: 1,
      stroke: series[0].color || BLUE,
      opacity: 0.3
    });

  //绘制辅助文本，文本颜色跟随设置中的颜色或者默认文本TEXTBLUE颜色
  data.map(function (item) {
    chart.guide().text({
      position: [item.key, item.value],
      content: item.name,
      style: {
        textAlign: 'center',
        textBaseline: 'middle',
        fill: series[0].color || TEXTBLUE
      }
    });
  });

  chart.changeSize(width, height);
}

Component({
  mixins: [methods],
  props: {
    series: [],
    tooltip: {
      showTitle: true,
      showItemMarker: false,
      crosshairsType: 'xy',
      offsetY: 10
    },
  },
  didMount() {
    my.call('getStartupParams', {}, (result) => {
      util.tracert('bubble', result.appId, result.url);
    });

    const id = `am-mc-bubble-${this.$id}`;
    const ctx = this.ctx = my.createCanvasContext(id);
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
    const id = `am-mc-bubble-${this.$id}`;
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
