// Client-side JavaScript, bundled and sent to client.


// ID of currently selected page
Session.set('current_page', '#graphsPage');
Session.set("selected_graph","");
Session.set("anchor_image", "");




Template.app_container.onRendered(function(){
    hidePages();
    showCurrentSessionPage();
});

Template.app_container.helpers({
  anchorImage: function (){
    return Session.get("anchor_image");
  },
  loggedIn: function(){
    if(Meteor.userId()){
        log_event('Meteor.userId(): ' + Meteor.userId(), LogLevel.Info);
        return true;
    }else{
        log_event('Meteor.userId() is null.', LogLevel.Info);
        return false;
    }
  }
});



Template.headerNavbar.helpers({
  getSelectedGraph: function (){
    return Session.get('selected_graph');
  }
});


Meteor.startup(function () {
    $(window).resize(function(evt) {
        Session.set("resize", new Date());
    });

    hidePages();
    showHomePage();
});



Template.registerHelper("resized", function (argument){
  return Session.get('resize');
});
