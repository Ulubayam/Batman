const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const env = process.env.NODE_ENV;

const config = {
    entry: path.join(__dirname, "src", "main.js"),
    mode: env,
    output: {
        publicPath: "/"
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    module: {
        rules: [{

                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            indentedSyntax: true
                        }
                    }
                ]

            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: path.join(__dirname, "dist", "index.html"),
            template: path.join(__dirname, "static", "index.html"),
            inject: true
        })
    ]
};

module.exports = config;