import F2 from '@antv/my-f2';
import methods from '../mixins/methods';
import util from '../util';

Component({
  mixins: [
    {
      methods: {
        touchStartArea(e) {
          if (this.areaCanvas) {
            this.areaCanvas.emitEvent('touchstart', [e]);
          }
        },
        touchMoveArea(e) {
          if (this.areaCanvas) {
            this.areaCanvas.emitEvent('touchmove', [e]);
          }
        },
        touchEndArea(e) {
          if (this.areaCanvas) {
            this.areaCanvas.emitEvent('touchend', [e]);
          }
        },
        touchStartColumn(e) {
          if (this.columnCanvas) {
            this.columnCanvas.emitEvent('touchstart', [e]);
          }
        },
        touchMoveColumn(e) {
          if (this.columnCanvas) {
            this.columnCanvas.emitEvent('touchmove', [e]);
          }
        },
        touchEndColumn(e) {
          if (this.columnCanvas) {
            this.columnCanvas.emitEvent('touchend', [e]);
          }
        },
      },
    }
  ],
  props: {
    series: [],
    xAxis: {
      tickCount: 3,
    },
    yAxis: {
      tickCount: 3,
    },
    appendPadding: 15,
    tooltip: false,
  },
  didMount() {
    my.call('getStartupParams', {}, (result) => {
      util.tracert('timeshare', result.appId, result.url);
    });

    const areaId = `am-mc-timeshare-area-${this.$id}`;
    const areaCtx = my.createCanvasContext(areaId);
    const areaCanvas = this.areaCanvas = new F2.Renderer(areaCtx);
    let areaChart;

    const columnId = `am-mc-timeshare-column-${this.$id}`;
    const columnCtx = my.createCanvasContext(columnId);
    const columnCanvas = this.columnCanvas = new F2.Renderer(columnCtx);
    let columnChart;

    const pixelRatio = my.getSystemInfoSync().pixelRatio;
    areaCtx.scale(pixelRatio, pixelRatio);
    columnCtx.scale(pixelRatio, pixelRatio);

    my.createSelectorQuery()
      .select(`#${areaId}`)
      .boundingClientRect()
      .select(`#${columnId}`)
      .boundingClientRect()
      .exec(res => {
        if(!res || !res.length) {
          return;
        }
        const { width: widthArea, height: heightArea } = res[0];
        const { width: widthColumn, height: heightColumn } = res[1];
        this.setData({
          widthArea: widthArea * pixelRatio,
          heightArea: heightArea * pixelRatio,
          widthColumn: widthColumn * pixelRatio,
          heightColumn: heightColumn * pixelRatio,
        });
        let { padding, appendPadding } = this.props;

        if(!Array.isArray(appendPadding)) {
          appendPadding = [appendPadding, appendPadding, appendPadding, appendPadding];
        }

        const columnAppendPadding = Object.assign([], appendPadding);
        columnAppendPadding[0] = 0;

        this.areaChart = new F2.Chart({
          el: areaCanvas,
          width: widthArea,
          height: heightArea,
          padding,
          appendPadding,
        });

        this.columnChart = new F2.Chart({
          el: columnCanvas,
          width: widthColumn,
          height: heightColumn,
          appendPadding: columnAppendPadding,
        });
      });
  },
  didUpdate() {
    const { series, xAxis, yAxis, tooltip, guide, } = this.props;

    const areaChart = this.areaChart;
    areaChart.clear();

    const columnChart = this.columnChart;
    columnChart.clear();

    let price = [];
    let data = series.map(item => {
      price.push(item.price);
      return {
        key: item.time,
        value: item.price,
        type: 'a',
      };
    });
    areaChart.source(data);

    if(xAxis) {
      xAxis.label = util.label;
      areaChart.scale('key', util.scale(xAxis));
      areaChart.axis('key', util.axis(xAxis));
    }
    if(yAxis) {
      areaChart.scale('value', util.scale(yAxis));
      areaChart.axis('value', util.axis(yAxis));
    }
    areaChart.tooltip(Object.assign(tooltip, {
      onChange: obj => {
        let currentPoint = {
          x: obj.x,
          y: obj.y
        };
        columnChart.showTooltip(currentPoint);
      },
    }));
    areaChart.legend(false);

    areaChart.area().position('key*value').color('type');
    areaChart.line().position('key*value').color('type');

    if(guide) {
      if(guide.line) {
        areaChart.guide().line(guide.line);
      }
      if(guide.text) {
        areaChart.guide().text(guide.text);
      }
    }

    areaChart.render();

    if(!series || !series.length) {
      return;
    }

    let lastVolume = series[0].volume;
    data = series.map((item, i) => {
      let res = i ? {
        trend: item.price >= series[i - 1].price ? 0 : 1,
        key: item.time,
        value: item.volume - lastVolume,
      } : {
        trend: 0,
        key: item.time,
        value: item.volume,
      };
      lastVolume = item.volume;
      return res;
    });
    columnChart.source(data);

    columnChart.interval().position('key*value').color('trend', (item) => {
      return ['#FF4433', '#32A532'][item];
    });
    if(tooltip) {
      columnChart.tooltip(Object.assign(tooltip, {
        crosshairsType: 'y',
        custom: true,
        onChange: obj => {
          let currentPoint = {
            x: obj.x,
            y: obj.y
          };
          areaChart.showTooltip(currentPoint);
        },
      }));
    }
    else {
      columnChart.tooltip(false);
    }
    columnChart.legend(false);
    columnChart.axis(false);

    columnChart.render();
  },
});
