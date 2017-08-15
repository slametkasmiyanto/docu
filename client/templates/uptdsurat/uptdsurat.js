Template.uptdsurat.helpers({
    'allUsers': function(){
        return Meteor.users.find({});
    },
    'namaSekolah': function(){
        //return Meteor.user().emails[0].address;
        return this.profile.nama;
    },
    'suratMasuk': function(){
        return SuratSurat.find({tujuanId: namaSekolah});
    } 
});

Template.uptdsurat.events({
    "submit .unggahSuratForm": function(event){
        event.preventDefault();
        var tanggal = trimInput(event.target.tanggal.value);
        var nomor = trimInput(event.target.nomor.value);
        var perihal = trimInput(event.target.perihal.value);
        var kategori = trimInput(event.target.kategori.value);
        var sifat = trimInput(event.target.sifat.value);
        var tujuanId = trimInput(event.target.tujuan.value);
        var pesan = trimInput(event.target.pesan.value);
        var status = "New";
        var pengirimNama = Meteor.user().profile.nama;
        //var tujuanId = '';

        SuratSurat.insert({
            tanggal: tanggal,
            nomor: nomor,
            perihal: perihal,
            kategori: kategori,
            sifat: sifat,
            tujuanId: tujuanId,
            //tujuanNama: Meteor.user().profile.nama,
            pesan: pesan,
            pengirimId: Meteor.userId(),
            pengirimNama: pengirimNama,
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
    },

    /*'click .tabel-berkas-masuk': function(event){
        $('.panel-tabel-keluar').hide();
        $('.btn-tabel-masuk').hide();
        $('.btn-tabel-keluar').show();
        $('.panel-tabel-masuk').show();
    },
    'click .tabel-berkas-keluar': function(event){
        $('.panel-tabel-masuk').hide();
        $('.btn-tabel-keluar').hide();
        $('.btn-tabel-masuk').show();
        $('.panel-tabel-keluar').show();
    }*/

});

var trimInput = function(val){
    return val.replace(/^\s*|\s*$/g,"");
}
