var express = require('express');
var router = express.Router();

const controller = require('../controllers/index');

router.get('/test/:id',function(req, res,next){
  // res.render('test',{output:res.params.id});
  const data = controller.getData();
  res.status(200).json({'message':data});
});

res.post('/test/submit',function(req, res, next){
  res.redirect('/test/...');
});

module.exports = router;
