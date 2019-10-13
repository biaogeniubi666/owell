﻿
$(function () {

// airdata();setInterval(function(){airdata();}, 60000);
e555();
e666();
e777();
e888();

function e555() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('e555'));

    var radarStyle = document.createElement("style"); 
    var str = `
        #radar:after {
          content: ' ';
          display: block;
          background-image: linear-gradient(44deg, rgba(0, 255, 51, 0) 50%, #00ff33 100%);
          width: 180px;
          height: 180px;
          position: absolute;
          top: 50%;
          left: 50%;
          animation: radar-beam 4s infinite;
          animation-timing-function: linear;
          transform-origin: bottom right;
          border-radius: 100% 0 0 0;
        }
        @keyframes radar-beam {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
    `;
    if(radarStyle.styleSheet){         //ie下  
        radarStyle.styleSheet.cssText = str;  
    } else {  
        radarStyle.innerHTML = str;
    };
    document.getElementsByTagName("head")[0].appendChild(radarStyle);
    
    var radarDiv = document.createElement('div');
    radarDiv.id = 'radar';
    radarDiv.style.position = 'relative';
    radarDiv.style.width = '500px';
    radarDiv.style.height = '500px';
    radarDiv.style.margin = '0 auto';
    var body = document.querySelector('body');
    body.appendChild(radarDiv);
    
    var mockData = [{
        text: '灭火器压力检测',
        value: 2
    }, {
        text: '燃气检测',
        value: 3.2
    }, {
        text: '烟雾检测',
        value: 5
    }, {
        text: '火源探测',
        value: 4.1
    }];
    
    var container = document.getElementById('radar');
    var radar = echarts.init(container);
    
    initRadar(mockData);
    
    function initRadar(mockData){
        var minAngle = 10;	// 最小角度
        var indicator = [];
        var data = [];
        var idx = 0;
        var randomArr = getRandom(360 / minAngle, mockData.length);
        for(var i=0;i<360 / minAngle;i++){
            if(randomArr.indexOf(i) > -1){
                indicator.push({
                    text: mockData[idx].text
                });
                data.push(mockData[idx].value);
                idx++;
            }else{
                indicator.push({
                    text: i * 10 + '`'
                });
                data.push('-');
            }
        };
        var option = {
            
            radar: [
                {
                    indicator: indicator,
                    center: ['50%', '50%'],
                    radius: 180,
                    startAngle: 90,
                    splitNumber: 4,
                    shape: 'circle',
                    name: {
                        show: false,
                        // formatter:'【{value}】',
                        // textStyle: {
                        //     color:'rgba(0, 255, 51, 1)'
                        // }
                    },
                    splitArea: {
                        areaStyle: {
                            color: 'rgba(255, 255, 255, 0)'
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(0, 255, 51, 0)'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(0, 255, 51, 1)'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '雷达图',
                    type: 'radar',
                    symbol: 'circle',
                    symbolSize: 24,
                    silent: true,
                    animationEasing: 'quarticOut',
                    animationEasingUpdate: 'quarticOut',
                    animationDuration: 2000,
                    animationDurationUpdate: 2000,
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: 'rgba(0, 255, 51, 1)'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            opacity: 0
                        },
                        emphasis: {
                            color: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.3,
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(0, 255, 51, 1)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(255, 255, 255, .1)'
                                }]
                            },
                            borderWidth: 0, 
                            opacity: 1
                        }
                    },
                    data: [
                        {
                            value: data,
                            label: {
                                normal: {
                                    textStyle: {
                                        color: 'rgba(0, 255, 51, 1)'
                                    }
                                }
                            },
                            lineStyle: {
                                normal: {
                                    opacity: 0
                                }
                            }
                        }
                    ]
                }
            ]
        };
        
        myChart.setOption(option);
        
        function getRandom(range, count){
            var randomArr = [];
            for(var i = 0;i < count;i++){
                var r = Math.round(Math.random() * (range - 1));
                randomArr.push(r);
            }
            return randomArr;
        }
    }
    
    // 点动画
    (function(){
        var highlight = false;
        var type;
        setInterval(function(){
            initRadar(mockData);
            type = highlight ? 'downplay' : 'highlight';
            radar.dispatchAction({
                type: type,
                seriesIndex: 0
            });
            highlight = !highlight;
        }, 2000);
    })();
    // 使用刚指定的配置项和数据显示图表。
  //  myChart.setOption(option);
   // window.addEventListener("resize",function(){
      //  myChart.resize();
    
}
function e666() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('e666'));
    option = {
        tooltip: {},
        legend: {
            data: ['综合院','无线院','培训室','会议室'],
            textStyle: {
                color: '#FFFFFF',
                    fontSize:'12',
                }
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#FFFFFF',
                    backgroundColor: '#000000',
                    borderRadius: 3,
                    padding: [3, 5]
               }
            },
            indicator: [
               { name: '色温', max: 6500},
               { name: '稳定度', max: 16000},
               { name: '台面光强', max: 30000},
               { name: '透光率', max: 38000},
               { name: '炫光控制', max: 52000},
               { name: '节能效比', max: 25000}
            ]
        },
        color:['#00B2EE','#088A08','#D7DF01','#DF3A01'],
        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
                {
                    value : [4300, 10000, 28000, 35000, 50000, 19000],
                    name : '综合院'
                },
                {
                    value : [4300, 11100, 24440, 35000, 50000, 1900],
                    name : '无线院'
                },
                {
                    value : [4300, 10000, 26660, 35000, 50000, 9800],
                    name : '培训室'
                },
                {
                    value : [4300, 10000, 28000, 2200, 5040, 3000],
                    name : '会议室'
                },

            ]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}

function e777() {

    var myChart = echarts.init(document.getElementById('e777'));
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:['站立时长达标人数', '健身房使用次数', '运动步数达标人数'],
            textStyle: {
                color: '#FFFFFF',
                    fontSize:'12',
                },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'value',
                nameTextStyle:{
                    color:  "#FFF",
                    fontSize: 12,
                },
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: 1,
                    type: "solid"
                },
                axisLabel:  {
                    interval: 0,
                   // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                         color: "#FFF",
                        fontSize: '12',
                    },
                },
            }
        ],
        yAxis : [
            {
                type : 'category',
                axisTick : {show: false},
                data : ['周一','周二','周三','周四','周五','周六','周日'],
                axisLabel:  {
                    interval: 0,
                   // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                         color: "#FFF",
                        fontSize: '12',
                    },
                },
            }
        ],
        color:['#00B2EE','#088A08','#D7DF01','#DF3A01'],
        series : [
            {
                name:'站立时长达标人数',
                type:'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    }
                },
                data:[200, 170, 240, 244, 200, 220, 210]
            },
            {
                name:'健身房使用次数',
                type:'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true
                    }
                },
                data:[320, 302, 341, 374, 390, 450, 420]
            },
            {
                name:'运动步数达标人数',
                type:'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'left'
                    }
                },
                data:[-120, -132, -101, -134, -190, -230, -210]
            }
        ]};
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}

function e888() {

    var myChart = echarts.init(document.getElementById('e888'));

    option = {
        legend: {
            data: ['声音舒适性','热舒适性','嗅觉舒适性'],
            textStyle: {
                color: '#FFFFFF',
                    fontSize:'12',
                }
        },
        angleAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            z: 10,
            axisLabel:{
                color:'#FFF',
            }
        },
        radiusAxis: {
        },
        polar: {
        },
        series: [{
            type: 'bar',
            data: [1, 2, 3, 4, 3, 5, 1],
            coordinateSystem: 'polar',
            name: '声音舒适性',
            stack: 'a',
        }, {
            type: 'bar',
            data: [2, 4, 6, 1, 3, 2, 1],
            coordinateSystem: 'polar',
            name: '热舒适性',
            stack: 'a'
        }, {
            type: 'bar',
            data: [1, 2, 3, 4, 1, 2, 5],
            coordinateSystem: 'polar',
            name: '嗅觉舒适性',
            stack: 'a'
        }],
        color:['#00B2EE','#088A08','#D7DF01','#DF3A01']
    };
    
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}
})



		
		
		


		









