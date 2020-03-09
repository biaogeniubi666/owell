
$(function () {

    gecharts_1();setInterval(function(){gecharts_1();}, 2000);
    gecharts_2();setInterval(function(){gecharts_2();}, 1500);
    gecharts_3();setInterval(function(){gecharts_3();}, 1500);
    ge555();

    function gecharts_1() {

        var myChart = echarts.init(document.getElementById('gechart1'));

        //数据
        // var XName= ["0:00","3：00","6:00","9:00","12：00","15:00","18:00","21:00","0:00"]
        var data1 = [290,330,350,360,355,335,315,300,290];
        // var Line = ["光照强度节律图"];

        var randome81 = [randomNum(280,360),
            randomNum(280,360),randomNum(280,360),
            randomNum(280,360),randomNum(280,360),
            randomNum(280,360),randomNum(280,360),
            randomNum(280,360),randomNum(280,360)];

        var mapdata = data1.map( function(item){
            return item +200
        })

        var mapdata_series1 = randome81.map( function(item){
            return item +100
        })

        option = {
            // backgroundColor: "#05224d",
            tooltip: {},
            grid: {
                top: '8%',
                left: '5%',
                right: '5%',
                bottom: '8%',
                containLabel: true,
            },
            legend: {
                itemGap: 50,
                data: ['变化趋势' ,'每日数据'],
                textStyle: {
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                },
            },
            xAxis: [{
                type: 'category',
                boundaryGap: true,
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#f9f9f9'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    textStyle: {
                        color: "#fff",
                        fontSize:'24',
                        fontWeight: 'bold',
                        margin: 15,
                    },
                },
                axisTick: {
                    show: false,
                },
                data: ["0:00","3：00","6:00","9:00","12：00","15:00","18:00","21:00","0:00"],
            }],
            yAxis: [{
                type: 'value',
                min: 0,
                // max: 140,
                splitNumber: 7,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#0a3256'
                    }
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    margin: 20,
                    textStyle: {
                        color: "#fff",
                        fontSize:'24',
                        fontWeight: 'bold',
        
                    },
                },
                axisTick: {
                    show: false,
                },
            }],
            series: [
            {
                name: '变化趋势',
                type: 'line',
                // smooth: true, //是否平滑曲线显示
                // symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
                showAllSymbol: true,
                symbol: 'emptyCircle',
                symbolSize: 20,
                lineWidth:'15px',
                lineStyle: {
                    normal: {
                        color: "#FFEC8B", // 线条颜色
                    },
                    barBorderRadius: 12,
                    Width:10,
                        },
                label: {
                    show: false,
                    position: 'top',
                    textStyle: {
                        color: "#fff",
                        fontSize:'24',
                        fontWeight: 'bold',
                    }
                },
                itemStyle: {
                    normal: {
                        color: "#FFEC8B",
        
                    }
                },
                tooltip: {
                    show: false
                },
                areaStyle: { //区域填充样式
                    normal: {
                        //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(243,216,26,0.5)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,0,0, 0)'
                            }
                        ], false),
                        shadowColor: 'rgba(53,142,215, 0.5)', //阴影颜色
                        shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                        }
                    },
                    data: mapdata_series1
            }, 
            {
                name: '每日数据',
                type: 'bar',
                barWidth: '30px',
                tooltip: {
                    show: false
                },
                 label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: "#fff",
                        fontSize:'24',
                        fontWeight: 'bold',
                    }
                },
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = ['#FFFF00', '#FFEC8B', '#EEEE00', '#EEDC82', '#EEC900', '#FFD700', '#FFD700'];
                            return colorList[params.dataIndex];
                        },
                        barBorderRadius: [30, 30, 0, 0],
                        shadowBlur: 4,
                    }
                },
                data: randome81
            },
            {
                name: '昼夜节律',
                type: 'line',
                smooth: true,
                // symbol: 'circle',
                // showAllSymbol: true,
                // symbolSize: 20,
                lineStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#EEAD0E'
                        }, {
                            offset: 1,
                            color: '#FFFACD'
                        }]),
                        barBorderRadius: 12,
                        width:10
                    },

                    borderColor: '#FFFACD',
                },
                // itemStyle: {
                //     normal: {
                //         color: '#FFFACD',
                //         borderColor: 'rgba(221, 220, 107, .1)',
                //         borderWidth: 30
                //     }
                // },
                data:mapdata
            }]

        };

        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function gecharts_2() {
        var myChart = echarts.init(document.getElementById('gechart2'));

        option = {
            // backgroundColor: "#404A59",
            color: ['#ffd285', '#ff733f', '#ec4863'],
        
            title: [{
                text: '每日光强变化曲线',
                left: '1%',
                top: '6%',
                textStyle: {
                    color: '#fff',
                    fontSize:24
                }
            }, {
                text: '实时光强（LUX）',
                left: '83%',
                top: '6%',
                textAlign: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize:24
                }
            }],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                x: 300,
                top: '7%',
                textStyle: {
                    color: '#ffd285',
                    fontSize:'24',
                    fontWeight: 'bold',
                },
                data: ['室内', '室外']
            },
            grid: {
                left: '1%',
                right: '35%',
                top: '16%',
                bottom: '6%',
                containLabel: true
            },
            toolbox: {
                "show": false,
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                "axisLine": {
                    lineStyle: {
                        color: '#FF4500'
                    }
                },
                "axisTick": {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: "#fff",
                        fontSize:'24',
                        fontWeight: 'bold',
                    }
                },
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                "axisLine": {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#fff'
                    }
                },
                "axisTick": {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                        fontSize:'24',
                        fontWeight: 'bold',
                    }
                },
                type: 'value'
            },
            series: [{
                name: '室内',
                smooth: true,
                type: 'line',
                symbolSize: 8,
                  symbol: 'circle',
                data: [90, 50, 39, 50, 120, 82, 80],
                lineStyle: {
                    normal: {
                        barBorderRadius: 12,
                        width:10
                    },
                },

            }, {
                name: '室外',
                smooth: true,
                type: 'line',
                symbolSize: 8,
                  symbol: 'circle',
                data: [70, 50, 50, 87, 90, 80, 70],
                lineStyle: {
                    normal: {
                        barBorderRadius: 12,
                        width:10
                    },
                },
            }, 
            {
                type: 'pie',
                center: ['83%', '33%'],
                radius: ['25%', '30%'],
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: 335,
                    name: '满足要求的部分',
                    itemStyle: {
                        normal: {
                            color: '#ffd285'
                        }
                    },
                    label: {
                        normal: {
                            formatter: '{d}',
                            textStyle: {
                                color: '#ffd285',
                                fontSize:'24',
                                fontWeight: 'bold',
                            }
                        }
                    }
                }, {
                    value: 180,
                    name: '未满足要求的部分',
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#87CEFA'
                        }
                    },
                    label: {
                        normal: {
                            textStyle: {
                                color: '#ffd285',
                                fontSize:'24',
                                fontWeight: 'bold',
                            },
                            formatter: '\n室内光强'
                        }
                    }
                }]
            },
            {
                type: 'pie',
                center: ['83%', '72%'],
                radius: ['25%', '30%'],
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: 435,
                    name: '用户来源分析',
                    itemStyle: {
                        normal: {
                            color: '#ff733f'
                        }
                    },
                    label: {
                        normal: {
                            formatter: '{d} %',
                            textStyle: {
                                color: '#ff733f',
                                fontSize:'24',
                                fontWeight: 'bold',
        
                            }
                        }
                    }
                }, {
                    value: 100,
                    name: '占位',
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#87CEFA'
        
        
                        }
                    },
                    label: {
                        normal: {
                            textStyle: {
                                color: '#FF4500',
                                fontSize:'24',
                                fontWeight: 'bold',
                            },
                            formatter: '\n室外光强'
                        }
                    }
                }]
            }]
        }

        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });

    }

    function gecharts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('gechart3'));

        // 数据
        var dateBase = new Date();
        var year = dateBase.getFullYear();
        var dottedBase = +dateBase + 1000 * 3600 * 24;
        var weekCategory = [];

        var radarData = [];
        var radarDataAvg = [];
        var maxData = 12000;
        var weekMaxData = [];
        var weekLineData = [];


        // 周数据
        for (var i = 0; i < 7; i++) {
        // 日期
        var date = new Date(dottedBase -= 1000 * 3600 * 24);
        weekCategory.unshift([
            date.getMonth() + 1,
            date.getDate()
        ].join('/'));

        // 折线图数据
        weekMaxData.push(maxData);
        var distance = Math.round(Math.random() * 11000 + 500);
        weekLineData.push(distance);

        // 雷达图数据
        // 我的指标
        var averageSpeed = +(Math.random() * 5 + 3).toFixed(3);
        var maxSpeed = averageSpeed + (+(Math.random() * 3).toFixed(2));
        var hour = +(distance / 1000 / averageSpeed).toFixed(1);
        var radarDayData = [distance, averageSpeed, maxSpeed, hour];
        radarData.unshift(radarDayData);

        // 平均指标
        var distanceAvg = Math.round(Math.random() * 8000 + 4000);
        var averageSpeedAvg = +(Math.random() * 4 + 4).toFixed(3);
        var maxSpeedAvg = averageSpeedAvg + (+(Math.random() * 2).toFixed(2));
        var hourAvg = +(distance / 1000 / averageSpeed).toFixed(1);
        var radarDayDataAvg = [distanceAvg, averageSpeedAvg, maxSpeedAvg, hourAvg];
        radarDataAvg.unshift(radarDayDataAvg);
        }

        // 颜色设置
        var color = {
        linearYtoG: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [{
            offset: 0,
            color: '#f5b44d'
            }, {
            offset: 1,
            color: '#28f8de'
            }]
        },
        linearGtoB: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
            offset: 0,
            color: '#43dfa2'
            }, {
            offset: 1,
            color: '#28f8de'
            }]
        },
        linearBtoG: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
            offset: 0,
            color: '#1c98e8'
            }, {
            offset: 1,
            color: '#28f8de'
            }]
        },
        areaBtoG: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
            offset: 0,
            color: 'rgba(35,184,210,.2)'
            }, {
            offset: 1,
            color: 'rgba(35,184,210,0)'
            }]
        }
        };

        var option = {
        title: {
            text: '各区域光强',
            textStyle: {
            color: '#fff',
            fontSize: 32,
            fontWeight: 'normal'
            },
            subtext: year + '/' + weekCategory[6],
            subtextStyle: {
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            top: 50,
            left: 80
        },
        legend: {
            top: 150,
            left: 80,
            orient: 'vertical',
            itemGap: 15,
            itemWidth: 12,
            itemHeight: 12,
            data: ['平均指标', '当前区域指标'],
            textStyle: {
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
        },
        tooltip: {
            trigger: 'item'
        },
        radar: {
            center: ['68%', '30%'],
            radius: '40%',
            name: {
                textStyle: {
                    color: '#fff',
                    fontSize: 24
                },
            },
            splitNumber: 8,
            axisLine: {
                lineStyle: {
                    color: color.linearYtoG,
                    opacity: .6
                }
            },
            splitLine: {
                lineStyle: {
                    color: color.linearYtoG,
                    opacity: .6
                }
            },
            splitArea: {
                areaStyle: {
                    color: '#fff',
                    opacity: .1,
                    shadowBlur: 25,
                    shadowColor: '#000',
                    shadowOffsetX: 0,
                    shadowOffsetY: 5,
                }
            },
            indicator: [{
            name: '光照强度',
            max: maxData
            }, {
            name: '节能效比',
            max: 10
            }, {
            name: '稳定度',
            max: 12
            }, {
            name: '炫光控制',
            max: 3.5
            }]
        },
        grid: {
            left: '15%',
            right: '15%',
            bottom: 40,
            top: '60%',
        },
        xAxis: {
            type: 'category',
            position: 'bottom',
            axisLine: true,
            axisLabel: {
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            data: weekCategory,
        },
        yAxis: {
            name: 'LUX',
            nameLocation: 'end',
            nameGap: 24,
            nameTextStyle: {
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            max: maxData,
            splitNumber: 4,

            axisLine: {
            lineStyle: {
                opacity: 0
            }
            },
            splitLine: {
            show: true,
            lineStyle: {
                color: '#fff',
                opacity: .1
            }
            },
            axisLabel: {
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            }
        },
        series: [{
            name: '每日跑步指标分布与比较',
            type: 'radar',
            symbolSize: 0,
            data: [{
            value: radarDataAvg[6],
            name: '平均指标',
            itemStyle: {
                normal: {
                color: '#f8d351',
                }
            },
            lineStyle: {
                normal: {
                opacity: 0,
                }
            },
            areaStyle: {
                normal: {
                color: '#f8d351',
                shadowBlur: 25,
                shadowColor: 'rgba(248,211,81,.3)',
                shadowOffsetX: 0,
                shadowOffsetY: -10,
                opacity: 1
                }
            },

            }, {
            value: radarData[6],
            name: '我的指标',
            itemStyle: {
                normal: {
                color: '#43dfa2',
                }
            },
            lineStyle: {
                normal: {
                opacity: 0,
                }
            },
            areaStyle: {
                normal: {
                color: color.linearGtoB,
                shadowBlur: 15,
                shadowColor: 'rgba(0,0,0,.2)',
                shadowOffsetX: 0,
                shadowOffsetY: 5,
                opacity: .8
                }
            },
            }]
        }, {
            name: '每日跑步里程',
            type: 'line',
            smooth: true,
            symbol: 'emptyCircle',
            symbolSize: 8,
            itemStyle: {
            normal: {
                color: '#fff'
            }
            },
            lineStyle: {
            normal: {
                color: color.linearBtoG,
                width: 3
            }
            },
            areaStyle: {
            normal: {
                color: color.areaBtoG,
            }
            },
            data: weekLineData,
            lineSmooth: true,
            markLine: {
            silent: true,
            data: [{
                type: 'average',
                name: '平均值'
            }],
            precision: 0,
            label: {
                normal: {
                formatter: '平均值: \n {c}',
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
                }
            },
            lineStyle: {
                normal: {
                color: 'rgba(248,211,81,.7)'
                }
            }
            },
            tooltip: {
            position: 'top',
            formatter: '{c} m',
            backgroundColor: 'rgba(28,152,232,.2)',
            padding: 6
            }
        }, {
            name: '占位背景',
            type: 'bar',
            itemStyle: {
            normal: {
                show: true,
                color: '#000',
                opacity: 0
            }
            },
            silent: true,
            barWidth: '50%',
            data: weekMaxData,
            animation: false
        }, {
            name: '占位背景',
            type: 'bar',
            itemStyle: {
            normal: {
                show: true,
                color: '#000',
                opacity: .1
            }
            },
            silent: true,
            barWidth: '50%',
            barGap: 0,
            data: weekMaxData,
            animation: false
        }],
        // backgroundColor: '#383546',
        };

        // 点击事件
        myChart.on('click', function(params) {
        if (params.componentType === 'series' && params.seriesType === 'line') {

            var dataIndex = params.dataIndex;
            myChart.setOption({
            series: [
            {
            name: '每日跑步指标分布与比较',
            type: 'radar',
            symbolSize: 0,
            data: [{
            name: '平均指标',
            value: radarDataAvg[dataIndex],
            itemStyle: {
                normal: {
                color: '#f8d351',
                }
            },
            lineStyle: {
                normal: {
                opacity: 0,
                }
            },
            areaStyle: {
                normal: {
                color: '#f8d351',
                shadowBlur: 25,
                shadowColor: 'rgba(248,211,81,.3)',
                shadowOffsetX: 0,
                shadowOffsetY: -10,
                opacity: 1
                }
            },
            }, {
            name: '我的指标',
            value: radarData[dataIndex],
            itemStyle: {
                normal: {
                color: '#43dfa2',
                }
            },
            lineStyle: {
                normal: {
                opacity: 0,
                }
            },
            areaStyle: {
                normal: {
                color: color.linearGtoB,
                shadowBlur: 15,
                shadowColor: 'rgba(0,0,0,.2)',
                shadowOffsetX: 0,
                shadowOffsetY: 5,
                opacity: .8
                }
            },
            }]
        }]
            })
        }
        });

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    

function ge555() {
    var myChart = echarts.init(document.getElementById('ge555'));

    var dataBJ = [
        [20,55,56,0.46,18,6,8,1," 会议区"],
        [10,30,56,0.46,18,6,8,1," 休闲区"],
    
    ];
    
    var dataGZ = [
        [1,90,56,0.46,18,6,8,1," 办公区"],
        [15,70,56,0.46,18,6,8,1," 办公区2"],

    ];
    
    var dataSH = [
        [15,45,56,0.46,18,6,8,1," 阳台"],
        [25,45,56,0.46,18,6,8,1," 茶水间"],

    ];
    
    var schema = [
        {name: '区域x', index: 0, text: ''},
        {name: '区域t', index: 1, text: ''},
        {name: '温度', index: 2, text: '温度'},
        {name: '湿度', index: 3, text: '湿度'},
        {name: 'PM2.5', index: 4, text: 'PM2.5'},
        {name: 'CO2', index: 5, text: '二氧化碳（CO2）'},
        {name: 'VOC', index: 6, text: '可挥发化合物（VOC）'},
        {name: '甲醛', index: 7, text: '甲醛（CHOH）'},
        {name: '区域t', index: 8, text: ''},
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
                    +  ' ' + value[8] + ' ：'+ '<br>'
                                     
                    + schema[2].text + '：' + value[2] + '<br>'
                    + schema[3].text + '：' + value[3] + '<br>'
                    + schema[4].text + '：' + value[4] + '<br>'
                    + schema[5].text + '：' + value[5] + '<br>'
                    + schema[6].text + '：' + value[6] + '<br>'
                    + schema[7].text + '：' + value[7] + '<br>'
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































