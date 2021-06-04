var QuerySql = 
{
    //USERS PARAMS
    GetAccountParam : 
    {
        query : "SELECT * FROM ACCOUNT_PARAM WHERE ACCOUNT_GUID = @ACCOUNT_GUID " ,
        param : ['ACCOUNT_GUID:string|50']
    },
    GetDepot : 
    {   
        query : "SELECT * FROM DEPOT "
    },
    //GENERAL PARAMS
    GetGeneralParam : 
    {
        query : "SELECT * FROM GENERAL_PARAM "
    },
    //PRODUCTCTRL
    GetProduct :
    {
        query : "SELECT " +
                "* " +
                "FROM PRODUCT_VIEW_001 " +
                "WHERE " +
                "PRODUCT_PRICE_TYPE = @PRICENO AND " +
                "((UPPER(PRODUCT_NAME) LIKE UPPER(@PRODUCT_NAME)) OR (UPPER(@PRODUCT_NAME) = '')) AND " +
                "((UPPER(PRODUCT_CODE) LIKE UPPER(@PRODUCT_CODE)) OR (UPPER(@PRODUCT_CODE) = '')) AND  " +
                "((UPPER(PRODUCT_BARCODE) LIKE UPPER(@PRODUCT_BARCODE)) OR (UPPER(@PRODUCT_BARCODE) = '')) AND " +
                "((UPPER(PRODUCT_MAIN_CODE) LIKE UPPER(@PRODUCT_MAIN_CODE)) OR (UPPER(@PRODUCT_MAIN_CODE) = '')) AND " +
                "((PRODUCT_CATEGORY LIKE '%' + @PRODUCT_CATEGORY + '%') OR (@PRODUCT_CATEGORY = ''))  " ,
        param : ['PRODUCT_NAME:string|50','PRODUCT_CODE:string|50','PRODUCT_BARCODE:string|50','PRODUCT_MAIN_CODE:string|50','PRODUCT_CATEGORY:string|500','PRICENO:int','LANG:string|50']
    },
    ProductVariantControl : 
    {
        query : "SELECT COUNT(PRODUCT_MAIN_CODE) AS COUNT FROM PRODUCT_VIEW_001 WHERE PRODUCT_MAIN_CODE = @PRODUCT_MAIN_CODE AND PRODUCT_PRICE_TYPE = @PRODUCT_PRICE_TYPE GROUP BY PRODUCT_MAIN_CODE ",
        param : ['PRODUCT_MAIN_CODE:string|50','PRODUCT_PRICE_TYPE:int']
    },
    GetFilterProperty : 
    {
        query:  "SELECT " +
                "MAX(PRPRTY.RECID) AS RECID , " +
                "PRPRTY.NAME AS NAME, " +
                "MAX(PRPRTY.PRODUCT_GUID) AS PRODUCT_GUID, " +
                "PRPRTY.TAG , " +
                "PRPRTY.VALUE AS VALUE,  " +
                "ISNULL((SELECT TOP 1 [VALUE] FROM DATABASE_LANGUAGE WHERE TAG = 'SPECIALTAG' AND CODE = PRPRTY.NAME AND LANG = @LANG),PRPRTY.NAME) AS LANGNAME, " +
                "ISNULL((SELECT TOP 1 [VALUE] FROM DATABASE_LANGUAGE WHERE TAG = 'SPECIALVALUE' AND CODE = PRPRTY.VALUE AND LANG = @LANG),VALUE) AS LANGVALUE, " +
                "COUNT(PRPRTY.VALUE) AS ITEMCOUNT " +
                "FROM PRODUCT_PROPERTY AS PRPRTY " +
                "INNER JOIN PRODUCT AS PR ON " +
                "PR.GUID = PRPRTY.PRODUCT_GUID " +
                "WHERE ((PR.[CATEGORY] LIKE '%' + @CATEGORIES + '%') OR (@CATEGORIES = '')) " +
                "GROUP BY PRPRTY.TAG,PRPRTY.VALUE,PRPRTY.NAME " ,
        param : ['CATEGORIES:string|50','LANG:string:25']
    },
    GetProductAdminGrid : 
    {
        query : "SELECT * FROM PRODUCT_VIEW_002 AS PRODUCT_VIEW " +
                "WHERE ((PRODUCT_STATUS = @PRODUCT_STATUS) OR (@PRODUCT_STATUS = -1)) AND " +
                "((UPPER([PRODUCT_NAME]) LIKE UPPER(@PRODUCT_NAME)) OR (UPPER(@PRODUCT_NAME) = '')) AND " +
                "((UPPER([PRODUCT_CODE]) LIKE UPPER(@PRODUCT_CODE)) OR (UPPER(@PRODUCT_CODE) = '')) " ,
        param : ['PRODUCT_STATUS:int','PRODUCT_NAME:string|50','PRODUCT_CODE:string|50']
    },
    GetProductAdmin : 
    {
        query : "SELECT * FROM PRODUCT_VIEW_003 AS PRODUCT_VIEW " +
                "WHERE ((PRODUCT_STATUS = @PRODUCT_STATUS) OR (@PRODUCT_STATUS = -1)) AND " +
                "((UPPER([PRODUCT_NAME]) LIKE UPPER(@PRODUCT_NAME)) OR (UPPER(@PRODUCT_NAME) = '')) AND " +
                "((UPPER([PRODUCT_CODE]) LIKE UPPER(@PRODUCT_CODE)) OR (UPPER(@PRODUCT_CODE) = '')) AND " +
                "PRODUCT_MAIN_CODE = @PRODUCT_MAIN_CODE " +
                "ORDER BY PRODUCT_NAME, PRODUCT_IMAGE_SORT",
        param : ['PRODUCT_STATUS:int','PRODUCT_NAME:string|50','PRODUCT_CODE:string|50','PRODUCT_MAIN_CODE:string|50']
    },
    InsertOrders : 
    {
        query : "INSERT INTO [dbo].[ORDER] " +
                "([CDATE] " +
                ",[LDATE] " +
                ",[CUSER] " +
                ",[LUSER] " +
                ",[PRODUCT_GUID] " +
                ",[ACCOUNT_GUID] " +
                ",[UNIT] " +
                ",[DEPOT_CODE] " +
                ",[TYPE] " +
                ",[DOC_DATE] " +
                ",[REF] " +
                ",[REF_NO] " +
                ",[LINE_NO] " +
                ",[QUANTITY] " +
                ",[PRICE] " +
                ",[DISCOUNT] " +
                ",[VAT] " +
                ",[VARIANT] " +
                ",[NOTE] " +
                ",[STATUS] " +
                ") VALUES ( " +
                "GETDATE()                                                                                                     --<CDATE, nvarchar(50),> \n " +
                ",GETDATE()					                                                                                    --<LDATE, datetime,> \n " +
                ",@CUSER               	                                                                                        --<CUSER, nvarchar(50),> \n " +
                ",@CUSER					                                                                                    --<LUSER, datetime,> \n " +
                ",@PRODUCT_GUID                                                                                                 --<ITEM_GUID, uniqueidentifier,> \n " +
                ",@ACCOUNT_GUID                                                                                                 --<BARCODE_GUID, uniqueidentifier,> \n " +
                ",@UNIT                                                                                                        --<UNIT, nvarchar(25),> \n " + 
                ",@DEPOT_CODE                                                                                                   --<DEPOT_GUID, uniqueidentifier,> \n " +
                ",0         			        	                                                                            --<TYPE, int,> \n " +
                ",CONVERT(VARCHAR(10),GETDATE(),112)                                                                            --<DOC_DATE, datetime,> \n " +
                ",@REF					                                                                                       	--<REF, nvarchar(10),> \n " +
                ",@REF_NO					                                                                                    --<REF_NO, int,> \n " +
                ",(SELECT ISNULL(MAX(LINE_NO),-1) + 1 AS LINE_NO FROM [ORDER] WHERE REF = @REF AND REF_NO = @REF_NO)             --<LINE_NO, int,> \n" +
                ",@QUANTITY                                                                                                     --<QUANTITY, int,> \n " +
                ",@PRICE                                                                                                        --<PRICE, nvarchar(float),> \n " +
                ",@DISCOUNT                                                                                                     --<DISCOUNT, float,> \n " +
                ",@VAT			                                                                              		        	--<VAT, int,> \n " +
                ",@VARIANT   					                                                                              	--<VARIANT, nvarchar(50),> \n " +
                ",''   					                                                                                      	--<NOTE, nvarchar(150),> \n " +
                ",@STATUS				                                                                            	      	--<STATUS, int,> \n " +
                ")" ,
        param : ['CUSER:string|50','PRODUCT_GUID:string|50','ACCOUNT_GUID:string|50','UNIT:string|25','DEPOT_CODE:string|25','REF:string|15','REF_NO:int','QUANTITY:float',
                 'PRICE:float','DISCOUNT:float','VAT:int','VARIANT:string|50','STATUS:int']
    },
    //PRODUCTDETAILCTRL
    GetProductDetail :
    {
        query : "SELECT " +
                "* " +
                "FROM PRODUCT_VIEW_004 " +
                "WHERE " +
                "PRODUCT_PRICE_TYPE = @PRICENO AND " +
                "PRODUCT_MAIN_CODE = @PRODUCT_MAIN_CODE " ,
        param : ['PRODUCT_MAIN_CODE:string|50','PRICENO:int','LANG:string|50']
    },
    GetProductImage : 
    {
        query : "SELECT LINK + IMAGE + SORT + EXTENSION AS PATH ,* FROM PRODUCT_IMAGE WHERE PRODUCT_GUID = @PRODUCT_GUID ORDER BY SORT ",
        param : ['PRODUCT_GUID:string|50']
    },
    GetProductProperty : 
    {
        query : "SELECT " + 
                "PRP.SORT, " +
                "PRP.TAG, " +
                "PRP.VALUE, " +
                "ISNULL((SELECT TOP 1 [VALUE] FROM DATABASE_LANGUAGE WHERE TAG = 'SPECIALTAG' AND CODE = PRP.NAME AND LANG = @LANG),PRP.NAME) AS LANGNAME , " +
                "ISNULL((SELECT TOP 1 [VALUE] FROM DATABASE_LANGUAGE WHERE TAG = 'SPECIALVALUE' AND CODE = PRP.VALUE AND LANG = @LANG),PRP.VALUE) AS LANGVALUE " +
                "FROM PRODUCT_PROPERTY AS PRP WHERE ((PRP.PRODUCT_GUID = @PRODUCT_GUID) OR (@PRODUCT_GUID = '')) AND PRP.TYPE = 0 ORDER BY PRP.SORT ",
        param : ['PRODUCT_GUID:string|50','LANG:string|25']
    },
    GetProductVariant : 
    {
        query : "SELECT " +
                "PRT.PRODUCT_MAIN_CODE AS PRODUCT_MAIN_CODE, " +
                "PRT.PRODUCT_QUANTITY AS PRODUCT_QUANTITY, " +
                "PRP.SORT, " +
                "PRP.PRODUCT_GUID, " +
                "PRP.TAG, " +
                "PRP.NAME, " +
                "PRP.VALUE, " +
                "ISNULL((SELECT TOP 1 [VALUE] FROM DATABASE_LANGUAGE WHERE TAG = 'SPECIALTAG' AND CODE = PRP.NAME AND LANG = @LANG),PRP.NAME) AS LANGNAME , " +
                "ISNULL((SELECT TOP 1 [VALUE] FROM DATABASE_LANGUAGE WHERE TAG = 'SPECIALVALUE' AND CODE = PRP.VALUE AND LANG = @LANG),PRP.VALUE) AS LANGVALUE " +
                "FROM PRODUCT_PROPERTY AS PRP " +
                "INNER JOIN PRODUCT_VIEW_004 AS PRT ON PRT.PRODUCT_GUID = PRP.PRODUCT_GUID " +
                "WHERE " +
                "PRT.PRODUCT_PRICE_TYPE = @PRODUCT_PRICE_TYPE AND " +
                "PRT.PRODUCT_MAIN_CODE = @PRODUCT_MAIN_CODE AND " +
                "PRP.TYPE = 1  " +
                "ORDER BY PRP.SORT  " ,
        param : ['PRODUCT_MAIN_CODE:string|50','PRODUCT_PRICE_TYPE:int','LANG:string|25']
    },
    GetRandomCarousel : 
    {
        query : "SELECT TOP 25 * FROM PRODUCT_VIEW_004 WHERE PRODUCT_STATUS = 1 AND PRODUCT_CATEGORY = @PRODUCT_CATEGORY AND PRODUCT_PRICE_TYPE = @PRODUCT_PRICE_TYPE ORDER BY newid() ",
        param : ['PRODUCT_CATEGORY:string|50','PRODUCT_PRICE_TYPE:int']
    },
    //GLOBAL
    GetImageList : 
    {
        query : "SELECT * FROM ITEM_IMAGE_VIEW_001 WHERE ITEM_GUID = @ITEM_GUID ORDER BY BARCODE_GUID, SORT ASC ",
        param : ['ITEM_GUID:string|50']
    },
    //BASKET
    GetBasketList : 
    {
        query : "SELECT *, " +
                "ISNULL((SELECT TOP 1 VALUE FROM DATABASE_LANGUAGE WHERE CODE = ORDR.ORDER_UNIT AND DATABASE_LANGUAGE.TAG = 'UNIT' AND LANG = @LANG),ORDR.ORDER_UNIT) AS LANGUNIT " +
                "FROM ORDER_VIEW_001 AS ORDR " +
                "WHERE " +
                "((ACCOUNT_GUID = @ACCOUNT_GUID) OR (@ACCOUNT_GUID = '00000000-0000-0000-0000-000000000000')) AND " +
                "ORDR.STATUS = @STATUS AND " +
                "((REF = @REF) OR (@REF = '')) AND " +
                "((REF_NO = @REF_NO) OR (@REF_NO = -1)) " ,
        param : ['LANG:string|25','ACCOUNT_GUID:string|100','STATUS:int','REF:string|25','REF_NO:int']
    },
    GetPriceList : 
    {
        query : "SELECT " +
                "TYPE AS TYPE, " +
                "MAX(NAME) AS NAME,  " +
                "MAX(PRICE) AS PRICE " +
                "FROM PRODUCT_PRICE  " +
                "WHERE ((UPPER(PRODUCT_GUID) LIKE UPPER(@PRODUCT_GUID)) OR (UPPER(@PRODUCT_GUID) = '')) " +
                "GROUP BY TYPE " ,
        param : ['PRODUCT_GUID:string|150']
    },
    GetUnitList :
    {
        query : "SELECT  " +
                "MAX(UNIT) AS UNIT " +
                "FROM PRODUCT_DETAIL  " +
                "GROUP BY UNIT " ,
    },
    GetProductListPrice : 
    {
        query : "SELECT " +
                "PRODUCT_GUID AS PRODUCT_GUID, " +
                "MAX(TYPE) AS TYPE, " +
                "MAX(PRICE) AS PRICE " +
                "FROM PRODUCT_PRICE WHERE PRODUCT_GUID = @PRODUCT_GUID AND TYPE = @TYPE GROUP BY PRODUCT_GUID  " ,
        param : ['PRODUCT_GUID:string|50','TYPE:int']
    },
    GetDepotQuantity :
    {
        query : "SELECT * FROM DEPOT_QUANTITY_VIEW_001 " +
                "WHERE ((UPPER(PRODUCT_GUID) LIKE UPPER(@PRODUCT_GUID)) OR (UPPER(@PRODUCT_GUID) = ''))",
        param : ['PRODUCT_GUID:string|150']
    },
    ProductQuantityControl :
    {
        query : "SELECT * FROM PRODUCT_VIEW_001 WHERE PRODUCT_GUID = @PRODUCT_GUID ",
        param : ['PRODUCT_GUID:string|50',]
    },
    MaxOrdersRefNo : 
    {
        query : "SELECT ISNULL(MAX(REF_NO),0) + 1 AS MAXREFNO FROM [ORDER] WHERE STATUS IN(1,2) AND USER_CODE = @USER_CODE ",
        param : ['USER_CODE:string|25']
    },
    BasketStatusUpdate : 
    {
        query : "UPDATE [ORDER] SET [STATUS] = 1 , " +
                "NOTE = @NOTE , " +
                "REF_NO = (SELECT ISNULL(MAX(REF_NO),0) + 1 AS MAXREFNO FROM [ORDER] WHERE REF = @REF) " +
                "WHERE REF = @REF AND ACCOUNT_GUID = @ACCOUNT_GUID AND [STATUS] = 0 " ,
        param : ['NOTE:string|150','REF:string|10','ACCOUNT_GUID:string|50']
    },
    BasketRowsDelete : 
    {
        query : "DELETE FROM [ORDER] WHERE [GUID] = @GUID ",
        param : ['GUID:string|150',]
    },
    BasketUpdate : 
    {
        query : "UPDATE [ORDER] SET QUANTITY = @QUANTITY, UNIT = @UNIT, PRICE = @PRICE, DISCOUNT = @DISCOUNT WHERE GUID = @GUID " ,
        param : ['QUANTITY:float','UNIT:string|10','PRICE:float','DISCOUNT:float','GUID:string|max']
    },
    //ORDERS
    OrdersStatusUpdate :
    {
        query : "UPDATE [ORDER] SET STATUS = @STATUS WHERE REF = @REF AND REF_NO = @REF_NO AND ACCOUNT_GUID = @ACCOUNT_GUID",
        param : ['STATUS:int','REF:string|50','REF_NO:int','ACCOUNT_GUID:string|50',]
    },
    //KULLANICI PARAMETRE
    GetAccount :
    {
        query : "SELECT * FROM ACCOUNT_VIEW_001 WHERE ((ACCOUNT_CODE = @ACCOUNT_CODE) OR (@ACCOUNT_CODE = '')) ORDER BY ACCOUNT_ROLE ASC",
        param : ['ACCOUNT_CODE:string|25']
    },
    InsertAccount : 
    {
        query : "DECLARE @TABLE table([GUID] NVARCHAR(50)) " +
                "INSERT INTO [dbo].[ACCOUNT] " +
                "([CUSER] " +
                ",[CDATE] " +
                ",[LUSER] " +
                ",[LDATE] " +
                ",[CODE] " +
                ",[PAIRING_CODE] " +
                ",[NAME] " +
                ",[LAST_NAME] " +
                ",[EMAIL] " +
                ",[TEL] " +
                ",[PASSWORD] " +
                ",[ROLE] " +
                ",[STATUS] " +
                ",[LAST_LOGIN_IP] " +
                ",[LAST_LOGIN_DATE]) " +
                "OUTPUT INSERTED.[GUID] INTO @TABLE " + 
                "VALUES(                                          " +
                " ''					        -- nvarchar(50),>  \n " +
                ",GETDATE()						-- datetime,>  \n " +
                ",''						    -- nvarchar(50),>  \n " +
                ",GETDATE()						-- datetime,>  \n " +
                ",@CODE 	                    -- nvarchar(50),>  \n " +
                ",@PAIRING_CODE					-- nvarchar(50),>  \n " +
                ",@NAME					        -- nvarchar(50),>  \n " +
                ",@LAST_NAME				  	-- nvarchar(50),>  \n " +
                ",@EMAIL						-- nvarchar(50),>  \n " +
                ",@TEL					    	-- int,>  \n " +
                ",@PASSWORD				    	-- nvarchar(50),>  \n " +
                ",@ROLE				        	-- int,>  \n " +
                ",@STATUS						-- int,>  \n " +
                ",''					    	-- nvarchar(50),>  \n " +
                ",GETDATE()						-- datetime,>  \n " +
                ")" +
                "SELECT [GUID] FROM @TABLE ",
        param : ['CODE:string|50','PAIRING_CODE:string|150','NAME:string|50','LAST_NAME:string|50','EMAIL:string|50','TEL:string|20','PASSWORD:string|50','ROLE:int','STATUS:int']
    },
    UpdateUser : 
    {
        query : "UPDATE ACCOUNT SET CODE = @CODE, PAIRING_CODE = @PAIRING_CODE, [NAME] = @NAME, LAST_NAME = @LAST_NAME, EMAIL = @EMAIL, TEL = @TEL, " +
                "PASSWORD = @PASSWORD, ROLE = @ROLE, STATUS = @STATUS WHERE GUID = @GUID" ,
        param : ['CODE:string|50','PAIRING_CODE:string|150','NAME:string|50','LAST_NAME:string|50','EMAIL:string|50','TEL:string|20','PASSWORD:string|50',
                 'ROLE:int','STATUS:int','GUID:string|150']
    },
    DeleteUser : 
    {
        query : "DELETE FROM ACCOUNT_PARAM WHERE ACCOUNT_GUID = @GUID " +
                "DELETE FROM ACCOUNT WHERE GUID = @GUID ",
        param : ['GUID:string|150']
    },
    //PARAM
    InsertParam : 
    {
        query : "INSERT INTO [dbo].[ACCOUNT_PARAM] " +
                "([CDATE] " +
                ",[LDATE] " +
                ",[CUSER] " +
                ",[LUSER] " +
                ",[ACCOUNT_GUID] " +
                ",[TAG] " +
                ",[VALUE]) " +
                "VALUES " +
                "(GETDATE()						--<CDATE, datetime(25),> \n " +
                ",GETDATE()					    --<LDATE, datetime,> \n " +
                ",@CUSER						--<CUSER, nvarchar(25),> \n " +
                ",@LUSER				    --<LUSER, nvarchar,> \n " +
                ",@ACCOUNT_GUID						    --<ACCOUNT_GUID, nvarchar(150),> \n " +
                ",@TAG						--<TAG, nvarchar(50),> \n " +
                ",@VALUE						--<USER, nvarchar(25),> \n " +
                ")",
        param : ['CUSER:string|25','LUSER:string|25','ACCOUNT_GUID:string|150','TAG:string|25','VALUE:string|max']
    },
    UpdateParam : 
    {
        query : "UPDATE GENERAL_PARAM SET VALUE = @VALUE,LDATE = GETDATE() WHERE TAG = @TAG ",
        param : ['VALUE:string|max','TAG:string|25']
    },
    UpdateUserParam : 
    {
        query : "UPDATE ACCOUNT_PARAM SET VALUE = @VALUE,LDATE = GETDATE() WHERE TAG = @TAG AND ACCOUNT_GUID = @ACCOUNT_GUID ",
        param : ['VALUE:string|max','TAG:string|25','ACCOUNT_GUID:string|150']
    },
    //SETTINGS
    UpdateSettings :
    {
        query : "UPDATE SETTINGS SET CUSTOMER_NAME = @CUSTOMER_NAME, CARI_NAME = @CARI_NAME, ADRESS = @ADRESS, TEL = @TEL, MAIL = @MAIL, SITE_TITLE = @SITE_TITLE " +
                "SITE_DESC = @SITE_DESC, SITE_KEYWORDS = @SITE_KEYWORDS, SITE_AUTHOR = @SITE_AUTHOR, SITE_LOGO = @SITE_LOGO, GOOGLE_TAG = @GOOGLE_TAG," +
                "YANDEX_TAG = @YANDEX_TAG, FOOTER_TEXT = @FOOTER_TEXT WHERE ID = 1",
        param : ['CUSTOMER_NAME:string|50','CARI_NAME:string|50','ADRESS:string|max','TEL|int','MAIL:string|50','SITE_TITLE:string|200','SITE_DESC:string|max',
                'SITE_KEYWORDS:string|200','SITE_AUTHOR:string|50','SITE_LOGO:string|max','GOOGLE_TAG:string|max','YANDEX_TAG:string|max','FOOTER_TEXT::string|200']
    },
    //PRODUCT LIST
    StockStatusUpdate : 
    {
        query : "UPDATE ITEMS SET STATUS = @STATUS WHERE GUID = @GUID",
        param : ['STATUS:int','GUID:string|150',]
    },
    UpdateProductDetail :
    {
        query : "UPDATE PRODUCT_DETAIL SET UNIT = @UNIT, DESCRIPTION = @DESCRIPTION WHERE PRODUCT_GUID = @PRODUCT_GUID ",
        param : ['UNIT:string|10','DESCRIPTION:string|250','PRODUCT_GUID:string|150']
    },
    UpdateProductQuantity :
    {
        query : "UPDATE PRODUCT_QUANTITY SET VALUE = @VALUE WHERE PRODUCT_GUID = @PRODUCT_GUID AND DEPOT_GUID = @DEPOT_GUID",
        param : ['VALUE:int','PRODUCT_GUID:string|150','DEPOT_GUID:string|150']
    },
    UpdateProductPrice :
    {
        query : "UPDATE PRODUCT_PRICE SET LDATE = GETDATE(), LUSER = @LUSER, PRICE = @PRICE WHERE PRODUCT_GUID = @PRODUCT_GUID AND TYPE = @TYPE",
        param : ['LUSER:string|100','PRICE:float','PRODUCT_GUID:string|150','TYPE:int']
    },
    UpdateImage :
    {
        query : "UPDATE PRODUCT_IMAGE SET LDATE = GETDATE(), LUSER = @LUSER, IMAGE = @IMAGE WHERE PRODUCT_GUID = @PRODUCT_GUID AND SORT = @SORT",
        param : ['LUSER:string|30','IMAGE:string|300','PRODUCT_GUID:string|300','SORT:int']
    },
    InsertImage : 
    {
        query : "INSERT INTO [dbo].[PRODUCT_IMAGE] " +
                "([CDATE] " +
                ",[LDATE] " +
                ",[CUSER] " +
                ",[LUSER] " +
                ",[PRODUCT_GUID] " +
                ",[LINK] " +
                ",[IMAGE] " +
                ",[SORT] " +
                ",[EXTENSION] " +
                ",[THUMBNAIL] " +
                ",[STATUS]) " +
                "VALUES " +
                "(GETDATE()          --<CUSER, nvarchar(25),>  \n " +
                ",GETDATE()          --<CDATE, datetime,>  \n " +
                ",@USER          --<LUSER, nvarchar(25),>  \n " +
                ",@USER          --<LDATE, datetime,>  \n " +
                ",@PRODUCT_GUID          --<ITEM_GUID, uniqueidentifier,>  \n " +
                ",@LINK          --<LINK, nvarchar(50),>  \n " +
                ",@IMAGE          --<IMAGE, nvarchar(max),>  \n " +
                ",@SORT          --<SORT, nvarchar(5),>  \n " +
                ",@EXTENSION         --<EXTENSION, nvarchar(10),>  \n " +
                ",@THUMBNAIL          --<THUMBNAIL, nvarchar(max),>  \n " +
                ",@STATUS          --<THUMBNAIL, nvarchar(max),>  \n " +
                " ) ",
        param : ['USER:string|30','PRODUCT_GUID:string|300','LINK:string|300','IMAGE:string|300','SORT:string|5','EXTENSION:string|50','THUMBNAIL:string|300','STATUS:string|5']
    },
    DeleteImage : 
    {
        query : "DELETE FROM PRODUCT_IMAGE WHERE PRODUCT_GUID = @PRODUCT_GUID AND SORT = @SORT",
        param : ['PRODUCT_GUID:string|300','SORT:string|5']
    },
    UpdateImagePath :
    {
        query : "UPDATE ITEM_IMAGE SET LDATE = GETDATE(), LINK = @LINK, EXTENSION = @EXTENSION ",
        param : ['LINK:string|50','EXTENSION:string|10']
    },
    //CATEGORY
    GetCategory : 
    {
        query : "SELECT " +
                "GUID AS GUID, " +
                "STATUS AS StateID, " +
                "STATUS AS STATUS, " +
                "CODE AS CODE, " +
                "PATH AS PATH, " +
                "ISNULL((SELECT TOP 1 VALUE FROM DATABASE_LANGUAGE WHERE CODE = C.CODE AND TAG = 'CATEGORY' AND LANG = @LANG),NAME) AS NAME, " +
                " ISNULL((SELECT STUFF((SELECT NAME + '-' FROM (SELECT ISNULL((SELECT TOP 1 NAME FROM CATEGORY WHERE CODE = VALUE),'') AS NAME FROM STRING_SPLIT(C.[PATH],'/')) AS TMP FOR XML PATH('')),1,0,'')),'') +'->' + NAME AS TREE_NAME, " +
                "UPPER AS UPPER, " +
                "SORT AS SORT, " +
                "CASE WHEN PATH = '' THEN CODE ELSE PATH + '/' + CODE END AS TREE " +
                "FROM CATEGORY AS C WHERE " +
                "((C.PATH = @PATH) OR (@PATH = '')) AND " + 
                "((C.CODE = @CODE) OR (@CODE = '')) AND " + 
                "((C.UPPER = @UPPER) OR (@UPPER = '-')) ORDER BY SORT" ,
        param : ['PATH:string|50','CODE:string|50','UPPER:string|50','LANG:string|25']
    },
    CategoryControl : 
    {
        query : "SELECT * FROM CATEGORY WHERE PATH LIKE '%' + @PATH + '%' ",
        param : ['PATH:string|25']
    },
    DeleteCategory :
    {
        query : "DELETE FROM CATEGORY WHERE GUID = @GUID ",
        param : ['GUID:string|50']
    },
    UpdateCategory : 
    {
        query : "UPDATE CATEGORY SET NAME = @NAME,SORT = @SORT,STATUS = @STATUS WHERE GUID = @GUID ",
        param : ['NAME:string|50','SORT:int','STATUS:int','GUID:string|50']
    },
    InsertCategory : 
    {
        query : "INSERT INTO [dbo].[CATEGORY] " +
                "([CUSER] " +
                ",[CDATE] " +
                ",[LUSER] " +
                ",[LDATE] " +
                ",[CODE] " +
                ",[NAME] " +
                ",[UPPER] " +
                ",[PATH] " +
                ",[SORT] " +
                ",[STATUS]) " +
                "VALUES " +
                "(@CUSER					    	--<CUSER, nvarchar(50),> \n " +
                ",GETDATE()					        --<CREATE_DATE, datetime,> \n " +
                ",@LUSER					    	--<LUSER, nvarchar(50),> \n " +
                ",GETDATE()					        --<UPDATE_DATE, datetime,> \n " +
                ",(SELECT REPLACE(STR(ISNULL(MAX(CONVERT(int,SUBSTRING(CODE,3,LEN(CODE)))),0) + 1, 4), SPACE(1), '0') AS MAXCATEGORY FROM CATEGORY) --<CODE, nvarchar(50),> \n " +
                ",@NAME					        	--<NAME, nvarchar(50),> \n " +
                ",@UPPER				        		--<UPPER, nvarchar(50),> \n " +
                ",@PATH				        		    --<PATH, nvarchar(50),> \n " +
                ",@SORT					        	--<SORT, int,> \n " +
                ",@STATUS					       	--<STATUS, int,> \n " +
                ")" ,
        param : ['CUSER:string|50','LUSER:string|50','NAME:string|50','UPPER:string|50','PATH:string|500','SORT:int','STATUS:int']
    },

    // CUSTOMER + PERSONEL
    GetUser : 
    {
        query : "SELECT * FROM [USER] WHERE ((TYPE = @TYPE) OR (@TYPE = '')) ORDER BY NAME ASC",
        param : ['TYPE:int']
    },
    //THEME
    GetSlider : 
    {
        query : "SELECT *, " +
                "CASE STATUS WHEN '1' THEN 'AKTİF' WHEN '0' THEN 'PASİF' END AS DURUM " +
                "FROM THEME_SLIDER WHERE ((STATUS = @STATUS) OR (@STATUS = -1)) ORDER BY [ORDER] ASC",
        param : ['STATUS:int']
    },
    UpdateSlider : 
    {
        query : "UPDATE THEME_SLIDER SET LUSER = @LUSER, LDATE = GETDATE(), NAME = @NAME, IMG = @IMG, " +
                "LINK = @LINK, LINK_TYPE = @LINK_TYPE, [ORDER] = @ORDER, STATUS = @STATUS WHERE GUID = @GUID ",
        param : ['LUSER:string|100','NAME:string|50','IMG:string|100','LINK:string|100','LINK_TYPE:string|25','ORDER:int','STATUS:int','GUID:string|150']
    },
    InsertSlider :
    {
        query : "INSERT INTO [dbo].[THEME_SLIDER] " +
                "([CDATE] " +
                ",[LDATE] " +
                ",[CUSER] " +
                ",[LUSER] " +
                ",[NAME] " +
                ",[IMG] " +
                ",[LINK] " +
                ",[LINK_TYPE] " +
                ",[ORDER] " +
                ",[STATUS]) " +
                "VALUES " +
                "( " +
                "GETDATE()                              --<CUSER, nvarchar(100),>  \n " +
                ",GETDATE()                              --<CDATE, date,>  \n " +
                ",@CUSER                              --<LUSER, nvarchar(100),>  \n " +
                ",@LUSER                                --<LDATE, date,>  \n " +
                ",@NAME                              --<SLIDER_NAME, nvarchar(50),>  \n " +
                ",@IMG                              --<BG_IMG, nvarchar(100),>  \n " +
                ",@LINK                              --<BTN_LINK, nvarchar(100),>  \n " +
                ",@LINK_TYPE                              --<BTN_LINK_TYPE, nvarchar(25),>  \n " +
                ",@ORDER                              --<ORDER, int,>  \n " +
                ",@STATUS                              --<STATUS, tinyint,>  \n " +
                ")",
        param : ['CUSER:string|100','LUSER:string|100','NAME:string|50','IMG:string|100','LINK:string|100','LINK_TYPE:string|25','ORDER:int','STATUS:int']
    },
    SliderStatusUpdate : 
    {
        query : "UPDATE THEME_SLIDER SET STATUS = @STATUS WHERE GUID = @GUID",
        param : ['STATUS:int','GUID:string|150']
    },
    DeleteSlider : 
    {
        query : "DELETE FROM THEME_SLIDER WHERE GUID = @GUID ",
        param : ['GUID:string|150']
    },
    GetBannerList : 
    {
        query :  "SELECT GUID AS GUID, BANNER_ID AS BANNER_ID, NAME AS NAME, HEAD AS HEAD, [DESC] AS [DESC], TYPE AS TYPE , " +
                 "   LINK AS LINK , LINK_TYPE AS LINK_TYPE , STATUS AS STATUS, " +
                 "   CASE STATUS WHEN '1' THEN 'AKTİF' WHEN '0' THEN 'PASİF' END AS DURUM,  " +
                 "   CASE TYPE WHEN '1' THEN 'SADECE RESIM' WHEN '0' THEN 'RESIM VE AÇIKLAMA' END AS TYPE_STRING  " +
                 "   FROM THEME_BANNER  WHERE ((STATUS = @STATUS) OR (@STATUS = -1)) AND ((TYPE = @TYPE) OR (@TYPE = -1)) " +
                 "   GROUP BY GUID,BANNER_ID,NAME,HEAD,[DESC],TYPE,LINK,LINK_TYPE,STATUS " ,
        param : ['STATUS:int','TYPE:int']
    },
    GetBanner : 
    {
        query : "SELECT *, CASE STATUS WHEN '1' THEN 'AKTİF' WHEN '0' THEN 'PASİF' END AS DURUM, " +
                "CASE TYPE WHEN '1' THEN 'SADECE RESIM' WHEN '0' THEN 'RESIM VE AÇIKLAMA' END AS TYPE_STRING " +
                "FROM THEME_BANNER WHERE ((STATUS = @STATUS) OR (@STATUS = -1)) AND ((TYPE = @TYPE) OR (@TYPE = -1)) AND LANG = @LANG",
        param : ['STATUS:int','TYPE:int','LANG:string|50']
    },
    UpdateBannerImage : 
    {
        query : "UPDATE THEME_BANNER SET IMG = @IMG WHERE BANNER_ID = @BANNER_ID AND LANG = @LANG ",
        param : ['IMG:string|100','BANNER_ID:string|150','LANG:string|50']
    },
    UpdateBanner : 
    {
        query : "UPDATE THEME_BANNER SET LUSER = @LUSER, LDATE = GETDATE(), NAME = @NAME, HEAD = @HEAD, [DESC] = @DESC, " +
                "TYPE = @TYPE, LINK = @LINK, LINK_TYPE = @LINK_TYPE, STATUS = @STATUS WHERE BANNER_ID = @BANNER_ID",
        param : ['LUSER:string|100','NAME:string|100','HEAD:string|50','DESC:string|150','TYPE:int',
                'LINK:string|100','LINK_TYPE:string|50','STATUS:int','BANNER_ID:string|150']
    },
    InsertBanner : 
    {
        query : "INSERT INTO [dbo].[THEME_BANNER] " +
                "([CDATE] " +
                ",[LDATE] " +
                ",[CUSER] " +
                ",[LUSER] " +
                ",[BANNER_ID] " +
                ",[NAME] " +
                ",[HEAD] " +
                ",[DESC] " +
                ",[TYPE] " +
                ",[IMG] " +
                ",[LINK] " +
                ",[LINK_TYPE] " +
                ",[LANG] " +
                ",[STATUS]) " +
                "VALUES " +
                "(GETDATE()                                   --<CUSER, nchar(10),> \n " +
                ",GETDATE()                                  --<CDATE, date,> \n " +
                ",@CUSER                                  --<LUSER, nvarchar(50),> \n " +
                ",''                                --<LDATE, date,> \n " +
                ",@BANNER_ID                                  --<BANNER_ID, unique(100),> \n " +
                ",@NAME                                  --<NAME, nvarchar(100),> \n " +
                ",@HEAD                                  --<HEAD, nvarchar(100),> \n " +
                ",@DESC                                  --<DESC, nvarchar(150),> \n " +
                ",@TYPE                                  --<TYPE, tinyint,> \n " +
                ",@IMG                                  --<BG, nvarchar(100),> \n " +
                ",@LINK                                  --<LINK, nvarchar(100),> \n " +
                ",@LINK_TYPE                                  --<LINK_TYPE, nvarchar(50),> \n " +
                ",@LANG                                  --<LANG, nvarchar(100),> \n " +
                ",@STATUS                                  --<STATUS, tinyint,> \n " +
                ")",
        param : ['CUSER:string|100','BANNER_ID:string|150','NAME:string|100','HEAD:string|50','DESC:string|150','TYPE:int',
                 'IMG:string|100','LINK:string|100','LINK_TYPE:string|50','LANG:string|50','STATUS:int']
    },
    BannerStatusUpdate : 
    {
        query : "UPDATE THEME_BANNER SET STATUS = @STATUS WHERE BANNER_ID = @BANNER_ID",
        param : ['STATUS:int','BANNER_ID:string|150']
    },
    DeleteBanner : 
    {
        query : "DELETE FROM THEME_BANNER WHERE GUID = @GUID ",
        param : ['GUID:string|150']
    },
    GetPages : 
    {
        query : "SELECT *, CASE STATUS WHEN '1' THEN 'AKTİF' WHEN '0' THEN 'PASİF' END AS DURUM FROM THEME_PAGE " +
                "WHERE ((STATUS = @STATUS) OR (@STATUS = -1)) AND ((TAG = @TAG) OR (@TAG = '')) ",
        param : ['STATUS:int','TAG:string|50']
    },
    UpdatePage : 
    {
        query : "UPDATE THEME_PAGE SET LUSER = @LUSER, TAG = @TAG, [NAME] = @NAME, HTML = @HTML, STATUS = @STATUS " +
                "WHERE GUID = @GUID ",
        param : ['LUSER:string|100','TAG:string|50','NAME:string|50','HTML:string|max','STATUS:int','GUID:string|150']
    },
    InsertPage : 
    {
        query : "INSERT INTO [dbo].[THEME_PAGE] " +
                "([CDATE] " +
                ",[LDATE] " +
                ",[CUSER] " +
                ",[LUSER] " +
                ",[TAG] " +
                ",[NAME] " +
                ",[HTML] " +
                ",[STATUS]) " +
                "VALUES ( " +
                "GETDATE()                         --<CDATE, nvarchar(50),> \n " +
                ",GETDATE()                      --<LDATE, date,> \n " +
                ",@CUSER                      --<CUSER, nvarchar(50),> \n " +
                ",@LUSER                      --<LUSER, date,> \n " +
                ",@TAG                          --<TAG, nvarchar(50),> \n " +
                ",@NAME                         --<NAME, nvarchar(50),> \n " +
                ",''                           --<HTML, nvarchar(max),> \n " +
                ",@STATUS                      --<STATUS, tinyint,>) \n " +
                " ) ",
        param : ['CUSER:string|100','LUSER:string|100','TAG:string|50','NAME:string|50','STATUS:int']
    },
    BannerPageUpdate : 
    {
        query : "UPDATE THEME_PAGE SET STATUS = @STATUS WHERE GUID = @GUID",
        param : ['STATUS:int','GUID:string|150']
    },
    DeletePage : 
    {
        query : "DELETE FROM THEME_PAGE WHERE GUID = @GUID ",
        param : ['GUID:string|150']
    },
    //LANGUAGE
    DataBaseLanuageControl : 
    {
        query : "SELECT VALUE FROM DATABASE_LANGUAGE WHERE TAG = @TAG AND LANG = @LANG AND CODE = @CODE",
        param : ['TAG:string|50','LANG:string|25','CODE:string|50']
    },
    DataBaseLanuageUpdate : 
    {
        query : "UPDATE DATABASE_LANGUAGE SET VALUE = @VALUE  WHERE TAG = @TAG AND LANG = @LANG AND CODE = @CODE",
        param : ['VALUE:string|50','TAG:string|50','LANG:string|25','CODE:string|50']
    },
    DataBaseLanuageInsert : 
    {
        query: " INSERT INTO [dbo].[DATABASE_LANGUAGE]  " +
               "  ([TAG] " +
               "  ,[LANG] " +
               "  ,[CODE] " +
               "  ,[VALUE]) " +
               "  VALUES " +
               "  (@TAG         --<TAG, nvarchar(50),> \n " +
               "  ,@LANG         --<LANG, nvarchar(50),> \n " +
               "  ,@CODE         --<CODE, nvarchar(50),> \n " +
               "  ,@VALUE         --<VALUE, nvarchar(50),> \n " +
               " ) ",
        param : ['VALUE:string|50','TAG:string|50','LANG:string|25','CODE:string|50']
    }
};


