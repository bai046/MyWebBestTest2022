<template>
  <div>
    <ul>
      <li class="lis" v-for="(item, index) in datas" :key="index">
        <div class="img-1">
          <img :src="item.img" />
        </div>
        <div class="content">
          <div class="line1">{{ item.line1 }}</div>
          <div class="line2">{{ item.line2 }}</div>
          <div class="line3">{{ item.line3 }}</div>
          <div class="line4">{{ item.line4 }}</div>
          <div class="line5">
            <span class="one"
              ><i class="el-icon-eleme">{{ item.line5[0].one }}</i>
            </span>
            <span>
              <i class="el-icon-eleme">{{ item.line5[0].two }}</i></span
            >
            <span
              ><i class="el-icon-star-off">{{ item.line5[0].three }}</i></span
            >
            <span
              ><i class="el-icon-share">{{ item.line5[0].four }}</i></span
            >
            <span class="five">{{ item.line5[0].five }}</span>
            <span class="six">{{ item.line5[0].six }}</span>
            <span class="seven">{{ item.line5[0].seven }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import logo from "../assets/logo.png";
import one from "../assets/logo.png"
import two from "../assets/logo.png"
import three from "../assets/logo.png"
export default {
  data() {
    return {
      logo,
      datas: [
        { 
          img:one,
          line1: "88VIP：Apple 苹果 iPhone 12 5G智能手机 128GB",
          line2: "5099元包邮（需用券）",
          line3:
            "数码潮人 价格低于双11 入选DXOMARK手机录像分数排行榜 18篇选购指南",
          line4:
            "A14仿生芯片，升级5G。iPhone 12是苹果的第一代5G手机之一。在同代四款产品中，它的6.1英寸屏幕大小居中，重量仅有162克，厚度7.4mm，保持着相... 阅读全文",
          line5: [
            {
              one: 58,
              two: 47,
              three: 86,
              four: 90,
              five: "10:26",
              six: "京东",
              seven: "去购买",
            },
          ],
        },
        {
          img:two,
          line1: "Schvodon 舒动 sd-0016yj 水阻划船机 白蜡木16叶桨",
          line2: "1299元（包邮，需用券）",
          line3: "绝对值 历史低价 比上次发布低34%",
          line4:
            "有效增强肌肉的活力、协调性整机尺寸：2115*520*580mm，身高2米以内人士均适用。舒动新款划船机采用上下环绕式16叶桨，同等水量下，入水面积是普通2叶桨... 阅读全文",
          line5: [
            {
              one: 67,
              two: 57,
              three: 96,
              four: 40,
              five: "10:50",
              six: "京东",
              seven: "去购买",
            },
          ],
        },
        {
          img:three,
          line1: "MUJI 无印良品 黄麻简易收纳袋 A6",
          line2: "14元",
          line3:
            "生活用品热度Top8 商品好评率98%",
          line4:
            "由黄麻素材制成有多用途的购物袋京东无印良品MUJI官方旗舰店目前售价14元包邮，购买过的用户表示：大小刚刚好，但是又很能装东西，袋子里面还加了一层塑料的东西，用... 阅读全文",
          line5: [
            {
              one: 58,
              two: 47,
              three: 86,
              four: 90,
              five: "10:26",
              six: "京东",
              seven: "去购买",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.lis {
  width: 810px;
  height: 210px;
  border: 1px solid aquamarine;
  list-style: none;
  background-color: bisque;
  margin: 0 auto;
}
.img-1 {
  float: left;
  width: 200px;
  height: 200px;
}
.img-1 img {
  width: 100%;
  height: 100%;
}
.content {
  margin-left: 250px;
}
.line1 {
  font-size: 18px;
  margin-top: 8px;
}
.line2 {
  color: red;
  font-size: 18px;
  margin-top: 5px;
}
.line3 {
  font-size: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.line5 {
  margin-top: 15px;
}
.line5 span {
  margin-right: 10px;
}
.line5 .five {
  margin-left: 180px;
  font-size: 12px;
}
.line5 .seven {
  display: inline-block;
  background: red;
  width: 90px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
</style>