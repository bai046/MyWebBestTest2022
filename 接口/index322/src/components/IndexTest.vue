<template>
  <!-- 测试mock数据 -->
  <el-table :data="testDatas" stripe style="width: 100%">
    <el-table-column prop="name" label="姓名" width="180">
    </el-table-column>
    <el-table-column prop="sex" label="性别" width="180">
    </el-table-column>
    <el-table-column prop="age" label="年龄">
    </el-table-column>
    <el-table-column prop="home" label="家庭住址">
    </el-table-column>
  </el-table>
</template>

<script>
  export default{
    data(){
      return{
        testDatas: []
      }
    },
    // 钩子函数，页面加载完成请求数据
   created() {
      this.$axios({
        url:"/test/user",     //请求地址
        method:"get"  //请求方式
      }).then(ok =>{
        // ok表示请求成功的数据
        console.log(ok)
        // 把请求到的数据给testDatas数组
        this.testDatas=ok.data.data
      });
    }
  }
</script>

<style>
</style>