/**
 * Created by clownvary on 2015/9/10.
 * Email vary_007@163.com
 *
 */

var express = require('express');
var https = require('https');
var qs = require('querystring');
var jwt = require('jwt-simple');
var config = require('../config');
var router = express.Router();
var app = express();
app.set("jwtTokenSecret", "just_a_test");
router.use(function timeLog(req, res, next) {
    console.log('Time:' + Date.now());
    next();
});

/* GET users list. */
router.get('/', function (req, res) {
    var optionsGet = {
        hostname: config.mongo.host,
        port: 443,
        path: '/api/1/databases/' + config.mongo.dbName + '/collections/users?apiKey=' + config.mongo.mongolabKey,
        method: 'GET'
    };
    var reqIn = https.request(optionsGet, function (resIn) {
        //console.log("statusCode: ", resIn.statusCode);
        //console.log("headers: ", resIn.headers);
        resIn.on('data', function (data) {
            data = JSON.parse(data.toString());
            res.json({"type": true, "data": data});
            res.end();
        });
    });
    reqIn.on('error', function (e) {
        res.json({"type": false});
    });
    reqIn.end();
});
/* GET users entity. */
router.get('/:id', function (req, res) {
    res.send('respond with a resource ' + req.params.id);
    var optionsGet = {
        hostname: config.mongo.host,
        port: 443,
        path: '/api/1/databases/' + config.mongo.dbName + '/collections/users/' + req.params.id + '?apiKey=' + config.mongo.mongolabKey,
        method: 'GET'
    };
    var reqIn = https.request(optionsGet, function (resIn) {
        //console.log("statusCode: ", resIn.statusCode);
        //console.log("headers: ", resIn.headers);
        resIn.on('data', function (data) {
            data = JSON.parse(data.toString());
            res.json({"type": true, "data": data});
            res.end();
        });
    });
    reqIn.on('error', function (e) {
        res.json({"type": false});
    });
    reqIn.end();
});
/*Create new object*/
router.post('/', function (req, res) {
    var post_data = {
        name: req.body.name,
        password: req.body.pwd
    };
    post_data = JSON.stringify(post_data);
    var optionPost = {
        hostname: config.mongo.host,
        port: 443,
        path: '/api/1/databases/' + config.mongo.dbName + '/collections/users?apiKey=' + config.mongo.mongolabKey,
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            "Content-Length": post_data.length
        }
    };
    var reqIn = https.request(optionPost, function (resIn) {
        //console.log("statusCode: ", resIn.statusCode);
        //console.log("headers: ", resIn.headers);
        resIn.on('data', function (data) {
            data = JSON.parse(data.toString());
            res.json({"type": true, "data": data});
            res.end();
        });
        resIn.on('error', function (e) {

            res.json({"type": false});
            res.end();
        });
    });
    reqIn.on('error', function (e) {
        res.json({"type": false});
    });
    reqIn.write(post_data + "\n");
    reqIn.end();
});
/*Modify an object*/
router.put('/:id', function (req, res) {
    res.send('put method' + req.params.id);
});
/*Remove an object*/
router.delete('/:id', function (req, res) {
    var optionDel = {
        hostname: config.mongo.host,
        port: 443,
        path: '/api/1/databases/' + config.mongo.dbName + '/collections/users/' + req.params.id + '?apiKey=' + config.mongo.mongolabKey,
        method: 'DELETE',
        headers: {
            "Content-Type": 'application/json'
        }
    };
    var reqIn = https.request(optionDel, function (resIn) {
        resIn.on('data', function (data) {
            data = JSON.parse(data.toString());
            res.json({"type": true, "data": data});
            res.end();
        });
        resIn.on('error', function (e) {
            res.json({"type": false});
            res.end();
        });
    });
    reqIn.on('error', function (e) {
        res.json({"type": false});
    });
    reqIn.end();
});
/**
 * 用户名密码登陆验证，获取token,未写完
 */
router.post('/login',function(req,res){
    var user_data = {
        name: req.body.name,
        password: req.body.pwd
    };
    var optionDel = {
        hostname: config.mongo.host,
        port: 443,
        path: '/api/1/databases/' + config.mongo.dbName + '/collections/users?q='+user_data+'&l=1&apiKey=' + config.mongo.mongolabKey,
        method: 'GET',
        headers: {
            "Content-Type": 'application/json'
        }
    };
    var reqIn = https.request(optionDel, function (resIn) {
        resIn.on('data', function (data) {
            data = JSON.parse(data.toString());
            res.json({"type": true, "data": data});
            res.end();
        });
        resIn.on('error', function (e) {
            res.json({"type": false});
            res.end();
        });
    });
    reqIn.on('error', function (e) {
        res.json({"type": false});
    });
    reqIn.end();

});
module.exports = router;

