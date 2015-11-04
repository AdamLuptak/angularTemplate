var test2 = 'tank';
var eshopApp = angular.module('eshop',['ngRoute','ngResource']);



//routes privider
eshopApp.config(function($routeProvider){

	$routeProvider
	.when('/',{

		templateUrl: 'view/login.html',
		controller: 'LoginController'
	})

	.when('/customers/:navBarChosser',{

		templateUrl: 'view/customers.html',
		controller: 'CustomersController'
	})

	.when('/customerOrders/:customerID',{

		templateUrl: 'view/customerOrders.html',
		controller: 'CustomerOrdersController'
	})

	.when('/orders/:navBarChosser',{

		templateUrl: 'view/orders.html',
		controller: 'OrdersController'
	})

});

eshopApp.factory('mySharedService', ['$rootScope', function($rootScope){
	var sharedService = {};

	sharedService.message = '';
	sharedService.headerShow = '';
	sharedService.footerShow = '';
	sharedService.navBarChosser = '';

	

	sharedService.preForBrodcast=function(msg, headerShow, footerShow, navBarChosser){
		this.message = msg;
		this.headerShow = headerShow;
		this.footerShow = footerShow;
		this.navBarChosser = navBarChosser;
		this.broadcastItem();
	};
	sharedService.broadcastItem = function(){
		$rootScope.$broadcast('handleBrodcast');
	}
	return sharedService;
}]);

eshopApp.controller('ControllerOne', ['$scope','mySharedService', function($scope,mySharedService){
	$scope.handleClick =function(msg){
		console.log("esd");

		mySharedService.preForBrodcast(msg);
	}
	$scope.$on('handleBrodcast',function(){
		$scope.message = mySharedService.message;
	});
}]);

eshopApp.controller('ControllerTwo', ['$scope','mySharedService', function($scope,mySharedService){
	$scope.$on('handleBrodcast',function(){
		$scope.message = "Two: " +  mySharedService.message;
	});
}]);

eshopApp.controller('ControllerThree', ['$scope','mySharedService', function($scope,mySharedService){
	$scope.$on('handleBrodcast',function(){
		$scope.message = "Three: " + mySharedService.message;
	});
}]);

