<template>
  <div>
    <Video></Video>
    <to-scientist-page-button></to-scientist-page-button>
  </div>
</template>

<script>
import Video from "@/components/main/Video";

import ToScientistPageButton from "@/components/main/toSciencistPageButton";
export default {
// name: "main",
  name: "Main",
  components: {ToScientistPageButton,Video}
}
</script>

<style scoped>

</style>
