<template>
  <div id="app">
    <el-container>
      <el-header>
        <img alt="Vue header" src="./assets/header.png" />
      </el-header>
      <el-main> <Login /></el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Login from "./components/Login.vue";
import Footer from "./components/footer.vue";

export default {
  name: "App",
  components: {
    Login,
    Footer,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
.el-header {
  float: left;
  margin-top: 0;
}
.el-main {
  margin-left: 0;
  height: 900px;
}
.el-footer {
  /* background-color: aqua; */
  position: fixed;
  display: flex;
  justify-content: center;
  padding: 0;
  bottom: 0;
  width: 100%;
  height: 100px; /*脚部的高度*/
}
.el-footer > div {
  text-align: center;
}
</style>
