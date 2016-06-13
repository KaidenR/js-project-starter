var wallabyWebpack = require('wallaby-webpack');
var webpackConfig = require('./tools/webpack.config');
var wallabyPostprocessor = wallabyWebpack(webpackConfig);

module.exports = function (wallaby) {
	return {
		files: [
			{ pattern: 'node_modules/chai/chai.js', instrument: true },
			{ pattern: 'src/**/*.js', load: false },
			{ pattern: '!src/**/*.spec.js', load: false },
			{ pattern: '!src/index.js', load: false }
		],

		tests: [
			{ pattern: 'src/**/*spec.js', load: false }
		],

		compilers: {
			'test/setup.js': wallaby.compilers.babel(),
			'src/**/*.js': wallaby.compilers.babel()
		},

		postprocessor: wallabyPostprocessor,

		testFramework: 'mocha',

		setup: function () {
			window.expect = chai.expect;
			window.__moduleBundler.loadTests();
		},

		debug: true
	};
};