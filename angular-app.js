// Create AngularJS module
angular.module('codecraftApp', ['ngMessages'])
    .controller('ContactController', function($scope) {
        $scope.formData = {};

        $scope.submitForm = function() {
            if ($scope.contactForm.$valid) {
                // Show success message
                alert(`Thank you ${$scope.formData.fullname}! Your application has been received. We'll contact you at ${$scope.formData.email} and ${$scope.formData.phone} shortly.`);

                // Reset form
                $scope.formData = {};
                $scope.contactForm.$setPristine();
                $scope.contactForm.$setUntouched();
            }
        };
    });