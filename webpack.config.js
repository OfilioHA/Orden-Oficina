const path = require('path');

module.exports = {
    mode: 'development',
    entry: './static/src/JS/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve('static/public/JS/'),
    }
}
