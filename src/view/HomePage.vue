<template>
  <div class="wrapper big_screen">
			<div class="content">
				<div class="col col-l">
					<div class="xpanel-wrapper xpanel-wrapper-50">
						<div class="xpanel xpanel-l-t">
							<div class="title">人工智能技术分类</div>
							<div class="fill-h" id="mainpie"></div>
						</div>
					</div>
					<div class="xpanel-wrapper xpanel-wrapper-50">
						<div class="xpanel xpanel-l-b">
							<div class="title">已评级分类</div>
							<div class="fill-h" id="mainbarx"></div>
						</div>
					</div>
				</div>
				<div class="col col-c">
					<div class="xpanel-wrapper xpanel-wrapper">
						<div class="xpanel no-bg">
              <img src="../assets/img/bigScreen/WechatIMG97.jpg" width="100%" height="100%" />
						</div>
					</div>
				</div>
				<div class="col col-r">
					<div class="xpanel-wrapper xpanel-wrapper-50">
						<div class="xpanel xpanel-r-t">
							<div class="title">已成功匹配案例</div>
							<div class="fill-h" id="mainbar"></div>
						</div>
					</div>
					<div class="xpanel-wrapper xpanel-wrapper-50">
						<div class="xpanel xpanel-r-m">
							<div class="title">人工智能产品分类</div>
							<div class="fill-h" id="mainareapie"></div>
						</div>
					</div>
					<!-- <div class="xpanel-wrapper xpanel-wrapper-45">
						<div class="xpanel xpanel-r-b">
							<div class="title"></div>
						</div>
					</div> -->
				</div>
			</div>
			<div class="footer">
				<div class="col col-c">
					<div class="xpanel-wrapper xpanel-wrapper">
						<div class="xpanel xpanel-c-b">
							<div class="title title-long">需求场景分类</div>
							<div class="fill-h" id="main"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
import { dashboard, map } from "@/api/index.js";
import * as echarts from 'echarts';
import {
  mainpieoption,
  mainbaroption,
  mainbarxoption,
  mainareapieoption,
  myChartoption
} from '../config';

export default {
  name: "Home",
  components: {},
  data() {
    return {
      homeData: {
        totalEnterprise: "",
        totalSolution: "",
        finishedEnterprise: "",
        successSolution: "",
        totalTech: "",
      },
      entData: [],
      BMap: null,
      map: null
    };
  },
  methods: {
    searchClick() {},
    dashboardData() {
      dashboard().then((res) => {
        this.homeData = res.data;
      });
    },
    async mapData() {
      map().then((res) => {
        this.entData = res.data;
        this.initData()
      });
    },
    init ({ BMap, map }) {
      this.map = map;
      this.BMap = BMap;
    },
    initData () {
      let tBMap = this.BMap
      let tMap = this.map
      var point = new this.BMap.Point(116.488376, 39.95048); //设置城市经纬度坐标

      this.map.centerAndZoom(point, 12); //
      this.map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
      this.map.enableScrollWheelZoom(true); //鼠标滚动缩放

      var data_info = [];
      if (this.entData) {
        this.entData.forEach(item => {
          data_info.push([item.longitude, item.latitude, item.enterpriseName])
        });
      }
      console.log(data_info)
      var opts = {
        min_width: 250, // 信息窗口zuixiao宽度
        min_height: 80, // 信息窗口高度
        title: "详细信息", // 信息窗口标题
        enableMessage: false, //设置允许信息窗发送短息
      };
      for (var i = 0; i < data_info.length; i++) {
        var marker = new this.BMap.Marker(
          new this.BMap.Point(data_info[i][0], data_info[i][1])
        ); // 创建标注
        var content = data_info[i][2];
        console.log(content)
        this.map.addOverlay(marker); // 将标注添加到地图中
        // this.addClickHandler(content, marker);

        marker.addEventListener("click", function (e) {
          var p = e.target;
          var point = new tBMap.Point(p.getPosition().lng, p.getPosition().lat);
          var infoWindow = new tBMap.InfoWindow(content, opts); // 创建信息窗口对象
          tMap.openInfoWindow(infoWindow, point); //开启信息窗口
        });
      }

      // function openInfo(content, e) {
      //   var p = e.target;
      //   var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
      //   var infoWindow = new this.BMap.InfoWindow(content, opts); // 创建信息窗口对象
      //   map.openInfoWindow(infoWindow, point); //开启信息窗口
      // }

      //向地图中添加缩放控件
      var ctrl_nav = new this.BMap.NavigationControl({

      });
      this.map.addControl(ctrl_nav);
      //向地图中添加缩略图控件
      var ctrl_ove = new this.BMap.OverviewMapControl({
        isOpen: 1,
      });
      this.map.addControl(ctrl_ove);
      //向地图中添加比例尺控件
      var ctrl_sca = new this.BMap.ScaleControl({  });
      this.map.addControl(ctrl_sca);
    },
    // addClickHandler(content, marker) {
    //   marker.addEventListener("click", function (e) {
    //     openInfo(content, e);
    //   });
    // }
  },
  mounted() {
    this.dashboardData();
    var mainpieDom = document.getElementById('mainpie');
    var mainpie = echarts.init(mainpieDom);
    mainpieoption && mainpie.setOption(mainpieoption);

    var mainbarDom = document.getElementById('mainbar');
    var mainbar = echarts.init(mainbarDom);
    mainbaroption && mainbar.setOption(mainbaroption);

    var mainareapieDom = document.getElementById('mainareapie');
    var mainareapie = echarts.init(mainareapieDom);
    mainareapieoption && mainareapie.setOption(mainareapieoption);

    var mainbarxDom = document.getElementById('mainbarx');
    var mainbarx = echarts.init(mainbarxDom);
    mainbarxoption && mainbarx.setOption(mainbarxoption);

    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    myChartoption && myChart.setOption(myChartoption);

    window.onresize = function() {
      mainpie.resize();
      mainbar.resize();
      mainbarx.resize();
      mainareapie.resize();
      myChart.resize();
    }
    // this.init();
  },
  created () {
    this.dashboardData();
    this.mapData();
  },
};
</script>
<style>
.contain_home {
  background-image: url("../assets/img/home_bg.png");
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  height: 680px;
}
#test {
  width: 50%;
  background-color: #ffffff;
  border-radius: 4px 0px 0px 4px;
}
.bm-view {
  width: 100%;
  height: 100%;
}

.home_title {
  position: absolute;
  top: 150px;
  width: 400px;
  text-align: center;
}
.home_title .title_info {
  font-size: 28px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 32px;
}
.home_title .white_line {
  width: 100%;
  display: flex;
  justify-content: center;
}
.home_title .white_line .title_line {
  height: 6px;
  width: 56px;
  background-color: #ffffff;
  margin-top: 12px;
}
.home-flex {
  height: 600px;
  width: 100%;
  display: flex;
  padding: 0 20% 0 20%;
  position: absolute;
  margin-top: 220px;
  justify-content: center;
}
.home-data {
  background: #ffffff;
  box-shadow: 0px 0px 24px 4px rgba(13, 37, 62, 0.1);
  border-radius: 0px 4px 4px 0px;
  background-image: url('../assets/img/data_bg.png');
}
.home-data ul {
  padding: 60px 100px;
}
.home-data ul li {
  font-size: 24px;
  font-weight: 400;
  height: 30px;
  font-family: PingFangSC-Regular, PingFang SC;
  line-height: 30px;
  padding: 32px 0;
  list-style-type: disc;
  color: #3154ef !important;
}

.home-data ul li span {
  color: #333333;
}
.data_num {
  font-size: 32px !important;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #0755e9 !important;
  line-height: 38px;
}
.data_unit {
  font-size: 16px;
}
</style>
