<template>
  <div class="contain_main">
    <div class="main_tree">
      <!-- <div v-if="companydetail==''||companydetail.children.length==0">
        <img src="@/assets/img/empty.png" alt="">
      </div>
      <div v-else>
        <vue2-org-tree :data="companydetail" :horizontal="true" />
      </div> -->
      <div class="content">
          <div class="filter_condition">
            <span>一级场景需求：</span>
            <ul>
                <li>全部</li>
                <li>一级场景需求1</li>
                <li>一级场景需求1</li>
                <li>一级场景需求1</li>
                <li>一级场景需求1</li>
            </ul>
          </div>
          <div>sss</div>
      </div>
    </div>
  </div>
</template>

<script>
import { requireEnterpriseList } from "@/api/newRequest.js";

export default {
  data() {
    return {
      enterpriseName: "",
    };
  },
  methods: {
    searchClick() {
      this.enterprisedetail();
    },
    enterprisedetail() {
      
    },
  },
  created() {
    // this.requireEnterpriseList();
  },
};
</script>

<style>
.contain_main {
  width: 1920px;
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
.org-tree-node-label-inner {
  background: #598ded;
  border-radius: 2px;
  color: #fff;
}
.main_tree {
  min-height: 87vh;
  display: flex;
}
.main_tree>.content{
  width: 80%;
  margin: 0 auto;
  color: #eee;
  background: rgb(20,60,158, 0.4);
  padding: 30px 80px
}
.main_tree>.content .filter_condition{
    display: flex;
}
.main_tree>.content .filter_condition ul {
    display: flex;
}
.main_tree>.content .filter_condition ul li {
    margin: 0 10px;
}
</style>