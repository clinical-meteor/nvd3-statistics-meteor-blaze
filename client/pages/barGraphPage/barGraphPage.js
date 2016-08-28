Router.map(function () {
  this.route('barChartPage', {
    path: '/barchart',
    template: 'barChartPage',
    waitOn: function () {
      return Meteor.subscribe('horizontalBarData');
    },
    after: function(){
      renderBarChart();
    }
  });
});


renderBarChart = function(){
  var data = [{
    color: "#ff7f0e",
    key: "Stream0",
    values: HorizontalBarData.find({series: 'positive'},{$sort: {x: 1}}).fetch()
  }];

  var chart;
  nv.addGraph({
    generate: function(){
      var width = nv.utils.windowSize().width,
        height = nv.utils.windowSize().height - 40;

      chart = nv.models.discreteBarChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
        .staggerLabels(true)
        //.staggerLabels(historicalBarChart[0].values.length > 8)
        .tooltips(false)
        .showValues(true)

      d3.select('#barChart svg')
        .datum(data)
        //.transition().duration(500)
        .call(chart);

      nv.utils.windowResize(chart.update);

      return chart;

    },
    callback: function(graph){
      window.onresize = function () {
        var width = nv.utils.windowSize().width,
          height = nv.utils.windowSize().height - 80;
          //margin = graph.margin();


//        if (width < margin.left + margin.right + 20)
//          width = margin.left + margin.right + 20;
//
//        if (height < margin.top + margin.bottom + 20)
//          height = margin.top + margin.bottom + 20;


        graph.width(width).height(height);

        d3.select('#barChart svg')
          .attr('width', width)
          .attr('height', height)
          .call(graph);
      };
    }
  });
};


Template.barChartPage.resized = function(){
  return Session.get('resize');
};
Template.barChartPage.rendered = function () {
  $('.d3chart').css('height', window.innerHeight - 80);

  var resize = Session.get("resize");
};

Template.barChartPage.destroyed = function () {
  this.handle && this.handle.stop();
  $('#barChart').html('<svg id="barChartCanvas"></svg>');
};
