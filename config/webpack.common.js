const path = require('path');
const webpack = require('webpack');
const {CheckerPlugin} = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const app = require('../package.json');

const meta = (property, ifNotFound, transformer) => {
    let value = ifNotFound;

    if (!app.meta || !app.meta.hasOwnProperty(property)) {
        if(typeof ifNotFound === 'string' && ifNotFound.startsWith("~")) {
            value = value.slice(1);

            if(app.hasOwnProperty(value)) {
                value = app[value];
            }
        }
    } else {
        value = app.meta[property];
    }

    if (transformer) {
        if (typeof transformer === 'string') {
            value = transformer.replace(/@/g, value);
        } else {
            value = transformer.call(value, value);
        }
    }

    return typeof value === 'string' ? JSON.stringify(value) : value;
};

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
            }],
        },
        plugins: [
            new CheckerPlugin(),

            new webpack.DefinePlugin({
                'META': {
                    'TITLE': meta('title', 'description')
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