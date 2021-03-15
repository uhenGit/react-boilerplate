const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SOURCE = path.resolve(__dirname, './client');

module.exports = {
	entry: {
		main: SOURCE + "/index.js",
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, 'public')
	},
	mode: "development",
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html"
		})
	],
	devServer: {
		contentBase: [path.join(__dirname, './public')],
		port: 3000,
		inline: true,
		historyApiFallback: true
	},
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
