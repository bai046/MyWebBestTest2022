<template>
  <div id="registerWrapper">
    <div id="registerContent">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>用户注册</span>
          <span id="checkTips" v-text="this.tips" :class="this.state?tip1:tip2">111</span>
        </div>
        <div id="registerContentBody">
          <el-input
            id="newusername"
            placeholder="请输入用户名"
            v-model="newUser.newusername"
            clearable
            @blur="checkUsername"
          ></el-input>
          <el-input
            id="newpassword"
            placeholder="请输入密码"
            v-model="newUser.newpassword"
            show-password
            clearable
          ></el-input>
        </div>
<!-- :class="this.state?this.submit1:this.submit2" -->
        <router-link to="/login">
          <div id="registerSubmit">
            <el-button id="systemSubmit" type="button"  @click="registerSystem" 
              >注册</el-button
            >
          </div>
        </router-link>
      </el-card>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "register",
  data() {
    return {
      newUser: {
        newusername: "",
        newpassword: "",
      },
      tips:" ",
      state:false,
      tip1:"redTips",
      tip2:"greenTips",
      // submit1:"submit1",
      // submit1:"submit2",
    };
  },
  methods: {
    checkUsername(){
Axios.get("http://localhost:3000/register/check",{params: this.newUser}).then(res=>{
        // this.tips=response.data.messages;
        // if(response.data.state=true){
        //   this.state=true;
        // }
        // console.log(response.data+response.data.state+'\n'+response.data.messages);
        // console.log(response)
        console.log(res)
        alert(res.data)
        // alert(this.response.data)
        // alert("你好啊")
        // console.log(response.data);
        // alter(response.data+response.data.state+'\n'+response.data.messages);
      })
    },
    // cors模块解决跨域问题
    registerSystem() {
      // Axios.get("http://localhost:3000/register", {
      // params是添加到url的请求字符串中的，用于get请求
      //   params: this.newUser,
      // }).then(function (response) {
      //   alert(response.data);
      //   console.log(response.config);
      // })
      Axios.post("/register",{params: this.newUser}).then(function(response){
        // alter(response.data.state+'\n'+response.data.messages);
      })
    },
  },
};
</script>

<style>
#registerWrapper {
  /* background-color: purple; */
  height: 100%;
}
#registerContent {
  width: 400px;
  margin: 0 auto;
  padding-top: 100px;
}
#systemSubmit {
  display: block;
  margin: 0 auto;
  background-color: #0a9588;
  color: white;
  border-color: #0a9588;
}
#newpassword {
  margin-top: 5px;
  margin-bottom: 8px;
}
#checkTips{
  /* background-color: blue; */
  margin-left: 45px;
}
.redTips{
  color:red
}
.greenTips{
  color:green
}
.submit1{
  background-color: #fff !important;
}
.submit2{
  background-color: seagreen;
}

</style>
