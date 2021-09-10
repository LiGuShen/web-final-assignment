<template>
  <div>
    <page-header>
      <div v-if="currentVideo===-1">视频展播台</div>
      <div v-else>视频展播台·{{VideoItem[currentVideo].name}}</div>
    </page-header>
    <div class="center">
      <div class="carousel">
        <el-carousel height="120px" :autoplay="false" type="card" @change="SwitchVideo">
          <el-carousel-item v-for="item in VideoItem" :key="item.index" v-cloak>
            <div></div>
            <img :src="item.picture" style="height: 100%;" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div>
      <video id='bgVideo' autoplay loop :src="currentVideoUrl"></video>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/main/pageHeader";

export default {
  name: "Video",
  data: function () {
    return {
      currentVideo:-1,
      currentVideoUrl: require('@/assets/img/video/背景视频.mp4'),
      VideoItem: [
        {name:'星辰大海',url: require("@/assets/img/video/视频1.mp4"), picture: require("@/assets/img/videoPicture/1.png")},
        {name:'军事国防',url: require("@/assets/img/video/视频2.mp4"), picture: require("@/assets/img/videoPicture/2.png")},
        {name:'数据时代',url: require("@/assets/img/video/视频3.mp4"), picture: require("@/assets/img/videoPicture/3.png")},
        {name:'交通网络',url: require("@/assets/img/video/视频4.mp4"), picture: require("@/assets/img/videoPicture/4.png")},
        {name:'生命医学',url: require("@/assets/img/video/视频5.mp4"), picture: require("@/assets/img/videoPicture/5.png")},
        {name:'百年征程',url: require("@/assets/img/video/视频6.mp4"), picture: require("@/assets/img/videoPicture/6.png")},
      ],
    }
  },
  methods: {
    SwitchVideo(e) {
      this.currentVideoUrl = this.VideoItem[e].url
      this.currentVideo = e
    }
  },
  components: {
    PageHeader
  }
}
</script>

<style scoped>

[v-cloak] {
  display: none;
}

video {
  position: absolute; /* 绝对定位 */
  top: 0; /* 距上部 */
  left: 0; /* 距左部 */
  width: 100%;
  height: 100%;
  object-fit: cover; /*可替换元素如何适应，此处为裁剪到合适的大小*/
  /* object-fit: contain; */
}

#bgVideo {
  position: absolute; /* 绝对定位 */
  z-index: -1;
  top: 0; /* 距上部 */
  left: 0; /* 距左部 */
  width: 100%;
  height: 100%;
  object-fit: cover; /*可替换元素如何适应，此处为裁剪到合适的大小*/
  /* object-fit: contain; */
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  /*line-height: 300px;*/
  margin: 0;
}

.carousel {
  width: 420px;
  position: fixed;
  bottom: 10px;
  opacity: 30%;
}

.carousel:hover {
  opacity: 100%;
  transition: opacity 0.3s;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

/*.el-carousel__item:nth-child(2n) {*/
/*  background-color: #99a9bf;*/
/*}*/

/*.el-carousel__item:nth-child(2n+1) {*/
/*  background-color: #d3dce6;*/
/*}*/

/*.el-carousel__item {*/
/*  background-color: rgba(0,0,0,0) !important;*/
/*}*/

/*.el-carousel {*/
/*  background-color: rgba(0,0,0,0) !important;*/
/*}*/
</style>

