let Query = require("./query");
let Process = 
[
    {
        name : "SATIŞ FATURA - CARI HAR", //GÖRÜNEN ADI
        source : //KAYNAK VERİTABANI BAĞLANTISI
        {
            server: "192.168.100.12",
            database:"MikroDB_V16_TEST",
            uid:"beka",
            pwd:"1122334455"
        },
        target : //HEDEF VERİTABANI BAĞLANTISI
        {
            server: "192.168.100.12",
            database:"MikroDB_V16_TESTALI",
            uid:"beka",
            pwd:"1122334455"
        },
        auto : 500000,  //OTOMATİK AKTARIM YAPILACAKSA BURAYA MİLİSANİYE CİNSİNDEN SÜRE YAZILIR (1000 = 1 SN) UNDEFINED VEYA BU KEY TANIMLANMAZSA OTOMATİK AKTARILMAZ.
        select : 
        {
            query : "SELECT * FROM CARI_HESAP_HAREKETLERI WHERE cha_evrakno_seri = 'ZYNB'"
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
            database:"MikroDB_V16_TEST",
            uid:"beka",
            pwd:"1122334455"
        },
        target : //HEDEF VERİTABANI BAĞLANTISI
        {
            server: "192.168.100.12",
            database:"MikroDB_V16_TESTALI",
            uid:"beka",
            pwd:"1122334455"
        },
        auto : 500000,  //OTOMATİK AKTARIM YAPILACAKSA BURAYA MİLİSANİYE CİNSİNDEN SÜRE YAZILIR (1000 = 1 SN) UNDEFINED VEYA BU KEY TANIMLANMAZSA OTOMATİK AKTARILMAZ.
        select : 
        {
            query : "SELECT * FROM STOK_HAREKETLERI WHERE sth_evrakno_seri = 'ZYNB' and sth_evrakno_sira = 2"
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
    },
    {
        name : "STOKLAR", //GÖRÜNEN ADI
        source : //KAYNAK VERİTABANI BAĞLANTISI
        {
            server: "192.168.100.12",
            database:"MikroDB_V16_TEST",
            uid:"beka",
            pwd:"1122334455"
        },
        target : //HEDEF VERİTABANI BAĞLANTISI
        {
            server: "192.168.100.12",
            database:"MikroDB_V16_TESTALI",
            uid:"beka",
            pwd:"1122334455"
        },
        auto : 10000,  //OTOMATİK AKTARIM YAPILACAKSA BURAYA MİLİSANİYE CİNSİNDEN SÜRE YAZILIR (1000 = 1 SN) UNDEFINED VEYA BU KEY TANIMLANMAZSA OTOMATİK AKTARILMAZ.
        select : 
        {
            query : "SELECT * FROM STOKLAR  --WHERE sto_create_date  >= DATEADD(minute,-60, GETDATE()) "
        },
        control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
        {
            query: "SELECT sto_kod FROM STOKLAR WHERE sto_kod = @sto_kod",
            param:['sto_kod:string|50',]
        },
        insert : function()
        {
            return {...Query.StoklarInsert};
        }
    },
    {
        name : "TERP POS SATIS - CARI HAR", //GÖRÜNEN ADI
        source : //KAYNAK VERİTABANI BAĞLANTISI
        {
            server: "192.168.100.12",
            database:"MikroDB_V16_TEST",
            uid:"beka",
            pwd:"1122334455"
        },
        target : //HEDEF VERİTABANI BAĞLANTISI
        {
            server: "192.168.100.12",
            database:"MikroDB_V16_TESTALI",
            uid:"beka",
            pwd:"1122334455"
        },
        auto : 10000000,  //OTOMATİK AKTARIM YAPILACAKSA BURAYA MİLİSANİYE CİNSİNDEN SÜRE YAZILIR (1000 = 1 SN) UNDEFINED VEYA BU KEY TANIMLANMAZSA OTOMATİK AKTARILMAZ.
        select : 
        {
            query : "SELECT * FROM TERP_POS_SATIS "
        },
        control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
        {
            query: "SELECT SIRA FROM TERP_POS_SATIS WHERE  SERI = @SERI AND SIRA = @SIRA AND SATIRNO = @SATIRNO",
            param:['SERI:string|50','SIRA:int','SATIRNO:int']
        },
        insert : function()
        {
            return {...Query.PosSatisInsert};
        }
    },
    {
        name : "POS TAHSILAT ", //GÖRÜNEN ADI
        source : //KAYNAK VERİTABANI BAĞLANTISI
        {
            server: "192.168.100.12",
            database:"MikroDB_V16_TEST",
            uid:"beka",
            pwd:"1122334455"
        },
        target : //HEDEF VERİTABANI BAĞLANTISI
        {
            server: "192.168.100.12",
            database:"MikroDB_V16_TESTALI",
            uid:"beka",
            pwd:"1122334455"
        },
        auto : 100000,  //OTOMATİK AKTARIM YAPILACAKSA BURAYA MİLİSANİYE CİNSİNDEN SÜRE YAZILIR (1000 = 1 SN) UNDEFINED VEYA BU KEY TANIMLANMAZSA OTOMATİK AKTARILMAZ.
        select : 
        {
            query : "SELECT * FROM TERP_POS_TAHSILAT"
        },
        control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
        {
            query: "SELECT SIRA FROM TERP_POS_TAHSILAT WHERE SERI = @SERI AND SIRA = @SIRA AND SATIRNO = @SATIRNO",
            param:['SERI:string|50','SIRA:int','SATIRNO:int']
        },
        insert : function()
        {
            return {...Query.PosTahsilatInsert};
        }
    },
    {
        name : "FIYAT LISTE ", //GÖRÜNEN ADI
        source : //KAYNAK VERİTABANI BAĞLANTISI
        {
            server: "192.168.100.12",
            database:"MikroDB_V16_TEST",
            uid:"beka",
            pwd:"1122334455"
        },
        target : //HEDEF VERİTABANI BAĞLANTISI
        {
            server: "192.168.100.12",
            database:"MikroDB_V16_TESTALI",
            uid:"beka",
            pwd:"1122334455"
        },
        auto : 10000,  //OTOMATİK AKTARIM YAPILACAKSA BURAYA MİLİSANİYE CİNSİNDEN SÜRE YAZILIR (1000 = 1 SN) UNDEFINED VEYA BU KEY TANIMLANMAZSA OTOMATİK AKTARILMAZ.
        select : 
        {
            query : "SELECT * FROM STOK_SATIS_FIYAT_LISTELERI"
        },
        control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
        {
            query: "SELECT sfiyat_listesirano FROM STOK_SATIS_FIYAT_LISTELERI WHERE sfiyat_listesirano = @sfiyat_listesirano AND sfiyat_stokkod = @sfiyat_stokkod ",
            param:['sfiyat_listesirano:int','sfiyat_stokkod:string|50']
        },
        insert : function()
        {
            return {...Query.SatisFiyatListeler};
        }
    },
]
module.exports = Process;