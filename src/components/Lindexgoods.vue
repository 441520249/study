<template>
<div class="box">
    <div class="content">
      <Lindexgoods_box></Lindexgoods_box>
      <Lindexgoods_box></Lindexgoods_box>
    </div>
    <div class="content">
        <Lindexgoods_box></Lindexgoods_box>
        <Lindexgoods_box></Lindexgoods_box>
    </div>
    </div>
</template>
<script>
import Lindexgoods_box from "./Lindexgoods_box";
export default {
  components: {
      Lindexgoods_box
  },

}
</script>
<style scoped>
.box{
    padding-bottom:80px;
}
.content{
    display:flex;
    justify-content:space-around;
    margin-top:20px;
}



</style>