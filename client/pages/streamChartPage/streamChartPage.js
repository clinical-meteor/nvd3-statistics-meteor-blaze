Router.map(function () {
  this.route('streamChartPage', {
    path: '/stream',
    template: 'streamChartPage',
    waitOn: function () {
      return Meteor.subscribe('Graphs.Stream');
    },
    after: function(){
      renderStreamChart();
    }
  });
});


renderStreamChart = function(){
  var data = [{
    key: "Stream0",
    values: StreamData.find().fetch()
  }];

  /*
   .map(function(series) {
   series.values = series.values.map(function(d) {
   return { x: d[0], y: d[1] }
   });
   return series;
   });
   */

//an example of harmonizing colors between visualizations
//observe that Consumer Discretionary and Consumer Staples have
//been flipped in the second chart
  var colors = d3.scale.category20();
  keyColor = function(d, i) {return colors(d.key)};

  var chart;
  nv.addGraph({
    generate: function(){
      var width = nv.utils.windowSize().width,
        height = nv.utils.windowSize().height - 40;
      
      chart = nv.models.stackedAreaChart()
        .x(function(d) { return d[0] })
        .y(function(d) { return d[1] })
        .color(keyColor);

      chart.xAxis
        .tickFormat(function(d) { return d3.time.format('%x')(new Date(d)) });

      chart.yAxis
        .tickFormat(d3.format(',.2f'));

      d3.select('#streamChart svg')
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


        graph
          .width(width)
          .height(height);

        d3.select('#streamChart svg')
          .attr('width', width)
          .attr('height', height)
          .call(graph);
      };
    }
  });
};




Template.streamChartPage.resized = function(){
  return Session.get('resize');
};
Template.streamChartPage.rendered = function () {
  $('.d3chart').css('height', window.innerHeight - 80);

  var resize = Session.get("resize");
};

Template.streamChartPage.destroyed = function () {
  this.handle && this.handle.stop();
  $('#streamChart').html('<svg id="streamChartCanvas"></svg>');
};
