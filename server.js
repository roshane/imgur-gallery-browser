var express = require('express');
var path = require('path');
var webpack = require('webpack');

var config = require('./webpack.config.dev');


var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    hot:true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/index.html'));
});


app.listen('3000', function () {
    console.log('application started on http://localhost:3000');
    console.log('Ctrl + c to stop');
});
