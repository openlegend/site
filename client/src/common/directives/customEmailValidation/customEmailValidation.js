import angular from 'angular';

const customEmailValidationDirective = angular.module('customEmailValidation.js', []);

customEmailValidationDirective.directive('customEmailValidation', function() {
  const EMAIL_REGEXP = /[^\s@]+@[^\s@]+\.[^\s@]+/;

  return {
    require: 'ngModel',
    restrict: '',
    link: function(scope, elm, attrs, ctrl) {
      // only apply the validator if ngModel is present and Angular has added the email validator
      if (ctrl && ctrl.$validators.email) {

        // this will overwrite the default Angular email validator
        ctrl.$validators.email = function(modelValue) {
          return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
        };
      }
    }
  };
});

export default customEmailValidationDirective;
