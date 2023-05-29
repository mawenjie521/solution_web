import * as echarts from 'echarts';
const mainpieoption = {
    series: [
        {
        name: '人工智能技术分类',
        type: 'pie',
        radius: '60%',
        data: [
            { value: 1048, name: '数据相关' },
            { value: 735, name: '算法技术分类' },
            { value: 580, name: '算力技术分类' },
        ],
        label: {
            // alignTo: 'edge',
            formatter: '{name|{b}}\n{time|{c} 项}',
            // minMargin: 5,
            edgeDistance: 10,
            lineHeight: 15,
            rich: {
              time: {
                fontSize: 10,
                color: '#999'
              }
            }
          },
          labelLine: {
            length: 25,
            length2: 0,
            maxSurfaceAngle: 80
          },
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
        }
    ]
};

const mainareapieoption = {
    series: [
        {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [10, 80],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
            borderRadius: 4
        },
        label: {
            // alignTo: 'edge',
            formatter: '{name|{b}}\n{time|{c} 项}',
            // minMargin: 5,
            edgeDistance: 10,
            lineHeight: 15,
            rich: {
              time: {
                fontSize: 10,
                color: '#999'
              }
            }
          },
        data: [
            { value: 40, name: '算力设备' },
            { value: 38, name: '终端设备' },
            { value: 32, name: 'SaaS服务' },
            { value: 30, name: 'AI平台' },
            { value: 28, name: 'AI生态' },
            { value: 26, name: '数据' }
        ]
        }
    ]
};

const mainbaroption = {
    grid: {
        top: '10%',
        left: '5%',
        right: '15%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['100万以下', '100万-500万', '500万-1000万', '1000万-2000万', '2000万以上'],
        axisLabel: { interval: 0, rotate: -30 }
    },
    yAxis: {
        type: 'value',
        splitLine: false,
    },
    itemStyle: {
        borderRadius: 10
    },
    series: [
        {
            data: [120, 200, 150, 80, 70],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            },
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgb(241,66,98)' },
                    { offset: 0.5, color: 'rgb(250,180,64)' },
                    { offset: 1, color: 'rgb(255,255,40)' }
                ])
            },
            emphasis: {
                itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgb(255,255,40)' }
                ])
                }
            },
            barWidth:15,
            label: {
                show: true,
                precision: 1,
                position: 'top',
                valueAnimation: true,
                fontFamily: 'monospace'
            }
        }
    ]
};

const mainbarxoption = {
    grid: {
        top: '10%',
        left: '5%',
        right: '5%',
        bottom: '10%',
        containLabel: true
    },
    itemStyle: {
        borderRadius: 10
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: false,
    },
    yAxis: {
        type: 'category',
        data: ['AAA', 'AA', 'A', 'BBB', 'BB']
    },
    series: [
        {
            name: '2011',
            type: 'bar',
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgb(241,66,98)' },
                    { offset: 0.5, color: 'rgb(250,180,64)' },
                    { offset: 1, color: 'rgb(255,255,40)' }
                ])
            },
            emphasis: {
                itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgb(255,255,40)' }
                ])
                }
            },
            data: [18203, 23489, 29034, 104970, 131744],
            barWidth:10,
            label: {
                show: true,
                precision: 1,
                position: 'right',
                valueAnimation: true,
                fontFamily: 'monospace'
            }
        }
    ]
};

const myChartoption = {
    grid: {
        top: '10%',
        left: '5%',
        right: '5%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: [
            '智慧城市', 
            '智慧金融', 
            '智慧文旅', 
            '智慧医疗', 
            '数智安全', 
            '智慧交通', 
            '智慧能源',
            '智慧环保',
            '智慧政务',
            '智慧生产',
            '智能制造',
            '智慧农业',
            '智慧物流',
            '智慧教育',
            '智慧家居',
            '智慧公安',
            '智慧营销',
            '智慧教育',
            '智慧营区',
            '其它场景',
        ],
        axisLabel: { interval: 0, rotate: -30 }
    },
    yAxis: {
        type: 'value',
        splitLine: false,
    },
    itemStyle: {
        borderRadius: 15
    },
    series: [
        {
        data: [120, 200, 150, 80, 70, 110, 130,120, 200, 150, 80, 70, 110, 130,120, 200, 150, 80, 70, 110],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
        },
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgb(11,238,222)' },
                { offset: 0.5, color: 'rgb(15,200,239)' },
                { offset: 1, color: 'rgb(3,169,253)' }
            ])
        },
        emphasis: {
            itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#2378f7' },
                { offset: 0.7, color: '#2378f7' },
                { offset: 1, color: '#83bff6' }
            ])
            }
        },
        barWidth:20,
        label: {
            show: true,
            precision: 1,
            position: 'top',
            valueAnimation: true,
            fontFamily: 'monospace'
        }
        }
    ]
};

export {
    mainpieoption,
    mainbaroption,
    mainbarxoption,
    mainareapieoption,
    myChartoption
}
