(function(){
  'use script';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
  function RoutesConfig($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home',{
      url:'/',
      templateUrl:'home.html'
    })
    .state('mainList',{
      url:'/categories',
      templateUrl:'src/categories.html',
      controller:'CategoriesController as mainList',
      resolve:{
        items:['MenuDataService',function(MenuDataService){
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('itemDetail',{
        url:'/itemDetail/{itemId}',
        templateUrl:'src/items.html',
        controller:'ItemDetailController as itemDetail',
        resolve:{
              items:['$stateParams','MenuDataService',
                function($stateParams,MenuDataService){
                  return MenuDataService.getItemForCategory($stateParams.itemId)
                    .then(function(items){
                    return items;
                  })
        }]
      }
    })
  }
})();
