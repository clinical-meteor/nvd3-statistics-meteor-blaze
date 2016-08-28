// if the database is empty on server start, create some sample data.
//Meteor.startup(function () {
//    var fs = __meteor_bootstrap__.require('fs');
//    var data = fs.readFileSync('public/datafile/flare.json', 'utf8');
//
//    if (StatsFile.find().count() === 0) {
//        StatsFile.insert({
//            date:  new Date(),
//            data:  JSON.parse(data)
//        });
//    }
//});
