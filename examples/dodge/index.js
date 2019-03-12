Page({
  data: {
    categories: ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug."],
    series: [
      {
        type: 'London',
        color: '#F00',
        data: [18.9, 28.8, 39.3, 81.4, 47, 20.3, 24, 35.6],
      },
      {
        type: 'Berlin',
        data: [12.4, 23.2, 34.5, 99.7, 52.6, 35.5, 37.4, 42.4],
      }
    ],
    xAxis: {
      tickCount: 3,
    },
    yAxis: {
      tickCount: 3,
    },
    legend: {
      position: 'top',
      offsetY: 5
    },
    adjust: 'dodge',
  },
});
