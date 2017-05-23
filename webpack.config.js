var path = require('path');

module.exports = {
    devtool: 'exac-source-map',
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'tabs'),
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
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }
        ]
    },

    devServer: {
        publicPath: '/'
    }
}
