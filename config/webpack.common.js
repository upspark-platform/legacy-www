const path = require('path');
const webpack = require('webpack');
const {CheckerPlugin} = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const app = require('../package.json');

module.exports = function () {
    return {
        entry: {
            'polyfills': './src/lib/polyfills.ts',
            'vendor': './src/lib/vendor.ts',
            'main': ['./src/main.ts']
        },
        resolve: {
            extensions: ['.ts', '.js', '.json'],
            modules: [
                'node_modules',
                path.join(__dirname, '..', 'src'),
                path.join(__dirname, '..', 'src', 'assets'),
                path.join(__dirname, '..', 'src', 'assets', 'www')
            ],
        },
        module: {
            exprContextCritical: false,
            rules: [{
                test: /\.ts$/,
                use: [
                    'awesome-typescript-loader',
                    'angular2-template-loader'
                ]
            }, {
                test: /\.html$/,
                use: 'raw-loader'
            }, {
                test: /\.scss$/,
                use: ['to-string-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.(jpg|png|gif)$/,
                use: 'url-loader'
            }, {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000
                    }
                }
            },{
                test: /\.md$/,
                use: [
                    {
                        loader: "html-loader"
                    },
                    {
                        loader: "markdown-loader"
                    }
                ]
            }],
        },
        plugins: [
            new CheckerPlugin(),

            new webpack.DefinePlugin({
                'META': {
                    'TITLE': JSON.stringify("Upspark")
                }
            }),

            new webpack.optimize.CommonsChunkPlugin({
                name: ['polyfills', 'vendor'].reverse()
            }),

            new HtmlWebpackPlugin({
                template: 'src/main.ejs',
                filename: 'index.html'
            })
        ],
    };
};