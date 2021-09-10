<template>
  <div>
    <Row>
      <Col span="20" offset="2">
        <el-carousel class="carousel" :interval="4000" type="card" height="400px">
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
import router from "@/router";
import ToMain from "@/components/main/toMain";
import ToAcknowledgementPageButton from "@/components/main/toAcknowledgementPageButton";
import Particles from "@/components/common/particles";
import ReturnTopic from "@/components/scientist/returnTopic";

export default {
  name: "Medical",
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
        require("../../assets/img/scientist/屠呦呦.jpg"),
        require("../../assets/img/scientist/赵振东.jpg"),
        require("../../assets/img/scientist/钟南山.jpg")
      ]
    }
  },
  methods: {
    goToTopic() {
      router.push('/scientists')
    }
  }
}
</script>

<style scoped>
.center{
  display: flex;
  justify-content: center;
  align-items: center;
}
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
