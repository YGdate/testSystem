<template>
  <div class="option_container">
    <div class="option_list">
      <div class="title">{{title}}</div>
      <div class="content">
        <div class="option">
          <span style>A</span>
          <textarea v-model="option_one" class="input"></textarea>
        </div>
        <div class="option">
          <span>B</span>
          <textarea v-model="option_two" class="input"></textarea>
        </div>
        <div class="option">
          <span>C</span>
          <textarea v-model="option_three" class="input"></textarea>
        </div>
        <div class="option">
          <span>D</span>
          <textarea v-model="option_four" class="input"></textarea>
        </div>
        <!-- <div class="delete_container">
          <el-button @click.native="handleDelete" type="text">删除</el-button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style lang="less">
.option_container {
  display: flex;
  flex-direction: column;
  height: 50px;
  .option_list {
    display: flex;
    flex-direction: row;
    .title {
      background-color: #118aff;
      text-align: center;
      line-height: 50px;
      width: 80px;
    }
    .content {
      background-color: #55efc4;
      display: flex;
      align-items: center;
      height: 50px;
      width: 800px;
      padding: 0 40px;
      .input {
        background-color: transparent;
        border-top: 0;
        border-left: 0;
        border-right: 0;
        height: 15px;
        width: 70px;
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
      option_one: "",
      option_two: "",
      option_three: "",
      option_four: ""
    };
  },
  props:{
      title: String,
  },
  methods:{
      handleDelete(){
          this.$emit('handle-delete')
      }
  }
};
</script>