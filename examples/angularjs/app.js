/* AngularJS se ejecuta únicamente en su página independiente. */
angular.module('legacyDemo', []).controller('GreetingController', function () {
  this.name = 'Ada';
  this.visible = true;
  this.topics = ['Controlador', 'ng-model', 'ng-repeat'];
});
