<template>
  <div class="main_tree">
    <vue2-org-tree :data="detail" :horizontal="true" :render-content="renderContent" />
  </div>
</template>

<script>
import { solutionChild, solutionName } from "@/api/index.js";
export default {
  data() {
    return {
      id: "",
      rName: "",
      detail: {
        id: 0,
        label: undefined,
        children: [],
      },
    };
  },
  methods: {
    renderContent(h, data) {
      return data.enterpriseName || data.label;
    },
    detailsName() {
      solutionName({ name: this.rName }).then((res) => {
        console.log(res);
        this.detail.label = res.data[0].solutionName;
        this.detail.children = res.data;
        let newArry = this.detail.children;
        for (let i = 0; i < newArry.length; i++) {
          const el = newArry[i];
          el["children"] = [];
          el["children"].push(
            {
              id: 0,
              label: el.realize == "1" ? "是否已落地：是" : "是否已落地：否",
            },
            { id: 1, label: "应用案例：无" },
            { id: 2, label: "匹配关联度：" + el.matchingRate }
          );
        }
      });
    },
    details() {
      solutionChild({ solutionId: this.id }).then((res) => {
        console.log(res);
        this.detail.children = res.data;
        let newArry = this.detail.children;
        for (let i = 0; i < newArry.length; i++) {
          const el = newArry[i];
          el["children"] = [];
          el["children"].push(
            {
              id: 0,
              label: el.realize == "1" ? "是否已落地：是" : "是否已落地：否",
            },
            { id: 1, label: "应用案例：无" },
            { id: 2, label: "匹配关联度：" + el.matchingRate }
          );
        }
      });
    },
  },
  created() {
    this.id = this.$route.query.id;
    this.detail.label = this.$route.query.name;
    this.rName = this.$route.query.rName;
    if (this.id == "" || this.id == undefined) {
      this.detailsName();
    } else {
      this.details();
    }
  },
};
</script>

<style>
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
.is-leaf {
  width: 400px;
}
.org-tree-node-label .org-tree-node-label-inner {
  text-align: justify !important;
}
</style>