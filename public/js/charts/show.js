
$(function () {


// ------------------------------------------------------------------------echart图表区------------------------------------------------------------//



// airdata();setInterval(function(){airdata();}, 60000);

e111();setInterval(function(){e111();}, 1500);
e222();setInterval(function(){e222();},  5000);
e444();setInterval(function(){e444();}, 4000);
e555();
e666();setInterval(function(){e666();},  3000);
e777();
e888();setInterval(function(){e888();}, 3500);
e999();setInterval(function(){e999();},  2500);









function e111() {

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('e111'));

    option = {
    //    backgroundColor: '#0f375f',
       grid: {
            left: '5%', // 与容器左侧的距离
            right: '15%', // 与容器右侧的距离
            top: "15%",
            bottom: "20%"
       },
    //    tooltip: {
    //        trigger: "axis",
    //        axisPointer: {
    //            type: "line",
    //            label: {
    //                show: false,
    //            }
    //        }
    //    },
       legend: {
           data: ["甲醛浓度", "VOC"],
           top: "15%",
           textStyle: {
               fontSize: 24,
               color: "#ffffff"
           }
       },
       xAxis: {
           data: [
               "一月",
               "二月",
               "三月",
               "四月",
               "五月",
               "六月",
               "七月",
               "八月",
               "九月",
               "十月",
               "十一月",
               "十二月",
           ],
          
           axisLine: {
               show: true //隐藏X轴轴线
           },
           axisTick: {
               show: true //隐藏X轴刻度
           },
           axisLabel: {
               show: true,
               rotate:45,
               textStyle: {
                    fontSize:24,
                   color: "#ebf8ac", //X轴文字颜色
                   margin:20,
                
               }
           },
            axisLine: {
                       lineStyle: {
                           color: '#ebf8ac'
                           }
                   },
       },
       yAxis: [
           {
               type: "value",
               name: "PPM",
               nameTextStyle: {
                   color: "#ebf8ac",
                   fontSize: 24,
               },
               splitLine: {
                   show: false
               },
               splitLine: {
                   show: false
               },
               axisTick: {
                   show: true
               },
               axisLine: {
                   show: true
               },
               axisLabel: {
                   show: true,
                   textStyle: {
                       fontSize:24,
                       color: "#ebf8ac"
                   }
               },
                axisLine: {
                           lineStyle: {
                               color: '#FFFFFF'
                               }
                       },
           },
           {
               type: "value",
               name: "浓度",
               nameTextStyle: {
                   color: "#ebf8ac",
                   fontSize:24
               },
               position: "right",
               splitLine: {
                   show: false
               },
               splitLine: {
                   show: false
               },
               axisTick: {
                   show: false
               },
               axisLine: {
                   show: false
               },
               axisLabel: {
                   show: true,
                   formatter: "{value} %", //右侧Y轴文字显示
                   textStyle: {
                       color: "#ebf8ac",
                       fontSize:24
                   }
               }
           },

       ],
       series: [{
               name: "甲醛浓度",
               type: "line",
               yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
               smooth: true, //平滑曲线显示
               showAllSymbol: true, //显示所有图形。
               symbol: "circle", //标记的图形为实心圆
               symbolSize: 30, //标记的大小
               itemStyle: {
                   //折线拐点标志的样式
                   color: "#058cff"
               },
               lineStyle: {
                   color: "#058cff"
               },
               areaStyle:{
                   color: "rgba(5,140,255, 0.2)"
               },
               data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5, 2, 3.3, 8.8, 4.6]
           },
           {
               name: "VOC",
               type: "bar",
               barWidth: 25,
               itemStyle: {
                   normal: {
                       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                               offset: 0,
                               color: "#00FFE3"
                           },
                           {
                               offset: 1,
                               color: "#4693EC"
                           }
                       ])
                   }
               },
               data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5, 2, 3.3, 8.8,4.6]
           }
       ]
   };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}

function e222() {

    var myChart = echarts.init(document.getElementById('e222'));

    var randome21 = [randomNum(1,20)];


    let scaleData = [

        {
            'name': '浑浊度',
            'value': randome21[0]
        },
        {
            'name': '透明度',
            'value': 10
        },{
            'name': '气味',
            'value': 35
        },
        {
            'name': '细菌总数',
            'value': 10
        },{
            'name': 'PH值',
            'value': 45
        },
        {
            'name': '微量有害化学元素含量',
            'value': 15
        }

    ];
    let colorgraphic = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
        {
            offset: 0,
            color: '#5CF9FE' // 0% 处的颜色
        },
        {
            offset: 0.4,
            color: '#468EFD' // 100% 处的颜色
        },
        {
            offset: 0.6,
            color: '#468EFD' // 100% 处的颜色
        },
        {
            offset: 1,
            color: '#5CF9FE' // 100% 处的颜色
        }
    ]);
    let grid = {
        left: '5px', // 与容器左侧的距离
        right: '5px', // 与容器右侧的距离
        top: '5px', // 与容器顶部的距离
        bottom: '5px', // 与容器底部的距离
    };
    let placeHolderStyle = {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 0
        }
    };
    let data = [];
    let color = ['#5CF9FE'];
    let colorSet = [
        [0.91, color],
        [1, '#15337C']
    ];
    let rich = {
        white: {
            fontSize: 50,
            color: '#fff',
            fontWeight: '500',
            padding: [-150, 0, 0, 0]
        },
        bule: {
            fontSize: 120,
            fontFamily: 'DINBold',
            color: '#fff',
            fontWeight: '700',
            padding: [-120, 0, 0, 0],
        },
        radius: {
            width: 350,
            height: 80,
            // lineHeight:80,
            borderWidth: 1,
            borderColor: '#0092F2',
            fontSize: 50,
            color: '#fff',
            backgroundColor: '#1B215B',
            borderRadius: 20,
            textAlign: 'center',
        },
        size: {
            height: 400,
            padding: [100, 0, 0, 0]
        }
    };
    for (var i = 0; i < scaleData.length; i++) {
        data.push({
            value: scaleData[i].value,
            name: scaleData[i].name,
            label: {
                color: '#dfe9e3'
            },
            labelLine: {
                show: true,
                length: 20,
                length2: 40,
                lineStyle: {
                    color: '#053256',
                    width: 2
                }
            },
            itemStyle: {
                normal: {
                    borderWidth:0,
                    shadowBlur: 20,
                    borderColor:'#00f948',
                    shadowColor: '#12b4ff',

                }
            }

        }, {
            value: 0.5,
            name: '',
            itemStyle: placeHolderStyle
        });
    }
    let seriesObj = [
        { //内圆
                type: 'pie',
                radius: '66%',
                center: ['50%', '50%'],
                z: 0,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.RadialGradient(.5, .5, 1, [{
                                offset: 0,
                                color: 'rgba(17,24,43,0)'
                            },
                            {
                                offset: .5,
                                // color: '#1E2B57'
                                color:'rgba(28,42,91,.6)'
                            },
                            {
                                offset: 1,
                                color: '#141C33',
                                // color:'rgba(17,24,43,0)'
                            }
                        ], false),
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                },
                hoverAnimation: false,
                label: {
                    show: false,
                },
                tooltip: {
                    show: false
                },
                data: [100],
            },
            { //内圆
                type: 'pie',
                radius: '56%',
                center: ['50%', '50%'],
                z: 1,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.RadialGradient(.5, .5, .8, [{
                                offset: 0,
                                color: '#4978EC'
                            },
                            {
                                offset: .5,
                                color: '#1E2B57'
                            },
                            {
                                offset: 1,
                                color: '#141F3D'
                            }
                        ], false),
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                },
                hoverAnimation: false,
                label: {
                    show: false,
                },
                tooltip: {
                    show: false
                },
                data: [100],
            },
            {
                type: 'gauge',
                name: '外层辅助',
                radius: '60%',
                startAngle: '225',
                endAngle: '-134.999',
                splitNumber: '100',
                pointer: {
                    show: false
                },
                detail: {
                    show: false,
                },
                data: [{
                    value: 1
                }],
                // data: [{value: 1, name: 90}],
                title: {
                    show: true,
                    offsetCenter: [0, 30],
                    textStyle: {
                        color: '#fff',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 20,
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: [
                            [1, '#00FFFF']
                        ],
                        width: 2,
                        opacity: 1
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    length: 20,
                    lineStyle: {
                        color: '#051932',
                        width: 0,
                        type: 'solid',
                    },
                },
                axisLabel: {
                    show: false
                }
            },
            {
                type: 'gauge',
                name: '外层辅助',
                radius: '45%',
                startAngle: '225',
                endAngle: '-134.999',
                splitNumber: '100',
                pointer: {
                    show: false
                },
                detail: {
                    show: false,
                },
                data: [{
                    value: 1
                }],
                // data: [{value: 1, name: 90}],
                title: {
                    show: true,
                    offsetCenter: [0, 30],
                    textStyle: {
                        color: '#fff',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 20,
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: [
                            [1, '#00FFFF']
                        ],
                        width: 2,
                        opacity: 1
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    length: 20,
                    lineStyle: {
                        color: '#051932',
                        width: 0,
                        type: 'solid',
                    },
                },
                axisLabel: {
                    show: false
                }
            },

            {
        name: '',
        type: 'pie',
        clockWise: false,
        radius: ['50%', '56%'],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'outside',
                    color: '#f4fff7',
                    formatter: function(params) {
                        var percent = 0;
                        var total = 0;
                        for (var i = 0; i < scaleData.length; i++) {
                            total += scaleData[i].value;
                        }
                        percent = ((params.value / total) * 100).toFixed(0);
                        if (params.name !== '') {
                            return params.name + '\n' + '' + percent + '%';
                        } else {
                            return '';
                        }
                    },
                    textStyle: {
                        fontSize: 24
                    },

                },


            }
        },
        data: data
    }];
    option = {
        // backgroundColor: '#04243E',
        color: color,
        grid: grid,
        tooltip: {
            show: false
        },
        legend: {
            show: false
        },
        series: seriesObj
    };


    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}

function e444() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('e444'));
    var randome41 = [randomNum(25,40),randomNum(8,15),randomNum(3,5)];
    var scaleData = [{
        'name': '谷类',
        'value': randome41[0]
    },
    {
        'name': '果蔬',
        'value': randome41[1]
    },
    {
        'name': '奶制品',
        'value': 10
    },
    {
        'name': '肉类、豆类',
        'value': randome41[2]
    },
    {
        'name': '脂肪、甜品',
        'value': 5
    },
    ];
    var rich = {
    white: {
        color: '#fff',
        fontSize: '24',
        fontWeight: 'bold',
        align: 'center',
        padding: [3, 0]
    }
    };
    var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
    }
    };
    var data = [];
    var color=['#ff3000','#00cfff','#006ced','#ffe000','#ffa800','#ff5b00','#ff3000']
    for (var i = 0; i < scaleData.length; i++) {
    data.push({
        value: scaleData[i].value,
        name: scaleData[i].name,
        itemStyle: {
            normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor:color[i],
                shadowColor: color[i]
            }
        }
    }, {
        value: 2,
        name: '',
        itemStyle: placeHolderStyle
    });
    }
    var seriesObj = [{
    name: '',
    type: 'pie',
    clockWise: false,
    radius: [195, 200],
    hoverAnimation: false,
    itemStyle: {
        normal: {
            label: {
                show: true,
                position: 'outside',
                color: '#fff',
                fontSize: '24',
                fontWeight: 'bold',
                formatter: function(params) {
                    var percent = 0;
                    var total = 0;
                    for (var i = 0; i < scaleData.length; i++) {
                        total += scaleData[i].value;
                    }
                    percent = ((params.value / total) * 100).toFixed(0);
                    if(params.name !== '') {
                        return params.name + '\n{white|' + '占比' + percent + '%}';
                    }else {
                        return '';
                    }
                },
                rich: rich
            },
            labelLine: {
                length:30,
                length2:100,
                show: true,
                color:'#00ffff'
            }
        }
    },
    data: data
    }];
    option = {
    tooltip: {
        show: false
    },
    legend: {
        show: false
    },
    toolbox: {
        show: false
    },
    series: seriesObj
    }

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}


function e555() {
    var myChart = echarts.init(document.getElementById('e555'));

    var dataBJ = [
        [1,55,9,56,0.46,18,6,"良"],
        [2,25,11,21,0.65,34,9,"优"],
        [3,56,7,63,0.3,14,5,"良"],
        [4,33,7,29,0.33,16,6,"优"],
        [5,42,24,44,0.76,40,16,"优"],
        [6,82,58,90,1.77,68,33,"良"],
        [7,74,49,77,1.46,48,27,"良"],
        [8,78,55,80,1.29,59,29,"良"],
        [9,267,216,280,4.8,108,64,"重度污染"],
        [10,185,127,216,2.52,61,27,"中度污染"],
        [11,39,19,38,0.57,31,15,"优"],
        [12,41,11,40,0.43,21,7,"优"],
        [13,64,38,74,1.04,46,22,"良"],
        [14,108,79,120,1.7,75,41,"轻度污染"],
        [15,108,63,116,1.48,44,26,"轻度污染"],
        [16,33,6,29,0.34,13,5,"优"],
        [17,94,66,110,1.54,62,31,"良"],
        [18,186,142,192,3.88,93,79,"中度污染"],
        [19,57,31,54,0.96,32,14,"良"],
        [20,22,8,17,0.48,23,10,"优"],
        [21,39,15,36,0.61,29,13,"优"],
        [22,94,69,114,2.08,73,39,"良"],
        [23,99,73,110,2.43,76,48,"良"],
        [24,31,12,30,0.5,32,16,"优"],
        [25,42,27,43,1,53,22,"优"],
        [26,154,117,157,3.05,92,58,"中度污染"],
        [27,234,185,230,4.09,123,69,"重度污染"],
        [28,160,120,186,2.77,91,50,"中度污染"],
        [29,134,96,165,2.76,83,41,"轻度污染"],
        [30,52,24,60,1.03,50,21,"良"],
        [31,46,5,49,0.28,10,6,"优"]
    ];
    
    var dataGZ = [
        [1,26,37,27,1.163,27,13,"优"],
        [2,85,62,71,1.195,60,8,"良"],
        [3,78,38,74,1.363,37,7,"良"],
        [4,21,21,36,0.634,40,9,"优"],
        [5,41,42,46,0.915,81,13,"优"],
        [6,56,52,69,1.067,92,16,"良"],
        [7,64,30,28,0.924,51,2,"良"],
        [8,55,48,74,1.236,75,26,"良"],
        [9,76,85,113,1.237,114,27,"良"],
        [10,91,81,104,1.041,56,40,"良"],
        [11,84,39,60,0.964,25,11,"良"],
        [12,64,51,101,0.862,58,23,"良"],
        [13,70,69,120,1.198,65,36,"良"],
        [14,77,105,178,2.549,64,16,"良"],
        [15,109,68,87,0.996,74,29,"轻度污染"],
        [16,73,68,97,0.905,51,34,"良"],
        [17,54,27,47,0.592,53,12,"良"],
        [18,51,61,97,0.811,65,19,"良"],
        [19,91,71,121,1.374,43,18,"良"],
        [20,73,102,182,2.787,44,19,"良"],
        [21,73,50,76,0.717,31,20,"良"],
        [22,84,94,140,2.238,68,18,"良"],
        [23,93,77,104,1.165,53,7,"良"],
        [24,99,130,227,3.97,55,15,"良"],
        [25,146,84,139,1.094,40,17,"轻度污染"],
        [26,113,108,137,1.481,48,15,"轻度污染"],
        [27,81,48,62,1.619,26,3,"良"],
        [28,56,48,68,1.336,37,9,"良"],
        [29,82,92,174,3.29,0,13,"良"],
        [30,106,116,188,3.628,101,16,"轻度污染"],
        [31,118,50,0,1.383,76,11,"轻度污染"]
    ];
    
    var dataSH = [
        [1,91,45,125,0.82,34,23,"良"],
        [2,65,27,78,0.86,45,29,"良"],
        [3,83,60,84,1.09,73,27,"良"],
        [4,109,81,121,1.28,68,51,"轻度污染"],
        [5,106,77,114,1.07,55,51,"轻度污染"],
        [6,109,81,121,1.28,68,51,"轻度污染"],
        [7,106,77,114,1.07,55,51,"轻度污染"],
        [8,89,65,78,0.86,51,26,"良"],
        [9,53,33,47,0.64,50,17,"良"],
        [10,80,55,80,1.01,75,24,"良"],
        [11,117,81,124,1.03,45,24,"轻度污染"],
        [12,99,71,142,1.1,62,42,"良"],
        [13,95,69,130,1.28,74,50,"良"],
        [14,116,87,131,1.47,84,40,"轻度污染"],
        [15,108,80,121,1.3,85,37,"轻度污染"],
        [16,134,83,167,1.16,57,43,"轻度污染"],
        [17,79,43,107,1.05,59,37,"良"],
        [18,71,46,89,0.86,64,25,"良"],
        [19,97,71,113,1.17,88,31,"良"],
        [20,84,57,91,0.85,55,31,"良"],
        [21,87,63,101,0.9,56,41,"良"],
        [22,104,77,119,1.09,73,48,"轻度污染"],
        [23,87,62,100,1,72,28,"良"],
        [24,168,128,172,1.49,97,56,"中度污染"],
        [25,65,45,51,0.74,39,17,"良"],
        [26,39,24,38,0.61,47,17,"优"],
        [27,39,24,39,0.59,50,19,"优"],
        [28,93,68,96,1.05,79,29,"良"],
        [29,188,143,197,1.66,99,51,"中度污染"],
        [30,174,131,174,1.55,108,50,"中度污染"],
        [31,187,143,201,1.39,89,53,"中度污染"]
    ];
    
    var schema = [
        {name: 'date', index: 0, text: '日'},
        {name: 'AQIindex', index: 1, text: 'AQI指数'},
        {name: 'PM25', index: 2, text: 'PM2.5'},
        {name: 'PM10', index: 3, text: 'PM10'},
        {name: 'CO', index: 4, text: '一氧化碳（CO）'},
        {name: 'NO2', index: 5, text: '二氧化氮（NO2）'},
        {name: 'SO2', index: 6, text: '二氧化硫（SO2）'}
    ];
    
    
    var itemStyle = {
        opacity: 0.8,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    };
    
    option = {
        // backgroundColor: '#404a59',
        color: [
            '#dd4444', '#fec42c', '#80F1BE'
        ],
        // legend: {
        //     top: 10,
        //     data: ['北京', '上海', '广州'],
        //     textStyle: {
        //         color: '#fff',
        //         fontSize: 16
        //     }
        // },
        grid: {
            left: '5%',
            right: 150,
            top: '10%',
            bottom: '5%'
        },
        tooltip: {
            padding: 60,
            fontSize:300,
            backgroundColor: '#222',
            borderColor: '#777',
            borderWidth: 1,
            formatter: function (obj) {
                var value = obj.value;
                return '<div style=" font-size: 50px;padding-bottom: 30px;margin-bottom: 0px;line-height:60px">'
                    + obj.seriesName + ' ' + value[0] + '日：'
                    + value[7]
                   
                    + schema[1].text + '：' + value[1] + '<br>'
                    + schema[2].text + '：' + value[2] + '<br>'
                    + schema[3].text + '：' + value[3] + '<br>'
                    + schema[4].text + '：' + value[4] + '<br>'
                    + schema[5].text + '：' + value[5] + '<br>'
                    + schema[6].text + '：' + value[6] + '<br>'
                    + '</div>';
                   
            }
        },
        xAxis: {
            type: 'value',
            name: '日期',
            nameGap: 16,
            nameTextStyle: {
                color: '#fff',
                fontSize: 14
            },
            max: 31,
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#eee'
                }
            }
        },
        yAxis: {
            type: 'value',
            name: 'AQI指数',
            nameLocation: 'end',
            nameGap: 20,
            nameTextStyle: {
                color: '#fff',
                fontSize: 16
            },
            axisLine: {
                lineStyle: {
                    color: '#eee'
                }
            },
            splitLine: {
                show: false
            }
        },
        visualMap: [
            {
               
                min: 800,
                max: 800,
               
                inRange: {
                    symbolSize: [100, 100]
                },
                outOfRange: {
                    symbolSize: [100, 100],
                    color: ['rgba(255,255,255,.2)']
                },
                
            },
            
        ],
        series: [
            {
                name: '北京',
                type: 'scatter',
                itemStyle: itemStyle,
                data: dataBJ
            },
            {
                name: '上海',
                type: 'scatter',
                itemStyle: itemStyle,
                data: dataSH
            },
            {
                name: '广州',
                type: 'scatter',
                itemStyle: itemStyle,
                data: dataGZ
            }
        ]
    };







    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });

}

function e666() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('e666'));

    var legendData = ['办公区', '会议区']; //图例

    var indicator = [
        {
            text: '色温',
            max: 6000
        },{
            text: '稳定度',
            max: 5000
        },{
            text: '台面光强',
            max: 5000
        },{
            text: '炫光控制',
            max: 5000,
            //  axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}
        },{
            text: '透光率',
            max: 5000
        },{
            text: '节能效比',
            max: 5000
        }
    ];

    var dataArr = [{
            value: [4300, 4700, 3600, 3900, 3800, 4200],
            name: legendData[0],
            itemStyle: {
                normal: {
                    lineStyle: {
                        color: '#4A99FF',
                        // shadowColor: '#4A99FF',
                        // shadowBlur: 10,
                    },
                    shadowColor: '#4A99FF',
                    shadowBlur: 10,
                },
            },
            areaStyle: {
                normal: { // 单项区域填充样式
                    color: {
                        type: 'linear',
                        x: 0, //右
                        y: 0, //下
                        x2: 1, //左
                        y2: 1, //上
                        colorStops: [{
                            offset: 0,
                            color: '#4A99FF'
                        }, {
                            offset: 0.5,
                            color: 'rgba(0,0,0,0)'
                        }, {
                            offset: 1,
                            color: '#4A99FF'
                        }],
                        globalCoord: false
                    },
                    opacity: 1 // 区域透明度
                }
            }
        },
        {
            value: [3200, 3000, 3400, 2000, 3900, 2000],
            name: legendData[1],
            itemStyle: {
                normal: {
                    lineStyle: {
                        color: '#4BFFFC',
                        // shadowColor: '#4BFFFC',
                        // shadowBlur: 10,
                    },
                    shadowColor: '#4BFFFC',
                    shadowBlur: 10,
                },
            },
            areaStyle: {
                normal: { // 单项区域填充样式
                    color: {
                        type: 'linear',
                        x: 0, //右
                        y: 0, //下
                        x2: 1, //左
                        y2: 1, //上
                        colorStops: [{
                            offset: 0,
                            color: '#4BFFFC'
                        }, {
                            offset: 0.5,
                            color: 'rgba(0,0,0,0)'
                        }, {
                            offset: 1,
                            color: '#4BFFFC'
                        }],
                        globalCoord: false
                    },
                    opacity: 1 // 区域透明度
                }
            }
        }
    ];

    var colorArr = ['#4A99FF', '#4BFFFC']; //颜色

    option = {
        // backgroundColor: '#101736',
        color: colorArr,
        legend: {
            orient: 'vertical',
            icon: 'circle', //图例形状
            data: legendData,
            bottom: 35,
            right: 40,
            itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
            itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
            itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
            textStyle: {
                fontSize: 24,
                color: '#00E4FF',
            },
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    fontSize: 24
                },
            },
            indicator: indicator,
            splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                show: true,
                areaStyle: { // 分隔区域的样式设置。
                    color: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                }
            },
            axisLine: { //指向外圈文本的分隔线样式
                lineStyle: {
                    color: '#153269'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#113865', // 分隔线颜色
                    width: 1, // 分隔线线宽
                }
            },
        },
        series: [{
            type: 'radar',
            symbolSize: 8,
            // symbol: 'angle',
            data: dataArr
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}

function e777() {

    var d = (function (){
        var res1 = [];
        var res2 = [];
        var res3 = [];
        var res4 = [];
        var len = 13;
        while (len--) {
            res1.push(randomNum(2, 4)*10);
            res2.push(randomNum(5, 7)*10);
            res3.push(randomNum(1, 2)*10);
            res4.push(randomNum(7, 10)*10);
        }
        return [res1,res2,res3,res4];
    })()


    function echart7(data) {

        var myChart7 = echarts.init(document.getElementById('e777'));

        var fontColor = '#FAFAFA';

        option ={
            grid: {
                left: '5%',
                right: '5%',
                top:'15%',
                bottom: '5',
                containLabel: true
            },
            tooltip : {
                show: true,
                trigger: 'item'
            },
            legend: {
                show:true,
                x:'center',
                top:'5%',
                // y:'35',
                icon: 'stack',
                itemWidth:10,
                itemHeight:10,
                textStyle: {
                    color: '#FFFFFF',
                        fontSize:'24',
                    },
                data:['健身步数达标人数','站立时长达标人数','健身房使用次数','本月最佳步数/100']
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    axisLabel:{
                        fontSize: 24,
                        color: fontColor
                    },
                    axisLine:{
                        show:true,
                        lineStyle:{

                            color:'#397cbc'
                        }
                    },
                    axisTick:{
                        show:false,
                    },
                    splitLine:{
                        show:false,
                        lineStyle:{
                            color:'#195384'
                        }
                    },
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name : '',
                    min:0,
                    max:110,
                    axisLabel : {
                        formatter: '{value}',
                        textStyle:{
                            fontSize: 24,
                            color:'#FAFAFA'
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#27b4c2'
                        }
                    },
                    axisTick:{
                        show:false,
                    },
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color:'#11366e'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'健身步数达标人数',
                    type:'line',
                    // stack: '总量',
                    symbol:'circle',
                    symbolSize: 8,
                    itemStyle: {
                        normal: {
                            color:'#0092f6',
                            lineStyle: {
                                color: "#0092f6",
                                width:1
                            },
                            areaStyle: {
                                //color: '#94C9EC'
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                    offset: 0,
                                    color: 'rgba(7,44,90,0.3)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(0,146,246,0.9)'
                                }]),
                            }
                        }
                    },
                    markPoint:{
                        itemStyle:{
                            normal:{
                                color:'red'
                            }
                        }
                    },
                    data:data[0]
                },
                {
                    name:'站立时长达标人数',
                    type:'line',
                    // stack: '总量',
                    symbol:'circle',
                    symbolSize: 8,
                    itemStyle: {
                        normal: {
                            color:'#00d4c7',
                            lineStyle: {
                                color: "#00d4c7",
                                width:1
                            },
                            areaStyle: {
                                //color: '#94C9EC'
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                    offset: 0,
                                    color: 'rgba(7,44,90,0.3)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(0,212,199,0.9)'
                                }]),
                            }
                        }
                    },
                    data:data[1]
                },
                {
                    name:'健身房使用次数',
                    type:'line',
                    stack: '总量',
                    symbol:'circle',
                    symbolSize: 8,
                    itemStyle: {
                        normal: {
                            color: '#aecb56',
                            lineStyle: {
                                color: "#aecb56",
                                width:1
                            },
                            areaStyle: {
                                //color: '#94C9EC'
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                    offset: 0,
                                    color: 'rgba(7,44,90,0.3)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(114,144,89,0.9)'
                                }]),
                            }
                        }
                    },
                    data:data[2]
                },
                {
                    name:'本月最佳步数/100',
                    type:'line',
                    // stack: '总量',
                    symbol:'circle',
                    symbolSize: 8,
                    itemStyle: {
                        normal: {
                            color: '#3A44FB',
                            lineStyle: {
                                color: "#3A44FB",
                                width:1
                            },
                            areaStyle: {
                                //color: '#94C9EC'
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                    offset: 0,
                                    color: 'rgba(7,46,101,0.3)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(0,166,246,0.9)'
                                }]),
                            },
                        }
                    },
                    data:data[3]
                }
            ]
        };

        myChart7.setOption(option);
        window.addEventListener("resize",function(){
            myChart7.resize();
        });
    }

    function  qidong() {
        var data = d ;

        for(var i=0; i<4; i++) {
            data[i].shift();
            if (i == 0) {
                data[i].push(randomNum(2, 4)*10);
            }
            else if (i == 1) {
                data[i].push(randomNum(5, 7)*10);
            } else if (i == 2) {
                data[i].push(randomNum(1, 2)*10);
            } else {
                data[i].push(randomNum(7, 10)*10);
            }
        }
        d = data;
        echart7(d);
    }

    qidong();setInterval(function(){qidong();}, 2500);
}

function e888() {

    var myChart = echarts.init(document.getElementById('e888'));

    var randome81 = [randomNum(1,10), randomNum(1,10), randomNum(1,10), randomNum(1,10), randomNum(1,10), randomNum(1,10), randomNum(1,10)];
    var randome82 = [randomNum(1,10), randomNum(1,10), randomNum(1,10), randomNum(1,10), randomNum(1,10), randomNum(1,10), randomNum(1,10)];
    var randome83 = [randomNum(1,10), randomNum(1,10), randomNum(1,10), randomNum(1,10), randomNum(1,10), randomNum(1,10), randomNum(1,10)];

    var option = {
    // backgroundColor:'#0d235e',

        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },

        grid: {
            left: '5%',
            right: '5%',
            bottom: '5',
            top:'15%',
            containLabel: true
        },

        legend: {
            data: ['听觉舒适度', '热舒适度', '嗅觉舒适度'],
            //    right: 10,
            //    top:12,
            textStyle: {
                color: "#FAFAFA",
                fontSize: 24,
            },
            itemWidth: 12,
            itemHeight: 10,
            // itemGap: 35
        },

        xAxis: {
            type: 'category',
            data: ['周一','周二','周三','周四','周五','周六','周日'],
            axisLine: {
            lineStyle: {
                color: 'white'

            }
            },
            axisLabel: {
            // interval: 0,
            // rotate: 40,
            textStyle: {
                fontFamily: 'Microsoft YaHei',
                fontSize: 24,
            }
            },
        },

        yAxis: {
            type: 'value',
            max:'10',
            axisLine: {
            show: false,
            lineStyle: {
                color: 'white'
            }
            },
            splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.3)'
            }
            },
            axisLabel: {
                textStyle:{
                    fontSize:24
                }
            }
        },

        series: [{
            name: '听觉舒适度',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#7beef7'
                }, {
                    offset: 1,
                    color: '#46b2d5'
                }]),
                barBorderRadius: 12,
            },
            },
            data: randome81,
        },
        {
            name: '热舒适度',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#248ff7'
                }, {
                    offset: 1,
                    color: '#6851f1'
                }]),
                barBorderRadius: 11,
            }

            },
            data: randome82
        },
        {
            name: '嗅觉舒适度',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#c165e3'
                }, {
                    offset: 1,
                    color: '#602dae'
                }]),
            barBorderRadius: 11,
            }
            },
            data: randome83
        }]
    };

    // var app = {
    //     currentIndex: -1,
    //   };
    //   setInterval(function () {
    //     var dataLen = option.series[0].data.length;

    //     // 取消之前高亮的图形
    //     myChart.dispatchAction({
    //       type: 'downplay',
    //       seriesIndex: 0,
    //       dataIndex: app.currentIndex
    //     });
    //     app.currentIndex = (app.currentIndex + 1) % dataLen;
    //     //console.log(app.currentIndex);
    //     // 高亮当前图形
    //     myChart.dispatchAction({
    //       type: 'highlight',
    //       seriesIndex: 0,
    //       dataIndex: app.currentIndex,
    //     });
    //     // 显示 tooltip
    //     myChart.dispatchAction({
    //       type: 'showTip',
    //       seriesIndex: 0,
    //       dataIndex: app.currentIndex
    //     });


    //   }, 1000);


    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}

function e999() {

    var myChart = echarts.init(document.getElementById('e999'));

    var randomdata = [randomNum(10,100), randomNum(0,20), randomNum(0,10), randomNum(0,5), randomNum(0,15)];

    var radius = ['45%', '40%'];

    option = {

        series: [
            {
                name: '办公区人数',
                type: 'pie',
                radius: radius,
                center: ['15%', '25%'],
                startAngle: 225,
                color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FDFF5C'
                }, {
                    offset: 1,
                    color: '#FFDB5C'
                }]), "transparent"],
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                        normal: {
                            position: 'center'
                        }
                    },
                data: [{
                    value: 75,
                     name: '办公区人数',
                        label: {
                            normal: {
                                formatter: '办公区人数',
                                textStyle: {
                                    color: '#EFFBFB',
                                    fontSize: 24,
                                }
                            }
                        }
                },
                {
                    value: randomdata[0],
                    name: '%',
                        label: {
                            normal: {
                                formatter: '\n\n{c0}',
                                textStyle: {
                                    color: '#FDFF5C',
                                    fontSize: 24,
                                }
                            }
                        }
                },
                {
                    value: 0,
                    name: '%',
                        label: {
                            normal: {
                                formatter: '',
                                textStyle: {
                                    color: '#EFFBFB',
                                    fontSize: 24,

                                }
                            }
                        }
                }],
            },

            {
                name: '会议区人数',
                type: 'pie',
                radius: radius,
                center: ['50%', '25%'],
                startAngle: 225,
                color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#9FE6B8'
                }, {
                    offset: 1,
                    color: '#32C5E9'
                }]), "transparent"],
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                        normal: {
                            position: 'center'
                        }
                    },
                data: [{
                    value: 75,
                     name: '会议区人数',
                        label: {
                            normal: {
                                formatter: '会议区人数',
                                textStyle: {
                                    color: '#FFFFFF',
                                    fontSize: 24,
                                }
                            }
                        }
                },
                {
                    value: randomdata[1],
                    name: '%',
                        label: {
                            normal: {
                                formatter: '\n\n{c0}',
                                textStyle: {
                                    color: '#9FE6B8',
                                    fontSize: 24,

                                }
                            }
                        }
                },
                {
                    value: 0,
                    name: '%',
                        label: {
                            normal: {
                                formatter: '',
                                textStyle: {
                                    color: '#FFFFFF',
                                    fontSize: 24,

                                }
                            }
                        }
                }]
            },

            {
                name: '来访人数',
                type: 'pie',
                radius: radius,
                center: ['85%', '25%'],
                startAngle: 225,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                        normal: {
                            position: 'center'
                        }
                    },
                data: [{
                    value: 75,
                    "itemStyle": {
                        "normal": {
                            "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                "offset": 0,
                                "color": '#FF9F7F'
                            }, {
                                "offset": 1,
                                "color": '#FB7293'
                            }]),
                        }
                    },
                     name: '来访人数',
                        label: {
                            normal: {
                                formatter: '来访人数',
                                textStyle: {
                                    color: '#ffff',
                                    fontSize: 24

                                }
                            }
                        }
                }, {
                    value: randomdata[2],
                    name: '%',
                        label: {
                            normal: {
                                formatter: '\n\n{c0}',
                                textStyle: {
                                    color: '#FF9F7F',
                                    fontSize: 24,

                                }
                            }
                        }
                },
                {
                    value: 0,
                    name: '%',
                        label: {
                            normal: {
                                formatter: '',
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 24,

                                }
                            }
                        }
                }]
            },
            // 下一行3个
            {
                name: '已开窗户数',
                type: 'pie',
                radius: radius,
                center: ['15%', '75%'],
                startAngle: 225,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                        normal: {
                            position: 'center',
                            formatter: '已开窗户数',
                            textStyle: {
                                color: '#ffff',
                                fontSize: 24
                            }
                        }
                    },
                data: [
                    {
                    value: 75,
                    "itemStyle": {
                        "normal": {
                            "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                "offset": 0,
                                "color": '#088A08'
                            }, {
                                "offset": 1,
                                "color": '#58FA58'
                            }]),
                        }
                    },
                    name: '已开窗户数'
                },
                {
                    value: randomdata[3],
                    name: '%',
                    label: {
                        formatter: '\n\n{c0}',
                        textStyle: {
                            color: '#58FA58',
                            fontSize: 24,
                            },
                    }
                },
                {
                    value: 0,
                    name: '%',
                        label: {
                            normal: {
                                formatter: '',
                                textStyle: {
                                    color: '#FAFAFA',
                                    fontSize: 24,

                                }
                            }
                        }
                }
            ]
            },

            {
                name: '已开门数',
                type: 'pie',
                radius: radius,
                center: ['50%', '75%'],
                startAngle: 225,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                        normal: {
                            position: 'center'
                        }
                    },
                data: [{
                    value: 75,
                    "itemStyle": {
                        "normal": {
                            "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                "offset": 0,
                                "color": '#e74a3b'
                            }, {
                                "offset": 1,
                                "color": '#FF00FF'
                            }]),
                        }
                    },
                     name: '已开门数',
                        label: {
                            normal: {
                                formatter: '已开门数',
                                textStyle: {
                                    color: '#ffff',
                                    fontSize: 24

                                }
                            }
                        }
                }, {
                    value: randomdata[4],
                    name: '%',
                        label: {
                            normal: {
                                formatter: '\n\n{c0}',
                                textStyle: {
                                    color: '#e74a3b',
                                    fontSize: 24

                                }
                            }
                        }
                },
                {
                    value: 0,
                    name: '%',
                        label: {
                            normal: {
                                formatter: '',
                                textStyle: {
                                    color: '#ffff',
                                    fontSize: 24

                                }
                            }
                        }
                }]
            },

            {
                name: '门窗状态',
                type: 'pie',
                radius: radius,
                center: ['85%', '75%'],
                startAngle: 225,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                        normal: {
                            position: 'center'
                        }
                    },
                data: [
                    {
                    value: 75,
                    "itemStyle": {
                        "normal": {
                            "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                "offset": 0,
                                "color": '#BDBDBD'
                            }, {
                                "offset": 1,
                                "color": '#6E6E6E'
                            }]),
                        }
                    },

                        label: {
                            normal: {
                                formatter: '门窗状态',
                                textStyle: {
                                    color: '#f8f9fc',
                                    fontSize: 24,
                                    }
                            }
                        }
                }, {
                    value: 0,
                    name: '%',
                        label: {
                            normal: {
                                formatter: '\n\n正常',
                                textStyle: {
                                    color: '#BDBDBD',
                                    fontSize: 24,
                                    }
                            }
                        }
                },
                {
                    value: 0,
                    name: '%',
                        label: {
                            normal: {
                                formatter: '',
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 24,
                                }
                            }
                        }
                }]
            },
        ]
    };

    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}

//生成从minNum到maxNum的随机数
function randomNum(minNum,maxNum){
    switch(arguments.length){
        case 1:
            return parseInt(Math.random()*minNum+1,10);
        break;
        case 2:
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
        break;
            default:
                return 0;
            break;
    }
}

})
