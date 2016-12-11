/**
 *
 * @author    Jerry Bendy
 * @since     16/12/11
 * @copyright MicroBenefits
 */

const webpack = require('webpack')

module.exports = {
    output: {
        library: 'ReactTouchEvents',
        libraryTarget: 'umd'
    },

    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        }
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ]
};