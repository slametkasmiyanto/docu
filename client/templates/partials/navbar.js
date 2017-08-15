Template.navbar.helpers({
    'namaUser': function(){
        if(Meteor.user()){
            //return Meteor.user().emails[0].address;
            return Meteor.user().profile.nama;
        }
    }
    /*"namaUser": function(){
        return Meteor.user().profile.nama;
    },*/
});

Template.navbar.events({
    'click .keluar-menu': function(event){
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