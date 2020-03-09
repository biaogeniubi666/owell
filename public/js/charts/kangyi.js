
$(function () {

    // airdata();setInterval(function(){airdata();}, 60000);
    
    // --------------- 每1.5秒随机数 -----------------//
    

    
    kangyi_echarts_0();setInterval(function(){kangyi_echarts_0();}, randomNum(2000,7000));
    kangyi_echarts_1();setInterval(function(){kangyi_echarts_1();}, randomNum(2000,7000));
    kangyi_echarts_2();setInterval(function(){kangyi_echarts_2();}, randomNum(2000,7000));
    kangyi_echarts_3();setInterval(function(){kangyi_echarts_3();}, randomNum(2000,7000));
    kangyi_echarts_4();setInterval(function(){kangyi_echarts_4();}, randomNum(2000,7000));
    kangyi_echarts_5();setInterval(function(){kangyi_echarts_5();}, randomNum(2000,7000));
    kangyi_echarts_6();setInterval(function(){kangyi_echarts_6();}, randomNum(2000,7000));
    
    // --------------- echart图表 -----------------//
    function kangyi_echarts_0() {
    
        var myChart = echarts.init(document.getElementById('kangyi_echarts_0'));
    
        var data = [
            {
                name: '出勤打卡率',
                value: 54
            },{
                name: '体温健康人数比例',
                value: 44
            },{
                name: '戴口罩人数比例',
                value: 35
            },]
            
        var titleArr= [], seriesArr=[];
        colors=[['#7AFBFF', '#CEFBFF'],['#FFF757', '#ffdcc3'],['#fd6f97', '#fed4e0'],['#ffc257', '#ffedcc'], ['#a181fc', '#e3d9fe']]
        data.forEach(function(item, index){
                titleArr.push(
                    {
                        text:item.name,
                        left: index * 30 + 20 +'%',
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
                        center: [index * 30+ 20 +'%', '50%'],
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
    
    function kangyi_echarts_1() {
    
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('kangyi_echarts_1'));

        var dataIPSxAxis = ['2019 05/20  ', '2019 05/24', '2019 05/27', '2019 05/29 ', '2019 05/02 ', '2019 05/08'];
        var dataIPS = [20, 60, 50, 80, 120, 100];
         var dataIPS2 = [20, 70, 60, 80, 100, 90];
        option = {
              title : {
               text: '消毒时长',
               textStyle:{
                   color:"#fff"
               }
           },
            // backgroundColor:"#242842",
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985',
                    },
                }
            },
            legend: {
                // orient: "vartical",
                // x: "right",
                top: "0%",
                right: '15%',
                // bottom: "0%",
                itemWidth: 32,
                itemHeight: 18,
                itemGap: 50,
                textStyle: {
                    color: '#fff',
                    fontSize: 24,
                    fontWeight: 'bold'
                },
                data:['紫外线消毒','超声波消毒液消毒']
            },
            grid: {
                left: '5%',
               right: '15%',
               top:'15%',
               bottom: '1%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                data: dataIPSxAxis,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 24,
                        fontWeight: 'bold',
                    },
                    formatter: function(value) {
                        //debugger
                        var ret = ""; //拼接加\n返回的类目项
                        var maxLength = 5; //每项显示文字个数
                        var valLength = value.length; //X轴类目项的文字个数
                        var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                        if (rowN > 1) //如果类目项的文字大于3,
                        {
                            for (var i = 0; i < rowN; i++) {
                                var temp = ""; //每次截取的字符串
                                var start = i * maxLength; //开始截取的位置
                                var end = start + maxLength; //结束截取的位置
                                //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                                temp = value.substring(start, end) + "\n";
                                ret += temp; //凭借最终的字符串
                            }
                            return ret;
                        } else {
                            return value;
                        }
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: '#0a2b52',
                        width: 0.5, //这里是为了突出显示加上的
                    }
                }
            }],
            yAxis: [{
                type: 'value',
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: '#0a2b52',
                        width: 1, //这里是为了突出显示加上的
                    }
                },
                
                axisLabel: {
                    formatter: function(val) {
                        return val + '';
                    },
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 24,
                        fontWeight: 'bold',
                    }
                },
                 splitLine:{
                       show:true,
                       lineStyle:{
                           type:'dashed'
                           
                       }
                       
                   },
            }],
            series: [
                {
                    name: '紫外线消毒',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    showAllSymbol: true,
                    //  symbol: "none", //去掉折线点
                    stack: 100,
                    lineStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#CB8993' // 0% 处的颜色
                            }, {
                                offset: 0.5,
                                color: '#CB8993' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: '#CC56CB' // 100% 处的颜色
                            }]),
                            barBorderRadius: 12,
                            width:5
                        },
                    },
                    itemStyle: {
                        normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#CB8993' // 0% 处的颜色
                            }, {
                                offset: 0.5,
                                color: '#CB8993' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: '#CC56CB' // 100% 处的颜色
                            }]), //背景渐变色
                            lineStyle: { // 系列级个性化折线样式
                                width: 7,
                                type: 'solid',
                                color: "#CC56CB"
                            }
                        },
                        emphasis: {
                            color: '#02675f',
                            lineStyle: { // 系列级个性化折线样式
                                width: 0.5,
                                type: 'dotted',
                                color: "#02675f" //折线的颜色
                            }
                        }
                    }, //线条样式
                    symbolSize: 5, //折线点的大小
                    areaStyle: {
                        normal: {}
                    },
                    data: dataIPS,
                },      
            {
                    name: '超声波消毒液消毒',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    showAllSymbol: true,
                    //  symbol: "none", //去掉折线点
                    stack: 100,
                    lineStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#64CAFA' // 0% 处的颜色
                            }, {
                                offset: 0.5,
                                color: '#64CAFA' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: '#0078D7' // 100% 处的颜色
                            }]),
                            barBorderRadius: 12,
                            width:5
                        },
                    },
                    itemStyle: {
                        normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#64CAFA' // 0% 处的颜色
                            }, {
                                offset: 0.5,
                                color: '#64CAFA' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: '#0078D7' // 100% 处的颜色
                            }]), //背景渐变色
                            lineStyle: { // 系列级个性化折线样式
                                width: 7,
                                type: 'solid',
                                color: "#0078D7"
                            }
                        },
                        emphasis: {
                            color: '#02675f',
                            lineStyle: { // 系列级个性化折线样式
                                width: 0.5,
                                type: 'dotted',
                                color: "#02675f" //折线的颜色
                            }
                        }
                    }, //线条样式
                    symbolSize: 5, //折线点的大小
                    areaStyle: {
                        normal: {}
                    },
                    data: dataIPS2,
                },
                
       
            
            ]
        };
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    
    function kangyi_echarts_2() {

        var myChart = echarts.init(document.getElementById('kangyi_echarts_2'));

       

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


    // function airdata(){
    //     $.ajax({
    //         url:'js/data_json/jj111.json',
    //         type:'get',
    //         success: function (result) {
    //             kangyi_echarts_0(result);
                
    //         },
    //         error : function() {
    //             alert("数据异常！");
    //         }
    //     })
    // }
    
    
    
    })