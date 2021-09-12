const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRule = require('./rules/ReactRules');
const StyleRule = require('./rules/StylesRules');
const ImgRule = require('./rules/ImgRules');

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
            StyleRule,
            ImgRule
        ]
    },
    plugins: [        
        new HtmlWebpackPlugin({
            filename: '../../../templates/index.html',
            template: path.resolve('/static/src/index.html')
        })
    ],
}
