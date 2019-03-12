Page({
  data: {
    series: [
      {
        type: '股票类',
        data: 83.59,
        color: 'red',
      },
      {
        type: '债券类',
        data: 2.17,
      },
      {
        type: '现金类',
        data: 14.24,
      },
    ],
    radius: 0.85,
    innerRadius: 0.7,
    legend: {
      position: 'right',
    },
    guide: {
      text: {
        position: ['50%', '50%'],
        content: 'guide',
        style: {
          fontSize: 40,
          fill: '#1890FF',
        },
      },
    },
  },
});
