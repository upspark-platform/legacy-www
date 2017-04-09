const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./webpack.common.js');
const app = require('../package.json');
const path = require('path');

module.exports = function () {
    return webpackMerge(commonConfig(), {
        output: {
            path: path.join(__dirname, '/../dist'),
            filename: '[name].bundle.js',
            publicPath: 'http://localhost:8080/',
            chunkFilename: '[id].chunk.js'
        },
        devServer: {
            stats: { colors: true },
            contentBase: path.join(__dirname, '..', 'src', 'assets', 'www'),
            historyApiFallback: true
        },
        devtool: 'cheap-module-source-map',
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    'ENV': JSON.stringify('development')
                },
                'API_URL': JSON.stringify(app.api.development)
            }),
            new webpack.NamedModulesPlugin()
        ]
    })
};