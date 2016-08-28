import { Meteor } from 'meteor/meteor';

Meteor.methods({
    getEnvironment: function(){
      if (process.env.NODE_ENV) {
        return process.env.NODE_ENV;
      } else {
        return "test";
      }
    }
});
