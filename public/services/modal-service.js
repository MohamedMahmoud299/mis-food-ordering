'use strict';
angular.module('FoodApp')
  .factory('ModalService', function($uibModal) {
    var _ModalSrv = {
      open: function(options){
        var modalOptions = {
          templateUrl: options.templateUrl,
          controller: options.controller,
          scope: options.scope,
          resolve: {
            parentScope: function() {
              return options.parentScope;
            },
            params: function(){
              return options.params;
            }
          },
          backdrop: options.backdrop  || false /*'static' */
        };
        if(options.size){
          modalOptions.size = options.size;
        }
        var modalInstance = $uibModal.open(modalOptions);
        return modalInstance;
      }
    };

    return _ModalSrv;
  });
