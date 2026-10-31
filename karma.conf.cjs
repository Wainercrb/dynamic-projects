module.exports = function(config) {
 config.set({frameworks:['jasmine'],files:['node_modules/angular/angular.js','legacy/angularjs/app.js','tests/legacy/angularjs.spec.js'],browsers:['ChromiumHeadlessCI'],customLaunchers:{ChromiumHeadlessCI:{base:'ChromeHeadless',flags:['--no-sandbox','--disable-dev-shm-usage']}},singleRun:true,reporters:['progress'],client:{jasmine:{random:false}}});
};
