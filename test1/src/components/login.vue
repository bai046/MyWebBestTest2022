<template>
  <div id="body">
    <el-card>
      <!-- solt插槽，也就是槽，是组件的一块HTML模板 https://cn.vuejs.org/v2/guide/components-slots.html-->
      <div slot="header">
        <span>系统登录</span>

        <router-link to="/register">
          <el-button style="float: right; padding: 3px 0" type="text"
            >注册</el-button
          >
        </router-link>
      </div>
      <el-input
        id="username"
        placeholder="请输入用户名"
        v-model="user.username"
        clearable
      ></el-input>
      <el-input
        id="password"
        placeholder="请输入密码"
        v-model="user.password"
        show-password
      ></el-input>
      <!-- <el-input placeholder="请输入密码" v-model="input" show-password></el-input> -->
      <div id="submit">
        <!-- <router-link to="/work"> -->
        <el-button id="submitSystem" type="button" @click="loginSystem"
          >登录</el-button
        >
        <!-- </router-link> -->
      </div>
    </el-card>
          <!-- <vue-particles
      id="particles-js"
      color="#39AFFD"
      :particleOpacity="0.7"
      :particlesNumber="100"
      shapeType="circle"
      :particleSize="4"
      linesColor="#8DD1FE"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      >
      </vue-particles> -->
  </div>
</template>

<script>
import Axios from "axios";
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
  methods: {
    loginSystem() {
      // this.$router.push({path:"/work"})
      Axios.post("/login", { params: this.user }).then(function (response) {
        console.log("你已登入！");
        alter(response.data.state + "\n" + response.data.messages);
        console.log(response.data);
      });
    },
  },
};
</script>

<style>
#body {
  width: 400px;
  margin: 0 auto;
  margin-top: 130px;
  /* background-color: lawngreen; */
}
#submitSystem {
  background-color: #0a9588;
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