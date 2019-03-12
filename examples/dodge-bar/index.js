Page({
  data: {
    categories: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri."],
    series: [
      {
        type: 'a',
        color: '#F00',
        data: [2800, 1800, 950, 500, 170],
      },
      {
        type: 'b',
        data: [2260, 1300, 900, 390, 100],
      }
    ],
    xAxis: {
      tickCount: 5,
    },
    yAxis: {
      tickCount: 4,
    },
    adjust: 'dodge',
    coord: {
      transposed: true,
    },
  },
});
