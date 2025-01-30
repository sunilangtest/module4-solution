(function(){
  'use strict';

  angular.module('MenuApp')
  .component('itemList',{
    templateUrl:'src/itemList.html',
    bindings:{
      items:'<'
    }
  });
})();
