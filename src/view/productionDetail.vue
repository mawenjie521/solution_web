<template>
  <div class="main_tree">
    <vue2-org-tree 
      class="tree_content"
      :data="treeData"
      :expendAll="true"
      :horizontal="true" 
      :collapsable="true" 
      @on-expand="onExpand" 
      :render-content="renderContent"
    />
  </div>
</template>

<script>
import { productionChild, productionName } from "@/api/index.js";
export default {
  data() {
    return {
      id: "",
      rName: "",
      detail: {
        id: 0,
        label: "",
        children: [],
      },
    "treeData":
        {
            "sorted":1,
            "children":[
                {
                    "sorted":1,
                    expand: true,
                    "children":[
                        {
                            "sorted":1,
                            expand: true,
                            "children":[
                                {
                                    "sorted":1,
                                    expand: true,
                                    "children":[
                                        {
                                            "sorted":1,
                                            expand: true,
                                            "id":115,
                                            "label":"生产技术部工艺员生产技术部工艺员生产技术部工艺员生产技术部工艺员生产技术部工艺员生产技术部工艺员生产技术部工艺员生产技术部工艺员生产技术部工艺员生产技术部工艺员生产技术部工艺员生产技术部工艺员生产技术部工艺员生产技术部工艺员生产技术部工艺员生产技术部工艺员",
                                            "type":"0",
                                            "parentId":123,
                                            "desc":""
                                        },
                                        {
                                            "sorted":2,
                                            expand: true,
                                            "children":[
                                                {
                                                    "sorted":1,
                                                    expand: true,
                                                    "children":[
                                                        {
                                                            "sorted":2,
                                                            expand: true,
                                                            "children":[
                                                                {
                                                                    "sorted":1,
                                                                    expand: true,
                                                                    "id":125,
                                                                    "label":"中控操作员",
                                                                    "type":"0",
                                                                    "parentId":116,
                                                                    "desc":""
                                                                },
                                                                {
                                                                    "sorted":2,
                                                                    expand: true,
                                                                    "id":121,
                                                                    "label":"前操操作员",
                                                                    "type":"0",
                                                                    "parentId":116,
                                                                    "desc":""
                                                                },
                                                                {
                                                                    "sorted":3,
                                                                    expand: true,
                                                                    "id":120,
                                                                    "label":"环氧操作员",
                                                                    "type":"0",
                                                                    "parentId":116,
                                                                    "desc":""
                                                                },
                                                                {
                                                                    "sorted":4,
                                                                    expand: true,
                                                                    "id":127,
                                                                    "label":"催化剂操作员",
                                                                    "type":"0",
                                                                    "parentId":116,
                                                                    "desc":""
                                                                },
                                                                {
                                                                    "sorted":8,
                                                                    expand: true,
                                                                    "id":118,
                                                                    "label":"内操",
                                                                    "type":"0",
                                                                    "parentId":116,
                                                                    "desc":""
                                                                },
                                                                {
                                                                    "sorted":9,
                                                                    expand: true,
                                                                    "id":119,
                                                                    "label":"外操",
                                                                    "type":"0",
                                                                    "parentId":116,
                                                                    "desc":""
                                                                }
                                                            ],
                                                            "id":116,
                                                            "label":"一二工段班长",
                                                            "type":"0",
                                                            "parentId":124,
                                                            "desc":""
                                                        }
                                                    ],
                                                    "id":124,
                                                    "label":"聚合工段段长",
                                                    "type":"0",
                                                    "parentId":114,
                                                    "desc":""
                                                },
                                                {
                                                    "sorted":2,
                                                    expand: true,
                                                    "children":[
                                                        {
                                                            "sorted":3,
                                                            expand: true,
                                                            "children":[
                                                                {
                                                                    "sorted":1,
                                                                    "id":128,
                                                                    "label":"切片操作员",
                                                                    "type":"0",
                                                                    "parentId":117,
                                                                    "desc":""
                                                                },
                                                                {
                                                                    "sorted":2,
                                                                    expand: true,
                                                                    "id":129,
                                                                    "label":"切片工段叉车员",
                                                                    "type":"0",
                                                                    "parentId":117,
                                                                    "desc":""
                                                                },
                                                                {
                                                                    "sorted":3,
                                                                    expand: true,
                                                                    "id":130,
                                                                    "label":"切片工段看料操作员",
                                                                    "type":"0",
                                                                    "parentId":117,
                                                                    "desc":""
                                                                },
                                                                {
                                                                    "sorted":4,
                                                                    expand: true,
                                                                    "id":131,
                                                                    "label":"切片工段检斤操作员",
                                                                    "type":"0",
                                                                    "parentId":117,
                                                                    "desc":""
                                                                }
                                                            ],
                                                            "id":117,
                                                            expand: true,
                                                            "label":"切片工段班长",
                                                            "type":"0",
                                                            "parentId":126,
                                                            "desc":""
                                                        }
                                                    ],
                                                    "id":126,
                                                    "label":"切片工段段长",
                                                    "type":"0",
                                                    "parentId":114,
                                                    "desc":""
                                                }
                                            ],
                                            "id":114,
                                            "label":"单体车间主任",
                                            "type":"0",
                                            "parentId":123,
                                            "desc":""
                                        },
                                        {
                                            "sorted":3,
                                            expand: true,
                                            "children":[
                                                {
                                                    "sorted":2,
                                                    expand: true,
                                                    "children":[
                                                        {
                                                            "sorted":1,
                                                            expand: true,
                                                            "children":[
                                                                {
                                                                    "sorted":1,
                                                                    expand: true,
                                                                    "id":133,
                                                                    "label":"碳酸酯内操操作员",
                                                                    "type":"0",
                                                                    "parentId":132,
                                                                    "desc":""
                                                                },
                                                                {
                                                                    "sorted":2,
                                                                    expand: true,
                                                                    "id":93,
                                                                    "label":"碳酸酯外操操作员",
                                                                    "type":"0",
                                                                    "parentId":132,
                                                                    "desc":""
                                                                },
                                                                {
                                                                    "sorted":3,
                                                                    expand: true,
                                                                    "id":134,
                                                                    "label":"碳酸酯包装员",
                                                                    "type":"0",
                                                                    "parentId":132,
                                                                    "desc":""
                                                                },
                                                                {
                                                                    "sorted":4,
                                                                    "id":135,
                                                                    "label":"碳酸酯叉车员",
                                                                    "type":"0",
                                                                    "parentId":132,
                                                                    "desc":""
                                                                }
                                                            ],
                                                            "id":132,
                                                            "label":"碳酸酯班长",
                                                            "type":"0",
                                                            "parentId":92,
                                                            "desc":""
                                                        }
                                                    ],
                                                    "id":92,
                                                    "label":"碳酸酯值班班长",
                                                    "type":"0",
                                                    "parentId":85,
                                                    "desc":""
                                                },
                                                {
                                                    "sorted":2,
                                                    "id":91,
                                                    "label":"工艺员",
                                                    "type":"0",
                                                    "parentId":85,
                                                    "desc":""
                                                }
                                            ],
                                            "id":85,
                                            "label":"碳酸酯车间主任",
                                            "type":"0",
                                            "parentId":123,
                                            "desc":"部长"
                                        },
                                        {
                                            "sorted":4,
                                            "children":[
                                                {
                                                    "sorted":1,
                                                    "children":[
                                                        {
                                                            "sorted":1,
                                                            "children":[
                                                                {
                                                                    "sorted":1,
                                                                    "id":139,
                                                                    "label":"减水剂一工段操作员",
                                                                    "type":"0",
                                                                    "parentId":137,
                                                                    "desc":""
                                                                },
                                                                {
                                                                    "sorted":2,
                                                                    "id":140,
                                                                    "label":"减水剂一工段叉车员",
                                                                    "type":"0",
                                                                    "parentId":137,
                                                                    "desc":""
                                                                },
                                                                {
                                                                    "sorted":3,
                                                                    "id":141,
                                                                    "label":"减水剂一工段发货员",
                                                                    "type":"0",
                                                                    "parentId":137,
                                                                    "desc":""
                                                                }
                                                            ],
                                                            "id":137,
                                                            "label":"减水剂一工段班长",
                                                            "type":"0",
                                                            "parentId":136,
                                                            "desc":""
                                                        },
                                                        {
                                                            "sorted":2,
                                                            "children":[
                                                                {
                                                                    "sorted":1,
                                                                    "id":142,
                                                                    "label":"减水剂二工段操作员",
                                                                    "type":"0",
                                                                    "parentId":138,
                                                                    "desc":""
                                                                },
                                                                {
                                                                    "sorted":2,
                                                                    "id":143,
                                                                    "label":"减水剂二工段叉车员",
                                                                    "type":"0",
                                                                    "parentId":138,
                                                                    "desc":""
                                                                },
                                                                {
                                                                    "sorted":3,
                                                                    "id":144,
                                                                    "label":"减水剂二工段发货员",
                                                                    "type":"0",
                                                                    "parentId":138,
                                                                    "desc":""
                                                                }
                                                            ],
                                                            "id":138,
                                                            "label":"减水剂二工段班长",
                                                            "type":"0",
                                                            "parentId":136,
                                                            "desc":""
                                                        }
                                                    ],
                                                    "id":136,
                                                    "label":"减水剂车间副主任",
                                                    "type":"0",
                                                    "parentId":122,
                                                    "desc":""
                                                }
                                            ],
                                            "id":122,
                                            "label":"减水剂车间主任",
                                            "type":"0",
                                            "parentId":123,
                                            "desc":""
                                        }
                                    ],
                                    "id":123,
                                    "label":"生产技术部部长",
                                    "type":"0",
                                    "parentId":83,
                                    "desc":""
                                },
                                {
                                    "sorted":2,
                                    "children":[
                                        {
                                            "sorted":1,
                                            "id":101,
                                            "label":"安全员1",
                                            "type":"0",
                                            "parentId":87,
                                            "desc":""
                                        },
                                        {
                                            "sorted":2,
                                            "id":145,
                                            "label":"安全员2",
                                            "type":"0",
                                            "parentId":87,
                                            "desc":""
                                        },
                                        {
                                            "sorted":3,
                                            "id":146,
                                            "label":"安全员3",
                                            "type":"0",
                                            "parentId":87,
                                            "desc":""
                                        },
                                        {
                                            "sorted":4,
                                            "id":147,
                                            "label":"QA专员",
                                            "type":"0",
                                            "parentId":87,
                                            "desc":""
                                        },
                                        {
                                            "sorted":5,
                                            "id":148,
                                            "label":"门卫",
                                            "type":"0",
                                            "parentId":87,
                                            "desc":""
                                        }
                                    ],
                                    "id":87,
                                    "label":"质安环部部长",
                                    "type":"0",
                                    "parentId":83,
                                    "desc":""
                                },
                                {
                                    "sorted":5,
                                    "children":[
                                        {
                                            "sorted":1,
                                            "children":[
                                                {
                                                    "sorted":1,
                                                    "children":[
                                                        {
                                                            "sorted":1,
                                                            "id":150,
                                                            "label":"钳工技师",
                                                            "type":"0",
                                                            "parentId":149,
                                                            "desc":""
                                                        },
                                                        {
                                                            "sorted":3,
                                                            "id":97,
                                                            "label":"仪表技师",
                                                            "type":"0",
                                                            "parentId":149,
                                                            "desc":""
                                                        },
                                                        {
                                                            "sorted":5,
                                                            "id":96,
                                                            "label":"电气技师",
                                                            "type":"0",
                                                            "parentId":149,
                                                            "desc":""
                                                        },
                                                        {
                                                            "sorted":6,
                                                            "id":98,
                                                            "label":"焊工技师",
                                                            "type":"0",
                                                            "parentId":149,
                                                            "desc":""
                                                        }
                                                    ],
                                                    "id":149,
                                                    "label":"维修经理",
                                                    "type":"0",
                                                    "parentId":95,
                                                    "desc":""
                                                }
                                            ],
                                            "id":95,
                                            "label":"设备部副部长",
                                            "type":"0",
                                            "parentId":86,
                                            "desc":""
                                        }
                                    ],
                                    "id":86,
                                    "label":"设备部部长",
                                    "type":"0",
                                    "parentId":83,
                                    "desc":""
                                },
                                {
                                    "sorted":6,
                                    "children":[
                                        {
                                            "sorted":1,
                                            "id":100,
                                            "label":"管理员1",
                                            "type":"0",
                                            "parentId":99,
                                            "desc":""
                                        },
                                        {
                                            "sorted":2,
                                            "id":151,
                                            "label":"管理员2",
                                            "type":"0",
                                            "parentId":99,
                                            "desc":""
                                        }
                                    ],
                                    "id":99,
                                    "label":"工程部部长",
                                    "type":"0",
                                    "parentId":83,
                                    "desc":""
                                },
                                {
                                    "sorted":7,
                                    "children":[
                                        {
                                            "sorted":1,
                                            "id":152,
                                            "label":"产品库保管理员",
                                            "type":"0",
                                            "parentId":88,
                                            "desc":""
                                        },
                                        {
                                            "sorted":2,
                                            "id":153,
                                            "label":"产品库发货员",
                                            "type":"0",
                                            "parentId":88,
                                            "desc":""
                                        },
                                        {
                                            "sorted":3,
                                            "id":154,
                                            "label":"装卸工",
                                            "type":"0",
                                            "parentId":88,
                                            "desc":""
                                        },
                                        {
                                            "sorted":4,
                                            "id":155,
                                            "label":"叉车工",
                                            "type":"0",
                                            "parentId":88,
                                            "desc":""
                                        },
                                        {
                                            "sorted":5,
                                            "id":156,
                                            "label":"备品备件库保管员",
                                            "type":"0",
                                            "parentId":88,
                                            "desc":""
                                        }
                                    ],
                                    "id":88,
                                    "label":"仓储部部长",
                                    "type":"0",
                                    "parentId":83,
                                    "desc":""
                                },
                                {
                                    "sorted":8,
                                    "children":[
                                        {
                                            "sorted":1,
                                            "id":105,
                                            "label":"采购员",
                                            "type":"0",
                                            "parentId":90,
                                            "desc":""
                                        },
                                        {
                                            "sorted":2,
                                            "id":157,
                                            "label":"采购内勤",
                                            "type":"0",
                                            "parentId":90,
                                            "desc":""
                                        }
                                    ],
                                    "id":90,
                                    "label":"采购部部长",
                                    "type":"0",
                                    "parentId":83,
                                    "desc":""
                                },
                                {
                                    "sorted":9,
                                    "children":[
                                        {
                                            "sorted":9,
                                            "id":89,
                                            "label":"化验员",
                                            "type":"0",
                                            "parentId":158,
                                            "desc":""
                                        }
                                    ],
                                    "id":158,
                                    "label":"化验室主任",
                                    "type":"0",
                                    "parentId":83,
                                    "desc":""
                                },
                                {
                                    "sorted":10,
                                    "children":[
                                        {
                                            "sorted":9,
                                            "children":[
                                                {
                                                    "sorted":1,
                                                    "id":159,
                                                    "label":"研发实验员",
                                                    "type":"0",
                                                    "parentId":110,
                                                    "desc":""
                                                }
                                            ],
                                            "id":110,
                                            "label":"研发中心副主任",
                                            "type":"0",
                                            "parentId":108,
                                            "desc":""
                                        }
                                    ],
                                    "id":108,
                                    "label":"研发中心主任",
                                    "type":"0",
                                    "parentId":83,
                                    "desc":""
                                },
                                {
                                    "sorted":11,
                                    "children":[
                                        {
                                            "sorted":1,
                                            "id":107,
                                            "label":"产品实验员",
                                            "type":"0",
                                            "parentId":106,
                                            "desc":""
                                        }
                                    ],
                                    "id":106,
                                    "label":"售后中心主任",
                                    "type":"0",
                                    "parentId":83,
                                    "desc":""
                                },
                                {
                                    "sorted":12,
                                    "children":[
                                        {
                                            "sorted":1,
                                            "id":160,
                                            "label":"保洁员",
                                            "type":"0",
                                            "parentId":94,
                                            "desc":""
                                        },
                                        {
                                            "sorted":2,
                                            "id":161,
                                            "label":"食堂员工",
                                            "type":"0",
                                            "parentId":94,
                                            "desc":""
                                        },
                                        {
                                            "sorted":3,
                                            "id":162,
                                            "label":"财务专员",
                                            "type":"0",
                                            "parentId":94,
                                            "desc":""
                                        },
                                        {
                                            "sorted":4,
                                            "id":109,
                                            "label":"档案员",
                                            "type":"0",
                                            "parentId":94,
                                            "desc":""
                                        },
                                        {
                                            "sorted":5,
                                            "id":163,
                                            "label":"司机",
                                            "type":"0",
                                            "parentId":94,
                                            "desc":""
                                        }
                                    ],
                                    "id":94,
                                    "label":"综合办主任",
                                    "type":"0",
                                    "parentId":83,
                                    "desc":""
                                },
                                {
                                    "sorted":13,
                                    "children":[
                                        {
                                            "sorted":1,
                                            "id":165,
                                            "label":"人事专员",
                                            "type":"0",
                                            "parentId":164,
                                            "desc":""
                                        },
                                        {
                                            "sorted":2,
                                            "id":166,
                                            "label":"it专员",
                                            "type":"0",
                                            "parentId":164,
                                            "desc":""
                                        }
                                    ],
                                    "id":164,
                                    "label":"人力资源部部长",
                                    "type":"0",
                                    "parentId":83,
                                    "desc":""
                                },
                                {
                                    "sorted":14,
                                    "children":[
                                        {
                                            "sorted":1,
                                            "id":168,
                                            "label":"组员",
                                            "type":"0",
                                            "parentId":167,
                                            "desc":""
                                        }
                                    ],
                                    "id":167,
                                    "label":"标准化小组组长",
                                    "type":"0",
                                    "parentId":83,
                                    "desc":""
                                },
                                {
                                    "sorted":16,
                                    "id":84,
                                    "label":"生产调度",
                                    "type":"0",
                                    "parentId":83,
                                    "desc":"生产调度"
                                }
                            ],
                            "id":83,
                            "label":"生产厂长/安全总监",
                            "type":"0",
                            "parentId":10,
                            "desc":""
                        }
                    ],
                    "id":10,
                    "label":"总经理",
                    "type":"0",
                    "parentId":9,
                    "desc":""
                }
            ],
            "id":9,
            "label":"董事长",
            "type":"0",
            "parentId":null,
            "desc":"",
            expand: true,
        },

    };
  },
  methods: {
    renderContent(h, data) {
      return data.enterpriseName || data.label;
    },
    detailsName() {
      productionName({ name: this.rName }).then((res) => {
        console.log(res);
        this.detail.label = res.data[0].productionName;
        this.detail.children = res.data;
        let newArry = this.detail.children;
        for (let i = 0; i < newArry.length; i++) {
          const el = newArry[i];
          el["children"] = [];
          el["children"].push(
            {
              id: 0,
              label: "产品应用阶段：" + el.stage,
            },
            {
              id: 1,
              label: "国产化情况：" + el.domestic,
            },
            { id: 2, label: "应用案例：无" }
          );
        }
        //         this.detail.children = res.data;
        // let newArry = this.detail.children;
        // for (let i = 0; i < newArry.length; i++) {
        //   const el = newArry[i];
        //   el["children"] = [];
        //   el["children"].push(
        //     {
        //       id: 0,
        //       label: "产品应用阶段：" + el.stage,
        //     },
        //     {
        //       id: 1,
        //       label: "国产化情况：" + el.domestic,
        //     },
        //     { id: 2, label: "应用案例：无" }
        //   );
        // }
      });
    },
    details() {
      productionChild({ productionId: this.id }).then((res) => {
        console.log(res);
        this.detail.children = res.data;
        let newArry = this.detail.children;
        for (let i = 0; i < newArry.length; i++) {
          const el = newArry[i];
          el["children"] = [];
          el["children"].push(
            {
              id: 0,
              label: "产品应用阶段：" + el.stage,
            },
            {
              id: 1,
              label: "国产化情况：" + el.domestic,
            },
            { id: 2, label: "应用案例：无" }
          );
        }
      });
    },
    onExpand(e, data) {
      if ("expand" in data) {
        data.expand = !data.expand;
        if (!data.expand && data.children) {
          this.collapse(data.children);
        }
      } else {
        this.$set(data, "expand", true);
      }
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
.main_tree .tree_content{
  background:rgb(20,60,158, 0.4);
  min-width:800px;
  min-height:90vh
}
.org-tree-node-label .org-tree-node-label-inner{
  background: #598ded;
  border-radius: 15px;
  color: #fff;
  max-width: 300px;
}
</style>