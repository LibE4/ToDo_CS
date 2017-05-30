
app.controller("ItemEditCtrl", ["$scope", "$routeParams", "$http", "$location", function ($scope, $routeParams, $http, $location) {
    $scope.newTask = {};
    let itemId = $routeParams.id;
    $http.get(`/api/todo/${itemId}`)
        .then(function (oneItem) {
            $scope.newTask = oneItem.data;
        });

    $scope.addNewItem = function () {
        $scope.newTask.IsCompleted = false;
        $http.put('/api/editcontent', $scope.newTask)
            .then(function (res) {
                $location.url("/items/list");
                $scope.newTask = {};
            })
    };
}]);


