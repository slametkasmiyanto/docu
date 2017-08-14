Template.login.events({
    "submit .form-signin": function(event){
        event.preventDefault();
        var email = trimInput(event.target.email.value);
        var password = trimInput(event.target.password.value);
        
        Meteor.loginWithPassword(email, password, function (err){
                if(err){
                    event.target.email.value = email;
                    event.target.password.value = password;
                    FlashMessages.sendError(err.reason);
                } else {
                    FlashMessages.sendSuccess("Anda berhasil masuk ke sistem");
                    //Router.go('/dashboard');
                    Router.go('/suratsurat');
                }
            }
        )
        return false;
    }
});

var trimInput = function(val){
    return val.replace(/^\s*|\s*$/g,"");
}