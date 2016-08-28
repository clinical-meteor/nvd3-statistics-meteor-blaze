// if the database is empty on server start, create some sample data.
Meteor.startup(function () {

  if (BarData.find().count() === 0) {

    var data = [
      {name: "Registered - Insurance"},
      {name: "Registered - Hospital"},
      {name: "Public"}
    ];

    var recordId = null;
    for (var i = 0; i < data.length; i++) {
      recordId = BarData.insert({
        name: data[i].name,
        timestamp: new Date()
      });
      console.log('new record: ' + recordId);
    }
  }
});
