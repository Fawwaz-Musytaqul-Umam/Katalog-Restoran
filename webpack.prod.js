const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new WorkboxWebpackPlugin.GenerateSW({
            swDest: './sw.bundle.js',
        }),
        new ImageminWebpackPlugin({
            plugins: [
                ImageminMozjpeg({
                    quality: 50,
                    progressive: true,
                }),
            ],
        }),
    ],
});
