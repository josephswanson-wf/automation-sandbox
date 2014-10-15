define({
    proxyPort: 9000,

	proxyUrl: 'http://localhost:9000/',

	environments: [
		{ browserName: 'chrome', platform: 'Windows 7' }
	],

	maxConcurrency: Infinity,

	tunnel: 'SauceLabsTunnel',

	loader: {
		packages: [ { name: 'app', location: 'app' } ]
	},

    excludeInstrumentation: /^(?:tests|node_modules)\//,

    suites: [ 'tests/unit/hello' ],

    reporters: [ 'runner', 'junit' ]
});
