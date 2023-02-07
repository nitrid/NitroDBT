let Query = 
{    
    ItemsInsert :
    {
        query : "EXEC [dbo].[PRD_ITEMS_INSERT] " + 
                "@CUSER = @PCUSER, " + 
                "@TYPE = @PTYPE, " + 
                "@CODE = @PCODE, " + 
                "@NAME = @PNAME, " + 
                "@SNAME = @PSNAME, " + 
                "@VAT = @PVAT, " + 
                "@COST_PRICE = @PCOST_PRICE, " + 
                "@MIN_PRICE = @PMIN_PRICE, " + 
                "@MAX_PRICE = @PMAX_PRICE, " +
                "@STATUS = @PSTATUS, " + 
                "@MAIN = @PMAIN, " + 
                "@WEIGHING = @PWEIGHING, " +
                "@SALE_JOIN_LINE = @PSALE_JOIN_LINE ",                     
        param : ['PCUSER:string|25','PTYPE:string|25','PCODE:string|25','PNAME:string|250','PSNAME:string|50','PVAT:float',
                 'PCOST_PRICE:float','PMIN_PRICE:float','PMAX_PRICE:float','PSTATUS:bit','PMAIN:string|50','PWEIGHING:bit',
                 'PSALE_JOIN_LINE:bit'],
    },
    ItemsBarcodeInsert :
    {
        query : "EXEC [dbo].[PRD_ITEM_BARCODE_INSERT] " + 
                "@CUSER = @PCUSER, " + 
                "@TYPE = @PTYPE, " + 
                "@ITEM = @PITEM, " + 
                "@BARCODE = @PBARCODE, " + 
                "@UNIT = @PUNIT ", 
        param : ['PCUSER:string|25','PTYPE:int','PITEM:string|50','PBARCODE:string|50','PUNIT:string|50'],
    },
    ItemsPriceInsert :
    {
        query : "EXEC [dbo].[PRD_ITEM_PRICE_INSERT] " + 
                "@CUSER = @PCUSER, " + 
                "@TYPE = @PTYPE, " + 
                "@ITEM = @PITEM, " + 
                "@DEPOT = @PDEPOT, " + 
                "@START_DATE = @PSTART_DATE, " + 
                "@FINISH_DATE = @PFINISH_DATE, " + 
                "@PRICE = @PPRICE, " + 
                "@QUANTITY = @PQUANTITY, " + 
                "@CUSTOMER = @PCUSTOMER ", 
        param : ['PCUSER:string|25','PTYPE:int','PITEM:string|50','PDEPOT:string|50','PSTART_DATE:date','PFINISH_DATE:date',
                 'PPRICE:float','PQUANTITY:float','PCUSTOMER:string|50'],
    },
    ItemsUnitInsert :
    {
        query : "EXEC [dbo].[PRD_ITEM_UNIT_INSERT] " + 
                "@CUSER = @PCUSER, " + 
                "@TYPE = @PTYPE, " + 
                "@ITEM = @PITEM, " + 
                "@ID = @PID, " + 
                "@FACTOR = @PFACTOR ", 
        param : ['PCUSER:string|25','PTYPE:int','PITEM:string|50','PID:string|25','PFACTOR:float'],
    },
    CustomerAdressInsert :
    {
        query : "EXEC [dbo].[PRD_CUSTOMER_ADRESS_INSERT] " +
                "@CUSER = @PCUSER, " +
                "@TYPE = @PTYPE, " +
                "@CUSTOMER = @PCUSTOMER, " +
                "@ADRESS = @PADRESS, " +
                "@ZIPCODE = @PZIPCODE, " +
                "@CITY = @PCITY, " +
                "@COUNTRY = @PCOUNTRY, " +
                "@ADRESS_NO = @PADRESS_NO ",
        param : ['PCUSER:string|50','PTYPE:int','PCUSTOMER:string|50','PADRESS:string|500','PZIPCODE:string|10','PCITY:string|25','PCOUNTRY:string|5','PADRESS_NO:int'],
    },
    CustomerInsert :
    {
        query : "EXEC [dbo].[PRD_CUSTOMERS_INSERT] " +
                "@CUSER = @PCUSER, " + 
                "@TYPE = @PTYPE, " + 
                "@TITLE = @PTITLE, " +
                "@CODE = @PCODE, " +
                "@GENUS = @PGENUS, " +
                "@WEB = @PWEB, " +
                "@SIRET_ID = @PSIRET_ID, " +
                "@APE_CODE = @PAPE_CODE, " +
                "@TAX_OFFICE = @PTAX_OFFICE, " +
                "@TAX_NO = @PTAX_NO, " +
                "@EXPIRY_DAY = @PEXPIRY_DAY ",
        param : ['PCUSER:string|25','PTYPE:int','PTITLE:string|50','PCODE:string|50','PGENUS:int','PWEB:string|100','PSIRET_ID:string|25',
                 'PAPE_CODE:string|50','PTAX_OFFICE:string|25','PTAX_NO:string|25','PEXPIRY_DAY:float'],
    },
    CustomerOfficalInsert :
    {
        query : "EXEC [dbo].[PRD_CUSTOMER_OFFICAL_INSERT] " +
                "@CUSER = @PCUSER, " +
                "@CUSTOMER = @PCUSTOMER, " + 
                "@NAME = @PNAME, " +
                "@LAST_NAME = @PLAST_NAME, " +
                "@PHONE1 = @PPHONE1, " +
                "@PHONE2 = @PPHONE2, " +
                "@GSM_PHONE = @PGSM_PHONE, " +
                "@OTHER_PHONE = @POTHER_PHONE, " +
                "@EMAIL = @PEMAIL ",
        param : ['PCUSER:string|25','PCUSTOMER:string|50','PNAME:string|50','PLAST_NAME:string|50','PPHONE1:string|50','PPHONE2:string|50',
                 'PGSM_PHONE:string|50','POTHER_PHONE:string|50','PEMAIL:string|50'],
    },
    CustomerPointInsert :
    {
        query : "EXEC [dbo].[PRD_CUSTOMER_POINT_INSERT] " + 
                "@CUSER = @PCUSER, " +
                "@TYPE = @PTYPE, " +
                "@CUSTOMER = @PCUSTOMER, " +
                "@POINT = @PPOINT ",
        param : ['PCUSER:string|25','PTYPE:int','PCUSTOMER:string|50','PPOINT:float'],
    },
    ItemCustomerInsert :
    {
        query : "EXEC [dbo].[PRD_ITEM_MULTICODE_INSERT] " + 
                "@CUSER = @PCUSER, " + 
                "@ITEM = @PITEM, " + 
                "@CUSTOMER = @PCUSTOMER, " + 
                "@CODE = @PCODE ", 
        param : ['PCUSER:string|25','PITEM:string|50','PCUSTOMER:string|50','PCODE:string|25'],
    },
    ItemGroupInsert :
    {
        query : "EXEC [dbo].[PRD_ITEM_GROUP_INSERT] " + 
                "@CUSER = @PCUSER, " + 
                "@CODE = @PCODE, " + 
                "@NAME = @PNAME, " +
                "@STATUS = @PSTATUS " , 
        param : ['PCUSER:string|25','PCODE:string|50','PNAME:string|50','PSTATUS:bit'],
    },
    otherShopInsert : 
    {
        query : "INSERT INTO [dbo].[OTHER_SHOP_ITEMS]  " +
                "([GUID]  " +
                ",[UPDATE_DATE]  " +
                ",[CODE]  " +
                ",[NAME]  " +
                ",[BARCODE]  " +
                ",[MULTICODE]  " +
                ",[SALE_PRICE]  " +
                ",[CUSTOMER]  " +
                ",[CUSTOMER_PRICE]  " +
                ",[SHOP])  " +
                " VALUES  " +
                "(@GUID " +
                ",GETDATE() "+
                ",@CODE  " +
                ",@NAME  " +
                ",@BARCODE   " +
                ",@MULTICODE  " +
                ",@SALE_PRICE " +
                ",@CUSTOMER  " +
                ",@CUSTOMER_PRICE  " +
                ",@SHOP " +
                ")",
                param : ['GUID:string|50','CODE:string|50','NAME:string|150','BARCODE:string|100','MULTICODE:string|100','SALE_PRICE:float','CUSTOMER:string|150','CUSTOMER_PRICE:float','SHOP:string|100']
    }
}
module.exports = Query;