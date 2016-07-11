angular.module('pandoraApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('questionState', {
    url: '/',
    templateUrl: 'app/Question/question.html'
  });
});