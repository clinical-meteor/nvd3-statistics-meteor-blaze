Router.map(function () {
  this.route('cumulativeLineGraphPage', {
    path: '/cumulativeline',
    template: 'cumulativeLineGraphPage',
    waitOn: function () {
      return Meteor.subscribe('Graphs.CumulativeLineChart');
    },
    after: function(){
      renderCumulativeLineChart();
    }
  });
});

renderCumulativeLineChart = function(){
  var data = [{
    color: "#ff7f0e",
    key: "Test",
    values: CumulativeLineData.find().fetch()
  }];

    var chart;
    nv.addGraph({
      generate: function(){
        var width = nv.utils.windowSize().width,
          height = nv.utils.windowSize().height - 40;

        chart = nv.models.cumulativeLineChart()
          .width(width)
          .height(height)
          .x(function(d) { return d[0] })
          .y(function(d) { return d[1]/100 })
          .color(d3.scale.category10().range())
          .clipVoronoi(false);

        chart.xAxis
          .tickFormat(function(d) {
            return d3.time.format('%x')(new Date(d))
          });

        chart.yAxis
          .tickFormat(d3.format(',.1%'));

        d3.select('#cumulativeLineGraph svg')
          .attr('width', width)
          .attr('height', height)
          .datum(data)
          .transition().duration(500)
          .call(chart);

        nv.utils.windowResize(chart.update);
        return chart;
      },
      callback: function(graph){
        window.onresize = function() {
          var width = nv.utils.windowSize().width,
            height = nv.utils.windowSize().height - 40,
            margin = graph.margin();


          if (width < margin.left + margin.right + 20)
            width = margin.left + margin.right + 20;

          if (height < margin.top + margin.bottom + 20)
            height = margin.top + margin.bottom + 20;


          graph.width(width)
            .height(height);

          d3.select('#cumulativeLineGraph svg')
            .attr('width', width)
            .attr('height', height)
            .call(graph);
        };
      }
    });
};



Template.cumulativeLineGraphPage.resized = function(){
  return Session.get('resize');
};
Template.cumulativeLineGraphPage.rendered = function () {
  $('.d3chart').css('height', window.innerHeight - 80);

  var resize = Session.get("resize");
};

Template.cumulativeLineGraphPage.destroyed = function () {
  this.handle && this.handle.stop();
  $('#cumulativeLineGraph').html('<svg id="cumulativeLineGraphCanvas"></svg>');
};
