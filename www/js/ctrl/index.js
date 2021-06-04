function index($scope,$rootScope,$window,srv,$route)
{
    $scope.New = function()
    {
        $scope.User = "";
        $scope.Password = "";

        console.log(window)
    }
    $scope.BtnLogin = function()
    {
        if(srv.UserControl($scope.User,$scope.Password))
        {
            var url = "main.html";
            window.location.href = url;
        }
        else
        {
            srv.Alert('Giriş Başarısız!','Lütfen Giriş Bilgilerini Kontrol Edin !','error')
        }
    }
}