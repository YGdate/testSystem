<template>
  <div class="card">
    <router-link tag="div" to="/dxuan" class="img-danx item">
      <div class="bgr">单选题</div>
    </router-link>
    <router-link tag="div" to="/duoxuan" class="img-duox item">
      <div class="bgr">多选题</div>
    </router-link>
    <router-link tag="div" to="/bdx" class="img-bd item">
      <div class="bgr">不定项</div>选择
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
      <div class="bgr">完型填</div>空
    </router-link>
    <router-link tag="div" to="/xuanci" class="img-xc item">
      <div class="bgr">选词填</div>空
    </router-link>
    <router-link tag="div" to="/dwgc" class="img-dw item">
      <div class="bgr">短文改</div>错
    </router-link>
    <router-link tag="div" to="/fanyi" class="img-fy item">
      <div class="bgr">翻译</div>
    </router-link>
    <router-link tag="div" to="/ydlj" class="img-yd item">
      <div class="bgr">阅读理</div>解
    </router-link>
    <router-link tag="div" to="/zuowen" class="img-zw item">
      <div class="bgr">作文</div>
    </router-link>
    <router-link tag="div" to class="img-tl item">
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
  background: #118aff;
  .bgr {
    padding: 15px 5px;
    background: url("./img/danxuan.png") no-repeat;
    background-size: cover;
  }
}
.img-duox {
  background: #118aff;
  .bgr {
    padding: 15px 5px;
    background: url("./img/duoxuan.png") no-repeat;
    background-size: cover;
  }
}
.img-bd {
  background: #118aff;
  .bgr {
      padding: 15px 5px;
    background: url("./img/budingxiang.png") no-repeat;
    background-size: cover;
  }
}
.img-pd {
  background: #118aff;
  .bgr {
      padding: 15px 5px;
    background: url("./img/panduanti.png") no-repeat;
    background-size: cover;
  }
}
.img-tk {
  background: #118aff;
  .bgr {
      padding: 15px 5px;
    background: url("./img/tiankong.png") no-repeat;
    background-size: cover;
  }
}
.img-qxw {
  background: #118aff;
  .bgr {
      padding: 15px 5px;
    background: url("./img/qixuan5.png") no-repeat;
    background-size: cover;
  }
}
.img-wx {
  background: #118aff;
  .bgr {
      padding: 15px 5px;
    background: url("./img/wanxing.png") no-repeat;
    background-size: cover;
  }
}
.img-xc {
  background: #118aff;
  .bgr {
      padding: 15px 5px;
    background: url("./img/xuancitiankong.png") no-repeat;
    background-size: cover;
  }
}
.img-dw {
  background: #118aff;
  .bgr {
      padding: 15px 5px;
    background: url("./img/duanwengaicuo.png") no-repeat;
    background-size: cover;
  }
}
.img-fy {
  background: #118aff;
  .bgr {
      padding: 15px 5px;
    background: url("./img/fanyi.png") no-repeat;
    background-size: cover;
  }
}
.img-yd {
  background: #118aff;
  .bgr {
      padding: 15px 5px;
    background: url("./img/yuedulijie.png") no-repeat;
    background-size: cover;
  }
}
.img-zw {
  background: #118aff;
  .bgr {
      padding: 15px 5px;
    background: url("./img/zuowen.png") no-repeat;
    background-size: cover;
  }
}
.img-tl {
  background: #118aff;
  .bgr {
      padding: 15px 5px;
    background: url("./img/tingli.png") no-repeat;
    background-size: cover;
  }
}
</style>

<script>
export default {};
</script>