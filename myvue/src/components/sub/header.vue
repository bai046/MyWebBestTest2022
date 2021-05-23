<template>
  <div id="header">
    <router-link to="/"><div id="title">发源地</div></router-link>
    <div id="function">
      <router-link to="/One"
        ><el-link :underline="false" icon="el-icon-user-solid"
          >个人中心</el-link
        ></router-link>
      <router-link to="/Two"
        ><el-link :underline="false" icon="el-icon-setting"
          >项目管理</el-link
        ></router-link>
      <router-link to="/StudioInfo"
        ><el-link :underline="false" icon="el-icon-edit"
          >查看项目列表</el-link
        ></router-link>
      <router-link to="/help"
        ><el-link :underline="false" icon="el-icon-chat-dot-round"
          >联系我们</el-link
        ></router-link>
      <router-link to="/ManageProject"
        ><el-link :underline="false" icon="el-icon-s-home"
          >退出登入</el-link
        ></router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#header{
  height: 50px;
  background-color:rgb(106, 123, 141);
}
#title {
  color: white;
  font-size: 20px;
  /* font-weight: bolder; */
  line-height: 30px;
  display: inline-block;
  padding-left: 10px;
  margin-top: 10px;

}

#function {
  float: right;
  /* display: inline-block; */
  /* text-align: center; */
}
/* 注意：嵌套router-link=a标签 */
#function > a > * {
  margin-top: 10px;
}

#function > a > .el-link {
  font-size: 20px;
  padding-right: 30px;
  color: white;
}
/* 去除下划线 */
a {
  text-decoration: none;
}
</style>