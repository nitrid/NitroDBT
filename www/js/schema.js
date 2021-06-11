var Schema =
[
	{
		table: "ITEMS",
		control:	
		{
			query : "SELECT * FROM ITEMS " +
					"WHERE " +
					"CODE = @CODE " ,
			param : ['CODE:string|25']
	 	},
		update:	
		{
			query : "UPDATE ITEMS SET NAME = @NAME,SNAME = @SNAME, ITEM_GRP = @ITEM_GRP, TYPE = @TYPE WHERE CODE = @CODE ",
			param : ['NAME:string|25','SNAME:string|25','ITEM_GRP:string|25','TYPE:int','CODE:string|25']
	 	},
		insert:	
		{
			query : "INSERT INTO [dbo].[ITEMS] " +
					"([CUSER] " +
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
					")VALUES( " +
					"'Admin'							--<CUSER, nvarchar(25),> \n " +
					",GETDATE()							--<CDATE, datetime,> \n " +
					",'Admin'							--<LUSER, nvarchar(25),> \n " +
					",GETDATE()							--<LDATE, datetime,> \n " +
					",@CODE								--<CODE, nvarchar(25),> \n " +
					",@NAME								--<NAME, nvarchar(250),> \n " +
					",@SNAME							--<SNAME, nvarchar(250),> \n " +
					",@ITEM_GRP							--<ITEM_GRP, nvarchar(25),> \n " +
					",@TYPE								--<TYPE, int,> \n " +
					",@VAT								--<VAT, float,> \n " +
					",0									--<COST_PRICE, float,> \n " +
					",0									--<MIN_PRICE, float,> \n " +
					",0									--<MAX_PRICE, float,> \n " +
					",1									--<STATUS, bit,> \n " +
					",0									--<PLU, bit,> \n " +
					",0									--<WEIGHING, bit,> \n " +
					")",
			param : ['CODE:string|25','NAME:string|250','SNAME:string|250','ITEM_GRP:string|25','TYPE:int','VAT:float']
	 	},
	},
	{
		table: "ITEM_BARCODE",
		control :
		{
			query: "SELECT * FROM ITEM_BARCODE WHERE BARCODE = @BARCODE ",
			param:['BARCODE:string|25']
		},
		update:	
		{
			query: "UPDATE ITEM_BARCODE SET " +
					"UNIT = @UNIT, " +
					"TYPE = @TYPE, " +
					"LDATE = GETDATE() " + 
					"WHERE BARCODE = @BARCODE ",
			param : ['UNIT:int','TYPE:int','BARCODE:string|25']
	 	},
		insert:	
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
	},
	{
		table: "ITEM_PRICE",
		control :    
		{
			query: "SELECT PRICE FROM ITEM_PRICE WHERE ITEM_CODE = @ITEM_CODE AND DEPOT = @DEPOT",
			param:['ITEM_CODE:string|25','DEPOT:string|25']
		},
		update:	
		{
			query : "UPDATE ITEM_PRICE SET PRICE = @PRICE,LDATE = GETDATE() WHERE ITEM_CODE = @ITEM_CODE AND DEPOT = @DEPOT ",
			param : ['PRICE:float','ITEM_CODE:string|25','DEPOT:string|25']
	 	},
		insert:	
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
					",'1969-12-31'	    --<START_DATE, datetime,> \n " +
					",'1969-12-31'	    --<FINISH_DATE, datetime,> \n " +
					",@PRICE			--<PRICE, float,> \n " +
					",@QUANTITY		    --<QUANTITY, float,> \n " +
					",@CUSTOMER		    --<CUSTOMER, nvarchar(25),> \n " +
					")",
        param : ['CUSER:string|25','LUSER:string|25','ITEM_CODE:string|25','TYPE:int','DEPOT:string|25','PRICE:float','QUANTITY:float','CUSTOMER:string|25']
	 	},
	},
	{
		table: "ITEM_TAX",
		control :    
		{
			query: "SELECT * FROM ITEM_TAX WHERE ITEM_CODE = @ITEM_CODE",
			param:['ITEM_CODE:string|25']
		},
		update:	
		{
			query: "UPDATE ITEM_TAX SET " +
					"WHOLEPNTR = @WHOLEPNTR, " +
					"RETAILPNTR = @RETAILPNTR, " +
					"VAT = @VAT, " +
					"LDATE = GETDATE() " + 
					"WHERE ITEM_CODE = @ITEM_CODE",
			param : ['ITEM_CODE:string|25','WHOLEPNTR:int','RETAILPNTR:int','VAT:float']
	 	},
		insert:	
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
	},
	{
		table: "ITEM_UNIT",
		control :
		{
			query: "SELECT * WHERE ITEM_CODE = @ITEM_CODE AND CODE = @CODE",
			param:['ITEM_CODE:string|25','CODE:string|25']
		},
		update:	
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
		insert:	
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
	},
	{
		table: "PARAMS",
		control :    
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
		update:	
		{
			query: "UPDATE PARAMS SET " +
					"VALUE = @VALUE, " +
					"LDATE = GETDATE() " + 
					"WHERE ID = @ID AND NAME = @NAME",
			param : ['ID:string|25','VALUE:string|25','NAME:string|25']
	 	},
		insert:	
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
	},
	{
		table: "DEVICE",
		control :    
		{
			query : "SELECT * FROM DEVICE " ,
		},
		update:	
		{
			query: "UPDATE DEVICE SET NAME = @NAME, LDATE = GETDATE() WHERE ID = @ID ",
			param:['ID:string|25']
	 	},
		insert:	
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
	},
	{
		table: "POS_PLU",
		control :    
		{
			query: "SELECT * WHERE GRUP_INDEX = @GRUP_INDEX AND TYPE = @TYPE AND LOCATION = @LOCATION ",
			param:['GRUP_INDEX:int','TYPE:int','LOCATION:int']
		},
		update:	
		{
			query : "UPDATE POS_PLU SET NAME = @NAME , ITEMS_CODE = @ITEMS_CODE " +
					"WHERE LOCATION = @LOCATION AND TYPE = @TYPE AND GRUP_INDEX = @GRUP_INDEX ",
			param:['NAME:string|25','ITEMS_CODE:string|25','LOCATION:int','TYPE:int','GRUP_INDEX:int']	
	 	},
		insert:	
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
	},
	{
		table: "USERS",
		control :    
		{
			query: "SELECT * FROM USERS WHERE CODE = @CODE",
			param:['CODE:string|25']
		},
		update:	
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
		insert:	
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
	},
	{
		table: "DEPOT",
		control :    
		{
			query: "SELECT * FROM DEPOT WHERE CODE = @CODE",
			param:['CODE:string|25']
		},
		update:	
		{
			query: "UPDATE DEPOT SET NAME = @NAME,LDATE = GETDATE() WHERE CODE = @CODE " ,
			param : ['NAME:string|25','CODE:string|25']
	 	},
		insert:	
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
	},
]