const webpack = require("webpack")
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require("./webpack.base.js");
const config = require("./config");
const util = require("./util");
const port = config.port;

module.exports = function(env){
	console.log(`
#################################################
  Server is listening at: http://localhost:${port} 
#################################################
	`);
	return webpackMerge(baseConfig(env),{
	    mode:"development",
		plugins:[
            new HtmlWebpackPlugin({
                title: 'index',
                template: util.resolve("template/index.html"),
                filename: 'index.html',
                hash: true,
                inject: true
            }),
            new webpack.HashedModuleIdsPlugin()
		],
        optimization: {
            splitChunks: {
                // Must be specified for HtmlWebpackPlugin to work correctly.
                // See: https://github.com/jantimon/html-webpack-plugin/issues/882
                chunks: `all`,
            },
        },
        devServer:{
			hot:false,
			host:"10.5.225.244",
			port:port,
			publicPath:config.publicPath,
            proxy: [{ // proxy URLs to backend development server
                context: ["/rms"],
                target: "http://10.5.225.244:8080",
            }],
            historyApiFallback:true
		},
        devtool: "source-map"
    })
}