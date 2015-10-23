/**
 * Created by clownvary on 2015/9/10.
 * Email vary_007@163.com
 *
 */
var express = require('express');
var users = require('./router/users');
var bodyparse = require('body-parser');
var multer = require('multer');
var app = express();

/*
 解决跨域问题
 */

app.use(bodyparse.urlencoded({extended:true}));
app.use(bodyparse.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST', 'PUT', 'DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});
app.get('/', function (req, res) {
    res.send('hello world');
});
app.use('/users', users);
app.post('/',function(req,res){
    var body ='';
    req.on('data', function(data) {body += data});
     console.log(req.body.pwd);
});
app.use('/static', express.static('static'));
process.on('uncaughtException', function (err) {
    console.log(err + "为捕获");
});
var server = app.listen(3002, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port)
});
