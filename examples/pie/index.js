Page({
  data: {
    cn: 'pie',
    series: [
      {
        color: '#F00',
        type: '芳华',
        data: 0.4
      },
      {
        type: '妖猫传',
        data: 0.2
      },
      {
        type: '机器之血',
        data: 0.18
      },
      {
        type: '心理罪',
        data: 0.15
      },
      {
        type: '寻梦环游记',
        data: 0.05
      },
      {
        type: '其他',
        data: 0.02
      },
    ],
    radius: 0.7,
    style: {
      lineWidth: 2,
      stroke: '#fff',
    },
    legend: {
      position: 'top',
    },
    tooltip:true
  },
  onReady() {
    setTimeout(() => {
      this.setData({
        cn: 'pie size',
        radius: 0.6,
      });
    }, 2000);
  },
});
