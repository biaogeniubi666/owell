$(function(){

    shushi_echarts_1();setInterval(function(){shushi_echarts_1();}, 2000);
    shushi_echarts_2();setInterval(function(){shushi_echarts_2();}, 2000);
    shushi_echarts_3();setInterval(function(){shushi_echarts_3();}, 2000);

    function shushi_echarts_1() {

        var myChart = echarts.init(document.getElementById('shushi_echart_1'));

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

        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function shushi_echarts_2() {

        var myChart = echarts.init(document.getElementById('shushi_echart_2'));

        option = {
            // backgroundColor: '#394056',
            title: {
                text: '舒适度变化趋势',
                textStyle: {
                    fontSize: 24,
                    color: '#fff',
                    fontWeight: 'bold',
                },
                left: '6%'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            legend: {
                icon: 'rect',
                itemWidth: 14,
                itemHeight: 5,
                itemGap: 13,
                data: ['热辐射舒适度', '味觉舒适度', '听觉舒适度'],
                right: '10%',
                textStyle: {
                    fontSize: 24,
                    color: '#fff',
                    fontWeight: 'bold',
                }
            },
            grid: {
                left: '5%',
                right: '10%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#57617B',

                    }
                }, 
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        fontSize: 24,
                        color: '#fff',
                        fontWeight: 'bold',
                    },
                },    
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            }],
            yAxis: [{
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        fontSize: 24,
                        color: '#fff',
                        fontWeight: 'bold',
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            }],
            series: [{
                name: '热辐射舒适度',
                type: 'line',
                smooth: true,
                lineStyle: {
                    normal: {
                        width: 8
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(137, 189, 27, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(137, 189, 27, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgb(137,189,27)'
                    }
                },
                data: [96.3,96.4,97.5,95.6,98.1,94.8,89.6,94.1,80.1,52.4,75.8,94.7]
            }, {
                name: '味觉舒适度',
                type: 'line',
                smooth: true,
                lineStyle: {
                    normal: {
                        width: 8
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0, 136, 212, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(0, 136, 212, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ff8c37'
                    }
                },
                data: [97.3,99.2,99.3,100.0,99.6,90.6,80.0,91.5,69.8,67.5,90.4,84.9]
            }, {
                name: '听觉舒适度',
                type: 'line',
                smooth: true,
                lineStyle: {
                    normal: {
                        width: 8
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(219, 50, 51, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(219, 50, 51, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#fd6f97'
                    }
                },
                data: [84.2,81.0,67.5,72.1,43.7,88.5,91.9,101.8,79.7,87.6,92.9,0]
            }, ]
        };        

        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function shushi_echarts_3() {

        var value = randomNum(1,9) / 10;
        var data = [value,value];
        var dom = document.getElementById("shushi_echart_3");
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
                 text: (value * 1000).toFixed(0) + 'LUX',
                 textStyle: {
                     fontSize: 50,
                     fontFamily: 'Microsoft Yahei',
                     fontWeight: 'normal',
                     color: '#fff',
                     rich: {
                         a: {
                             fontSize: 40,
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
                         text: '实时光强',
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