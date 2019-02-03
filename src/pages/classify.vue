<template>
  <div>
   <Wsearch></Wsearch>
    <div>$route.params.userId: {{ $route.params.userId }} $route.meta.skill:{{ $route.meta.skill }}</div>
    classify
  </div>
</template>
<script>
import Wsearch from "../components/Wsearch.vue";
export default {
  components: {
    Wsearch,

  }
} 

</script>
<style scoped>

</style>