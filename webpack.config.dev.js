import { merge } from "webpack-merge";
import commonConfig from "./webpack.config.common.js";
import ESLintWebpackPlugin from "eslint-webpack-plugin";

export default merge(commonConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
    hot: true,
    open: true,
  },
  plugins: [
    new ESLintWebpackPlugin({
      extensions: ["js"],
      emitWarning: true,
      failOnError: false,
    }),
  ],
});
