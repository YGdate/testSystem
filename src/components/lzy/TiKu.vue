<template>
    <div>
        <nav>
            <div class="list-item">
                <router-link class="item" tag="div" to="/list">题库列表</router-link>
            </div>
            <div class="list-item">
                <router-link class="item" tag="div" to="/write">题库录入</router-link>
            </div>
            <div class="list-item">
                <router-link class="item" tag="div" to="/log">日志记录</router-link>
            </div>
        </nav>
        
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<style lang="less" scoped>
nav{
    position: absolute;
    left: 50px;
    top: 200px;
    .list-item{
        margin-bottom: 10px;
        cursor: pointer;
    }
    .item{
        cursor: remote ;
        background-color:cornflowerblue;
        color: #fff;
        padding: 10px 20px;
    }
}
</style>

<script>

export default {

}
</script>