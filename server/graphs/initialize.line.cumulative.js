// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (CumulativeLineData.find().count() === 0) {

    var day = moment.unix(1083297600000);

    var recordId = null;
    var lastValue = 0;

    for (var i = 0; i < 100; i++) {
      newValue = lastValue + Math.random();
      recordId = CumulativeLineData.insert({
        0:  day.add('d', 1).format("X"),
        1:  newValue
      });
      lastValue = newValue;
      console.log('new record: ' + recordId);
    }
  }
});
