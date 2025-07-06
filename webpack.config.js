import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./9-module/2-task/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.html$/i, // Обрабатываем все .html-файлы
        use: "html-loader",
      },
    ],
  },
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./9-module/2-task/index.html",
    }),
  ],
};
