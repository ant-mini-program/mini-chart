Page({
  data: {
    cn: 'radar',
    categories: ["Design", "Development", "Marketing", "Users", "Test", "Language", "Technology", "Support"],
    series: [
      {
        type: 'a',
        style: 'dash',
        point: {
          size: 3,
          stroke: '#F00',
          lineWidth: 1,
        },
        data: [70, 60, 50, 40, 60, 70, 70, 60],
      },
      {
        type: 'b',
        color: '#93F',
        style: 'smooth',
        data: [30, 70, 60, 50, 70, 50, 40, 40],
      },
    ],
    yAxis: {
      tickCount: 3,
      min: 0,
      max: 120,
    },
    legend: {
      position: 'top',
      offsetY: 5
    },
  },
  onReady() {
    setTimeout(() => {
      this.setData({
        cn: 'radar size',
        categories: ["Design", "Development", "Marketing", "Users", "Test", "Language", "Technology", "Support"],
      });
    }, 2000);
  },
});
