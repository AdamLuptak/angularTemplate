//controler for Login
eshopApp.controller('OrdersController',['$scope', '$routeParams','customersService','mySharedService',function($scope,$routeParams,customersService,mySharedService) {
	$scope.navBarChosser = $routeParams.navBarChosser;

	mySharedService.preForBrodcast('1','2','2', $scope.navBarChosser);

	$scope.customers = customersService.getCustomers();
	
	console.log($scope.customers);
}]);