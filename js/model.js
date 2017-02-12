app.factory("crickFactory",function($http,%1){
	var object = {
		serverCall:function(pidValue){
			$http.get(urls.crickPlayerURL+"pid="+pdiValue+"&apikey="+urls.apikey).then(function(data)){
																																								 pr.resolve(data);
																																								 },
		}
	}
})