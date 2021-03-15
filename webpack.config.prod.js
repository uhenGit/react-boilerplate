const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const SOURCE = path.resolve(__dirname, './client');

module.exports = {
	entry: {
		main: SOURCE + "/index.js",
	},
	output: {
		filename: "bundle.[chunkhash].js",
		path: path.resolve(__dirname, 'dist'),
		publicPath:'/'
	},
	mode: "production",
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
		new CompressionPlugin(),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test:/\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/react", {
                                'plugins': ['@babel/plugin-proposal-class-properties']
                            }]
					}
				}
			},
			{
				test:/\.(css|scss)$/,
				use: ['style-loader', 'css-loader']
			}
		]
	}
};
