define({
    proxyPort: 9000,

	proxyUrl: 'http://localhost:9000/',

    capabilities: {
        'selenium-version': '2.43.1'
    },

	environments: [
        { deviceName: 'iPad Simulator', platformName: 'iOS', platformVersion: '7.1', browserName: 'safari' },
		{ browserName: 'chrome', platform: [ 'OS X 10.9', 'Windows 7' ] },
		{ browserName: 'internet explorer', version: [ '8', '9' ], platform: 'Windows 7' }
	],

	maxConcurrency: Infinity,

	tunnel: 'SauceLabsTunnel',

	loader: {
		packages: [ { name: 'app', location: 'app' } ]
	},

    excludeInstrumentation: /^(?:tests|node_modules)\//,

    functionalSuites: [ 'tests/functional/hello' ],

    reporters: [ 'runner', 'junit' ]
});
