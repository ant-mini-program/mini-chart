import F2 from '@antv/my-f2';
import methods from '../mixins/methods';
import util from '../util';

Component({
  mixins: [methods],
  props: {
    categories: [],
    series: [],
    xAxis: {
      range: [0, 1],
      tickCount: 3,
      label(text, index, total) {
        const textCfg = {};
        if (index === 0) {
          textCfg.textAlign = 'left';
        }
        if (index === total - 1) {
          textCfg.textAlign = 'right';
        }
        return textCfg;
      },
    },
    yAxis: {
      tickCount: 3,
    },
    tooltip: {
      showItemMarker: false,
      onShow(ev) {
        const {items} = ev;
        items[0].name = items[0].title;
      },
    },
    legend: {
      position: 'top',
      offsetY: 5
    },
  },
  didMount() {
    const id = `am-mc-line-${this.$id}`;
    const ctx = my.createCanvasContext(id);
    const canvas = this.canvas = new F2.Renderer(ctx);

    const pixelRatio = my.getSystemInfoSync().pixelRatio;
    ctx.scale(pixelRatio, pixelRatio);

    my.createSelectorQuery()
      .select(`#${id}`)
      .boundingClientRect()
      .exec(res => {
        const { width, height } = res[0];
        this.setData({
          width: width * pixelRatio,
          height: height * pixelRatio,
        });
        const { categories, series, xAxis, yAxis, tooltip, legend } = this.props; console.log(tooltip, legend)

        let Tooltip;
        if(tooltip) {
          Tooltip = require('@antv/f2/lib/plugin/tooltip');
        }
        const chart = new F2.Chart({
          el: canvas,
          width,
          height,
          plugins: Tooltip,
        });

        let data = [];
        if(series.length === 1) {
          data = series[0].data.map((item, i) => {
            return {
              key: categories[i],
              value: item,
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

        if(xAxis) {
          chart.scale('key', util.scale(xAxis));
          chart.axis('key', util.axis(xAxis));
        }
        if(yAxis) {
          chart.scale('value', util.scale(yAxis));
          chart.axis('value', util.axis(yAxis));
        }
        if(tooltip) {
          chart.tooltip(tooltip);
        }
        if(legend) {
          chart.legend(legend);
        }

        const style = {};
        series.forEach(kind => {
          style[kind.type] = kind.style;
        });
        const color = {};
        series.forEach(kind => {
          color[kind.type] = kind.color;
        });

        if(series.length === 1) {
          chart.line().position('key*value').shape('type', type => {
            return style[type] || 'line';
          });
          if(series[0].point) {
            chart.point().position('key*value').style(series[0].point);
          }
        }
        else if(series.length > 1) {
          chart.line().position('key*value').color('type', type => {
            return color[type];
          }).shape('type', type => {
            return style[type] || 'line';
          });
          let pointType = [];
          let pointStyle;
          series.forEach(kind => {
            if(kind.point) {
              pointType.push(kind.type);
              pointStyle = kind.point;
            }
          });
          if(pointType.length) {
            chart.point().position('key*value').color('type').size('type', v => {
              if(pointType.indexOf(v) === -1) {
                return 0;
              }
            }).style(pointStyle);
          }
        }

        chart.render();
      });
  },
});
