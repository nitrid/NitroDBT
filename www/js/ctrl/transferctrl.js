function transferctrl($scope,$rootScope,$window,srv,$route)
{
    function InitGrid()
    {
        $("#TblGrid").dxDataGrid
        ({
            dataSource: $scope.RowData,
            columnMinWidth: 200,
            columnAutoWidth: true,
            showBorders: true,
            filterRow: 
            {
                visible: true,
                applyFilter: "auto"
            },
            headerFilter: 
            {
                visible: true
            },
            scrolling: 
            {
                columnRenderingMode: "horizontal"
            },
            selection: 
            {
                mode: "multiple"
            },
            onSelectionChanged: function (selectedItems) 
            {
                srv.SafeApply($scope,function()
                {
                    $scope.SelectedData = [];
                    $scope.ToplamSatir = 0;
                    $scope.SelectedData = selectedItems.selectedRowsData;
                    $scope.ToplamSatir = selectedItems.selectedRowsData.length;
                });
            }
        });
    }
    function InfoGrid()
    {
        $("#TblInfo").dxDataGrid
        ({
            dataSource: $scope.InfoGrid,
            columnMinWidth: 200,
            columnAutoWidth: true,
            showBorders: true,
            filterRow: 
            {
                visible: true,
                applyFilter: "auto"
            },
            headerFilter: 
            {
                visible: true
            },
            scrolling: 
            {
                columnRenderingMode: "horizontal"
            },
        });
    }
    function ErrorGrid()
    {
        $("#TblError").dxDataGrid
        ({
            dataSource: $scope.ErrorGrid,
            columnMinWidth: 200,
            columnAutoWidth: true,
            showBorders: true,
            filterRow: 
            {
                visible: true,
                applyFilter: "auto"
            },
            headerFilter: 
            {
                visible: true
            },
            scrolling: 
            {
                columnRenderingMode: "horizontal"
            },
        });
    }
    function ShemaKeys(pType,pShema,pData)
    {
        let value = [];
        let obj = {};

        if(pType == 'control')
            obj = pShema.control;
        else if(pType == 'update')
            obj = pShema.update;
        else if(pType == 'insert')
            obj = pShema.insert;

        for (let i = 0; i < obj.param.length; i++) 
        {            
            value.push(DataObject(pData,obj.param[i].split(":")[0]))
        }

        return(value);
    }
    function DataObject(pData,pKeys)
    {
        for (let i = 0; i < Object.keys(pData).length; i++) 
        {
            if(Object.keys(pData)[i] == pKeys)
            {
                return Object.values(pData)[i]
            }
        }
    }
    async function DataControl(pShema,pData)
    {
        return new Promise(async resolve => 
        {
            let TmpQuery = 
            {
                db: $scope.Target,
                query : pShema.control.query,
                param : pShema.control.param,
                value : ShemaKeys('control',pShema,pData)
            }
            resolve(await srv.ExecuteDBT(TmpQuery));
        });
    }
    async function DataInsert(pShema,pData)
    {
        return new Promise(async resolve => 
        {
            let TmpQuery = 
            {
                db: $scope.Target,
                query : pShema.insert.query,
                param : pShema.insert.param,
                value : ShemaKeys('insert',pShema,pData)
            }
            resolve(await srv.ExecuteDBT(TmpQuery));
        });
    }
    async function DataUpdate(pShema,pData)
    {
        return new Promise(async resolve => 
        {
            let TmpQuery = 
            {
                db: $scope.Target,
                query : pShema.update.query,
                param : pShema.update.param,
                value : ShemaKeys('update',pShema,pData)
            }
    
            resolve(await srv.ExecuteDBT(TmpQuery));
        });
    }
    async function InfoInsert(pData)
    {   
        $scope.InfoGrid.push(pData);

        return new Promise(async resolve => 
        {
            let TmpQuery = 
            {
                db: $scope.Source,
                query : "INSERT INTO [dbo].[TRANSFER_LOG] (CDATE,CUSER,STATUS,DATA) VALUES (GETDATE(),'NIROGENPOS','AKTARILDI',@DATA) ",
                param : ['DATA:string|max'],
                value : [JSON.stringify(pData)]
            }
            resolve(await srv.ExecuteDBT(TmpQuery));
        });
    }
    $scope.New = async function()
    {
        InitGrid();
        InfoGrid();
        ErrorGrid();

        $scope.Source =
        {
            "server": '192.168.100.12',
            "user": 'nitrogen',
            "database" : "",
            "password": 'lp8462+',
            "table": '',
        };
        $scope.Target =
        {
            "server": '176.236.120.198',
            "user": 'nitrogen',
            "database" : "NITROGENPOS",
            "password": 'lp8462+',
            "table": '',
        };
        $scope.ToplamSatir = 0;
        $scope.Progress = 0;
        $scope.SourceDatabaseList = [];
        $scope.TargetDatabaseList = [];
        $scope.SourceTableList = [];
        $scope.TargetTableList = [];
        $scope.RowData = [];
        $scope.GridData = [];
        $scope.SelectedData = [];
        $scope.InfoGrid = [];
        $scope.ErrorGrid = [];
    }
    $scope.BtnSourceDataBaseCheck = async function()
    {
        $scope.SourceDatabaseList = await srv.DBTDatabaseControl($scope.Source,{query : "SELECT * FROM sys.databases"});

        for (let i = 0; i < $scope.SourceDatabaseList.length; i++) 
        {
            if($scope.SourceDatabaseList[i].name == "NITROGENPOS")
            {
                srv.SafeApply($scope,function()
                {
                    $scope.Source.database = $scope.SourceDatabaseList[i].name;
                });
            }          
        }

        if($scope.SourceDatabaseList.length > 0)
        {
            srv.Alert('Bağlantı Başarılı','İşleminize Devam Edebilirsiniz','success');
        }
        $scope.CmbSourceDatabaseChange();
    }
    $scope.BtnTargetDataBaseCheck = async function()
    {
        $scope.TargetDatabaseList = await srv.DBTDatabaseControl($scope.Target,{query : "SELECT * FROM sys.databases"});

        for (let i = 0; i < $scope.TargetDatabaseList.length; i++) 
        {
            if($scope.TargetDatabaseList[i].name == "NITROGENPOS")
            {
                srv.SafeApply($scope,function()
                {
                    $scope.Target.database = $scope.TargetDatabaseList[i].name;
                });
            }          
        }

        if($scope.TargetDatabaseList.length > 0)
        {
            srv.Alert('Bağlantı Başarılı','İşleminize Devam Edebilirsiniz','success');
        }
        $scope.CmbTargetDatabaseChange();
    }
    $scope.CmbSourceDatabaseChange = async function()
    {
        $scope.SourceTableList = await srv.DBTDatabaseControl($scope.Source,{query : "SELECT * FROM sys.tables "});
        $scope.ToplamSatir = 0;
        srv.SafeApply($scope,function()
        {
            $scope.SourceTableList = $scope.SourceTableList;
            $scope.Source.table = $scope.SourceTableList[0].name;
        });
    }
    $scope.CmbTargetDatabaseChange = async function()
    {
        $scope.TargetTableList = await srv.DBTDatabaseControl($scope.Target,{query : "SELECT * FROM sys.tables "});

        srv.SafeApply($scope,function()
        {
            $scope.TargetTableList = $scope.TargetTableList;
            $scope.Target.table = $scope.TargetTableList[0].name;
        });
    }
    $scope.BtnSelectProduct = async function()
    {
        if($scope.Source.table == '')
        {
            srv.Alert('Transfer Başarısız','Kaynak Veritabanı Seçimi Yapınız.','warning');
            return;
        }
        $scope.RowData = await srv.DBTDatabaseControl($scope.Source,{query : "SELECT * FROM [" + $scope.Source.table + "]"});
        $("#TblGrid").dxDataGrid("instance").option("dataSource", $scope.RowData);
        $('#modal').modal('show');
    }
    $scope.BtnTransfer = async function()
    {
        if($scope.Target.table == '')
        {
            srv.Alert('Transfer Başarısız','Hedef Veritabanı Seçimi Yapınız.','warning');
            return;
        }
        if($scope.SelectedData.length < 1)
        {
            srv.Alert('Transfer Başarısız','Aktarılacak Satır Seçimi Yapınız.','warning');
            return;
        }
        if($scope.Source.table != $scope.Target.table)
        {
            srv.Alert('Transfer Başarısız','Kaynak Tablo İle Hedef Tablo Aynı Olmalı.','warning');
            return;
        }
        
        for (let i = 0; i < window.Schema.length; i++) 
        {
            if(window.Schema[i].table == $scope.Target.table)
            {   
                for (let x = 0; x < $scope.SelectedData.length; x++) 
                {
                    let datacontrol = "";
                    if((await DataControl(window.Schema[i],$scope.SelectedData[x])).length > 0)
                    {
                        datacontrol = await DataUpdate(window.Schema[i],$scope.SelectedData[x]);
                    }
                    else
                    {
                        datacontrol = await DataInsert(window.Schema[i],$scope.SelectedData[x]);
                    }
                    if(typeof(datacontrol) !='undefined')
                    {
                        await InfoInsert($scope.SelectedData[x]);
                    }
                    else
                    {
                        $scope.ErrorGrid.push($scope.SelectedData[x]);
                    }
                    
                    let TmpPercent = (((x+1) / $scope.SelectedData.length) * 100).toFixed(2);

                    $('#PrBar').text(TmpPercent + '%')
                    $('#PrBar').width(TmpPercent + '%')
                }
                
                $("#TblInfo").dxDataGrid("instance").option("dataSource", $scope.InfoGrid);
                $("#TblError").dxDataGrid("instance").option("dataSource", $scope.ErrorGrid);
                srv.Alert('Aktarım Tamamlandı','Aktarım İşlemi Tamamlandı','success');
            }
        }
    }
}