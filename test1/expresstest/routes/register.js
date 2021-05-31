var express = require('express');
var router = express.Router();
var db=require('../model/db.js');

router.get('/check', function(req, res, next) {
  let inform=req.query;
  let username=inform.newusername;
  console.log(username)
  let query3SQL="select * from users";
  let conn=sb.connection();
  db.query3(conn,query3SQL,"",function(resx){
    // console.log(resx);
    let flag=0;
    for(let i=0;i<resx.lenrth;i++){
      let existUsername=resx[i].user_name;
      if(userneme==existUsername){
  res.send('用户名已存在！');
  break;
  // let flag=1;
      }
    }
  })
  db.close(conn);
  res.send('this is check');
});

router.get('/', function(req, res, next) {
  res.send('this is register');
});


// tongguo
Date.prototype.format = function(format)
{
 var o = {
 "M+" : this.getMonth()+1, //month
 "d+" : this.getDate(),    //day
 "h+" : this.getHours(),   //hour
 "m+" : this.getMinutes(), //minute
 "s+" : this.getSeconds(), //cond
 "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
 "S" : this.getMilliseconds() //millisecond
 }
 if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
 (this.getFullYear()+"").substr(4 - RegExp.$1.length));
 for(var k in o)if(new RegExp("("+ k +")").test(format))
 format = format.replace(RegExp.$1,
 RegExp.$1.length==1 ? o[k] :
 ("00"+ o[k]).substr((""+ o[k]).length));
 return format;
}


// 回调函数（请求，响应）
router.post('/', function(req, res, next) {
  let inform = req.body.params;
  let username = inform.newusername;
  let password = inform.newpassword;

  console.log(username)

  console.log(inform);
  // SQL用编程格式
  let newUserSQL = 'INSERT INTO users (user_id,user_name,user_password) VALUES(1002,' +'"'+ username+'"' + ',' +'"'+ password +'"' + ')'
  console.log(newUserSQL);
  let conn = db.connection();

  db.insert(conn,newUserSQL,'',function(res){
    let results=res;
    console.log(results)
  });
  // db.insert(conn,newUserSQL,'',function(insertId){
  //   console.log(insertId)
  // });
  db.close(conn);
  res.send("成功");
});

// let isExistUserSQL="select user_name from users";
// let conn=db.connection()
// db.query1(conn,newUserSQL,'',function(resx){
//   console.log(resx)
//   for(let i=0;i<resx.length();i++){
//     if(resx[i].user_name==username){
//       res.send("重复！")
//       break;
//     }
//   }
// })
// db.close(conn);

// // /* GET users listing. */
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
