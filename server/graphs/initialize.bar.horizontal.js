// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (HorizontalBarData.find().count() === 0) {
    var shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'];

    var recordId = null;
    var multiplier = 1;
    var seriesName = 'positive';

    for (var i = 0; i < 12; i++) {
      if((i <= 5)){
        multiplier = 1;
        seriesName = 'positive';
      }else{
        multiplier = -1;
        seriesName = 'negative';
      }
      recordId = HorizontalBarData.insert({
        x: i - (i % 6),
        value: multiplier * Math.random()*20,
        label: shapes[i % 6],
        series: seriesName,
        timestamp: new Date()
      });
      console.log('new record: ' + recordId);
    }
  }
});
