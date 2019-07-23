const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './app/index.js',
    output: {
        path: __dirname + '../../../build',
        publicPath: '/',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: './build',
        port: 3000,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve('./index.html') }),
    ],
};
