const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: "./app/js/app.js",
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                // this is not working
                // loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader'
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: {
                        localIdentName: "[name]__[local]___[hash:base64:5]",
                        
                    }
                    // localsConvention: 'camelCase',
                    //this isn't working for converting css class names that are xxx-yyy to xxxYyy
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
}


