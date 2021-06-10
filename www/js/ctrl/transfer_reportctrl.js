function transfer_reportctrl($scope,$rootScope,$window,srv,$route)
{
    function ReportGrid()
    {
        $("#TblReport").dxDataGrid
        ({
            dataSource: $scope.ReportGrid,
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
    async function ReportGet()
    {   
        return new Promise(async resolve => 
        {
            let TmpQuery = 
            {
                db: $scope.Source,
                query : "SELECT * FROM TRANSFER_LOG WHERE CDATE >= @FIRSTDATE AND CDATE <= @LASTDATE ",
                param : ['FIRSTDATE:date','LASTDATE:date'],
                value : [moment(document.getElementById("FirstDate").value).format("DD.MM.YYYY"),moment(document.getElementById("LastDate").value).format("DD.MM.YYYY")]
            }
            $scope.ReportGrid = await srv.ExecuteDBT(TmpQuery)
            $("#TblReport").dxDataGrid("instance").option("dataSource", $scope.ReportGrid);
            resolve();
        });
    }
    $scope.New = async function()
    {
        ReportGrid();

        $scope.Source =
        {
            "server": '192.168.100.12',
            "user": 'nitrogen',
            "database" : "NITROGENPOS",
            "password": 'lp8462+',
            "table": 'TRANSFER_LOG',
        };

        document.getElementById("FirstDate").value = "";
        document.getElementById("LastDate").value = "";
        $scope.ReportGrid = [];
        $scope.SourceDatabaseList = [];
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
    }
    $scope.BtnShow = async function()
    {
        if(document.getElementById("FirstDate").value == '' || document.getElementById("LastDate").value == '')
        {
            srv.Alert('Rapor Görüntüleme Başarısız','Lütfen Tarih Kriterini Giriniz.','warning');
            return;
        }
        await ReportGet();
    }
}