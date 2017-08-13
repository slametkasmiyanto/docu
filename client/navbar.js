Template.navbar.events({
    "click .keluar-menu": function(e){
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