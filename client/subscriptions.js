Deps.autorun(function () {
  Meteor.subscribe('statistics');

  Meteor.subscribe('Graphs.CumulativeLineChart');
  Meteor.subscribe('Graphs.MultiBarChart');
  Meteor.subscribe('Graphs.RandomData');


  Meteor.subscribe('Graphs.BarChart');
  Meteor.subscribe('Graphs.HorizontalBarChart');
  Meteor.subscribe('bulletData');
  Meteor.subscribe('collapsibleTreeData');
  Meteor.subscribe('streamLayersData');
  Meteor.subscribe('forceDirectData');
  Meteor.subscribe('Graphs.CumulativeLineChart');
  Meteor.subscribe('Graphs.SimpleLineChart');
  Meteor.subscribe('Graphs.LineChart');
  Meteor.subscribe('Graphs.ViewFinder');
  Meteor.subscribe('Graphs.MultiBarChart');
  Meteor.subscribe('pieData');
  Meteor.subscribe('Graphs.ScatterPlot');
  Meteor.subscribe('Graphs.Stream');
  Meteor.subscribe('sunburstData');

});

