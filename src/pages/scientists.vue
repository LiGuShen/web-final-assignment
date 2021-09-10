<template>
  <div>
<!--    <video id='bgVideo' autoplay loop muted src="@/assets/img/video/开头视频.mp4"></video>-->
    <page-header>
      <div>人物馆</div>
    </page-header>
    <router-view></router-view>
    <toAcknowledgementPageButton></toAcknowledgementPageButton>
    <ToMain></ToMain>
    <particles></particles>
  </div>
</template>

<script>

import PageHeader from "@/components/main/pageHeader";
import Topic from "@/components/scientist/topic";
import ToAcknowledgementPageButton from "@/components/main/toAcknowledgementPageButton";
import ToMain from "@/components/main/toMain";
import Particles from "@/components/common/particles";
export default {
  name: "scientists",
  components:{
    Particles,
    PageHeader,
    Topic,
    ToAcknowledgementPageButton,
    ToMain
  }
}
</script>

<style scoped>
.bg{
  width: 100%;
  background-color: #080f27;
  position: fixed;
  top: 0;
  z-index: -1;
}

</style>
