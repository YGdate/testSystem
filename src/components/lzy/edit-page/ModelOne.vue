<template>
  <div class="editContainer">
    <div @click="handleClose" class="close">
      <i class="el-icon-error"></i>
    </div>
    <div class="model_one_content">
      <analysis :content="edit_data.title" title="题干"></analysis>
      <tmsz v-on:get-option="getOption($event)"></tmsz>
    </div>
    <div class="model_one_end">
        <el-button @click.native="handleSubmit" type="primary">确认修改</el-button>
    </div>
  </div>
</template>

<style lang="less">
.editContainer {
  padding: 10px;
  z-index: 100;
  height: 500px;
  width: 700px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  .close {
    float: right;
    cursor: pointer;
  }
  .model_one_content{
      margin-top: 40px;
  }
  .model_one_end{
      display: flex;
      justify-content: center;
      margin-top: 20px;
  }
}
</style>

<script>
import Analysis from "../fun-page/Analysis";
import Tmsz from '../fun-page/Tmsz'
export default {
  components: {
    Analysis,
    Tmsz
  },
  props:{
      editData: Object
  },
  data() {
    return {
      title: "",
      model_option: Object
    };
  },
  computed:{
      edit_data(){
          return this.editData
      }
  },
  methods: {
    handleClose() {
      this.$emit("handle-close");
    },
    handleSubmit(){
        console.log(this.editData)
    },
    getOption(event){
        this.model_option = event
    }
  }
};
</script>