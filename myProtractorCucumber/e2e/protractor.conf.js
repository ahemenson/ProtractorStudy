exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    'src/features/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'https://pokedex-angularjs.herokuapp.com',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () { }
  },
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });

  },
  cucumberOpts: {
    require:
      'src/features/step_definitions/pokemon.step.js',
    tags: ['@Test'],
    strict: true,
    format: ['json:cucumber_report.json'],
    dryRun: false,
    compiler: []
  },

  afterLaunch: function () {
    var reporter = require('cucumber-html-reporter');

    var options = {
      theme: 'bootstrap',
      jsonFile: 'results.json',
      output: 'e2e/tests_result/cucumber_report.html',
      reportSuiteAsScenarios: true,
      launchReport: true
    };

    reporter.generate(options);
  },

};