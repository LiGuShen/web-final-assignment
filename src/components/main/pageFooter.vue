<template>
  <div class="footer">
    <div class="left title" @click="goBack">
      <div class="icon">
        <i class="el-icon-back"></i>
      </div>
      <a class="title">返回视频展播台</a>
    </div>
    <div @click="Acknowledgements">
      <a class="title right">鸣谢公告</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "pageFooter",
  methods: {
    goBack() {
      this.$router.push({
        name: "main"
      })
    },
    Acknowledgements() {
      this.$router.push({
        name: "acknowledgements"
      })
    }
  }
}
</script>

<style scoped>
.footer {
  color: white;
  font-size: 20px;
  margin: 0 20px;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  line-height: 50px;
  position: fixed;
  bottom: 20px;
}

.left {
  display: flex;
  flex-flow: row;
  border: rgb(130, 240, 251) 2px solid;
  border-radius: 10px;
}

.left:hover {
  background-color: rgba(0, 55, 64, 0.7);
  transition: background-color 0.5s;
}

.right {
  display: flex;
  flex-flow: row;
  border: rgb(130, 240, 251) 2px solid;
  border-radius: 10px;
}

.right:hover {
  background-color: rgba(0, 55, 64, 0.7);
  transition: background-color 0.5s;
}

.title {
  color: white;
  margin-right: 10px;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-left: 10px;
}

.right {
  width: 100px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
