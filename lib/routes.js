Router.configure({
    layoutTemplate: 'layout'
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
                suratsurat: SuratSurat.find({pengirim: Meteor.userId()}),
                jmlsuratsurat: SuratSurat.find({pengirim: Meteor.userId()}).count()
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