<template>
  <div id="toast" style="opacity: 1;" v-show="loadingIsShowSuc">
    <div class="weui-mask_transparent"></div>
    <div class="weui-toast">
      <i class="weui-icon-success-no-circle weui-icon_toast"></i>
      <p class="weui-toast__content">已完成</p>
    </div>
  </div>
</template>
<script>
import "weui";
export default {
  computed: {
    loadingIsShowSuc() {
      return this.$store.getters.getLoadingIsShowSuc;
    }
  }
};
</script>