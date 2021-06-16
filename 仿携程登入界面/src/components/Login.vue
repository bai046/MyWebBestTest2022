<template>
  <div id="index">
    <div>
    <el-card class="login">
      <div class="tab">
        <span>携程账号登入</span>
        <router-link to="">
          <el-button style="float: right; padding: 3px 0" type="text"
            >手机号查单</el-button
          >
        </router-link>
      </div>
      <el-input class="tab"
        id="username"
        placeholder="请输入用户名"
        v-model="user.username"
        clearable
      ></el-input>
      <el-input class="tab"
        id="password"
        placeholder="请输入密码"
        v-model="user.password"
        show-password
      ></el-input>
      <div id="submit" class="tab">
        <el-button id="submitSystem" type="button" @click="loginSystem"
          >登录</el-button
        >
      </div>
    </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      user: {  
        username: "",
        password: "",
        // input:''
      },
    };
  },
}
</script>

<style>
#index {
  background: url("../assets/background.jpg") no-repeat;
  background-position: center;
  height: 60%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
.login{
  width: 380px;
  height: 428px;
  float: right;
  margin-right: 370px;
  margin-top: 20px;
  background-color: rgb(255, 255, 255);
  border: solid ridge;
}
.tab{
  margin-top: 20px;
}
#submitSystem {
  background-color: rgb(255, 154, 20);
  width: 200px;
  display: inline-block;
  color: white;
}

#submit {
  text-align: center;
}

#username,
#password {
  margin: 8px;
}
</style>