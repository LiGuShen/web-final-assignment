<template>
  <div>
    <page-header>
      <div>鸣谢公告</div>
    </page-header>
    <video id='bgVideo' autoplay muted src="@/assets/img/video/鸣谢公告-8.mp4"></video>
  </div>
</template>

<script>

import PageHeader from "@/components/main/pageHeader";

export default {
  components: {
    PageHeader
  },
  name: "Acknowledgements",
}


</script>

<style scoped>

#bgVideo {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
