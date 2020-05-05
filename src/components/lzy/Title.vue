<template>
  <div class="top-container">
    <div class="title-top">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scope>
.top-container{
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
}
.title-top {
  display: inline-block;
  font-size: 30px;
  text-align: center;
  background: linear-gradient(to top,#f4c521 20%,transparent 0);
}
</style>

<script>
export default {
  props: {
    name: String
  }
};
</script>