<template>
  <div id="app">
    <indextest/>
    <HelloWorld/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>
<script>
//2,导入vue子组件
import indextest from "./components/IndexTest.vue";
import HelloWorld from "./components/HelloWorld.vue"

export default {
  name: "App",
  components: {
    //3,注册vue子组件，components
    indextest,
    HelloWorld,
  },
};
</script>

<style>

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
