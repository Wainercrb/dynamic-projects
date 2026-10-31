describe('AngularJS: controlador y binding reales', function () {
  var scope, element;
  beforeEach(function () {
    var injector = angular.injector(['ng', 'legacyDemo']);
    scope = injector.get('$rootScope').$new();
    var controller = injector.get('$controller')('GreetingController');
    scope.vm = controller;
    element = injector.get('$compile')('<div><input ng-model="vm.name"><p>{{vm.name}}</p><li ng-repeat="t in vm.topics">{{t}}</li></div>')(scope);
    scope.$digest();
  });
  afterEach(function () { scope.$destroy(); });
  it('renderiza el controlador y la colección', function () {
    expect(element.find('p').text()).toBe('Ada');
    expect(element.find('li').length).toBe(3);
  });
  it('propaga el cambio del input a la vista', function () {
    element.find('input').val('Ana').triggerHandler('input');
    scope.$digest();
    expect(scope.vm.name).toBe('Ana');
    expect(element.find('p').text()).toBe('Ana');
  });
});
