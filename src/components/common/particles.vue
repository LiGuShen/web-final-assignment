<template>
  <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="bg"
  >
  </vue-particles>
</template>

<script>
export default {
name: "particles"
}
</script>

<style scoped>
.bg{
  width: 100%;
  height: 100%;
  background-color: #080f27;
  position: fixed;
  top: 0;
  z-index: -1;
}
</style>