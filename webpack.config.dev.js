var path = require('path');
var webpack = require('webpack');
var jQuery=require('jquery');

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
         '$': 'jquery',
         'jQuery': 'jquery',
         'window.jQuery': 'jquery'
         }),
         new webpack.DefinePlugin({
         'api_base': JSON.stringify('http://127.0.0.1:9098')
         })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel?presets[]=es2015&presets[]=react&presets[]=react-hmre'],
                include: [path.join(__dirname, 'src')]
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.css$/,
                exclude: [path.join(__dirname, 'vendor')],
                loaders: ["style-loader", "css-loader"]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: "url-loader?limit=25000"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            }, {
                test: /vendor\/.+\.(jsx|js)$/,
                loader: 'imports?jQuery=jquery,$=jquery,this=>window'
            }
        ]
    }
};
