// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (SimpleLineData.find().count() === 0) {

    var recordId = null;
    for (var i = 0; i < 100; i++) {
      recordId = SimpleLineData.insert({
        x: i,
        y:  Math.sin(i/10),
        cos: Math.sin(i/10),
        timestamp: new Date()
      });
      console.log('new record: ' + recordId);
    }
  }
});
