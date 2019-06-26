const webpack = require('webpack');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
	entry: {
		app: './src/js/app.js'
	},
	output: {
		filename: '[name].js'
	},
	module: {
		rules: [{
    		test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: require.resolve("babel-loader"),
                query: {
                    presets: [
                        ["@babel/preset-env"]
                    ]
                }
            }
  		}]
	},
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		// new UglifyJSPlugin({
		// 	sourceMap: true
		// })
	]
};

module.exports = config;