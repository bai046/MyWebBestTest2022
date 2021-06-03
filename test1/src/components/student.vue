<template>
  <div id="student">
    <h1>这是关于student</h1>
    <p>这是关于内容 这是关于内容 这是关于内容</p>
      <vue-particles
      id="particles-js"
      color="#39AFFD"
      :particleOpacity="0.7"
      :particlesNumber="100"
      shapeType="circle"
      :particleSize="4"
      linesColor="#8DD1FE"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      >
      </vue-particles>
  </div>
</template>

<script>
export default {
  name: "student",
};
</script>

<style>
#particles-js {
  /* background-color: aqua; */
  margin-top: -100px;
}
p {
  color: burlywood;
}
</style>