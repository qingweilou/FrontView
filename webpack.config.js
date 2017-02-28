module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname + '/build/',
        publicPath: 'build',
        filename: 'fronthelper.js'
    },
    module: {
        loaders: [
            { test:/\.vue$/, loader: 'vue-loader'},
            { test:/\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            { test:/\.(png|jpg|gif)$/, loader: "file-loader?name=img/img-[hash:6].[ext]"}
        ]
    }
}