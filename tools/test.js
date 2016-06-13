import { spawn } from 'child_process'


const specFiles = './src/**/*.spec.js';
const runnerSetupScript = './test/setup.js';
const args = process.argv.slice(2);

const mochaArgs = [
	specFiles,
	'--require', runnerSetupScript,
	'--compilers', 'js:babel-core/register',
	'--reporter', 'min',
	...args
];

spawn('mocha', mochaArgs, {stdio: 'inherit'});