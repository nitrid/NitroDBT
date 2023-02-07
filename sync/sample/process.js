let Query = require("./query");
let Process = 
{
    process_list : 
    [
        {
            name : "MİKRO - NİTROGEN MERKEZ",
            source : //KAYNAK VERİTABANI BAĞLANTISI
            {
                server: "172.16.122.250",
                database:"MikroDB_V16_DONE2020",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            target : //HEDEF VERİTABANI BAĞLANTISI
            {
                server: "172.16.122.250",
                database:"NITROGENPOS",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            auto : 100000,  //OTOMATİK AKTARIM YAPILACAKSA BURAYA MİLİSANİYE CİNSİNDEN SÜRE YAZILIR (1000 = 1 SN) UNDEFINED VEYA BU KEY TANIMLANMAZSA OTOMATİK AKTARILMAZ.
            list :
            [
                //STOK_SATIS_FIYAT_LISTELERI -> ITEM_PRICE
                {
                    name : "MIKRO > NITROGENMERKEZ | STOK_SATIS_FIYAT_LISTELERI -> ITEM_PRICE", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "'Admin' AS CUSER, " +
                                "'Admin' AS LUSER, " +
                                "sfiyat_stokkod AS ITEM_CODE, " +
                                "0 AS TYPE, " +
                                "sfiyat_deposirano AS DEPOT, " +
                                "'01-01-1970' AS START_DATE, " +
                                "'01-01-1970' AS FINISH_DATE, " +
                                "sfiyat_fiyati AS PRICE, " +
                                "1 AS QUANTITY, " +
                                "'' AS CUSTOMER " +
                                "FROM STOK_SATIS_FIYAT_LISTELERI WHERE sfiyat_listesirano = 1 "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT PRICE FROM ITEM_PRICE WHERE ITEM_CODE = @ITEM_CODE AND DEPOT = @DEPOT",
                        param:['ITEM_CODE:string|25','DEPOT:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEM_PRICE SET PRICE = @PRICE,LDATE = GETDATE() WHERE ITEM_CODE = @ITEM_CODE AND DEPOT = @DEPOT",
                        param : ['PRICE:float','ITEM_CODE:string|25','DEPOT:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsPriceInsert};
                    }
                },
                //STOKLAR -> ITEMS
                {
                    name : "MIKRO > NITROGENMERKEZ | STOKLAR -> ITEMS", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " + 
                                "'Admin' AS CUSER, " +
                                "'Admin' AS LUSER, " +
                                "sto_kod AS CODE, " + 
                                "sto_isim AS NAME, " + 
                                "sto_kisa_ismi AS SNAME, " + 
                                "sto_anagrup_kod AS ITEM_GRP, " + 
                                "0 AS TYPE, " + 
                                "dbo.fn_VergiYuzde(sto_perakende_vergi) AS VAT, " + 
                                "0 AS COST_PRICE, " + 
                                "0 AS MIN_PRICE, " + 
                                "0 AS MAX_PRICE, " + 
                                "1 AS STATUS, " + 
                                "0 AS PLU, " + 
                                "0 WEIGHING " + 
                                "FROM STOKLAR"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT CODE FROM ITEMS WHERE CODE = @CODE",
                        param:['CODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEMS SET NAME = @NAME, " +
                            "SNAME = @SNAME, " +
                            "ITEM_GRP = @ITEM_GRP, " +
                            "VAT = @VAT, " +
                            "LDATE = GETDATE() " + 
                            "WHERE CODE = @CODE",
                        param : ['NAME:string|250','SNAME:string|250','ITEM_GRP:string|25','VAT:float','CODE:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsInsert};
                    }
                },
                //STOKLAR -> ITEM_TAX
                {
                    name : "MIKRO > NITROGENMERKEZ | STOKLAR -> ITEM_TAX", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " + 
                                "'Admin' AS CUSER, " +
                                "'Admin' AS LUSER, " +
                                "sto_kod AS ITEM_CODE, " + 
                                "sto_toptan_vergi AS WHOLEPNTR, " +
                                "sto_perakende_vergi AS RETAILPNTR, " +
                                "dbo.fn_VergiYuzde(sto_perakende_vergi) AS VAT " + 
                                "FROM STOKLAR"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT ITEM_CODE FROM ITEM_TAX WHERE ITEM_CODE = @ITEM_CODE",
                        param:['ITEM_CODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEM_TAX SET " +
                            "WHOLEPNTR = @WHOLEPNTR, " +
                            "RETAILPNTR = @RETAILPNTR, " +
                            "VAT = @VAT, " +
                            "LDATE = GETDATE() " + 
                            "WHERE ITEM_CODE = @ITEM_CODE",
                        param : ['ITEM_CODE:string|25','WHOLEPNTR:int','RETAILPNTR:int','VAT:float']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsTaxInsert};
                    }
                },
                //BARKOD_TANIMLARI -> ITEM_BARCODE
                {
                    name : "MIKRO > NITROGENMERKEZ | BARKOD_TANIMLARI -> ITEM_BARCODE", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "'Admin' AS CUSER, " +
                                "'Admin' AS LUSER, " +
                                "bar_stokkodu AS ITEM_CODE, " +
                                "bar_kodu AS BARCODE, " +
                                "bar_birimpntr AS UNIT, " +
                                "0 AS TYPE " +
                                "FROM BARKOD_TANIMLARI "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT ITEM_CODE FROM ITEM_BARCODE WHERE BARCODE = @BARCODE ",
                        param:['BARCODE:string|25','UNIT:int']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEM_BARCODE SET " +
                            "UNIT = @UNIT, " +
                            "TYPE = @TYPE, " +
                            "LDATE = GETDATE() " + 
                            "WHERE BARCODE = @BARCODE ",
                        param : ['BARCODE:string|25','UNIT:int','TYPE:int']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsBarcodeInsert};
                    }
                },
                //STOK_BIRIM_TANIMLARI -> ITEM_UNIT
                {
                    name : "MIKRO > NITROGENMERKEZ | STOK_BIRIM_TANIMLARI -> ITEM_UNIT", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "'Admin' AS CUSER, " +
                                "'Admin' AS LUSER, " +
                                "sto_kod AS ITEM_CODE, " +
                                "sto_birimID AS TYPE, " +
                                "sto_birim_ad AS NAME, " +
                                "CASE WHEN sto_birim_katsayi < 0 THEN sto_birim_katsayi * -1 ELSE sto_birim_katsayi END AS FACTOR, " +
                                "sto_birim_agirlik AS WEIGHT, " +
                                "0 AS VOLUME, " +
                                "sto_birim_en AS WIDTH, " +
                                "sto_birim_boy AS HEIGHT, " +
                                "sto_birim_yukseklik AS SIZE, " +
                                "sto_birimID AS CODE " +
                                "FROM STOK_BIRIM_TANIMLARI_DIKEY"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT FACTOR FROM ITEM_UNIT WHERE ITEM_CODE = @ITEM_CODE AND CODE = @CODE",
                        param:['ITEM_CODE:string|25','CODE:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsUnitInsert};
                    }
                },
                //DEPOLAR -> DEPOT
                {
                    name : "MIKRO > NITROGENMERKEZ | DEPOLAR -> DEPOT", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "'Admin' AS CUSER, " +
                                "'Admin' AS LUSER, " +
                                "0 AS TYPE, " +
                                "dep_no AS CODE, " +
                                "dep_adi AS NAME " +
                                "FROM DEPOLAR"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT CODE FROM DEPOT WHERE CODE = @CODE",
                        param:['CODE:string|25']
                    },
                    update :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "UPDATE DEPOT SET NAME = @NAME FROM DEPOT WHERE CODE = @CODE",
                        param:['NAME:string|25','CODE:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.DepotInsert};
                    }
                }
            ]
        },
        {
            name : "NİTROGEN MERKEZ - MİKRO",
            source : //KAYNAK VERİTABANI BAĞLANTISI
            {
                server: "172.16.122.250",
                database:"NITROGENPOS",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            target : //HEDEF VERİTABANI BAĞLANTISI
            {
                server: "172.16.122.250",
                database:"MikroDB_V16_DONE2020",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            auto : 1900000,  //OTOMATİK AKTARIM YAPILACAKSA BURAYA MİLİSANİYE CİNSİNDEN SÜRE YAZILIR (1000 = 1 SN) UNDEFINED VEYA BU KEY TANIMLANMAZSA OTOMATİK AKTARILMAZ.
            list :
            [
                //POS SALE -> STOK HAREKETLERI - SATIŞ
                {
                    name : "NITROGENMERKEZ > MIKRO | POS SALE -> STOK HAREKETLERI - SATIŞ", //GÖRÜNEN ADI
                    select : function()
                    {
                        let TmpQuery = {...Query.PosSaleStokHarSelect};
                        TmpQuery.query = TmpQuery.query.replace('@TYPE','0,2');
                        return TmpQuery;
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT sth_evrakno_sira FROM STOK_HAREKETLERI WHERE sth_evrakno_seri = @sth_evrakno_seri AND sth_evrakno_sira = @sth_evrakno_sira AND " + 
                            "sth_evraktip = @sth_evraktip AND sth_stok_kod = @sth_stok_kod",
                        param:['sth_evrakno_seri:string|25','sth_evrakno_sira:int','sth_evraktip:int','sth_stok_kod:string|25']
                    },
                    update : 
                    {
                        query : "UPDATE STOK_HAREKETLERI SET sth_special1 = @sth_special1, sth_miktar = @sth_miktar,sth_miktar2 = @sth_miktar2, " + 
                                "sth_tutar = @sth_tutar, sth_vergi = @sth_vergi,sth_lastup_date = GETDATE() " +
                                "WHERE sth_evrakno_seri = @sth_evrakno_seri AND sth_evrakno_sira = @sth_evrakno_sira AND " +
                                "sth_evraktip = @sth_evraktip AND sth_stok_kod = @sth_stok_kod",
                        param : ['sth_special1:string|25','sth_miktar:float','sth_miktar2:float','sth_tutar:float','sth_vergi:float','sth_evrakno_seri:string|25',
                                'sth_evrakno_sira:int','sth_evraktip:int','sth_stok_kod:string|25']
                    },
                    insert : function()
                    {
                        let TmpQuery = {...Query.StokHarInsert};
                        // TmpQuery.query = TmpQuery.query.replace("@sth_fat_uid",'(SELECT cha_Guid FROM CARI_HESAP_HAREKETLERI WHERE cha_evrakno_seri = @sth_evrakno_seri AND cha_evrakno_sira = @sth_evrakno_sira AND cha_evrak_tip = 63)')
                        // TmpQuery.param = TmpQuery.param.filter(item => item !== 'sth_fat_uid:string|50');
                    
                        return TmpQuery;
                    }
                },
                //POS PAYMENT -> CARI HAREKETLERI - TAHSİLAT
                {
                    name : "NITROGENMERKEZ > MIKRO | POS PAYMENT -> CARI HAREKETLERI - TAHSİLAT", //GÖRÜNEN ADI
                    select : function()
                    {
                        let TmpQuery = {...Query.PosPaymentCariHarSelect};
                        TmpQuery.query = TmpQuery.query.replace('@DOC_TYPE','0,2');
                        return TmpQuery;
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT cha_evrakno_sira FROM CARI_HESAP_HAREKETLERI WHERE cha_evrakno_seri = @cha_evrakno_seri AND cha_evrakno_sira = @cha_evrakno_sira AND cha_evrak_tip = @cha_evrak_tip AND cha_cinsi = @cha_cinsi",
                        param:['cha_evrakno_seri:string|25','cha_evrakno_sira:int','cha_evrak_tip:int','cha_cinsi:int']
                    },
                    update : 
                    {
                        query : "UPDATE CARI_HESAP_HAREKETLERI SET cha_meblag = @cha_meblag,cha_aratoplam = @cha_aratoplam, " + 
                                "cha_vergi1 = @cha_vergi1, cha_vergi2 = @cha_vergi2, " +
                                "cha_vergi3 = @cha_vergi3, cha_vergi4 = @cha_vergi4, " +
                                "cha_vergi5 = @cha_vergi5, cha_vergi6 = @cha_vergi6, " +
                                "cha_vergi7 = @cha_vergi7, cha_vergi8 = @cha_vergi8, " +
                                "cha_vergi9 = @cha_vergi9, cha_vergi10 = @cha_vergi10,cha_lastup_date = GETDATE() " +
                                "WHERE cha_evrakno_seri = @cha_evrakno_seri AND cha_evrakno_sira = @cha_evrakno_sira AND " +
                                "cha_satir_no = @cha_satir_no AND cha_evrak_tip = @cha_evrak_tip AND cha_cinsi = @cha_cinsi",
                        param : ['cha_meblag:float','cha_aratoplam:float','cha_vergi1:float','cha_vergi2:float',
                                'cha_vergi3:float','cha_vergi4:float','cha_vergi5:float','cha_vergi6:float',
                                'cha_vergi7:float','cha_vergi8:float','cha_vergi9:float','cha_vergi10:float',
                                'cha_evrakno_seri:string|25','cha_evrakno_sira:int','cha_satir_no:int','cha_evrak_tip:int','cha_cinsi:int']
                    },
                    insert : function()
                    {
                        return {...Query.CariHarInsert};
                    }
                },
                //POS PAYMENT -> ÖDEME EMİRLERİ - TAHSİLAT
                {
                    name : "NITROGENMERKEZ > MIKRO | POS PAYMENT -> ÖDEME EMİRLERİ - TAHSİLAT", //GÖRÜNEN ADI
                    select : function()
                    {
                        let TmpQuery = {...Query.PosPaymentOdemeEmirSelect};
                        TmpQuery.query = TmpQuery.query.replace('@DOC_TYPE','0');
                        return TmpQuery;
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT sck_refno FROM ODEME_EMIRLERI WHERE sck_refno = @sck_refno AND sck_tip = @sck_tip",
                        param:['sck_refno:string|25','sck_tip:int']
                    },
                    update : 
                    {
                        query : "UPDATE ODEME_EMIRLERI SET sck_tutar = @sck_tutar " +
                                "WHERE sck_refno = @sck_refno AND sck_tip = 6 " ,
                        param : ['sck_refno:string|25','sck_tutar:float']
                    },
                    insert : function()
                    {
                        return {...Query.OdemeEmirInsert};
                    }
                },
                //POS SALE -> STOK HAREKETLERI - İADE
                {
                    name : "NITROGENMERKEZ > MIKRO | POS SALE -> STOK HAREKETLERI - İADE", //GÖRÜNEN ADI
                    select : function()
                    {
                        let TmpQuery = {...Query.PosSaleStokHarSelect};
                        TmpQuery.query = TmpQuery.query.replace('@TYPE',1);
                        return TmpQuery;
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT sth_evrakno_sira FROM STOK_HAREKETLERI WHERE sth_evrakno_seri = @sth_evrakno_seri AND sth_evrakno_sira = @sth_evrakno_sira AND " + 
                            "sth_evraktip = @sth_evraktip AND sth_stok_kod = @sth_stok_kod",
                        param:['sth_evrakno_seri:string|25','sth_evrakno_sira:int','sth_evraktip:int','sth_stok_kod:string|25']
                    },
                    update : 
                    {
                        query : "UPDATE STOK_HAREKETLERI SET sth_miktar = @sth_miktar,sth_miktar2 = @sth_miktar2, " + 
                                "sth_tutar = @sth_tutar, sth_vergi = @sth_vergi,sth_special1 = @sth_special1,sth_lastup_date = GETDATE() " +
                                "WHERE sth_evrakno_seri = @sth_evrakno_seri AND sth_evrakno_sira = @sth_evrakno_sira AND " +
                                "sth_evraktip = @sth_evraktip AND sth_stok_kod = @sth_stok_kod",
                        param : ['sth_miktar:float','sth_miktar2:float','sth_tutar:float','sth_vergi:float','sth_special1:string|10','sth_evrakno_seri:string|25',
                                'sth_evrakno_sira:int','sth_evraktip:int','sth_stok_kod:string|25']
                    },
                    insert : function()
                    {
                        let TmpQuery = {...Query.StokHarInsert};
                        // TmpQuery.query = TmpQuery.query.replace("@sth_fat_uid",'(SELECT cha_Guid FROM CARI_HESAP_HAREKETLERI WHERE cha_evrakno_seri = @sth_evrakno_seri AND cha_evrakno_sira = @sth_evrakno_sira AND cha_evrak_tip = 63)')
                        // TmpQuery.param = TmpQuery.param.filter(item => item !== 'sth_fat_uid:string|50');
                    
                        return TmpQuery;
                    }
                },
                //POS PAYMENT -> CARI HAREKETLERI - ÖDEME
                {
                    name : "NITROGENMERKEZ > MIKRO | POS PAYMENT -> CARI HAREKETLERI - ÖDEME", //GÖRÜNEN ADI
                    select : function()
                    {
                        let TmpQuery = {...Query.PosPaymentCariHarSelect};
                        TmpQuery.query = TmpQuery.query.replace('@DOC_TYPE',1);
                        return TmpQuery;
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT cha_evrakno_sira FROM CARI_HESAP_HAREKETLERI WHERE cha_evrakno_seri = @cha_evrakno_seri AND cha_evrakno_sira = @cha_evrakno_sira AND cha_evrak_tip = @cha_evrak_tip",
                        param:['cha_evrakno_seri:string|25','cha_evrakno_sira:int','cha_evrak_tip:int']
                    },     
                    update : 
                    {
                        query : "UPDATE CARI_HESAP_HAREKETLERI SET cha_meblag = @cha_meblag,cha_aratoplam = @cha_aratoplam, " + 
                                "cha_vergi1 = @cha_vergi1, cha_vergi2 = @cha_vergi2, " +
                                "cha_vergi3 = @cha_vergi3, cha_vergi4 = @cha_vergi4, " +
                                "cha_vergi5 = @cha_vergi5, cha_vergi6 = @cha_vergi6, " +
                                "cha_vergi7 = @cha_vergi7, cha_vergi8 = @cha_vergi8, " +
                                "cha_vergi9 = @cha_vergi9, cha_vergi10 = @cha_vergi10,cha_lastup_date = GETDATE() " +
                                "WHERE cha_evrakno_seri = @cha_evrakno_seri AND cha_evrakno_sira = @cha_evrakno_sira AND " +
                                "cha_satir_no = @cha_satir_no AND cha_evrak_tip = @cha_evrak_tip",
                        param : ['cha_meblag:float','cha_aratoplam:float','cha_vergi1:float','cha_vergi2:float',
                                'cha_vergi3:float','cha_vergi4:float','cha_vergi5:float','cha_vergi6:float',
                                'cha_vergi7:float','cha_vergi8:float','cha_vergi9:float','cha_vergi10:float',
                                'cha_evrakno_seri:string|25','cha_evrakno_sira:int','cha_satir_no:int','cha_evrak_tip:int']
                    },   
                    insert : function()
                    {
                        return {...Query.CariHarInsert};
                    }
                }
            ]
        },
        {
            name : "MERKEZ - VEYSELLİLER",
            source : //KAYNAK VERİTABANI BAĞLANTISI
            {
                server: "172.16.122.250",
                database:"NITROGENPOS",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            target : //HEDEF VERİTABANI BAĞLANTISI
            {
                server: "93.182.76.152",
                database:"NITROGENPOS",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            auto : 2000000,  //OTOMATİK AKTARIM YAPILACAKSA BURAYA MİLİSANİYE CİNSİNDEN SÜRE YAZILIR (1000 = 1 SN) UNDEFINED VEYA BU KEY TANIMLANMAZSA OTOMATİK AKTARILMAZ.
            list :
            [
                //ITEM_PRICE
                {
                    name : "MERKEZNITROGEN -> VEYSELLİLER | ITEM_PRICE", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "ITEM_CODE AS ITEM_CODE, " +
                                "TYPE AS TYPE, " +
                                "DEPOT AS DEPOT, " +
                                "START_DATE AS START_DATE, " +
                                "FINISH_DATE AS FINISH_DATE, " +
                                "PRICE AS PRICE, " +
                                "QUANTITY AS QUANTITY, " +
                                "CUSTOMER AS CUSTOMER " +
                                "FROM ITEM_PRICE WHERE DEPOT IN('0','1001') "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT PRICE FROM ITEM_PRICE WHERE ITEM_CODE = @ITEM_CODE AND DEPOT = @DEPOT",
                        param:['ITEM_CODE:string|25','DEPOT:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEM_PRICE SET PRICE = @PRICE,LDATE = GETDATE() WHERE ITEM_CODE = @ITEM_CODE AND DEPOT = @DEPOT",
                        param : ['PRICE:float','ITEM_CODE:string|25','DEPOT:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsPriceInsert};
                    }
                },
                //ITEMS
                {
                    name : "MERKEZNITROGEN -> VEYSELLİLER | ITEMS", //GÖRÜNEN ADI       
                    select : 
                    {
                        query : "SELECT " + 
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "CODE AS CODE, " + 
                                "NAME AS NAME, " + 
                                "SNAME AS SNAME, " + 
                                "ITEM_GRP AS ITEM_GRP, " + 
                                "TYPE AS TYPE, " + 
                                "VAT AS VAT, " + 
                                "COST_PRICE AS COST_PRICE, " + 
                                "MIN_PRICE AS MIN_PRICE, " + 
                                "MAX_PRICE AS MAX_PRICE, " + 
                                "STATUS AS STATUS, " + 
                                "PLU AS PLU, " + 
                                "WEIGHING AS WEIGHING " + 
                                "FROM ITEMS"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT CODE FROM ITEMS WHERE CODE = @CODE",
                        param:['CODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEMS SET NAME = @NAME, " +
                            "SNAME = @SNAME, " +
                            "ITEM_GRP = @ITEM_GRP, " +
                            "VAT = @VAT, " +
                            "LDATE = GETDATE() " + 
                            "WHERE CODE = @CODE",
                        param : ['NAME:string|250','SNAME:string|250','ITEM_GRP:string|25','VAT:float','CODE:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsInsert};
                    }
                },
                //ITEM_TAX
                {
                    name : "MERKEZNITROGEN -> VEYSELLİLER | ITEM_TAX", //GÖRÜNEN ADI       
                    select : 
                    {
                        query : "SELECT " + 
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "ITEM_CODE AS ITEM_CODE, " + 
                                "WHOLEPNTR AS WHOLEPNTR, " +
                                "RETAILPNTR AS RETAILPNTR, " +
                                "VAT AS VAT " +
                                "FROM ITEM_TAX"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT ITEM_CODE FROM ITEM_TAX WHERE ITEM_CODE = @ITEM_CODE",
                        param:['ITEM_CODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEM_TAX SET " +
                            "WHOLEPNTR = @WHOLEPNTR, " +
                            "RETAILPNTR = @RETAILPNTR, " +
                            "VAT = @VAT, " +
                            "LDATE = GETDATE() " + 
                            "WHERE ITEM_CODE = @ITEM_CODE",
                        param : ['ITEM_CODE:string|25','WHOLEPNTR:int','RETAILPNTR:int','VAT:float']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsTaxInsert};
                    }
                },
                //ITEM_BARCODE
                {
                    name : "MERKEZNITROGEN -> VEYSELLİLER | ITEM_BARCODE", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "ITEM_CODE AS ITEM_CODE , " +
                                "BARCODE AS BARCODE , " +
                                "UNIT AS UNIT , " +
                                "TYPE AS TYPE " +
                                "FROM ITEM_BARCODE "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT ITEM_CODE FROM ITEM_BARCODE WHERE BARCODE = @BARCODE ",
                        param:['BARCODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEM_BARCODE SET " +
                            "UNIT = @UNIT, " +
                            "TYPE = @TYPE, " +
                            "LDATE = GETDATE() " + 
                            "WHERE BARCODE = @BARCODE ",
                        param : ['UNIT:int','TYPE:int','BARCODE:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsBarcodeInsert};
                    }
                },
                //ITEM_UNIT
                {
                    name : "MERKEZNITROGEN -> VEYSELLİLER | ITEM_UNIT", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "ITEM_CODE AS ITEM_CODE, " +
                                "TYPE AS TYPE, " +
                                "NAME AS NAME, " +
                                "FACTOR AS FACTOR, " +
                                "WEIGHT AS WEIGHT, " +
                                "VOLUME AS VOLUME, " +
                                "WIDTH AS WIDTH, " +
                                "HEIGHT AS HEIGHT, " +
                                "SIZE AS SIZE, " +
                                "CODE AS CODE " +
                                "FROM ITEM_UNIT"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT ITEM_CODE,CODE FROM ITEM_UNIT WHERE ITEM_CODE = @ITEM_CODE AND CODE = @CODE",
                        param:['ITEM_CODE:string|25','CODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEM_UNIT SET " +
                            "NAME = @NAME, " +
                            "TYPE = @TYPE, " +
                            "FACTOR = @FACTOR, " +
                            "CODE = @CODE, " +
                            "LDATE = GETDATE() " + 
                            "WHERE ITEM_CODE = @ITEM_CODE AND CODE = @CODE",
                        param : ['ITEM_CODE:string|25','NAME:string|25','TYPE:int','FACTOR:int','CODE:int']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsUnitInsert};
                    }
                },
                //DEPOT
                {
                    name : "MERKEZNITROGEN -> VEYSELLİLER | DEPOT", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "TYPE AS TYPE, " +
                                "CODE AS CODE, " +
                                "NAME AS NAME " +
                                "FROM DEPOT"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT CODE FROM DEPOT WHERE CODE = @CODE",
                        param:['CODE:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.DepotInsert};
                    }
                },
                //USERS
                {
                    name : "MERKEZNITROGEN -> VEYSELLİLER | USERS ", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CODE AS CODE, " +
                                "NAME AS NAME, " +
                                "PASSWORD AS PASSWORD, " +
                                "TAG AS TAG, " +
                                "STATUS AS STATUS " +
                                "FROM USERS "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT CODE FROM USERS WHERE CODE = @CODE",
                        param:['CODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE USERS SET " +
                            "NAME = @NAME, " +
                            "PASSWORD = @PASSWORD, " +
                            "TAG = @TAG, " +
                            "STATUS = @STATUS, " +
                            "LDATE = GETDATE() " + 
                            "WHERE CODE = @CODE ",
                        param : ['NAME:string|25','PASSWORD:string|25','TAG:int','STATUS:int','CODE:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.UsersInsert};
                    }
                },
                //PARAMS
                {
                    name : "MERKEZNITROGEN -> VEYSELLİLER | PARAMS", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "NAME AS NAME, " +
                                "VALUE AS VALUE, " +
                                "TAG AS TAG, " +
                                "ID AS ID " +
                                "FROM PARAMS "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT NAME,ID FROM PARAMS WHERE NAME = @NAME AND ID = @ID ",
                        param:['NAME:string|25','ID:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE PARAMS SET " +
                            "VALUE = @VALUE, " +
                            "LDATE = GETDATE() " + 
                            "WHERE ID = @ID AND NAME = @NAME",
                        param : ['ID:string|25','VALUE:string|25','NAME:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.ParamsInsert};
                    }
                },
                //DEVICE
                {
                    name : "MERKEZNITROGEN -> VEYSELLİLER | DEVICE", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "ID AS ID, " +
                                "NAME AS NAME, " +
                                "STATUS AS STATUS " +
                                "FROM DEVICE "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT ID FROM DEVICE WHERE ID = @ID ",
                        param:['ID:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.DeviceInsert};
                    }
                },
                //POS PLU
                {
                    name : "MERKEZNITROGEN -> VEYSELLİLER | POS PLU", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "NAME AS NAME, " +
                                "LOCATION AS LOCATION, " +
                                "TYPE AS TYPE, " +
                                "ITEMS_CODE AS ITEMS_CODE, " +
                                "GRUP_INDEX AS GRUP_INDEX " +
                                "FROM POS_PLU "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT NAME,LOCATION,TYPE,ITEMS_CODE,GRUP_INDEX FROM POS_PLU WHERE GRUP_INDEX = @GRUP_INDEX AND TYPE = @TYPE AND LOCATION = @LOCATION ",
                        param:['GRUP_INDEX:int','TYPE:int','LOCATION:int']
                    },
                    update : 
                    {
                        query : "UPDATE POS_PLU SET NAME = @NAME , ITEMS_CODE = @ITEMS_CODE " +
                                "WHERE LOCATION = @LOCATION AND TYPE = @TYPE AND GRUP_INDEX = @GRUP_INDEX ",
                        param:['NAME:string|25','ITEMS_CODE:string|25','LOCATION:int','TYPE:int','GRUP_INDEX:int']
                    },
                    insert : function()
                    {
                        return {...Query.PosPluInsert};
                    }
                },
            ]
        },
        {
            name : "VEYSELLİLER - MERKEZ",
            source : //KAYNAK VERİTABANI BAĞLANTISI
            {
                server: "93.182.76.152",
                database:"NITROGENPOS",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            target : //HEDEF VERİTABANI BAĞLANTISI
            {
                server: "172.16.122.250",
                database:"NITROGENPOS",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            auto : 1200000,  //OTOMATİK AKTARIM YAPILACAKSA BURAYA MİLİSANİYE CİNSİNDEN SÜRE YAZILIR (1000 = 1 SN) UNDEFINED VEYA BU KEY TANIMLANMAZSA OTOMATİK AKTARILMAZ.
            list :
            [
                //POS SALE 
                {
                    name : "VEYSELLİLER -> MERKEZNITROGEN | POS SALE", //GÖRÜNEN ADI
                    select : function()
                    {
                        return {...Query.PosSaleSelect};
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT REF_NO FROM POS_SALES WHERE REF = @REF AND REF_NO = @REF_NO AND " + 
                            "LINE_NO = @LINE_NO AND TYPE = @TYPE",
                        param:['REF:string|25','REF_NO:int','LINE_NO:int','TYPE:int']
                    },
                    insert : function()
                    {
                        return {...Query.PosSaleInsert};
                    }
                },
                //POS PAYMENT
                {
                    name : "VEYSELLİLER -> MERKEZNITROGEN | POS PAYMENT", //GÖRÜNEN ADI
                    select : function()
                    {
                        return {...Query.PosPaymentSelect};
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT REF_NO FROM POS_PAYMENT WHERE REF = @REF AND REF_NO = @REF_NO AND DOC_TYPE = @DOC_TYPE AND LINE_NO = @LINE_NO",
                        param:['REF:string|25','REF_NO:int','DOC_TYPE:int','LINE_NO:int']
                    },
                    insert : function()
                    {
                        return {...Query.PosPaymentInsert};
                    }
                },
            ]
        },
        {
            name : "MERKEZ - AKDOĞAN",
            source : //KAYNAK VERİTABANI BAĞLANTISI
            {
                server: "172.16.122.250",
                database:"NITROGENPOS",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            target : //HEDEF VERİTABANI BAĞLANTISI
            {
                server: "93.182.77.35",
                database:"NITROGENPOS",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            auto : 2400000,  //OTOMATİK AKTARIM YAPILACAKSA BURAYA MİLİSANİYE CİNSİNDEN SÜRE YAZILIR (1000 = 1 SN) UNDEFINED VEYA BU KEY TANIMLANMAZSA OTOMATİK AKTARILMAZ.
            list :
            [
                //ITEM_PRICE
                {
                    name : "MERKEZNITROGEN -> AKDOĞAN | ITEM_PRICE", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "ITEM_CODE AS ITEM_CODE, " +
                                "TYPE AS TYPE, " +
                                "DEPOT AS DEPOT, " +
                                "START_DATE AS START_DATE, " +
                                "FINISH_DATE AS FINISH_DATE, " +
                                "PRICE AS PRICE, " +
                                "QUANTITY AS QUANTITY, " +
                                "CUSTOMER AS CUSTOMER " +
                                "FROM ITEM_PRICE WHERE DEPOT IN('0','1002') "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT PRICE FROM ITEM_PRICE WHERE ITEM_CODE = @ITEM_CODE AND DEPOT = @DEPOT",
                        param:['ITEM_CODE:string|25','DEPOT:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEM_PRICE SET PRICE = @PRICE,LDATE = GETDATE() WHERE ITEM_CODE = @ITEM_CODE AND DEPOT = @DEPOT",
                        param : ['PRICE:float','ITEM_CODE:string|25','DEPOT:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsPriceInsert};
                    }
                },
                //ITEMS
                {
                    name : "MERKEZNITROGEN -> AKDOĞAN | ITEMS", //GÖRÜNEN ADI       
                    select : 
                    {
                        query : "SELECT " + 
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "CODE AS CODE, " + 
                                "NAME AS NAME, " + 
                                "SNAME AS SNAME, " + 
                                "ITEM_GRP AS ITEM_GRP, " + 
                                "TYPE AS TYPE, " + 
                                "VAT AS VAT, " + 
                                "COST_PRICE AS COST_PRICE, " + 
                                "MIN_PRICE AS MIN_PRICE, " + 
                                "MAX_PRICE AS MAX_PRICE, " + 
                                "STATUS AS STATUS, " + 
                                "PLU AS PLU, " + 
                                "WEIGHING AS WEIGHING " + 
                                "FROM ITEMS"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT CODE FROM ITEMS WHERE CODE = @CODE",
                        param:['CODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEMS SET NAME = @NAME, " +
                            "SNAME = @SNAME, " +
                            "ITEM_GRP = @ITEM_GRP, " +
                            "VAT = @VAT, " +
                            "LDATE = GETDATE() " + 
                            "WHERE CODE = @CODE",
                        param : ['NAME:string|250','SNAME:string|250','ITEM_GRP:string|25','VAT:float','CODE:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsInsert};
                    }
                },
                //ITEM_TAX
                {
                    name : "MERKEZNITROGEN -> AKDOĞAN | ITEM_TAX", //GÖRÜNEN ADI       
                    select : 
                    {
                        query : "SELECT " + 
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "ITEM_CODE AS ITEM_CODE, " + 
                                "WHOLEPNTR AS WHOLEPNTR, " +
                                "RETAILPNTR AS RETAILPNTR, " +
                                "VAT AS VAT " +
                                "FROM ITEM_TAX"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT ITEM_CODE FROM ITEM_TAX WHERE ITEM_CODE = @ITEM_CODE",
                        param:['ITEM_CODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEM_TAX SET " +
                            "WHOLEPNTR = @WHOLEPNTR, " +
                            "RETAILPNTR = @RETAILPNTR, " +
                            "VAT = @VAT, " +
                            "LDATE = GETDATE() " + 
                            "WHERE ITEM_CODE = @ITEM_CODE",
                        param : ['ITEM_CODE:string|25','WHOLEPNTR:int','RETAILPNTR:int','VAT:float']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsTaxInsert};
                    }
                },
                //ITEM_BARCODE
                {
                    name : "MERKEZNITROGEN -> VEYSELLİLER | ITEM_BARCODE", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "ITEM_CODE AS ITEM_CODE , " +
                                "BARCODE AS BARCODE , " +
                                "UNIT AS UNIT , " +
                                "TYPE AS TYPE " +
                                "FROM ITEM_BARCODE "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT ITEM_CODE FROM ITEM_BARCODE WHERE BARCODE = @BARCODE ",
                        param:['BARCODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEM_BARCODE SET " +
                            "UNIT = @UNIT, " +
                            "TYPE = @TYPE, " +
                            "LDATE = GETDATE() " + 
                            "WHERE BARCODE = @BARCODE ",
                        param : ['UNIT:int','TYPE:int','BARCODE:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsBarcodeInsert};
                    }
                },
                //ITEM_UNIT
                {
                    name : "MERKEZNITROGEN -> AKDOĞAN | ITEM_UNIT", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "ITEM_CODE AS ITEM_CODE, " +
                                "TYPE AS TYPE, " +
                                "NAME AS NAME, " +
                                "FACTOR AS FACTOR, " +
                                "WEIGHT AS WEIGHT, " +
                                "VOLUME AS VOLUME, " +
                                "WIDTH AS WIDTH, " +
                                "HEIGHT AS HEIGHT, " +
                                "SIZE AS SIZE, " +
                                "CODE AS CODE " +
                                "FROM ITEM_UNIT"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT ITEM_CODE,CODE FROM ITEM_UNIT WHERE ITEM_CODE = @ITEM_CODE AND CODE = @CODE",
                        param:['ITEM_CODE:string|25','CODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEM_UNIT SET " +
                            "NAME = @NAME, " +
                            "TYPE = @TYPE, " +
                            "FACTOR = @FACTOR, " +
                            "CODE = @CODE, " +
                            "LDATE = GETDATE() " + 
                            "WHERE ITEM_CODE = @ITEM_CODE AND CODE = @CODE",
                        param : ['ITEM_CODE:string|25','NAME:string|25','TYPE:int','FACTOR:int','CODE:int']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsUnitInsert};
                    }
                },
                //DEPOT
                {
                    name : "MERKEZNITROGEN -> AKDOĞAN | DEPOT", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "TYPE AS TYPE, " +
                                "CODE AS CODE, " +
                                "NAME AS NAME " +
                                "FROM DEPOT"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT CODE FROM DEPOT WHERE CODE = @CODE",
                        param:['CODE:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.DepotInsert};
                    }
                },
                //USERS
                {
                    name : "MERKEZNITROGEN -> VEYSELLİLER | USERS ", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CODE AS CODE, " +
                                "NAME AS NAME, " +
                                "PASSWORD AS PASSWORD, " +
                                "TAG AS TAG, " +
                                "STATUS AS STATUS " +
                                "FROM USERS "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT CODE FROM USERS WHERE CODE = @CODE",
                        param:['CODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE USERS SET " +
                            "NAME = @NAME, " +
                            "PASSWORD = @PASSWORD, " +
                            "TAG = @TAG, " +
                            "STATUS = @STATUS, " +
                            "LDATE = GETDATE() " + 
                            "WHERE CODE = @CODE ",
                        param : ['NAME:string|25','PASSWORD:string|25','TAG:int','STATUS:int','CODE:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.UsersInsert};
                    }
                },
                //PARAMS
                {
                    name : "MERKEZNITROGEN -> AKDOĞAN | PARAMS", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "NAME AS NAME, " +
                                "VALUE AS VALUE, " +
                                "TAG AS TAG, " +
                                "ID AS ID " +
                                "FROM PARAMS "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT NAME,ID FROM PARAMS WHERE NAME = @NAME AND ID = @ID ",
                        param:['NAME:string|25','ID:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE PARAMS SET " +
                            "VALUE = @VALUE, " +
                            "LDATE = GETDATE() " + 
                            "WHERE ID = @ID AND NAME = @NAME",
                        param : ['ID:string|25','VALUE:string|25','NAME:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.ParamsInsert};
                    }
                },
                //DEVICE
                {
                    name : "MERKEZNITROGEN -> AKDOĞAN | DEVICE", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "ID AS ID, " +
                                "NAME AS NAME, " +
                                "STATUS AS STATUS " +
                                "FROM DEVICE "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT ID FROM DEVICE WHERE ID = @ID ",
                        param:['ID:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.DeviceInsert};
                    }
                },
                //POS PLU
                {
                    name : "MERKEZNITROGEN -> AKDOĞAN | POS PLU", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "NAME AS NAME, " +
                                "LOCATION AS LOCATION, " +
                                "TYPE AS TYPE, " +
                                "ITEMS_CODE AS ITEMS_CODE, " +
                                "GRUP_INDEX AS GRUP_INDEX " +
                                "FROM POS_PLU "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT NAME,LOCATION,TYPE,ITEMS_CODE,GRUP_INDEX FROM POS_PLU WHERE GRUP_INDEX = @GRUP_INDEX AND TYPE = @TYPE AND LOCATION = @LOCATION ",
                        param:['GRUP_INDEX:int','TYPE:int','LOCATION:int']
                    },
                    update : 
                    {
                        query : "UPDATE POS_PLU SET NAME = @NAME , ITEMS_CODE = @ITEMS_CODE " +
                                "WHERE LOCATION = @LOCATION AND TYPE = @TYPE AND GRUP_INDEX = @GRUP_INDEX ",
                        param:['NAME:string|25','ITEMS_CODE:string|25','LOCATION:int','TYPE:int','GRUP_INDEX:int']
                    },
                    insert : function()
                    {
                        return {...Query.PosPluInsert};
                    }
                },
            ] 
        },
        {
            name : "AKDOĞAN - MERKEZ",
            source : //KAYNAK VERİTABANI BAĞLANTISI
            {
                server: "93.182.77.35",
                database:"NITROGENPOS",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            target : //HEDEF VERİTABANI BAĞLANTISI
            {
                server: "172.16.122.250",
                database:"NITROGENPOS",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            auto : 1200000,  //OTOMATİK AKTARIM YAPILACAKSA BURAYA MİLİSANİYE CİNSİNDEN SÜRE YAZILIR (1000 = 1 SN) UNDEFINED VEYA BU KEY TANIMLANMAZSA OTOMATİK AKTARILMAZ.
            list :
            [
                //POS SALE 
                {
                    name : "AKDOĞAN -> MERKEZNITROGEN | POS SALE", //GÖRÜNEN ADI
                    select : function()
                    {
                        return {...Query.PosSaleSelect};
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT REF_NO FROM POS_SALES WHERE REF = @REF AND REF_NO = @REF_NO AND " + 
                            "LINE_NO = @LINE_NO AND TYPE = @TYPE",
                        param:['REF:string|25','REF_NO:int','LINE_NO:int','TYPE:int']
                    },
                    insert : function()
                    {
                        return {...Query.PosSaleInsert};
                    }
                },
                //POS PAYMENT
                {
                    name : "AKDOĞAN -> MERKEZNITROGEN | POS PAYMENT", //GÖRÜNEN ADI
                    select : function()
                    {
                        return {...Query.PosPaymentSelect};
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT REF_NO FROM POS_PAYMENT WHERE REF = @REF AND REF_NO = @REF_NO AND DOC_TYPE = @DOC_TYPE AND LINE_NO = @LINE_NO",
                        param:['REF:string|25','REF_NO:int','DOC_TYPE:int','LINE_NO:int']
                    },
                    insert : function()
                    {
                        return {...Query.PosPaymentInsert};
                    }
                },
            ]
        },
        { 
            name : "MERKEZ - SERDARLI",     
            source : //KAYNAK VERİTABANI BAĞLANTISI
            {
                server: "172.16.122.250",
                database:"NITROGENPOS",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            target : //HEDEF VERİTABANI BAĞLANTISI
            {
                server: "93.182.77.166",
                database:"NITROGENPOS",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            auto : 2800000,
            list :
            [
                //ITEM_PRICE
                {
                name : "MERKEZNITROGEN -> SERDARLI | ITEM_PRICE", //GÖRÜNEN ADI
                select : 
                {
                    query : "SELECT " +
                            "CUSER AS CUSER, " +
                            "LUSER AS LUSER, " +
                            "ITEM_CODE AS ITEM_CODE, " +
                            "TYPE AS TYPE, " +
                            "DEPOT AS DEPOT, " +
                            "START_DATE AS START_DATE, " +
                            "FINISH_DATE AS FINISH_DATE, " +
                            "PRICE AS PRICE, " +
                            "QUANTITY AS QUANTITY, " +
                            "CUSTOMER AS CUSTOMER " +
                            "FROM ITEM_PRICE WHERE DEPOT IN('0','1003') "
                },
                control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                {
                    query: "SELECT PRICE FROM ITEM_PRICE WHERE ITEM_CODE = @ITEM_CODE AND DEPOT = @DEPOT",
                    param:['ITEM_CODE:string|25','DEPOT:string|25']
                },
                update:     //UPDATE SORGUSU
                {
                    query: "UPDATE ITEM_PRICE SET PRICE = @PRICE,LDATE = GETDATE() WHERE ITEM_CODE = @ITEM_CODE AND DEPOT = @DEPOT",
                    param : ['PRICE:float','ITEM_CODE:string|25','DEPOT:string|25']
                },
                insert : function()
                {
                    return {...Query.ItemsPriceInsert};
                }
                },
                //ITEMS
                {
                    name : "MERKEZNITROGEN -> SERDARLI | ITEMS", //GÖRÜNEN ADI       
                    select : 
                    {
                        query : "SELECT " + 
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "CODE AS CODE, " + 
                                "NAME AS NAME, " + 
                                "SNAME AS SNAME, " + 
                                "ITEM_GRP AS ITEM_GRP, " + 
                                "TYPE AS TYPE, " + 
                                "VAT AS VAT, " + 
                                "COST_PRICE AS COST_PRICE, " + 
                                "MIN_PRICE AS MIN_PRICE, " + 
                                "MAX_PRICE AS MAX_PRICE, " + 
                                "STATUS AS STATUS, " + 
                                "PLU AS PLU, " + 
                                "WEIGHING AS WEIGHING " + 
                                "FROM ITEMS"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT CODE FROM ITEMS WHERE CODE = @CODE",
                        param:['CODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEMS SET NAME = @NAME, " +
                            "SNAME = @SNAME, " +
                            "ITEM_GRP = @ITEM_GRP, " +
                            "VAT = @VAT, " +
                            "LDATE = GETDATE() " + 
                            "WHERE CODE = @CODE",
                        param : ['NAME:string|250','SNAME:string|250','ITEM_GRP:string|25','VAT:float','CODE:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsInsert};
                    }
                },
                //ITEM_TAX
                {
                    name : "MERKEZNITROGEN -> SERDARLI | ITEM_TAX", //GÖRÜNEN ADI       
                    select : 
                    {
                        query : "SELECT " + 
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "ITEM_CODE AS ITEM_CODE, " + 
                                "WHOLEPNTR AS WHOLEPNTR, " +
                                "RETAILPNTR AS RETAILPNTR, " +
                                "VAT AS VAT " +
                                "FROM ITEM_TAX"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT ITEM_CODE FROM ITEM_TAX WHERE ITEM_CODE = @ITEM_CODE",
                        param:['ITEM_CODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEM_TAX SET " +
                            "WHOLEPNTR = @WHOLEPNTR, " +
                            "RETAILPNTR = @RETAILPNTR, " +
                            "VAT = @VAT, " +
                            "LDATE = GETDATE() " + 
                            "WHERE ITEM_CODE = @ITEM_CODE",
                        param : ['ITEM_CODE:string|25','WHOLEPNTR:int','RETAILPNTR:int','VAT:float']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsTaxInsert};
                    }
                },
                //ITEM_BARCODE
                {
                    name : "MERKEZNITROGEN -> VEYSELLİLER | ITEM_BARCODE", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "ITEM_CODE AS ITEM_CODE , " +
                                "BARCODE AS BARCODE , " +
                                "UNIT AS UNIT , " +
                                "TYPE AS TYPE " +
                                "FROM ITEM_BARCODE "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT ITEM_CODE FROM ITEM_BARCODE WHERE BARCODE = @BARCODE ",
                        param:['BARCODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEM_BARCODE SET " +
                            "UNIT = @UNIT, " +
                            "TYPE = @TYPE, " +
                            "LDATE = GETDATE() " + 
                            "WHERE BARCODE = @BARCODE ",
                        param : ['UNIT:int','TYPE:int','BARCODE:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsBarcodeInsert};
                    }
                },
                //ITEM_UNIT
                {
                    name : "MERKEZNITROGEN -> SERDARLI | ITEM_UNIT", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "ITEM_CODE AS ITEM_CODE, " +
                                "TYPE AS TYPE, " +
                                "NAME AS NAME, " +
                                "FACTOR AS FACTOR, " +
                                "WEIGHT AS WEIGHT, " +
                                "VOLUME AS VOLUME, " +
                                "WIDTH AS WIDTH, " +
                                "HEIGHT AS HEIGHT, " +
                                "SIZE AS SIZE, " +
                                "CODE AS CODE " +
                                "FROM ITEM_UNIT"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT ITEM_CODE,CODE FROM ITEM_UNIT WHERE ITEM_CODE = @ITEM_CODE AND CODE = @CODE",
                        param:['ITEM_CODE:string|25','CODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEM_UNIT SET " +
                            "NAME = @NAME, " +
                            "TYPE = @TYPE, " +
                            "FACTOR = @FACTOR, " +
                            "CODE = @CODE, " +
                            "LDATE = GETDATE() " + 
                            "WHERE ITEM_CODE = @ITEM_CODE AND CODE = @CODE",
                        param : ['ITEM_CODE:string|25','NAME:string|25','TYPE:int','FACTOR:int','CODE:int']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsUnitInsert};
                    }
                },
                //DEPOT
                {
                    name : "MERKEZNITROGEN -> SERDARLI | DEPOT", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "TYPE AS TYPE, " +
                                "CODE AS CODE, " +
                                "NAME AS NAME " +
                                "FROM DEPOT"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT CODE FROM DEPOT WHERE CODE = @CODE",
                        param:['CODE:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.DepotInsert};
                    }
                },
                //USERS
                {
                    name : "MERKEZNITROGEN -> VEYSELLİLER | USERS ", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CODE AS CODE, " +
                                "NAME AS NAME, " +
                                "PASSWORD AS PASSWORD, " +
                                "TAG AS TAG, " +
                                "STATUS AS STATUS " +
                                "FROM USERS "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT CODE FROM USERS WHERE CODE = @CODE",
                        param:['CODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE USERS SET " +
                            "NAME = @NAME, " +
                            "PASSWORD = @PASSWORD, " +
                            "TAG = @TAG, " +
                            "STATUS = @STATUS, " +
                            "LDATE = GETDATE() " + 
                            "WHERE CODE = @CODE ",
                        param : ['NAME:string|25','PASSWORD:string|25','TAG:int','STATUS:int','CODE:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.UsersInsert};
                    }
                },
                //PARAMS
                {
                    name : "MERKEZNITROGEN -> SERDARLI | PARAMS", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "NAME AS NAME, " +
                                "VALUE AS VALUE, " +
                                "TAG AS TAG, " +
                                "ID AS ID " +
                                "FROM PARAMS "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT NAME,ID FROM PARAMS WHERE NAME = @NAME AND ID = @ID ",
                        param:['NAME:string|25','ID:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE PARAMS SET " +
                            "VALUE = @VALUE, " +
                            "LDATE = GETDATE() " + 
                            "WHERE ID = @ID AND NAME = @NAME",
                        param : ['ID:string|25','VALUE:string|25','NAME:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.ParamsInsert};
                    }
                },
                //DEVICE
                {
                    name : "MERKEZNITROGEN -> SERDARLI | DEVICE", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "ID AS ID, " +
                                "NAME AS NAME, " +
                                "STATUS AS STATUS " +
                                "FROM DEVICE "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT ID FROM DEVICE WHERE ID = @ID ",
                        param:['ID:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.DeviceInsert};
                    }
                },
                //POS PLU
                {
                    name : "MERKEZNITROGEN -> SERDARLI | POS PLU", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "NAME AS NAME, " +
                                "LOCATION AS LOCATION, " +
                                "TYPE AS TYPE, " +
                                "ITEMS_CODE AS ITEMS_CODE, " +
                                "GRUP_INDEX AS GRUP_INDEX " +
                                "FROM POS_PLU "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT NAME,LOCATION,TYPE,ITEMS_CODE,GRUP_INDEX FROM POS_PLU WHERE GRUP_INDEX = @GRUP_INDEX AND TYPE = @TYPE AND LOCATION = @LOCATION ",
                        param:['GRUP_INDEX:int','TYPE:int','LOCATION:int']
                    },
                    update : 
                    {
                        query : "UPDATE POS_PLU SET NAME = @NAME , ITEMS_CODE = @ITEMS_CODE " +
                                "WHERE LOCATION = @LOCATION AND TYPE = @TYPE AND GRUP_INDEX = @GRUP_INDEX ",
                        param:['NAME:string|25','ITEMS_CODE:string|25','LOCATION:int','TYPE:int','GRUP_INDEX:int']
                    },
                    insert : function()
                    {
                        return {...Query.PosPluInsert};
                    }
                },
            ]
        },
        {
            name : "SERDARLI - MERKEZ",
            source : //KAYNAK VERİTABANI BAĞLANTISI
            {
                server: "93.182.77.166",
                database:"NITROGENPOS",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            target : //HEDEF VERİTABANI BAĞLANTISI
            {
                server: "172.16.122.250",
                database:"NITROGENPOS",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            auto : 1200000,  //OTOMATİK AKTARIM YAPILACAKSA BURAYA MİLİSANİYE CİNSİNDEN SÜRE YAZILIR (1000 = 1 SN) UNDEFINED VEYA BU KEY TANIMLANMAZSA OTOMATİK AKTARILMAZ.
            list :
            [
                //POS SALE 
                {
                    name : "SERDARLI -> MERKEZNITROGEN | POS SALE", //GÖRÜNEN ADI
                    select : function()
                    {
                        return {...Query.PosSaleSelect};
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT REF_NO FROM POS_SALES WHERE REF = @REF AND REF_NO = @REF_NO AND " + 
                            "LINE_NO = @LINE_NO AND TYPE = @TYPE",
                        param:['REF:string|25','REF_NO:int','LINE_NO:int','TYPE:int']
                    },
                    insert : function()
                    {
                        return {...Query.PosSaleInsert};
                    }
                },
                //POS PAYMENT
                {
                    name : "SERDARLI -> MERKEZNITROGEN | POS PAYMENT", //GÖRÜNEN ADI
                    select : function()
                    {
                        return {...Query.PosPaymentSelect};
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT REF_NO FROM POS_PAYMENT WHERE REF = @REF AND REF_NO = @REF_NO AND DOC_TYPE = @DOC_TYPE AND LINE_NO = @LINE_NO",
                        param:['REF:string|25','REF_NO:int','DOC_TYPE:int','LINE_NO:int']
                    },
                    insert : function()
                    {
                        return {...Query.PosPaymentInsert};
                    }
                },
            ]
        },
        { 
            name : "MERKEZ - LİMAN",     
            source : //KAYNAK VERİTABANI BAĞLANTISI
            {
                server: "172.16.122.250",
                database:"NITROGENPOS",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            target : //HEDEF VERİTABANI BAĞLANTISI
            {
                server: "93.182.78.209",
                database:"NITROGENPOS",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            auto : 3200000,
            list :
            [
                //ITEM_PRICE
                {
                name : "MERKEZNITROGEN -> LİMAN | ITEM_PRICE", //GÖRÜNEN ADI
                select : 
                {
                    query : "SELECT " +
                            "CUSER AS CUSER, " +
                            "LUSER AS LUSER, " +
                            "ITEM_CODE AS ITEM_CODE, " +
                            "TYPE AS TYPE, " +
                            "DEPOT AS DEPOT, " +
                            "START_DATE AS START_DATE, " +
                            "FINISH_DATE AS FINISH_DATE, " +
                            "PRICE AS PRICE, " +
                            "QUANTITY AS QUANTITY, " +
                            "CUSTOMER AS CUSTOMER " +
                            "FROM ITEM_PRICE WHERE DEPOT IN('0','1004') "
                },
                control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                {
                    query: "SELECT PRICE FROM ITEM_PRICE WHERE ITEM_CODE = @ITEM_CODE AND DEPOT = @DEPOT",
                    param:['ITEM_CODE:string|25','DEPOT:string|25']
                },
                update:     //UPDATE SORGUSU
                {
                    query: "UPDATE ITEM_PRICE SET PRICE = @PRICE,LDATE = GETDATE() WHERE ITEM_CODE = @ITEM_CODE AND DEPOT = @DEPOT",
                    param : ['PRICE:float','ITEM_CODE:string|25','DEPOT:string|25']
                },
                insert : function()
                {
                    return {...Query.ItemsPriceInsert};
                }
                },
                //ITEMS
                {
                    name : "MERKEZNITROGEN -> LİMAN | ITEMS", //GÖRÜNEN ADI       
                    select : 
                    {
                        query : "SELECT " + 
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "CODE AS CODE, " + 
                                "NAME AS NAME, " + 
                                "SNAME AS SNAME, " + 
                                "ITEM_GRP AS ITEM_GRP, " + 
                                "TYPE AS TYPE, " + 
                                "VAT AS VAT, " + 
                                "COST_PRICE AS COST_PRICE, " + 
                                "MIN_PRICE AS MIN_PRICE, " + 
                                "MAX_PRICE AS MAX_PRICE, " + 
                                "STATUS AS STATUS, " + 
                                "PLU AS PLU, " + 
                                "WEIGHING AS WEIGHING " + 
                                "FROM ITEMS"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT CODE FROM ITEMS WHERE CODE = @CODE",
                        param:['CODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEMS SET NAME = @NAME, " +
                            "SNAME = @SNAME, " +
                            "ITEM_GRP = @ITEM_GRP, " +
                            "VAT = @VAT, " +
                            "LDATE = GETDATE() " + 
                            "WHERE CODE = @CODE",
                        param : ['NAME:string|250','SNAME:string|250','ITEM_GRP:string|25','VAT:float','CODE:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsInsert};
                    }
                },
                //ITEM_TAX
                {
                    name : "MERKEZNITROGEN -> LİMAN | ITEM_TAX", //GÖRÜNEN ADI       
                    select : 
                    {
                        query : "SELECT " + 
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "ITEM_CODE AS ITEM_CODE, " + 
                                "WHOLEPNTR AS WHOLEPNTR, " +
                                "RETAILPNTR AS RETAILPNTR, " +
                                "VAT AS VAT " +
                                "FROM ITEM_TAX"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT ITEM_CODE FROM ITEM_TAX WHERE ITEM_CODE = @ITEM_CODE",
                        param:['ITEM_CODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEM_TAX SET " +
                            "WHOLEPNTR = @WHOLEPNTR, " +
                            "RETAILPNTR = @RETAILPNTR, " +
                            "VAT = @VAT, " +
                            "LDATE = GETDATE() " + 
                            "WHERE ITEM_CODE = @ITEM_CODE",
                        param : ['ITEM_CODE:string|25','WHOLEPNTR:int','RETAILPNTR:int','VAT:float']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsTaxInsert};
                    }
                },
                //ITEM_BARCODE
                {
                    name : "MERKEZNITROGEN -> VEYSELLİLER | ITEM_BARCODE", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "ITEM_CODE AS ITEM_CODE , " +
                                "BARCODE AS BARCODE , " +
                                "UNIT AS UNIT , " +
                                "TYPE AS TYPE " +
                                "FROM ITEM_BARCODE "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT ITEM_CODE FROM ITEM_BARCODE WHERE BARCODE = @BARCODE ",
                        param:['BARCODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEM_BARCODE SET " +
                            "UNIT = @UNIT, " +
                            "TYPE = @TYPE, " +
                            "LDATE = GETDATE() " + 
                            "WHERE BARCODE = @BARCODE ",
                        param : ['UNIT:int','TYPE:int','BARCODE:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsBarcodeInsert};
                    }
                },
                //ITEM_UNIT
                {
                    name : "MERKEZNITROGEN -> LİMAN | ITEM_UNIT", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "ITEM_CODE AS ITEM_CODE, " +
                                "TYPE AS TYPE, " +
                                "NAME AS NAME, " +
                                "FACTOR AS FACTOR, " +
                                "WEIGHT AS WEIGHT, " +
                                "VOLUME AS VOLUME, " +
                                "WIDTH AS WIDTH, " +
                                "HEIGHT AS HEIGHT, " +
                                "SIZE AS SIZE, " +
                                "CODE AS CODE " +
                                "FROM ITEM_UNIT"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT ITEM_CODE,CODE FROM ITEM_UNIT WHERE ITEM_CODE = @ITEM_CODE AND CODE = @CODE",
                        param:['ITEM_CODE:string|25','CODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEM_UNIT SET " +
                            "NAME = @NAME, " +
                            "TYPE = @TYPE, " +
                            "FACTOR = @FACTOR, " +
                            "CODE = @CODE, " +
                            "LDATE = GETDATE() " + 
                            "WHERE ITEM_CODE = @ITEM_CODE AND CODE = @CODE",
                        param : ['ITEM_CODE:string|25','NAME:string|25','TYPE:int','FACTOR:int','CODE:int']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsUnitInsert};
                    }
                },
                //DEPOT
                {
                    name : "MERKEZNITROGEN -> LİMAN | DEPOT", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "TYPE AS TYPE, " +
                                "CODE AS CODE, " +
                                "NAME AS NAME " +
                                "FROM DEPOT"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT CODE FROM DEPOT WHERE CODE = @CODE",
                        param:['CODE:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.DepotInsert};
                    }
                },
                //USERS
                {
                    name : "MERKEZNITROGEN -> VEYSELLİLER | USERS ", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CODE AS CODE, " +
                                "NAME AS NAME, " +
                                "PASSWORD AS PASSWORD, " +
                                "TAG AS TAG, " +
                                "STATUS AS STATUS " +
                                "FROM USERS "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT CODE FROM USERS WHERE CODE = @CODE",
                        param:['CODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE USERS SET " +
                            "NAME = @NAME, " +
                            "PASSWORD = @PASSWORD, " +
                            "TAG = @TAG, " +
                            "STATUS = @STATUS, " +
                            "LDATE = GETDATE() " + 
                            "WHERE CODE = @CODE ",
                        param : ['NAME:string|25','PASSWORD:string|25','TAG:int','STATUS:int','CODE:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.UsersInsert};
                    }
                },            
                //PARAMS
                {
                    name : "MERKEZNITROGEN -> LİMAN | PARAMS", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "NAME AS NAME, " +
                                "VALUE AS VALUE, " +
                                "TAG AS TAG, " +
                                "ID AS ID " +
                                "FROM PARAMS "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT NAME,ID FROM PARAMS WHERE NAME = @NAME AND ID = @ID ",
                        param:['NAME:string|25','ID:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE PARAMS SET " +
                            "VALUE = @VALUE, " +
                            "LDATE = GETDATE() " + 
                            "WHERE ID = @ID AND NAME = @NAME",
                        param : ['ID:string|25','VALUE:string|25','NAME:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.ParamsInsert};
                    }
                },
                //DEVICE
                {
                    name : "MERKEZNITROGEN -> LİMAN | DEVICE", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "ID AS ID, " +
                                "NAME AS NAME, " +
                                "STATUS AS STATUS " +
                                "FROM DEVICE "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT ID FROM DEVICE WHERE ID = @ID ",
                        param:['ID:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.DeviceInsert};
                    }
                },
                //POS PLU
                {
                    name : "MERKEZNITROGEN -> LİMAN | POS PLU", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "NAME AS NAME, " +
                                "LOCATION AS LOCATION, " +
                                "TYPE AS TYPE, " +
                                "ITEMS_CODE AS ITEMS_CODE, " +
                                "GRUP_INDEX AS GRUP_INDEX " +
                                "FROM POS_PLU "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT NAME,LOCATION,TYPE,ITEMS_CODE,GRUP_INDEX FROM POS_PLU WHERE GRUP_INDEX = @GRUP_INDEX AND TYPE = @TYPE AND LOCATION = @LOCATION ",
                        param:['GRUP_INDEX:int','TYPE:int','LOCATION:int']
                    },
                    update : 
                    {
                        query : "UPDATE POS_PLU SET NAME = @NAME , ITEMS_CODE = @ITEMS_CODE " +
                                "WHERE LOCATION = @LOCATION AND TYPE = @TYPE AND GRUP_INDEX = @GRUP_INDEX ",
                        param:['NAME:string|25','ITEMS_CODE:string|25','LOCATION:int','TYPE:int','GRUP_INDEX:int']
                    },
                    insert : function()
                    {
                        return {...Query.PosPluInsert};
                    }
                },
            ]
        },
        {
            name : "LİMAN - MERKEZ",
            source : //KAYNAK VERİTABANI BAĞLANTISI
            {
                server: "93.182.78.209",
                database:"NITROGENPOS",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            target : //HEDEF VERİTABANI BAĞLANTISI
            {
                server: "172.16.122.250",
                database:"NITROGENPOS",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            auto : 1200000,  //OTOMATİK AKTARIM YAPILACAKSA BURAYA MİLİSANİYE CİNSİNDEN SÜRE YAZILIR (1000 = 1 SN) UNDEFINED VEYA BU KEY TANIMLANMAZSA OTOMATİK AKTARILMAZ.
            list :
            [
                //POS SALE 
                {
                    name : "LİMAN -> MERKEZNITROGEN | POS SALE", //GÖRÜNEN ADI
                    select : function()
                    {
                        return {...Query.PosSaleSelect};
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT REF_NO FROM POS_SALES WHERE REF = @REF AND REF_NO = @REF_NO AND " + 
                            "LINE_NO = @LINE_NO AND TYPE = @TYPE",
                        param:['REF:string|25','REF_NO:int','LINE_NO:int','TYPE:int']
                    },
                    insert : function()
                    {
                        return {...Query.PosSaleInsert};
                    }
                },
                //POS PAYMENT
                {
                    name : "LİMAN -> MERKEZNITROGEN | POS PAYMENT", //GÖRÜNEN ADI
                    select : function()
                    {
                        return {...Query.PosPaymentSelect};
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT REF_NO FROM POS_PAYMENT WHERE REF = @REF AND REF_NO = @REF_NO AND DOC_TYPE = @DOC_TYPE AND LINE_NO = @LINE_NO",
                        param:['REF:string|25','REF_NO:int','DOC_TYPE:int','LINE_NO:int']
                    },
                    insert : function()
                    {
                        return {...Query.PosPaymentInsert};
                    }
                },
            ]
        },
        { 
            name : "MERKEZ - MARAŞ",     
            source : //KAYNAK VERİTABANI BAĞLANTISI
            {
                server: "172.16.122.250",
                database:"NITROGENPOS",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            target : //HEDEF VERİTABANI BAĞLANTISI
            {
                server: "93.182.75.69",
                database:"NITROGENPOS",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            auto : 3600000,
            list :
            [
                //ITEM_PRICE
                {
                name : "MERKEZNITROGEN -> MARAŞ | ITEM_PRICE", //GÖRÜNEN ADI
                select : 
                {
                    query : "SELECT " +
                            "CUSER AS CUSER, " +
                            "LUSER AS LUSER, " +
                            "ITEM_CODE AS ITEM_CODE, " +
                            "TYPE AS TYPE, " +
                            "DEPOT AS DEPOT, " +
                            "START_DATE AS START_DATE, " +
                            "FINISH_DATE AS FINISH_DATE, " +
                            "PRICE AS PRICE, " +
                            "QUANTITY AS QUANTITY, " +
                            "CUSTOMER AS CUSTOMER " +
                            "FROM ITEM_PRICE WHERE DEPOT IN('0','1005') "
                },
                control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                {
                    query: "SELECT PRICE FROM ITEM_PRICE WHERE ITEM_CODE = @ITEM_CODE AND DEPOT = @DEPOT",
                    param:['ITEM_CODE:string|25','DEPOT:string|25']
                },
                update:     //UPDATE SORGUSU
                {
                    query: "UPDATE ITEM_PRICE SET PRICE = @PRICE,LDATE = GETDATE() WHERE ITEM_CODE = @ITEM_CODE AND DEPOT = @DEPOT",
                    param : ['PRICE:float','ITEM_CODE:string|25','DEPOT:string|25']
                },
                insert : function()
                {
                    return {...Query.ItemsPriceInsert};
                }
                },
                //ITEMS
                {
                    name : "MERKEZNITROGEN -> MARAŞ | ITEMS", //GÖRÜNEN ADI       
                    select : 
                    {
                        query : "SELECT " + 
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "CODE AS CODE, " + 
                                "NAME AS NAME, " + 
                                "SNAME AS SNAME, " + 
                                "ITEM_GRP AS ITEM_GRP, " + 
                                "TYPE AS TYPE, " + 
                                "VAT AS VAT, " + 
                                "COST_PRICE AS COST_PRICE, " + 
                                "MIN_PRICE AS MIN_PRICE, " + 
                                "MAX_PRICE AS MAX_PRICE, " + 
                                "STATUS AS STATUS, " + 
                                "PLU AS PLU, " + 
                                "WEIGHING AS WEIGHING " + 
                                "FROM ITEMS"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT CODE FROM ITEMS WHERE CODE = @CODE",
                        param:['CODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEMS SET NAME = @NAME, " +
                            "SNAME = @SNAME, " +
                            "ITEM_GRP = @ITEM_GRP, " +
                            "VAT = @VAT, " +
                            "LDATE = GETDATE() " + 
                            "WHERE CODE = @CODE",
                        param : ['NAME:string|250','SNAME:string|250','ITEM_GRP:string|25','VAT:float','CODE:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsInsert};
                    }
                },
                //ITEM_TAX
                {
                    name : "MERKEZNITROGEN -> MARAŞ | ITEM_TAX", //GÖRÜNEN ADI       
                    select : 
                    {
                        query : "SELECT " + 
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "ITEM_CODE AS ITEM_CODE, " + 
                                "WHOLEPNTR AS WHOLEPNTR, " +
                                "RETAILPNTR AS RETAILPNTR, " +
                                "VAT AS VAT " +
                                "FROM ITEM_TAX"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT ITEM_CODE FROM ITEM_TAX WHERE ITEM_CODE = @ITEM_CODE",
                        param:['ITEM_CODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEM_TAX SET " +
                            "WHOLEPNTR = @WHOLEPNTR, " +
                            "RETAILPNTR = @RETAILPNTR, " +
                            "VAT = @VAT, " +
                            "LDATE = GETDATE() " + 
                            "WHERE ITEM_CODE = @ITEM_CODE",
                        param : ['ITEM_CODE:string|25','WHOLEPNTR:int','RETAILPNTR:int','VAT:float']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsTaxInsert};
                    }
                },
                //ITEM_BARCODE
                {
                    name : "MERKEZNITROGEN -> MARAŞ | ITEM_BARCODE", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "ITEM_CODE AS ITEM_CODE , " +
                                "BARCODE AS BARCODE , " +
                                "UNIT AS UNIT , " +
                                "TYPE AS TYPE " +
                                "FROM ITEM_BARCODE "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT ITEM_CODE FROM ITEM_BARCODE WHERE BARCODE = @BARCODE ",
                        param:['BARCODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEM_BARCODE SET " +
                            "UNIT = @UNIT, " +
                            "TYPE = @TYPE, " +
                            "LDATE = GETDATE() " + 
                            "WHERE BARCODE = @BARCODE ",
                        param : ['UNIT:int','TYPE:int','BARCODE:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsBarcodeInsert};
                    }
                },
                //ITEM_UNIT
                {
                    name : "MERKEZNITROGEN -> MARAŞ | ITEM_UNIT", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "ITEM_CODE AS ITEM_CODE, " +
                                "TYPE AS TYPE, " +
                                "NAME AS NAME, " +
                                "FACTOR AS FACTOR, " +
                                "WEIGHT AS WEIGHT, " +
                                "VOLUME AS VOLUME, " +
                                "WIDTH AS WIDTH, " +
                                "HEIGHT AS HEIGHT, " +
                                "SIZE AS SIZE, " +
                                "CODE AS CODE " +
                                "FROM ITEM_UNIT"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT ITEM_CODE,CODE FROM ITEM_UNIT WHERE ITEM_CODE = @ITEM_CODE AND CODE = @CODE",
                        param:['ITEM_CODE:string|25','CODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEM_UNIT SET " +
                            "NAME = @NAME, " +
                            "TYPE = @TYPE, " +
                            "FACTOR = @FACTOR, " +
                            "CODE = @CODE, " +
                            "LDATE = GETDATE() " + 
                            "WHERE ITEM_CODE = @ITEM_CODE AND CODE = @CODE",
                        param : ['ITEM_CODE:string|25','NAME:string|25','TYPE:int','FACTOR:int','CODE:int']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsUnitInsert};
                    }
                },
                //DEPOT
                {
                    name : "MERKEZNITROGEN -> MARAŞ | DEPOT", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "TYPE AS TYPE, " +
                                "CODE AS CODE, " +
                                "NAME AS NAME " +
                                "FROM DEPOT"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT CODE FROM DEPOT WHERE CODE = @CODE",
                        param:['CODE:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.DepotInsert};
                    }
                },
                //USERS
                {
                    name : "MERKEZNITROGEN -> MARAŞ | USERS ", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CODE AS CODE, " +
                                "NAME AS NAME, " +
                                "PASSWORD AS PASSWORD, " +
                                "TAG AS TAG, " +
                                "STATUS AS STATUS " +
                                "FROM USERS "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT CODE FROM USERS WHERE CODE = @CODE",
                        param:['CODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE USERS SET " +
                            "NAME = @NAME, " +
                            "PASSWORD = @PASSWORD, " +
                            "TAG = @TAG, " +
                            "STATUS = @STATUS, " +
                            "LDATE = GETDATE() " + 
                            "WHERE CODE = @CODE ",
                        param : ['NAME:string|25','PASSWORD:string|25','TAG:int','STATUS:int','CODE:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.UsersInsert};
                    }
                },            
                //PARAMS
                {
                    name : "MERKEZNITROGEN -> MARAŞ | PARAMS", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "NAME AS NAME, " +
                                "VALUE AS VALUE, " +
                                "TAG AS TAG, " +
                                "ID AS ID " +
                                "FROM PARAMS "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT NAME,ID FROM PARAMS WHERE NAME = @NAME AND ID = @ID ",
                        param:['NAME:string|25','ID:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE PARAMS SET " +
                            "VALUE = @VALUE, " +
                            "LDATE = GETDATE() " + 
                            "WHERE ID = @ID AND NAME = @NAME",
                        param : ['ID:string|25','VALUE:string|25','NAME:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.ParamsInsert};
                    }
                },
                //DEVICE
                {
                    name : "MERKEZNITROGEN -> MARAŞ | DEVICE", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "ID AS ID, " +
                                "NAME AS NAME, " +
                                "STATUS AS STATUS " +
                                "FROM DEVICE "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT ID FROM DEVICE WHERE ID = @ID ",
                        param:['ID:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.DeviceInsert};
                    }
                },
                //POS PLU
                {
                    name : "MERKEZNITROGEN -> MARAŞ | POS PLU", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "NAME AS NAME, " +
                                "LOCATION AS LOCATION, " +
                                "TYPE AS TYPE, " +
                                "ITEMS_CODE AS ITEMS_CODE, " +
                                "GRUP_INDEX AS GRUP_INDEX " +
                                "FROM POS_PLU "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT NAME,LOCATION,TYPE,ITEMS_CODE,GRUP_INDEX FROM POS_PLU WHERE GRUP_INDEX = @GRUP_INDEX AND TYPE = @TYPE AND LOCATION = @LOCATION ",
                        param:['GRUP_INDEX:int','TYPE:int','LOCATION:int']
                    },
                    update : 
                    {
                        query : "UPDATE POS_PLU SET NAME = @NAME , ITEMS_CODE = @ITEMS_CODE " +
                                "WHERE LOCATION = @LOCATION AND TYPE = @TYPE AND GRUP_INDEX = @GRUP_INDEX ",
                        param:['NAME:string|25','ITEMS_CODE:string|25','LOCATION:int','TYPE:int','GRUP_INDEX:int']
                    },
                    insert : function()
                    {
                        return {...Query.PosPluInsert};
                    }
                },
            ]
        },
        {
            name : "MARAŞ - MERKEZ",
            source : //KAYNAK VERİTABANI BAĞLANTISI
            {
                server: "93.182.75.69",
                database:"NITROGENPOS",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            target : //HEDEF VERİTABANI BAĞLANTISI
            {
                server: "172.16.122.250",
                database:"NITROGENPOS",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            auto : 1200000,  //OTOMATİK AKTARIM YAPILACAKSA BURAYA MİLİSANİYE CİNSİNDEN SÜRE YAZILIR (1000 = 1 SN) UNDEFINED VEYA BU KEY TANIMLANMAZSA OTOMATİK AKTARILMAZ.
            list :
            [
                //POS SALE 
                {
                    name : "MARAŞ -> MERKEZNITROGEN | POS SALE", //GÖRÜNEN ADI
                    select : function()
                    {
                        return {...Query.PosSaleSelect};
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT REF_NO FROM POS_SALES WHERE REF = @REF AND REF_NO = @REF_NO AND " + 
                            "LINE_NO = @LINE_NO AND TYPE = @TYPE",
                        param:['REF:string|25','REF_NO:int','LINE_NO:int','TYPE:int']
                    },
                    insert : function()
                    {
                        return {...Query.PosSaleInsert};
                    }
                },
                //POS PAYMENT
                {
                    name : "MARAŞ -> MERKEZNITROGEN | POS PAYMENT", //GÖRÜNEN ADI
                    select : function()
                    {
                        return {...Query.PosPaymentSelect};
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT REF_NO FROM POS_PAYMENT WHERE REF = @REF AND REF_NO = @REF_NO AND DOC_TYPE = @DOC_TYPE AND LINE_NO = @LINE_NO",
                        param:['REF:string|25','REF_NO:int','DOC_TYPE:int','LINE_NO:int']
                    },
                    insert : function()
                    {
                        return {...Query.PosPaymentInsert};
                    }
                },
            ]
        },
        { 
            name : "MERKEZ - GEMİKONAĞI",     
            source : //KAYNAK VERİTABANI BAĞLANTISI
            {
                server: "172.16.122.250",
                database:"NITROGENPOS",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            target : //HEDEF VERİTABANI BAĞLANTISI
            {
                server: "93.182.78.47",
                database:"NITROGENPOS",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            auto : 4000000,
            list :
            [
                //ITEM_PRICE
                {
                name : "MERKEZNITROGEN -> GEMİKONAĞI | ITEM_PRICE", //GÖRÜNEN ADI
                select : 
                {
                    query : "SELECT " +
                            "CUSER AS CUSER, " +
                            "LUSER AS LUSER, " +
                            "ITEM_CODE AS ITEM_CODE, " +
                            "TYPE AS TYPE, " +
                            "DEPOT AS DEPOT, " +
                            "START_DATE AS START_DATE, " +
                            "FINISH_DATE AS FINISH_DATE, " +
                            "PRICE AS PRICE, " +
                            "QUANTITY AS QUANTITY, " +
                            "CUSTOMER AS CUSTOMER " +
                            "FROM ITEM_PRICE WHERE DEPOT IN('0','1006') "
                },
                control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                {
                    query: "SELECT PRICE FROM ITEM_PRICE WHERE ITEM_CODE = @ITEM_CODE AND DEPOT = @DEPOT",
                    param:['ITEM_CODE:string|25','DEPOT:string|25']
                },
                update:     //UPDATE SORGUSU
                {
                    query: "UPDATE ITEM_PRICE SET PRICE = @PRICE,LDATE = GETDATE() WHERE ITEM_CODE = @ITEM_CODE AND DEPOT = @DEPOT",
                    param : ['PRICE:float','ITEM_CODE:string|25','DEPOT:string|25']
                },
                insert : function()
                {
                    return {...Query.ItemsPriceInsert};
                }
                },
                //ITEMS
                {
                    name : "MERKEZNITROGEN -> GEMİ KONAĞI | ITEMS", //GÖRÜNEN ADI       
                    select : 
                    {
                        query : "SELECT " + 
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "CODE AS CODE, " + 
                                "NAME AS NAME, " + 
                                "SNAME AS SNAME, " + 
                                "ITEM_GRP AS ITEM_GRP, " + 
                                "TYPE AS TYPE, " + 
                                "VAT AS VAT, " + 
                                "COST_PRICE AS COST_PRICE, " + 
                                "MIN_PRICE AS MIN_PRICE, " + 
                                "MAX_PRICE AS MAX_PRICE, " + 
                                "STATUS AS STATUS, " + 
                                "PLU AS PLU, " + 
                                "WEIGHING AS WEIGHING " + 
                                "FROM ITEMS"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT CODE FROM ITEMS WHERE CODE = @CODE",
                        param:['CODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEMS SET NAME = @NAME, " +
                            "SNAME = @SNAME, " +
                            "ITEM_GRP = @ITEM_GRP, " +
                            "VAT = @VAT, " +
                            "LDATE = GETDATE() " + 
                            "WHERE CODE = @CODE",
                        param : ['NAME:string|250','SNAME:string|250','ITEM_GRP:string|25','VAT:float','CODE:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsInsert};
                    }
                },
                //ITEM_TAX
                {
                    name : "MERKEZNITROGEN -> GEMİ KONAĞI | ITEM_TAX", //GÖRÜNEN ADI       
                    select : 
                    {
                        query : "SELECT " + 
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "ITEM_CODE AS ITEM_CODE, " + 
                                "WHOLEPNTR AS WHOLEPNTR, " +
                                "RETAILPNTR AS RETAILPNTR, " +
                                "VAT AS VAT " +
                                "FROM ITEM_TAX"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT ITEM_CODE FROM ITEM_TAX WHERE ITEM_CODE = @ITEM_CODE",
                        param:['ITEM_CODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEM_TAX SET " +
                            "WHOLEPNTR = @WHOLEPNTR, " +
                            "RETAILPNTR = @RETAILPNTR, " +
                            "VAT = @VAT, " +
                            "LDATE = GETDATE() " + 
                            "WHERE ITEM_CODE = @ITEM_CODE",
                        param : ['ITEM_CODE:string|25','WHOLEPNTR:int','RETAILPNTR:int','VAT:float']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsTaxInsert};
                    }
                },
                //ITEM_BARCODE
                {
                    name : "MERKEZNITROGEN -> GEMİ KONAĞI | ITEM_BARCODE", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "ITEM_CODE AS ITEM_CODE , " +
                                "BARCODE AS BARCODE , " +
                                "UNIT AS UNIT , " +
                                "TYPE AS TYPE " +
                                "FROM ITEM_BARCODE "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT ITEM_CODE FROM ITEM_BARCODE WHERE BARCODE = @BARCODE ",
                        param:['BARCODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEM_BARCODE SET " +
                            "UNIT = @UNIT, " +
                            "TYPE = @TYPE, " +
                            "LDATE = GETDATE() " + 
                            "WHERE BARCODE = @BARCODE ",
                        param : ['UNIT:int','TYPE:int','BARCODE:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsBarcodeInsert};
                    }
                },
                //ITEM_UNIT
                {
                    name : "MERKEZNITROGEN -> GEMİ KONAĞI | ITEM_UNIT", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "ITEM_CODE AS ITEM_CODE, " +
                                "TYPE AS TYPE, " +
                                "NAME AS NAME, " +
                                "FACTOR AS FACTOR, " +
                                "WEIGHT AS WEIGHT, " +
                                "VOLUME AS VOLUME, " +
                                "WIDTH AS WIDTH, " +
                                "HEIGHT AS HEIGHT, " +
                                "SIZE AS SIZE, " +
                                "CODE AS CODE " +
                                "FROM ITEM_UNIT"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT ITEM_CODE,CODE FROM ITEM_UNIT WHERE ITEM_CODE = @ITEM_CODE AND CODE = @CODE",
                        param:['ITEM_CODE:string|25','CODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEM_UNIT SET " +
                            "NAME = @NAME, " +
                            "TYPE = @TYPE, " +
                            "FACTOR = @FACTOR, " +
                            "CODE = @CODE, " +
                            "LDATE = GETDATE() " + 
                            "WHERE ITEM_CODE = @ITEM_CODE AND CODE = @CODE",
                        param : ['ITEM_CODE:string|25','NAME:string|25','TYPE:int','FACTOR:int','CODE:int']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsUnitInsert};
                    }
                },
                //DEPOT
                {
                    name : "MERKEZNITROGEN -> GEMİ KONAĞI | DEPOT", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "TYPE AS TYPE, " +
                                "CODE AS CODE, " +
                                "NAME AS NAME " +
                                "FROM DEPOT"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT CODE FROM DEPOT WHERE CODE = @CODE",
                        param:['CODE:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.DepotInsert};
                    }
                },
                //USERS
                {
                    name : "MERKEZNITROGEN -> GEMİ KONAĞI | USERS ", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CODE AS CODE, " +
                                "NAME AS NAME, " +
                                "PASSWORD AS PASSWORD, " +
                                "TAG AS TAG, " +
                                "STATUS AS STATUS " +
                                "FROM USERS "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT CODE FROM USERS WHERE CODE = @CODE",
                        param:['CODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE USERS SET " +
                            "NAME = @NAME, " +
                            "PASSWORD = @PASSWORD, " +
                            "TAG = @TAG, " +
                            "STATUS = @STATUS, " +
                            "LDATE = GETDATE() " + 
                            "WHERE CODE = @CODE ",
                        param : ['NAME:string|25','PASSWORD:string|25','TAG:int','STATUS:int','CODE:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.UsersInsert};
                    }
                },            
                //PARAMS
                {
                    name : "MERKEZNITROGEN -> GEMİ KONAĞI | PARAMS", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "NAME AS NAME, " +
                                "VALUE AS VALUE, " +
                                "TAG AS TAG, " +
                                "ID AS ID " +
                                "FROM PARAMS "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT NAME,ID FROM PARAMS WHERE NAME = @NAME AND ID = @ID ",
                        param:['NAME:string|25','ID:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE PARAMS SET " +
                            "VALUE = @VALUE, " +
                            "LDATE = GETDATE() " + 
                            "WHERE ID = @ID AND NAME = @NAME",
                        param : ['ID:string|25','VALUE:string|25','NAME:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.ParamsInsert};
                    }
                },
                //DEVICE
                {
                    name : "MERKEZNITROGEN -> GEMİ KONAĞI | DEVICE", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "ID AS ID, " +
                                "NAME AS NAME, " +
                                "STATUS AS STATUS " +
                                "FROM DEVICE "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT ID FROM DEVICE WHERE ID = @ID ",
                        param:['ID:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.DeviceInsert};
                    }
                },
                //POS PLU
                {
                    name : "MERKEZNITROGEN -> GEMİ KONAĞI | POS PLU", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "NAME AS NAME, " +
                                "LOCATION AS LOCATION, " +
                                "TYPE AS TYPE, " +
                                "ITEMS_CODE AS ITEMS_CODE, " +
                                "GRUP_INDEX AS GRUP_INDEX " +
                                "FROM POS_PLU "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT NAME,LOCATION,TYPE,ITEMS_CODE,GRUP_INDEX FROM POS_PLU WHERE GRUP_INDEX = @GRUP_INDEX AND TYPE = @TYPE AND LOCATION = @LOCATION ",
                        param:['GRUP_INDEX:int','TYPE:int','LOCATION:int']
                    },
                    update : 
                    {
                        query : "UPDATE POS_PLU SET NAME = @NAME , ITEMS_CODE = @ITEMS_CODE " +
                                "WHERE LOCATION = @LOCATION AND TYPE = @TYPE AND GRUP_INDEX = @GRUP_INDEX ",
                        param:['NAME:string|25','ITEMS_CODE:string|25','LOCATION:int','TYPE:int','GRUP_INDEX:int']
                    },
                    insert : function()
                    {
                        return {...Query.PosPluInsert};
                    }
                },
            ]
        },
        {
            name : "GEMİ KONAĞI - MERKEZ",
            source : //KAYNAK VERİTABANI BAĞLANTISI
            {
                server: "93.182.78.47",
                database:"NITROGENPOS",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            target : //HEDEF VERİTABANI BAĞLANTISI
            {
                server: "172.16.122.250",
                database:"NITROGENPOS",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            auto : 1200000,  //OTOMATİK AKTARIM YAPILACAKSA BURAYA MİLİSANİYE CİNSİNDEN SÜRE YAZILIR (1000 = 1 SN) UNDEFINED VEYA BU KEY TANIMLANMAZSA OTOMATİK AKTARILMAZ.
            list :
            [
                //POS SALE 
                {
                    name : "GEMİ KONAĞI -> MERKEZNITROGEN | POS SALE", //GÖRÜNEN ADI
                    select : function()
                    {
                        return {...Query.PosSaleSelect};
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT REF_NO FROM POS_SALES WHERE REF = @REF AND REF_NO = @REF_NO AND " + 
                            "LINE_NO = @LINE_NO AND TYPE = @TYPE",
                        param:['REF:string|25','REF_NO:int','LINE_NO:int','TYPE:int']
                    },
                    insert : function()
                    {
                        return {...Query.PosSaleInsert};
                    }
                },
                //POS PAYMENT
                {
                    name : "GEMİ KONAĞI -> MERKEZNITROGEN | POS PAYMENT", //GÖRÜNEN ADI
                    select : function()
                    {
                        return {...Query.PosPaymentSelect};
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT REF_NO FROM POS_PAYMENT WHERE REF = @REF AND REF_NO = @REF_NO AND DOC_TYPE = @DOC_TYPE AND LINE_NO = @LINE_NO",
                        param:['REF:string|25','REF_NO:int','DOC_TYPE:int','LINE_NO:int']
                    },
                    insert : function()
                    {
                        return {...Query.PosPaymentInsert};
                    }
                },
            ]
        },
        { 
            name : "MERKEZ - YENİŞEHİR",     
            source : //KAYNAK VERİTABANI BAĞLANTISI
            {
                server: "172.16.122.250",
                database:"NITROGENPOS",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            target : //HEDEF VERİTABANI BAĞLANTISI
            {
                server: "93.182.78.156",
                database:"NITROGENPOS",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            auto : 4000000,
            list :
            [
                //ITEM_PRICE
                {
                name : "MERKEZNITROGEN -> YENİŞEHİR | ITEM_PRICE", //GÖRÜNEN ADI
                select : 
                {
                    query : "SELECT " +
                            "CUSER AS CUSER, " +
                            "LUSER AS LUSER, " +
                            "ITEM_CODE AS ITEM_CODE, " +
                            "TYPE AS TYPE, " +
                            "DEPOT AS DEPOT, " +
                            "START_DATE AS START_DATE, " +
                            "FINISH_DATE AS FINISH_DATE, " +
                            "PRICE AS PRICE, " +
                            "QUANTITY AS QUANTITY, " +
                            "CUSTOMER AS CUSTOMER " +
                            "FROM ITEM_PRICE WHERE DEPOT IN('0','1007') "
                },
                control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                {
                    query: "SELECT PRICE FROM ITEM_PRICE WHERE ITEM_CODE = @ITEM_CODE AND DEPOT = @DEPOT",
                    param:['ITEM_CODE:string|25','DEPOT:string|25']
                },
                update:     //UPDATE SORGUSU
                {
                    query: "UPDATE ITEM_PRICE SET PRICE = @PRICE,LDATE = GETDATE() WHERE ITEM_CODE = @ITEM_CODE AND DEPOT = @DEPOT",
                    param : ['PRICE:float','ITEM_CODE:string|25','DEPOT:string|25']
                },
                insert : function()
                {
                    return {...Query.ItemsPriceInsert};
                }
                },
                //ITEMS
                {
                    name : "MERKEZNITROGEN -> YENİŞEHİR | ITEMS", //GÖRÜNEN ADI       
                    select : 
                    {
                        query : "SELECT " + 
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "CODE AS CODE, " + 
                                "NAME AS NAME, " + 
                                "SNAME AS SNAME, " + 
                                "ITEM_GRP AS ITEM_GRP, " + 
                                "TYPE AS TYPE, " + 
                                "VAT AS VAT, " + 
                                "COST_PRICE AS COST_PRICE, " + 
                                "MIN_PRICE AS MIN_PRICE, " + 
                                "MAX_PRICE AS MAX_PRICE, " + 
                                "STATUS AS STATUS, " + 
                                "PLU AS PLU, " + 
                                "WEIGHING AS WEIGHING " + 
                                "FROM ITEMS"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT CODE FROM ITEMS WHERE CODE = @CODE",
                        param:['CODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEMS SET NAME = @NAME, " +
                            "SNAME = @SNAME, " +
                            "ITEM_GRP = @ITEM_GRP, " +
                            "VAT = @VAT, " +
                            "LDATE = GETDATE() " + 
                            "WHERE CODE = @CODE",
                        param : ['NAME:string|250','SNAME:string|250','ITEM_GRP:string|25','VAT:float','CODE:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsInsert};
                    }
                },
                //ITEM_TAX
                {
                    name : "MERKEZNITROGEN -> YENİŞEHİR | ITEM_TAX", //GÖRÜNEN ADI       
                    select : 
                    {
                        query : "SELECT " + 
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "ITEM_CODE AS ITEM_CODE, " + 
                                "WHOLEPNTR AS WHOLEPNTR, " +
                                "RETAILPNTR AS RETAILPNTR, " +
                                "VAT AS VAT " +
                                "FROM ITEM_TAX"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT ITEM_CODE FROM ITEM_TAX WHERE ITEM_CODE = @ITEM_CODE",
                        param:['ITEM_CODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEM_TAX SET " +
                            "WHOLEPNTR = @WHOLEPNTR, " +
                            "RETAILPNTR = @RETAILPNTR, " +
                            "VAT = @VAT, " +
                            "LDATE = GETDATE() " + 
                            "WHERE ITEM_CODE = @ITEM_CODE",
                        param : ['ITEM_CODE:string|25','WHOLEPNTR:int','RETAILPNTR:int','VAT:float']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsTaxInsert};
                    }
                },
                //ITEM_BARCODE
                {
                    name : "MERKEZNITROGEN -> YENİŞEHİR | ITEM_BARCODE", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "ITEM_CODE AS ITEM_CODE , " +
                                "BARCODE AS BARCODE , " +
                                "UNIT AS UNIT , " +
                                "TYPE AS TYPE " +
                                "FROM ITEM_BARCODE "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT ITEM_CODE FROM ITEM_BARCODE WHERE BARCODE = @BARCODE ",
                        param:['BARCODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEM_BARCODE SET " +
                            "UNIT = @UNIT, " +
                            "TYPE = @TYPE, " +
                            "LDATE = GETDATE() " + 
                            "WHERE BARCODE = @BARCODE ",
                        param : ['UNIT:int','TYPE:int','BARCODE:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsBarcodeInsert};
                    }
                },
                //ITEM_UNIT
                {
                    name : "MERKEZNITROGEN -> YENİŞEHİR | ITEM_UNIT", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "ITEM_CODE AS ITEM_CODE, " +
                                "TYPE AS TYPE, " +
                                "NAME AS NAME, " +
                                "FACTOR AS FACTOR, " +
                                "WEIGHT AS WEIGHT, " +
                                "VOLUME AS VOLUME, " +
                                "WIDTH AS WIDTH, " +
                                "HEIGHT AS HEIGHT, " +
                                "SIZE AS SIZE, " +
                                "CODE AS CODE " +
                                "FROM ITEM_UNIT"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT ITEM_CODE,CODE FROM ITEM_UNIT WHERE ITEM_CODE = @ITEM_CODE AND CODE = @CODE",
                        param:['ITEM_CODE:string|25','CODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE ITEM_UNIT SET " +
                            "NAME = @NAME, " +
                            "TYPE = @TYPE, " +
                            "FACTOR = @FACTOR, " +
                            "CODE = @CODE, " +
                            "LDATE = GETDATE() " + 
                            "WHERE ITEM_CODE = @ITEM_CODE AND CODE = @CODE",
                        param : ['ITEM_CODE:string|25','NAME:string|25','TYPE:int','FACTOR:int','CODE:int']
                    },
                    insert : function()
                    {
                        return {...Query.ItemsUnitInsert};
                    }
                },
                //DEPOT
                {
                    name : "MERKEZNITROGEN -> YENİŞEHİR | DEPOT", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "TYPE AS TYPE, " +
                                "CODE AS CODE, " +
                                "NAME AS NAME " +
                                "FROM DEPOT"
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT CODE FROM DEPOT WHERE CODE = @CODE",
                        param:['CODE:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.DepotInsert};
                    }
                },
                //USERS
                {
                    name : "MERKEZNITROGEN -> YENİŞEHİR | USERS ", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CODE AS CODE, " +
                                "NAME AS NAME, " +
                                "PASSWORD AS PASSWORD, " +
                                "TAG AS TAG, " +
                                "STATUS AS STATUS " +
                                "FROM USERS "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT CODE FROM USERS WHERE CODE = @CODE",
                        param:['CODE:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE USERS SET " +
                            "NAME = @NAME, " +
                            "PASSWORD = @PASSWORD, " +
                            "TAG = @TAG, " +
                            "STATUS = @STATUS, " +
                            "LDATE = GETDATE() " + 
                            "WHERE CODE = @CODE ",
                        param : ['NAME:string|25','PASSWORD:string|25','TAG:int','STATUS:int','CODE:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.UsersInsert};
                    }
                },            
                //PARAMS
                {
                    name : "MERKEZNITROGEN -> YENİŞEHİR | PARAMS", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "NAME AS NAME, " +
                                "VALUE AS VALUE, " +
                                "TAG AS TAG, " +
                                "ID AS ID " +
                                "FROM PARAMS "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT NAME,ID FROM PARAMS WHERE NAME = @NAME AND ID = @ID ",
                        param:['NAME:string|25','ID:string|25']
                    },
                    update:     //UPDATE SORGUSU
                    {
                        query: "UPDATE PARAMS SET " +
                            "VALUE = @VALUE, " +
                            "LDATE = GETDATE() " + 
                            "WHERE ID = @ID AND NAME = @NAME",
                        param : ['ID:string|25','VALUE:string|25','NAME:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.ParamsInsert};
                    }
                },
                //DEVICE
                {
                    name : "MERKEZNITROGEN -> YENİŞEHİR | DEVICE", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "ID AS ID, " +
                                "NAME AS NAME, " +
                                "STATUS AS STATUS " +
                                "FROM DEVICE "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT ID FROM DEVICE WHERE ID = @ID ",
                        param:['ID:string|25']
                    },
                    insert : function()
                    {
                        return {...Query.DeviceInsert};
                    }
                },
                //POS PLU
                {
                    name : "MERKEZNITROGEN -> YENİŞEHİR | POS PLU", //GÖRÜNEN ADI
                    select : 
                    {
                        query : "SELECT " +
                                "CUSER AS CUSER, " +
                                "LUSER AS LUSER, " +
                                "NAME AS NAME, " +
                                "LOCATION AS LOCATION, " +
                                "TYPE AS TYPE, " +
                                "ITEMS_CODE AS ITEMS_CODE, " +
                                "GRUP_INDEX AS GRUP_INDEX " +
                                "FROM POS_PLU "
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT NAME,LOCATION,TYPE,ITEMS_CODE,GRUP_INDEX FROM POS_PLU WHERE GRUP_INDEX = @GRUP_INDEX AND TYPE = @TYPE AND LOCATION = @LOCATION ",
                        param:['GRUP_INDEX:int','TYPE:int','LOCATION:int']
                    },
                    update : 
                    {
                        query : "UPDATE POS_PLU SET NAME = @NAME , ITEMS_CODE = @ITEMS_CODE " +
                                "WHERE LOCATION = @LOCATION AND TYPE = @TYPE AND GRUP_INDEX = @GRUP_INDEX ",
                        param:['NAME:string|25','ITEMS_CODE:string|25','LOCATION:int','TYPE:int','GRUP_INDEX:int']
                    },
                    insert : function()
                    {
                        return {...Query.PosPluInsert};
                    }
                },
            ]
        },
        {
            name : "YENİŞEHİR - MERKEZ",
            source : //KAYNAK VERİTABANI BAĞLANTISI
            {
                server: "93.182.78.156",
                database:"NITROGENPOS",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            target : //HEDEF VERİTABANI BAĞLANTISI
            {
                server: "172.16.122.250",
                database:"NITROGENPOS",
                uid:"nitrogen",
                pwd:"lp8462+"
            },
            auto : 1200000,  //OTOMATİK AKTARIM YAPILACAKSA BURAYA MİLİSANİYE CİNSİNDEN SÜRE YAZILIR (1000 = 1 SN) UNDEFINED VEYA BU KEY TANIMLANMAZSA OTOMATİK AKTARILMAZ.
            list :
            [
                //POS SALE 
                {
                    name : "YENİŞEHİR -> MERKEZNITROGEN | POS SALE", //GÖRÜNEN ADI
                    select : function()
                    {
                        return {...Query.PosSaleSelect};
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT REF_NO FROM POS_SALES WHERE REF = @REF AND REF_NO = @REF_NO AND " + 
                            "LINE_NO = @LINE_NO AND TYPE = @TYPE",
                        param:['REF:string|25','REF_NO:int','LINE_NO:int','TYPE:int']
                    },
                    insert : function()
                    {
                        return {...Query.PosSaleInsert};
                    }
                },
                //POS PAYMENT
                {
                    name : "YENİŞEHİR -> MERKEZNITROGEN | POS PAYMENT", //GÖRÜNEN ADI
                    select : function()
                    {
                        return {...Query.PosPaymentSelect};
                    },
                    control :    //KAYITLAR KARŞI TARAFADA VAR İSE GÜNCELLEMESİ İÇİN KONTROL SORGUSU
                    {
                        query: "SELECT REF_NO FROM POS_PAYMENT WHERE REF = @REF AND REF_NO = @REF_NO AND DOC_TYPE = @DOC_TYPE AND LINE_NO = @LINE_NO",
                        param:['REF:string|25','REF_NO:int','DOC_TYPE:int','LINE_NO:int']
                    },
                    insert : function()
                    {
                        return {...Query.PosPaymentInsert};
                    }
                },
            ]
        }
    ]    
}

module.exports = Process;