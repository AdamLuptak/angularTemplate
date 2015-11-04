//controler for Login
	eshopApp.controller('FooterHeaderController',['$scope', '$routeParams','customersService','mySharedService',function($scope,$routeParams,customersService,mySharedService) {
		
		$scope.footerShow = 'true';
		$scope.headerVisibility = '';
		$scope.footerVisibility = function(){

			console.log("sdfsdfsddsdssd" + mySharedService.message);
			
			//
			 return mySharedService.message;
		};
   
		$scope.g = function(){
			console.log(mySharedService.message);
			return parseInt(mySharedService.message);
		};

		$scope.headerShow = function(){
			console.log("zobrazenie header "  + mySharedService.headerShow);
			$scope.headerVisibility = mySharedService.headerShow;
			return mySharedService.headerShow;
		}

		$scope.$on('handleBrodcast',function(){
		$scope.message = "Two: " +  mySharedService.message;
	});
}]);