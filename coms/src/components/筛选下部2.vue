<template>
  <div id="table">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="值得买精选" name="first">
        <div v-for="item of 5" :key="item">
          <div id="tab1">
            <el-container>
              <el-aside width="200px">
                <el-image :src="imgUrl"></el-image>
              </el-aside>
              <el-main>
                <div class="tabdata first">
                  88VIP：Apple 苹果 iPhone 12 5G智能手机 128GB
                </div>
                <div class="tabdata second">
                  A14仿生芯片，升级5G。iPhone
                  12是苹果的第一代5G手机之一。在同代四款产品中，它的6.1英寸屏幕大小居中，重量仅有162克，厚度7.4mm
                </div>
                <div class="tabdata three">
                  <el-badge :value="2" class="item">
                    <el-button size="small">评论</el-button>
                  </el-badge>
                  <el-badge :value="3" class="item">
                    <el-button size="small">回复</el-button>
                  </el-badge>
                </div>
                <div class="tabdata last">
                  <el-button type="danger">去购买</el-button>
                </div>
              </el-main>
            </el-container>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="关注动态" name="second">关注动态</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

export default {
  data() {
    return {
      imgUrl:require('../assets/first.jpg')
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style>
#table {
  width: 800px;
  margin: 0 auto;
  background-color: bisque;
}
#tab1 {
  height: 200px;
  width: 100%;
  margin: 10px;
  /* background-color: chartreuse; */
}
.el-aside{
  margin: 30px 30px;
}
.el-main{
  margin: 30px;
}
.item {
  margin-top: 10px;
  margin-right: 40px;
}
.first{
  float: left;
}
.three {
  float: left;
}
.last {
  float: right;
}
</style>