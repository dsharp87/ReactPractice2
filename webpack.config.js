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
                loader: 'babel',                
                // loaders: [  ---this is not working
                //     'react-hot',
                //     'babel-loader?' +
                //         'presets[]=es2015,' + 
                //         'presets[]=react'
                // ]
                query: {
                    presets: ['react', 'es2015']
                }

            }
        ]
    }
}


