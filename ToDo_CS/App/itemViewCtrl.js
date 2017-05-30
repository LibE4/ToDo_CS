
app.controller("ItemViewCtrl", ["$scope", "$routeParams", "$http", "$location", function ($scope, $routeParams, $http, $location) {
    $scope.selectedItem = {};
    let itemId = $routeParams.id;
    $http.get(`/api/todo/${itemId}`)
        .then(function (oneItem) {
            $scope.selectedItem = oneItem.data;
        });

    $scope.editItem = function (itemId) {
        $location.url("/items/edit/" + itemId);
    }
}]);