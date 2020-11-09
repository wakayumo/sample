var express = require('express');
const { resource } = require('../app');
const app = require('../app')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:userId',function(req,res){

    for(i=1; i<=parseInt(req.params.userId);i++) {
        if(i%3 === 0 && i%5 !== 0){
            res.write('   Fizz   ');
        }else if(i%3 !== 0 && i%5 === 0){
          res.write('   Buzz   ');
        }else if(i%3 === 0 && i%5 === 0){
          res.write('   FizzBuzz   ');
        }else{
          res.write(i+'');
        }
      }
    
    res.end();
 
});



module.exports = router;
