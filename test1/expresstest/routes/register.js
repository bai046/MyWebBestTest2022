var express = require('express');
var router = express.Router();

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

app.post('/urlencoded', function(req, res){
  // 一定body
  // console.log(req.body);
  let newUser=req.body;
  let username=newUser.params.newusername;
  let password=newUser.params.newpassword;
  console(username);
  console(password);

  res.send("注册post successfully!");
});

module.exports = router;
