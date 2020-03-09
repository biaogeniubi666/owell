$(function(){

    szyy_echarts_1();setInterval(function(){szyy_echarts_1();}, 2000);
    szyy_echarts_2();setInterval(function(){szyy_echarts_2();}, 2000);
    szyy_echarts_3();setInterval(function(){szyy_echarts_3();}, 2000);
    se555();
    function szyy_echarts_1() {

        var myChart = echarts.init(document.getElementById('szyy_echarts_1'));

        var data = [{
                value: 10,
                name: 'PH值'
            },
            {
                value: 5,
                name: '浑浊度'
            },
            {
                value: 15,
                name: '电导率'
            },
          
            {
                value: 20,
                name: '残留氯'
            }
         
        ]
        option = {
            // backgroundColor:"#0B1837",
            color: ["#EAEA26", "#906BF9", "#FE5656", "#01E17E", "#3DD1F9", "#FFAD05"],
            // title: {
            //     text: '网络/安全设备',
            //     left: '60',
            //     top: 0,
            //     textAlign: 'center',
            //     textStyle: {
            //         color: '#fff',
            //         fontSize: 14,
            //         fontWeight: 0
            //     }
            // },
            grid: {
                left: -100,
                top: 50,
                bottom: 10,
                right: 10,
                containLabel: true
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            legend: {
                type: "scroll",
                orient: "vartical",
                // x: "right",
                top: "center",
                right: '10%',
                // bottom: "0%",
                itemWidth: 16,
                itemHeight: 8,
                itemGap: 16,
                textStyle: {
                    color: '#fff',
                    fontSize: 24,
                    fontWeight: 'bold'
                },
                data: ['PH值', '浑浊度', '电导率', '残留氯']
            },
            polar: {},
            angleAxis: {
                interval: 1,
                type: 'category',
                data: [],
                z: 10,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "#0B4A6B",
                        width: 1,
                        type: "solid"
                    },
                },
                axisLabel: {
                    interval: 0,
                    show: false,
                    color: "#0B4A6B",
                    margin: 8,
                    fontSize: 16
                },
            },
            radiusAxis: {
                min: 40,
                max: 120,
                interval: 20,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "#0B3E5E",
                        width: 1,
                        type: "solid"
                    },
                },
                axisLabel: {
                    formatter: '{value} %',
                    show: false,
                    padding: [0, 0, 20, 0],
                    color: "#0B3E5E",
                    fontSize: 24
                },
                splitLine: {
                    lineStyle: {
                        color: "#0B3E5E",
                        width: 2,
                        type: "solid"
                    }
                }
            },
            calculable: true,
            series: [
                {
                type: 'pie',
                radius: ["5%", "10%"],
                hoverAnimation: false,
                labelLine: {
                    normal: {
                        show: false,
                        length: 30,
                        length2: 55
                    },
                    emphasis: {
                        show: false
                    }
                },
                data: [{
                    name: '',
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: "#0B4A6B"
                        }
                    }
                }]
            }, 
            {
                type: 'pie',
                radius: ["90%", "95%"],
                hoverAnimation: false,
                labelLine: {
                    normal: {
                        show: false,
                        length: 30,
                        length2: 55
                    },
                    emphasis: {
                        show: false
                    }
                },
                name: "",
                data: [{
                    name: '',
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: "#0B4A6B"
                        }
                    }
                }]
            },
            {
                stack: 'a',
                type: 'pie',
                radius: ['20%', '80%'],
                roseType: 'area',
                zlevel:10,
                label: {
                    normal: {
                        show: true,
                        formatter: "{c}",
                        textStyle: {
                            color: '#fff',
                            fontSize: 24,
                            fontWeight: 'bold'
                        },
                        position: 'outside'
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length: 20,
                        length2: 55
                    },
                    emphasis: {
                        show: false
                    }
                },
                data: data,
            }, ]
        }      
     
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function szyy_echarts_2() {

        var myChart = echarts.init(document.getElementById('szyy_echarts_2'));

        var charts = { // 按顺序排列从大到小
            cityList: ['综合院区域直饮水', '无线院区域直饮水', '会议室直饮水', '茶水间直饮水', '大堂直饮水'],
            cityData: [72, 90, 57, 47, 75]
        }
        var top10CityList = charts.cityList
        var top10CityData = charts.cityData
        var color = ['rgba(248,195,248', 'rgba(100,255,249', 'rgba(135,183,255', 'rgba(248,195,248', 'rgba(100,255,249']
        
        let lineY = []
        for (var i = 0; i < charts.cityList.length; i++) {
                var x = i
                if (x > color.length - 1) {
                x = color.length - 1
                }
                var data = {
                name: charts.cityList[i],
                color: color[x] + ')',
                value: top10CityData[i],
                itemStyle: {
                    normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: color[x] + ', 0.3)'
                    }, {
                        offset: 1,
                        color: color[x] + ', 1)'
                    }], false),
                    barBorderRadius: 10
                    },
                    emphasis: {
                    shadowBlur: 15,
                    shadowColor: 'rgba(0, 0, 0, 0.1)'
                    }
                }
                }
                lineY.push(data)
        }
        
        console.log(lineY)
        option= {
            // backgroundColor:'#000',
            title: {
            show: false
            },
            tooltip: {
            trigger: 'item'
            },
            grid: {
            borderWidth: 0,
            top: '10%',
            left: '5%',
            right: '15%',
            bottom: '3%'
            },
            color: color,
            yAxis: [{
            type: 'category',
            inverse: true,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false,
                inside: false
            },
            data: top10CityList
            }, {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                inside: false,
                textStyle: {
                color: '#fff',
                fontSize: '24',
                fontWeight:'bold',
                fontFamily: 'PingFangSC-Regular'
                },
                formatter: function (val) {
                return `${val}%`
                }
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: top10CityData
            }],
            xAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            }
            },
            series: [{
            name: '',
            type: 'bar',
            zlevel: 12,
            barWidth: '15px',
            data: lineY,
            animationDuration: 1500,
            label: {
                normal: {
                color: '#fff',
                show: true,
                position: [0, '-24px'],
                textStyle: {
                    fontSize: '24',
                    fontWeight:'bold',
                },
                formatter: function (a, b) {
                    return a.name
                }
                }
            }
            }],
            animationEasing: 'cubicOut'
        }      

        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function szyy_echarts_3() {

        var myChart = echarts.init(document.getElementById('szyy_echarts_3'));

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
    

function se555() {
    var myChart = echarts.init(document.getElementById('se555'));

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