import { merge } from "webpack-merge";
import commonConfig from "./webpack.config.common.js";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";

export default merge(commonConfig, {
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
});
