describe('AngularJS con Protractor (histórico)', function () {
  it('sincroniza ng-model y la interpolación', async function () {
    await browser.get('/examples/angularjs/index.html');
    const name = element(by.model('vm.name'));
    await name.clear();
    await name.sendKeys('Protractor');
    expect(await element(by.id('greeting')).getText()).toBe('Hola, Protractor');
    expect(await element.all(by.repeater('topic in vm.topics')).count()).toBe(3);
  });
});
