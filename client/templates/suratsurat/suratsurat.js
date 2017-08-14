Template.suratsurat.events({
    "submit .unggahSuratForm": function(event){
        event.preventDefault();
        var tanggal = trimInput(event.target.tanggal.value);
        var nomor = trimInput(event.target.nomor.value);
        var perihal = trimInput(event.target.perihal.value);
        var kategori = trimInput(event.target.kategori.value);
        var sifat = trimInput(event.target.sifat.value);
        var tujuan = trimInput(event.target.tujuan.value);
        var pesan = trimInput(event.target.pesan.value);
        var status = "New";
        

        SuratSurat.insert({
            tanggal: tanggal,
            nomor: nomor,
            perihal: perihal,
            kategori: kategori,
            sifat: sifat,
            tujuan: tujuan,
            pesan: pesan,
            pengirim: Meteor.userId(),
            createdAt: new Date(),
            status: status,
        });

        $('#suratsuratModal').modal('hide');
        //FlashMessages.sendSuccess("Berkas berhasil diunggah.");
        return false;
    },

    'click .ubahStatus': function(){

        if(confirm("Ubah status berkas?")){
            SuratSurat.update({_id : this._id},{$set: {status : "Progress"}});
            
            return false;
        }
    }
});

var trimInput = function(val){
    return val.replace(/^\s*|\s*$/g,"");
}
