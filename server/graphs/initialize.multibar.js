// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (MultiBarData.find().count() === 0) {
    var shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'];

    var recordId = null;
    for (var i = 0; i < 200; i++) {
      recordId = MultiBarData.insert({
        x: i - (i % 6),
        y: 10 + Math.random()*100 * (Math.floor(Math.random()*100)%2 ? 1 : -1),
        shape: shapes[i % 6],
        timestamp: new Date()
      });
      console.log('new record: ' + recordId);
    }
  }
});
