
const reporter = require('cucumber-html-reporter');

const cucumberReporterOptions = {
  jsonFile: 'cucumber_report.json',
  output: 'cucumber_report.html',
  reportSuiteAsScenarios: true,
  theme: "bootstrap",
  launchReport: true,
  metadata: {
    "App Version": "0.0.1",
    "Test Environment": "Testing",
    "Browser": "Chrome 72.0.3626.81",
    "Platform": "Ubuntu",
    "Parallel": "Scenarios",
    "Executed": "Local"
  }
}; //configuration of report cucumber html


exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    'src/features/*.feature'
    // 'src/specs/g1.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'https://g1.globo.com',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () { }
  },
  // framework: 'jasmine',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    browser.manage().window().maximize();
  },
  cucumberOpts: {
    require:
      'src/steps/*.step.ts',
    tags: ['@Test'],
    //strict: true,
    format: ['json:cucumber_report.json'],
    //dryRun: false,
    //compiler: []
  },

};