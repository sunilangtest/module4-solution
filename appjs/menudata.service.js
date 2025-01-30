(function(){
'use script';
angular.module('MenuApp')
.service('MenuDataService',MenuDataService)
.constant('ApiBasePath',"https://coursera-jhu-default-rtdb.firebaseio.com");

MenuDataService.$inject=['$http','ApiBasePath']
function MenuDataService($http,ApiBasePath){
var service=this;
service.getAllCategories=function(){
  return $http.get(ApiBasePath+'/categories.json').then(function(response){
    return response.data;
  });
}

service.getItemForCategory=function(categoryShortName){
  var item_api_path=ApiBasePath+"/menu_items/"+categoryShortName+".json";
  return $http.get(item_api_path).then(function(response){
    return response.data.menu_items;
  });
}
}

})();
