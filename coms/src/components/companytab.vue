<template>
  <div class="padding-leftandright gray-bgcolor">
    <el-container>
      <el-aside width="300px">
        <div id="touxiang">
          <el-image :src="src"></el-image>
        </div>
      </el-aside>
      <el-main>
        <el-card class="box-card">
          <div slot="header">
            <span>企业信息</span>
          </div>
          <div class="tab">
            <el-row>
              <el-col :span="24"
                ><div class="grid-content bg-purple-dark">
                  <h1>关于我们：</h1>
                  <div class="edit-box">
                    <span>{{}}</span>
                  </div>
                </div></el-col
              >
            </el-row>
            <el-row>
              <el-col :span="12"
                ><div class="grid-content bg-purple">
                  <h4>公司名称：</h4>
                  <div class="edit-box">
                    <span>{{}}</span>
                  </div>
                </div></el-col
              >
              <el-col :span="12"
                ><div class="grid-content bg-purple-light">
                  <h4>成立时间：</h4>
                  <div class="edit-box">
                    <span>{{}}</span>
                  </div>
                </div></el-col
              >
            </el-row>
            <el-row>
              <el-col :span="12"
                ><div class="grid-content bg-purple">
                  <h4>公司地址：</h4>
                  <div class="edit-box">
                    <span>{{}}</span>
                  </div>
                </div></el-col
              >
              <el-col :span="12"
                ><div class="grid-content bg-purple-light">
                  <h4>公司电话：</h4>
                  <div class="edit-box">
                    <span>{{}}</span>
                  </div>
                </div></el-col
              >
            </el-row>
          </div>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
    };
  },
};
</script>

<style>
.edit-box {
  display: inline-block;
  line-height: 20px;
  color: #595959;
}
.el-row {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
/* .bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
} */
.grid-content {
  border-radius: 4px;
  min-height: 26px;
}
.box-card {
  width: 480px;
  height: 350px;
  float: right;
  box-shadow: 1px 2px 10px #000;
}
#touxiang {
  background-color: tomato;
  width: 280px;
  height: 280px;
  margin: 50px auto;
}
.el-container {
  background-color: white;
}
.el-aside {
  color: #333;
}

.padding-leftandright {
  padding-left: 20%;
  padding-right: 20%;
  padding-top: 3%;
}
.gray-bgcolor {
  background: #f0f2f5;
}
</style>