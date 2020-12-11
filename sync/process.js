let Query = require("./query");
let Process = 
{
    process_list : 
    [
       {
            name : "AKTARIM 1",
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
            list :
            [
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
                        param:['sto_kod:string|50']
                    },
                    insert : function()
                    {
                        return {...Query.StoklarInsert};
                    }
                },
                {
                    name : "STOKLAR 2", //GÖRÜNEN ADI
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
                        param:['sto_kod:string|50']
                    },
                    insert : function()
                    {
                        return {...Query.StoklarInsert};
                    }
                }
            ]
       } 
    ]    
}

module.exports = Process;