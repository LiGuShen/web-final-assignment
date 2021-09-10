<template>
  <div>
    <Row>
      <Col span="20" offset="2">
        <el-carousel  :interval="4000" type="card" height="400px">
          <el-carousel-item class="carouselItem" v-for="item in 3" :key="item">
            <img :src="imgSrc[item-1]" alt="">
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
import router from "@/router";
import ToMain from "@/components/main/toMain";
import Particles from "@/components/common/particles";
import ReturnTopic from "@/components/scientist/returnTopic";

export default {
  name: "Traffic",
  components: {
    ReturnTopic,
    Particles,
    PageHeader,
    ToAcknowledgementPageButton,
    ToMain

  },
  data() {
    return {
      imgSrc: [
        require("../../assets/img/scientist/吕关仁.jpg"),
        require("../../assets/img/scientist/沙庆林.jpg"),
        require("../../assets/img/scientist/张秋.jpg")
      ]
    }
  },
  methods: {

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

img {
  width: 100%;
}
.ivu-col-offset-2{
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
