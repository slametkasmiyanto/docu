Template.registerHelper('isSekolah', function(){
    if(Meteor.user().profile.usertype == 'sekolah'){
        return true;
    }
});

Template.registerHelper('isUPTD', function(){
    if(Meteor.user().profile.usertype == 'admin'){
        return true;
    }
});

Template.registerHelper('isDisdik', function(){
    if(Meteor.user().profile.usertype == 'disdik'){
        return true;
    }
});


Template.registerHelper('formatTanggalJam', function(date){
    return moment(date).format('Do MMMM YYYY, hh:mm:ss');
});

Template.registerHelper('formatTanggal', function(date){
    return moment(date).format('Do MMMM YYYY');
});

Template.registerHelper('capFirst', function(text){
    return text.charAt[0].toUpperCase() + text.slice(1);
});