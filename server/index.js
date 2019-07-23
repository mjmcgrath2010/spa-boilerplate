const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;
const webpack = require('webpack');
const webpackConfig = require('../config/webpack/index.js');
const compiler = webpack(webpackConfig);

if (process.env.NODE_ENV !== 'production') {
    // webpack hmr
    app.use(
        require('webpack-dev-middleware')(compiler, {
            noInfo: true,
            publicPath: webpackConfig.output.publicPath
        })
    );

    app.use(require('webpack-hot-middleware')(compiler));
}

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/../build/static')));

// An api endpoint that returns a short list of items

// Handles any requests that don't match the ones above
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../build/'));
});

app.listen(port);

console.log('App is listening on port ' + port);
