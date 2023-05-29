<template>
  <div class="contain_main">
    <div class="con_banner">
      <!-- <img src="../assets/img/bannersearch.png" alt=""> -->
      <div class="contain_home_banner_form">
        <el-input class="input-with-select" v-model="solutionName">
          <el-button slot="append" icon="el-icon-search" @click="searchClick"></el-button>
        </el-input>
      </div>
    </div>
    <div class="main">
      <div class="main_left">
        {{yijiData.name}}
      </div>
      <div class="main_right">
        <ul class="main_right_mid_right">
          <li class="main_right_mid_right_li" v-for="item in erjiData" :key="item" @click="childClick(item)">{{item.name}}</li>
        </ul>
      </div>
      <!-- <vue2-org-tree :data="companydetail" :horizontal="true" /> -->
    </div>
  </div>
</template>

<script>
import { solution } from "@/api/index.js";
export default {
  data() {
    return {
      id: "",
      yijiData: {},
      erjiData: [],
      solutionName: "",
    };
  },
  methods: {
    childClick(item) {
      this.$router.push({
        path: "/solutiondetail",
        query: {
          id: item.id,
          name: item.name,
        },
      });
    },

    searchClick() {
      this.$router.push({
        path: "/solutiondetail",
        query: {
          rName: this.solutionName,
        },
      });
    },
    solutiondetail() {
      solution({ name: this.solutionName }).then((res) => {
        console.log(res);
        let ndata = [];
        res.data.forEach((item) => {
          if (item.id == this.id) {
            this.yijiData = item;
          } else if (item.parent == this.id) {
            ndata.push(item);
            this.erjiData = ndata;
          }
        });
      });
    },
  },
  created() {
    this.id = this.$route.query.id;
    this.solutiondetail();
  },
};
</script>

<style>
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
  min-height: 60px;
  border-radius: 2px;
  opacity: 0.8;
  width: 212px;
  display: flex;
  justify-content: center;
  margin-right: 16px;
  align-items: center;
  color: #fff;
  font-size: 18px;
  background: #1f65ec;
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
  display: flex;
  justify-content: center;
  align-items: center;
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
  text-align: center;
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