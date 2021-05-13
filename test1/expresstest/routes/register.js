var express = require('express');
var router = express.Router();
var mysql=require('../model/db.js');

router.post('/', function(req, res, next) {
  let inform = req.body.params;
  let username = inform.newusername;
  let password = inform.newpassword;
  console.log(inform);
  let newUserSQL = 'INSERT INTO users (user_id,user_name,user_password) VALUES(1002,' +'"'+ username+'"' + ',' +'"'+ password +'"' + ')'
  console.log(newUserSQL);
  let conn = db.connection();
  db.insert(conn,newUserSQL,'',function(insertId){
    console.log(insertId)
  });
  db.close();
  res.send("恭123434的");

});

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   //请求
//   let message=req.query;
//   // console.log(message);
//   let username=message.newusername;
//   let password=message.newpassword;
//   let seedBack="用户名："+username+"\n"+"密码："+password
//   //回馈
//   res.send(seedBack+"\n"+'registerget was successful!');
// });

// router.post('/', function(req, res, next) {
//   res.send('registerpost was successful!');
// });


module.exports = router;
