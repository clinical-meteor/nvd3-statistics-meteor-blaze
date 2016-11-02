Router.map(function () {
  this.route('simpleLineGraphPage', {
    path: '/simple',
    template: 'simpleLineGraphPage',
    waitOn: function () {
      return Meteor.subscribe('Graphs.SimpleLineChart');
    },
    after: function(){
      renderSimpleLineChart();
    }
  });
});

renderSimpleLineChart = function(){
  console.log("renderSimpleLineChart");

  var data = [{
    color: "#ff7f0e",
    key: "Sine Wave",
    values: SimpleLineData.find().fetch()
  }];

  var chart;
  nv.addGraph({
    generate: function() {
      var width = nv.utils.windowSize().width,
        height = nv.utils.windowSize().height - 40;

      chart = nv.models.lineChart();

      chart.x(function(d,i) { return i });


      chart.xAxis
        .tickFormat(d3.format(',.1f'));

      chart.yAxis
        .axisLabel('Voltage (v)')
        .tickFormat(d3.format(',.2f'));

      d3.select('#simpleLineGraph svg')
        .datum(data)
        .transition().duration(500)
        .call(chart);

      nv.utils.windowResize(chart.update);

      return chart;
    },
    callback: function(graph) {
      window.onresize = function() {
        var width = nv.utils.windowSize().width,
          height = nv.utils.windowSize().height - 60,
          margin = graph.margin();

        graph
          .width(width)
          .height(height);

        d3.select('#simpleLineGraph svg')
          .attr('width', width)
          .attr('height', height)
          .call(graph);
      };
    }
  });
};



Template.simpleLineGraphPage.resized = function(){
  return Session.get('resize');
};
Template.simpleLineGraphPage.rendered = function () {
  $('.d3chart').css('height', window.innerHeight - 80);

  var resize = Session.get("resize");
};

Template.simpleLineGraphPage.destroyed = function () {
  this.handle && this.handle.stop();
  $('#simpleLineGraph').html('<svg id="simpleLineGraphPageCanvas"></svg>');
};
