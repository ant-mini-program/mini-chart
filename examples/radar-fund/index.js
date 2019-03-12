Page({
  data: {
    categories: ["超大盘能力", "抗跌能力", "稳定能力", "绝对收益能力", "选证择时能力", "风险回报能力"],
    series: [
      {
        type: '近一月',
        style: 'stoke',
        point: {
          size: 3,
          stroke: '#F00',
          lineWidth: 1,
        },
        data: [6.5, 9.5, 9, 6, 6, 8],
        guideContent:'7.5'
      },
      {
        type: '近三月',
        color: '#93F',
        style: 'stoke',
        data: [6, 7.5, 7, 5, 5, 8],
        guideContent:'6.4'
      },
      {
        type: '近六月',
        color: '#93F',
        style: 'stoke',
        data: [6, 8.5, 7, 5, 6, 5.5],
        guideContent:'6.3'
      },
    ],
    yAxis: {
      tickCount: 5,
      min: 0,
      max: 10,
    },
    legend: {
      position: 'top',
      offsetY: 5
    },
    fund:true,
    guide: {
      text: {
        position: ['50%', '50%'],
        content: '...',
        style: {
          fontSize: 40,
          fill: '#1890FF',
        },
      },
    },
  },
});