/* global moment:false */
(function() {
  'use strict';

  angular
    .module('agavelab')
    .directive('countdown', countdown);

  /** @ngInject */
  function countdown() {
    var directive = {
      restrict: 'E',
      scope: {
        date: '='
      },
      transclude: true,
      templateUrl: '/app/components/countdown/countdown.html',
      controller: CountdownController,
      controllerAs: 'cd',
      replace: true
    };

    return directive;
  }

  function CountdownController($scope, $timeout) {
    var vm = this;

    vm.date = $scope.date;
    vm.days = [0, 0];
    vm.hours = [0, 0];
    vm.minutes = [0, 0];
    vm.seconds = [0, 0];
    interval();

    function interval() {
      return $timeout(function(){
        var diff = moment.duration(vm.date.diff(moment()));
        if(diff.asMilliseconds() > 0) {
          vm.days = getDigits(diff.days());
          vm.hours = getDigits(diff.hours());
          vm.minutes = getDigits(diff.minutes());
          vm.seconds = getDigits(diff.seconds());
          interval();
        }
      }, 1000);
    }
  }

  function getDigits(num) {
    if(num < 10) {
      return [0, num];
    } else {
      var digits = ('' + num).split('');
      return [parseInt(digits[0]), parseInt(digits[1])];
    }
  }

})();
