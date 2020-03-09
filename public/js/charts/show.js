
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

ec02();setInterval(function(){ec02();},  2500);







function e111() {

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('e111'));

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

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}

function e222() {

    var myChart = echarts.init(document.getElementById('e222'));

    var randome81 = [randomNum(5,9),randomNum(5,9),randomNum(5,9),randomNum(5,9),randomNum(5,9),randomNum(5,9),randomNum(5,9)];
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
            name:"ph",
            nameTextStyle:{
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            min:3,
            max:10,
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
                    name: '最佳',
                    yAxis: 7.5
                }, {
                    name: '良',
                    yAxis: 8.5
                }, {
                    name: '良',
                    yAxis: 6.5
                }],
                lineStyle:{
                    color:'#8E8E8E',
                },
            },
        }],
    };

    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}

function e444() {
  
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('e444'));
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
         //  name:"分钟前",
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


function e555() {
    var myChart = echarts.init(document.getElementById('e555'));

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

function e666() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('e666'));

    var data = [
        {
            name: '热辐射舒适度',
            value: 54
        },{
            name: '味觉舒适度',
            value: 44
        },{
            name: '听觉舒适度',
            value: 35
        },{
            name: '环境整体满意度',
            value: 30
        }]
        
    var titleArr= [], seriesArr=[];
    colors=[['#af4', '#dfeaff'],['#ff8c37', '#ffdcc3'],['#fd6f97', '#fed4e0'],['#ffc257', '#ffedcc'], ['#a181fc', '#e3d9fe']]
    data.forEach(function(item, index){
            titleArr.push(
                {
                    text:item.name,
                    left: index * 20 + 20 +'%',
                    top: '75%',
                    textAlign: 'center',
                    textStyle: {
                        fontWeight: 'normal',
                        fontSize: '30',
                        fontWeight: 'bold',
                        color: colors[index][0],
                        textAlign: 'center',
                    },
                }        
            );
            seriesArr.push(
                {
                    name: item.name,
                    type: 'pie',
                    clockWise: false,
                    radius: [95, 110],
                    itemStyle:  {
                        normal: {
                            color: colors[index][0],
                            shadowColor: colors[index][0],
                            shadowBlur: 0,
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                        }
                    },
                    hoverAnimation: false,
                    center: [index * 20 + 20 +'%', '50%'],
                    data: [{
                        value: item.value,
                        label: {
                            normal: {
                                formatter: function(params){
                                    return params.value+'%';
                                },
                                position: 'center',
                                show: true,
                                textStyle: {
                                    fontSize: '40',
                                    fontWeight: 'bold',
                                    color: colors[index][0]
                                }
                            }
                        },
                    }, {
                        value: 100-item.value,
                        name: 'invisible',
                        itemStyle: {
                            normal: {
                                color: colors[index][1]
                            },
                            emphasis: {
                                color: colors[index][1]
                            }
                        }
                    }]
                }    
            )
        });
                
    option = {
        // backgroundColor: "#fff",
        grid: {
            top: '8%',
            left: '5%',
            right: '5%',
            bottom: '8%',
            containLabel: true,
        },
        title:titleArr,
        series: seriesArr
    }

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}

function e777() {



        var myChart7 = echarts.init(document.getElementById('e777'));

       

option = {
    title: {
        text: '告警列表',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function(params){
            let result = params[0].name + '<br />' + 
                         '基站: xxx基站' + '<br />' +
                         params[1].seriesName + ': ' + params[1].data.name;
            return result;
        }
    },
    grid: [{
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true,
    }],
    xAxis: [{
        type: 'value',
        min: 0.1,
        max: 1.0,
        axisLabel: {show: false},
        axisLine: {show: false},
        axisTick: {show: false},
        splitLine: {show: false},
    }],
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLine: {show: false},
        axisTick: {show: false},
        data: [1, 2, 3, 4, 5, 6, 7]
    }],
    series: [
        {
            name: '告警',
            stack: '1',
            type: 'bar',
            color:'block',
            label: {
                show: true,
                position: 'insideLeft',
                fontSize:30,
                
                formatter: function(params){
                    return params.data.name
                }
            },
            data: [
                {value: 0.8, name: '已消毒'},
                {value: 0.8, name: '已消毒'},
                {value: 0.8, name: '已消毒'},
                {value: 0.8, name: '已消毒'},
                {value: 0.8, name: '已消毒'},
                {value: 0.8, name: '已消毒'},
                {value: 0.8, name: '已消毒'},
             
            ]
        }, {
            name: '已拖延时间',
            stack: '1',
            type: 'bar',
            color:"#333",
            label: {
                show: true,
                position: 'inside',
                fontSize:30,
        
                formatter: function(params){
                    return params.data.name
                }
            },
            data: [
                {value: .3, name: '3.1 18：00'},
                {value: .3, name: '2.29 18:00'},
                {value: .3, name: '2.28 18：00'},
                {value: .3, name: '2.27 18:00'},
                {value: .3, name: '2.26 18:00'},
                {value: .3, name: '2.25 18:00'},
                {value: .3, name: '2.24 18:00'},
              
            ]
        }
    ]
};
myChart7.setOption(option);
window.addEventListener("resize",function(){
    myChart7.resize();
});
}

       
function e888() {

    var myChart = echarts.init(document.getElementById('e888'));

    
    option = {
        // backgroundColor: "#404A59",
        color: ['#ffd285', '#ff733f', '#ec4863'],
    
        title: [{
            text: '声音强度变化曲线',
            left: '1%',
            top: '6%',
            textStyle: {
                color: '#fff',
                fontSize:24
            }
        }, {
            text: '实时声音强度（DB）',
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
            data: ['办公区', '会议区']
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
                "show": true
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
            name: '办公区',
            smooth: true,
            type: 'line',
            symbolSize: 8,
              symbol: 'circle',
            data: [20, 50, 39, 50, 60, 40, 45],
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
                
                    name: '噪声',
                    yAxis: 60
                }, {
                    name: '轻微',
                    yAxis: 40
                }],
                lineStyle:{
                    color:'#8E8E8E',
                },
            },

        }, {
            name: '会议区',
            smooth: true,
            type: 'line',
            symbolSize: 8,
              symbol: 'circle',
            data: [70, 50, 50, 45, 30, 40, 20],
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
                value: 100,
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
                value: 50,
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
                        formatter: '\n办公区'
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
                value: 100,
                name: '用户来源分析',
                itemStyle: {
                    normal: {
                        color: '#ff733f'
                    }
                },
                label: {
                    normal: {
                        formatter: '{d}',
                        textStyle: {
                            color: '#ff733f',
                            fontSize:'24',
                            fontWeight: 'bold',
    
                        }
                    }
                }
            }, {
                value: 60,
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
                        formatter: '会议区'
                    }
                }
            }]
        }]
    }

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
function ec02() {

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('ec02'));
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
