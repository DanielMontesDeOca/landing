/* global moment:false */
(function() {
  'use strict';

  angular
    .module('agavelab')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.date = moment()
                .add(2, 'days')
                .add(3, 'hours')
                .add(6, 'minutes')
                .add(54, 'seconds');
  }
})();
