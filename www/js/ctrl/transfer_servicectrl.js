function transfer_servicectrl($scope,$rootScope,$window,srv,$route)
{
    function InfoList()
    {
        for (let i = 0; i < $scope.ShopList.length; i++) 
        {
            for (let x = 0; x < $scope.Info.length; x++) 
            {
                if($scope.ShopList[i].name == $scope.Info[i])
                {
                    $scope.ShopList[i].status = "AKTİF";
                }
                else
                {
                    $scope.ShopList[i].status = "PASİF";
                }
            }
        }
        srv.SafeApply($scope,function()
        {
            $scope.ShopList = $scope.ShopList;
        });
    }
    $scope.New = async function()
    {
        $scope.ShopList = window.TransferList;
        $scope.Time = 1000;
        $scope.Info = [];

        $scope.Info = await srv.TransferStatus();
        InfoList();
    }
    $scope.BtnTransfer = async function(pType)
    {
        if(pType == 1)
        {
            for (let i = 0; i < $scope.Info.length; i++) 
            {
                if($scope.Info[i] == document.getElementById("ShopSelected").value)
                {
                    alert("Mevcut Aktarım Çalışır Durumda.");
                    return;
                }
            }
         
            $scope.Info = await srv.TransferService(pType,document.getElementById("ShopSelected").value,$scope.Time);
        }
        else if(pType == 2)
        {
            for (let i = 0; i < $scope.Info.length; i++) 
            {
                if($scope.Info[i] == document.getElementById("ShopSelected").value)
                {
                    $scope.Info = await srv.TransferService(pType,document.getElementById("ShopSelected").value,$scope.Time);
                }
            }
        }
        
        InfoList();
    }
}