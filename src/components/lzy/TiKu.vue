<template>
    <div>
        <nav>
            <div class="list-item">
                <router-link class="item" tag="div" to="/list">题库列表</router-link>
            </div>
            <div class="list-item">
                <router-link class="item" tag="div" to="">题库录入</router-link>
            </div>
            <div class="list-item">
                <router-link class="item" tag="div" to="">日志记录</router-link>
            </div>
        </nav>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<style lang="less" scoped>
nav{
    position: absolute;
    left: 40px;
    top: 200px;
    .list-item{
        margin-bottom: 10px;
    }
    .item{
        cursor: remote ;
        background-color:cornflowerblue;
        color: #fff;
        padding: 10px 20px;
    }
}
.content{
    position: absolute;
    top: 150px;
    left: 300px;
}
</style>

<script>
export default {
    
}
</script>