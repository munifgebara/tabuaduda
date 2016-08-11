var aplicativo=angular.module('tabuaduda', ['ionic']);

aplicativo.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('inicio', {
    url: '/inicio',
    templateUrl: 'templates/inicio.html',
    controller: 'InicioCtrl'
  });

  $stateProvider.state('teste', {
    url: '/teste',
    templateUrl: 'templates/teste.html',
    controller: 'TesteCtrl'
  });

  $stateProvider.state('tabuadas', {
    url: '/tabuadas',
    templateUrl: 'templates/tabuadas.html',
    controller: 'TabuadasCtrl'
  });

  $urlRouterProvider.otherwise('/inicio');
});

aplicativo.controller('InicioCtrl', function($scope,$state) {
   $scope.navega=function(estado){
     console.log(estado);
     $state.go(estado);

   }
});

aplicativo.controller('TesteCtrl', function($scope,$ionicPopup) {
  $scope.testes=[];
  for (i=0;i<10;i++){
    n=Math.floor(Math.random() * 9) + 1  ;
    m=Math.floor(Math.random() * 9) + 1
    $scope.testes.push({n:n,m:m,r:n*m});
  }
  $scope.responde = function(teste) {
    $scope.teste = teste

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      template: '<input type="number" ng-model="teste.u">',
      title: teste.n+' x '+teste.m,
      subTitle: 'Digite sua resposta',
      scope: $scope,
      buttons: [
        {
          text: '<b>Responder</b>',
          type: 'button-positive',
          onTap: function() {
      console.log('Resposta1 ', $scope.teste);
              return $scope.teste.u;
          }
        }
      ]
    });
    myPopup.then(function(res) {
      console.log(res)
      teste.u=res;
      console.log(res);
    });
  }
});
aplicativo.controller('TabuadasCtrl', function($scope) {
  $scope.valores=[1,2,3,4,5,6,7,8,9];


});



aplicativo.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
