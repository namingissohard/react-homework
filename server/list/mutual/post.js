var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../util/util');
var $sql = require('./postSqlMapping');
var pool = mysql.createPool($util.extend({}, $conf.mysql));
var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: 'error'
    });
  } else {
    res.json(ret)
  }
};
module.exports = {
  add: function (req, res, next) {
    pool.getConnection(function (err, connection) {
      // 获取前台页面传过来的参数
      var param = req.query || req.params;
      // 建立连接，向表中插入值
      // 'INSERT INTO post(id, title, content) VALUES(0,?,?)',
      connection.query($sql.insert, [0, param.content], function (err, result) {
        if (result) {
          result = {
            code: 200,
            msg: '创建成功'
          };
        }
        // 以json形式，把操作结果返回给前台页面
        jsonWrite(res, result);
        // 释放连接
        connection.release();
      });
    });
  },
  queryAll: function (req, res, next) {
    pool.getConnection(function (err, connection) {
      connection.query($sql.queryAll, function (err, result) {
        jsonWrite(res, result);
        connection.release();
      });
    });
  },
  delete:function(req, res, next){
    pool.getConnection(function (err, connection) {
      var param = req.query || req.params;
      connection.query($sql.delete,[param.id], function (err, result) {
        jsonWrite(res, result);
        connection.release();
      });
    });
  },
  switchStatus(){
    pool.getConnection(function (err, connection) {
      var param = req.query || req.params;
      connection.query($sql.update,[(param.status?1:0),param.id], function (err, result) {
        jsonWrite(res, result);
        connection.release();
      });
    });
  }
};