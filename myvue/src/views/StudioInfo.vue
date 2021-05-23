<template>
  <div class="studioInfo">
    <!-- <nav-bar></nav-bar> -->
    <div class="wrapper">
      <div class="p-type">
        <div class="project-type">{{ projectName }}</div>
        <div class="pr-type">
          <div class="pro-type">
            <span
              :class="indexType == inxType ? 'project' : ''"
              @click="selectType(item, indexType)"
              v-for="(item, indexType) in StudioInfoItemtype"
              :key="indexType"
              >{{ item }}</span
            >
          </div>
        </div>
      </div>
      <div class="p-type">
        <div class="project-type">{{ serverAddressName }}</div>
        <div class="pr-type">
          <div class="pro-type">
            <span
              :class="indexAddress == inxAddress ? 'serAddress' : ''"
              @click="serverAddressm(item, indexAddress)"
              v-for="(item, indexAddress) in serverAddress"
              :key="indexAddress"
              >{{ item }}</span
            >
          </div>
        </div>
      </div>
      <div class="p-type">
        <div class="project-type">{{ serverEmployeeName }}</div>
        <div class="pr-type">
          <div class="pro-type">
            <span
              :class="indexEmployee == inxEmployee ? 'serEmployee' : ''"
              @click="serverEmployeem(item, indexEmployee)"
              v-for="(item, indexEmployee) in serverEmployee"
              :key="indexEmployee"
              >{{ item }}</span
            >
          </div>
        </div>
      </div>
      <div class="p-type">
        <div class="project-type">{{ sortName }}</div>
        <div class="pr-type">
          <div class="pro-type">
            <span
              :class="indexSort == inxSort ? 'sortc' : ''"
              @click="sortm(item, indexSort)"
              v-for="(item, indexSort) in sort"
              :key="indexSort"
              >{{ item }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="imgWrapper">
      <div class="tidiCenter">
        <div class="tidiImg">
          <img :src="tianding" alt="" class="tidi" />
        </div>
       <div class="imgRight">
          <div class="contentRight">
             <div class="pmName">
          <span>No. </span>
        </div>
        <div class="workPlace">
          <span>工作室名称：</span>
          <span>单位地点：</span>
          <span>已做项目数量：</span>
        </div>
        <div class="evaluate">
          <span>评价</span>
        </div>
        <div class="requireEvaluate">
          <p>需求指标评价:</p>
          <el-rate
            v-model="value1"
            disabled
            show-score
            text-color="#ff9900"
          >
          </el-rate>
           <p>需求指标评价:</p>
          <el-rate
            v-model="value1"
            disabled
            show-score
            text-color="#ff9900"
          >
          </el-rate>
           <p>需求指标评价:</p>
          <el-rate
            v-model="value1"
            disabled
            show-score
            text-color="#ff9900"
          >
          </el-rate>
          <div class="enrollTime">
            <span>13小时前发布0人报名</span>
          </div>
        </div>
          </div>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
import tianding from "@/images/tianding.png";
// import NavBar from '../../components/NavBar/NavBar.vue';
export default {
  data() {
    return {
      tianding,
      value1:4.0,
      StudioInfoItemtype: [
        "全部",
        "Web网站",
        "APP开发",
        "微信公众号",
        "HTML5应用",
        "小程序",
        "其他",
      ],
      serverAddress: [
        "全部",
        "北京",
        "上海",
        "广州",
        "深圳",
        "杭州",
        "河北",
        "山西",
        "四川",
        "重庆",
        "江苏",
        "辽宁",
        "吉林",
      ],
      serverEmployee: [
        "20以下",
        "20-50",
        "50-100",
        "100-150",
        "150-200",
        "200+",
      ],
      sort: [
        "综合评价优先",
        "需求指标评价优先",
        "能力指标评价优先",
        "计划指标评价优先",
      ],
      projectName: "擅长的项目类型：",
      serverAddressName: "服务提供地：",
      serverEmployeeName: "已服务雇主数量：",
      sortName: "排序：",
      inxType: 0,
      inxAddress: 0,
      inxEmployee: 0,
      inxSort: 0,
    };
  },
  methods: {
    selectType(item, indexType) {
      this.inxType = indexType;
    },
    serverAddressm(item, indexAddress) {
      this.inxAddress = indexAddress;
    },
    serverEmployeem(item, indexEmployee) {
      this.inxEmployee = indexEmployee;
    },
    sortm(item, indexSort) {
      this.inxSort = indexSort;
    },
  },
  // components: {NavBar},
};
</script>

<style scoped>
.wrapper {
  width: 900px;
  height: 400px;
  background-color: antiquewhite;
  margin: 40px auto;
  border: 1px solid red;
}
.p-type {
  width: 100%;
  height: 100px;
  /* background-color: aqua; */
  /* position: relative; */
}
.project-type {
  padding-top: 30px;
  padding-left: 20px;
  /* background-color: red; */
}
.p-type .pr-type {
  width: 860px;
  height: 20px;
  /* background-color: rosybrown; */
  /* padding-top: 30px; */
  margin: 20px auto;
  padding-bottom: 9px;
  border-bottom: 1px solid red;
}
.pr-type .pro-type {
  width: 600px;
  margin-left: 70px;
}
.pro-type span {
  margin-left: 20px;
  font-size: 13px;
  cursor: pointer;
}
.project {
  background-color: royalblue;
}
.serAddress {
  background-color: royalblue;
}
.serEmployee {
  background-color: royalblue;
}
.sortc {
  background-color: royalblue;
}
.imgWrapper{
  width: 900px;
  height: 762px;
  margin: 20px auto;
  /* background-color: aquamarine; */
  border: 1px solid rgb(214, 182, 140);
}
.imgWrapper .tidiCenter{
  width: 100%;
  height: 254px;
  /* background-color: red; */
  border-bottom:1px solid rgb(204, 193, 179);
}
.tidiCenter .tidiImg{
  float: left;
  height: 100%;
}
.tidiCenter .imgRight{
  /* background-color: aqua; */
  height: 100%;
  margin-left: 20px;
  width: 600px;
  float: left;
}
.contentRight .pmName{
  height: 20px;
  /* background-color: bisque; */
  margin-top: 5px;
}
.contentRight .workPlace{
  font-size: 12px;
  margin-top: 6px;
  /* background-color: blue; */
}
.workPlace span{
  margin-right: 20px;
}
.evaluate{
  margin-top: 5px;
}
.requireEvaluate{
  font-size: 13px;
}
.requireEvaluate p{
  margin-top: 4px;
}
.enrollTime{
  color: rgb(134, 142, 150);
}
</style>