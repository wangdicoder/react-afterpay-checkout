const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, '../src/index.js'),
	output: {
		filename: 'bundle.[hash].js',
		path: path.resolve(__dirname, '../build'),
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, '../public/index.html'),
			inject: true,
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
	devtool: 'source-map',
	devServer: {
		host: 'localhost',
		port: 3000,
		historyApiFallback: true,
		overlay: {
			errors: true,
		},
		inline: true,
		hot: true,
	},
}
