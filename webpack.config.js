import path from "path";

export default {
  context: path.resolve(__dirname, "src"),
  entry: "./index.js",
  output: {
    filename: "[name].[contenthacsh].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
