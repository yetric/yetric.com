const path = require("path");
module.exports = {
    entry: "./src/index.ts",
    output: {
        path: __dirname + "/../public/dist",
        filename: "[name].js"
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
                    "sass-loader"
                ]
            }
        ]
    },
    node: {
        fs: "empty",
        net: "empty",
        tls: "empty"
    },

    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    }
};
