<template>
  <div id="registerWrapper">
    <div id="registerContent">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>用户注册</span>
        </div>
        <div id="registerContentBody">
          <el-input
            id="newusername"
            placeholder="请输入用户名"
            v-model="newUser.newusername"
            clearable
          ></el-input>
          <el-input
            id="newpassword"
            placeholder="请输入密码"
            v-model="newUser.newpassword"
            show-password
            clearable
          ></el-input>
        </div>

        <router-link to="/login">
          <div id="registerSubmit">
            <el-button id="systemSubmit" type="button" @click="registerSystem"
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
    };
  },
  methods: {
    // cors模块解决跨域问题
    registerSystem() {
      Axios.get("http://localhost:3000/register", {
        params: this.newUser,
      }).then(function (response) {
        alert(response.data);

        // console.log(response.data);
        // console.log(response.status);
        // console.log(response.statusText);
        // console.log(response.headers);
        console.log(response.config);
      });
    },
  },
};
// params是添加到url的请求字符串中的，用于get请求
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
</style>
