// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (StreamData.find().count() === 0) {

    var day = moment.unix(1083297600000);

    var recordId = null;
    var randomWalk = 0;
    for (var i = 0; i < 100; i++) {
      randomWalk = 0.5 * (Math.random() - 0.5);

      recordId = StreamData.insert([
          day.add('d', 1).format("X"),
          Math.sin(i/10) + randomWalk
        ]);
      console.log('new record: ' + recordId);
    }
  }
});
