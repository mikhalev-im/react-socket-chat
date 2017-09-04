var path = require('path');

module.exports = {
    entry: './app/client/src/app.jsx',
    
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, './app/client/dest')
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },

    resolve: {
        extensions: ['.js', '.jsx']
    }
}