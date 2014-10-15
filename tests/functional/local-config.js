define({
    capabilities: {
        'selenium-version': '2.43.1'
    },

	environments: [
		{ browserName: 'firefox' }
	],

	maxConcurrency: Infinity,

	loader: {
		packages: [ { name: 'app', location: 'app' } ]
	},

    excludeInstrumentation: /^(?:tests|node_modules)\//,

    functionalSuites: [ 'tests/functional/hello' ],

    reporters: [ 'runner', 'junit' ]
});
