const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: [
            'babel-polyfill',
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
            './app/index.jsx'
        ]
    },
    // Enable source maps
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Boilerplate',
            template: path.resolve('./index.html'),
            filename: 'index.html'
        }),
        // Support HMR
        new webpack.HotModuleReplacementPlugin()
    ]
};
