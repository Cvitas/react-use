const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const precss = require("precss");
const baseConfig = require("./webpack.base.js");
const config = require("./config.js");
const vendor = config.vendor;
const util = require("./util");

module.exports = function(env){
	return webpackMerge(baseConfig(env),{
        mode:"production",
		entry:{
			vendor
		},
		plugins:[
			new HTMLWebpackPlugin({
                template: util.resolve("template/index.html"),
			}),
            new webpack.optimize.SplitChunksPlugin({
                cacheGroups: {
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true,
                    },
                    //打包重复出现的代码
                    vendor: {
                        chunks: 'initial',
                        minChunks: 2,
                        maxInitialRequests: 5, // The default limit is too small to showcase the effect
                        minSize: 0, // This is example is too small to create commons chunks
                        name: 'vendor'
                    },
                    //打包第三方类库
                    commons: {
                        name: "commons",
                        chunks: "initial",
                        minChunks: Infinity
                    }
                }
            }),
            new webpack.optimize.RuntimeChunkPlugin({
                name: "manifest"
            }),
			new webpack.LoaderOptionsPlugin({
				options:{
					postcss(){
						return[precss, autoprefixer];
					},
				}
			})
		]
	})
}