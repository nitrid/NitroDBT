function main($scope,$rootScope,$window,srv,$route)
{
    $scope.New = async function()
    {
        let ConStatus = await srv.Connection();

        let HtmlText = "";

        for (let i = 0; i < window.transfer.length; i++) 
        {
            HtmlText = HtmlText + "<a  href = '#!special_transfer?index=" + window.transfer.indexOf(window.transfer[i]) + "' data-toggle='collapse'>";
            HtmlText = HtmlText + "<i class='mdi mdi-briefcase-check-outline'></i>";
            HtmlText = HtmlText + "<span>" + window.transfer[i].title + "</span>";
            HtmlText = HtmlText + "</a>"
        }

        $("#menu").html(HtmlText);   
    }
}