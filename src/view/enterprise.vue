<template>
  <div class="contain_main">
    <div class="con_banner">
      <!-- <img src="../assets/img/bannersearch.png" alt=""> -->
      <div class="contain_home_banner_form">
        <el-input class="input-with-select" v-model="enterpriseName">
          <el-button slot="append" icon="el-icon-search" @click="searchClick"></el-button>
        </el-input>
      </div>
    </div>
    <div class="main_tree">
      <!-- <div v-if="companydetail==''||companydetail.children.length==0">
        <img src="@/assets/img/empty.png" alt="">
      </div>
      <div v-else>
        <vue2-org-tree :data="companydetail" :horizontal="true" />
      </div> -->
      <div class="content">
        <div v-for="(item, index) in categoreList" :key="index">
          <CategoreList :categore="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { enterprise } from "@/api/index.js";
import CategoreList from "@/components/CategoreList";
export default {
  data() {
    return {
      enterpriseName: "",
      companydetail: {},
      companydetail: {
        id: 0,
        label: "",
        children: [],
      },
      categoreList:[{
        categore: "需求企业分类查询",
        list: [{
          title: "需求企业类型分类",
          items: [{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          },]
        },{
          title: "需求企业类型分类",
          items: [{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          }]
        },{
          title: "需求企业类型分类",
          items: [{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          }]
        },{
          title: "需求企业类型分类",
          items: [{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          }]
        }],
      },{
        categore: "需求企业分类sss",
        list: [{
          title: "需求企业类型分类",
          items: [{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          }]
        },{
          title: "需求企业类型分类",
          items: [{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          }]
        },{
          title: "需求企业类型分类",
          items: [{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          }]
        },{
          title: "需求企业类型分类",
          items: [{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          },{
            type: "default",
            label: "国有企业-30家"
          }]
        }],
      }]
    };
  },
  components:{
    CategoreList
  },
  methods: {
    searchClick() {
      this.enterprisedetail();
    },
    enterprisedetail() {
      enterprise({ name: this.enterpriseName }).then((res) => {
        console.log(res);
        this.companydetail = res.data;
      });
    },
  },
  created() {
    this.enterprisedetail();
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
  min-height: 67vh;
}
.main_tree>.content{
  width: 80%;
  margin: 0 auto;
  color: #eee;
  background: rgb(20,60,158, 0.4);
  padding: 30px 200px
}
</style>