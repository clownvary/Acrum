/**
 * Created by clownvary on 2015/9/10.
 * Email vary_007@163.com
 *
 */
var express = require('express');
var users = require('./router/users');
var app = express();

app.get('/', function (req, res) {
    res.send('hello world');
});
app.use('/users', users);

app.use('/static', express.static('static'));
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port)
});
