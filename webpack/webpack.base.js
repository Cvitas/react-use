const config = require("./config");
const util = require("./util");

module.exports = function(env){
    return{
        entry:{
            main:util.resolve("index.js"),
        },
        output: {
            path:util.resolve("dist"),
            sourceMapFilename: "[name].map",
            filename:(env === "dev")?"[name].js":"[name].[hash:16].js",
        },
        resolve: {
            extensions: [".js", ".json"],
            alias:{
                "@":util.resolve("")
            }
        },
        module:{
            rules: [
                {
                    test: /(\.jsx|\.js)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", {loader: "css-loader"}],
                },
                {
                    test: /\.scss$/,
                    include: /node_modules\/antd/,
                    use: [
                        'style-loader',
                        {loader: 'css-loader', options: {modules: false}},
                        'scss-loader'
                    ]
                },
                {
                    test: /\.scss$/,
                    exclude: /node_modules\/antd/,
                    use: [
                        'style-loader',
                        {loader: 'css-loader', options: {modules: true}},
                        'scss-loader'
                    ]
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    loader: 'url-loader',
                    options: {
                        limit: 1000,
                        name: 'assets/imgs/[name].[hash:8].[ext]'
                    }
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)$/i,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'assets/fonts/[name].[hash:8].[ext]'
                    }
                }
            ],
        },
    }
}