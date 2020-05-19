<template>
  <div class="option_container">
    <div class="option_list">
      <div class="title">{{title}}</div>
      <div class="option_content">
        <textarea v-model="value" class="input"></textarea>
        <div class="delete_container">
          <el-button @click.native="handleDelete" type="text">删除</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scope>
.option_container {
  display: flex;
  height: 50px;
  margin-right: 10px;
  margin-bottom: 10px;
  .option_list {
    display: flex;
    flex-direction: row;
    .title {
      background-color: #118aff;
      text-align: center;
      line-height: 50px;
      width: 80px;
    }
    .option_content {
      background-color: #55efc4;
      display: flex;
      align-items: center;
      height: 50px;
      width: 500px;
      padding: 0 40px;
      .input {
        background-color: transparent;
        border-top: 0;
        overflow: hidden;
        border-left: 0;
        border-right: 0;
        height: 15px;
        width: 200px;
        margin-left: 10px;
        margin-right: 20px;
      }
      .delete_container {
        margin: auto;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      value: ''
    };
  },
  props: {
    title: String,
    textContent: String
  },
  mounted(){
    this.value = this.textContent
  },
  methods: {
    handleDelete() {
      this.$emit("handle-delete");
    }
  }
};
</script>