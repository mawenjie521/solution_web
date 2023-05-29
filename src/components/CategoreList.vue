<template>
    <div class="enterprise_content">
        <h3 class="categoreTitle">{{categore.categore}}</h3>
        <div class="item" v-for="(l, index) in categore.list" :key="index">
          <div class="title">{{l.title}}</div>
          <div class="content">
            <el-tag class="tag" v-for="(item, index) in l.items" :key="index">{{item.label}}</el-tag>
          </div>
        </div>
    </div>
</template>
<script>
export default{
    props: {
        categore: {
            type: Object,
            default: {},
        }
    },
    data:()=>{
        return {}
    }
}
</script>
<style scoped>
  .enterprise_content .item{
      margin: 15px 0;
      border: 1px solid #ccc;
      border-radius: 5px;
  }
  .enterprise_content .item .title{
    /* border-bottom: 1px solid #ccc; */
    background-color: rgb(34, 75,126, 0.5);
    padding: 20px;
    border-radius: 5px;
  }
  .enterprise_content .item .content{
    padding: 20px;
  }
  .enterprise_content .item .content .tag{
      margin: 5px;
      cursor: pointer;
  }
</style>
