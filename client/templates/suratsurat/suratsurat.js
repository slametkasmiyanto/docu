Template.suratsurat.events({
    'submit .unggahSuratForm': function(event){
        var tanggal = event.target.tanggal.value;
        var nomor = event.target.nomor.value;
        var perihal = event.target.perihal.value;
        var kategori = event.target.kategori.value;
        var sifat = event.target.sifat.value;
        var tujuan = event.target.tujuan.value;
        var pesan = event.target.pesan.value;
    

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

        })

        FlashMessages.sendError("Surat berhasil diunggah.");
        return false;
    }
});