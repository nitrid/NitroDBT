let Query = 
{    
    PosSaleCariHarSelect:
    {
        query : "SELECT " +
                "0 AS cha_DBCno, " +
                "0 AS cha_SpecRecNo, " +
                "0 AS cha_iptal, " +
                "51 AS cha_fileid, " +
                "0 AS cha_hidden, " +
                "0 AS cha_kilitli, " +
                "0 AS cha_degisti, " +
                "0 AS cha_CheckSum, " +
                "1 AS cha_create_user, " +
                "GETDATE() AS cha_create_date, " +
                "1 AS cha_lastup_user, " +
                "GETDATE() AS cha_lastup_date, " +
                "'' AS cha_special1, " +
                "'' AS cha_special2, " +
                "'' AS cha_special3, " +
                "0 AS cha_firmano, " +
                "0 AS cha_subeno, " +
                "63 AS cha_evrak_tip, " +
                "MAX(REF) AS cha_evrakno_seri, " + 
                "MAX(REF_NO) AS cha_evrakno_sira, " + 
                "0 AS cha_satir_no, " +
                "DOC_DATE AS cha_tarihi, " +
                "0 AS cha_tip, " +
                "6 AS cha_cinsi, " +
                "0 AS cha_normal_Iade, " +
                "0 AS cha_tpoz, " +
                "0 AS cha_ticaret_turu, " +
                "'' AS cha_belge_no, " +
                "DOC_DATE AS cha_belge_tarih, " +
                "'' AS cha_aciklama, " +
                "'' AS cha_satici_kodu, " +
                "'' AS cha_EXIMkodu, " +
                "'' AS cha_projekodu, " +
                "'' AS cha_yat_tes_kodu, " +
                "0 AS cha_cari_cins, " +
                "MAX(CUSTOMER_CODE) AS cha_kod, " +
                "MAX(CUSTOMER_CODE) AS cha_ciro_cari_kodu, " +
                "0 AS cha_d_cins, " +
                "1 AS cha_d_kur, " +
                "1 AS cha_altd_kur, " +
                "0 AS cha_grupno, " +
                "'' AS cha_srmrkkodu, " +
                "0 AS cha_kasa_hizmet, " +
                "'' AS cha_kasa_hizkod, " +
                "0 AS cha_karsidcinsi, " +
                "1 AS cha_karsid_kur, " +
                "0 AS cha_karsidgrupno, " +
                "'' AS cha_karsisrmrkkodu, " +
                "0 AS cha_miktari, " +
                "SUM(AMOUNT) AS cha_meblag, " +
                "SUM(AMOUNT) AS cha_aratoplam, " +
                "0 AS cha_vade, " +
                "0 AS cha_Vade_Farki_Yuz, " +
                "SUM(DISCOUNT) AS cha_ft_iskonto1, " +
                "0 AS cha_ft_iskonto2, " +
                "0 AS cha_ft_iskonto3, " +
                "0 AS cha_ft_iskonto4, " +
                "0 AS cha_ft_iskonto5, " +
                "0 AS cha_ft_iskonto6, " +
                "0 AS cha_ft_masraf1, " +
                "0 AS cha_ft_masraf2, " +
                "0 AS cha_ft_masraf3, " +
                "0 AS cha_ft_masraf4, " +
                "0 AS cha_isk_mas1, " +
                "0 AS cha_isk_mas2, " +
                "0 AS cha_isk_mas3, " +
                "0 AS cha_isk_mas4, " +
                "0 AS cha_isk_mas5, " +
                "0 AS cha_isk_mas6, " +
                "0 AS cha_isk_mas7, " +
                "0 AS cha_isk_mas8, " +
                "0 AS cha_isk_mas9, " +
                "0 AS cha_isk_mas10, " +
                "0 AS cha_sat_iskmas1, " +
                "0 AS cha_sat_iskmas2, " +
                "0 AS cha_sat_iskmas3, " +
                "0 AS cha_sat_iskmas4, " +
                "0 AS cha_sat_iskmas5, " +
                "0 AS cha_sat_iskmas6, " +
                "0 AS cha_sat_iskmas7, " +
                "0 AS cha_sat_iskmas8, " +
                "0 AS cha_sat_iskmas9, " +
                "0 AS cha_sat_iskmas10, " +
                "0 AS cha_yuvarlama, " +
                "0 AS cha_StFonPntr, " +
                "0 AS cha_stopaj, " +
                "0 AS cha_savsandesfonu, " +
                "0 AS cha_avansmak_damgapul, " +
                "0 AS cha_vergipntr, " +
                "0 AS cha_vergi1, " +
                "0 AS cha_vergi2, " +
                "SUM(cha_vergi3) AS cha_vergi3, " +
                "SUM(cha_vergi4) AS cha_vergi4, " +
                "0 AS cha_vergi5, " +
                "0 AS cha_vergi6, " +
                "0 AS cha_vergi7, " +
                "0 AS cha_vergi8, " +
                "0 AS cha_vergi9, " +
                "0 AS cha_vergi10, " +
                "0 AS cha_vergisiz_fl, " +
                "0 AS cha_otvtutari, " +
                "0 AS cha_otvvergisiz_fl, " +
                "0 AS cha_oiv_pntr, " +
                "0 AS cha_oivtutari, " +
                "0 AS cha_oiv_vergi, " +
                "0 AS cha_oivergisiz_fl, " +
                "'12-30-1899' AS cha_fis_tarih, " +
                "0 AS cha_fis_sirano, " +
                "'' AS cha_trefno, " +
                "0 AS cha_sntck_poz, " +
                "'12-30-1899' AS cha_reftarihi, " +
                "0 AS cha_istisnakodu, " +
                "0 AS cha_pos_hareketi, " +
                "0 AS cha_meblag_ana_doviz_icin_gecersiz_fl, " +
                "0 AS cha_meblag_alt_doviz_icin_gecersiz_fl, " +
                "0 AS cha_meblag_orj_doviz_icin_gecersiz_fl, " +
                "'00000000-0000-0000-0000-000000000000' AS cha_sip_uid, " +
                "'00000000-0000-0000-0000-000000000000' AS cha_kirahar_uid, " +
                "'12-30-1899' AS cha_vardiya_tarihi, " +
                "0 AS cha_vardiya_no, " +
                "0 AS cha_vardiya_evrak_ti, " +
                "0 AS cha_ebelge_turu, " +
                "0 AS cha_tevkifat_toplam, " +
                "0 AS cha_ilave_edilecek_kdv1, " +
                "0 AS cha_ilave_edilecek_kdv2, " +
                "0 AS cha_ilave_edilecek_kdv3, " +
                "0 AS cha_ilave_edilecek_kdv4, " +
                "0 AS cha_ilave_edilecek_kdv5, " +
                "0 AS cha_ilave_edilecek_kdv6, " +
                "0 AS cha_ilave_edilecek_kdv7, " +
                "0 AS cha_ilave_edilecek_kdv8, " +
                "0 AS cha_ilave_edilecek_kdv9, " +
                "0 AS cha_ilave_edilecek_kdv10, " +
                "0 AS cha_e_islem_turu, " +
                "0 AS cha_fatura_belge_turu, " +
                "'' AS cha_diger_belge_adi, " +
                "'00000000-0000-0000-0000-000000000000' AS cha_uuid, " +
                "1 AS cha_adres_no, " +
                "0 AS cha_vergifon_toplam, " +
                "'12-30-1899' AS cha_ilk_belge_tarihi, " +
                "0 AS cha_ilk_belge_doviz_kuru, " +
                "'' AS cha_HareketGrupKodu1, " +
                "'' AS cha_HareketGrupKodu2, " +
                "'' AS cha_HareketGrupKodu3, " +
                "'' AS cha_ebelgeno_seri, " +
                "0 AS cha_ebelgeno_sira, " +
                "'' AS cha_hubid, " +
                "'' AS cha_hubglbid, " +
                "'' AS cha_disyazilimid " +
                "FROM  " +
                "(SELECT  " +
                "MAX(REF) AS REF, " +
                "MAX(REF_NO) AS REF_NO, " +
                "TYPE AS TYPE, " +
                "DEPARTMENT AS DEPARTMENT, " +
                "DOC_DATE AS DOC_DATE, " +
                "MAX(CUSTOMER_CODE) AS CUSTOMER_CODE, " +
                "SUM(QUANTITY * PRICE) AS AMOUNT, " +
                "SUM(DISCOUNT) AS DISCOUNT, " +
                "CASE WHEN VAT = 5 THEN SUM((QUANTITY * PRICE) - DISCOUNT) * (VAT / 100) ELSE 0 END AS cha_vergi3, " +
                "CASE WHEN VAT = 10 THEN SUM((QUANTITY * PRICE) - DISCOUNT) * (VAT / 100) ELSE 0 END AS cha_vergi4 " +
                "FROM POS_SALES WHERE DOC_DATE >= CONVERT(NVARCHAR,GETDATE()-1,112) AND DOC_DATE <= CONVERT(NVARCHAR,GETDATE(),112) AND TYPE = 0 AND STATUS = 1 " +
                "GROUP BY VAT,DOC_DATE,DEPARTMENT,TYPE) AS TMP GROUP BY DOC_DATE,DEPARTMENT,TYPE" 
    },
    PosSaleStokHarSelect:
    {
        query : "SELECT " +
                "0 AS [sth_DBCno], " +
                "0 AS [sth_SpecRECno], " +
                "0 AS [sth_iptal], " +
                "16 AS [sth_fileid], " +
                "0 AS [sth_hidden], " +
                "0 AS [sth_kilitli], " +
                "0 AS [sth_degisti], " +
                "0 AS [sth_checksum], " +
                "1 AS [sth_create_user], " +
                "GETDATE() AS [sth_create_date], " +
                "1 AS [sth_lastup_user], " +
                "GETDATE() AS [sth_lastup_date], " +
                "(SELECT COUNT(TMS.REF_NO) FROM (SELECT REF_NO FROM POS_SALES AS TMP WHERE TMP.DOC_DATE >= POS.DOC_DATE AND TMP.DOC_DATE <= POS.DOC_DATE AND TMP.TYPE = 0 AND TMP.DEPARTMENT = POS.DEPARTMENT AND TMP.STATUS = 1 GROUP BY REF,REF_NO) AS TMS) AS [sth_special1], " +
                "'' AS [sth_special2], " +
                "'' AS [sth_special3], " +
                "0 AS [sth_firmano], " +
                "0 AS [sth_subeno], " +
                "DOC_DATE AS [sth_tarih], " +
                "CASE WHEN TYPE = 0 OR TYPE = 2 THEN 1 ELSE 0 END AS [sth_tip], " +
                "0 AS [sth_cins], " +
                "TYPE AS [sth_normal_iade], " +
                "CASE WHEN TYPE = 0 OR TYPE = 2 THEN 1 ELSE 13 END AS [sth_evraktip], " +
                "REF AS [sth_evrakno_seri], " +
                "CONVERT(INT,CONVERT(NVARCHAR,YEAR(DOC_DATE)) + CONVERT(NVARCHAR,RIGHT('0'+ISNULL(MONTH(DOC_DATE),''),2)) + CONVERT(NVARCHAR,RIGHT('0'+ISNULL(DAY(DOC_DATE),''),2))) AS [sth_evrakno_sira], " +
                "ROW_NUMBER() OVER (PARTITION BY REF,DOC_DATE ORDER BY ITEM_CODE,DOC_DATE) - 1 AS [sth_satirno], " +
                "'' AS [sth_belge_no], " +
                "DOC_DATE AS [sth_belge_tarih], " +
                "ITEM_CODE AS [sth_stok_kod], " +
                "1 AS [sth_isk_mas1], " +
                "1 AS [sth_isk_mas2], " +
                "1 AS [sth_isk_mas3], " +
                "1 AS [sth_isk_mas4], " +
                "1 AS [sth_isk_mas5], " +
                "1 AS [sth_isk_mas6], " +
                "1 AS [sth_isk_mas7], " +
                "1 AS [sth_isk_mas8], " +
                "1 AS [sth_isk_mas9], " +
                "1 AS [sth_isk_mas10], " +
                "0 AS [sth_sat_iskmas1], " +
                "0 AS [sth_sat_iskmas2], " +
                "0 AS [sth_sat_iskmas3], " +
                "0 AS [sth_sat_iskmas4], " +
                "0 AS [sth_sat_iskmas5], " +
                "0 AS [sth_sat_iskmas6], " +
                "0 AS [sth_sat_iskmas7], " +
                "0 AS [sth_sat_iskmas8], " +
                "0 AS [sth_sat_iskmas9], " +
                "0 AS [sth_sat_iskmas10], " +
                "0 AS [sth_pos_satis], " +
                "0 AS [sth_promosyon_fl], " +
                "0 AS [sth_cari_cinsi], " +
                "CUSTOMER_CODE AS [sth_cari_kodu], " +
                "0 AS [sth_cari_grup_no], " +
                "'' AS [sth_isemri_gider_kodu], " +
                "'' AS [sth_plasiyer_kodu], " +
                "0 AS [sth_har_doviz_cinsi], " +
                "1 AS[sth_har_doviz_kuru], " +
                "1 AS [sth_alt_doviz_kuru], " +
                "0 AS [sth_stok_doviz_cinsi], " +
                "1 AS [sth_stok_doviz_kuru], " +
                "SUM(QUANTITY) AS [sth_miktar], " +
                "SUM(QUANTITY) AS [sth_miktar2], " +
                "MAX(UNIT) AS [sth_birim_pntr], " +
                "SUM((CONVERT(FLOAT,QUANTITY) * CONVERT(FLOAT,PRICE)) / ((CONVERT(FLOAT,VAT) / CONVERT(FLOAT,100)) + 1)) AS [sth_tutar], " +
                "SUM(DISCOUNT) AS [sth_iskonto1], " +
                "0 AS [sth_iskonto2], " +
                "0 AS [sth_iskonto3], " +
                "0 AS [sth_iskonto4], " +
                "0 AS [sth_iskonto5], " +
                "0 AS [sth_iskonto6], " +
                "0 AS [sth_masraf1], " +
                "0 AS [sth_masraf2], " +
                "0 AS [sth_masraf3], " +
                "0 AS [sth_masraf4], " +
                "CASE WHEN VAT = 5 THEN 3 WHEN VAT = 10 THEN 4 WHEN VAT = 16 THEN 5 WHEN VAT = 20 THEN 6 ELSE 2 END AS [sth_vergi_pntr], " +
                "SUM((QUANTITY * PRICE) - (CONVERT(FLOAT,QUANTITY) * CONVERT(FLOAT,PRICE)) / ((CONVERT(FLOAT,VAT) / CONVERT(FLOAT,100)) + 1)) AS [sth_vergi], " +
                "0 AS [sth_masraf_vergi_pntr], " +
                "0 AS [sth_masraf_vergi], " +
                "0 AS [sth_netagirlik], " +
                "0 AS [sth_odeme_op], " +
                "'' AS [sth_aciklama], " +
                "'00000000-0000-0000-0000-000000000000' AS [sth_sip_uid], " +
                "'00000000-0000-0000-0000-000000000000' AS [sth_fat_uid], " +
                "DEPARTMENT AS [sth_giris_depo_no], " +
                "DEPARTMENT AS [sth_cikis_depo_no], " +
                "DOC_DATE AS [sth_malkbl_sevk_tarihi], " +
                "'' AS [sth_cari_srm_merkezi], " +
                "'' AS [sth_stok_srm_merkezi], " +
                "'12-30-1899' AS [sth_fis_tarihi], " +
                "0 AS [sth_fis_sirano], " +
                "0 AS [sth_vergisiz_fl], " +
                "0 AS [sth_maliyet_ana], " +
                "0 AS [sth_maliyet_alternatif], " +
                "0 AS [sth_maliyet_orjinal], " +
                "1 AS [sth_adres_no], " +
                "'' AS [sth_parti_kodu], " +
                "0 AS [sth_lot_no], " +
                "'00000000-0000-0000-0000-000000000000' AS [sth_kons_uid], " +
                "'' AS [sth_proje_kodu], " +
                "'' AS [sth_exim_kodu], " +
                "0 AS [sth_otv_pntr], " +
                "0 AS [sth_otv_vergi], " +
                "0 AS [sth_brutagirlik], " +
                "0 AS [sth_disticaret_turu], " +
                "0 AS [sth_otvtutari], " +
                "0 AS [sth_otvvergisiz_fl], " +
                "0 AS [sth_oiv_pntr], " +
                "0 AS [sth_oiv_vergi], " +
                "0 AS [sth_oivvergisiz_fl], " +
                "0 AS [sth_fiyat_liste_no], " +
                "0 AS [sth_oivtutari], " +
                "0 AS [sth_Tevkifat_turu], " +
                "0 AS [sth_nakliyedeposu], " +
                "0 AS [sth_nakliyedurumu], " +
                "'00000000-0000-0000-0000-000000000000' AS [sth_yetkili_uid], " +
                "0 AS [sth_taxfree_fl], " +
                "0 AS [sth_ilave_edilecek_kdv], " +
                "'' AS [sth_ismerkezi_kodu], " +
                "'' AS [sth_HareketGrupKodu1], " +
                "'' AS [sth_HareketGrupKodu2], " +
                "'' AS [sth_HareketGrupKodu3], " +
                "0 AS [sth_Olcu1], " +
                "0 AS [sth_Olcu2], " +
                "0 AS [sth_Olcu3], " +
                "0 AS [sth_Olcu4], " +
                "0 AS [sth_Olcu5], " +
                "0 AS [sth_FormulMiktarNo], " +
                "0 AS [sth_FormulMiktar], " +
                "0 AS [sth_eirs_senaryo], " +
                "0 AS [sth_eirs_tipi], " +
                "'12-30-1899' AS [sth_teslim_tarihi], " +
                "0 AS [sth_matbu_fl] " +
                "FROM POS_SALES AS POS WHERE DOC_DATE >= CONVERT(NVARCHAR,GETDATE()-1,112) AND DOC_DATE <= CONVERT(NVARCHAR,GETDATE(),112) AND TYPE IN (@TYPE) AND STATUS = 1 " +
                "GROUP BY DOC_DATE,DEPARTMENT,TYPE,ITEM_CODE,CUSTOMER_CODE,VAT,REF" 
    },
    PosPaymentCariHarSelect:
    {
        query : "SELECT " +
                "0 AS cha_DBCno, " + 
                "0 AS cha_SpecRecNo, " + 
                "0 AS cha_iptal, " +
                "51 AS cha_fileid, " +
                "0 AS cha_hidden, " +
                "0 AS cha_kilitli, " +
                "0 AS cha_degisti, " +
                "0 AS cha_CheckSum, " +
                "1 AS cha_create_user, " +
                "GETDATE() AS cha_create_date, " +
                "1 AS cha_lastup_user, " +
                "GETDATE() AS cha_lastup_date, " +
                "'' AS cha_special1, " +
                "'' AS cha_special2, " +
                "'' AS cha_special3, " +
                "0 AS cha_firmano, " +
                "0 AS cha_subeno, " +
                "CASE WHEN DOC_TYPE = 0 OR DOC_TYPE = 2 THEN 1 ELSE 64 END AS cha_evrak_tip, " +
                "REF AS cha_evrakno_seri, " +
                "CONVERT(INT,CONVERT(NVARCHAR,YEAR(DOC_DATE)) + CONVERT(NVARCHAR,RIGHT('0'+ISNULL(MONTH(DOC_DATE),''),2)) + CONVERT(NVARCHAR,RIGHT('0'+ISNULL(DAY(DOC_DATE),''),2))) AS cha_evrakno_sira, " +
                //"ROW_NUMBER() OVER (PARTITION BY REF,DOC_DATE ORDER BY MAX(CDATE),REF) - 1 AS cha_satir_no, " + 
                "CASE WHEN TYPE = 0 THEN 0 WHEN TYPE = 1 THEN 1 END AS cha_satir_no, " +
                "DOC_DATE AS cha_tarihi, " +
                "CASE WHEN DOC_TYPE = 0 OR DOC_TYPE = 2 THEN 1 ELSE 0 END AS cha_tip, " +
                "CASE WHEN TYPE = 0 THEN 0 WHEN TYPE = 1 THEN 19 END AS cha_cinsi, " + 
                "0 AS cha_normal_Iade, " +
                "0 AS cha_tpoz, " +
                "0 AS cha_ticaret_turu, " +
                "'' AS cha_belge_no, " +
                "DOC_DATE AS cha_belge_tarih, " +
                "'' AS cha_aciklama, " +
                "'' AS cha_satici_kodu, " +
                "'' AS cha_EXIMkodu, " +
                "'' AS cha_projekodu, " +
                "'' AS cha_yat_tes_kodu, " +
                "0 AS cha_cari_cins, " +
                "MAX(CUSTOMER_CODE) AS cha_kod, " +
                "'' AS cha_ciro_cari_kodu, " +
                "0 AS cha_d_cins, " +
                "1 AS cha_d_kur, " +
                "1 AS cha_altd_kur, " +
                "0 AS cha_grupno, " +
                "'' AS cha_srmrkkodu, " +
                "CASE WHEN TYPE = 0 THEN 4 WHEN TYPE = 1 THEN 2 END AS cha_kasa_hizmet, " +
                "CASE WHEN TYPE = 0 THEN 'MAĞAZA NAKİT KASA' WHEN TYPE = 1 THEN 'B01' END AS cha_kasa_hizkod, " +
                "0 AS cha_karsidcinsi, " +
                "1 AS cha_karsid_kur, " +
                "CASE WHEN TYPE = 0 THEN 4 WHEN TYPE = 1 THEN 7 END AS cha_karsidgrupno, " +
                "'' AS cha_karsisrmrkkodu, " +
                "0 AS cha_miktari, " +
                "SUM(AMOUNT) AS cha_meblag, " +
                "SUM(AMOUNT) AS cha_aratoplam, " +
                "CONVERT(NVARCHAR,YEAR(DOC_DATE)) + REPLACE(STR(CONVERT(NVARCHAR,MONTH(DOC_DATE)), 2), SPACE(1), '0') + REPLACE(STR(CONVERT(NVARCHAR,DAY(DOC_DATE)), 2), SPACE(1), '0') AS cha_vade, " +
                "0 AS cha_Vade_Farki_Yuz, " +
                "0 AS cha_ft_iskonto1, " +
                "0 AS cha_ft_iskonto2, " +
                "0 AS cha_ft_iskonto3, " +
                "0 AS cha_ft_iskonto4, " +
                "0 AS cha_ft_iskonto5, " +
                "0 AS cha_ft_iskonto6, " +
                "0 AS cha_ft_masraf1, " +
                "0 AS cha_ft_masraf2, " +
                "0 AS cha_ft_masraf3, " +
                "0 AS cha_ft_masraf4, " +
                "0 AS cha_isk_mas1, " +
                "0 AS cha_isk_mas2, " +
                "0 AS cha_isk_mas3, " +
                "0 AS cha_isk_mas4, " +
                "0 AS cha_isk_mas5, " +
                "0 AS cha_isk_mas6, " +
                "0 AS cha_isk_mas7, " +
                "0 AS cha_isk_mas8, " +
                "0 AS cha_isk_mas9, " +
                "0 AS cha_isk_mas10, " +
                "0 AS cha_sat_iskmas1, " +
                "0 AS cha_sat_iskmas2, " +
                "0 AS cha_sat_iskmas3, " +
                "0 AS cha_sat_iskmas4, " +
                "0 AS cha_sat_iskmas5, " +
                "0 AS cha_sat_iskmas6, " +
                "0 AS cha_sat_iskmas7, " +
                "0 AS cha_sat_iskmas8, " +
                "0 AS cha_sat_iskmas9, " +
                "0 AS cha_sat_iskmas10, " +
                "0 AS cha_yuvarlama, " +
                "0 AS cha_StFonPntr, " +
                "0 AS cha_stopaj, " +
                "0 AS cha_savsandesfonu, " +
                "0 AS cha_avansmak_damgapul, " +
                "0 AS cha_vergipntr, " +
                "0 AS cha_vergi1, " +
                "0 AS cha_vergi2, " +
                "0 AS cha_vergi3, " +
                "0 AS cha_vergi4, " +
                "0 AS cha_vergi5, " +
                "0 AS cha_vergi6, " +
                "0 AS cha_vergi7, " +
                "0 AS cha_vergi8, " +
                "0 AS cha_vergi9, " +
                "0 AS cha_vergi10, " +
                "0 AS cha_vergisiz_fl, " +
                "0 AS cha_otvtutari, " +
                "0 AS cha_otvvergisiz_fl, " +
                "0 AS cha_oiv_pntr, " +
                "0 AS cha_oivtutari, " +
                "0 AS cha_oiv_vergi, " +
                "0 AS cha_oivergisiz_fl, " +
                "'12-30-1899' AS cha_fis_tarih, " +
                "0 AS cha_fis_sirano, " +
                "CASE WHEN TYPE = 0 THEN '' WHEN TYPE = 1 THEN REF + CONVERT(NVARCHAR(15),DOC_DATE,112) END AS cha_trefno, " +
                "CASE WHEN TYPE = 0 THEN 0 WHEN TYPE = 1 THEN 2 END AS cha_sntck_poz, " +
                "'12-30-1899' AS cha_reftarihi, " +
                "0 AS cha_istisnakodu, " +
                "0 AS cha_pos_hareketi, " +
                "0 AS cha_meblag_ana_doviz_icin_gecersiz_fl, " +
                "0 AS cha_meblag_alt_doviz_icin_gecersiz_fl, " +
                "0 AS cha_meblag_orj_doviz_icin_gecersiz_fl, " +
                "'00000000-0000-0000-0000-000000000000' AS cha_sip_uid, " +
                "'00000000-0000-0000-0000-000000000000' AS cha_kirahar_uid, " +
                "'12-30-1899' AS cha_vardiya_tarihi, " +
                "0 AS cha_vardiya_no, " +
                "0 AS cha_vardiya_evrak_ti, " +
                "0 AS cha_ebelge_turu, " +
                "0 AS cha_tevkifat_toplam, " +
                "0 AS cha_ilave_edilecek_kdv1, " +
                "0 AS cha_ilave_edilecek_kdv2, " +
                "0 AS cha_ilave_edilecek_kdv3, " +
                "0 AS cha_ilave_edilecek_kdv4, " +
                "0 AS cha_ilave_edilecek_kdv5, " +
                "0 AS cha_ilave_edilecek_kdv6, " +
                "0 AS cha_ilave_edilecek_kdv7, " +
                "0 AS cha_ilave_edilecek_kdv8, " +
                "0 AS cha_ilave_edilecek_kdv9, " +
                "0 AS cha_ilave_edilecek_kdv10, " +
                "0 AS cha_e_islem_turu, " +
                "0 AS cha_fatura_belge_turu, " +
                "'' AS cha_diger_belge_adi, " +
                "'00000000-0000-0000-0000-000000000000' AS cha_uuid, " +
                "1 AS cha_adres_no, " +
                "0 AS cha_vergifon_toplam, " +
                "'12-30-1899' AS cha_ilk_belge_tarihi, " +
                "0 AS cha_ilk_belge_doviz_kuru, " +
                "'' AS cha_HareketGrupKodu1, " +
                "'' AS cha_HareketGrupKodu2, " +
                "'' AS cha_HareketGrupKodu3, " +
                "'' AS cha_ebelgeno_seri, " +
                "0 AS cha_ebelgeno_sira, " +
                "'' AS cha_hubid, " +
                "'' AS cha_hubglbid, " +
                "'' AS cha_disyazilimid " +
                "FROM POS_PAYMENT " +
                "WHERE DOC_DATE >= CONVERT(NVARCHAR,GETDATE()-1,112) AND DOC_DATE <= CONVERT(NVARCHAR,GETDATE(),112) AND DOC_TYPE IN (@DOC_TYPE) AND STATUS = 1 " +
                "GROUP BY DEPARTMENT,TYPE,DOC_TYPE,DOC_DATE,CASE_CODE,REF" 
    },
    PosPaymentOdemeEmirSelect:
    {
        query : " SELECT  " +
                " 0	AS sck_DBCno, " +
                " 0	AS sck_SpecRECno, " +
                " 0 AS sck_iptal, " +
                " 54 AS sck_fileid, " +
                " 0 AS sck_hidden, " +
                " 0 AS sck_kilitli, " +
                " 0 AS sck_degisti, " +
                " 0 AS sck_checksum, " +
                " 1 AS sck_create_user, " +
                " GETDATE() AS sck_create_date, " +
                " 1	AS sck_lastup_user, " +
                " GETDATE() AS sck_lastup_date, " +
                " '' AS sck_special1, " +
                " '' AS sck_special2, " +
                " '' AS sck_special3, " +
                " 0 AS sck_firmano, " +
                " 0 AS sck_subeno, " +
                " 6 AS sck_tip, " +
                " REF + CONVERT(NVARCHAR(15),DOC_DATE,112) AS sck_refno, " +
                " '' AS sck_bankano, " +
                " 'M1001' AS sck_borclu, " +
                " ''	AS sck_vdaire_no, " +
                " DOC_DATE AS sck_vade, " +
                " SUM(AMOUNT) AS sck_tutar, " +
                " 0	AS sck_doviz, " +
                " 0 AS sck_odenen, " +
                " 0 AS sck_degerleme_islendi, " +
                " '' AS sck_banka_adres1, " +
                " '' AS sck_sube_adres2, " +
                " '' AS sck_borclu_tel, " +
                " '' AS sck_hesapno_sehir, " +
                " '' AS sck_no, " +
                " '1899-12-30 00:00:00.000' AS sck_duzen_tarih, " +
                " 0	AS sck_sahip_cari_cins, " +
                " 'M1001' AS sck_sahip_cari_kodu, " +
                " 0 AS sck_sahip_cari_grupno, " +
                " 2 AS sck_nerede_cari_cins, " +
                " CASE WHEN TYPE = 0 THEN 'MAĞAZA NAKİT KASA' WHEN TYPE = 1 THEN 'B01' END AS sck_nerede_cari_kodu, " +
                " 7 AS sck_nerede_cari_grupno, " +
                " DOC_DATE AS sck_ilk_hareket_tarihi, " +
                " REF AS sck_ilk_evrak_seri, " +
                " CONVERT(INT,CONVERT(NVARCHAR,YEAR(DOC_DATE)) + CONVERT(NVARCHAR,RIGHT('0'+ISNULL(MONTH(DOC_DATE),''),2)) + CONVERT(NVARCHAR,RIGHT('0'+ISNULL(DAY(DOC_DATE),''),2))) AS sck_ilk_evrak_sira_no, " +
                " 0 AS sck_ilk_evrak_satir_no, " +
                " DOC_DATE AS sck_son_hareket_tarihi, " +
                " 1 AS sck_doviz_kur, " +
                " 2 AS sck_sonpoz, " +
                " 0 AS sck_imza, " +
                " '' AS sck_srmmrk, " +
                " '' AS sck_kesideyeri, " +
                " '' AS Sck_TCMB_Banka_kodu, " +
                " '' AS Sck_TCMB_Sube_kodu, " +
                " '' AS Sck_TCMB_il_kodu, " +
                " 0  AS SckTasra_fl, " +
                " '' AS sck_projekodu, " +
                " 0 AS sck_masraf1, " +
                " 0 AS sck_masraf1_isleme, " +
                " 0 AS sck_masraf2, " +
                " 0 AS sck_masraf2_isleme, " +
                " 0 AS sck_odul_katkisi_tutari, " +
                " 0 AS sck_servis_komisyon_tutari, " +
                " 0 AS sck_erken_odeme_faiz_tutari, " +
                " 0 AS sck_odul_katkisi_tutari_islendi_fl, " +
                " 0 AS sck_servis_komisyon_tutari_islendi_fl, " +
                " 0 AS sck_erken_odeme_faiz_tutari_islendi_fl, " +
                " 0 AS sck_kredi_karti_tipi, " +
                " 0 AS sck_taksit_sayisi, " +
                " '' AS sck_kacinci_taksit, " +
                " '' AS sck_uye_isyeri_no, " +
                " '' AS sck_kredi_karti_no, " +
                " '' AS sck_provizyon_kodu " +
                " FROM POS_PAYMENT " +
                " WHERE DOC_DATE >= CONVERT(NVARCHAR,GETDATE()-1,112) AND DOC_DATE <= CONVERT(NVARCHAR,GETDATE(),112) AND DOC_TYPE IN (@DOC_TYPE) AND STATUS = 1 AND TYPE = 1 " +
                " GROUP BY DEPARTMENT,TYPE,DOC_TYPE,DOC_DATE,CASE_CODE,REF "
    },
    OdemeEmirInsert: 
    {
        query : "INSERT INTO [dbo].[ODEME_EMIRLERI] " +
            "([sck_DBCno]  " +
            ",[sck_SpecRECno]  " +
            ",[sck_iptal]  " +
            ",[sck_fileid]  " +
            ",[sck_hidden]  " +
            ",[sck_kilitli]  " +
            ",[sck_degisti]  " +
            ",[sck_checksum]  " +
            ",[sck_create_user]  " +
            ",[sck_create_date]  " +
            ",[sck_lastup_user]  " +
            ",[sck_lastup_date]  " +
            ",[sck_special1]  " +
            ",[sck_special2]  " +
            ",[sck_special3]  " +
            ",[sck_firmano]  " +
            ",[sck_subeno]  " +
            ",[sck_tip]  " +
            ",[sck_refno]  " +
            ",[sck_bankano]  " +
            ",[sck_borclu]  " +
            ",[sck_vdaire_no]  " +
            ",[sck_vade]  " +
            ",[sck_tutar]  " +
            ",[sck_doviz]  " +
            ",[sck_odenen]  " +
            ",[sck_degerleme_islendi]  " +
            ",[sck_banka_adres1]  " +
            ",[sck_sube_adres2]  " +
            ",[sck_borclu_tel]  " +
            ",[sck_hesapno_sehir]  " +
            ",[sck_no]  " +
            ",[sck_duzen_tarih]  " +
            ",[sck_sahip_cari_cins]  " +
            ",[sck_sahip_cari_kodu]  " +
            ",[sck_sahip_cari_grupno]  " +
            ",[sck_nerede_cari_cins]  " +
            ",[sck_nerede_cari_kodu]  " +
            ",[sck_nerede_cari_grupno]  " +
            ",[sck_ilk_hareket_tarihi]  " +
            ",[sck_ilk_evrak_seri]  " +
            ",[sck_ilk_evrak_sira_no]  " +
            ",[sck_ilk_evrak_satir_no]  " +
            ",[sck_son_hareket_tarihi]  " +
            ",[sck_doviz_kur]  " +
            ",[sck_sonpoz]  " +
            ",[sck_imza]  " +
            ",[sck_srmmrk]  " +
            ",[sck_kesideyeri]  " +
            ",[Sck_TCMB_Banka_kodu]  " +
            ",[Sck_TCMB_Sube_kodu]  " +
            ",[Sck_TCMB_il_kodu]  " +
            ",[SckTasra_fl]  " +
            ",[sck_projekodu]  " +
            ",[sck_masraf1]  " +
            ",[sck_masraf1_isleme]  " +
            ",[sck_masraf2]  " +
            ",[sck_masraf2_isleme]  " +
            ",[sck_odul_katkisi_tutari]  " +
            ",[sck_servis_komisyon_tutari]  " +
            ",[sck_erken_odeme_faiz_tutari]  " +
            ",[sck_odul_katkisi_tutari_islendi_fl]  " +
            ",[sck_servis_komisyon_tutari_islendi_fl]  " +
            ",[sck_erken_odeme_faiz_tutari_islendi_fl]  " +
            ",[sck_kredi_karti_tipi]  " +
            ",[sck_taksit_sayisi]  " +
            ",[sck_kacinci_taksit]  " +
            ",[sck_uye_isyeri_no]  " +
            ",[sck_kredi_karti_no]  " +
            ",[sck_provizyon_kodu] " +
            ") VALUES (  " +
            "@sck_DBCno  " +
            ",0 " +
            ",@sck_iptal " +
            ",@sck_fileid  " +
            ",@sck_hidden " +
            ",@sck_kilitli  " +
            ",@sck_degisti  " +
            ",0  " +
            ",@sck_create_user  " +
            ",GETDATE()  " +
            ",@sck_lastup_user " +
            ",GETDATE() " +
            ",@sck_special1 " +
            ",@sck_special2  " +
            ",@sck_special3 " +
            ",@sck_firmano  " +
            ",@sck_subeno  " +
            ",@sck_tip  " +
            ",@sck_refno " +
            ",@sck_bankano  " +
            ",@sck_borclu " +
            ",@sck_vdaire_no " +
            ",@sck_vade " +
            ",@sck_tutar " +
            ",@sck_doviz " +
            ",@sck_odenen " +
            ",@sck_degerleme_islendi " +
            ",@sck_banka_adres1  " +
            ",@sck_sube_adres2  " +
            ",@sck_borclu_tel " +
            ",@sck_hesapno_sehir  " +
            ",@sck_no " +
            ",@sck_duzen_tarih  " +
            ",@sck_sahip_cari_cins " +
            ",@sck_sahip_cari_kodu " +
            ",@sck_sahip_cari_grupno  " +
            ",@sck_nerede_cari_cins " +
            ",@sck_nerede_cari_kodu " +
            ",@sck_nerede_cari_grupno  " +
            ",@sck_ilk_hareket_tarihi " +
            ",@sck_ilk_evrak_seri  " +
            ",@sck_ilk_evrak_sira_no  " +
            ",@sck_ilk_evrak_satir_no " +
            ",@sck_son_hareket_tarihi " +
            ",@sck_doviz_kur  " +
            ",@sck_sonpoz " +
            ",@sck_imza " +
            ",@sck_srmmrk " +
            ",@sck_kesideyeri  " +
            ",@Sck_TCMB_Banka_kodu " +
            ",@Sck_TCMB_Sube_kodu  " +
            ",@Sck_TCMB_il_kodu " +
            ",@SckTasra_fl " +
            ",@sck_projekodu " +
            ",@sck_masraf1  " +
            ",@sck_masraf1_isleme " +
            ",@sck_masraf2  " +
            ",@sck_masraf2_isleme " +
            ",@sck_odul_katkisi_tutari " +
            ",@sck_servis_komisyon_tutari  " +
            ",@sck_erken_odeme_faiz_tutari  " +
            ",@sck_odul_katkisi_tutari_islendi_fl " +
            ",@sck_servis_komisyon_tutari_islendi_fl " +
            ",@sck_erken_odeme_faiz_tutari_islendi_fl " +
            ",@sck_kredi_karti_tipi  " +
            ",@sck_taksit_sayisi  " +
            ",0 " +
            ",@sck_uye_isyeri_no " +
            ",@sck_kredi_karti_no " +
            ",@sck_provizyon_kodu " +
            ") " ,
        param : 
        ['sck_DBCno:int','sck_iptal:bit','sck_fileid:int','sck_hidden:bit','sck_kilitli:bit','sck_degisti:bit',
        'sck_create_user:int','sck_lastup_user:int','sck_special1:string|4','sck_special2:string|4','sck_special3:string|4','sck_firmano:int','sck_subeno:int',
        'sck_tip:int','sck_refno:string|25','sck_bankano:string|25','sck_borclu:string|50','sck_vdaire_no:string|40','sck_vade:date','sck_tutar:float','sck_doviz:int',
        'sck_odenen:float','sck_degerleme_islendi:int','sck_banka_adres1:string|50','sck_sube_adres2:string|50','sck_borclu_tel:string|15','sck_hesapno_sehir:string|30',
        'sck_no:string|25','sck_duzen_tarih:date','sck_sahip_cari_cins:int','sck_sahip_cari_kodu:string|25','sck_sahip_cari_grupno:int','sck_nerede_cari_cins:int','sck_nerede_cari_kodu:string|25','sck_nerede_cari_grupno:int','sck_ilk_hareket_tarihi:date',
        'sck_ilk_evrak_seri:string|25','sck_ilk_evrak_sira_no:int','sck_ilk_evrak_satir_no:int','sck_son_hareket_tarihi:date','sck_doviz_kur:float','sck_sonpoz:int','sck_imza:int','sck_srmmrk:string|25','sck_kesideyeri:string|14','Sck_TCMB_Banka_kodu:string|4','Sck_TCMB_Sube_kodu:string|8',
        'Sck_TCMB_il_kodu:string|3','SckTasra_fl:bit','sck_projekodu:string|25','sck_masraf1:float','sck_masraf1_isleme:int','sck_masraf2:float','sck_masraf2_isleme:int',
        'sck_odul_katkisi_tutari:float','sck_servis_komisyon_tutari:float','sck_erken_odeme_faiz_tutari:float','sck_odul_katkisi_tutari_islendi_fl:bit',
        'sck_servis_komisyon_tutari_islendi_fl:bit','sck_erken_odeme_faiz_tutari_islendi_fl:bit','sck_kredi_karti_tipi:int','sck_taksit_sayisi:int',
        'sck_uye_isyeri_no:string|25','sck_kredi_karti_no:string|16','sck_provizyon_kodu:string|10']
    },
    CariHarInsert: 
    {
        query : "INSERT INTO [dbo].[CARI_HESAP_HAREKETLERI] ( " +
                " [cha_DBCno] " + 
                ",[cha_SpecRecNo] " +
                ",[cha_iptal] " +
                ",[cha_fileid] " +
                ",[cha_hidden] " +
                ",[cha_kilitli] " +
                ",[cha_degisti] " +
                ",[cha_CheckSum] " +
                ",[cha_create_user] " +
                ",[cha_create_date] " +
                ",[cha_lastup_user] " +
                ",[cha_lastup_date] " +
                ",[cha_special1] " +
                ",[cha_special2] " +
                ",[cha_special3] " +
                ",[cha_firmano] " +
                ",[cha_subeno] " +
                ",[cha_evrak_tip] " +
                ",[cha_evrakno_seri] " +
                ",[cha_evrakno_sira] " +
                ",[cha_satir_no] " +
                ",[cha_tarihi] " +
                ",[cha_tip] " +
                ",[cha_cinsi] " +
                ",[cha_normal_Iade] " +
                ",[cha_tpoz] " +
                ",[cha_ticaret_turu] " +
                ",[cha_belge_no] " +
                ",[cha_belge_tarih] " +
                ",[cha_aciklama] " +
                ",[cha_satici_kodu] " +
                ",[cha_EXIMkodu] " +
                ",[cha_projekodu] " +
                ",[cha_yat_tes_kodu] " +
                ",[cha_cari_cins] " +
                ",[cha_kod] " +
                ",[cha_ciro_cari_kodu] " +
                ",[cha_d_cins] " +
                ",[cha_d_kur] " +
                ",[cha_altd_kur] " +
                ",[cha_grupno] " +
                ",[cha_srmrkkodu] " +
                ",[cha_kasa_hizmet] " +
                ",[cha_kasa_hizkod] " +
                ",[cha_karsidcinsi] " +
                ",[cha_karsid_kur] " +
                ",[cha_karsidgrupno] " +
                ",[cha_karsisrmrkkodu] " +
                ",[cha_miktari] " +
                ",[cha_meblag] " +
                ",[cha_aratoplam] " +
                ",[cha_vade] " +
                ",[cha_Vade_Farki_Yuz] " +
                ",[cha_ft_iskonto1] " +
                ",[cha_ft_iskonto2] " +
                ",[cha_ft_iskonto3] " +
                ",[cha_ft_iskonto4] " +
                ",[cha_ft_iskonto5] " +
                ",[cha_ft_iskonto6] " +
                ",[cha_ft_masraf1] " +
                ",[cha_ft_masraf2] " +
                ",[cha_ft_masraf3] " +
                ",[cha_ft_masraf4] " +
                ",[cha_isk_mas1] " +
                ",[cha_isk_mas2] " +
                ",[cha_isk_mas3] " +
                ",[cha_isk_mas4] " +
                ",[cha_isk_mas5] " +
                ",[cha_isk_mas6] " +
                ",[cha_isk_mas7] " +
                ",[cha_isk_mas8] " +
                ",[cha_isk_mas9] " +
                ",[cha_isk_mas10] " +
                ",[cha_sat_iskmas1] " +
                ",[cha_sat_iskmas2] " +
                ",[cha_sat_iskmas3] " +
                ",[cha_sat_iskmas4] " +
                ",[cha_sat_iskmas5] " +
                ",[cha_sat_iskmas6] " +
                ",[cha_sat_iskmas7] " +
                ",[cha_sat_iskmas8] " +
                ",[cha_sat_iskmas9] " +
                ",[cha_sat_iskmas10] " +
                ",[cha_yuvarlama] " +
                ",[cha_StFonPntr] " +
                ",[cha_stopaj] " +
                ",[cha_savsandesfonu] " +
                ",[cha_avansmak_damgapul] " +
                ",[cha_vergipntr] " +
                ",[cha_vergi1] " +
                ",[cha_vergi2] " +
                ",[cha_vergi3] " +
                ",[cha_vergi4] " +
                ",[cha_vergi5] " +
                ",[cha_vergi6] " +
                ",[cha_vergi7] " +
                ",[cha_vergi8] " +
                ",[cha_vergi9] " +
                ",[cha_vergi10] " +
                ",[cha_vergisiz_fl] " +
                ",[cha_otvtutari] " +
                ",[cha_otvvergisiz_fl] " +
                ",[cha_oiv_pntr] " +
                ",[cha_oivtutari] " +
                ",[cha_oiv_vergi] " +
                ",[cha_oivergisiz_fl] " +
                ",[cha_fis_tarih] " +
                ",[cha_fis_sirano] " +
                ",[cha_trefno] " +
                ",[cha_sntck_poz] " +
                ",[cha_reftarihi] " +
                ",[cha_istisnakodu] " +
                ",[cha_pos_hareketi] " +
                ",[cha_meblag_ana_doviz_icin_gecersiz_fl] " +
                ",[cha_meblag_alt_doviz_icin_gecersiz_fl] " +
                ",[cha_meblag_orj_doviz_icin_gecersiz_fl] " +
                ",[cha_sip_uid] " +
                ",[cha_kirahar_uid] " +
                ",[cha_vardiya_tarihi] " +
                ",[cha_vardiya_no] " +
                ",[cha_vardiya_evrak_ti] " +
                ",[cha_ebelge_turu] " +
                ",[cha_tevkifat_toplam] " +
                ",[cha_ilave_edilecek_kdv1] " +
                ",[cha_ilave_edilecek_kdv2] " +
                ",[cha_ilave_edilecek_kdv3] " +
                ",[cha_ilave_edilecek_kdv4] " +
                ",[cha_ilave_edilecek_kdv5] " +
                ",[cha_ilave_edilecek_kdv6] " +
                ",[cha_ilave_edilecek_kdv7] " +
                ",[cha_ilave_edilecek_kdv8] " +
                ",[cha_ilave_edilecek_kdv9] " +
                ",[cha_ilave_edilecek_kdv10] " +
                ",[cha_e_islem_turu] " +
                ",[cha_fatura_belge_turu] " +
                ",[cha_diger_belge_adi] " +
                ",[cha_uuid] " +
                ",[cha_adres_no] " +
                ",[cha_vergifon_toplam] " +
                ",[cha_ilk_belge_tarihi] " +
                ",[cha_ilk_belge_doviz_kuru] " +
                ",[cha_HareketGrupKodu1] " +
                ",[cha_HareketGrupKodu2] " +
                ",[cha_HareketGrupKodu3] " +
                ",[cha_ebelgeno_seri] " +
                ",[cha_ebelgeno_sira] " +
                ",[cha_hubid] " +
                ",[cha_hubglbid] " +
                ",[cha_disyazilimid] " +
                ") VALUES ( " +
                " @cha_DBCno " +
                ",@cha_SpecRecNo " +
                ",@cha_iptal " +
                ",@cha_fileid " +
                ",@cha_hidden " +
                ",@cha_kilitli " +
                ",@cha_degisti " +
                ",@cha_CheckSum " +
                ",@cha_create_user " +
                ",GETDATE() " +
                ",@cha_lastup_user " +
                ",GETDATE() " +
                ",@cha_special1 " +	
                ",@cha_special2 " +
                ",@cha_special3 " +
                ",@cha_firmano " +
                ",@cha_subeno " +
                ",@cha_evrak_tip " +
                ",@cha_evrakno_seri " +
                ",@cha_evrakno_sira " +
                ",@cha_satir_no " +
                ",@cha_tarihi " +
                ",@cha_tip " +
                ",@cha_cinsi " +
                ",@cha_normal_Iade " +
                ",@cha_tpoz " +
                ",@cha_ticaret_turu " +
                ",@cha_belge_no " +
                ",@cha_belge_tarih " +
                ",@cha_aciklama " +
                ",@cha_satici_kodu " +
                ",@cha_EXIMkodu " +
                ",@cha_projekodu " +
                ",@cha_yat_tes_kodu " +
                ",@cha_cari_cins " +
                ",@cha_kod " +
                ",@cha_ciro_cari_kodu " +
                ",@cha_d_cins " +
                ",@cha_d_kur " +
                ",@cha_altd_kur " +
                ",@cha_grupno " +
                ",@cha_srmrkkodu " +
                ",@cha_kasa_hizmet " +
                ",@cha_kasa_hizkod " +
                ",@cha_karsidcinsi " +
                ",@cha_karsid_kur " +
                ",@cha_karsidgrupno " +
                ",@cha_karsisrmrkkodu " +
                ",@cha_miktari " +
                ",@cha_meblag " +
                ",@cha_aratoplam " +
                ",@cha_vade " +
                ",@cha_Vade_Farki_Yuz " +
                ",@cha_ft_iskonto1 " +
                ",@cha_ft_iskonto2 " +
                ",@cha_ft_iskonto3 " +
                ",@cha_ft_iskonto4 " +
                ",@cha_ft_iskonto5 " +
                ",@cha_ft_iskonto6 " +
                ",@cha_ft_masraf1 " +
                ",@cha_ft_masraf2 " +
                ",@cha_ft_masraf3 " +
                ",@cha_ft_masraf4 " +
                ",@cha_isk_mas1 " +
                ",@cha_isk_mas2 " +
                ",@cha_isk_mas3 " +
                ",@cha_isk_mas4 " +
                ",@cha_isk_mas5 " +
                ",@cha_isk_mas6 " +
                ",@cha_isk_mas7 " +
                ",@cha_isk_mas8 " +
                ",@cha_isk_mas9 " +
                ",@cha_isk_mas10 " +
                ",@cha_sat_iskmas1 " +
                ",@cha_sat_iskmas2 " +
                ",@cha_sat_iskmas3 " +
                ",@cha_sat_iskmas4 " +
                ",@cha_sat_iskmas5 " +
                ",@cha_sat_iskmas6 " +
                ",@cha_sat_iskmas7 " +
                ",@cha_sat_iskmas8 " +
                ",@cha_sat_iskmas9 " +
                ",@cha_sat_iskmas10 " +
                ",@cha_yuvarlama " +
                ",@cha_StFonPntr " +
                ",@cha_stopaj " +
                ",@cha_savsandesfonu " +
                ",@cha_avansmak_damgapul " +
                ",@cha_vergipntr " +
                ",@cha_vergi1 " +
                ",@cha_vergi2 " +
                ",@cha_vergi3 " +
                ",@cha_vergi4 " +
                ",@cha_vergi5 " +
                ",@cha_vergi6 " +
                ",@cha_vergi7 " +
                ",@cha_vergi8 " +
                ",@cha_vergi9 " +
                ",@cha_vergi10 " +
                ",@cha_vergisiz_fl " +
                ",@cha_otvtutari " +
                ",@cha_otvvergisiz_fl " +
                ",@cha_oiv_pntr " +
                ",@cha_oivtutari " +
                ",@cha_oiv_vergi " +
                ",@cha_oivergisiz_fl " +
                ",@cha_fis_tarih " +
                ",@cha_fis_sirano " +
                ",@cha_trefno " +
                ",@cha_sntck_poz " +
                ",@cha_reftarihi " +
                ",@cha_istisnakodu " +
                ",@cha_pos_hareketi " +
                ",@cha_meblag_ana_doviz_icin_gecersiz_fl " +
                ",@cha_meblag_alt_doviz_icin_gecersiz_fl " +
                ",@cha_meblag_orj_doviz_icin_gecersiz_fl " +
                ",@cha_sip_uid " +
                ",@cha_kirahar_uid " +
                ",@cha_vardiya_tarihi " +
                ",@cha_vardiya_no " +
                ",@cha_vardiya_evrak_ti " +
                ",@cha_ebelge_turu " +
                ",@cha_tevkifat_toplam " +
                ",@cha_ilave_edilecek_kdv1 " +
                ",@cha_ilave_edilecek_kdv2 " +
                ",@cha_ilave_edilecek_kdv3 " +
                ",@cha_ilave_edilecek_kdv4 " +
                ",@cha_ilave_edilecek_kdv5 " +
                ",@cha_ilave_edilecek_kdv6 " +
                ",@cha_ilave_edilecek_kdv7 " +
                ",@cha_ilave_edilecek_kdv8 " +
                ",@cha_ilave_edilecek_kdv9 " +
                ",@cha_ilave_edilecek_kdv10 " +
                ",@cha_e_islem_turu " +
                ",@cha_fatura_belge_turu " +
                ",@cha_diger_belge_adi " +
                ",@cha_uuid " +
                ",@cha_adres_no " +
                ",@cha_vergifon_toplam " +
                ",@cha_ilk_belge_tarihi " +
                ",@cha_ilk_belge_doviz_kuru " +
                ",@cha_HareketGrupKodu1 " +
                ",@cha_HareketGrupKodu2 " +
                ",@cha_HareketGrupKodu3 " +
                ",@cha_ebelgeno_seri " +
                ",@cha_ebelgeno_sira " +
                ",@cha_hubid " +
                ",@cha_hubglbid " +
                ",@cha_disyazilimid " +
                ")",
        param : ['cha_DBCno:int','cha_SpecRecNo:int','cha_iptal:bit','cha_fileid:int','cha_hidden:bit','cha_kilitli:bit','cha_degisti:bit','cha_CheckSum:int',
                'cha_create_user:int','cha_lastup_user:int','cha_special1:string|4','cha_special2:string|4','cha_special3:string|4','cha_firmano:int','cha_subeno:int','cha_evrak_tip:int',
                'cha_evrakno_seri:string|20','cha_evrakno_sira:int','cha_satir_no:int','cha_tarihi:date','cha_tip:int','cha_cinsi:int','cha_normal_Iade:int','cha_tpoz:int',
                'cha_ticaret_turu:int','cha_belge_no:string|50','cha_belge_tarih:date','cha_aciklama:string|40','cha_satici_kodu:string|25','cha_EXIMkodu:string|25','cha_projekodu:string|25','cha_yat_tes_kodu:string|25',
                'cha_cari_cins:int','cha_kod:string|25','cha_ciro_cari_kodu:string|25','cha_d_cins:int','cha_d_kur:float','cha_altd_kur:float','cha_grupno:int','cha_srmrkkodu:string|25','cha_kasa_hizmet:int',
                'cha_kasa_hizkod:string|25','cha_karsidcinsi:int','cha_karsid_kur:float','cha_karsidgrupno:int','cha_karsisrmrkkodu:string|25','cha_miktari:float','cha_meblag:float','cha_aratoplam:float',
                'cha_vade:int','cha_Vade_Farki_Yuz:float','cha_ft_iskonto1:float','cha_ft_iskonto2:float','cha_ft_iskonto3:float','cha_ft_iskonto4:float','cha_ft_iskonto5:float','cha_ft_iskonto6:float',
                'cha_ft_masraf1:float','cha_ft_masraf2:float','cha_ft_masraf3:float','cha_ft_masraf4:float','cha_isk_mas1:int','cha_isk_mas2:int','cha_isk_mas3:int','cha_isk_mas4:int','cha_isk_mas5:int',
                'cha_isk_mas6:int','cha_isk_mas7:int','cha_isk_mas8:int','cha_isk_mas9:int','cha_isk_mas10:int','cha_sat_iskmas1:bit','cha_sat_iskmas2:bit','cha_sat_iskmas3:bit','cha_sat_iskmas4:bit',
                'cha_sat_iskmas5:bit','cha_sat_iskmas6:bit','cha_sat_iskmas7:bit','cha_sat_iskmas8:bit','cha_sat_iskmas9:bit','cha_sat_iskmas10:bit','cha_yuvarlama:float','cha_StFonPntr:int','cha_stopaj:float',
                'cha_savsandesfonu:float','cha_avansmak_damgapul:float','cha_vergipntr:int','cha_vergi1:float','cha_vergi2:float','cha_vergi3:float','cha_vergi4:float','cha_vergi5:float','cha_vergi6:float',
                'cha_vergi7:float','cha_vergi8:float','cha_vergi9:float','cha_vergi10:float','cha_vergisiz_fl:bit','cha_otvtutari:float','cha_otvvergisiz_fl:bit','cha_oiv_pntr:int','cha_oivtutari:float',
                'cha_oiv_vergi:float','cha_oivergisiz_fl:bit','cha_fis_tarih:date','cha_fis_sirano:int','cha_trefno:string|25','cha_sntck_poz:int','cha_reftarihi:date','cha_istisnakodu:int','cha_pos_hareketi:int',
                'cha_meblag_ana_doviz_icin_gecersiz_fl:bit','cha_meblag_alt_doviz_icin_gecersiz_fl:bit','cha_meblag_orj_doviz_icin_gecersiz_fl:bit','cha_sip_uid:string|50','cha_kirahar_uid:string|50','cha_vardiya_tarihi:date',
                'cha_vardiya_no:int','cha_vardiya_evrak_ti:int','cha_ebelge_turu:int','cha_tevkifat_toplam:float','cha_ilave_edilecek_kdv1:float','cha_ilave_edilecek_kdv2:float','cha_ilave_edilecek_kdv3:float',
                'cha_ilave_edilecek_kdv4:float','cha_ilave_edilecek_kdv5:float','cha_ilave_edilecek_kdv6:float','cha_ilave_edilecek_kdv7:float','cha_ilave_edilecek_kdv8:float','cha_ilave_edilecek_kdv9:float',
                'cha_ilave_edilecek_kdv10:float','cha_e_islem_turu:int','cha_fatura_belge_turu:int','cha_diger_belge_adi:string|50','cha_uuid:string|40','cha_adres_no:int','cha_vergifon_toplam:float','cha_ilk_belge_tarihi:date',
                'cha_ilk_belge_doviz_kuru:float','cha_HareketGrupKodu1:string|25','cha_HareketGrupKodu2:string|25','cha_HareketGrupKodu3:string|25','cha_ebelgeno_seri:string|20','cha_ebelgeno_sira:int','cha_hubid:string|50',
                'cha_hubglbid:string|50','cha_disyazilimid:string|50']
    },
    StokHarInsert: 
    {
        query : "INSERT INTO [dbo].[STOK_HAREKETLERI] ( " +
                " [sth_DBCno] " +
                ",[sth_SpecRECno] " +
                ",[sth_iptal] " +
                ",[sth_fileid] " +
                ",[sth_hidden] " +
                ",[sth_kilitli] " +
                ",[sth_degisti] " +
                ",[sth_checksum] " +
                ",[sth_create_user] " +
                ",[sth_create_date] " +
                ",[sth_lastup_user] " +
                ",[sth_lastup_date] " +
                ",[sth_special1] " +
                ",[sth_special2] " +
                ",[sth_special3] " +
                ",[sth_firmano] " +
                ",[sth_subeno] " +
                ",[sth_tarih] " +
                ",[sth_tip] " +
                ",[sth_cins] " +
                ",[sth_normal_iade] " +
                ",[sth_evraktip] " +
                ",[sth_evrakno_seri] " +
                ",[sth_evrakno_sira] " +
                ",[sth_satirno] " +
                ",[sth_belge_no] " +
                ",[sth_belge_tarih] " +
                ",[sth_stok_kod] " +
                ",[sth_isk_mas1] " +
                ",[sth_isk_mas2] " +
                ",[sth_isk_mas3] " +
                ",[sth_isk_mas4] " +
                ",[sth_isk_mas5] " +
                ",[sth_isk_mas6] " +
                ",[sth_isk_mas7] " +
                ",[sth_isk_mas8] " +
                ",[sth_isk_mas9] " +
                ",[sth_isk_mas10] " +
                ",[sth_sat_iskmas1] " +
                ",[sth_sat_iskmas2] " +
                ",[sth_sat_iskmas3] " +
                ",[sth_sat_iskmas4] " +
                ",[sth_sat_iskmas5] " +
                ",[sth_sat_iskmas6] " +
                ",[sth_sat_iskmas7] " +
                ",[sth_sat_iskmas8] " +
                ",[sth_sat_iskmas9] " +
                ",[sth_sat_iskmas10] " +
                ",[sth_pos_satis] " +
                ",[sth_promosyon_fl] " +
                ",[sth_cari_cinsi] " +
                ",[sth_cari_kodu] " +
                ",[sth_cari_grup_no] " +
                ",[sth_isemri_gider_kodu] " +
                ",[sth_plasiyer_kodu] " +
                ",[sth_har_doviz_cinsi] " +
                ",[sth_har_doviz_kuru] " +
                ",[sth_alt_doviz_kuru] " +
                ",[sth_stok_doviz_cinsi] " +
                ",[sth_stok_doviz_kuru] " +
                ",[sth_miktar] " +
                ",[sth_miktar2] " +
                ",[sth_birim_pntr] " +
                ",[sth_tutar] " +
                ",[sth_iskonto1] " +
                ",[sth_iskonto2] " +
                ",[sth_iskonto3] " +
                ",[sth_iskonto4] " +
                ",[sth_iskonto5] " +
                ",[sth_iskonto6] " +
                ",[sth_masraf1] " +
                ",[sth_masraf2] " +
                ",[sth_masraf3] " +
                ",[sth_masraf4] " +
                ",[sth_vergi_pntr] " +
                ",[sth_vergi] " +
                ",[sth_masraf_vergi_pntr] " +
                ",[sth_masraf_vergi] " +
                ",[sth_netagirlik] " +
                ",[sth_odeme_op] " +
                ",[sth_aciklama] " +
                ",[sth_sip_uid] " +
                ",[sth_fat_uid] " +
                ",[sth_giris_depo_no] " +
                ",[sth_cikis_depo_no] " +
                ",[sth_malkbl_sevk_tarihi] " +
                ",[sth_cari_srm_merkezi] " +
                ",[sth_stok_srm_merkezi] " +
                ",[sth_fis_tarihi] " +
                ",[sth_fis_sirano] " +
                ",[sth_vergisiz_fl] " +
                ",[sth_maliyet_ana] " +
                ",[sth_maliyet_alternatif] " +
                ",[sth_maliyet_orjinal] " +
                ",[sth_adres_no] " +
                ",[sth_parti_kodu] " +
                ",[sth_lot_no] " +
                ",[sth_kons_uid] " +
                ",[sth_proje_kodu] " +
                ",[sth_exim_kodu] " +
                ",[sth_otv_pntr] " +
                ",[sth_otv_vergi] " +
                ",[sth_brutagirlik] " +
                ",[sth_disticaret_turu] " +
                ",[sth_otvtutari] " +
                ",[sth_otvvergisiz_fl] " +
                ",[sth_oiv_pntr] " +
                ",[sth_oiv_vergi] " +
                ",[sth_oivvergisiz_fl] " +
                ",[sth_fiyat_liste_no] " +
                ",[sth_oivtutari] " +
                ",[sth_Tevkifat_turu] " +
                ",[sth_nakliyedeposu] " +
                ",[sth_nakliyedurumu] " +
                ",[sth_yetkili_uid] " +
                ",[sth_taxfree_fl] " +
                ",[sth_ilave_edilecek_kdv] " +
                ",[sth_ismerkezi_kodu] " +
                ",[sth_HareketGrupKodu1] " +
                ",[sth_HareketGrupKodu2] " +
                ",[sth_HareketGrupKodu3] " +
                ",[sth_Olcu1] " +
                ",[sth_Olcu2] " +
                ",[sth_Olcu3] " +
                ",[sth_Olcu4] " +
                ",[sth_Olcu5] " +
                ",[sth_FormulMiktarNo] " +
                ",[sth_FormulMiktar] " +
                ",[sth_eirs_senaryo] " +
                ",[sth_eirs_tipi] " +
                ",[sth_teslim_tarihi] " +
                ",[sth_matbu_fl] " +
                ") VALUES ( " +
                " @sth_DBCno " +
                ",@sth_SpecRECno " +
                ",@sth_iptal " +
                ",@sth_fileid " +
                ",@sth_hidden " +
                ",@sth_kilitli " +
                ",@sth_degisti " +
                ",@sth_checksum " +
                ",@sth_create_user " +
                ",GETDATE() " +
                ",@sth_lastup_user " +
                ",GETDATE() " +
                ",@sth_special1 " +
                ",@sth_special2 " +
                ",@sth_special3 " +
                ",@sth_firmano " +
                ",@sth_subeno " +
                ",@sth_tarih " +
                ",@sth_tip " +
                ",@sth_cins " +
                ",@sth_normal_iade " +
                ",@sth_evraktip " +
                ",@sth_evrakno_seri " +
                ",@sth_evrakno_sira " +
                ",(SELECT ISNULL(MAX(sth_satirno),-1) + 1 FROM STOK_HAREKETLERI WHERE sth_evrakno_seri = @sth_evrakno_seri AND sth_evrakno_sira = @sth_evrakno_sira) " +
                ",@sth_belge_no " +
                ",@sth_belge_tarih " +
                ",@sth_stok_kod " +
                ",@sth_isk_mas1 " +
                ",@sth_isk_mas2 " +
                ",@sth_isk_mas3 " +
                ",@sth_isk_mas4 " +
                ",@sth_isk_mas5 " +
                ",@sth_isk_mas6 " +
                ",@sth_isk_mas7 " +
                ",@sth_isk_mas8 " +
                ",@sth_isk_mas9 " +
                ",@sth_isk_mas10 " +
                ",@sth_sat_iskmas1 " +
                ",@sth_sat_iskmas2 " +
                ",@sth_sat_iskmas3 " +
                ",@sth_sat_iskmas4 " +
                ",@sth_sat_iskmas5 " +
                ",@sth_sat_iskmas6 " +
                ",@sth_sat_iskmas7 " +
                ",@sth_sat_iskmas8 " +
                ",@sth_sat_iskmas9 " +
                ",@sth_sat_iskmas10 " +
                ",@sth_pos_satis " +
                ",@sth_promosyon_fl " +
                ",@sth_cari_cinsi " +
                ",@sth_cari_kodu " +
                ",@sth_cari_grup_no " +
                ",@sth_isemri_gider_kodu " +
                ",@sth_plasiyer_kodu " +
                ",@sth_har_doviz_cinsi " +
                ",@sth_har_doviz_kuru " +
                ",@sth_alt_doviz_kuru " +
                ",@sth_stok_doviz_cinsi " +
                ",@sth_stok_doviz_kuru " +
                ",@sth_miktar " +
                ",@sth_miktar2 " +
                ",@sth_birim_pntr " +
                ",@sth_tutar " +
                ",@sth_iskonto1 " +
                ",@sth_iskonto2 " +
                ",@sth_iskonto3 " +
                ",@sth_iskonto4 " +
                ",@sth_iskonto5 " +
                ",@sth_iskonto6 " +
                ",@sth_masraf1 " +
                ",@sth_masraf2 " +
                ",@sth_masraf3 " +
                ",@sth_masraf4 " +
                ",@sth_vergi_pntr " +
                ",@sth_vergi " +
                ",@sth_masraf_vergi_pntr " +
                ",@sth_masraf_vergi " +
                ",@sth_netagirlik " +
                ",@sth_odeme_op " +
                ",@sth_aciklama " +
                ",@sth_sip_uid " +
                ",@sth_fat_uid " +
                ",@sth_giris_depo_no " +
                ",@sth_cikis_depo_no " +
                ",@sth_malkbl_sevk_tarihi " +
                ",@sth_cari_srm_merkezi " +
                ",@sth_stok_srm_merkezi " +
                ",@sth_fis_tarihi " +
                ",@sth_fis_sirano " +
                ",@sth_vergisiz_fl " +
                ",@sth_maliyet_ana " +
                ",@sth_maliyet_alternatif " +
                ",@sth_maliyet_orjinal " +
                ",@sth_adres_no " +
                ",@sth_parti_kodu " +
                ",@sth_lot_no " +
                ",@sth_kons_uid " +
                ",@sth_proje_kodu " +
                ",@sth_exim_kodu " +
                ",@sth_otv_pntr " +
                ",@sth_otv_vergi " +
                ",@sth_brutagirlik " +
                ",@sth_disticaret_turu " +
                ",@sth_otvtutari " +
                ",@sth_otvvergisiz_fl " +
                ",@sth_oiv_pntr " +
                ",@sth_oiv_vergi " +
                ",@sth_oivvergisiz_fl " +
                ",@sth_fiyat_liste_no " +
                ",@sth_oivtutari " +
                ",@sth_Tevkifat_turu " +
                ",@sth_nakliyedeposu " +
                ",@sth_nakliyedurumu " +
                ",@sth_yetkili_uid " +
                ",@sth_taxfree_fl " +
                ",@sth_ilave_edilecek_kdv " +
                ",@sth_ismerkezi_kodu " +
                ",@sth_HareketGrupKodu1 " +
                ",@sth_HareketGrupKodu2 " +
                ",@sth_HareketGrupKodu3 " +
                ",@sth_Olcu1 " +
                ",@sth_Olcu2 " +
                ",@sth_Olcu3 " +
                ",@sth_Olcu4 " +
                ",@sth_Olcu5 " +
                ",@sth_FormulMiktarNo " +
                ",@sth_FormulMiktar " +
                ",@sth_eirs_senaryo " +
                ",@sth_eirs_tipi " +
                ",@sth_teslim_tarihi " +
                ",@sth_matbu_fl " +
                ")",
        param : ['sth_DBCno:int','sth_SpecRECno:int','sth_iptal:bit','sth_fileid:int','sth_hidden:bit','sth_kilitli:bit','sth_degisti:bit','sth_checksum:int',
                'sth_create_user:int','sth_lastup_user:int','sth_special1:string|4','sth_special2:string|4','sth_special3:string|4','sth_firmano:int','sth_subeno:int','sth_tarih:date',
                'sth_tip:int','sth_cins:int','sth_normal_iade:int','sth_evraktip:int','sth_evrakno_seri:string|20','sth_evrakno_sira:int','sth_belge_no:string|50',
                'sth_belge_tarih:date','sth_stok_kod:string|25','sth_isk_mas1:int','sth_isk_mas2:int','sth_isk_mas3:int','sth_isk_mas4:int','sth_isk_mas5:int','sth_isk_mas6:int',
                'sth_isk_mas7:int','sth_isk_mas8:int','sth_isk_mas9:int','sth_isk_mas10:int','sth_sat_iskmas1:bit','sth_sat_iskmas2:bit','sth_sat_iskmas3:bit','sth_sat_iskmas4:bit',
                'sth_sat_iskmas5:bit','sth_sat_iskmas6:bit','sth_sat_iskmas7:bit','sth_sat_iskmas8:bit','sth_sat_iskmas9:bit','sth_sat_iskmas10:bit','sth_pos_satis:int','sth_promosyon_fl:bit',
                'sth_cari_cinsi:int','sth_cari_kodu:string|25','sth_cari_grup_no:int','sth_isemri_gider_kodu:string|25','sth_plasiyer_kodu:string|25','sth_har_doviz_cinsi:float','sth_har_doviz_kuru:float',
                'sth_alt_doviz_kuru:float','sth_stok_doviz_cinsi:int','sth_stok_doviz_kuru:float','sth_miktar:float','sth_miktar2:float','sth_birim_pntr:int','sth_tutar:float','sth_iskonto1:float',
                'sth_iskonto2:float','sth_iskonto3:float','sth_iskonto4:float','sth_iskonto5:float','sth_iskonto6:float','sth_masraf1:float','sth_masraf2:float','sth_masraf3:float','sth_masraf4:float',
                'sth_vergi_pntr:int','sth_vergi:float','sth_masraf_vergi_pntr:int','sth_masraf_vergi:float','sth_netagirlik:float','sth_odeme_op:int','sth_aciklama:string|50','sth_sip_uid:string|50',
                'sth_fat_uid:string|50','sth_giris_depo_no:int','sth_cikis_depo_no:int','sth_malkbl_sevk_tarihi:date','sth_cari_srm_merkezi:string|25','sth_stok_srm_merkezi:string|25','sth_fis_tarihi:date',
                'sth_fis_sirano:int','sth_vergisiz_fl:bit','sth_maliyet_ana:float','sth_maliyet_alternatif:float','sth_maliyet_orjinal:float','sth_adres_no:int','sth_parti_kodu:string|25','sth_lot_no:int',
                'sth_kons_uid:string|50','sth_proje_kodu:string|25','sth_exim_kodu:string|25','sth_otv_pntr:int','sth_otv_vergi:float','sth_brutagirlik:float','sth_disticaret_turu:int','sth_otvtutari:float',
                'sth_otvvergisiz_fl:bit','sth_oiv_pntr:int','sth_oiv_vergi:float','sth_oivvergisiz_fl:bit','sth_fiyat_liste_no:int','sth_oivtutari:float','sth_Tevkifat_turu:int',
                'sth_nakliyedeposu:int','sth_nakliyedurumu:int','sth_yetkili_uid:string|50','sth_taxfree_fl:bit','sth_ilave_edilecek_kdv:float','sth_ismerkezi_kodu:string|25',
                'sth_HareketGrupKodu1:string|25','sth_HareketGrupKodu2:string|25','sth_HareketGrupKodu3:string|25','sth_Olcu1:float','sth_Olcu2:float','sth_Olcu3:float','sth_Olcu4:float',
                'sth_Olcu5:float','sth_FormulMiktarNo:int','sth_FormulMiktar:float','sth_eirs_senaryo:int','sth_eirs_tipi:int','sth_teslim_tarihi:date','sth_matbu_fl:bit']
    },
    ItemsInsert :
    {
        query : "INSERT INTO [dbo].[ITEMS] ( " + 
                " [CUSER] " + 
                ",[CDATE] " + 
                ",[LUSER] " + 
                ",[LDATE] " + 
                ",[CODE] " +
                ",[NAME] " +
                ",[SNAME] " +
                ",[ITEM_GRP] " +
                ",[TYPE] " +
                ",[VAT] " +
                ",[COST_PRICE] " +
                ",[MIN_PRICE] " +
                ",[MAX_PRICE] " +
                ",[STATUS] " +
                ",[PLU] " +
                ",[WEIGHING] " +
                ") VALUES ( " +
                " @CUSER		--<CUSER, nvarchar(25),> \n " +
                ",GETDATE()		--<CDATE, datetime,> \n " +
                ",@LUSER		--<LUSER, nvarchar(25),> \n " +
                ",GETDATE()		--<LDATE, datetime,> \n " +
                ",@CODE			--<CODE, nvarchar(25),> \n " +
                ",@NAME			--<NAME, nvarchar(250),> \n " +
                ",@SNAME		--<SNAME, nvarchar(250),> \n " +
                ",@ITEM_GRP		--<ITEM_GRP, nvarchar(25),> \n " +
                ",@TYPE			--<TYPE, int,> \n " +
                ",@VAT			--<VAT, float,> \n " +
                ",@COST_PRICE	--<COST_PRICE, float,> \n " +
                ",@MIN_PRICE	--<MIN_PRICE, float,> \n " +
                ",@MAX_PRICE	--<MAX_PRICE, float,> \n " +
                ",@STATUS		--<STATUS, bit,> \n " +
                ",@PLU			--<PLU, bit,> \n " +
                ",@WEIGHING		--<WEIGHING, bit,> \n " +
                ")",
        param : ['CUSER:string|25','LUSER:string|25','CODE:string|25','NAME:string|250','SNAME:string|250','ITEM_GRP:string|25','TYPE:int',
                 'VAT:float','COST_PRICE:float','MIN_PRICE:float','MAX_PRICE:bit','STATUS:bit','PLU:bit','WEIGHING:bit']
    },
    ItemsTaxInsert :
    {
        query : "INSERT INTO [dbo].[ITEM_TAX] ( " + 
                " [CUSER] " + 
                ",[CDATE] " + 
                ",[LUSER] " + 
                ",[LDATE] " + 
                ",[ITEM_CODE] " +
                ",[WHOLEPNTR] " +
                ",[RETAILPNTR] " +
                ",[VAT] " +
                ") VALUES ( " +
                " @CUSER	        	--<CUSER, nvarchar(25),> \n " +
                ",GETDATE()	        	--<CDATE, datetime,> \n " +
                ",@LUSER		        --<LUSER, nvarchar(25),> \n " +
                ",GETDATE()		        --<LDATE, datetime,> \n " +
                ",@ITEM_CODE			--<ITEM_CODE, nvarchar(25),> \n " +
                ",@WHOLEPNTR			--<WHOLEPNTR, int,> \n " +
                ",@RETAILPNTR			--<RETAILPNTR, int,> \n " +
                ",@VAT			        --<VAT, float,> \n " +
                ")",
        param : ['CUSER:string|25','LUSER:string|25','ITEM_CODE:string|25','WHOLEPNTR:int','RETAILPNTR:int','VAT:float']
    },
    ItemsBarcodeInsert :
    {
        query : "INSERT INTO [dbo].[ITEM_BARCODE] ( " +
                " [CUSER] " +
                ",[CDATE] " +
                ",[LUSER] " +
                ",[LDATE] " +
                ",[ITEM_CODE] " +
                ",[BARCODE] " +
                ",[UNIT] " +
                ",[TYPE] " +
                ") VALUES ( " +
                " @CUSER		--<CUSER, nvarchar(25),> \n " +
                ",GETDATE()	    --<CDATE, datetime,> \n " +
                ",@LUSER		--<LUSER, nvarchar(25),> \n " +
                ",GETDATE()	    --<LDATE, datetime,> \n " +
                ",@ITEM_CODE	--<ITEM_CODE, nvarchar(25),> \n " +
                ",@BARCODE	    --<BARCODE, nvarchar(50),> \n " +
                ",@UNIT		    --<UNIT, nvarchar(25),> \n " +
                ",@TYPE		    --<TYPE, int,> \n " +
                ")",
        param : ['CUSER:string|25','LUSER:string|25','ITEM_CODE:string|25','BARCODE:string|25','UNIT:string|25','TYPE:int']
    },
    ItemsPriceInsert :
    {
        query : "INSERT INTO [dbo].[ITEM_PRICE] ( " +
                " [CUSER] " +
                ",[CDATE] " +
                ",[LUSER] " +
                ",[LDATE] " +
                ",[ITEM_CODE] " +
                ",[TYPE] " +
                ",[DEPOT] " +
                ",[START_DATE] " +
                ",[FINISH_DATE] " +
                ",[PRICE] " +
                ",[QUANTITY] " +
                ",[CUSTOMER] " +
                ") VALUES ( " +
                " @CUSER			--<CUSER, nvarchar(25),> \n " +
                ",GETDATE()		    --<CDATE, datetime,> \n " +
                ",@LUSER			--<LUSER, nvarchar(25),> \n " +
                ",GETDATE()		    --<LDATE, datetime,> \n " +
                ",@ITEM_CODE		--<ITEM_CODE, nvarchar(25),> \n " +
                ",@TYPE			    --<TYPE, int,> \n " +
                ",@DEPOT			--<DEPOT, nvarchar(25),> \n " +
                ",GETDATE()	    --<START_DATE, datetime,> \n " +
                ",GETDATE()	    --<FINISH_DATE, datetime,> \n " +
                ",@PRICE			--<PRICE, float,> \n " +
                ",@QUANTITY		    --<QUANTITY, float,> \n " +
                ",@CUSTOMER		    --<CUSTOMER, nvarchar(25),> \n " +
                ")",
        param : ['CUSER:string|25','LUSER:string|25','ITEM_CODE:string|25','TYPE:int','DEPOT:string|25',
                 'PRICE:float','QUANTITY:float','CUSTOMER:string|25']
    },
    ItemsUnitInsert :
    {
        query : "INSERT INTO [dbo].[ITEM_UNIT] ( " +
                " [CUSER] " +
                ",[CDATE] " +
                ",[LUSER] " +
                ",[LDATE] " +
                ",[ITEM_CODE] " +
                ",[TYPE] " +
                ",[NAME] " +
                ",[FACTOR] " +
                ",[WEIGHT] " +
                ",[VOLUME] " +
                ",[WIDTH] " +
                ",[HEIGHT] " +
                ",[SIZE] " +
                ",[CODE] " +
                ") VALUES ( " +
                " @CUSER        --<CUSER, nvarchar(25),> \n " +
                ",GETDATE()     --<CDATE, datetime,> \n " +
                ",@LUSER        --<LUSER, nvarchar(25),> \n " +
                ",GETDATE()     --<LDATE, datetime,> \n " +
                ",@ITEM_CODE    --<ITEM_CODE, nvarchar(25),> \n " +
                ",@TYPE         --<TYPE, int,> \n " +
                ",@NAME         --<NAME, nvarchar(50),> \n " +
                ",@FACTOR       --<FACTOR, float,> \n " +
                ",@WEIGHT       --<WEIGHT, float,> \n " +
                ",@VOLUME       --<VOLUME, float,> \n " +
                ",@WIDTH        --<WIDTH, float,> \n " +
                ",@HEIGHT       --<HEIGHT, float,> \n " +
                ",@SIZE         --<SIZE, float,> \n " +
                ",@CODE         --<CODE, nvarchar(25),> \n " +
                ")",
        param : ['CUSER:string|25','LUSER:string|25','ITEM_CODE:string|25','TYPE:int','NAME:string|50','FACTOR:float','WEIGHT:float',
                 'VOLUME:float','WIDTH:float','HEIGHT:float','SIZE:float','CODE:string|25']
    },
    DepotInsert :
    {
        query : "INSERT INTO [dbo].[DEPOT] ( " +
                " [CUSER] " +
                ",[CDATE] " +
                ",[LUSER] " +
                ",[LDATE] " +
                ",[TYPE] " +
                ",[CODE] " +
                ",[NAME] " +
                ") VALUES ( " +
                " @CUSER         --<CUSER, nvarchar(25),> \n " +
                ",GETDATE()     --<CDATE, datetime,> \n " +
                ",@LUSER        --<LUSER, nvarchar(25),> \n " +
                ",GETDATE()     --<LDATE, datetime,> \n " +
                ",@TYPE         --<TYPE, int,> \n " +
                ",@CODE         --<CODE, nvarchar(25),> \n " +
                ",@NAME         --<NAME, nvarchar(50),> \n " +
                ")",
        param : ['CUSER:string|25','LUSER:string|25','TYPE:int','CODE:string|25','NAME:string|50']
    },
    PosSaleSelect:
    {
        query : "SELECT " +
                " [CUSER] " +
                ",[CDATE] " +
                ",[LUSER] " +
                ",[LDATE] " +
                ",[DEVICE] " +
                ",[DEPARTMENT] " +
                ",[TYPE] " +
                ",[DOC_DATE] " +
                ",[REF] " +
                ",[REF_NO] " +
                ",[LINE_NO] " +
                ",[CUSTOMER_CODE] " +
                ",[ITEM_CODE] " +
                ",[BARCODE] " +
                ",[QUANTITY] " +
                ",[UNIT] " +
                ",[PRICE] " +
                ",[DISCOUNT] " +
                ",[VAT] " +
                ",[STATUS] " +
                "FROM [dbo].[POS_SALES] WHERE STATUS = 1 AND DOC_DATE >= CONVERT(NVARCHAR,GETDATE()-1,112) AND DOC_DATE <= CONVERT(NVARCHAR,GETDATE(),112) " 
    },
    PosPaymentSelect:
    {
        query : "SELECT " +
                "[CUSER] " +
                ",[CDATE] " +
                ",[LUSER] " +
                ",[LDATE] " +
                ",[DEVICE] " +
                ",[DEPARTMENT] " +
                ",[TYPE] " +
                ",[DOC_TYPE] " +
                ",[DOC_DATE] " +
                ",[REF] " +
                ",[REF_NO] " +
                ",[LINE_NO] " +
                ",[CUSTOMER_CODE] " +
                ",[CASE_CODE] " +
                ",[AMOUNT] " +
                ",[CHANGE] " +
                ",[STATUS] " +
                "FROM [dbo].[POS_PAYMENT] WHERE STATUS = 1 AND DOC_DATE >= CONVERT(NVARCHAR,GETDATE()-1,112) AND DOC_DATE <= CONVERT(NVARCHAR,GETDATE(),112) " 
    },
    PosSaleInsert : 
    {
        query : "INSERT INTO [dbo].[POS_SALES] ( " +
                " [CUSER] " +
                ",[CDATE] " +
                ",[LUSER] " +
                ",[LDATE] " +
                ",[DEVICE] " +
                ",[DEPARTMENT] " +
                ",[TYPE] " +
                ",[DOC_DATE] " +
                ",[REF] " +
                ",[REF_NO] " +
                ",[LINE_NO] " +
                ",[CUSTOMER_CODE] " +
                ",[ITEM_CODE] " +
                ",[BARCODE] " +
                ",[QUANTITY] " +
                ",[UNIT] " +
                ",[PRICE] " +
                ",[DISCOUNT] " +
                ",[VAT] " +
                ",[STATUS] " +
                ") VALUES ( " +
                " @CUSER " +
                ",@CDATE " +
                ",@LUSER " +
                ",@LDATE " +
                ",@DEVICE " +
                ",@DEPARTMENT " +
                ",@TYPE " +
                ",@DOC_DATE " +
                ",@REF " +
                ",@REF_NO " +
                ",@LINE_NO " +
                ",@CUSTOMER_CODE " +
                ",@ITEM_CODE " +
                ",@BARCODE " +
                ",@QUANTITY " +
                ",@UNIT " +
                ",@PRICE " +
                ",@DISCOUNT " +
                ",@VAT " +
                ",@STATUS " +
                ")",
        param : ['CUSER:string|25','CDATE:date','LUSER:string|25','LDATE:date','DEVICE:string|20','DEPARTMENT:int','TYPE:int','DOC_DATE:date',
                'REF:string|25','REF_NO:int','LINE_NO:int','CUSTOMER_CODE:string|25','ITEM_CODE:string|25','BARCODE:string|50','QUANTITY:float',
                'UNIT:string|50','PRICE:float','DISCOUNT:float','VAT:float','STATUS:int']
    },
    PosPaymentInsert : 
    {
        query : "INSERT INTO [dbo].[POS_PAYMENT] ( " +
                " [CUSER] " +
                ",[CDATE] " +
                ",[LUSER] " +
                ",[LDATE] " +
                ",[DEVICE] " +
                ",[DEPARTMENT] " +
                ",[TYPE] " +
                ",[DOC_TYPE] " +
                ",[DOC_DATE] " +
                ",[REF] " +
                ",[REF_NO] " +
                ",[LINE_NO] " +
                ",[CUSTOMER_CODE] " +
                ",[CASE_CODE] " +
                ",[AMOUNT] " +
                ",[CHANGE] " +
                ",[STATUS] " +
                ") VALUES ( " +
                " @CUSER " +
                ",@CDATE " +
                ",@LUSER " +
                ",@LDATE " +
                ",@DEVICE " +
                ",@DEPARTMENT " +
                ",@TYPE " +
                ",@DOC_TYPE " +
                ",@DOC_DATE " +
                ",@REF " +
                ",@REF_NO " +
                ",@LINE_NO " +
                ",@CUSTOMER_CODE " +
                ",@CASE_CODE " +
                ",@AMOUNT " +
                ",@CHANGE " +
                ",@STATUS " +
                ")",
        param : ['CUSER:string|25','CDATE:date','LUSER:string|25','LDATE:date','DEVICE:string|20','DEPARTMENT:int','TYPE:int',
                 'DOC_TYPE:int','DOC_DATE:date','REF:string|25','REF_NO:int','LINE_NO:int','CUSTOMER_CODE:string|25',
                 'CASE_CODE:string|25','AMOUNT:float','CHANGE:float','STATUS:int']
    },
    PosPluInsert : 
    {
        query : "INSERT INTO [dbo].[POS_PLU] ( " +
                "[CUSER] " +
                ",[LUSER] " +
                ",[CDATE] " +
                ",[LDATE] " +
                ",[NAME] " +
                ",[LOCATION] " +
                ",[TYPE] " +
                ",[ITEMS_CODE] " +
                ",[GRUP_INDEX] " +
                ") VALUES ( " +
                "@CUSER                    --<CUSER, nvarchar(25),> \n " +
                ",@LUSER                   --<LUSER, nvarchar(25),> \n " +
                ",GETDATE()                --<CDATE, datetime,> \n " +
                ",GETDATE()                --<LDATE, datetime,> \n " +
                ",@NAME                    --<NAME, nvarchar(50),> \n " +
                ",@LOCATION                --<LOCATION, int,> \n " +
                ",@TYPE                    --<TYPE, int,> \n " +
                ",@ITEMS_CODE              --<ITEMS_CODE nvarchar(25),> \n " +
                ",@GRUP_INDEX              --<GRUP_INDEX  int,> \n " +
                ")",
        param : ['CUSER:string|25','LUSER:string|25','NAME:string|25','LOCATION:int','TYPE:int','ITEMS_CODE:string|25','GRUP_INDEX:int']
    },
    UsersInsert : 
    {
        query : "INSERT INTO [dbo].[USERS] ( " +
                "[CDATE] " +
                ",[LDATE] " +
                ",[CODE] " +
                ",[NAME] " +
                ",[PASSWORD] " +
                ",[TAG] " +
                ",[STATUS] " +
                ") VALUES ( " +
                "GETDATE()     --<CDATE, datetime,> \n " +
                ",GETDATE()     --<LDATE, datetime,> \n " +
                ",@CODE         --<CODE, nvarchar(25),> \n " +
                ",@NAME         --<NAME, nvarchar(50),> \n " +
                ",@PASSWORD         --<PASSWORD, nvarchar(50),> \n " +
                ",@TAG                  --<TAG,  nvarchar(25),> \n " +
                ",@STATUS         --<STATUS, int,> \n " +
                ")",
        param : ['CODE:string|25','NAME:string|25','PASSWORD:string|50','TAG:string|25','STATUS:int']
    },
    ParamsInsert : 
    {
        query : "INSERT INTO [dbo].[PARAMS] ( " +
                " [CUSER] " +
                ",[CDATE] " +
                ",[LUSER] " +
                ",[LDATE] " +
                ",[NAME] " +
                ",[VALUE] " +
                ",[TAG] " +
                ",[ID] " +
                ") VALUES ( " +
                " @CUSER         --<CUSER, nvarchar(25),> \n " +
                ",GETDATE()     --<CDATE, datetime,> \n " +
                ",@LUSER        --<LUSER, nvarchar(25),> \n " +
                ",GETDATE()     --<LDATE, datetime,> \n " +
                ",@NAME         --<TYPE, nvarchar(25),> \n " +
                ",@VALUE         --<VALUE, nvarchar(50),> \n " +
                ",@TAG         --<TAG, nvarchar(25),> \n " +
                ",@ID         --<ID, nvarchar(25),> \n " +
                ")",
        param : ['CUSER:string|25','LUSER:string|25','NAME:string|25','VALUE:string|50','TAG:string|25','ID:string|25']
    },
    DeviceInsert : 
    {
        query : "INSERT INTO [dbo].[DEVICE] ( " +
                "[CDATE] " +
                ",[LDATE] " +
                ",[ID] " +
                ",[NAME] " +
                ",[STATUS] " +
                ") VALUES ( " +
                "GETDATE()     --<CDATE, datetime,> \n " +
                ",GETDATE()     --<LDATE, datetime,> \n " +
                ",@ID         --<ID, nvarchar(25),> \n " +
                ",@NAME         --<NAME, nvarchar(25),> \n " +
                ",@STATUS         --<STATUS, int,> \n " +
                ")",
        param : ['ID:string|25','NAME:string|25','STATUS:int']
    },
}
module.exports = Query;