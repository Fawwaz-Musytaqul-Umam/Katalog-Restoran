const {merge} = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        open: true,
        port: 9000,
        client: {
            overlay: {
                errors: true,
                warnings: true,
            },
        },
        compress: true,
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/public/'),
                    to: path.resolve(__dirname, 'dist/'),
                },
            ],
        }),
    ],
});
