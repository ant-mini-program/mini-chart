Page({
  data: {
    cn: 'scatter',
    series: [
      {
        type: 'female',
        color: '#F00',
        size: 3,
        data: [
          {
            "key": 161.2,
            "value": 51.6
          },
          {
            "key": 167.5,
            "value": 59
          },
          {
            "key": 159.5,
            "value": 49.2
          },
          {
            "key": 157,
            "value": 63
          },
          {
            "key": 155.8,
            "value": 53.6
          },
          {
            "key": 170,
            "value": 59
          },
          {
            "key": 159.1,
            "value": 47.6
          },
          {
            "key": 166,
            "value": 69.8
          },
          {
            "key": 176.2,
            "value": 66.8
          },
          {
            "key": 160.2,
            "value": 75.2
          },
          {
            "key": 172.5,
            "value": 55.2
          },
          {
            "key": 170.9,
            "value": 54.2
          },
          {
            "key": 172.9,
            "value": 62.5
          },
          {
            "key": 153.4,
            "value": 42
          },
          {
            "key": 160,
            "value": 50
          },
          {
            "key": 147.2,
            "value": 49.8
          },
          {
            "key": 168.2,
            "value": 49.2
          },
          {
            "key": 175,
            "value": 73.2
          },
          {
            "key": 157,
            "value": 47.8
          },
          {
            "key": 167.6,
            "value": 68.8
          },
          {
            "key": 159.5,
            "value": 50.6
          }
        ],
      },
      {
        type: 'male',
        size: 3,
        data: [
          {
            "key": 170.3,
            "value": 73.2
          },
          {
            "key": 180.3,
            "value": 83.2
          }
        ],
      }
    ],
    style: {
      fillOpacity: 0.3,
    },
    xAxis: {
      tickCount: 5,
    },
    yAxis: {
      tickCount: 5,
    },
    legend: {
      position: 'top',
    },
  },
  onReady() {
    setTimeout(() => {
      this.setData({
        cn: 'scatter size',
        legend: {
          position: 'top',
        },      });
    }, 2000);
  },
});
