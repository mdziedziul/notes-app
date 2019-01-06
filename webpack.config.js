const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const source = path.resolve(__dirname, 'src');
const destination = path.resolve(__dirname, 'dist');

module.exports = {
    context: source,
    entry: [
        './index.ts',
        './styles.scss'
    ],
    output: {
        filename: 'index.js',
        path: destination
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader',
                    'angular2-template-loader'
                ]
            }, 
            {
                test: /\.html$/, 
                loader: 'raw-loader'
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader",
                    options: {
                        includePaths: ["./node_modules"]
                    }
                }]
            },
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            output: path.resolve(__dirname, 'dist'),
            inject: 'head'
        })
    ]
};