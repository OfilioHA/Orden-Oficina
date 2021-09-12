const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRule = require('./rules/ReactRules');
const StyleRule = require('./rules/StylesRules');

module.exports = {
    mode: 'development',
    entry: './static/src/js/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve('static/public/JS/'),
    },
    module: {
        rules: [
            ReactRule,
            StyleRule
        ]
    },
    plugins: [        
        new HtmlWebpackPlugin({
            filename: '../../../templates/index.html',
            template: path.resolve('/static/src/index.html')
        })
    ],
}
