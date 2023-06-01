<template>
  <!-- 头部整体盒子 -->
  <div id="header" class="container-fuild">
    <!-- 头部顶部 -->
    <!-- 电脑导航 -->
    <div class="header-nav container hidden-xs">
      <!-- 导航logo -->
      <div class="header-nav-logo">
        <img src="@/assets/img/zhiyonglogo.png">
      </div>
      <!-- 导航内容 -->
      <ul class="header-nav-wrapper">
        <li v-for="(item,index) in navList" :key="index" :class="index==navIndex?'active':''" @click="navClick(index,item.name)">
          <router-link :to="item.path">
            {{item.name}}
            <!-- <span v-if="item.children.length>0" class="glyphicon glyphicon-menu-down"></span>
            <i class="underline"></i> -->
          </router-link>
          <dl v-if="item.children.length>0">
            <dt v-for="(i,n) in item.children" :key="n">
              <router-link :to="i.path">{{i.name}}</router-link>
            </dt>
          </dl>
        </li>
      </ul>
    </div>
    <!-- 手机导航 -->
    <div class="header-nav-m container-fuild visible-xs">
      <!-- 导航栏 -->
      <div class="header-nav-m-menu text-center">
        {{menuName}}
        <!-- 导航内容 -->
        <ul id="menu" class="header-nav-m-wrapper collapse">
          <li v-for="(item,index) in navList" :key="index" :class="index==navIndex?'active':''" @click="navClick(index,item.name)" data-toggle="collapse"
              data-target="#menu">
            <router-link :to="item.path">
              {{item.name}}
              <i class="underline"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      navIndex: sessionStorage.getItem("navIndex")
        ? sessionStorage.getItem("navIndex")
        : 0,
      menuName: "首页",
      menuClass: "glyphicon glyphicon-menu-down",
      navList: [
        {
          name: "首页",
          path: "/",
          children: [],
        },
        {
          name: "企业查询",
          path: "/enterprise",
          children: [],
        },
        {
          name: "技术查询",
          path: "/tech",
          children: [],
        },
        {
          name: "产品查询",
          path: "/production",
          children: [],
        },
        {
          name: "场景需求查询",
          path: "/solution",
          children: [],
        },
        {
          name: "供需匹配",
          path: "/providematch",
          children: [],
        },
      ],
    };
  },
  watch: {
    $route: {
      handler(val, oldval) {
        console.log();
        console.log(val.name);
        if (val.name == "home") {
          this.navIndex = 0;
        } else if (val.name == "enterprise") {
          this.navIndex = 1;
        } else if (val.name == "techdetail" || val.name == "tech") {
          this.navIndex = 2;
        } else if (val.name == "productiondetail" || val.name == "production") {
          this.navIndex = 3;
        } else if (val.name == "solutiondetail" || val.name == "solution") {
          this.navIndex = 4;
        }
      },
    },
  },
  methods: {
    navClick(index, name) {
      this.navIndex = index;
      sessionStorage.setItem("navIndex", index);
      this.menuName = name;
    },
  },
};
</script>
<style scoped>
/* 顶部 */
.container {
  width: 1900px;
}
#header {
  background: rgb(20,60,158, 0.4);
  transition: all ease 0.6s;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.1);
}
#header .header-top {
  height: 50px;
  color: #fff;
  font-size: 12px;
  line-height: 50px;
  background: #474747;
}
/* 顶部的图标 */
#header .header-top span {
  margin: 0 8px;
}
/* 导航栏 */
#header .header-nav {
  height: 70px;
  /* margin-bottom: 90px; */
}
.header-nav-logo {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 2%;
}
.header-nav-logo img {
  height: 50px;
}

/* 导航栏logo */
/* #header .header-nav .header-nav-logo { */
/* width: 100px; */
/* height: 100%;
  float: left;
  position: relative;
} */
/* 导航栏logo图片 */
/* #header .header-nav .header-nav-logo img { */
/* width: 247px;
  height: 47px; */
/* position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
} */
/* 导航栏 导航容器 */
#header .header-nav-fixed .header-nav-wrapper {
  line-height: 50px;
}
#header .header-nav .header-nav-wrapper {
  line-height: 70px;
  /* float: right; */
  width: 750px;
  margin: 0 auto;
}
/* 导航栏 每个导航 */
#header .header-nav .header-nav-wrapper > li {
  float: left;
  padding: 0 25px;
  position: relative;
}
#header .header-nav .header-nav-wrapper > li.active {
  background: rgb(20,60,158, 0.8);
  border-bottom: 3px solid #fff;
}
/* 导航栏 每个导航下面的 a 链接 */
#header .header-nav .header-nav-wrapper > li > a {
  padding: 15px 0;
  position: relative;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #fff;
  text-shadow: 2px 2px 2px rgb(3,169,253);
}
/* 导航栏 每个导航下面的 a 链接的下划线 */
#header .header-nav .header-nav-wrapper > li > a > i {
  display: block;
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  opacity: 0;
  transition: all 0.6s ease;
  background-color: rgba(31, 101, 236, 1);
}
/* 导航栏 每个导航下面的 a 链接的右侧小三角 */
/* #header .header-nav .header-nav-wrapper > li > a > span {
  font-size: 12px;
  transition: transform ease 0.5s;
} */
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去的样式 */
#header .header-nav .header-nav-wrapper > li:hover {
  background: rgb(20,60,158, 0.8);
}
#header .header-nav .header-nav-wrapper > li:hover >a{
  text-decoration: none;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去下划线的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover .underline {
  opacity: 1;
  width: 100%;
  left: 0;
}
/* 导航栏 每个导航下面的 a 链接 鼠标滑上去三角标的样式 */
#header .header-nav .header-nav-wrapper > li > a:hover span {
  transform: rotate(180deg);
}
/* 导航栏 每个导航下面的 a 链接 鼠标点击后的样式 */
#header .header-nav .header-nav-wrapper > li.active > a {
  text-decoration: none;
  /* border-bottom: 2px solid; */
  font-weight: 550;
  border-bottom-color: linear-gradient(
      135deg,
      rgba(0, 80, 232, 1),
      rgba(111, 160, 255, 1)
    )
    3 3;
}
/* 导航栏 每个导航下面的二级导航容器 */
#header .header-nav .header-nav-wrapper > li > dl {
  display: none;
  position: absolute;
  width: 168px;
  top: 80%;
  left: 0;
  z-index: 999999;
  box-shadow: 0 0 3px 1px #ccc;
  background: #fff;
}
/* 导航栏 每个导航下面的二级导航容器的每个导航 */
#header .header-nav .header-nav-wrapper > li > dl > dt {
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
/* 导航栏 每个导航下面的二级导航容器的每个导航 当鼠标滑上时的样式*/
#header .header-nav .header-nav-wrapper > li > dl > dt > a:hover {
  text-decoration: none;
}
/* 导航栏 滑上一级导航显示二级导航 */
#header .header-nav .header-nav-wrapper > li:hover dl {
  display: block;
}
#header .header-nav .header-nav-wrapper > li > dl > dt:hover {
  cursor: pointer;
  background: #ccc;
}
@media screen and (max-width: 997px) {
  #header .header-nav-m {
    position: relative;
  }
  /* 导航栏logo容器 */
  #header .header-nav-m .header-nav-m-logo {
    height: 80px;
    position: relative;
  }
  /* 导航栏logo图片 */
  #header .header-nav-m .header-nav-m-logo img {
    width: 95px;
    height: 45px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  /* 导航栏  菜单容器 */
  #header .header-nav-m .header-nav-m-menu {
    color: #fff;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    background: #474747;
    position: relative;
  }
  /* 导航栏 菜单图标 */
  #header .header-nav-m .header-nav-m-menu-wrapper {
    position: absolute;
    top: 50%;
    right: 20px;
    margin-top: -20px;
    width: 50px;
    height: 40px;
    color: #fff;
    z-index: 999999;
    font-size: 12px;
  }
  /* 导航栏 */
  #header .header-nav-m .header-nav-m-wrapper {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background: #474747;
    z-index: 9999999;
  }
  /* 导航栏 每个导航 */
  #header .header-nav-m .header-nav-m-wrapper > li {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }
  /* 导航栏 每个导航下面的 a 链接 */
  #header .header-nav-m .header-nav-m-wrapper > li > a {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    padding: 15px 0;
    position: relative;
  }
  /* 导航栏 每个导航下面的 a 链接的右侧小三角 */
  #header .header-nav .header-nav-wrapper > li > a > span {
    font-size: 10px;
  }
}
</style>
