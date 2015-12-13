/**
 * Created by clownvary on 2015/12/13.
 * Email vary_007@163.com
 *
 */

var express=require('express');
var https = require('https');
var qs = require('querystring');
var config =require('../config');
var router=express.Router();
router.use(function timeLog(req,res,next) {
    console.log('router2 Time:'+Date.now());
    next();
});

module.exports=router;