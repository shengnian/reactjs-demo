var path = require('path');
var config = {
    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel'
        }, {
            test: /\.css$/, // Only .css files
            loader: 'style!css-loader' // Run both loaders
        }, {
            test: /\.less$/, // Only .css files
            loader: 'style!css!less' // Run both loaders
        }]
    }
};

module.exports = config;