Router.configure({
    layoutTemplate: 'layout'
});


var onBeforeAct = {
    isUPTD: function(){
        if(Meteor.user()){
            if(Meteor.user().profile.usertype == 'admin'){
                Router.go('/uptd');
            } else {
                this.next();
            }
        } else {
            this.next();
        }
    }
};

Router.onBeforeAction(onBeforeAct.isUPTD, {
    only: ['suratsurat']
});


Router.map(function(){
    this.route('login', {
        layoutTemplate: "loginformlayout",
        name: 'login',
        path: '/',
        template: 'login',
    });
    this.route('register', {
        layoutTemplate: "loginformlayout",
        name: 'register',
        path: '/register',
        template: 'register',
    });
/*    this.route('dashboard', {
        layoutTemplate: 'dashboardlayout',
        name: 'dashboard',
        path: '/dashboard',
        template: 'dashboard',
        onBeforeAction: function(){
            if(!Meteor.user()){
                Router.go('/');
            }
            this.next();
        }
    });
*/
    this.route('suratsurat', {
        name: 'suratsurat',
        path: '/suratsurat',
        template: 'suratsurat',
        data: function(){
            templateData = {
                suratsurat: SuratSurat.find({pengirimId: Meteor.userId()}),
                jmlsuratsurat: SuratSurat.find({pengirimId: Meteor.userId()}).count(),
                //suratMasuk: SuratSurat.find({tujuanId: namaSekolah}),
                jmlsuratMasuk: SuratSurat.find({tujuanId: Meteor.userId()}).count(),
            }; 
            return templateData;
        },
        onBeforeAction: function(){
            if(!Meteor.userId()){
                Router.go('/');
            }
            this.next();
        }
    });

    this.route('surat', {
        path: '/surat/:_id',
        template: 'surat',
        data: function(){
            var berkas = this.params._id;
            return SuratSurat.findOne({_id: berkas})
        }
    });

    this.route('uptd', {
        path: '/uptd',
        template: 'uptdsurat',
        data: function(){
            templateData = {
                suratsurat: SuratSurat.find(),
                jmlsuratsurat: SuratSurat.find().count()
                /*suratsurat: SuratSurat.find({pengirimId: Meteor.userId()}),
                jmlsuratsurat: SuratSurat.find({pengirimId: Meteor.userId()}).count(),
                suratMasuk: SuratSurat.find({tujuanId: 'admin'}),
                jmlsuratMasuk: SuratSurat.find({pengirimId: Meteor.userId()}).count(),
                //daftarSekolah: Meteor.user().find(),*/
            }; 
            return templateData;
        },
        onBeforeAction: function(){
            if(!Meteor.userId()){
                Router.go('/');
            }
            this.next();
        }
    });

});