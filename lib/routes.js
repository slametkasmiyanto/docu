Router.configure({
    layoutTemplate: 'loginformlayout'
});

Router.map(function(){
    this.route('login', {
        name: 'login',
        path: '/',
        template: 'login',
    });
    this.route('register', {
        name: 'register',
        path: '/register',
        template: 'register',
    });
    this.route('dashboard', {
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

});