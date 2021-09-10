<template>
  <div class="header">
    <div class="left title" @click="goBack">
      <div class="icon">
        <i class="el-icon-caret-left"></i>
      </div>
      <a class="title">离开星球</a></div>
    <div class="content">
      <div class="icon">
        <img src="@/assets/img/网页图标.png" style="width:45px;height: 40px" alt=""/>
      </div>
      <slot></slot>
      </div>
    <div class="right">©️ 科技星球团队制作</div>
  </div>
</template>

<script>
export default {
name: "pageHeader",
  methods: {
    goBack() {
      this.$router.push({
        name: "index"
      })
    }
  }
}
</script>

<style scoped>
.header{
  font-size: 20px;
  margin:20px 20px;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-around;
  line-height: 50px;
  color: white;
  transition:color 0.5s;
}
.header:hover{
  color: white;
  font-size: 20px;
  transition:color 0.5s;
}
.left{
  display: flex;
  flex-flow: row;
  border: rgb(130,240,251) 2px solid;
  border-radius: 10px;
}
.left:hover{
  background-color: rgba(0, 55, 64,0.7);
  transition: background-color 0.5s;
}
.title{
  color: white;
  margin-right: 10px;
}
.icon{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-left: 10px;
}
.content{
  color: white;
  font-size: 30px;
  text-align: center;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  line-height: 50px;
  flex-grow: 2;
}

.right{
  font-size: 15px;
  margin-right: 10px;
}
</style>
