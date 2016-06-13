import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server';

import config from './webpack.config';


const DEV_SERVER_ENTRY = 'webpack-dev-server/client?http://localhost:8080/';
const devServerConfig = {
	...config,
	entry: [DEV_SERVER_ENTRY, ...config.entry]
};

const compiler = webpack(devServerConfig);
const server = new WebpackDevServer(compiler, {});
server.listen(8080);