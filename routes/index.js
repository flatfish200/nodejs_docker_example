var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/redis', function(req, res, next) {
  
  let connect_count =0;
  _redis.hget('conect', 'count', function(err, value) {
    if (err) throw err;
    console.log('count is ' + value);

    _redis.hmset('conect', {
      'count':parseInt(value)+1
    });
    res.send({title: 'count is ' + value});
  });
});
module.exports = router;
