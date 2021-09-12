module.exports = {
    test: /\.(sass|scss|css$)/,
    exclude: /node_modules/,
    use: ['style-loader', 'css-loader', 'sass-loader']
}