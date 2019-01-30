Page({
  data: {
    charts: [
      { name: 'line', value: '折线图' },
    ],
  },
  gotoPage: function(e) {
    var page = e.currentTarget.dataset.page;
    my.navigateTo({
      url: '../' + page + '/index',
    });
  },
  onLoad: function() {
  },
});
