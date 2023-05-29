<template>
  <div class="contain_main">
    <div class="con_banner">
      <!-- <img src="../assets/img/bannersearch.png" alt=""> -->
      <div class="contain_home_banner_form">
        <el-input class="input-with-select" v-model="productionName">
          <el-button slot="append" icon="el-icon-search" @click="searchClick"></el-button>
        </el-input>
      </div>
    </div>
    <div class="main">
      <div class="main_left">
        人工智能产品
      </div>
      <div class="main_right">
        <div class="main_right_mid" v-for="i in erjiData" :key="i">
          <div class="main_right_mid_left">{{i.name}}</div>
          <ul class="main_right_mid_right">
            <li class="main_right_mid_right_li" v-for="item in  i.children" :key="item" @click="childClick(item)">{{item.name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { production } from "@/api/index.js";
export default {
  data() {
    return {
      productionName: "",
      erjiData: [],
    };
  },
  methods: {
    // 名称查询跳转
    searchClick() {
      this.$router.push({
        path: "/productiondetail",
        query: {
          rName: this.productionName,
        },
      });
    },
    // 子页面查询
    childClick(item) {
      console.log(item);
      this.$router.push({
        path: "/productiondetail",
        query: {
          id: item.id,
          name: item.name,
        },
      });
    },
    productiondetail() {
      let rData = [];
      production({ name: this.productionName }).then((res) => {
        console.log(res);
        rData = res.data;
        let ndata = [];
        rData.forEach((item) => {
          if (item.parent == 0) {
            ndata.push(item);
            for (let i = 0; i < ndata.length; i++) {
              const el = ndata[i];
              el["children"] = [];
              rData.forEach((it) => {
                if (it.parent == el.id) {
                  el["children"].push(it);
                  this.erjiData = ndata;
                }
                console.log(this.erjiData);
              });
            }
          }
        });
      });
    },
  },
  created() {
    this.productiondetail();
  },
};
</script>

<style scoped>
.contain_main {
  width: 1920px;
  /* margin-top: 90px; */
}
.con_banner {
  width: 1920px;
  height: 200px;
  position: relative;
}
.con_banner img {
  width: 1920px;
  height: 200px;
}
.contain_home_banner_form {
  position: absolute;
  width: 600px;
  height: 62px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.input-with-select .el-input {
  width: 360px !important;
  /* height: 62px; */
}
.contain_home_banner_form .el-input__inner {
  width: 600px;
  height: 62px;
  line-height: 31px;
}
.main {
  width: 100%;
  height: 100%;
  padding-bottom: 61px;
  padding-top: 61px;
  padding-left: 330px;
  padding-right: 281px;
  display: flex;
}
.main_left {
  border-radius: 2px;
  opacity: 0.8;
  width: 212px;
  min-height: 60px;
  display: flex;
  justify-content: center;
  margin-right: 16px;
  align-items: center;
  color: #fff;
  font-size: 18px;
  background: #1f65ec;
}

.main_right_mid {
  display: flex;
  margin-bottom: 20px;
}
.main_right_mid:nth-last-child(1) {
  margin-bottom: 0;
}
.main_right_mid_left {
  width: 180px;
  display: flex;
  margin-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 2px;
  opacity: 0.7;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 18px;
  background: #1f65ec;
}

.main_right_mid_last {
  margin-bottom: 0;
}
.main_right_mid_right {
  display: flex;
  flex-wrap: wrap;
  width: 960px;
  justify-content: start;
  margin-bottom: -10px;
}
.main_right_mid_right_li {
  margin-bottom: 10px;

  width: 230px;
  padding: 26px;
  margin-right: 10px;
  background: #fff;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  border: 2px solid #4c84f0;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #0755e9;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main_right_mid_right_li:hover {
  background: #0755e9;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  border: 2px solid #0755e9;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
}
</style>