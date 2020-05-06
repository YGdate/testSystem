<template>
  <div class="write-container">
    <div class="top">
      <router-link class="title" tag="div" to="/write/single">单题录入</router-link>
      <router-link class="title" tag="div" to="/write/more">批量录入</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="less" scoped>
.write-container {
  width: 900px;
  .top { 
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    flex-wrap: wrap;
    font-size: 30px;
  }
  .title {
      cursor: pointer;
      margin-right: 30px;
      background: linear-gradient(to top,#f4c521 20%,transparent 0)
  }
}
</style>

<script>
export default {};
</script>