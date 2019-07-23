const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Boilerplate',
            template: path.resolve('./index.html'),
            filename: 'index.html'
        })
    ]
};
