Page({
  data: {
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
    radius: 0.6,
    style: {
      lineWidth: 2,
      stroke: '#fff',
    },
    legend: {
      position: 'top',
    },
    tooltip:true,
    pieLabel: true, //是否展示标签示例文字,
    activeShape:true,//饼图是否有点击效果
    sidePadding: 40 //标签文字和饼图之间的padding，越大越近，越小越远
  },
});