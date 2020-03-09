
$(function () {

// airdata();setInterval(function(){airdata();}, 60000);

// --------------- 每1.5秒随机数 -----------------//

function airdata(){
    $.ajax({
        url:'js/data_json/jj111.json',
        type:'get',
        success: function (result) {
            kecharts_0(result);
            
        },
        error : function() {
            alert("数据异常！");
        }
    })
}

// kecharts_0();setInterval(function(){kecharts_0();}, randomNum(2000,7000));

kecharts_0();setInterval(function(){kecharts_0();}, randomNum(2000,7000));
kecharts_1();setInterval(function(){kecharts_1();}, randomNum(2000,7000));
kecharts_2();setInterval(function(){kecharts_2();}, randomNum(2000,7000));
kecharts_3();setInterval(function(){kecharts_3();}, randomNum(2000,7000));
kecharts_4();setInterval(function(){kecharts_4();}, randomNum(2000,7000));
kecharts_5();setInterval(function(){kecharts_5();}, randomNum(2000,7000));
kecharts_6();setInterval(function(){kecharts_6();}, randomNum(2000,7000));
kecharts_7();setInterval(function(){kecharts_7();}, randomNum(2000,7000));
ke555();

// --------------- echart图表 -----------------//
function kecharts_7() {

    var myChart = echarts.init(document.getElementById('kechart7'));

    var randomdata = [randomNum(25,29), randomNum(40,70), randomNum(20,90), randomNum(20,90), randomNum(0,15), randomNum(1,5)];
    // var randomdata = data;

    var radius = ['45%', '40%'];

    option = {

        series: [
            {
                name: '温度',
                type: 'pie',
                radius: radius,
                center: ['15%', '25%'],
                startAngle: 225,
                color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FDFF5C'
                }, {
                    offset: 1,
                    color: '#F2F5A9'
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
                     name: '温度',
                        label: {
                            normal: {
                                formatter: '温度',
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
                name: '湿度',
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
                     name: '湿度',
                        label: {
                            normal: {
                                formatter: '湿度',
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
                name: '甲醛',
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
                     name: '甲醛',
                        label: {
                            normal: {
                                formatter: '甲醛',
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
                name: 'PM2.5',
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
                            formatter: 'PM2.5',
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
                                "color": '#A9A9F5'
                            }, {
                                "offset": 1,
                                "color": '#8258FA'
                            }]),
                        }
                    },
                    name: 'PM2.5'
                },
                {
                    value: randomdata[3],
                    name: '%',
                    label: {
                        formatter: '\n\n{c0}',
                        textStyle: {
                            color: '#A9A9F5',
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
                name: 'CO2 浓度',
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
                                "color": '#0080FF'
                            }, {
                                "offset": 1,
                                "color": '#00FFFF'
                            }]),
                        }
                    },
                     name: 'CO2 浓度',
                        label: {
                            normal: {
                                formatter: 'CO2 浓度',
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
                                    color: '#00FFFF',
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
                name: 'VOC',
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
                                "color": '#04B486'
                            }, {
                                "offset": 1,
                                "color": '#01DFD7'
                            }]),
                        }
                    },

                    label: {
                        normal: {
                            formatter: '可挥发化合物',
                            textStyle: {
                                color: '#04B486',
                                fontSize: 24,
                                }
                        }
                    }
                }, 
                {
                    value: randomdata[5],
                    name: '%',
                    label: {
                        formatter: '\n\n{c0}',
                        textStyle: {
                            color: '#00BFFF',
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

function kecharts_0() {

    var myChart = echarts.init(document.getElementById('kechart0'));

    var randomdata = [randomNum(25,29), randomNum(40,70), randomNum(20,90), randomNum(20,90), randomNum(0,15), randomNum(1,5)];
    // var randomdata = data;

    var radius = ['45%', '40%'];

    option = {

        series: [
            {
                name: '温度',
                type: 'pie',
                radius: radius,
                center: ['15%', '25%'],
                startAngle: 225,
                color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FDFF5C'
                }, {
                    offset: 1,
                    color: '#F2F5A9'
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
                     name: '温度',
                        label: {
                            normal: {
                                formatter: '温度',
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
                name: '湿度',
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
                     name: '湿度',
                        label: {
                            normal: {
                                formatter: '湿度',
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
                name: '甲醛',
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
                     name: '甲醛',
                        label: {
                            normal: {
                                formatter: '甲醛',
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
                name: 'PM2.5',
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
                            formatter: 'PM2.5',
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
                                "color": '#A9A9F5'
                            }, {
                                "offset": 1,
                                "color": '#8258FA'
                            }]),
                        }
                    },
                    name: 'PM2.5'
                },
                {
                    value: randomdata[3],
                    name: '%',
                    label: {
                        formatter: '\n\n{c0}',
                        textStyle: {
                            color: '#A9A9F5',
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
                name: 'CO2 浓度',
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
                                "color": '#0080FF'
                            }, {
                                "offset": 1,
                                "color": '#00FFFF'
                            }]),
                        }
                    },
                     name: 'CO2 浓度',
                        label: {
                            normal: {
                                formatter: 'CO2 浓度',
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
                                    color: '#00FFFF',
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
                name: 'VOC',
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
                                "color": '#04B486'
                            }, {
                                "offset": 1,
                                "color": '#01DFD7'
                            }]),
                        }
                    },

                    label: {
                        normal: {
                            formatter: '可挥发化合物',
                            textStyle: {
                                color: '#04B486',
                                fontSize: 24,
                                }
                        }
                    }
                }, 
                {
                    value: randomdata[5],
                    name: '%',
                    label: {
                        formatter: '\n\n{c0}',
                        textStyle: {
                            color: '#00BFFF',
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

function kecharts_1() {

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('kechart1'));
    var randome81 = [randomNum(600,2000), 
        randomNum(600,2000), randomNum(600,2000), 
        randomNum(600,2000), randomNum(600,2000), 
        randomNum(600,2000), randomNum(600,2000)];

    option = {
        tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#00B2EE'
                }
            }
        },

        legend: {
        top:'0%',
            data:['CO2指标'],
                    textStyle: {
                        color: "#fff",
                        fontSize:'24',
                        fontWeight: 'bold',
            }
        },

        grid: {
            left: '0%',
            top: '13%',
            right: '15%',
            bottom: '7%',
            containLabel: true
        },

        xAxis: [{
            // name:"分钟前",
            nameLocation:'center',
            nameGap:40,
            nameTextStyle:{
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLine: {
                show: true,
             lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: 1,
                    type: "solid"
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel:  {
                    interval: 0,
                   // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "#fff",
                        fontSize:'24',
                        fontWeight: 'bold',
                    },
                },
        }],

        yAxis: [{
            name:"浓度:PPM",
            nameTextStyle:{
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            type: 'value',
            axisTick: {show: false},
            min:600,
            max:2000,
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            },
        axisLabel:  {
                textStyle: {
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                },
            },
            splitArea:{
                show:false,
                interval:(15-25),
            },
            splitNumber: 5,
            splitLine: {
                interval:2,
                lineStyle: {
                    color: 'rgba(255,255,255,.1)',
                }
            },
        }],

        series: [{
                name: 'CO2指标',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                showAllSymbol: true,
                // symbol: 'image://./static/images/guang-circle.png',
                symbolSize: 20,
                lineStyle: {
                    normal: {
                        // color: "#53fdfe", // 线条颜色
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#0080FF'
                        }, {
                            offset: 1,
                            color: '#00FFFF'
                        }]),
                        barBorderRadius: 12,
                        width:10
                    },

                    borderColor: '#f0f',
                },
                itemStyle: {
                    normal: {
                        color: '#00FFFF',
                        borderColor: 'rgba(221, 220, 107, .1)',
                        borderWidth: 30
                    }
                },
                data: randome81,
                markLine:{
                    silent: false,
                    symbol: 'none',
                    label: {
                        show:true,
                        position:'end', // 'start\middle\end'
                        formatter: '{b}',
                        color: "#fff",
                        fontSize:'24',
                        fontWeight: 'bold',
                    },
                    data: [{
                        name: '中',
                        yAxis: 2000
                    }, {
                        name: '优',
                        yAxis: 1000
                    }],
                    lineStyle:{
                        color:'#8E8E8E',
                    },
                },
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}

function kecharts_2() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('kechart2'));
    var randome81 = [randomNum(500,700),randomNum(490,700),randomNum(660,700),randomNum(550,700),randomNum(400,700),randomNum(500,700),randomNum(400,700),];
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },

        legend: {
        top:'0%',
            data:['VOC'],
                    textStyle: {
            color: 'rgba(255,255,255,.5)',
                fontSize:'12',
            }
        },

        grid: {
            left: '0%',
            top: '13%',
            right: '15%',
            bottom: '7%',
            containLabel: true
        },

        xAxis: [{
            // name:"分钟前",
            nameLocation:'center',
            nameGap:23,
            nameTextStyle:{
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLine: {
                show: true,
             lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: 1,
                    type: "solid"
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel:  {
                    interval: 0,
                   // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "#fff",
                        fontSize:'24',
                        fontWeight: 'bold',

                    },
                },
        }],

        yAxis: [{
            name:"浓度:PPB",
            nameTextStyle:{
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            type: 'value',
            max:750,
            axisTick: {show: false},
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            },
           axisLabel:  {
                textStyle: {
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                },
            },
            splitArea:{
                show:false,
                interval:(15-25),
            },
            splitNumber: 6,
            splitLine: {
                interval:2,
                lineStyle: {
                     color: 'rgba(255,255,255,.1)',
                }
            },
        }],

        series: [{
            name: '可挥发化合物VOC',
            type: 'bar',
            data: randome81 ,
            barWidth:'30px', //柱子宽度
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#04B486'// 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#01DFD7' // 100% 处的颜色
                    }], false),
                    barBorderRadius: [30, 30, 0, 0],
                    shadowColor: 'rgba(0,255,225,1)',
                    shadowBlur: 4,
                }
            },
            markLine:{
                silent: false,
                symbol: 'none',
                label: {
                    show:true,
                    position:'end', // 'start\middle\end'
                    formatter: '{b}',
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                },
                data: [{
                    name: '中',
                    yAxis: 700
                }, {
                    name: '优',
                    yAxis: 600
                }],
                lineStyle:{
                    color:'#8E8E8E',
                },
            },
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}

function kecharts_3() {
    // 基于准备好的dom，初始化echarts实例
    var value = randomNum(1,9) / 10;
    var data = [value,value];
    var dom = document.getElementById("kechart3");
    // dom.style.height=window.innerHeight+'px';
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        //  backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        //     offset: 0,
        //     color: '#431ab8'
        // }, {
        //     offset: 1,
        //     color: '#471bba'
        // }]),
         title: {
             text: (value * 100).toFixed(0) + '{a|%}',
             textStyle: {
                 fontSize: 50,
                 fontFamily: 'Microsoft Yahei',
                 fontWeight: 'normal',
                 color: '#fff',
                 rich: {
                     a: {
                         fontSize: 28,
                         fontWeight: 'bold',
                     }
                 }
             },
             x: 'center',
             y: '35%'
         },
         graphic: [{
             type: 'group',
             left: 'center',
             top: '60%',
             children: [{
                 type: 'text',
                 z: 100,
                 left: '10',
                 top: 'middle',
                 style: {
                     fill: '#fff',
                     text: '实时湿度',
                     font: '24px Microsoft YaHei',
                     fontWeight: 'bold',
                 }
             }]
         }],
         series: [{
             type: 'liquidFill',
             radius: '80%',
             center: ['50%', '50%'],
             //  shape: 'roundRect',
             data: data,
             backgroundStyle: {
                 color: {
                     type: 'linear',
                     x: 1,
                     y: 0,
                     x2: 0.5,
                     y2: 1,
                     colorStops: [{
                         offset: 1,
                         color: 'rgba(68, 145, 253, 0)'
                     }, {
                         offset: 0.5,
                         color: 'rgba(68, 145, 253, .25)'
                     }, {
                         offset: 0,
                         color: 'rgba(68, 145, 253, 1)'
                     }],
                     globalCoord: false
                 },
             },
             outline: {
                 borderDistance: 0,
                 itemStyle: {
                     borderWidth: 20,
                     borderColor: {
                         type: 'linear',
                         x: 0,
                         y: 0,
                         x2: 0,
                         y2: 1,
                         colorStops: [{
                             offset: 0,
                             color: 'rgba(69, 73, 240, 0)'
                         }, {
                             offset: 0.5,
                             color: 'rgba(69, 73, 240, .25)'
                         }, {
                             offset: 1,
                             color: 'rgba(69, 73, 240, 1)'
                         }],
                         globalCoord: false
                     },
                     shadowBlur: 10,
                     shadowColor: '#000',
                 }
             },
             color: {
                 type: 'linear',
                 x: 0,
                 y: 0,
                 x2: 0,
                 y2: 1,
                 colorStops: [{
                     offset: 1,
                     color: 'rgba(58, 71, 212, 0)'
                 }, {
                     offset: 0.5,
                     color: 'rgba(31, 222, 225, .2)'
                 }, {
                     offset: 0,
                     color: 'rgba(31, 222, 225, 1)'
                 }],
                 globalCoord: false
             },
             label: {
                 normal: {
                     formatter: '',
                 }
             }
         }, ]
     };
     myChart.setOption(option);
     window.addEventListener("resize",function(){
         myChart.resize();
     });

}

function kecharts_4() {
    // 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('kechart4'));
var randome81 = [randomNum(22,29),randomNum(22,29),randomNum(22,29),randomNum(22,29),randomNum(22,29),randomNum(22,29),randomNum(22,29),randomNum(22,29)];
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
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
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
                color: "#28ffb3", // 线条颜色
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
                color: "#28ffb3",

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
                        color: 'rgba(0,154,120,1)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(0,0,0, 0)'
                    }
                ], false),
                shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            },
            data: [randome81[0]+10,randome81[1]+10,randome81[2]+10,randome81[3]+10,randome81[4]+10,randome81[5]+10,randome81[0]+10,]
        }, {
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
                    var colorList = ['#0ec1ff', '#10cdff', '#12daff', '#15ebff', '#17f8ff', '#1cfffb', '#1dfff1'];
                    return colorList[params.dataIndex];
                },
                barBorderRadius: [30, 30, 0, 0],
                shadowBlur: 4,
            }
        },
        data: randome81
    }]
};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}

function kecharts_5() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('kechart5'));
    var randome81 = [randomNum(20,90),randomNum(20,90),randomNum(20,90),randomNum(20,90),randomNum(20,90),randomNum(20,90),randomNum(20,90),];
    option = {

        grid: {
            left: '5%',
            top: '13%',
            right: '5%',
            bottom: '7%',
            containLabel: true
        },

        tooltip: {
            trigger: 'axis'
        },

        xAxis: [{
            // name:"分钟前",
            nameLocation:'center',
            nameGap:23,
            nameTextStyle:{
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLine: {
                show: true,
             lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: 1,
                    type: "solid"
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel:  {
                    interval: 0,
                   // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "#fff",
                        fontSize:'24',
                        fontWeight: 'bold',
                    },
                },
        }],

        yAxis: {
            name:"μg/m3",
            nameTextStyle:{
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            min:0,
            max:90,
            axisLabel: {
                //formatter: '{value} %'
                 show:true,
                  textStyle: {
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                     },
             },
             axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: 1,
                    type: "solid"
                },
            },
            splitNumber:0,
            splitLine: {
                show:false,
                lineStyle: {
                    color: 'rgba(255,255,255,.1)',
                },
            },
        },

        visualMap: {
            show: false,
            pieces: [{
                gt: 0,
                lte: 35,
                color: '#096'
            }, {
                gt: 35,
                lte: 75,
                color: '#ffde33'
            }, {
                gt: 75,
                lte: 115,
                // color: '#ff9933'
                color: '#cc0033'
            }, {
                gt: 115,
                lte: 150,
                color: '#cc0033'
            }, {
                gt: 150,
                lte: 250,
                color: '#7e0023'
            }, {
                gt: 250,
                color: '#660099'
            }],
            outOfRange: {
                color: '#999'
            }
        },

        series: [{
            name: 'PM25',
            type: 'line',
            smooth: true,
            data: randome81,
            lineStyle: {
                normal: {
                    barBorderRadius: 12,
                    width:10
                },
            },

            markLine: {
                silent: false,
                symbol: 'none',
                label: {
                    show:true,
                    position:'end', // 'start\middle\end'
                    formatter: '{b}',
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                },
                data: [{
                    name: '重度污染',
                    yAxis: 250
                }, {
                    name: '中度污染',
                    yAxis: 150

                }, {
                    name: '轻度污染',
                    yAxis: 115
                }, {
                    name: '良',
                    yAxis: 75
                }, {
                    name: '优',
                    yAxis: 35
                }],
                lineStyle:{
                    color:'#8E8E8E',
                },
            },
        }],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}

function kecharts_6() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('kechart6'));
    var randome81 = [randomNum(100,700),randomNum(100,700),randomNum(100,700),randomNum(100,700),randomNum(100,700)];
    var data = [70, 34, 60, 78, 69];
    var titlename = ['综合院', '无线院', '会议室', '培训室', '茶水间'];
    var valdata = [683, 234, 234, 523, 345];
    var myColor = ['#1089E7', '#1011E7', '#56D0E3', '#12a256', '#8B78F6'];
    option = {
        // backgroundColor: '#0e2147',
        grid: {
            left: '5%',
            top: '10%',
            right: '5%',
            bottom: '7%',
            containLabel: true
        },
        xAxis: {
            show: false
        },
        yAxis: [{
            show: true,
            data: titlename,
            inverse: true,
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
                formatter: function(value, index) {
                    return [
                        '{lg|' + (index + 1) + '}' + '{title|' + value + '} '
                    ].join('\n')
                },
                rich: {
                    lg: {
                        backgroundColor: '#339911',
                        color: '#fff',
                        borderRadius: 15,
                        // padding: 5,
                        align: 'center',
                        width: 15,
                        height: 15
                    },
                }
            },
    
    
        }, {
            show: true,
            // inverse: true,
            data: valdata,
            axisLabel: {
                textStyle: {
                    color: '#ffff',
                    fontSize:'25',
                    fontWeight: 'bold',
                },
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
    
        }],
        series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: data,
            barWidth: 30,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}%',
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                }
            },
        }, {
            name: '框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [100, 100, 100, 100, 100],
            barWidth: 40,
            itemStyle: {
                normal: {
                    color: 'none',
                    borderColor: '#00c1de',
                    borderWidth: 3,
                    barBorderRadius: 15,
                }
            }
        }, ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}



function ke555() {
    var myChart = echarts.init(document.getElementById('ke555'));

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




/*


//生成从minNum到maxNum的随机数
*/
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































