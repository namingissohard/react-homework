var express = require('express');
var post = require('../mutual/post');
var router = express.Router();
var app = express();
router.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  
    if (req.method == 'OPTIONS') {
      res.send(200); /让options请求快速返回/
    }
    else {
      next();
    }
  });
// create
router.post('/posts', function(req, res, next) {
  post.add(req, res, next);
});
router.post('/delete',function(req,  res, next ){
    post.delete(req,res,next)
})
router.post('/switchStatus',function(req, res, next){
    post.switchStatus(req, res, next)
})
// new
router.post('/add', function(req, res, next) {
  post.add(req, res, next)
});

module.exports = router;