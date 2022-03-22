// 引入ANGLE_instanced_arrays
var Mock=require("mockjs")
// 请求地址，请求方法（post/get）,require(请求数据地址)
Mock.mock("/test/user","get",require("./data/home.json"))