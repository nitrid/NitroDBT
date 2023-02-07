let Query = require("./query");
let Process = 
[
    //#region MİKRO - NİTROGEN MERKEZ
    //STOKLAR -> ITEMS
    {
        name : "STOKLAR -> ITEMS", //GÖRÜNEN ADI
        source : //KAYNAK VERİTABANI BAĞLANTISI
        {
            server: "172.16.216.250",
            database:"TEST",
            uid:"piqpos",
            pwd:"1122334455"
        },
        target : //HEDEF VERİTABANI BAĞLANTISI
        {
            server: "172.16.216.250",
            database:"TEST",
            uid:"piqpos",
            pwd:"1122334455"
        },
        select : 
        {
            query : "SELECT " +
                    "'Admin' AS PCUSER, " + 
                    "0 AS PTYPE, " +
                    "ref_prd AS PCODE, " +
                    "lib_prd AS PNAME, " +
                    "SUBSTRING(lib_prd,0,20) AS PSNAME, " + 
                    "(SELECT TOP 1 tax_rate FROM [MYSQL]...[tax_rates] WHERE id_taxclass = produits.id_taxclass) AS PVAT, " + 
                    "prix_revt AS PCOST_PRICE, " +
                    "ROUND((prix_revt * 1.10) + (prix_revt * ((SELECT TOP 1 CONVERT(FLOAT,tax_rate) FROM [MYSQL]...[tax_rates] WHERE id_taxclass = id_taxclass) / 100)),2) AS PMIN_PRICE, " +
                    "0 AS PMAX_PRICE, " +  
                    "b_actif AS PSTATUS, " +
                    "ISNULL((SELECT TOP 1 GUID FROM ITEM_GROUP WHERE CODE = cod_fam_prd_path),'00000000-0000-0000-0000-000000000000') AS PMAIN, " +                                      
                    "b_a_pese_caisse AS PWEIGHING, " +
                    "0 AS PSALE_JOIN_LINE " +
                    "FROM [MYSQL]...produits"
        },
        insert : function()
        {
            return {...Query.ItemsInsert};
        }
    },
    //PRODUIT GROUP -> ITEM_GRP
    {
        name : "PRODUIT GROUP -> ITEM_GRP", //GÖRÜNEN ADI
        source : //KAYNAK VERİTABANI BAĞLANTISI
        {
            server: "172.16.216.250",
            database:"TEST",
            uid:"piqpos",
            pwd:"1122334455"
        },
        target : //HEDEF VERİTABANI BAĞLANTISI
        {
            server: "172.16.216.250",
            database:"TEST",
            uid:"piqpos",
            pwd:"1122334455"
        },
        select : 
        {
            query : "SELECT  " +
                    "'Admin' AS PCUSER, " +
                    "cod_fam_prd AS PCODE, " +
                    "lib AS PNAME, " +
                    "1 AS PSTATUS " +
                    "FROM [MYSQL]...[familles_prds]" 
        },
        insert : function()
        {
            return {...Query.ItemGroupInsert};
        }
    },  
    //STOK_BIRIM_TANIMLARI -> ITEM_UNIT ANA BİRİM
    {
        name : "STOK_BIRIM_TANIMLARI -> ITEM_UNIT ANA BİRİM", //GÖRÜNEN ADI
        source : //KAYNAK VERİTABANI BAĞLANTISI
        {
            server: "172.16.216.250",
            database:"TEST",
            uid:"piqpos",
            pwd:"1122334455"
        },
        target : //HEDEF VERİTABANI BAĞLANTISI
        {
            server: "172.16.216.250",
            database:"TEST",
            uid:"piqpos",
            pwd:"1122334455"
        },
        select : 
        {
            query : "SELECT " +
                    "'Admin' AS PCUSER, " +
                    "0 AS PTYPE, " +
                    "ISNULL((SELECT TOP 1 GUID FROM ITEMS WHERE CODE = ref_prd),'00000000-0000-0000-0000-000000000000') AS PITEM, " +
                    "'001' AS PID, " +
                    "packet_qty AS PFACTOR " +
                    "FROM [MYSQL]...[produits]"
        },
        insert : function()
        {
            return {...Query.ItemsUnitInsert};
        }
    },
    //STOK_BIRIM_TANIMLARI -> ITEM_UNIT ALT BİRİM
    {
        name : "STOK_BIRIM_TANIMLARI -> ITEM_UNIT ALT BİRİM", //GÖRÜNEN ADI
        source : //KAYNAK VERİTABANI BAĞLANTISI
        {
            server: "172.16.216.250",
            database:"TEST",
            uid:"piqpos",
            pwd:"1122334455"
        },
        target : //HEDEF VERİTABANI BAĞLANTISI
        {
            server: "172.16.216.250",
            database:"TEST",
            uid:"piqpos",
            pwd:"1122334455"
        },
        select : 
        {
            query : "SELECT " +
                    "'Admin' AS PCUSER, " +
                    "1 AS PTYPE, " +
                    "ISNULL((SELECT TOP 1 GUID FROM ITEMS WHERE CODE = ref_prd),'00000000-0000-0000-0000-000000000000') AS PITEM, " +
                    "'002' AS PID, " +
                    "contenu AS PFACTOR " +
                    "FROM [MYSQL]...[produits]"
        },        
        insert : function()
        {
            return {...Query.ItemsUnitInsert};
        }
    },
    //BARKOD_TANIMLARI -> ITEM_BARCODE
    {
        name : "BARKOD_TANIMLARI -> ITEM_BARCODE", //GÖRÜNEN ADI
        source : //KAYNAK VERİTABANI BAĞLANTISI
        {
            server: "172.16.216.250",
            database:"TEST",
            uid:"piqpos",
            pwd:"1122334455"
        },
        target : //HEDEF VERİTABANI BAĞLANTISI
        {
            server: "172.16.216.250",
            database:"TEST",
            uid:"piqpos",
            pwd:"1122334455"
        },
        select : 
        {
            query : "SELECT " + 
                    "'Admin' AS LUSER, " +
                    "0 AS PTYPE, " + 
                    "ISNULL((SELECT TOP 1 GUID FROM ITEMS WHERE CODE = (SELECT TOP 1 ref_prd FROM [MYSQL]...produits WHERE id = id_prd)),'00000000-0000-0000-0000-000000000000') AS PITEM, " + 
                    "cod_barr AS PBARCODE, " + 
                    "ISNULL((SELECT GUID FROM ITEM_UNIT WHERE ID = '001' AND ITEM = (SELECT TOP 1 GUID FROM ITEMS WHERE CODE = (SELECT TOP 1 ref_prd FROM [MYSQL]...produits WHERE id = id_prd))),'00000000-0000-0000-0000-000000000000') AS PUNIT " +
                    "FROM [MYSQL]...[codebarres]"
        },
        insert : function()
        {
            return {...Query.ItemsBarcodeInsert};
        }
    },
    //STOK_SATIS_FIYAT_LISTELERI -> ITEM_PRICE
    {
        name : "STOK_SATIS_FIYAT_LISTELERI -> ITEM_PRICE", //GÖRÜNEN ADI
        source : //KAYNAK VERİTABANI BAĞLANTISI
        {
            server: "172.16.216.250",
            database:"TEST",
            uid:"piqpos",
            pwd:"1122334455"
        },
        target : //HEDEF VERİTABANI BAĞLANTISI
        {
            server: "172.16.216.250",
            database:"TEST",
            uid:"piqpos",
            pwd:"1122334455"
        },
        select : 
        {
            query : "SELECT  " +
                    "'Admin' AS PCUSER, " +
                    "0 AS PTYPE, " +
                    "ISNULL((SELECT TOP 1 GUID FROM ITEMS WHERE CODE = (SELECT TOP 1 ref_prd FROM [MYSQL]...produits WHERE id = id_prd)),'00000000-0000-0000-0000-000000000000') AS PITEM, " +                    
                    "'00000000-0000-0000-0000-000000000000' AS PDEPOT, " +
                    "CASE WHEN dat_deb = '' THEN '19700101' ELSE CONVERT(datetime,dat_deb) END AS PSTART_DATE, " +
                    "CASE WHEN dat_fin = '' THEN '19700101' ELSE CONVERT(datetime,dat_fin) END AS PFINISH_DATE, " +
                    "uprice_wt AS PPRICE, " +
                    "CASE WHEN qte_min = 0 THEN 1 ELSE qte_min END AS PQUANTITY, " +
                    "'00000000-0000-0000-0000-000000000000' AS PCUSTOMER " +
                    "FROM [MYSQL]...[tarifs_produits] "
        },
        insert : function()
        {
            return {...Query.ItemsPriceInsert};
        }
    },        
    //CLIENTS -> CUSTOMERS
    {
        name : "CLIENTS -> CUSTOMERS", //GÖRÜNEN ADI
        source : //KAYNAK VERİTABANI BAĞLANTISI
        {
            server: "172.16.216.250",
            database:"TEST",
            uid:"piqpos",
            pwd:"1122334455"
        },
        target : //HEDEF VERİTABANI BAĞLANTISI
        {
            server: "172.16.216.250",
            database:"TEST",
            uid:"piqpos",
            pwd:"1122334455"
        },
        select : 
        {
            query : "SELECT  " +
                    "'Admin' AS PCUSER, " +
                    "cod_clt AS PCODE, " +
                    "CASE WHEN typ_cus_sup = 1 THEN 0 ELSE 1 END AS PTYPE, " +
                    "b_soc - 1 AS PGENUS, " +
                    "CASE WHEN typ_cus_sup = 1 THEN pnom ELSE nom END AS PTITLE, " +
                    "url AS PWEB, " +
                    "no_siret AS PSIRET_ID, " +
                    "cod_ape AS PAPE_CODE, " +
                    "no_tva AS PTAX_OFFICE, " +
                    "tax_no AS PTAX_NO, " +
                    "mod_reg_def AS PPAYMENT_TYPE, " +
                    "RIB AS PIBAN, " +
                    "del_paie AS PEXPIRY_DAY " +
                    "FROM [MYSQL]...clients" 
        },
        insert : function()
        {
            return {...Query.CustomerInsert};
        }
    },
    //CLIENTS -> CUSTOMER_OFFICAL
    {
        name : "CLIENTS -> CUSTOMER_OFFICAL", //GÖRÜNEN ADI
        source : //KAYNAK VERİTABANI BAĞLANTISI
        {
            server: "172.16.216.250",
            database:"TEST",
            uid:"piqpos",
            pwd:"1122334455"
        },
        target : //HEDEF VERİTABANI BAĞLANTISI
        {
            server: "172.16.216.250",
            database:"TEST",
            uid:"piqpos",
            pwd:"1122334455"
        },
        select : 
        {
            query : "SELECT  " +
                    "ISNULL((SELECT TOP 1 GUID FROM CUSTOMER_OFFICAL WHERE CUSTOMER = (SELECT TOP 1 GUID FROM CUSTOMERS WHERE CODE = cod_clt)),'00000000-0000-0000-0000-000000000000') AS PGUID, " +
                    "'Admin' AS PCUSER, " +
                    "ISNULL((SELECT TOP 1 GUID FROM CUSTOMERS WHERE CODE = cod_clt),'00000000-0000-0000-0000-000000000000') AS PCUSTOMER, " +
                    "'' AS PNAME, " +
                    "'' AS PLAST_NAME, " +
                    "tel1 AS PPHONE1, " +
                    "tel2 AS PPHONE2, " +
                    "mobil AS PGSM_PHONE, " +
                    "fax AS POTHER_PHONE, " +
                    "mail AS PEMAIL " +
                    "FROM [MYSQL]...clients" 
        },
        insert : function()
        {
            return {...Query.CustomerOfficalInsert};
        }
    }, 
    //CLIENTS ADRESS -> CUSTOMER_ADRESS
    {
        name : "CLIENTS ADRESS -> CUSTOMER_ADRESS", //GÖRÜNEN ADI
        source : //KAYNAK VERİTABANI BAĞLANTISI
        {
            server: "172.16.216.250",
            database:"TEST",
            uid:"piqpos",
            pwd:"1122334455"
        },
        target : //HEDEF VERİTABANI BAĞLANTISI
        {
            server: "172.16.216.250",
            database:"TEST",
            uid:"piqpos",
            pwd:"1122334455"
        },
        auto : 1000,  //OTOMATİK AKTARIM YAPILACAKSA BURAYA MİLİSANİYE CİNSİNDEN SÜRE YAZILIR (1000 = 1 SN) UNDEFINED VEYA BU KEY TANIMLANMAZSA OTOMATİK AKTARILMAZ.
        select : 
        {
            query : "SELECT  " +
                    "ISNULL((SELECT TOP 1 GUID FROM CUSTOMER_ADRESS WHERE CUSTOMER = (SELECT TOP 1 GUID FROM CUSTOMERS WHERE CODE = cod_clt)),'00000000-0000-0000-0000-000000000000') AS PGUID, " +
                    "'Admin' AS PCUSER, " +
                    "0 AS PTYPE, " +
                    "ISNULL((SELECT TOP 1 GUID FROM CUSTOMERS WHERE CODE = cod_clt),'00000000-0000-0000-0000-000000000000') AS PCUSTOMER, " +
                    "adr1 + ' ' + adr2 AS PADRESS, " +
                    "cod_pst AS PZIPCODE, " +
                    "ville AS PCITY, " +
                    "cod_pays AS PCOUNTRY, " +
                    "0 AS PADRESS_NO " +
                    "FROM [MYSQL]...clients " 
        },
        insert : function()
        {
            return {...Query.CustomerAdressInsert};
        }
    },     
    //POINT -> CUSTOMER_POINT
    {
        name : "POINT -> CUSTOMER_POINT", //GÖRÜNEN ADI
        source : //KAYNAK VERİTABANI BAĞLANTISI
        {
            server: "172.16.216.250",
            database:"TEST",
            uid:"piqpos",
            pwd:"1122334455"
        },
        target : //HEDEF VERİTABANI BAĞLANTISI
        {
            server: "172.16.216.250",
            database:"TEST",
            uid:"piqpos",
            pwd:"1122334455"
        },
        select : 
        {
            query : "SELECT  " +
                    "'Admin' AS PCUSER, " +
                    "CASE WHEN typ_ref = 'T' THEN 0 ELSE 1 END AS PTYPE, " +
                    "ISNULL((SELECT TOP 1 GUID FROM CUSTOMERS WHERE CODE = id_clt),'00000000-0000-0000-0000-000000000000') AS PCUSTOMER, " +
                    "point AS PPOINT " +
                    "FROM [MYSQL]...[points_mouvs]" 
        },
        insert : function()
        {
            return {...Query.CustomerPointInsert};
        }
    },      
    //#endregion
]

module.exports = Process;