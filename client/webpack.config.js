const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin/index");

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: __dirname + "/../public/dist",
        filename: "[name].js",
        publicPath: `http://localhost:9009/`
    },
    module: {
        rules: [
            {
                test: /\.js/,
                loaders: ["babel-loader"],
                include: path.join(__dirname, "/src"),
                exclude: [/node_modules/]
            },

            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },

            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "resolve-url-loader",
                    "sass-loader"
                ]
            },

            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ]
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development")
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: "main.twig",
            minify: true,
            template: "index.html"
        }),
        new HtmlWebpackHarddiskPlugin({
            outputPath: path.resolve(__dirname, "../views")
        })
    ],

    node: {
        fs: "empty",
        net: "empty",
        tls: "empty"
    },

    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9009
    }
};
