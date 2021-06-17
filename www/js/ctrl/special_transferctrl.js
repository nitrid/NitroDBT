function special_transferctrl($scope,$rootScope,$window,srv,$route,$routeParams)
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
    async function GetSaveTransfer()
    {
        $scope.Source = JSON.parse(window.transfer[Object.values($routeParams)[0]].source);
        $scope.Target = JSON.parse(window.transfer[Object.values($routeParams)[0]].target);
        $scope.Query = window.transfer[Object.values($routeParams)[0]].query;
        $scope.TransferTitle = window.transfer[Object.values($routeParams)[0]].title;

        $scope.SourceDatabaseList = await srv.DBTDatabaseControl($scope.Source,{query : "SELECT * FROM sys.databases"});
        $scope.TargetDatabaseList = await srv.DBTDatabaseControl($scope.Target,{query : "SELECT * FROM sys.databases"});
        $scope.TargetTableList = await srv.DBTDatabaseControl($scope.Target,{query : "SELECT * FROM sys.tables "});

        for (let i = 0; i < $scope.SourceDatabaseList.length; i++) 
        {
            if($scope.SourceDatabaseList[i].name == $scope.Source.database)
            {
                srv.SafeApply($scope,function()
                {
                    $scope.Source.database = $scope.SourceDatabaseList[i].name;
                });
            }          
        }
        for (let i = 0; i < $scope.TargetDatabaseList.length; i++) 
        {
            if($scope.TargetDatabaseList[i].name == $scope.Target.database)
            {
                srv.SafeApply($scope,function()
                {
                    $scope.Target.database = $scope.TargetDatabaseList[i].name;
                });
            }          
        }
    }
    function Clear()
    {
        $scope.InsertInfo = [];
        $scope.UpdateInfo = [];
        $scope.InfoGrid = [];
    }
    $scope.New = async function()
    {
        InitGrid();
        InfoGrid();
        ErrorGrid();

        $scope.Source =
        {
            "server": "192.168.100.12",
            "user": "nitrogen",
            "password": "lp8462+",
            "database" : "",
            "table": "",
        };
        $scope.Target =
        {
            "server": "176.236.120.198",
            "user": "nitrogen",
            "password": "lp8462+",
            "database" : "",
            "table": "",
        };
        $scope.Query = "";
        $scope.TransferTitle = "Özel Aktarım";
        $scope.CreateTitle = "";
        $scope.ToplamSatir = 0;
        $scope.Progress = 0;
        $scope.Save = true;
        $scope.Delete = false;

        $scope.SourceDatabaseList = [];
        $scope.TargetDatabaseList = [];
        $scope.TargetTableList = [];
        $scope.RowData = [];
        $scope.GridData = [];
        $scope.SelectedData = [];
        $scope.InfoGrid = [];
        $scope.ErrorGrid = [];
        $scope.UpdateInfo = [];
        $scope.InsertInfo = [];

        if(Object.keys($routeParams).length > 0)
        {
            $scope.Save = false;
            $scope.Delete = true;
            GetSaveTransfer();
        }
    }
    $scope.BtnSourceDataBaseCheck = async function()
    {
        if($scope.Source.user == "" || $scope.Source.password == "")
        {
            srv.Alert('Bağlantı Başarısız','Kaynak Veritabanı Kullanıcı/Şifre Girişini Yapınız.','warning');
            return;
        }

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
        if($scope.Target.user == "" || $scope.Target.password == "")
        {
            srv.Alert('Bağlantı Başarısız','Kaynak Veritabanı Kullanıcı/Şifre Girişini Yapınız.','warning');
            return;
        }

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
        $scope.ToplamSatir = 0;
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
        if($scope.Source.database == '')
        {
            srv.Alert('Sorgu Çalıştırma Başarısız.','Lütfen Kaynak Veritabanı Seçimi Yapın.','warning');
            return;
        }
        if(typeof($scope.RowData) == 'undefined')
        {
            srv.Alert('Sorgu Çalıştırma Başarısız.','Lütfen Sorgunuzu Kontrol Edin','error');
            return;
        }

        let TmpQuery = 
        {
            db: $scope.Source,
            query : $scope.Query
        }

        $scope.RowData = await srv.ExecuteDBT(TmpQuery);

        $("#TblGrid").dxDataGrid("instance").option("dataSource", $scope.RowData);
        $('#MdlData').modal('show');
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
     
        for (let i = 0; i < window.Schema.length; i++) 
        {
            if(window.Schema[i].table == $scope.Target.table)
            {   
                if(Object.keys($scope.SelectedData[0]).length < window.Schema[i].insert.param.length)
                {
                    srv.Alert('Aktarım Başarısız.','Sorgunuzdaki Kolon Sayısı Aktarmak İstediğiniz Tablo İle Eşleşmiyor.','error');
                    return;
                }

                for (let x = 0; x < $scope.SelectedData.length; x++) 
                {
                    let datacontrol = "";

                    if((await DataControl(window.Schema[i],$scope.SelectedData[x])).length > 0)
                    {
                        datacontrol = await DataUpdate(window.Schema[i],$scope.SelectedData[x]);
                        if(typeof(datacontrol) !='undefined'){$scope.UpdateInfo.push(pData)}
                    }
                    else
                    {
                        datacontrol = await DataInsert(window.Schema[i],$scope.SelectedData[x]);
                        if(typeof(datacontrol) !='undefined'){$scope.InsertInfo.push(pData)}
                    }
                    if(typeof(datacontrol) !='undefined')
                    {
                        try 
                        {
                            await InfoInsert($scope.SelectedData[x]);
                        } 
                        catch (error) 
                        {
                            console.log(error)
                        }
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
                srv.Alert('Aktarım Tamamlandı',$scope.InsertInfo.length + ' Adet Yeni Kayıt. <br>' + $scope.UpdateInfo.length + ' Adet Güncelleme İşlemi. <br> Başarıyla Gerçekleştirildi.','success');
                Clear();
            }
        }
    }
    $scope.BtnSave = async function(pType)
    {
        if($scope.Query == "")
        {
            srv.Alert('Kaydetme İşlemi Başarısız.','Lütfen Aktarım Sorgusunu Girin.','warning');
            return;
        }
        if($scope.Target.database == "" || $scope.Source.database == "")
        {
            srv.Alert('Kaydetme İşlemi Başarısız.','Lütfen Kaynak Ve Hedef Database Seçimini Yapın.','warning');
            return;
        }
        if(pType == 0)
        {
            $('#MdlSave').modal('show');
        }
        else if(pType == 1)
        {
            if($scope.CreateTitle == "")
            {
                srv.Alert('Kaydetme İşlemi Başarısız.','Lütfen Aktarım Başlığını Girin.','warning');
                return;
            }

            let transferlist = window.transfer;

            let obj =
            {
                title : $scope.CreateTitle,
                source : JSON.stringify($scope.Source),
                target : JSON.stringify($scope.Target),
                query : $scope.Query
            }
            transferlist.push(obj);
            if(typeof(srv.Emit('TransferSave',[transferlist,"./www/js/transfersave.js"])  == 'undefined'))
            {
                var url = "main.html";
                window.location.href = url;
                event.preventDefault();
            }
        }
    }
    $scope.BtnDelete = function()
    {
        let transferlist = [];
        delete window.transfer[parseInt(Object.values($routeParams)[0])]

        for (let i = 0; i < window.transfer.length; i++) 
        {
            if(typeof(window.transfer[i]) != 'undefined')
            {
                transferlist.push(window.transfer[i]);
            }
        }

        if(typeof(srv.Emit('TransferSave',[transferlist,"./www/js/transfersave.js"])  == 'undefined'))
        {
            var url = "main.html";
            window.location.href = url;
            event.preventDefault();
        }
    }
    $scope.BtnErrorTransfer = async function()
    {
        $scope.SelectedData = $scope.ErrorGrid;
        $scope.ErrorGrid = [];
        $scope.BtnTransfer();
    }
}