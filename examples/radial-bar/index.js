Page({
  data: {
    series: [
      {
        color: '#F00',
        key:'1',
        type: '芳华',
        data: 0.4
      },
      {
        key:'2',
        type: '芳华',
        data: 0.8
      },
      {
        key:'3',
        type: '芳华',
        data: 0.2
      },
      {
        key:'1',
        type: '妖猫传',
        data: 0.6
      },
      {
        key:'2',
        type: '妖猫传',
        data: 0.2
      },
      {
        key:'3',
        type: '妖猫传',
        data: 0.8
      }
    ],
    cascade: true, //是否展示环图
    innerRadius: 0.5,//环图内半径
    radius: 0.6,
    style: {
      lineWidth: 2,
      stroke: '#fff',
    },
    legend: {
      position: 'top',
    },
    tooltip:true
  },
});