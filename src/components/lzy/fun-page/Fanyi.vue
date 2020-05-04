<template>
    <div class="fun-container">
        <top>翻译</top>
        <div class="row">
            <div class="left">
                <div class="title">翻译文本</div>
                <div class="content">sdfsdfsdfdsfsf</div>
            </div>
            <div class="right">
                <div class="title">翻译范文</div>
                <div class="content">sdfsdfdsfsdf</div>
            </div>
        </div>
        <div class="label">
            重点词汇 <span class="item">thing</span> <span class="item">thing</span>
        </div>
        <tmsz></tmsz>
        <div class="end">
            <el-button type="primary">确定录入</el-button>
        </div>
    </div>
</template>

<style lang="less" scope>
    @import url("./common.less");

    .row{
        display: flex;
        .left,
        .right{
            width: 350px;
            margin-right: 15px;
            height: 270px;
              box-shadow: 2px 2px 1px gainsboro, -2px -2px 1px gainsboro;
            padding: 10px;
            .title{
                margin-bottom: 10px;
            }
        }
    }
    .label{
        margin: 20px 0;
        .item{
            background-color: #118aff;
            color: #fff;
            border-radius: 15px;
            padding: 4px 5px;
        }
    }
</style>

<script>
import Tmsz from './Tmsz'
import Top from "../Title";

export default {
    components:{
        Tmsz,
        Top
    }
}
</script>