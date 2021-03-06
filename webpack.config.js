var path = require('path');

module.exports = {
    devtool: 'exac-source-map',
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        pathinfo: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                loader: 'style-loader',
                test: /\.css$/
            },
            {
                loader: 'css-loader',
                test: /\.css$/
            }
        ]
    },

    devServer: {
        publicPath: '/'
    }
}
