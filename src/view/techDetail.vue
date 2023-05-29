<template>
  <div class="main_tree">
    <vue2-org-tree :data="detail" :horizontal="true" :render-content="renderContent" />
  </div>
</template>

<script>
import { techChild, techName } from "@/api/index.js";
export default {
  data() {
    return {
      id: "",
      detail: {
        id: 0,
        label: "",
        children: [],
      },
    };
  },
  methods: {
    renderContent(h, data) {
      return data.enterpriseName || data.label;
    },
    detailsName() {
      techName({ name: this.rName }).then((res) => {
        console.log(res);
        this.detail.label = res.data[0].techName;
        this.detail.children = res.data;
        let newArry = this.detail.children;
        for (let i = 0; i < newArry.length; i++) {
          const el = newArry[i];
          el["children"] = [];
          el["children"].push(
            { id: 0, label: "技术成熟度：1" },
            { id: 1, label: "应用案例：无" },
            { id: 2, label: "客户名称：无" }
          );
        }
        console.log(this.detail);
        this.detail = this.detail;
      });
    },
    details() {
      techChild({ techId: this.id }).then((res) => {
        console.log(res);
        this.detail.children = res.data;
        let newArry = this.detail.children;
        for (let i = 0; i < newArry.length; i++) {
          const el = newArry[i];
          el["children"] = [];
          el["children"].push(
            { id: 0, label: "技术成熟度：1" },
            { id: 1, label: "应用案例：无" },
            { id: 2, label: "客户名称：无" }
          );
        }
        console.log(this.detail);
        this.detail = this.detail;
      });
    },
  },
  created() {
    this.id = this.$route.query.id;
    this.detail.label = this.$route.query.name;

    this.rName = this.$route.query.rName;
    console.log(this.id);
    if (this.id == "" || this.id == undefined) {
      this.detailsName();
    } else {
      this.details();
    }
  },
};
</script>

<style >
.main_tree {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 67vh;
}
.org-tree-node-label-inner {
  background: #598ded;
  border-radius: 2px;
  color: #fff;
}
</style>