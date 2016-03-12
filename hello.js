if (Meteor.isClient) {
    // counter starts at 0
    Session.setDefault('counter', 0);

    Template.NavigationLayout.events({
        'click .logout': function () {
            event.preventDefault();
            console.log("Logout Clicked.");
            Meteor.logout();
        }

    });

    Template.register.events({
        'submit form': function (event) {
            event.preventDefault();
            var emailVar = event.target.registerEmail.value;
            var passwordVar = event.target.registerPassword.value;
            console.log("Form submitted.");
            Accounts.createUser({
                // options go here
                email: emailVar,
                password: passwordVar
            })
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
