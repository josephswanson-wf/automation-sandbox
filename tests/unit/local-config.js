define({
	environments: [
		{ browserName: 'chrome' }
	],

	maxConcurrency: Infinity,

	loader: {
		packages: [ { name: 'app', location: 'app' } ]
	},

    excludeInstrumentation: /^(?:tests|node_modules)\//,

    suites: [ 'tests/unit/hello' ],

    reporters: [ 'console', 'junit' ]
});
