
app.controller("ItemListCtrl", ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.items = [];

    let getItems = function () {
        $http.get('/api/todo')
            .then(function (res) {
                $scope.items = res.data;
            });
    }
    getItems();

    $scope.deleteItem = function (itemId) {
        $http.post(`/api/delete/${itemId}`)
            .then(function (res) {
                getItems();
            });
    };

    $scope.inputChange = function (itemId) {
        $http.put(`/api/editstatus/${itemId}`)
           .then(function (res) {
               getItems();
           });
    };

    $scope.loadItem = function (itemId) {
        $location.url("/items/view/" + itemId);
    }
}]);
