<template>
  <div class="position">
    <div class="left title" @click="goBack">
      <div class="icon">
        <i class="el-icon-caret-left"></i>
      </div>
      <a class="title">返回视频展播台</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "toMain",
  methods: {
    goBack() {
      this.$router.push({
        name: "main"
      })
    }
  }
}
</script>

<style scoped>
.position{
  position: fixed;
  bottom: 20px;
  left: 20px;
}
.left {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  border: rgb(130, 240, 251) 2px solid;
  border-radius: 10px;
}

.left:hover {
  background-color: rgba(0, 55, 64, 0.7);
  transition: background-color 0.5s;
}

.title {
  color: white;
  margin-left: 10px;
  margin-right: 10px;
}
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}
</style>
