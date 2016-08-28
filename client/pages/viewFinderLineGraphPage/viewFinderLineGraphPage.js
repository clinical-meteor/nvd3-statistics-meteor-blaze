Router.map(function () {
  this.route('viewFinderLineGraphPage', {
    path: '/viewfinder',
    template: 'viewFinderLineGraphPage',
    waitOn: function () {
      return Meteor.subscribe('viewFinderLineData');
    },
    after: function(){
      renderLineChartWithViewFinder();
    }
  });
});

renderLineChartWithViewFinder = function(){
  var data = [{
    key: "Stream0",
    values: ViewFinderLineData.find().fetch()
  }];


  nv.addGraph({
    generate: function(){
      var chart = nv.models.lineWithFocusChart();

      chart.xAxis
        .tickFormat(d3.format(',f'));
      chart.x2Axis
        .tickFormat(d3.format(',f'));

      chart.yAxis
        .tickFormat(d3.format(',.2f'));
      chart.y2Axis
        .tickFormat(d3.format(',.2f'));

      d3.select('#viewFinderLineGraph svg')
        .datum(data)
        .transition().duration(500)
        .call(chart);

      nv.utils.windowResize(chart.update);

      return chart;
    },
    callback: function(graph){
      window.onresize = function() {
        var width = nv.utils.windowSize().width,
          height = nv.utils.windowSize().height - 80,
          margin = graph.margin();


        if (width < margin.left + margin.right + 20)
          width = margin.left + margin.right + 20;

        if (height < margin.top + margin.bottom + 20)
          height = margin.top + margin.bottom + 20;


        graph.width(width)
          .height(height);

        d3.select('#viewFinderLineGraph svg')
          .attr('width', width)
          .attr('height', height)
          .call(graph);
      };
    }
  });
};



Template.viewFinderLineGraphPage.resized = function(){
  return Session.get('resize');
};
Template.viewFinderLineGraphPage.rendered = function () {
  $('.d3chart').css('height', window.innerHeight - 80);

  var resize = Session.get("resize");
};

Template.viewFinderLineGraphPage.destroyed = function () {
  this.handle && this.handle.stop();
  $('#viewFinderLineGraph').html('<svg id="ultraSimpleLineGraphCanvas"></svg>');
};
