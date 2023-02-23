const { resolve } = require("path");
require("dotenv").config();
const Dotenv = require("dotenv-webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  plugins: [
    new Dotenv(),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "esbuild-loader",
        include: [resolve(__dirname, "src")],
        exclude: /node_modules/,
        options: {
          loader: "tsx",
          target: "es2015",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: resolve(__dirname, "src/assets"),
        type: "asset/resource",
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
