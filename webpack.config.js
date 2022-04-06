const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const AppName = "example";

module.exports = (env, argv) => ({
    entry: {
        app: "./src/js/app.js"
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: `${AppName}.[name].js`
    },
    devServer: {
        static: "./build",
        hot: true,
        port: 1337
    },
    optimization: {
        minimizer: [new TerserPlugin({}), new CssMinimizerPlugin({})]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [/node_modules/],
                options: {
                    presets: [
                        "@babel/react",
                        "@babel/env"
                        // {
                        //     targets: {
                        //         esmodules: true
                        //     }
                        // }
                    ],
                    // plugins: ["@babel/plugin-transform-runtime"]
                    plugins: []
                }
            },
            {
                test: /\.[s]?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader", // translates CSS into CommonJS
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader", // compiles Sass to CSS
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.svg$/,
                use: ["svgo-loader"]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            path: path.resolve(__dirname, "assets/css"),
                            name: "fonts/[name].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/public"),
                    to: path.resolve(__dirname, "build")
                }
            ]
        }),
        // new HtmlWebpackPlugin({ title: AppName, template: "demo/index.html" }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            // path: path.resolve(__dirname, "build/css"),
            filename: `${AppName}.[name].css`,
            chunkFilename: "[id].css"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
});
