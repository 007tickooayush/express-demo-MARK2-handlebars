var express = require('express');
var router = express.Router();


// get the ID parameter
router.get('/profile/:id',function(req, res,next){
  res.render('test',{output:res.params.id});
});

res.post('/profile/submit',function(req, res, next){
  res.redirect('/test/...');
});

module.exports = router;
