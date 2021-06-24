<template>
  <div id="about">
    <!-- 上传组件 -->
    <!-- 总结一下:
    action  写图片上传请求的路径 去路径哈
    show-file-list就是当你上传时，是否会显示出上传的是哪一个图片，一般为false
    handleAvatarSuccess它是成功的回调
    beforeAvatarUpload:上传之前做的一些事情在本页面中你不点击按钮  图片也会显示出来  element-ui中的上传组件 在action时，写了上传地址，当你选择好图片，就自动帮你上传了-->
    <el-upload
      class="avatar-uploader"
      action="http://localhost:3000/api/image/uploade"
      accept=".jpg"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
    >
      <img v-if="avatarUrl" :src="avatarUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <h1 class="uc-name">username：</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatarUrl:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg", //默认头像
    };
  },
  created() {
    // 获取头像
    this.getAvatar();
  },
  methods: {
    // 上传成功的函数
    handleAvatarSuccess(res, file) {
      // 上传成功 回显图片
      this.avatarUrl = URL.createObjectURL(file.raw);
      console.log(URL.createObjectURL(file.raw));
    },

    // 上传之前的限制函数
    beforeAvatarUpload(file) {
      // 类型
      const isJPG = file.type === "image/jpeg";
      // 大小
      const isLt2M = file.size / 1024 / 1024 < 2;
      // 类型限制
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      // 大小限制
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },

    // 回去头像的请求
    getAvatar() {
      this.req
        .get("/api/image/uploade")
        .then((response) => {
          let data = response.data;
          this.avatarUrl =
            "http://localhost:3000" + data[data.length - 1].imgUrl;
          console.log(data[data.length - 1].imgUrl);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
};
</script>

<style scoped>
/* #about{
background-color: blue;
} */
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.uc-name {
  border-top: 1px solid #dcdcdc;
  padding: 30px 20px 0 20px;
  font-size: 20px;
  font-weight: bold;
  margin-top: -30px;
  line-height: 34px;
  height: 34px;
}
</style>

