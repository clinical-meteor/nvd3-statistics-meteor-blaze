Session.setDefault('selectedRecord', false);
Session.setDefault('sidebarsVisible', false);






Template.leftSidebar.helpers({
  getSelectedRecord: function (){
    return Session.get('selectedRecord');
  },
  currentRecord: function (){
    if(Session.get('selectedRecord')){
      return UltraSimpleLineData.findOne(Session.get('selectedRecord'));
    }
  },
  getVisibility: function(){
    if(Session.get('sidebarsVisible')){
      return "visible";
    }else{
      return "hidden";
    }
  }
});


Template.rightSidebar.helpers({
  sidebarList: function (){
    return UltraSimpleLineData.find();
  },
  getVisibility: function (){
    if(Session.get('sidebarsVisible')){
      return "visible";
    }else{
      return "hidden";
    }
  },
  data_title: function(){
    if(Session.get('data_inspection_title')){
      return Session.get('data_inspection_title');
    }else{
      return "Title not available.";
    }
  },
  data_size: function(){
    if(Session.get('data_inspection_size')){
      return Session.get('data_inspection_size');
    }else{
      return "this is a size: 1000";
    }
  },
  data_color: function(){
    if(Session.get('data_inspection_color')){
      return Session.get('data_inspection_color');
    }else{
      return "#4488aa";
    }
  }
});


Template.rightSidebar.events({
  'click .list-group-item':function(){
    Session.set('selectedRecord', this._id);
  }
});
