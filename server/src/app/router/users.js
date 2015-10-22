/**
 * Created by clownvary on 2015/9/10.
 * Email vary_007@163.com
 *
 */

var express=require('express');
var https = require('https');
var qs = require('querystring');
var config =require('../config');
var router=express.Router();

var optionsGet = {
    hostname: config.mongo.host,
    port: 443,
    path: '/api/1/databases/'+config.mongo.dbName+'/collections/users?apiKey='+config.mongo.mongolabKey,
    method: 'GET'
};

router.use(function timeLog(req,res,next) {
    console.log('Time:'+Date.now());
    next();
});

/* GET users list. */
router.get('/', function(req, res) {
    var reqIn = https.request(optionsGet, function(resIn) {
        console.log("statusCode: ", resIn.statusCode);
        console.log("headers: ", resIn.headers);

        resIn.on('data', function(data) {
             data=JSON.parse(data.toString());
            //res.send(data.toString());
            res.json({"data":data});
            res.end();
        });
    });
    reqIn.end();

    reqIn.on('error', function(e) {
        console.error(e);
    });
    //res.send("ok");

});
/* GET users entity. */
router.get('/:id', function(req, res) {
    res.send('respond with a resource '+req.params.id);
});
/*Create new object*/
router.post('/',function(req,res){
   res.send('post method');
});
/*Modify an object*/
router.put('/:id',function(req,res){
    res.send('put method'+req.params.id);
});
/*Remove an object*/
router.delete('/:id',function(req,res){
    res.send('delete method'+req.params.id);
});

module.exports = router;

