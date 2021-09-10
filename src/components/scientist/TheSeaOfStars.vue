<template>
  <div>
    <Row>
      <Col span="20" offset="2">
        <el-carousel :interval="4000" type="card" height="400px">
          <el-carousel-item class="carouselItem" v-for="item in 3" :key="item">
            <img :src="imgsrc[item-1]" alt="">
          </el-carousel-item>
        </el-carousel>
      </Col>
    </Row>
   <return-topic></return-topic>
  </div>
</template>


<script>
import PageHeader from "@/components/main/pageHeader";
import ToAcknowledgementPageButton from "@/components/main/toAcknowledgementPageButton";
import ToMain from "@/components/main/toMain";

import router from "@/router";
import Particles from "@/components/common/particles";
import ReturnTopic from "@/components/scientist/returnTopic";

export default {
  name: "TheSeaOfStars",
  components: {
    ReturnTopic,
    Particles,
    PageHeader,
    ToAcknowledgementPageButton,
    ToMain
  },
  data() {
    return {
      imgsrc: [
        require("../../assets/img/scientist/钱学森.jpg"),
        require("../../assets/img/scientist/赵九章.jpg"),
        require("../../assets/img/scientist/姚桐斌.jpg")
      ]
    }
  },
  methods: {
    gototopic() {
      router.push('/scientists')
    }
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.ivu-col-offset-2{
  margin-top: 50px;
  margin-bottom: 50px;
}
img {
  width: 100%;
}
</style>
