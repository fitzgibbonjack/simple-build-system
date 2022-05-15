const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackTagsPlugin = require("html-webpack-tags-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	mode: "production",
	entry: path.resolve(__dirname, "src/js/index.js"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.min.js",
		assetModuleFilename: "[name][ext]",
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "src/index.html",
		}),
		new HtmlWebpackTagsPlugin({ tags: ["main.min.css"] }),
		new CopyPlugin({
			patterns: [{ from: "src/assets", to: "assets", noErrorOnMissing: true }],
		}),
	],
};
