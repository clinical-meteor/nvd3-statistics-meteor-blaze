Router.map(function () {
  this.route('scatterPlotPage', {
    path: '/scatter',
    template: 'scatterPlotPage',
    waitOn: function () {
      return Meteor.subscribe('scatterData');
    },
    after: function(){
      renderScatterPlotChart();
    }
  });
});

renderScatterPlotChart = function(){
  var data = [{
    color: "#ff7f0e",
    key: "Group 0",
    slope: Math.random(),
    intercept: Math.random(),
    values: RandomData.find().fetch()
  }];

  var chart;
  nv.addGraph({
    generate: function(){

      chart = nv.models.scatterPlusLineChart()
        //chart = nv.models.scatterChart()
        .showDistX(true)
        .showDistY(true)
        //.height(500)
        .useVoronoi(true)
        .color(d3.scale.category10().range());

      chart.xAxis.tickFormat(d3.format('.02f'))
      chart.yAxis.tickFormat(d3.format('.02f'))

      d3.select('#scatterPlot svg')
        .datum(data)
        .transition().duration(500)
        .call(chart);

      nv.utils.windowResize(chart.update);

      chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

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

        d3.select('#scatterPlot svg')
          .attr('width', width)
          .attr('height', height)
          .call(graph);
      };
    }
  });
};




Template.scatterPlotPage.helpers({
  resized: function (){
    return Session.get('resize');
  }
});

Template.scatterPlotPage.onRendered(function(){
  $('.d3chart').css('height', window.innerHeight - 80);

  var resize = Session.get("resize");
});

Template.scatterPlotPage.onDestroyed(function(){
  this.handle && this.handle.stop();
  $('#scatterPlot').html('<svg id="scatterPlotCanvas"></svg>');
});
