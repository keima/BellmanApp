'use strict';

angular.module('myApp',
    [
        'ngTouch',
        'onsen.directives',
        'myApp.service',
        'myApp.controller'
    ]
)
  .run(
  function($rootScope){
    $rootScope.appName = "マチ★アプリ";
  });
