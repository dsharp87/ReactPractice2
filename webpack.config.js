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
            }
        ]
    }
}


