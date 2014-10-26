/**
 * Controllers
 */

app.controller('LayoutController', function ($scope, $rootScope) {
  $rootScope.projects = [
    {
      title : "Permit parking signs installation",
      tokens: 2,
      options: ['yes', 'no']
    }, {
      title : "Newark mayor election",
      tokens: 1,
      options: ['Gonzalez', 'Baraka', 'Alan']
    }, {
      title : "Best boss in ACME Corp.",
      tokens: 1,
      options: ['J. Brown', 'F. Gris', 'S. Amarillo']
    }, {
      title : "Feedly.com: our software team should include friend suggestions",
      tokens: 3,
      options: ['Yep', 'Naah', 'Dunno']
    }, {
      title : "Parent-teacher association – budget distribution",
      tokens: 2,
      options: ['Option 1', 'Option 2']
    }
  ];
});

app.controller('TokensController', function ($scope, $rootScope) {
  $scope.projects = $rootScope.projects;
});

app.controller('ProjectDetailsController',

  function ($scope, $stateParams, $rootScope, $ionicLoading, $timeout) {

    $timeout(function () {

      $scope.project = $rootScope.projects[parseInt($stateParams.id)];


      $scope.dec = function () {
        $scope.project.tokens--;
      }

      $scope.inc = function () {
        $scope.project.tokens++;
      }

      $scope.vote = function () {
        $ionicLoading.show({
          template: "Sending your vote via Bitcoin..."
        });

        $timeout(function () {
          $ionicLoading.hide();
          $scope.sent = true;
          $scope.project.tokens = 0;
        }, 3333)
      }


    }, 1000)
});