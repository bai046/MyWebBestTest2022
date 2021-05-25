<template>
  <div id="help">
    <SNavBar></SNavBar>
    <!-- <SNavBar v-if="this.$root.loginedRoleId =='2'"></SNavBar>
  <CNavBar v-if="this.$root.loginedRoleId =='3'"></CNavBar> -->
  <div id="point">
    
    <div id="biaoqian">
        <li class="dropdown head-dpdn">
            <a style="color:black" class="dropdown-toggle"><i class="el-icon-info" ></i>
              联系我们</a>
            <br>
        </li>
    </div>
    <div class="center">
      <div id="tittle">Get In Touch</div>
      <div id="outline">____________</div>
      <div id="cencer">
        <el-input class="in" v-model="input1" placeholder="Name"></el-input>
        <el-input class="in" v-model="input2" placeholder="Email"></el-input>
        <el-input class="in" v-model="input3" placeholder="Subject"></el-input>
        <el-input  class="in" id = "message" type="textarea" :rows="2" placeholder="Your Message" v-model="textarea"></el-input>
        <el-button type="primary">SENT MESSAGE</el-button>
      </div>
    </div>
  </div>
  </div>
</template>


<script>
import SNavBar from "../components/NavBar/studio";
// import CNavBar from '@/components/NavBar/company';

export default {
  components: { SNavBar },
  data() {
    return {
      img_404,
      img_404_cloud,
      input1: "",
      input2: "",
      input3: "",
      textarea: "",
    };
  },
  computed: {
    message() {
      return "页面找不到了......";
    },
  },
  components: { SNavBar },
  // ,CNavBar
};
</script>

<style>
#point{
    position: relative;
}
.center {
  width: 600px;
  margin: 90px auto;
}
.el-input {
  margin-top: 20px;
}
#biaoqian {
  /* float: left; */
  position: absolute;
  top: -50px;
}
#tittle {
  font-size: 50px;
}
#outline{
    color: brown;
    font-size:20px;
}
.in {
  width: 400px;
}
#message {
  height: 200px;
  /* margin-top:20px;
  margin-left:300px; */
  margin: 20px auto;
}
.el-button{
  text-align: center;
}


/* .header {
  background: transparent;
  padding: 2em 2em;
  position: fixed;
}
.header-left {
  float: left;
}
.container-fluid {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.text-center {
  text-align: center;
}

.contact {
  padding-left: 74%;
  padding-right: 60px;
  padding-top: 30px;
}
.form-group {
  margin-bottom: 15px;
}
.contact textarea {
  background: #fff none repeat scroll 0 0;
  border: 1px solid #e8e8e9;
  border-radius: 4px;
  box-shadow: none;
  color: #333;
  width: 520px;
  padding: 10px;
}
.btn-contact-bg {
  background: #2a80b9 none repeat scroll 0 0 !important;
  border: 2px solid #2a80b9 !important;
  border-radius: 3px;
  box-shadow: none;
  color: #fff !important;
  font-size: 12px;
  text-transform: uppercase;
  transition: all 0.2s ease 0s;
}
.send_message {
  margin-bottom: 30px;
} */
</style>
