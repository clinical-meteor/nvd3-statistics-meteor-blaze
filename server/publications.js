import { Meteor } from 'meteor/meteor';


// Publish complete set of lists to all clients.

Meteor.publish('statistics', function () {
    return Statistics.find();
});

Meteor.publish('Graphs.BarChart', function () {
  return BarData.find();
});
Meteor.publish('Graphs.HorizontalBarChart', function () {
  return HorizontalBarData.find();
});
Meteor.publish('bulletData', function () {
  return BulletData.find();
});
Meteor.publish('collapsibleTreeData', function () {
  return CollapsibleTreeData.find();
});
Meteor.publish('streamLayersData', function () {
  return StreamLayersData.find();
});
Meteor.publish('forceDirectData', function () {
  return ForceDirectData.find();
});
Meteor.publish('Graphs.CumulativeLineChart', function () {
  return CumulativeLineData.find();
});
Meteor.publish('Graphs.SimpleLineChart', function () {
  return SimpleLineData.find();
});
Meteor.publish('Graphs.LineChart', function () {
  return UltraSimpleLineData.find();
});
Meteor.publish('Graphs.ViewFinder', function () {
  return ViewFinderLineData.find();
});
Meteor.publish('Graphs.MultiBarChart', function () {
  return MultiBarData.find();
});
Meteor.publish('pieData', function () {
  return PieData.find();
});
Meteor.publish('Graphs.ScatterPlot', function () {
  return ScatterData.find();
});
Meteor.publish('Graphs.Stream', function () {
  return StreamData.find();
});
Meteor.publish('sunburstData', function () {
  return SunburstData.find();
});
Meteor.publish('Graphs.RandomData', function () {
  return RandomData.find();
});
