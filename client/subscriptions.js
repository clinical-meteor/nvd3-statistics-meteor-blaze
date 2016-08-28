Deps.autorun(function () {
  Meteor.subscribe('statistics');

  Meteor.subscribe('cumulativeLineData');
  Meteor.subscribe('multiBarData');
  Meteor.subscribe('randomData');


  Meteor.subscribe('barData');
  Meteor.subscribe('horizontalBarData');
  Meteor.subscribe('bulletData');
  Meteor.subscribe('collapsibleTreeData');
  Meteor.subscribe('streamLayersData');
  Meteor.subscribe('forceDirectData');
  Meteor.subscribe('cumulativeLineData');
  Meteor.subscribe('simpleLineData');
  Meteor.subscribe('ultraSimpleLineData');
  Meteor.subscribe('viewFinderLineData');
  Meteor.subscribe('multiBarData');
  Meteor.subscribe('pieData');
  Meteor.subscribe('scatterData');
  Meteor.subscribe('streamData');
  Meteor.subscribe('sunburstData');

});

