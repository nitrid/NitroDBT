let Query = 
{        
    CariHarInsert: 
    {
        query : "INSERT INTO [dbo].[CARI_HESAP_HAREKETLERI] ( " +
                " [cha_Guid] " +
                ",[cha_DBCno] " + 
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
                " @cha_Guid " +
                ",@cha_DBCno " +
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
        param : ['cha_Guid:string|50','cha_DBCno:int','cha_SpecRecNo:int','cha_iptal:bit','cha_fileid:int','cha_hidden:bit','cha_kilitli:bit','cha_degisti:bit','cha_CheckSum:int',
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
                " [sth_Guid] " +
                ",[sth_DBCno] " +
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
                " @sth_Guid " +
                ",@sth_DBCno " +
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
                ",@sth_satirno " +
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
        param : ['sth_Guid:string|50','sth_DBCno:int','sth_SpecRECno:int','sth_iptal:bit','sth_fileid:int','sth_hidden:bit','sth_kilitli:bit','sth_degisti:bit','sth_checksum:int',
                'sth_create_user:int','sth_lastup_user:int','sth_special1:string|4','sth_special2:string|4','sth_special3:string|4','sth_firmano:int','sth_subeno:int','sth_tarih:date',
                'sth_tip:int','sth_cins:int','sth_normal_iade:int','sth_evraktip:int','sth_evrakno_seri:string|20','sth_evrakno_sira:int','sth_satirno:int','sth_belge_no:string|50',
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
    } ,
    StoklarInsert :
    {
            query: "INSERT INTO [dbo].[STOKLAR] " +
           "([sto_Guid] " +
           ",[sto_DBCno] " +
           ",[sto_SpecRECno] " +
           ",[sto_iptal] " +
           ",[sto_fileid] " +
           ",[sto_hidden] " +
           ",[sto_kilitli] " +
           ",[sto_degisti] " +
           ",[sto_checksum] " +
           ",[sto_create_user] " +
           ",[sto_create_date] " +
           ",[sto_lastup_user] " +
           ",[sto_lastup_date] " +
           ",[sto_special1] " +
           ",[sto_special2] " +
           ",[sto_special3] " +
           ",[sto_kod] " +
           ",[sto_isim] " +
           ",[sto_kisa_ismi] " +
           ",[sto_yabanci_isim] " +
           ",[sto_sat_cari_kod] " +
           ",[sto_cins] " +
           ",[sto_doviz_cinsi] " +
           ",[sto_detay_takip] " +
           ",[sto_birim1_ad] " +
           ",[sto_birim1_katsayi] " +
           ",[sto_birim1_agirlik] " +
           ",[sto_birim1_en] " +
           ",[sto_birim1_boy] " +
           ",[sto_birim1_yukseklik] " +
           ",[sto_birim1_dara] " +
           ",[sto_birim2_ad] " +
           ",[sto_birim2_katsayi] " +
           ",[sto_birim2_agirlik] " +
           ",[sto_birim2_en] " +
           ",[sto_birim2_boy] " +
           ",[sto_birim2_yukseklik] " +
           ",[sto_birim2_dara] " +
           ",[sto_birim3_ad] " +
           ",[sto_birim3_katsayi] " +
           ",[sto_birim3_agirlik] " +
           ",[sto_birim3_en] " +
           ",[sto_birim3_boy] " +
           ",[sto_birim3_yukseklik] " +
           ",[sto_birim3_dara] " +
           ",[sto_birim4_ad] " +
           ",[sto_birim4_katsayi] " +
           ",[sto_birim4_agirlik] " +
           ",[sto_birim4_en] " +
           ",[sto_birim4_boy] " +
           ",[sto_birim4_yukseklik] " +
           ",[sto_birim4_dara] " +
           ",[sto_muh_kod] " +
           ",[sto_muh_Iade_kod] " +
           ",[sto_muh_sat_muh_kod] " +
           ",[sto_muh_satIadmuhkod] " +
           ",[sto_muh_sat_isk_kod] " +
           ",[sto_muh_aIiskmuhkod] " +
           ",[sto_muh_satmalmuhkod] " +
           ",[sto_yurtdisi_satmuhk] " +
           ",[sto_ilavemasmuhkod] " +
           ",[sto_yatirimtesmuhkod] " +
           ",[sto_depsatmuhkod] " +
           ",[sto_depsatmalmuhkod] " +
           ",[sto_bagortsatmuhkod] " +
           ",[sto_bagortsatIadmuhkod] " +
           ",[sto_bagortsatIskmuhkod] " +
           ",[sto_satfiyfarkmuhkod] " +
           ",[sto_yurtdisisatmalmuhkod] " +
           ",[sto_bagortsatmalmuhkod] " +
           ",[sto_sifirbedsatmalmuhkod] " +
           ",[sto_ihrackayitlisatismuhkod] " +
           ",[sto_ihrackayitlisatismaliyetimuhkod] " +
           ",[sto_karorani] " +
           ",[sto_min_stok] " +
           ",[sto_siparis_stok] " +
           ",[sto_max_stok] " +
           ",[sto_ver_sip_birim] " +
           ",[sto_al_sip_birim] " +
           ",[sto_siparis_sure] " +
           ",[sto_perakende_vergi] " +
           ",[sto_toptan_vergi] " +
           ",[sto_yer_kod] " +
           ",[sto_elk_etk_tipi] " +
           ",[sto_raf_etiketli] " +
           ",[sto_etiket_bas] " +
           ",[sto_satis_dursun] " +
           ",[sto_siparis_dursun] " +
           ",[sto_malkabul_dursun] " +
           ",[sto_malkabul_gun1] " +
           ",[sto_malkabul_gun2] " +
           ",[sto_malkabul_gun3] " +
           ",[sto_malkabul_gun4] " +
           ",[sto_malkabul_gun5] " +
           ",[sto_malkabul_gun6] " +
           ",[sto_malkabul_gun7] " +
           ",[sto_siparis_gun1] " +
           ",[sto_siparis_gun2] " +
           ",[sto_siparis_gun3] " +
           ",[sto_siparis_gun4] " +
           ",[sto_siparis_gun5] " +
           ",[sto_siparis_gun6] " +
           ",[sto_siparis_gun7] " +
           ",[sto_iskon_yapilamaz] " +
           ",[sto_tasfiyede] " +
           ",[sto_alt_grup_no] " +
           ",[sto_kategori_kodu] " +
           ",[sto_urun_sorkod] " +
           ",[sto_altgrup_kod] " +
           ",[sto_anagrup_kod] " +
           ",[sto_uretici_kodu] " +
           ",[sto_sektor_kodu] " +
           ",[sto_reyon_kodu] " +
           ",[sto_muhgrup_kodu] " +
           ",[sto_ambalaj_kodu] " +
           ",[sto_marka_kodu] " +
           ",[sto_beden_kodu] " +
           ",[sto_renk_kodu] " +
           ",[sto_model_kodu] " +
           ",[sto_sezon_kodu] " +
           ",[sto_hammadde_kodu] " +
           ",[sto_prim_kodu] " +
           ",[sto_kalkon_kodu] " +
           ",[sto_paket_kodu] " +
           ",[sto_pozisyonbayrak_kodu] " +
           ",[sto_mkod_artik] " +
           ",[sto_kasa_tarti_fl] " +
           ",[sto_bedenli_takip] " +
           ",[sto_renkDetayli] " +
           ",[sto_miktarondalikli_fl] " +
           ",[sto_pasif_fl] " +
           ",[sto_eksiyedusebilir_fl] " +
           ",[sto_GtipNo] " +
           ",[sto_puan] " +
           ",[sto_komisyon_hzmkodu] " +
           ",[sto_komisyon_orani] " +
           ",[sto_otvuygulama] " +
           ",[sto_otvtutar] " +
           ",[sto_otvliste] " +
           ",[sto_otvbirimi] " +
           ",[sto_prim_orani] " +
           ",[sto_garanti_sure] " +
           ",[sto_garanti_sure_tipi] " +
           ",[sto_iplik_Ne_no] " +
           ",[sto_standartmaliyet] " +
           ",[sto_kanban_kasa_miktari] " +
           ",[sto_oivuygulama] " +
           ",[sto_zraporu_stoku_fl] " +
           ",[sto_maxiskonto_orani] " +
           ",[sto_detay_takibinde_depo_kontrolu_fl] " +
           ",[sto_tamamlayici_kodu] " +
           ",[sto_oto_barkod_acma_sekli] " +
           ",[sto_oto_barkod_kod_yapisi] " +
           ",[sto_KasaIskontoOrani] " +
           ",[sto_KasaIskontoTutari] " +
           ",[sto_gelirpayi] " +
           ",[sto_oivtutar] " +
           ",[sto_oivturu] " +
           ",[sto_giderkodu] " +
           ",[sto_oivvergipntr] " +
           ",[sto_Tevkifat_turu] " +
           ",[sto_SKT_fl] " +
           ",[sto_terazi_SKT] " +
           ",[sto_RafOmru] " +
           ",[sto_KasadaTaksitlenebilir_fl] " +
           ",[sto_ufrsfark_kod] " +
           ",[sto_iade_ufrsfark_kod] " +
           ",[sto_yurticisat_ufrsfark_kod] " +
           ",[sto_satiade_ufrsfark_kod] " +
           ",[sto_satisk_ufrsfark_kod] " +
           ",[sto_alisk_ufrsfark_kod] " +
           ",[sto_satmal_ufrsfark_kod] " +
           ",[sto_yurtdisisat_ufrsfark_kod] " +
           ",[sto_ilavemas_ufrsfark_kod] " +
           ",[sto_yatirimtes_ufrsfark_kod] " +
           ",[sto_depsat_ufrsfark_kod] " +
           ",[sto_depsatmal_ufrsfark_kod] " +
           ",[sto_bagortsat_ufrsfark_kod] " +
           ",[sto_bagortsatiade_ufrsfark_kod] " +
           ",[sto_bagortsatisk_ufrsfark_kod] " +
           ",[sto_satfiyfark_ufrsfark_kod] " +
           ",[sto_yurtdisisatmal_ufrsfark_kod] " +
           ",[sto_bagortsatmal_ufrsfark_kod] " +
           ",[sto_sifirbedsatmal_ufrsfark_kod] " +
           ",[sto_uretimmaliyet_ufrsfark_kod] " +
           ",[sto_uretimkapasite_ufrsfark_kod] " +
           ",[sto_degerdusuklugu_ufrs_kod] " +
           ",[sto_halrusumyudesi] " +
           ",[sto_webe_gonderilecek_fl] " +
           ",[sto_min_stok_belirleme_gun] " +
           ",[sto_sip_stok_belirleme_gun] " +
           ",[sto_max_stok_belirleme_gun] " +
           ",[sto_sev_bel_opr_degerlendime_fl] " +
           ",[sto_otv_tevkifat_turu] " +
           ",[sto_kay_plan_degerlendir] " +
           ",[sto_CRM_sistemine_aktar_fl] " +
           ",[sto_yerli_yabanci] " +
           ",[sto_mensei] " +
           ",[sto_oto_parti_lot_kod_fl] " +
           ",[sto_efat_sinif_kodu] " +
           ",[sto_efat_sinif_listesi] " +
           ",[sto_efat_sinif_versiyonu] " +
           ",[sto_utssisteminegonderilsin_fl] " +
           ",[sto_posetbeyannamekonusu_fl] " +
           ",[sto_STT_oncesi_kaldirma] " +
           ",[sto_toplam_rafomru] " +
           ",[sto_fiyat_kasada_belirlenir_fl] " +
           ",[sto_franchise_siparis_dursun] " +
           ",[sto_GEKAP] " +
           ",[sto_GEKAP_birim] " +
           ",[sto_resim_url] " +
           ",[sto_GEKAP_depozitoonaykodu] " +
           ") VALUES ( " +
           " @sto_Guid                   --<sto_Guid, uniqueidentifier,> \n " +
           ",@sto_DBCno                   --<sto_DBCno, smallint,> \n " +
           ",@sto_SpecRECno                   --<sto_SpecRECno, int,> \n " +
           ",@sto_iptal                   --<sto_iptal, bit,> \n " +
           ",@sto_fileid                   --<sto_fileid, smallint,> \n " +
           ",@sto_hidden                   --<sto_hidden, bit,> \n " +
           ",@sto_kilitli                   --<sto_kilitli, bit,> \n " +
           ",@sto_degisti                   --<sto_degisti, bit,> \n " +
           ",@sto_checksum                   --<sto_checksum, int,> \n " +
           ",@sto_create_user                   --<sto_create_user, smallint,> \n " +
           ",GETDATE()                   --<sto_create_date, datetime,> \n " +
           ",@sto_lastup_user                   --<sto_lastup_user, smallint,> \n " +
           ",GETDATE()                     --<sto_lastup_date, datetime,> \n " +
           ",@sto_special1                   --<sto_special1, nvarchar(4),> \n " +
           ",@sto_special2                   --<sto_special2, nvarchar(4),> \n " +
           ",@sto_special3                   --<sto_special3, nvarchar(4),> \n " +
           ",@sto_kod                   --<sto_kod, nvarchar(25),> \n " +
           ",@sto_isim                   --<sto_isim, nvarchar(127),> \n " +
           ",@sto_kisa_ismi                   --<sto_kisa_ismi, nvarchar(50),> \n " +
           ",@sto_yabanci_isim                   --<sto_yabanci_isim, nvarchar(127),> \n " +
           ",@sto_sat_cari_kod                   --<sto_sat_cari_kod, nvarchar(25),> \n " +
           ",@sto_cins                   --<sto_cins, tinyint,> \n " +
           ",@sto_doviz_cinsi                   --<sto_doviz_cinsi, tinyint,> \n " +
           ",@sto_detay_takip                   --<sto_detay_takip, tinyint,> \n " +
           ",@sto_birim1_ad                   --<sto_birim1_ad, nvarchar(10),> \n " +
           ",@sto_birim1_katsayi                   --<sto_birim1_katsayi, float,> \n " +
           ",@sto_birim1_agirlik                   --<sto_birim1_agirlik, float,> \n " +
           ",@sto_birim1_en                   --<sto_birim1_en, float,> \n " +
           ",@sto_birim1_boy                   --<sto_birim1_boy, float,> \n " +
           ",@sto_birim1_yukseklik                   --<sto_birim1_yukseklik, float,> \n " +
           ",@sto_birim1_dara                   --<sto_birim1_dara, float,> \n " +
           ",@sto_birim2_ad                   --<sto_birim2_ad, nvarchar(10),> \n " +
           ",@sto_birim2_katsayi                   --<sto_birim2_katsayi, float,> \n " +
           ",@sto_birim2_agirlik                   --<sto_birim2_agirlik, float,> \n " +
           ",@sto_birim2_en                   --<sto_birim2_en, float,> \n " +
           ",@sto_birim2_boy                   --<sto_birim2_boy, float,> \n " +
           ",@sto_birim2_yukseklik                   --<sto_birim2_yukseklik, float,> \n " +
           ",@sto_birim2_dara                   --<sto_birim2_dara, float,> \n " +
           ",@sto_birim3_ad                   --<sto_birim3_ad, nvarchar(10),> \n " +
           ",@sto_birim3_katsayi                   --<sto_birim3_katsayi, float,> \n " +
           ",@sto_birim3_agirlik                   --<sto_birim3_agirlik, float,> \n " +
           ",@sto_birim3_en                   --<sto_birim3_en, float,> \n " +
           ",@sto_birim3_boy                   --<sto_birim3_boy, float,> \n " +
           ",@sto_birim3_yukseklik                   --<sto_birim3_yukseklik, float,> \n " +
           ",@sto_birim3_dara                   --<sto_birim3_dara, float,> \n " +
           ",@sto_birim4_ad                   --<sto_birim4_ad, nvarchar(10),> \n " +
           ",@sto_birim4_katsayi                   --<sto_birim4_katsayi, float,> \n " +
           ",@sto_birim4_agirlik                   --<sto_birim4_agirlik, float,> \n " +
           ",@sto_birim4_en                   --<sto_birim4_en, float,> \n " +
           ",@sto_birim4_boy                   --<sto_birim4_boy, float,> \n " +
           ",@sto_birim4_yukseklik                   --<sto_birim4_yukseklik, float,> \n " +
           ",@sto_birim4_dara                   --<sto_birim4_dara, float,> \n " +
           ",@sto_muh_kod                   --<sto_muh_kod, nvarchar(40),> \n " +
           ",@sto_muh_Iade_kod                   --<sto_muh_Iade_kod, nvarchar(40),> \n " +
           ",@sto_muh_sat_muh_kod                   --<sto_muh_sat_muh_kod, nvarchar(40),> \n " +
           ",@sto_muh_satIadmuhkod                   --<sto_muh_satIadmuhkod, nvarchar(40),> \n " +
           ",@sto_muh_sat_isk_kod                   --<sto_muh_sat_isk_kod, nvarchar(40),> \n " +
           ",@sto_muh_aIiskmuhkod                   --<sto_muh_aIiskmuhkod, nvarchar(40),> \n " +
           ",@sto_muh_satmalmuhkod                   --<sto_muh_satmalmuhkod, nvarchar(40),> \n " +
           ",@sto_yurtdisi_satmuhk                   --<sto_yurtdisi_satmuhk, nvarchar(40),> \n " +
           ",@sto_ilavemasmuhkod                   --<sto_ilavemasmuhkod, nvarchar(40),> \n " +
           ",@sto_yatirimtesmuhkod                   --<sto_yatirimtesmuhkod, nvarchar(40),> \n " +
           ",@sto_depsatmuhkod                   --<sto_depsatmuhkod, nvarchar(40),> \n " +
           ",@sto_depsatmalmuhkod                   --<sto_depsatmalmuhkod, nvarchar(40),> \n " +
           ",@sto_bagortsatmuhkod                   --<sto_bagortsatmuhkod, nvarchar(40),> \n " +
           ",@sto_bagortsatIadmuhkod                   --<sto_bagortsatIadmuhkod, nvarchar(40),> \n " +
           ",@sto_bagortsatIskmuhkod                   --<sto_bagortsatIskmuhkod, nvarchar(40),> \n " +
           ",@sto_satfiyfarkmuhkod                   --<sto_satfiyfarkmuhkod, nvarchar(40),> \n " +
           ",@sto_yurtdisisatmalmuhkod                   --<sto_yurtdisisatmalmuhkod, nvarchar(40),> \n " +
           ",@sto_bagortsatmalmuhkod                   --<sto_bagortsatmalmuhkod, nvarchar(40),> \n " +
           ",@sto_sifirbedsatmalmuhkod                   --<sto_sifirbedsatmalmuhkod, nvarchar(40),> \n " +
           ",@sto_ihrackayitlisatismuhkod                   --<sto_ihrackayitlisatismuhkod, nvarchar(40),> \n " +
           ",@sto_ihrackayitlisatismaliyetimuhkod                   --<sto_ihrackayitlisatismaliyetimuhkod, nvarchar(40),> \n " +
           ",@sto_karorani                   --<sto_karorani, float,> \n " +
           ",@sto_min_stok                   --<sto_min_stok, float,> \n " +
           ",@sto_siparis_stok                   --<sto_siparis_stok, float,> \n " +
           ",@sto_max_stok                   --<sto_max_stok, float,> \n " +
           ",@sto_ver_sip_birim                   --<sto_ver_sip_birim, tinyint,> \n " +
           ",@sto_al_sip_birim                   --<sto_al_sip_birim, tinyint,> \n " +
           ",@sto_siparis_sure                   --<sto_siparis_sure, smallint,> \n " +
           ",@sto_perakende_vergi                   --<sto_perakende_vergi, tinyint,> \n " +
           ",@sto_toptan_vergi                   --<sto_toptan_vergi, tinyint,> \n " +
           ",@sto_yer_kod                   --<sto_yer_kod, nvarchar(25),> \n " +
           ",@sto_elk_etk_tipi                   --<sto_elk_etk_tipi, tinyint,> \n " +
           ",@sto_raf_etiketli                   --<sto_raf_etiketli, tinyint,> \n " +
           ",@sto_etiket_bas                   --<sto_etiket_bas, tinyint,> \n " +
           ",@sto_satis_dursun                   --<sto_satis_dursun, tinyint,> \n " +
           ",@sto_siparis_dursun                   --<sto_siparis_dursun, tinyint,> \n " +
           ",@sto_malkabul_dursun                   --<sto_malkabul_dursun, tinyint,> \n " +
           ",@sto_malkabul_gun1                   --<sto_malkabul_gun1, bit,> \n " +
           ",@sto_malkabul_gun2                   --<sto_malkabul_gun2, bit,> \n " +
           ",@sto_malkabul_gun3                   --<sto_malkabul_gun3, bit,> \n " +
           ",@sto_malkabul_gun4                   --<sto_malkabul_gun4, bit,> \n " +
           ",@sto_malkabul_gun5                   --<sto_malkabul_gun5, bit,> \n " +
           ",@sto_malkabul_gun6                   --<sto_malkabul_gun6, bit,> \n " +
           ",@sto_malkabul_gun7                   --<sto_malkabul_gun7, bit,> \n " +
           ",@sto_siparis_gun1                   --<sto_siparis_gun1, bit,> \n " +
           ",@sto_siparis_gun2                   --<sto_siparis_gun2, bit,> \n " +
           ",@sto_siparis_gun3                   --<sto_siparis_gun3, bit,> \n " +
           ",@sto_siparis_gun4                   --<sto_siparis_gun4, bit,> \n " +
           ",@sto_siparis_gun5                   --<sto_siparis_gun5, bit,> \n " +
           ",@sto_siparis_gun6                   --<sto_siparis_gun6, bit,> \n " +
           ",@sto_siparis_gun7                   --<sto_siparis_gun7, bit,> \n " +
           ",@sto_iskon_yapilamaz                   --<sto_iskon_yapilamaz, bit,> \n " +
           ",@sto_tasfiyede                   --<sto_tasfiyede, bit,> \n " +
           ",@sto_alt_grup_no                   --<sto_alt_grup_no, smallint,> \n " +
           ",@sto_kategori_kodu                   --<sto_kategori_kodu, nvarchar(25),> \n " +
           ",@sto_urun_sorkod                   --<sto_urun_sorkod, nvarchar(25),> \n " +
           ",@sto_altgrup_kod                   --<sto_altgrup_kod, nvarchar(25),> \n " +
           ",@sto_anagrup_kod                   --<sto_anagrup_kod, nvarchar(25),> \n " +
           ",@sto_uretici_kodu                   --<sto_uretici_kodu, nvarchar(25),> \n " +
           ",@sto_sektor_kodu                   --<sto_sektor_kodu, nvarchar(25),> \n " +
           ",@sto_reyon_kodu                   --<sto_reyon_kodu, nvarchar(25),> \n " +
           ",@sto_muhgrup_kodu                   --<sto_muhgrup_kodu, nvarchar(25),> \n " +
           ",@sto_ambalaj_kodu                   --<sto_ambalaj_kodu, nvarchar(25),> \n " +
           ",@sto_marka_kodu                   --<sto_marka_kodu, nvarchar(25),> \n " +
           ",@sto_beden_kodu                   --<sto_beden_kodu, nvarchar(25),> \n " +
           ",@sto_renk_kodu                   --<sto_renk_kodu, nvarchar(25),> \n " +
           ",@sto_model_kodu                   --<sto_model_kodu, nvarchar(25),> \n " +
           ",@sto_sezon_kodu                   --<sto_sezon_kodu, nvarchar(25),> \n " +
           ",@sto_hammadde_kodu                   --<sto_hammadde_kodu, nvarchar(25),> \n " +
           ",@sto_prim_kodu                   --<sto_prim_kodu, nvarchar(25),> \n " +
           ",@sto_kalkon_kodu                   --<sto_kalkon_kodu, nvarchar(25),> \n " +
           ",@sto_paket_kodu                   --<sto_paket_kodu, nvarchar(25),> \n " +
           ",@sto_pozisyonbayrak_kodu                   --<sto_pozisyonbayrak_kodu, nvarchar(25),> \n " +
           ",@sto_mkod_artik                   --<sto_mkod_artik, nvarchar(10),> \n " +
           ",@sto_kasa_tarti_fl                   --<sto_kasa_tarti_fl, bit,> \n " +
           ",@sto_bedenli_takip                   --<sto_bedenli_takip, bit,> \n " +
           ",@sto_renkDetayli                   --<sto_renkDetayli, bit,> \n " +
           ",@sto_miktarondalikli_fl                   --<sto_miktarondalikli_fl, bit,> \n " +
           ",@sto_pasif_fl                   --<sto_pasif_fl, bit,> \n " +
           ",@sto_eksiyedusebilir_fl                   --<sto_eksiyedusebilir_fl, bit,> \n " +
           ",@sto_GtipNo                   --<sto_GtipNo, nvarchar(25),> \n " +
           ",@sto_puan                   --<sto_puan, float,> \n " +
           ",@sto_komisyon_hzmkodu                   --<sto_komisyon_hzmkodu, nvarchar(25),> \n " +
           ",@sto_komisyon_orani                   --<sto_komisyon_orani, float,> \n " +
           ",@sto_otvuygulama                   --<sto_otvuygulama, tinyint,> \n " +
           ",@sto_otvtutar                   --<sto_otvtutar, float,> \n " +
           ",@sto_otvliste                   --<sto_otvliste, tinyint,> \n " +
           ",@sto_otvbirimi                   --<sto_otvbirimi, tinyint,> \n " +
           ",@sto_prim_orani                   --<sto_prim_orani, float,> \n " +
           ",@sto_garanti_sure                   --<sto_garanti_sure, smallint,> \n " +
           ",@sto_garanti_sure_tipi                   --<sto_garanti_sure_tipi, tinyint,> \n " +
           ",@sto_iplik_Ne_no                   --<sto_iplik_Ne_no, float,> \n " +
           ",@sto_standartmaliyet                   --<sto_standartmaliyet, float,> \n " +
           ",@sto_kanban_kasa_miktari                   --<sto_kanban_kasa_miktari, float,> \n " +
           ",@sto_oivuygulama                   --<sto_oivuygulama, tinyint,> \n " +
           ",@sto_zraporu_stoku_fl                   --<sto_zraporu_stoku_fl, bit,> \n " +
           ",@sto_maxiskonto_orani                   --<sto_maxiskonto_orani, float,> \n " +
           ",@sto_detay_takibinde_depo_kontrolu_fl                   --<sto_detay_takibinde_depo_kontrolu_fl, bit,> \n " +
           ",@sto_tamamlayici_kodu                   --<sto_tamamlayici_kodu, nvarchar(25),> \n " +
           ",@sto_oto_barkod_acma_sekli                   --<sto_oto_barkod_acma_sekli, tinyint,> \n " +
           ",@sto_oto_barkod_kod_yapisi                   --<sto_oto_barkod_kod_yapisi, [dbo.[barkod_str,> \n " +
           ",@sto_KasaIskontoOrani                   --<sto_KasaIskontoOrani, float,> \n " +
           ",@sto_KasaIskontoTutari                   --<sto_KasaIskontoTutari, float,> \n " +
           ",@sto_gelirpayi                   --<sto_gelirpayi, float,> \n " +
           ",@sto_oivtutar                   --<sto_oivtutar, float,> \n " +
           ",@sto_oivturu                   --<sto_oivturu, tinyint,> \n " +
           ",@sto_giderkodu                   --<sto_giderkodu, nvarchar(25),> \n " +
           ",@sto_oivvergipntr                   --<sto_oivvergipntr, tinyint,> \n " +
           ",@sto_Tevkifat_turu                   --<sto_Tevkifat_turu, tinyint,> \n " +
           ",@sto_SKT_fl                   --<sto_SKT_fl, bit,> \n " +
           ",@sto_terazi_SKT                   --<sto_terazi_SKT, smallint,> \n " +
           ",@sto_RafOmru                   --<sto_RafOmru, smallint,> \n " +
           ",@sto_KasadaTaksitlenebilir_fl                   --<sto_KasadaTaksitlenebilir_fl, bit,> \n " +
           ",@sto_ufrsfark_kod                   --<sto_ufrsfark_kod, nvarchar(40),> \n " +
           ",@sto_iade_ufrsfark_kod                   --<sto_iade_ufrsfark_kod, nvarchar(40),> \n " +
           ",@sto_yurticisat_ufrsfark_kod                   --<sto_yurticisat_ufrsfark_kod, nvarchar(40),> \n " +
           ",@sto_satiade_ufrsfark_kod                   --<sto_satiade_ufrsfark_kod, nvarchar(40),> \n " +
           ",@sto_satisk_ufrsfark_kod                   --<sto_satisk_ufrsfark_kod, nvarchar(40),> \n " +
           ",@sto_alisk_ufrsfark_kod                   --<sto_alisk_ufrsfark_kod, nvarchar(40),> \n " +
           ",@sto_satmal_ufrsfark_kod                   --<sto_satmal_ufrsfark_kod, nvarchar(40),> \n " +
           ",@sto_yurtdisisat_ufrsfark_kod                   --<sto_yurtdisisat_ufrsfark_kod, nvarchar(40),> \n " +
           ",@sto_ilavemas_ufrsfark_kod                   --<sto_ilavemas_ufrsfark_kod, nvarchar(40),> \n " +
           ",@sto_yatirimtes_ufrsfark_kod                   --<sto_yatirimtes_ufrsfark_kod, nvarchar(40),> \n " +
           ",@sto_depsat_ufrsfark_kod                   --<sto_depsat_ufrsfark_kod, nvarchar(40),> \n " +
           ",@sto_depsatmal_ufrsfark_kod                   --<sto_depsatmal_ufrsfark_kod, nvarchar(40),> \n " +
           ",@sto_bagortsat_ufrsfark_kod                   --<sto_bagortsat_ufrsfark_kod, nvarchar(40),> \n " +
           ",@sto_bagortsatiade_ufrsfark_kod                   --<sto_bagortsatiade_ufrsfark_kod, nvarchar(40),> \n " +
           ",@sto_bagortsatisk_ufrsfark_kod                   --<sto_bagortsatisk_ufrsfark_kod, nvarchar(40),> \n " +
           ",@sto_satfiyfark_ufrsfark_kod                   --<sto_satfiyfark_ufrsfark_kod, nvarchar(40),> \n " +
           ",@sto_yurtdisisatmal_ufrsfark_kod                   --<sto_yurtdisisatmal_ufrsfark_kod, nvarchar(40),> \n " +
           ",@sto_bagortsatmal_ufrsfark_kod                   --<sto_bagortsatmal_ufrsfark_kod, nvarchar(40),> \n " +
           ",@sto_sifirbedsatmal_ufrsfark_kod                   --<sto_sifirbedsatmal_ufrsfark_kod, nvarchar(40),> \n " +
           ",@sto_uretimmaliyet_ufrsfark_kod                   --<sto_uretimmaliyet_ufrsfark_kod, nvarchar(40),> \n " +
           ",@sto_uretimkapasite_ufrsfark_kod                   --<sto_uretimkapasite_ufrsfark_kod, nvarchar(40),> \n " +
           ",@sto_degerdusuklugu_ufrs_kod                   --<sto_degerdusuklugu_ufrs_kod, nvarchar(40),> \n " +
           ",@sto_halrusumyudesi                   --<sto_halrusumyudesi, float,> \n " +
           ",@sto_webe_gonderilecek_fl                   --<sto_webe_gonderilecek_fl, bit,> \n " +
           ",@sto_min_stok_belirleme_gun                   --<sto_min_stok_belirleme_gun, smallint,> \n " +
           ",@sto_sip_stok_belirleme_gun                   --<sto_sip_stok_belirleme_gun, smallint,> \n " +
           ",@sto_max_stok_belirleme_gun                   --<sto_max_stok_belirleme_gun, smallint,> \n " +
           ",@sto_sev_bel_opr_degerlendime_fl                   --<sto_sev_bel_opr_degerlendime_fl, bit,> \n " +
           ",@sto_otv_tevkifat_turu                   --<sto_otv_tevkifat_turu, tinyint,> \n " +
           ",@sto_kay_plan_degerlendir                   --<sto_kay_plan_degerlendir, tinyint,> \n " +
           ",@sto_CRM_sistemine_aktar_fl                   --<sto_CRM_sistemine_aktar_fl, bit,> \n " +
           ",@sto_yerli_yabanci                   --<sto_yerli_yabanci, tinyint,> \n " +
           ",@sto_mensei                   --<sto_mensei, nvarchar(30),> \n " +
           ",@sto_oto_parti_lot_kod_fl                   --<sto_oto_parti_lot_kod_fl, bit,> \n " +
           ",@sto_efat_sinif_kodu                   --<sto_efat_sinif_kodu, nvarchar(20),> \n " +
           ",@sto_efat_sinif_listesi                   --<sto_efat_sinif_listesi, nvarchar(15),> \n " +
           ",@sto_efat_sinif_versiyonu                   --<sto_efat_sinif_versiyonu, nvarchar(15),> \n " +
           ",@sto_utssisteminegonderilsin_fl                   --<sto_utssisteminegonderilsin_fl, bit,> \n " +
           ",@sto_posetbeyannamekonusu_fl                   --<sto_posetbeyannamekonusu_fl, bit,> \n " +
           ",@sto_STT_oncesi_kaldirma                   --<sto_STT_oncesi_kaldirma, smallint,> \n " +
           ",@sto_toplam_rafomru                   --<sto_toplam_rafomru, smallint,> \n " +
           ",@sto_fiyat_kasada_belirlenir_fl                   --<sto_fiyat_kasada_belirlenir_fl, bit,> \n " +
           ",@sto_franchise_siparis_dursun                   --<sto_franchise_siparis_dursun, tinyint,> \n " +
           ",@sto_GEKAP                   --<sto_GEKAP, nvarchar(5),> \n " +
           ",@sto_GEKAP_birim                   --<sto_GEKAP_birim, tinyint,> \n " +
           ",@sto_resim_url                   --<sto_resim_url, nvarchar(127),> \n " +
           ",@sto_GEKAP_depozitoonaykodu                   --<sto_GEKAP_depozitoonaykodu, nvarchar(10),> \n " +
           " )",
           param : ['sto_Guid:string|50','sto_DBCno:int','sto_SpecRECno:int','sto_iptal:bit','sto_fileid:int','sto_hidden:bit','sto_kilitli:bit','sto_degisti:bit',
                'sto_checksum:int','sto_create_user:int','sto_lastup_user:int'
                ,'sto_special1:string|4','sto_special2:string|4','sto_special3:string|4','sto_kod:string|50','sto_isim:string|127','sto_kisa_ismi:string|50','sto_yabanci_isim:string|127'
                ,'sto_sat_cari_kod:string|50','sto_cins:int','sto_doviz_cinsi:int','sto_detay_takip:int','sto_birim1_ad:string|50','sto_birim1_katsayi:float'
                ,'sto_birim1_agirlik:float','sto_birim1_en:float','sto_birim1_boy:float','sto_birim1_yukseklik:float','sto_birim1_dara:float','sto_birim2_ad:string|50'
                ,'sto_birim2_katsayi:float','sto_birim2_agirlik:float','sto_birim2_en:float','sto_birim2_boy:float','sto_birim2_yukseklik:float'
                ,'sto_birim2_dara:float','sto_birim3_ad:string|50','sto_birim3_katsayi:float','sto_birim3_agirlik:float','sto_birim3_en:float','sto_birim3_boy:float'
                ,'sto_birim3_yukseklik:float','sto_birim3_dara:float','sto_birim4_ad:string|50','sto_birim4_katsayi:float','sto_birim4_agirlik:float'
                ,'sto_birim4_en:float','sto_birim4_boy:float','sto_birim4_yukseklik:float','sto_birim4_dara:float','sto_muh_kod:string|50','sto_muh_Iade_kod:string|50'
                ,'sto_muh_sat_muh_kod:string|50','sto_muh_satIadmuhkod:string|50','sto_muh_sat_isk_kod:string|50','sto_muh_aIiskmuhkod:string|50','sto_muh_satmalmuhkod:string|50'
                ,'sto_yurtdisi_satmuhk:string|50','sto_ilavemasmuhkod:string|50','sto_yatirimtesmuhkod:string|50','sto_depsatmuhkod:string|50','sto_depsatmalmuhkod:string|50'
                ,'sto_bagortsatmuhkod:string|50','sto_bagortsatIadmuhkod:string|50','sto_bagortsatIskmuhkod:string|50','sto_satfiyfarkmuhkod:string|50','sto_yurtdisisatmalmuhkod:string|50'
                ,'sto_bagortsatmalmuhkod:string|50','sto_sifirbedsatmalmuhkod:string|50','sto_ihrackayitlisatismuhkod:string|50','sto_ihrackayitlisatismaliyetimuhkod:string|50'
                ,'sto_karorani:float','sto_min_stok:float','sto_siparis_stok:float','sto_max_stok:float','sto_ver_sip_birim:int','sto_al_sip_birim:int','sto_siparis_sure:int'
                ,'sto_perakende_vergi:int','sto_toptan_vergi:int','sto_yer_kod:string|50','sto_elk_etk_tipi:int','sto_raf_etiketli:int','sto_etiket_bas:int','sto_satis_dursun:int'
                ,'sto_siparis_dursun:int','sto_malkabul_dursun:int','sto_malkabul_gun1:bit','sto_malkabul_gun2:bit','sto_malkabul_gun3:bit','sto_malkabul_gun4:bit'
                ,'sto_malkabul_gun5:bit','sto_malkabul_gun6:bit','sto_malkabul_gun7:bit','sto_siparis_gun1:bit','sto_siparis_gun2:bit','sto_siparis_gun3:bit','sto_siparis_gun4:bit'
                ,'sto_siparis_gun5:bit','sto_siparis_gun6:bit','sto_siparis_gun7:bit','sto_iskon_yapilamaz:bit','sto_tasfiyede:bit','sto_alt_grup_no:int','sto_kategori_kodu:string|50'
                ,'sto_urun_sorkod:string|50','sto_altgrup_kod:string|50','sto_anagrup_kod:string|50','sto_uretici_kodu:string|50','sto_sektor_kodu:string|50','sto_reyon_kodu:string|50','sto_muhgrup_kodu:string|50'
                ,'sto_ambalaj_kodu:string|50','sto_marka_kodu:string|50','sto_beden_kodu:string|50','sto_renk_kodu:string|50','sto_model_kodu:string|50','sto_sezon_kodu:string|50','sto_hammadde_kodu:string|50'
                ,'sto_prim_kodu:string|50','sto_kalkon_kodu:string|50','sto_paket_kodu:string|50','sto_pozisyonbayrak_kodu:string|50','sto_mkod_artik:string|50','sto_kasa_tarti_fl:bit'
                ,'sto_bedenli_takip:bit','sto_renkDetayli:bit','sto_miktarondalikli_fl:bit','sto_pasif_fl:bit','sto_eksiyedusebilir_fl:bit','sto_GtipNo:string|50'
                ,'sto_puan:string|50','sto_komisyon_hzmkodu:string|50','sto_komisyon_orani:float','sto_otvuygulama:int','sto_otvtutar:float','sto_otvliste:int','sto_otvbirimi:int'
                ,'sto_prim_orani:float','sto_garanti_sure:int','sto_garanti_sure_tipi:int','sto_iplik_Ne_no:float','sto_standartmaliyet:float','sto_kanban_kasa_miktari:float'
                ,'sto_oivuygulama:int','sto_zraporu_stoku_fl:bit','sto_maxiskonto_orani:int','sto_detay_takibinde_depo_kontrolu_fl:bit','sto_tamamlayici_kodu:string|50'
                ,'sto_oto_barkod_acma_sekli:int','sto_oto_barkod_kod_yapisi:bit','sto_KasaIskontoOrani:float','sto_KasaIskontoTutari:float','sto_gelirpayi:float'
                ,'sto_oivtutar:float','sto_oivturu:int','sto_giderkodu:string|50','sto_oivvergipntr:int','sto_Tevkifat_turu:int','sto_SKT_fl:bit','sto_terazi_SKT:int'
                ,'sto_RafOmru:int','sto_KasadaTaksitlenebilir_fl:bit','sto_ufrsfark_kod:string|50','sto_iade_ufrsfark_kod:string|50','sto_yurticisat_ufrsfark_kod:string|50'
                ,'sto_satiade_ufrsfark_kod:string|50','sto_satisk_ufrsfark_kod:string|50','sto_alisk_ufrsfark_kod:string|50','sto_satmal_ufrsfark_kod:string|50','sto_yurtdisisat_ufrsfark_kod:string|50'
                ,'sto_ilavemas_ufrsfark_kod:string|50','sto_yatirimtes_ufrsfark_kod:string|50','sto_depsat_ufrsfark_kod:string|50','sto_depsatmal_ufrsfark_kod:string|50'
                ,'sto_bagortsat_ufrsfark_kod:string|50','sto_bagortsatiade_ufrsfark_kod:string|50','sto_bagortsatisk_ufrsfark_kod:string|50','sto_satfiyfark_ufrsfark_kod:string|50'
                ,'sto_yurtdisisatmal_ufrsfark_kod:string|50','sto_bagortsatmal_ufrsfark_kod:string|50','sto_sifirbedsatmal_ufrsfark_kod:string|50','sto_uretimmaliyet_ufrsfark_kod:string|50'
                ,'sto_uretimkapasite_ufrsfark_kod:string|50','sto_degerdusuklugu_ufrs_kod:string|50','sto_halrusumyudesi:float','sto_webe_gonderilecek_fl:bit','sto_min_stok_belirleme_gun:int'
                ,'sto_sip_stok_belirleme_gun:int','sto_max_stok_belirleme_gun:int','sto_sev_bel_opr_degerlendime_fl:bit','sto_otv_tevkifat_turu:int','sto_kay_plan_degerlendir:int'
                ,'sto_CRM_sistemine_aktar_fl:bit','sto_yerli_yabanci:int','sto_mensei:string|50','sto_oto_parti_lot_kod_fl:bit','sto_efat_sinif_kodu:string|50','sto_efat_sinif_listesi:string|50'
                ,'sto_efat_sinif_versiyonu:string|50','sto_utssisteminegonderilsin_fl:bit','sto_posetbeyannamekonusu_fl:bit'
                ,'sto_STT_oncesi_kaldirma:int','sto_toplam_rafomru:int','sto_fiyat_kasada_belirlenir_fl:bit',
                'sto_franchise_siparis_dursun:int','sto_GEKAP:string|50','sto_GEKAP_birim:int','sto_resim_url:string|50','sto_GEKAP_depozitoonaykodu:string|50']
        },
        PosSatisInsert:    
        {
                query : "INSERT INTO [dbo].[TERP_POS_SATIS] " +
                "([OTARIH] " +
                ",[DTARIH] " +
                ",[KULLANICI] " +
                ",[SUBE] " +
                ",[TIP] " +
                ",[TARIH] " +
                ",[SERI] " +
                ",[SIRA] " +
                ",[SATIRNO] " +
                ",[MKODU] " +
                ",[PKODU] " +
                ",[SKODU] " +
                ",[BARKOD] " +
                ",[MIKTAR] " +
                ",[BIRIMPNTR] " +
                ",[FIYAT] " +
                ",[ISKONTO] " +
                ",[KDVPNTR] " +
                ",[DURUM] " +
                ",[SPECIAL] " +
                ")VALUES ( " +
                "@OTARIH    -- <DTARIH, datetime,> \n " +
                ",@DTARIH    -- <DTARIH, datetime,> \n " +
                ",@KULLANICI    -- <KULLANICI, nvarchar(50),> \n " +
                ",@SUBE    -- <SUBE, int,> \n " +
                ",@TIP    -- <TIP, tinyint,> \n " +
                ",@TARIH   --  <TARIH, datetime,> \n " +
                ",@SERI    -- <SERI, nvarchar(25),> \n " +
                ",@SIRA    -- <SIRA, int,> \n " +
                ",@SATIRNO       --    <SATIRNO, int,> \n " +
                ",@MKODU     --<MKODU, nvarchar(25),> \n " +
                ",@PKODU    -- <PKODU, nvarchar(25),> \n " +
                ",@SKODU    -- <SKODU, nvarchar(25),> \n " +
                ",@BARKOD    -- <BARKOD, nvarchar(50),> \n " +
                ",@MIKTAR    -- <MIKTAR, float,> \n " +
                ",@BIRIMPNTR    -- <BIRIMPNTR, tinyint,> \n " +
                ",@FIYAT     --<FIYAT, float,> \n " +
                ",@ISKONTO   --  <ISKONTO, float,> \n " +
                ",@KDVPNTR   --  <KDVPNTR, smallint,> \n " +
                ",@DURUM    -- <DURUM, int,> \n " +
                ",@SPECIAL    -- <SPECIAL, nvarchar(25),> \n " +
                " )" ,
                param : ['OTARIH:date','DTARIH:date','KULLANICI:string|50','SUBE:int','TIP:int','TARIH:date','SERI:string|50','SIRA:int','SATIRNO:int','MKODU:string|50','PKODU:string|50','BARKOD:string|50','MIKTAR:float','BIRIMPNTR:int','FIYAT:float','ISKONTO:float',
                                'KDVPNTR:int','DURUM:int','SPECIAL:string|50']
        },
        PosTahsilatInsert : 
        {
                query :  "INSERT INTO [dbo].[TERP_POS_TAHSILAT] " +
                          "([OTARIH] " +
                          ",[DTARIH] " +
                          ",[KULLANICI] " +
                          ",[SUBE] " +
                          ",[TIP] " +
                          ",[EVRAKTIP] " +
                          ",[TARIH] " +
                          ",[SERI] " +
                          ",[SIRA] " +
                          ",[SATIRNO] " +
                          ",[MKODU] " +
                          ",[PKODU] " +
                          ",[KKODU] " +
                          ",[TUTAR] " +
                          ",[USTU] " +
                          ",[DURUM] " +
                          ")  VALUES (  " +
                          " @[OTARIH]                  --<OTARIH, datetime,> \n " +
                          ",@[DTARIH]                  --<DTARIH, datetime,> \n " +
                          ",@[KULLANICI]                  --<KULLANICI, nvarchar(50),> \n " +
                          ",@[SUBE]                  --<SUBE, int,> \n " +
                          ",@[TIP]                  --<TIP, tinyint,> \n " +
                          ",@[EVRAKTIP]                  --<EVRAKTIP, tinyint,> \n " +
                          ",@[TARIH]                  --<TARIH, datetime,> \n " +
                          ",@[SERI]                  --<SERI, nvarchar(25),> \n " +
                          ",@[SIRA]                  --<SIRA, int,> \n " +
                          ",@[SATIRNO]                  --<SATIRNO, int,> \n " +
                          ",@[MKODU]                  --<MKODU, nvarchar(25),> \n " +
                          ",@[PKODU]                  --<PKODU, nvarchar(25),> \n " +
                          ",@[KKODU]                  --<KKODU, nvarchar(25),> \n " +
                          ",@[TUTAR]                  --<TUTAR, float,> \n " +
                          ",@[USTU]                  --<USTU, float,> \n " +
                          ",@[DURUM]                  --<DURUM, int,> \n " +
                           " ) ",
                           param : [ 'OTARIH:date','DTARIH:date','KULLANICI:string|50','SUBE:int','TIP:int'
                           ,'EVRAKTIP:int','TARIH:date','SERI:string|50','SIRA:int','SATIRNO:int','MKODU:string'
                           ,'PKODU:string|50','KKODU:string|50','TUTAR:float','USTU:float' ,'DURUM:int' ]

                
                
                

        },
        SatisFiyatListeler :
        {
                query : "INSERT INTO [dbo].[STOK_SATIS_FIYAT_LISTELERI] " +
                "([sfiyat_Guid] " +
                ",[sfiyat_DBCno] " +
                ",[sfiyat_SpecRECno] " +
                ",[sfiyat_iptal] " +
                ",[sfiyat_fileid] " +
                ",[sfiyat_hidden] " +
                ",[sfiyat_kilitli] " +
                ",[sfiyat_degisti] " +
                ",[sfiyat_checksum] " +
                ",[sfiyat_create_user] " +
                ",[sfiyat_create_date] " +
                ",[sfiyat_lastup_user] " +
                ",[sfiyat_lastup_date] " +
                ",[sfiyat_special1] " +
                ",[sfiyat_special2] " +
                ",[sfiyat_special3] " +
                ",[sfiyat_stokkod] " +
                ",[sfiyat_listesirano] " +
                ",[sfiyat_deposirano] " +
                ",[sfiyat_odemeplan] " +
                ",[sfiyat_birim_pntr] " +
                ",[sfiyat_fiyati] " +
                ",[sfiyat_doviz] " +
                ",[sfiyat_iskontokod] " +
                ",[sfiyat_deg_nedeni] " +
                ",[sfiyat_primyuzdesi] " +
                ",[sfiyat_kampanyakod] " +
                " ) VALUES ( " +
                " @sfiyat_Guid                       --<sfiyat_Guid, uniqueidentifier,> \n " +
                ",@sfiyat_DBCno                      --<sfiyat_DBCno, smallint,> \n " +
                ",@sfiyat_SpecRECno                      --<sfiyat_SpecRECno, int,> \n " +
                ",@sfiyat_iptal                      --<sfiyat_iptal, bit,> \n " +
                ",@sfiyat_fileid                      --<sfiyat_fileid, smallint,> \n " +
                ",@sfiyat_hidden                      --<sfiyat_hidden, bit,> \n " +
                ",@sfiyat_kilitli                      --<sfiyat_kilitli, bit,> \n " +
                ",@sfiyat_degisti                      --<sfiyat_degisti, bit,> \n " +
                ",@sfiyat_checksum                      --<sfiyat_checksum, int,> \n " +
                ",@sfiyat_create_user                      --<sfiyat_create_user, smallint,> \n " +
                ",@sfiyat_create_date                      --<sfiyat_create_date, datetime,> \n " +
                ",@sfiyat_lastup_user                      --<sfiyat_lastup_user, smallint,> \n " +
                ",@sfiyat_lastup_date                      --<sfiyat_lastup_date, datetime,> \n " +
                ",@sfiyat_special1                      --<sfiyat_special1, nvarchar(4),> \n " +
                ",@sfiyat_special2                      --<sfiyat_special2, nvarchar(4),> \n " +
                ",@sfiyat_special3                      --<sfiyat_special3, nvarchar(4),> \n " +
                ",@sfiyat_stokkod                      --<sfiyat_stokkod, nvarchar(25),> \n " +
                ",@sfiyat_listesirano                      --<sfiyat_listesirano, int,> \n " +
                ",@sfiyat_deposirano                      --<sfiyat_deposirano, int,> \n " +
                ",@sfiyat_odemeplan                      --<sfiyat_odemeplan, int,> \n " +
                ",@sfiyat_birim_pntr                      --<sfiyat_birim_pntr, tinyint,> \n " +
                ",@sfiyat_fiyati                      --<sfiyat_fiyati, float,> \n " +
                ",@sfiyat_doviz                      --<sfiyat_doviz, tinyint,> \n " +
                ",@sfiyat_iskontokod                      --<sfiyat_iskontokod, nvarchar(4),> \n " +
                ",@sfiyat_deg_nedeni                      --<sfiyat_deg_nedeni, tinyint,> \n " +
                ",@sfiyat_primyuzdesi                      --<sfiyat_primyuzdesi, float,> \n " +
                ",@sfiyat_kampanyakod                      --<sfiyat_kampanyakod, nvarchar(4),> \n " +
                " ) ",
                param : ['sfiyat_Guid:string|50','sfiyat_DBCno:int','sfiyat_SpecRECno:int','sfiyat_iptal:bit','sfiyat_fileid:int','sfiyat_hidden:bit'
                ,'sfiyat_kilitli:bit','sfiyat_degisti:bit','sfiyat_checksum:int','sfiyat_create_user:int','sfiyat_create_date:date','sfiyat_lastup_user:int','sfiyat_lastup_date:date'
                ,'sfiyat_special1:string|50','sfiyat_special2:string|50','sfiyat_special3:string|50','sfiyat_stokkod:string|50','sfiyat_listesirano:int','sfiyat_deposirano:int'
                ,'sfiyat_odemeplan:int','sfiyat_birim_pntr:int','sfiyat_fiyati:float','sfiyat_doviz:int','sfiyat_iskontokod:string|50','sfiyat_deg_nedeni:int','sfiyat_primyuzdesi:float'
                ,'sfiyat_kampanyakod:string|50']
     
        }
}
module.exports = Query;