
var app = angular.module("TodoApp", ["ngRoute"]);

var isAuth = ($rootScope) => new Promise((resolve, reject) => {
    if ($rootScope.user ? true : false) {
        resolve();
    } else {
        reject();
    }
})

app.config(function ($routeProvider) {
    $routeProvider
		.when('/auth', {
		    templateUrl: 'App/partials/auth.html',
		    controller: 'AuthCtrl'
		})
		.when('/items/list', {
		    templateUrl: 'App/partials/item-list.html',
		    controller: 'ItemListCtrl',
		    resolve: { isAuth }
		})
		.when('/items/new', {
		    templateUrl: 'App/partials/item-new.html',
		    controller: 'ItemNewCtrl',
		    resolve: { isAuth }
		})
		.when('/items/view/:id', {
		    templateUrl: 'App/partials/item-view.html',
		    controller: 'ItemViewCtrl',
		    resolve: { isAuth }
		})
		.when('/items/edit/:id', {
		    templateUrl: 'App/partials/item-new.html',
		    controller: 'ItemEditCtrl',
		    resolve: { isAuth }
		})
		.when('/logout', {
		    templateUrl: 'App/partials/auth.html',
		    controller: 'AuthCtrl'
		})
		.otherwise('/auth');
});