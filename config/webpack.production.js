const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');

module.exports = function() {
    return webpackMerge(commonConfig(), {
        output: {
            chunkFilename: '[id].chunk.js',
            path: path.join(__dirname, '/../dist'),
            filename: '[name].bundle.js',
        },
        plugins: [
            new CopyWebpackPlugin([
                {
                    from: 'src/static/'
                }
            ]),
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    'ENV': JSON.stringify('production')
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                mangle: {
                    screw_ie8: true,
                    keep_fnames: true
                },
                compress: {
                    screw_ie8: true
                },
                comments: false
            })
        ]
    })
}