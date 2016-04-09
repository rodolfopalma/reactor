const path = require("path");
const webpack = require("webpack");
const _ = require("lodash");

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
	build: path.join(__dirname, "app/build"),
	views: path.join(__dirname, "app/views")
};
const common = {
	entry: {
		app: path.join(PATHS.views, "/App.jsx")
	},
	resolve: {
		extensions: ["", ".js", ".jsx"]
	},
	output: {
		path: PATHS.build,
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.styl$/,
				loader: "style-loader!css-loader!stylus-loader"
			},
			{
				test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: "file-loader"
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.jsx?$/,
				loaders: ["babel?cacheDirectory"],
				include: PATHS.views
			}
		]
	}
};

if(TARGET === "start" || !TARGET) {
	module.exports = _.extend(common, {
		devServer: {
			contentBase: PATHS.build,
			historyApiFallback: true,
			hot: true,
			inline: true,
			progress: true,
			stats: "errors-only",
			port: process.env.PORT || 8080
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin()
		]
	});
} else {
	module.exports = common;
}
