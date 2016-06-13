import webpack from 'webpack'
import webpackConfig from './webpack.config'

webpack(webpackConfig, (err, stats) => {
	if(err) {
		process.stderr.write(err)
	} else {
		process.stdout.write(stats.toString({ colors: true }));
	}
});