const path = require("path");
const BUILD_PATH = path.join(__dirname, "/build");
const SRC_PATH = path.join(__dirname, "/src");
const APP_PATH = path.join(SRC_PATH, "/index.jsx");
const COMPONENTS_PATH = path.join(SRC_PATH, "/components");

console.log("APP_PATH", APP_PATH);
// plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// "webpack-dev-server/client?http://localhost:3000",
module.exports = {
  mode: "development",

  entry: {
    main: [APP_PATH]
  },

  output: {
    filename: "[name].js",
    path: BUILD_PATH
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: SRC_PATH,
        use: ["babel-loader"]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        include: SRC_PATH,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]"
              }
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: [".js", ".jsx", ".css", ".scss"],
    alias: {
      components: COMPONENTS_PATH
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Table-App",
      template: "public/index.html"
    }),

    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],

  devServer: {
    port: 3000,
    contentBase: BUILD_PATH
  }
};
