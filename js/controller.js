app.controller("crickCtrl",function($scope,crickFactory){
	$scope.searchByPid= Function(){
		var playerId = $scope.playerId;
		var promise = crickFactory.serverCall(playerId);
		promise.then(function(data)){
								 $scope.result = data;
								 },function(error){
			$scope.error = error;
		
		}
	}
})