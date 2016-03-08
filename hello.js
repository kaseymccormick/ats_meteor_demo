if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
  Template.vendor-management.events({
  'submit form': function(){
    eevent.preventDefault();
    var playerNameVar = event.target.playerName.value;
    PlayersList.insert({
      name: playerNameVar,
      score: 0
    });
  }
  });
}
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
