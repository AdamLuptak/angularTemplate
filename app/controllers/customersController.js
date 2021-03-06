//controler for customerControler
    eshopApp.controller('CustomersController',['$scope', 'customersService','$routeParams', 'mySharedService',function($scope, customersService,$routeParams,mySharedService) {
   //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        $scope.customers = customersService.getCustomers();
    }

    $scope.navBarChosser = $routeParams.navBarChosser;
    
    

    mySharedService.preForBrodcast('1','1','1', $scope.navBarChosser);
    
    $scope.insertCustomer = function () {
        var firstName = $scope.newCustomer.firstName;
        var lastName = $scope.newCustomer.lastName;
        var city = $scope.newCustomer.city;
        customersService.insertCustomer(firstName, lastName, city);
        $scope.newCustomer.firstName = '';
        $scope.newCustomer.lastName = '';
        $scope.newCustomer.city = '';
    };

    $scope.deleteCustomer = function (id) {
        customersService.deleteCustomer(id);
    };

}]);