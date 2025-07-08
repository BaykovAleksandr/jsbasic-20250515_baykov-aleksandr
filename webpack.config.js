import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./9-module/2-task/index.js", // Главный JS-файл
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "docs"), // Выходная папка для GitHub Pages
    publicPath: "/", // Важно для корректных путей
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: "html-loader",
      },
      {
        test: /\.css$/i, // Добавляем обработку CSS
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Обработка изображений
        type: "asset/resource",
        generator: {
          filename: "assets/[hash][ext][query]", // Сохранять в docs/assets/
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./9-module/2-task/index.html", // Шаблон HTML
      filename: "index.html", // Итоговый файл в docs/
    }),
  ],
  mode: "production",
};
