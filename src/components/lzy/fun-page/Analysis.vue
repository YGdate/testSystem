<template>
  <div class="analysis">
    <div class="title">{{title}}</div>
    <input
      :value="content"
      v-on:input="$emit('input',$event.target.value)"
      :style="{width: width,background: bgr}"
      class="content"
      :placeholder="placeholder"
      type="text"
    />
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
.analysis {
  display: flex;
  margin-bottom: 10px;
  margin-right: 10px;
  .title {
    background-color: #118aff;
    color: #fff;
    height: 54px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    border: 0;
    padding: 0 10px;
    height: 50px;
    border: 2px solid #118aff;
  }
}
</style>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "450px"
    },
    title: String,
    placeholder: {
      type: String,
      default: "请输入相关内容"
    },
    bgr: String,
    content: String
  }
};
</script>