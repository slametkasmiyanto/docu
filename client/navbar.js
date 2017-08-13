Template.navbar.events({
    "click .keluar-menu": function(event){
        event.preventDefault();
        Meteor.logout(function(err){
            if(err){
                FlashMessages.sendError(err.reason);
            } else {
                FlashMessages.sendSuccess("Anda telah keluar dari sistem.");
                Router.go('/');
            }
        })
    }
});