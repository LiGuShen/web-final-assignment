<template>
  <div>
    <Row>
      <Col offset="2" span="20">
        <el-carousel :interval="4000" type="card" height="400px">
          <el-carousel-item v-for="item in topic.length" :key="item" >
            <router-link :to="topic[item-1].url">
              <h3  class="medium">{{topic[item-1].name}}</h3></router-link>
          </el-carousel-item>
        </el-carousel>
      </Col>
    </Row>
  </div>
</template>

<script>
import Particles from "@/components/common/particles";
export default {
  name: "topic",
  components: {Particles},
  data() {
    return {
      topic:[{url:'/scientists/medical',name:"生物医学"},
        {url:'/scientists/theSeaOfStars',name:"星辰大海"},
        {url:'/scientists/traffic',name:"交通网络"},
        {url:'/scientists/military',name:"军事国防"},
      ]
    }
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  /*color: #475669;*/
  color: white;
  font-size: 100px;
  opacity: 0.75;
  line-height: 400px;
  margin: 0;
  text-align: center;
}
.ivu-col-offset-2{
  margin-top: 50px;
  margin-bottom: 50px;
}
.el-carousel__item{
  background-color: transparent;
  border-radius: 30px;
  color: #475669;
  opacity: 0.2;
}
.is-active{
  opacity: 1;
  color: white;
  background-color:rgba(130, 240, 251,0.45) ;
  border: rgb(130, 240, 251) 2px solid;
}
</style>
