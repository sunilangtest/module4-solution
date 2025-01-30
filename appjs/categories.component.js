(function(){
  'use strict';

  angular.module('MenuApp')
  .component('categoryList',{
    templateUrl:'src/categoryitem.html',
    bindings:{
      items:'<'
    }
  });
})();
