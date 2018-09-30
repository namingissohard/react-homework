var express = require('express');
var router = express.Router();
var post = require('../mutual/post');
// GET home page. 

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
router.get('/get', function(req, res, next) {
  post.queryAll(req, res, next, function (err, posts) {
    if (err) {
      posts = err;

    }
    res.render('post_index', {
      title: '文章',
      posts: posts
    });
  });
});
module.exports = router;