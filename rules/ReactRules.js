module.exports = {
    test: /\.(js|jsx$)/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: [
                [
                    '@babel/preset-react',
                    {
                        runtime: 'automatic'
                    }
                ],
                '@babel/preset-env'
            ],
            plugins: [
                ["@babel/transform-runtime"]
            ]
        },
    }
}