let Query = require("./query");
let Process = 
[
    {
        name : "SATIŞ FATURA - CARI HAR", //GÖRÜNEN ADI
        source : //KAYNAK VERİTABANI BAĞLANTISI
        {
            server: "192.168.100.12",
            database:"MikroDB_V16_TESTALI",
            uid:"beka",
            pwd:"1122334455"
        },
        target : //HEDEF VERİTABANI BAĞLANTISI
        {
            server: "192.168.100.12",
            database:"MikroDB_V16_TESTMAHIR",
            uid:"beka",
            pwd:"1122334455"
        },
        auto : 3000,  //OTOMATİK AKTARIM YAPILACAKSA BURAYA MİLİSANİYE CİNSİNDEN SÜRE YAZILIR (1000 = 1 SN) UNDEFINED VEYA BU KEY TANIMLANMAZSA OTOMATİK AKTARILMAZ.
        select : 
        {
            query : "SELECT * FROM CARI_HESAP_HAREKETLERI WHERE cha_evrak_tip = 63"
        },
        control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
        {
            query: "SELECT cha_evrakno_seri FROM CARI_HESAP_HAREKETLERI WHERE cha_evrakno_seri = @cha_evrakno_seri AND cha_evrakno_sira = @cha_evrakno_sira AND cha_satir_no = @cha_satir_no AND cha_evrak_tip = 63",
            param:['cha_evrakno_seri:string|25','cha_evrakno_sira:int','cha_satir_no:int']
        },
        insert : function()
        {
            return {...Query.CariHarInsert};
        }
    },
    {
        name : "SATIŞ FATURA - STOK HAR", //GÖRÜNEN ADI
        source : //KAYNAK VERİTABANI BAĞLANTISI
        {
            server: "192.168.100.12",
            database:"MikroDB_V16_TESTALI",
            uid:"beka",
            pwd:"1122334455"
        },
        target : //HEDEF VERİTABANI BAĞLANTISI
        {
            server: "192.168.100.12",
            database:"MikroDB_V16_TESTMAHIR",
            uid:"beka",
            pwd:"1122334455"
        },
        auto : 3000,  //OTOMATİK AKTARIM YAPILACAKSA BURAYA MİLİSANİYE CİNSİNDEN SÜRE YAZILIR (1000 = 1 SN) UNDEFINED VEYA BU KEY TANIMLANMAZSA OTOMATİK AKTARILMAZ.
        select : 
        {
            query : "SELECT * FROM STOK_HAREKETLERI WHERE sth_evraktip = 4"
        },
        control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
        {
            query: "SELECT sth_evrakno_seri FROM STOK_HAREKETLERI WHERE sth_evrakno_seri = @sth_evrakno_seri AND sth_evrakno_sira = @sth_evrakno_sira AND sth_satirno = @sth_satirno AND sth_evraktip = 4",
            param:['sth_evrakno_seri:string|25','sth_evrakno_sira:int','sth_satirno:int']
        },
        insert : function()
        {
            return {...Query.StokHarInsert};
        }
    }
]
module.exports = Process;