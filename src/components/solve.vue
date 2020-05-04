<template>
<div class="box">
 <SHeader></SHeader>
 <router-view></router-view>
</div>
</template>
<script>
import SHeader from './solvequestion/S-header'
  export default {
    components:{
SHeader,
    },
    methods: {
      
    },
    
  }
</script>

<style lang="less" scoped>
  .box{
      height: 100%;
      width: 100%;
      background: white;
      min-width: 1200px;
  }
</style>