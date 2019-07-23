const env = process.env.NODE_ENV || 'development';
const envConfig = require(`./${env}.js`);

module.exports = Object.assign(
    {
        mode: env,
        entry: {
            index: ['babel-polyfill', './app/index.jsx'],
        },
        output: {
            path: __dirname + '../../../build',
            publicPath: '/',
            filename: '[name].bundle.js',
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
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
            ],
        },
        resolve: {
            extensions: ['*', '.js', '.jsx'],
        },
    },
    envConfig
);
