if (Meteor.isClient) {
    // counter starts at 0
    Session.setDefault('counter', 0);

    Template.NavigationLayout.events({
        'click .logout': function () {
            console.log("Logout Clicked.");
            Meteor.logout();
        }

    });

    Template.NavigationLayout.helpers({
        firstName: function () {
            return Meteor.user().profile.firstName;
        },
        lastName: function () {
            return Meteor.user().profile.lastName;
        }
    });
    Template.register.events({
        'submit form': function (event) {

            var emailVar = event.target.registerEmail.value;
            var passwordVar = event.target.registerPassword.value;
            var fnameVar = event.target.registerFname.value;
            var lnameVar = event.target.registerLname.value;
            console.log("Form submitted.");
            Accounts.createUser({
                // options go here
                email: emailVar,
                password: passwordVar,
                profile: {
                    firstName: fnameVar,
                    lastName: lnameVar
                }
            })
        }
    });
    Template.body.events({
        'click button.modal': function(event, template) {
            var name = template.$(event.target).data('modal-template');
            Session.set('activeModal', name);
        }
    });

    Template.modal.helpers({
        activeModal: function() {
            return Session.get('activeModal');
        }
    });
    Template.login.events({
        'submit form': function (event) {
            event.preventDefault();
            var emailVar = event.target.loginEmail.value;
            var passwordVar = event.target.loginPassword.value;
            console.log("Form submitted.");
            Meteor.loginWithPassword(emailVar, passwordVar);
        }
    });
    showTab = function() {
        //var classes = document.getElementById("vm-sub").classList
        //
        //$.each( classes , function(x) {
        //
        //        if( x="hidden") {
        //            classes.removeClass("hidden")
        //        } else {
        //            classes.addClass("hidden")
        //        }
        //    });
        //
        //
        //

    document.getElementById("vm-sub").className += "visible"
    }
}


if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
