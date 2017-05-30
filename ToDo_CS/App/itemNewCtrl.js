app.controller("ItemNewCtrl", ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.newTask = {};

    $scope.addNewItem = function () {
        $scope.newTask.IsCompleted = false;
        $http.post('/api/todo', $scope.newTask)
            .then(function (res) {
                $location.url("/items/list");
                $scope.newTask = {};
            })
    };
}]);
