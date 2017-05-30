
app.controller("NavCtrl", ["$scope", "$rootScope", "$location", function ($scope, $rootScope, $location) {
    $scope.navItems = [
		{
		    name: "Logout",
		    url: "/logout"
		},
		{
		    name: "All Items",
		    url: "/items/list"
		},
		{
		    name: "New Item",
		    url: "/items/new"
		}
    ];

    $scope.loadPartials = function (link) {
        if (link == "/logout") {
            $rootScope.user = "";
        } 
        $location.url(link);
    }
}]);
