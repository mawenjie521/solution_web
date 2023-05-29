<template>
  <div id="footer" v-if="isdisplay">
    <div class="footer_body">
      <div class="footer_body_logo">
        <img src="@/assets/img/logoFooter.png" alt="">
      </div>
      <div class="footer_body_message">
        <p>联系电话：64842996 | 京ICP备：05083642号</p>
        <!-- <p><img src="@/assets/img/office.png" alt=""> <span>双创服务</span> </p> -->
        <!-- <p><img src="@/assets/img/address.png" alt=""><span>北京市朝阳区利泽西街6号院东湖国际中心A座国际创投集聚区11层</span> </p> -->
        <!-- <p><img src="@/assets/img/tel1.png" alt=""><span>17801092390</span> </p> -->
      </div>
      <!-- <div class="footer_body_erweima">
        <img src="@/assets/img/erweima.png" alt="">
      </div> -->
    </div>
    <!-- <p class="copy">Copyright &copy; 2022-2023</p> -->
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      isdisplay: true,
    };
  },
  watch: {
    $route: {
      handler(val, oldval) {
        console.log(val); //新路由信息
        // console.log(oldval); //老路由信息

        this.isdisplay = true;
      },
    },
  },
};
</script>
<style scoped>
#footer {
  width: 100%;
  /* height: 100%; */
  position: fixed;
  bottom: 0;
  height: 82px;
  color: #fff;
  background: #061e36;
  overflow: hidden;
  text-align: center;
}
.footer_body {
  position: relative;
  width: 100%;
  padding: 0 10% 0 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  /* height: 190px; */
}
.footer_body_logo {
  width: 251px;
  height: 44px;
  position: absolute;
  left: 11%;
}
.footer_body_logo img {
  width: 100%;
  height: 100%;
}
.footer_body_message p {
  text-align: center;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  display: flex;
}
.footer_body_message p span {
  line-height: 40px;
  margin-left: 30px;
}
.footer_body_message p img {
  width: 40px;
  height: 40px;
}
.copy {
  width: 100%;
  height: 50px;
  display: inline-block;
  line-height: 50px;
  background: #031225;
}
.isdis {
  display: none;
}
</style>

