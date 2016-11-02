// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (UltraSimpleLineData.find().count() === 0) {

    var recordId = null;
    for (var i = 0; i < 100; i++) {
      recordId = UltraSimpleLineData.insert({
        x: i,
        y:  Math.sin(i/10),
        // cos: Math.sin(i/10),
        timestamp: new Date()
      });
      console.log('new record: ' + recordId);
    }
  }

//  setInterval(function(){
//    recordId = UltraSimpleLineData.insert({
//      x: i,
//      y:  Math.sin(i/10),
//      cos: Math.sin(i/10),
//      timestamp: new Date()
//    });
//    console.log('new record: ' + recordId);
//  }, 1000);


});




//// if the database is empty on server start, create some sample data.
//Meteor.startup(function () {
//
////  sinAndCos = function() {
////    var sin = [],
////      cos = [];
////
////    for (var i = 0; i < 100; i++) {
////      sin.push({x: i, y: Math.sin(i/10)});
////      cos.push({x: i, y: .5 * Math.cos(i/10)});
////    }
////
////    return [
////      {
////        values: sin,
////        key: "Sine Wave",
////        color: "#ff7f0e"
////      },
////      {
////        values: cos,
////        key: "Cosine Wave",
////        color: "#2ca02c"
////      }
////    ];
////  }
//
//});
