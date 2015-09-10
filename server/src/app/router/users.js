/**
 * Created by clownvary on 2015/9/10.
 * Email vary_007@163.com
 *
 */

var express=require('express');
var router=express.Router();

router.use(function timeLog(req,res,next) {
    console.log('Time:'+Date.now());
    next();
});

/* GET users listing. */
router.get('/', function(req, res) {

    res.send('respond with a resource ok');
});
/* GET users listing. */
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

