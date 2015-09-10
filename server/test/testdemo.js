/**
 * Created by clownvary on 2015/9/10.
 * Email:vary_007@163.com
 */
var expect = require('expect.js');
describe('Test Demo',function(){
   it('expect be true',function(){
       var x=1;
      expect(x).to.be.a('number');
      expect(x).to.equal(1);
   });
});