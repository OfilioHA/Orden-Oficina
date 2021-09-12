const path = require('path');
const ReactRule = require('./rules/ReactRules');
const StyleRule = require('./rules/StylesRules');

module.exports = {
    mode: 'development',
    entry: './static/src/JS/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve('static/public/JS/'),
    },
    module: {
        rules: [
            ReactRule,
            StyleRule
        ]
    }
}
