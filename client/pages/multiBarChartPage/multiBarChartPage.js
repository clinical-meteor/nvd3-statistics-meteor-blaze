Router.map(function () {
  this.route('multiBarChartPage', {
    path: '/multibar',
    template: 'multiBarChartPage',
    waitOn: function () {
      return Meteor.subscribe('multiBarData');
    },
    after: function(){
      renderMultiBarChart();
    }
  });
});

renderMultiBarChart = function(){
  var data = [{
    color: "#ff7f0e",
    key: "Stream0",
    values: MultiBarData.find({shape: 'circle'},{$sort: {x: 1}}).fetch()
  },{
    color: "#d62728",
    key: "Stream1",
    values: MultiBarData.find({shape: 'cross'},{$sort: {x: 1}}).fetch()
  }];

  var chart;
  nv.addGraph({
    generate: function(){
      var width = nv.utils.windowSize().width,
        height = nv.utils.windowSize().height - 40;

      chart = nv.models.multiBarChart();

      chart.xAxis
        .showMaxMin(true)
        .tickFormat(d3.format(',f'));

      chart.yAxis
        .tickFormat(d3.format(',.1f'));

      d3.select('#multiBarChart svg')
        .attr('width', width)
        .attr('height', height)
        .datum(data)
        .transition().duration(500)
        .call(chart);

      nv.utils.windowResize(chart.update);

      //chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

      return chart;
    },
    callback: function(graph){
      window.onresize = function () {
        var width = nv.utils.windowSize().width,
          height = nv.utils.windowSize().height - 40,
          margin = graph.margin();


        if (width < margin.left + margin.right + 20)
          width = margin.left + margin.right + 20;

        if (height < margin.top + margin.bottom + 20)
          height = margin.top + margin.bottom + 20;


        graph.width(width).height(height);

        d3.select('#multiBarChart svg')
          .attr('width', width)
          .attr('height', height)
          .call(graph);
      };
    }
  });
};



Template.multiBarChartPage.resized = function(){
  return Session.get('resize');
};
Template.multiBarChartPage.rendered = function () {
  $('.d3chart').css('height', window.innerHeight - 80);

  var resize = Session.get("resize");
};

Template.multiBarChartPage.destroyed = function () {
  this.handle && this.handle.stop();
  $('#multiBarChart').html('<svg id="multiBarChartCanvas"></svg>');
};
