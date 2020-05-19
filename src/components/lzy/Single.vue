<template>
  <div class="card">
    <router-link tag="div" to="/dxuan" class="img-danx item">
      <div class="bgr">单选题</div>
    </router-link>
    <router-link tag="div" to="/duoxuan" class="img-duox item">
      <div class="bgr">多选题</div>
    </router-link>
    <router-link tag="div" to="/bdx" class="img-bd item">
      <div class="bgr">不定项选择</div>
    </router-link>
    <router-link tag="div" to="/panduan" class="img-pd item">
      <div class="bgr">判断题</div>
    </router-link>
    <router-link tag="div" to="/tiankong" class="img-tk item">
      <div class="bgr">填空题</div>
    </router-link>
    <router-link tag="div" to="/qxw" class="img-qxw item">
      <div class="bgr">7选5</div>
    </router-link>
    <router-link tag="div" to="/wxtk" class="img-wx item">
      <div class="bgr">完型填空</div>
    </router-link>
    <router-link tag="div" to="/xuanci" class="img-xc item">
      <div class="bgr">选词填空</div>
    </router-link>
    <router-link tag="div" to="/dwgc" class="img-dw item">
      <div class="bgr">短文改错</div>
    </router-link>
    <router-link tag="div" to="/fanyi" class="img-fy item">
      <div class="bgr">翻译</div>
    </router-link>
    <router-link tag="div" to="/ydlj" class="img-yd item">
      <div class="bgr">阅读理解</div>
    </router-link>
    <router-link tag="div" to="/tingli" class="img-zw item">
      <div class="bgr">作文</div>
    </router-link>
    <router-link tag="div" to="/zuowen" class="img-tl item">
      <div class="bgr">听力</div>
    </router-link>
  </div>
</template>

<style lang="less" scoped>
.card {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: 50px;
  .item {
    cursor: pointer;
    border-radius: 5px;
    margin-right: 40px;
    margin-bottom: 10px;
    height: 130px;
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
}

.img-danx {
  background: url("./img/danxuan.png") no-repeat;
  background-size: 60px 60px;
  background-position: 30px 10px;
  box-shadow: 1px 1px 2px gainsboro, -1px -1px 2px gainsboro;
  .bgr {
    margin-top: 60px;
    color: black;
  }
}
.img-duox {
  box-shadow: 1px 1px 2px gainsboro, -1px -1px 2px gainsboro;
  background: url("./img/duoxuan.png") no-repeat;
  background-size: 60px 60px;
  background-position: 30px 10px;
  .bgr {
    margin-top: 60px;
    color: black;
  }
}
.img-bd {
  box-shadow: 1px 1px 2px gainsboro, -1px -1px 2px gainsboro;
    background: url("./img/budingxiang.png") no-repeat;
    background-size: 60px 60px;
  background-position: 30px 10px;
  .bgr {
    margin-top: 60px;
    color: black;
  }
}
.img-pd {
  box-shadow: 1px 1px 2px gainsboro, -1px -1px 2px gainsboro;
    background: url('./img/panduanti.png') no-repeat;
    background-size: 60px 60px;
  background-position: 30px 10px;
  .bgr {
    margin-top: 60px;
    color: black;
  }
}
.img-tk {
  box-shadow: 1px 1px 2px gainsboro, -1px -1px 2px gainsboro;
    background: url("./img/tiankong.png") no-repeat;
    background-size: 60px 60px;
  background-position: 30px 10px;
  .bgr {
    margin-top: 60px;
    color: black;
  }
}
.img-qxw {
  box-shadow: 1px 1px 2px gainsboro, -1px -1px 2px gainsboro;
    background: url("./img/qixuan5.png") no-repeat;
    background-size: 60px 60px;
  background-position: 30px 10px;
  .bgr {
    margin-top: 60px;
    color: black;
  }
}
.img-wx {
  box-shadow: 1px 1px 2px gainsboro, -1px -1px 2px gainsboro;
    background: url("./img/wanxing.png") no-repeat;
    background-size: 60px 60px;
  background-position: 30px 10px;
  .bgr {
    margin-top: 60px;
    color: black;
  }
}
.img-xc {
  box-shadow: 1px 1px 2px gainsboro, -1px -1px 2px gainsboro;
    background: url("./img/xuancitiankong.png") no-repeat;
    background-size: 60px 60px;
  background-position: 30px 10px;
  .bgr {
    margin-top: 60px;
    color: black;
  }
}
.img-dw {
  box-shadow: 1px 1px 2px gainsboro, -1px -1px 2px gainsboro;
    background: url("./img/duanwengaicuo.png") no-repeat;
    background-size: 60px 60px;
  background-position: 30px 10px;
  .bgr {
    margin-top: 60px;
    color: black;
  }
}
.img-fy {
  box-shadow: 1px 1px 2px gainsboro, -1px -1px 2px gainsboro;
    background: url("./img/fanyi.png") no-repeat;
    background-size: 60px 60px;
  background-position: 30px 10px;
  .bgr {
    margin-top: 60px;
    color: black;
  }
}
.img-yd {
  box-shadow: 1px 1px 2px gainsboro, -1px -1px 2px gainsboro;
    background: url("./img/yuedulijie.png") no-repeat;
    background-size: 60px 60px;
  background-position: 30px 10px;
  .bgr {
    margin-top: 60px;
    color: black;
  }
}
.img-zw {
  box-shadow: 1px 1px 2px gainsboro, -1px -1px 2px gainsboro;
    background: url("./img/zuowen.png") no-repeat;
    background-size: 60px 60px;
  background-position: 30px 10px;
  .bgr {
    margin-top: 60px;
    color: black;
  }
}
.img-tl {
  box-shadow: 1px 1px 2px gainsboro, -1px -1px 2px gainsboro;
    background: url("./img/tingli.png") no-repeat;
    background-size: 60px 60px;
  background-position: 30px 10px;
  .bgr {
    margin-top: 60px;
    color: black;
  }
}
</style>

<script>
export default {};
</script>