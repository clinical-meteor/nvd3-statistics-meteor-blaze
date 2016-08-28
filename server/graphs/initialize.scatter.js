Meteor.startup(function () {
  if (ScatterData.find().count() === 0) {
    var shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'];

    var recordId = null;
    for (var i = 0; i < 40; i++) {
      recordId = ScatterData.insert({
        x: Math.random(),
        y: Math.random(),
        size: Math.random(),
        shape: shapes[i % 6],
        timestamp: new Date()
      });
      console.log('new record: ' + recordId);
    }
  }
  if (RandomData.find().count() === 0) {
    var shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'];

    var recordId = null;
    for (var i = 0; i < 40; i++) {
      recordId = RandomData.insert({
        x: Math.random(),
        y: Math.random(),
        size: Math.random(),
        shape: shapes[i % 6],
        timestamp: new Date()
      });
      console.log('new record: ' + recordId);
    }
  }
});
