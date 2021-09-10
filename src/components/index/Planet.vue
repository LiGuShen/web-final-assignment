<template>
  <div>
    <h1>科技星球</h1>
    <video id='bgVideo' autoplay loop muted src="@/assets/img/video/开头视频.mp4"></video>
    <!-- <video id='bgVideo' autoplay loop muted src="https://partykeji.oss-cn-beijing.aliyuncs.com/%E5%BC%80%E5%A4%B4%E8%A7%86%E9%A2%91.mp4"></video> -->
    <button id="btn1" @click="changeText">{{text[now]}}</button>
  </div>
</template>

<script>
export default {
  name: "Planet",
  data() {
    return {
      modal1: false,
      now : 0,
      text : ["亲爱的，你好。欢迎来到科技星球","这里是2021年","在过去的一年里，我们经历了严峻的疫情，每个人都不能独善其身",
        "我们同心协力，共同战胜了这场与病毒的战役","2021在万物复苏中迎面走来，也同样迎来了中国共产党成立100周年的时间节点",
        "历史车轮滚滚向前，新时代潮流浩浩荡荡","我们踏着先人的肩膀，才站到了今天的位置","追溯到100年前",
        "你是否知晓，中国科技道路经历了怎样的艰难险阻？","又是否知晓，如今的中国，已经取得了怎样的伟大成就？",
        "一张张照片档案、一件件实物、一册册史志","谱写出一代代劳动人民的故事，留下了无数革命先辈的足迹，承载了数以万计大通人的记忆",
        "历史见证百年党史的春华秋实、岁物丰成，它留住最真实、最宝贵、最朴实的奋斗经验和抗争经验","让我们一起见证中国科技奇迹","点击进入科技星球","点击进入科技星球","点击进入科技星球"],
    }
  },
  methods: {
    changeText() {
      if (this.now >= 14) {
        this.$router.push({
          name:'main'
        })
      }
      else
        this.now++;
    }
  }
}
</script>

<style scoped>
@font-face
{
  font-family: 汉仪雪君体简;
  /* src: url('https://partykeji.oss-cn-beijing.aliyuncs.com/%E6%B1%89%E4%BB%AA%E9%9B%AA%E5%90%9B%E4%BD%93%E7%AE%80.TTF') */
  src: url('../../assets/font/汉仪雪君体简.TTF')
}
h1
{
  font-family:汉仪雪君体简;
}
button
{
  font-family: 汉仪雪君体简;
}
* {
  padding: 0;
  margin: 0;
}

h1{
  background: rgba(0, 0, 0, 0);
  position: absolute;
  color: rgb(10, 87, 99);
  /* left: 46%; */
  top: 3%;
  left: 50%;
  transform: translateX(-50%);
  text-shadow: 2px 2px 2px #16abf0;
}

button {
  margin-left: 50%;
  margin-top: 40vh;
  transform: translateX(-50%);
  font-variation-settings: 'wght' 400,'slnt' 0;
  border: rgb(130,240,251) 2px solid;
  appearance: none;
  font-size: 20px;
  line-height: 30px;
  padding: 10px 30px;
  border-radius: 9999px;
  background: rgb(10, 87, 99);
  color: rgb(216, 216, 216);
  transition: color .4s ease-out,background .4s ease-out;
  cursor: pointer;
  /* -webkit-writing-mode: horizontal-tb !important; */
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
  /*font: 400 13.3333px Arial;*/
  font-size: 2.3em;
  transition: 1s;
}

button:hover{
  background-color: rgba(0, 55, 64,0.7);
}

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
