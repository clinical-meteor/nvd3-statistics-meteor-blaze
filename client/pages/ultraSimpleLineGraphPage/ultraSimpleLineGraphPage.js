Router.map(function () {
  this.route('ultraSimpleLineGraphPage', {
    path: '/ultrasimple',
    template: 'ultraSimpleLineGraphPage',
    waitOn: function () {
      return Meteor.subscribe('Graphs.LineChart');
    },
    after: function(){
      renderUltraSimpleLineChart();
    }
  });
});


renderUltraSimpleLineChart = function(){
  var data = [{
    color: "#ff7f0e",
    key: "Sine Wave",
    values: UltraSimpleLineData.find().fetch()
  }];


  var chart;
  nv.addGraph({
    generate: function() {
      var width = nv.utils.windowSize().width,
        height = nv.utils.windowSize().height - 40;

      chart = nv.models.line()
        .width(width)
        .height(height)
        .margin({top: 20, right: 0, bottom: 60, left: 0})


      d3.select('#ultraSimpleLineGraph svg')
        .attr('width', width)
        .attr('height', height)
        .datum(data)
        .transition().duration(500)
        .call(chart);

      nv.utils.windowResize(chart.update);

      return chart;
    },
    callback: function(graph) {
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

        d3.select('#ultraSimpleLineGraph svg')
          .attr('width', width)
          .attr('height', height)
          .call(graph);
      };
    }
  });
};


Template.ultraSimpleLineGraphPage.resized = function(){
  return Session.get('resize');
};
Template.ultraSimpleLineGraphPage.rendered = function () {
  $('.d3chart').css('height', window.innerHeight - 80);

  var resize = Session.get("resize");
};

Template.ultraSimpleLineGraphPage.destroyed = function () {
  this.handle && this.handle.stop();
  $('#ultraSimpleLineGraph').html('<svg id="ultraSimpleLineGraphCanvas"></svg>');
};
