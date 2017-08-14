Template.surat.events({
    "submit .tambah-reply": function(event){
        var reply = event.target.reply.value;

        if(Meteor.user().profile.usertype == 'admin'){
            usertype = 'admin';
        } else {
            usertype = 'sekolah';
        }

        SuratSurat.update({
            _id: this._id
        }, {
            $push: {
                replies: {
                    reply: reply,
                    usertype: usertype,
                    user: Meteor.userId(),
                    replyDate: new Date()
                }
            }
        });
        event.target.reply.value = '';
        FlashMessages.sendSuccess("Balasan ditambahkan.");
        return false;
        
    }
});