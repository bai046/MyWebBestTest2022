<template>
  <div id="tabledata">
    abc
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="images" label="图片" width="180">
        <template slot-scope="scope">
          <img :src="scope.row.src" style="width: 100px; height: 50px" />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="商品名称" width="180">
      </el-table-column>
      <el-table-column prop="number" label="商品数量" width="180">
      </el-table-column>
      <el-table-column prop="price" label="商品单价" width="180">
      </el-table-column>
      <el-table-column prop="money" label="商品金额" width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "vue测试监听查询购物车数量以及金额变化",
      // input:'123'
      tableData: [
        {
          src: "../assets/logo.jpg",
          name: "苹果",
          number: 1,
        },
        {
          src: "../assets/logo.png",
          name: "车厘子",
          number: 2,
        },
        {
          src: "../assets/logo.png",
          name: "火龙果",
          number: 3,
        },
        {
          src: "../assets/logo.png",
          name: "百香果",
          number: 4,
        },
      ],
    };
  },
};
</script>

<style>
#tabledata{
  background-color: aquamarine;
  width: 800px;
  height: 500px;
}
</style>