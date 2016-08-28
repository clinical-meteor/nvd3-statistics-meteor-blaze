import { Meteor } from 'meteor/meteor';


// Publish complete set of lists to all clients.

Meteor.publish('statistics', function () {
    return Statistics.find();
});

Meteor.publish('barData', function () {
  return BarData.find();
});
Meteor.publish('horizontalBarData', function () {
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
Meteor.publish('cumulativeLineData', function () {
  return CumulativeLineData.find();
});
Meteor.publish('simpleLineData', function () {
  return SimpleLineData.find();
});
Meteor.publish('ultraSimpleLineData', function () {
  return UltraSimpleLineData.find();
});
Meteor.publish('viewFinderLineData', function () {
  return ViewFinderLineData.find();
});
Meteor.publish('multiBarData', function () {
  return MultiBarData.find();
});
Meteor.publish('pieData', function () {
  return PieData.find();
});
Meteor.publish('scatterData', function () {
  return ScatterData.find();
});
Meteor.publish('streamData', function () {
  return StreamData.find();
});
Meteor.publish('sunburstData', function () {
  return SunburstData.find();
});
Meteor.publish('randomData', function () {
  return RandomData.find();
});
