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
		table: "ITEM_PRICE",
		control:	
		{
			query : "SELECT * FROM ITEM_PRICE " +
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
]