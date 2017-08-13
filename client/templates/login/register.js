Template.register.events({
    "submit .form-signup": function(event){
        event.preventDefault();
        var email = trimInput(event.target.email.value);
        var password = trimInput(event.target.password.value);
        var password2 = trimInput(event.target.password2.value);
        var nama = trimInput(event.target.nama.value);
        //var namaBelakang = trimInput(event.target.namaBelakang.value);
        
        if(password == password2){
            Accounts.createUser({
                email: email,
                password: password,
                profile: {
                    nama: nama,
                    //nama_belakang: namaBelakang
                }
            }, function(err){
                if(err){
                    FlashMessages.sendError("Ada kesalahan dalam pembuatan Akun.")
                } else {
                    FlashMessages.sendSuccess("Pembuatan Akun berhasil.")
                    Router.go('/');
                }
            });
        } else {
            FlashMessages.sendError("Kata Sandi tidak sama.");
        } 
        return false;
    }
});

var trimInput = function(val){
    return val.replace(/^\s*|\s*$/g,"");
}
