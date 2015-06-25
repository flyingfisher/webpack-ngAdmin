var webpack = require("webpack");
var NgAnnotatePlugin = require('ng-annotate-webpack-plugin');
module.exports = {	
	plugins: [
		new webpack.dependencies.LabeledModulesPlugin(),
		new NgAnnotatePlugin({
            add: true,
            // other ng-annotate options here
        }),
		new webpack.optimize.UglifyJsPlugin({
		    compress: {
		        warnings: false
		    },
			test: /[^external]\.min\.js$/
		})
	],
	entry: {
		app:"./src/app.entry.js",
		external:"./src/external.entry.js"
	},
	output: {
		path: "./www",
        filename: "[name].min.js"
    },
	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
	},
	devtool: 'source-map',
	module: {
        loaders: [
            { test: /\.ts$/, loader: "typescript-loader" },
			{ test: /\.css$/, loader: "style!css" }
        ]
    }
};