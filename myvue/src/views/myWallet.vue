<template>
  <div>
    <SNavBar></SNavBar>
    <div class="uc-layer-top self">
      <About />
      <div class="s-header">
        <div class="h-nav">
          <router-link to="/personcenter">个人资料</router-link>
          <a href="#myWallet">我的钱包</a>
        </div>
      </div>
    </div>
    <div class="setting-page cWidth">
      <div class="item-change">
        <div class="setting-item" id="myWallet">
          <div class="options basic">
            <h3 class="title">我的余额</h3>
            <p>余额：</p>
          </div>
          <div class="options basic">
            <h3 class="title">交易记录</h3>
            <el-form
              class="small-space"
              label-position="left"
              label-width="80px"
              style="width: 600px; margin-left: 50px; margin-bottom: 50px"
            >
              <el-table
                ref="filterTable"
                :data="completedTransactionsList"
                height="250"
                style="width: 1000px; margin-left: 50px"
              >
                <el-table-column prop="projectName" label="项目名称">
                </el-table-column>
                <el-table-column prop="unitName" label="工作室名称">
                </el-table-column>
                <el-table-column prop="budget" label="项目金额">
                </el-table-column>
              </el-table>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import About from "./About.vue";
import SNavBar from "../components/NavBar/studio.vue";

export default {
  components: { About, SNavBar },
};
</script>

<style scoped>
.uc-layer-top.self {
  height: 280px;
  margin-top: 65px;
}
.uc-layer-top {
  height: 260px;
  background-color: #fff;
  border-bottom: 1px solid #c8c8c8;
  text-align: center;
  margin-bottom: 40px;
  overflow: hidden;
}
.uc-layer-top.self .uc-subtit {
  width: 320px;
  margin: 0 auto;
  position: relative;
  background-color: #f2f2f2;
}
.uc-layer-top.self .uc-subtit span.jifentxt {
  cursor: pointer;
  min-width: 100px;
  padding-left: 10px;
  padding-right: 10px;
}
.uc-layer-top.self .uc-subtit span {
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
}
.uc-layer-top.self .uc-subtit span.viptxt {
  width: 150px;
  margin-left: 5px;
}



.el-form small-space,
.el-form--label-left {
  width: 800px;
  margin-left: 50px;
}
.el-table,
.el-table--fit,
.el-table--enable-row-hover,
.el-table--enable-row-transition {
  width: 600px;
  margin-left: 50px;
}

.el-form-item {
  margin-bottom: 22px;
}

.col-md-5 {
  width: 90%;
}

.setting-page {
  margin-top: 40px;
  margin-bottom: 60px;
  border: 1px solid #c8c8c8;
  padding-bottom: 60px;
  background: #ffffff;
}
.cWidth {
  width: 980px;
  margin-left: auto;
  margin-right: auto;
}
.setting-layer {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10;
  width: 374px;
  height: 416px;
  margin-left: -187px;
  margin-top: -208px;
  background-color: #ffffff;
  box-sizing: border-box;
}
.hide {
  display: none;
}
#remove_bind {
  padding-left: 0;
  padding-top: 0;
}
.little-pop {
  padding-left: 26px;
  padding-top: 10px;
  display: none;
}

#faceUploader {
  padding-left: 0;
  padding-top: 0;
}

.unbind-box {
  padding-left: 30px;
  padding-top: 25px;
}

.tel-validate {
  width: 340px;
  background: #ffffff;
  z-index: 10;
  padding: 30px 30px 0;
  display: none;
}
.unbind-box {
  padding-left: 30px;
  padding-top: 25px;
}

.tel-validate {
  width: 340px;
  background: #ffffff;
  z-index: 10;
  padding: 30px 30px 0;
  display: none;
}
.layer-feedBack {
  padding-top: 0px;
  padding-left: 0px;
}

.uc-subtit {
  font-size: 12px;
  line-height: 2;
  height: 26px;
}

.uc-subtit {
  font-size: 12px;
  line-height: 2;
  height: 26px;
}


.uc-subtit {
  font-size: 12px;
  line-height: 2;
  height: 26px;
}

.s-header {
  height: 60px;
  margin-top: 15px;
}
.s-header .h-nav {
  text-align: center;
}
.item-change {
  min-height: 600px;
}
.item-change .setting-item,
.item-change .notice-item {
  padding: 20px 40px 0 40px;
}
.item-change .setting-item .options {
  margin-top: 20px;
}
.item-change .setting-item .options .title {
  font-size: 14px;
  color: #333333;
  border-bottom: 1px solid #dcdcdc;
  padding-bottom: 20px;
  line-height: 1;
}
.item-change .setting-item .options ul {
  padding-top: 10px;
}
.item-change .setting-item .options ul li {
  height: 32px;
  margin-top: 10px;
}
.item-change .setting-item .options ul li .edit-box {
  float: left;
}
.item-change .setting-item .options ul li .edit-box .txts {
  width: 172px;
  height: 30px;
  line-height: 30px\9;
  border: 1px solid #c8c8c8;
  color: #595959;
  padding: 0 14px;
  border-radius: 3px;
  display: none;
  font-size: 14px;
}
.item-change .setting-item .options ul li .edit-btn {
  color: #818181;
  border: 1px solid #c8c8c8;
}
.item-change .setting-item .options ul li > a {
  float: right;
  min-width: 56px;
  height: 22px;
  text-align: center;
  line-height: 22px;
  font-size: 12px;
  border-radius: 3px;
  margin-top: 3px;
  padding-left: 5px;
  padding-right: 5px;
}
.item-change .setting-item .options ul li .exit-edit {
  color: #4d90fe;
  border: 1px solid #4d90fe;
  display: none;
}
.item-change .setting-item .options ul li > a {
  float: right;
  min-width: 56px;
  height: 22px;
  text-align: center;
  line-height: 22px;
  font-size: 12px;
  border-radius: 3px;
  margin-top: 3px;
  padding-left: 5px;
  padding-right: 5px;
}
.item-change .setting-item .options .save-btn {
  display: block;
  margin-left: 75px;
  width: 56px;
  height: 26px;
  border-radius: 3px;
  background: #4d90fe;
  color: #ffffff;
  text-align: center;
  line-height: 26px;
  margin-top: 10px;
}
.hide2 {
  display: none !important;
}
.item-change .setting-item .options {
  margin-top: 20px;
}
.item-change .setting-item .options .title {
  font-size: 14px;
  color: #333333;
  border-bottom: 1px solid #dcdcdc;
  padding-bottom: 20px;
  line-height: 1;
}
.item-change .setting-item .options ul li .edit-box span {
  display: inline-block;
  line-height: 32px;
  color: #595959;
}
.hide {
  display: none;
}
.item-change .notice-item .title {
  border-bottom: 1px solid #dcdcdc;
  padding: 20px 0 20px;
  line-height: 1;
}

.item-change .notice-item .title h2 {
  font-size: 14px;
}
.item-change .notice-item .l-box {
  width: 498px;
}
.item-change .notice-item .title h3 {
  font-size: 14px;
  font-weight: normal;
}
.item-change .t-tips {
  line-height: 30px;
  color: #aaaaaa;
  margin-top: 30px;
  padding-bottom: 60px;
}
.wenkudownlist .hide {
  display: none;
}
.wenkudownlist .change-box {
  padding: 22px 0;
  border-bottom: 1px solid #dcdcdc;
}
.wenkudownlist .change-box .item {
  text-align: center;
  font-size: 0;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  width: 345px;
  margin: 0 auto;
  height: 34px;
}
.wenkudownlist .change-box .item a:first-child.active {
  left: -1px;
  border-radius: 3px 0 0 3px;
}
.wenkudownlist .change-box .item a.active {
  position: relative;
  height: 36px;
  line-height: 34px;
  background: #4d90fe;
  color: #ffffff !important;
  top: -1px;
}
.wenkudownlist .change-box .item a {
  display: inline-block;
  font-size: 12px;
  width: 115px;
  height: 34px;
  text-align: center;
  line-height: 34px;
  color: #2d2d2d;
}
.wenkudownlist .tableBox {
  padding: 0 40px;
}
.wenkudownlist .table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}
tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
.wenkudownlist .table > tbody > tr > td[align="center"] {
  text-align: center;
}
.wenkudownlist .table > thead > tr > th,
.wenkudownlist .table > tbody > tr > td {
  text-align: left;
  padding: 10px 5px;
  line-height: 1.42857143;
  font-weight: normal;
}
.skin-vip {
  color: rgb(170, 170, 170);
  font-size: 12px;
  height: auto;
  text-align: center;
}
.mask-layer {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #000000;
  top: 0;
  left: 0;
  opacity: 0.3;
  filter: alpha(opacity=30);
  z-index: 9;
}
.hide {
  display: none;
}
.settingclose {
  position: absolute;
  top: -16px;
  right: -16px;
  background: url(/Public/Common/img/icon-setting-close.png) 0 0 no-repeat;
  display: block;
  width: 32px;
  height: 32px;
}
.wechat-container {
  border: 1px #d1d1d1 solid;
  width: 228px;
  height: 228px;
  margin: 0px auto;
  background: url(/Public/Common/img/loading-grey.gif) #ffffff center 70px
    no-repeat;
  background-size: 45px;
  position: relative;
}
.loading-txt {
  display: block;
  position: absolute;
  left: 0;
  top: 120px;
  text-align: center;
  width: 228px;
  color: #5a5a5a;
  font-size: 14px;
  z-index: 0;
}
.wechat-container img {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
}
img {
  border: none;
}
span.bind-wechatuid {
  display: block;
  text-align: center;
  padding-top: 40px;
  font-size: 14px;
  color: #5a5a5a;
}
#remove_bind h3 {
  border-bottom: none;
}
.little-pop .word {
  height: 66px;
  line-height: 66px;
  font-size: 18px;
  color: #aaaaaa;
  font-weight: normal;
  border-bottom: 1px solid #dcdcdc;
  padding-left: 28px;
}
.remove-bind-tip {
  padding-left: 28px;
  padding-right: 28px;
  border-bottom: 1px #ececec solid;
  padding-bottom: 24px;
}
.little-pop .btns {
  padding-right: 26px;
  margin-top: 26px;
  height: 38px;
  text-align: right;
  font-size: 0;
  padding-bottom: 26px;
}
.little-pop .btns .cancel {
  color: #818181;
  margin-right: 15px;
}
.little-pop .btns a {
  display: inline-block;
  width: 84px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  font-size: 16px;
  border-radius: 3px;
}
.little-pop .btns .sure.active {
  background: #357ae8;
  cursor: pointer;
}
.little-pop .btns .sure {
  color: #fff;
  background: #9abdf4;
  cursor: default;
}
.little-pop .btns a {
  display: inline-block;
  width: 84px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  font-size: 16px;
  border-radius: 3px;
}
.uploader-container {
  padding: 10px 30px;
}
.faceUploaderPlus {
  display: inline-block;
  width: 300px;
  height: 300px;
  line-height: 300px;
  text-align: center;
  font-size: 80px;
  color: #78787a;
}
#preview {
  float: left;
  width: 100px;
  height: 100px;
  border: 1px #d1d1d1 solid;
  overflow: hidden;
  margin-left: 20px;
  border-radius: 80px;
}
.unbind-box .title {
  font-weight: normal;
  color: #5a5a5a;
  font-size: 18px;
}
.unbind-box .re-words {
  margin-top: 25px;
  color: #2d2d2d;
}
.little-pop p {
  margin-top: 20px;
  font-size: 14px;
  color: #a9a9a9;
  height: 28px;
  line-height: 28px;
}
.tel-validate .title {
  margin-bottom: 30px;
}
.tel-validate .title a {
  position: absolute;
  width: 30px;
  height: 30px;
  right: 28px;
  top: 28px;
  background: url(/Public/Home/img/close.png) left top no-repeat;
  border-radius: 3px;
}
.tel-validate .words {
  line-height: 30px;
}
.tel-validate .yzm-box .input {
  position: relative;
  height: 56px;
  border-bottom: 1px solid #dcdcdc;
  box-sizing: border-box;
  margin-top: 10px;
}
.fl {
  float: left;
}
.tel-validate .yzm-box .input input {
  width: 130px;
  float: left;
  height: 54px;
  line-height: 54px\9;
  font-size: 16px;
}
.tel-validate .yzm-box .get-yzm {
  float: right;
  width: 126px;
  height: 36px;
  box-sizing: border-box;
  text-align: center;
  line-height: 36px;
  border: 1px solid #dcdcdc;
  background: #f2f2f2;
  border-radius: 3px;
  color: #818181;
  margin-top: 25px;
}
.tel-validate .button {
  background: #357ae8;
  color: #fff;
  display: block;
  border-radius: 5px;
  behavior: url(/Public/Common/PIE.htc);
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  width: auto;
  margin-top: 30px;
}
.unbind-box .re-words {
  margin-top: 25px;
  color: #2d2d2d;
}
.little-pop p {
  margin-top: 20px;
  font-size: 14px;
  color: #a9a9a9;
  height: 28px;
  line-height: 28px;
}
.unbind-box .btns {
  margin-top: 28px;
}
.little-pop .btns {
  padding-right: 26px;
  margin-top: 26px;
  height: 38px;
  text-align: right;
  font-size: 0;
  padding-bottom: 26px;
}
.little-pop .btns .cancel {
  color: #818181;
  margin-right: 15px;
}
.little-pop .btns a {
  display: inline-block;
  width: 84px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  font-size: 16px;
  border-radius: 3px;
}
.little-pop .btns .sure.active {
  background: #357ae8;
  cursor: pointer;
}
.little-pop .btns .sure {
  color: #fff;
  background: #9abdf4;
  cursor: default;
}
.little-pop .btns a {
  display: inline-block;
  width: 84px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  font-size: 16px;
  border-radius: 3px;
}
.tel-validate .title {
  margin-bottom: 30px;
}
.tel-validate .words {
  line-height: 30px;
}
.tel-validate .yzm-box .input {
  position: relative;
  height: 56px;
  border-bottom: 1px solid #dcdcdc;
  box-sizing: border-box;
  margin-top: 10px;
}
.tel-validate .yzm-box .input span {
  width: 70px;
  height: 56px;
  line-height: 56px;
  color: #969696;
  font-size: 16px;
  float: left;
}
.tel-validate .yzm-box .input input {
  width: 130px;
  float: left;
  height: 54px;
  line-height: 54px\9;
  font-size: 16px;
}
.little-pop .btns {
  padding-right: 26px;
  margin-top: 26px;
  height: 38px;
  text-align: right;
  font-size: 0;
  padding-bottom: 26px;
}
.little-pop .btns .cancel {
  color: #818181;
  margin-right: 15px;
}
.little-pop .btns a {
  display: inline-block;
  width: 84px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  font-size: 16px;
  border-radius: 3px;
}
.little-pop .btns .sure {
  color: #fff;
  background: #9abdf4;
  cursor: default;
}
.little-pop .btns a {
  display: inline-block;
  width: 84px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  font-size: 16px;
  border-radius: 3px;
}

.item-change .setting-item .options ul li p {
  float: left;
  min-width: 75px;
  line-height: 32px;
  color: #969696;
}

.s-header .h-nav a.active {
  color: #4d90fe;
}
.s-header .h-nav a:first-child {
  margin-left: 0;
}
.s-header .h-nav a {
  font-size: 14px;
  margin-left: 145px;
  line-height: 40px;
  color: #aaa;
}
</style>




