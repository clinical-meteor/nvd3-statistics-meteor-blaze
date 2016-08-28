// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (ViewFinderLineData.find().count() === 0) {

    var recordId = null;
    var randomWalk = 0;
    for (var i = 0; i < 100; i++) {
      randomWalk = 0.5 * (Math.random() - 0.5);

      recordId = ViewFinderLineData.insert({
        x: i,
        y:  Math.sin(i/10) + randomWalk,
        timestamp: new Date()
      });
      console.log('new record: ' + recordId);
    }
  }
});
