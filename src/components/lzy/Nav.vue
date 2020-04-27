<template>
    <div class="nav">
        <div class="title">高考在线系统</div>
        <div class="right">
            <img class="autor" src="" alt="">
            <div class="name">lisa</div>
        </div>
    </div>
</template>

<style lang="less" scope>
 .nav{
     height: 60px;
     width: 100%;
     display: flex;
     justify-content: space-around;
     align-items: center;
     background-color: blue;
     .title{
         color: #fff;
     }
     .right{
         display: flex;
         .autor{
             height: 20px;
             width: 20px;
             border-radius: 50%;
             margin-right: 5px;
         }
         .name{
             color:#fff;
         }
     }
 }
</style>

<script>
export default {
    
}
</script>