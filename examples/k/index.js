Page({
  data: {
    cn: 'k',
    series: [
      {
        time: '2015-10-09',
        start: 6.1,
        max: 6.44,
        min: 6.08,
        end: 6.34
      },
      {
        time: '2015-10-12',
        start: 6.29,
        max: 6.89,
        min: 6.29,
        end: 6.69
      },
      {
        time: '2015-10-13',
        start: 6.55,
        max: 6.81,
        min: 6.55,
        end: 6.75
      },
      {
        time: '2015-10-14',
        start: 6.7,
        max: 6.99,
        min: 6.61,
        end: 6.66
      },
      {
        time: '2015-10-15',
        start: 6.63,
        max: 6.9,
        min: 6.6,
        end: 6.89
      },
      {
        time: '2015-10-16',
        start: 6.92,
        max: 7.38,
        min: 6.73,
        end: 7.15
      },
      {
        time: '2015-10-19',
        start: 7.1,
        max: 7.14,
        min: 6.8,
        end: 6.94
      },
      {
        time: '2015-10-20',
        start: 6.88,
        max: 7.19,
        min: 6.85,
        end: 7.12
      },
      {
        time: '2015-10-21',
        start: 7.08,
        max: 7.1,
        min: 6.41,
        end: 6.41
      },
      {
        time: '2015-10-22',
        start: 6.38,
        max: 6.67,
        min: 6.34,
        end: 6.65
      },
      {
        time: '2015-10-23',
        start: 6.71,
        max: 6.85,
        min: 6.58,
        end: 6.79
      },
      {
        time: '2015-10-26',
        start: 6.9,
        max: 7.08,
        min: 6.87,
        end: 6.95
      },
      {
        time: '2015-10-27',
        start: 6.91,
        max: 7.31,
        min: 6.48,
        end: 7.18
      },
      {
        time: '2015-10-28',
        start: 7.01,
        max: 7.14,
        min: 6.8,
        end: 6.85
      },
      {
        time: '2015-10-29',
        start: 6.94,
        max: 7.2,
        min: 6.8,
        end: 7.05
      },
      {
        time: '2015-10-30',
        start: 6.98,
        max: 7.27,
        min: 6.84,
        end: 7.18
      },
      {
        time: '2015-11-02',
        start: 7.09,
        max: 7.44,
        min: 6.93,
        end: 7.17
      },
      {
        time: '2015-11-03',
        start: 7.1,
        max: 7.17,
        min: 6.82,
        end: 7
      },
      {
        time: '2015-11-04',
        start: 7.01,
        max: 7.5,
        min: 7.01,
        end: 7.46
      },
      {
        time: '2015-11-05',
        start: 7.48,
        max: 7.57,
        min: 7.29,
        end: 7.48
      },
      {
        time: '2015-11-06',
        start: 7.52,
        max: 7.71,
        min: 7.48,
        end: 7.64
      },
      {
        time: '2015-11-09',
        start: 7.65,
        max: 7.66,
        min: 7.3,
        end: 7.58
      },
      {
        time: '2015-11-10',
        start: 7.5,
        max: 7.68,
        min: 7.44,
        end: 7.57
      },
      {
        time: '2015-11-11',
        start: 7.55,
        max: 7.81,
        min: 7.49,
        end: 7.8
      },
      {
        time: '2015-11-12',
        start: 7.76,
        max: 8.18,
        min: 7.61,
        end: 8.15
      },
      {
        time: '2015-11-13',
        start: 8.01,
        max: 8.75,
        min: 7.97,
        end: 8.41
      },
      {
        time: '2015-11-16',
        start: 8.18,
        max: 8.69,
        min: 8.05,
        end: 8.62
      },
      {
        time: '2015-11-17',
        start: 8.7,
        max: 8.78,
        min: 8.32,
        end: 8.37
      },
      {
        time: '2015-11-18',
        start: 8.37,
        max: 8.6,
        min: 8.03,
        end: 8.09
      },
      {
        time: '2015-11-19',
        start: 8.18,
        max: 8.33,
        min: 7.98,
        end: 8.32
      }
    ],
    xAxis: {
      tickCount: 3,
    },
    yAxis: {
      tickCount: 3,
    },
    guide: {
      line: {
        start: ['min', 7],
        end: ['max', 7],
        style: {
          lineDash: [8],
          stroke: '#F68300'
        }
      },
      text: {
        position: ['min', 7],
        content: 7,
        style: {
          fill: '#808080',
          textAlign: 'start',
          textBaseline: 'bottom',
          fontSize: 10,
          fontWeight: 'bold'
        },
        offsetX: 2
      },
    },
  },
  onReady() {
    setTimeout(() => {
      this.setData({
        cn: 'k size',
        xAxis: {
          tickCount: 3,
        },
      });
    }, 2000);
  },
});
