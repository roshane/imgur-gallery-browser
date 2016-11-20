var express = require('express');
var path = require('path');
var webpack = require('webpack');
//var proxy = require('express-http-proxy');
var config = require('./webpack.config.dev');


var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    hot:true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

//app.use('/api', proxy('api.imgur.com/3/gallery', {
//    https: true,
//    decorateRequest: function(proxyReq, originalReq) {
//        console.log("proxy request",proxyReq);
//        //proxyReq.headers['Accept-Type'] = 'application/json';
//        //proxyReq.method = 'GET';
//        return proxyReq;
//    }
//}));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/index.html'));
});


app.listen('3000', function () {
    console.log('application started on http://localhost:3000');
    console.log('Ctrl + c to stop');
});
