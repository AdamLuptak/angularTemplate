var eshopApp = angular.module('eshop',['ngRoute','ngResource']);

//routes privider
eshopApp.config(function($routeProvider){

	$routeProvider
	.when('/',{

		templateUrl: 'view/login.html',
		controller: 'LoginController'
	})

	.when('/customers',{

		templateUrl: 'view/customers.html',
		controller: 'CustomersController'
	})

	.when('/customerOrders/:customerID',{

		templateUrl: 'view/customerOrders',
		controller: 'CustomerOrdersController'
	})

	.when('/customerOrders/orders',{

		templateUrl: 'view/orders.html',
		controller: 'OrdersController'
	})

});