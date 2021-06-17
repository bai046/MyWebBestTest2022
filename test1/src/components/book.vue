<template>
  <div id="things">
    <el-input
      v-model="input"
      placeholder="请输入待办事项"
      @keyup.13.native="add"
    >
      <el-button type="primary" slot="append" @click="addItem"
        >增加事项</el-button
      >
    </el-input>
    <hr />
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="待办事项" name="first">
        <li
          type="none"
          v-for="(value, index) in lists"
          :key="index"
          v-show="!value.finished"
        >
          <el-checkbox v-model="value.finished" @click="changed(value)">{{
            value.name
          }}</el-checkbox>
        </li>
      </el-tab-pane>
      <el-tab-pane label="已办事项" name="second">
        <li
          type="none"
          v-for="(value, index) in lists"
          :key="index"
          v-show="value.finished"
        >
          <el-checkbox v-model="value.finished" @click="changed(value)">{{
            value.name
          }}</el-checkbox>
        </li>
      </el-tab-pane>
      <el-tab-pane label="全部事项" name="third">
        <li type="none" v-for="(value, index) in lists" :key="index">
          <el-checkbox v-model="value.finished" @click="changed(value)">{{
            value.name
          }}</el-checkbox>
        </li>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      activeName: "first",
      lists: [
        { name: "Java编程", finished: true },
        { name: "操作系统", finished: true },
        { name: "计算机网络", finished: false },
      ],
    };
  },
  methods: {
    add() {
      this.addItem();
    },
    addItem() {
      // console.log("增加新事项")
      if (this.input.length > 0) {
        this.lists.push({
          name: this.input,
          finished: false,
        });
      }
      this.input = "";
    },
    changed(value) {
      value.finished = !value.finished;
    },
  },
};
</script>

<style>
#things {
  width: 600px;
  margin: 0 auto;
  margin-top: 130px;
}
</style>