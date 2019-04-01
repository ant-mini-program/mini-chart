Page({
  data: {
    cn: 'bubble',
    series: [
      {
        xExtAlias:'gr3',//x轴坐标补充文字
        yExtAlias:'gr',//y轴坐标补充文字
        color:'#1890ff',//气泡颜色
        textColor:'#1890FF',//气泡内文字颜色
        data: [{
          key: 95,//x轴
          value: 95,//y轴
          size: 39,//气泡大小
          name: 'BE',//气泡展示文字
          desc: 'Belgium'//tool tip展示文字
        },
        {
          key: 86.5,//x轴
          value: 102.9,//y轴
          size: 14.7,//气泡大小
          name: 'DE',//气泡展示文字
          desc: 'Germany'//tool tip展示文字
        },
        {
          key: 80.8,//x轴
          value: 91.5,//y轴
          size: 15.8,//气泡大小
          name: 'FI',//气泡展示文字
          desc: 'Finland'//tool tip展示文字
        },
        {
          key: 80.4,//x轴
          value: 102.5,//y轴
          size: 12,//气泡大小
          name: 'NL',//气泡展示文字
          desc: 'Netherlands'//tool tip展示文字
        },
        {
          key: 80.3,//x轴
          value: 86.1,//y轴
          size: 16.6,//气泡大小
          name: 'ES',//气泡展示文字
          desc: 'Spain'//tool tip展示文字
        },
        {
          key: 71,//x轴
          value: 93.2,//y轴
          size: 24.7,//气泡大小
          name: 'UK',//气泡展示文字
          desc: 'United Kingdom'//tool tip展示文字
        },
        {
          key: 65.5,//x轴
          value: 65.5,//y轴
          size: 35.3,//气泡大小
          name: 'US',//气泡展示文字
          desc: 'United States'//tool tip展示文字
        }],
      }
    ],
    xAxis: {
      tickCount: 5,
    },
    yAxis: {
      tickCount: 4,
    },
    grid: true, //是否展示网格辅助线
  },
  onReady() {
    setTimeout(() => {
      this.setData({
        cn: 'bubble size',
        grid: false,
      });
    }, 2000);
  },
});
