const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry:  {
        main: './src/santali.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'santali.min.js'
    },
    resolve: {
        extensions: ['.ts', '.json']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    }
};
