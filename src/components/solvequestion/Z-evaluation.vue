<template>
<div class="evaluation">
  <div class="backs" @click="$router.go(-1)">
      返回
    </div>
     <p class="c1">英语评测</p>
    <div class="c2"></div>
    <div class="e-top">
        <div class="e-tt">
            自定义快速测评
        </div>
        <el-select v-model="value" placeholder="请选择" class="elone">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select><el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <p class="ep">
      <el-button type="primary" @click="dialogVisible = true">开始测评</el-button>
  </p>
    </div>
        <div class="e-bottom">
            <div class="e-tt">
            搜索测评
        </div>
         <el-input
    placeholder="请输入内容"
    prefix-icon="el-icon-search"
    style="width: 440px;margin-left:270px"
    >
  </el-input>
  <div class="bcon">
      <p>考试进行中.......</p>
      <p>大记号，这里是考试规则</p>
       <el-button type="success" class="shenqing">申请测评</el-button>
  </div>
        </div>


        <!-- 弹出框 -->
    <el-dialog
  :visible.sync="dialogVisible"
  width="30%">
 <el-input v-model="zhengma" placeholder="请输入内容"></el-input>

  <span slot="footer" class="dialog-footer">
  <el-button type="primary">进入评测</el-button>
  </span>
</el-dialog>
</div>
</template>



<script>
  export default {
       data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        zhengma:''
        ,
         dialogVisible: false
      }
    }
  }
</script>
<style lang="less" scoped>
.backs{
    height: 40px;
  width: 115px;
  background: rgb(51,77,148);
  color: white;
  position: fixed;
  top: 200px;
  left: 0;
  text-align: center;
  line-height: 40px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 5px;
}
.ep{
    text-align: center;
}
.elone{
    margin-left: 270px;
    margin-right: 10px;
}
.evaluation{
    width: 1000px;
    min-height: 500px;
    margin: 0 auto;
    margin-top: 40px;
}
.c1{
  font-size: 30px;
  text-align: center;
  font-weight: 600;

}
.c2{
  height: 12px;
  width: 120px;
  background: rgb(217,169,56);
  margin: 0 auto;
  position: relative;
  top: -42px;
 opacity: .7;
}
.e-top{
    width: 1000px;
    height: 150px;
    background: white;
    border-radius: 7px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) !important;
}
.e-tt{
    height: 30px;
    width: 100%;
    background: rgb(104,181,246);
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    box-sizing: border-box;
    padding-left: 20px;
    font-weight: 600;
    line-height: 30px;
    color: white;
    margin-bottom: 15px;
}
.e-bottom{
     width: 1000px;
    min-height: 380px;
    background: white;
    border-radius: 7px;
    margin-top: 20px;
    box-sizing: border-box;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) !important;
}
.bcon{
     width: 600px;
     min-height: 200px;
     border-radius: 7px;
     background: rgb(105,181,246);
     margin: 0 auto;
     margin-top: 15px;
     padding: 15px;
     position: relative;
}.bcon p{
    color: white;
    font-weight: 600;
}
.bcon p:nth-child(1){
    color: rgb(54,81,151);
    font-weight: 600;
}
.shenqing{
    position: absolute;
    bottom: 15px;
    right: 15px;
}
.d1{
  width: 200px;
  height: 100px;
  background: yellow;
}
</style>