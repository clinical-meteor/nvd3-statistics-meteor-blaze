Router.map(function () {
  this.route('horizontalBarChartPage', {
    path: '/horizontalbar',
    template: 'horizontalBarChartPage',
    waitOn: function () {
      return Meteor.subscribe('horizontalBarData');
    },
    after: function(){
      renderHorizontalBarChart();
    }
  });
});


renderHorizontalBarChart = function(){
  var data = [{
    color: "#ff7f0e",
    key: "Stream0",
    values: HorizontalBarData.find({series: 'negative'},{$sort: {x: 1}}).fetch()
  },{
    color: "#d62728",
    key: "Stream1",
    values: HorizontalBarData.find({series:'positive'},{$sort: {x: 1}}).fetch()
  }];

  var chart;
  nv.addGraph(function() {

    chart = nv.models.multiBarHorizontalChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .margin({top: 30, right: 20, bottom: 50, left: 175})
      .showValues(true)
      .tooltips(false)
      .showControls(false);

    chart.yAxis
      .tickFormat(d3.format(',.2f'));

    d3.select('#horizontalBarChart svg')
      .datum(data)
      //.transition().duration(500)
      .call(chart);

    nv.utils.windowResize(chart.update);

    chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });
    return chart;
  });
};

Template.horizontalBarChartPage.resized = function(){
  return Session.get('resize');
};
Template.horizontalBarChartPage.rendered = function () {
  $('.d3chart').css('height', window.innerHeight - 80);

  var resize = Session.get("resize");
};

Template.horizontalBarChartPage.destroyed = function () {
  this.handle && this.handle.stop();
  $('#horizontalBarChart').html('<svg id="horizontalBarChartCanvas"></svg>');
};
