/*

这个是专门放变量的js
文件存放组织结构为：全局、空气、光强、水、、、、等。
每个结构下面分为控制模块和poi点。

注意命名规范，缩进正确。

2020/01/16 许耿瑞
*/


// --------------------------全局场景----------------------------------- //

ziyemiandata =["zhuye","kongqi","guangqiang", "szyy"]

objData = {
         "actionname": "changeScene",  //关键字
         "id": "1" //0外部,1,俯视,2,室内漫游
    }

roamData = {
         "actionname": "changeScene",  //关键字
         "id": "2" //0外部,1,俯视,2,室内漫游
    }
objData0 = {
          "actionname": "changeScene",  //关键字
          "id": "0" //0外部,1,俯视,2,室内漫游
    }
objData1 = {
            "actionname": "changeScene",  //关键字
            "id": "1" //0外部,1,俯视,2,室内漫游
    }

// --------------------------空气----------------------------------- //

// 空气控制模块
mapData = {
    "actionname": "showHideHeatMap",//关键字
    "state": "1",  //显隐状态 0隐,1显
    }
    
freshairData ={
    "actionname": "showHideFreshAir",//关键字
    "id": "freshAir1",  //id
    "state": "1",  //显隐状态 0隐,1显
    "all": "true"  //是否控制全部 true,false
    }

aircleanerData = {
    "actionname": "showHideAirCleaner",//关键字
        "id": "airCleaner1",  //id
        "state": "1",  //显隐状态 0隐,1显
        "all": "true"  //是否控制全部 true,false
    }

airConditionerData = {
        "actionname": "airConditionerControl",//关键字
        "id": "0",  //id
        "state": "1",  //显隐状态 0隐,1显
        "all": "true"  //是否控制全部 true,false
        }

airHeatData = {
    "object_id": "item_heatmap_1",       //区域热力图id
    "coord_type": "1",      //区域热力图中坐标类型(0: 经纬度gis, 1: cad 坐标, 2: UE4WorldPostion)
    "heatmap_type": "1",    //区域热力图样式类型(1: 经典类型(红绿热力图))
    "leftupper_coord": "281852,-120342",     //区域热力图范围左上坐标(坐标类型需与heatmap_type相同)
    "lowerright_coord": "296764,-132198",    //区域热力图范围右下坐标(坐标类型需与heatmap_type相同)
    "coord_z": '0',       //区域热力图Z轴值(项目约定)
    "brush_diameter": "100.0",       //区域热力点笔刷直径(米, 单个热力点覆盖直径)
    "heatpoint_minvalue": "5.00",   //区域热力点取值范围最小值(此热力图中数值范围的最小值, 例如人流密度最小1(绿色接近透明), 最大1000(最红), 线性计算)
    "heatpoint_maxvalue": "500.0"   //区域热力点取值范围最大值
}
doorData = {
    "actionname": "doorControl",//关键字
    "id": "1",  //id
    "state": "1",  //开关状态 0关,1开
    "all": "true"  //是否控制全部 true,false
}


// 空气POI点
airpoiData_kongtiao = {
    "object_id" : "air_kongtiao",   //POI点的ID
    "object_name": "空调系统", //POI提示文本
    "object_floor": "3",//用于建筑楼层, 1 一层 (非必填)
    "object_type": "airConditioner",//图标的类别 (图标的样式, 需双方沟通约定)//此项目中. 约定为：①cameraLine; ②buildingLine; ③portLine;
    "coord_type": "1",  //(0: 经纬度gis, 1: cad坐标                                                                              )
    "object_coord" : "276056.0975,-116522.8888",//POI点的坐标(坐标类型需与该POI点的object_type相同)
    "coord_z": '0',//单位米, 坐标为GIS时决定POI图标高度; CAD时无效, 不用填
    "showtitle":"true",//true 显示提示文本(默认), false 不显示提示文本
    "showtitlerange":"30, 500",//此POI点显示title的镜头距离范围(单位米, 范围最小、最大距离; 在此范围内显示, 超出范围隐藏title, 注: showtitle属性为true时生效)
    "monitormouseoverlap":"ture"//此POI是否允许监听鼠标划过事件
    }
 airpoiData_kongqi= {
    "object_id" : "air_kongqi", 
    "object_name": "空气检测系统",
    "object_floor": "3",
    "object_type": "pm25",
    "coord_type": "1",                                            
    "object_coord" : "294145.5555,-134071.3333",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }
airpoiData_wendu= {
    "object_id" : "air_wendu", 
    "object_name": "温湿度控制",
    "object_floor": "3",
    "object_type": "temperature",
    "coord_type": "1",                                            
    "object_coord" : "294145.5555,-134071.3333",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }
 airpoiData_fresh = {
    "object_id" : "air_freshAir", 
    "object_name": "新风系统",
    "object_floor": "3",
    "object_type": "freshAir",
    "coord_type": "1",                                            
    "object_coord" : "297077,-123624",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }
airpoiData_paifeng = {
    "object_id" : "air_paifeng", 
    "object_name": "排风系统",
    "object_floor": "3",
    "object_type": "airCleaner",
    "coord_type": "1",                                            
    "object_coord" : "276176.3578,-138902. 4529",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }
airpoiData_youhai = {
    "object_id" : "air_youhai", 
    "object_name": "有害气体检测",
    "object_floor": "3",
    "object_type": "formaldehyde",
    "coord_type": "1",                                            
    "object_coord" : "284555,-115757",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }







airpoiData = {
    "object_id" : "air_conditioner",   //POI点的ID
    "object_name": "空调系统", //POI提示文本
    "object_floor": "3",//用于建筑楼层, 1 一层 (非必填)
    "object_type": "airConditioner",//图标的类别 (图标的样式, 需双方沟通约定)//此项目中. 约定为：①cameraLine; ②buildingLine; ③portLine;
    "coord_type": "1",  //(0: 经纬度gis, 1: cad坐标                                                                              )
    "object_coord" : "276056.0975,-116522.8888",//POI点的坐标(坐标类型需与该POI点的object_type相同)
    "coord_z": '0',//单位米, 坐标为GIS时决定POI图标高度; CAD时无效, 不用填
    "showtitle":"true",//true 显示提示文本(默认), false 不显示提示文本
    "showtitlerange":"30, 500",//此POI点显示title的镜头距离范围(单位米, 范围最小、最大距离; 在此范围内显示, 超出范围隐藏title, 注: showtitle属性为true时生效)
    "monitormouseoverlap":"ture"//此POI是否允许监听鼠标划过事件
    }

airpoiData2 = {
    "object_id" : "air_pm25", 
    "object_name": "PM2.5-大堂",
    "object_floor": "3",
    "object_type": "pm25",
    "coord_type": "1",                                            
    "object_coord" : "280930.5555,-129875.3333",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }

airpoiData3 = {
    "object_id" : "air_tem", 
    "object_name": "空气检测1-无线院",
    "object_floor": "3",
    "object_type": "temperature",
    "coord_type": "1",                                            
    "object_coord" : "294145.5555,-134071.3333",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }

airpoiData4 = {
    "object_id" : "air_co2", 
    "object_name": "二氧化碳-洽谈室1",
    "object_floor": "3",
    "object_type": "co2",
    "coord_type": "1",                                            
    "object_coord" : "276176.3578,-138902. 4529",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }
    

airpoiData5 = {
    "object_id" : "air_formaldehyde", 
    "object_name": "甲醛-培训室",
    "object_floor": "3",
    "object_type": "formaldehyde",
    "coord_type": "1",                                            
    "object_coord" : "284555,-115757",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }

airpoiData6 = {
    "object_id" : "air_freshAir", 
    "object_name": "新风-茶水间",
    "object_floor": "3",
    "object_type": "freshAir",
    "coord_type": "1",                                            
    "object_coord" : "297077,-123624",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }

    
// 光线
lightData = {
    "actionname": "lightControl",//关键字
    "id": "LightArea1",  //区域id：LightArea1-7
    "state": "0",  //开关状态 0关,1开
    "all": "true"  //是否控制全部 true,false
    }

curtainsData = {
    "actionname": "curtainsControl",//关键字
    "id": "curtain9",  //窗帘id
    "state": "2",  //开关状态 0关,1半开,2全开
    "all": "true"  //是否控制全部 true,false
    }




    
// 光POI点
ligpoiData_curtain = {
    "object_id" : "light_curtain",   //POI点的ID
    "object_name": "窗帘控制", //POI提示文本
    "object_floor": "3",//用于建筑楼层, 1 一层 (非必填)
    "object_type": "curtain",//图标的类别 (图标的样式, 需双方沟通约定)//此项目中. 约定为：①cameraLine; ②buildingLine; ③portLine;
    "coord_type": "1",  //(0: 经纬度gis, 1: cad坐标                                                                              )
    "object_coord" : "276056.0975,-116522.8888",//POI点的坐标(坐标类型需与该POI点的object_type相同)
    "coord_z": '0',//单位米, 坐标为GIS时决定POI图标高度; CAD时无效, 不用填
    "showtitle":"true",//true 显示提示文本(默认), false 不显示提示文本
    "showtitlerange":"30, 500",//此POI点显示title的镜头距离范围(单位米, 范围最小、最大距离; 在此范围内显示, 超出范围隐藏title, 注: showtitle属性为true时生效)
    "monitormouseoverlap":"ture"//此POI是否允许监听鼠标划过事件
    }
 ligpoiData_kaiguan = {
    "object_id" : "light_kaiguan", 
    "object_name": "开关控制",
    "object_floor": "3",
    "object_type": "light",
    "coord_type": "1",                                            
    "object_coord" : "276176.3578,-138902. 4529",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }
ligpoiData_qiangdu = {
    "object_id" : "light_qiangdu", 
    "object_name": "照度控制",
    "object_floor": "3",
    "object_type": "lightIntension",
    "coord_type": "1",                                            
    "object_coord" : "294145.5555,-134071.3333",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }
 ligpoiData_guanggan = {
    "object_id" : "light_guanggan", 
    "object_name": "光感系统",
    "object_floor": "3",
    "object_type": "lightFeel",
    "coord_type": "1",                                            
    "object_coord" : "297077,-123624",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }


    
    
// 舒适POI点
shushipoiData_body = {
    "object_id" : "shushi_body",   //POI点的ID
    "object_name": "体感舒适", //POI提示文本
    "object_floor": "3",//用于建筑楼层, 1 一层 (非必填)
    "object_type": "bodyFeel",//图标的类别 (图标的样式, 需双方沟通约定)//此项目中. 约定为：①cameraLine; ②buildingLine; ③portLine;
    "coord_type": "1",  //(0: 经纬度gis, 1: cad坐标                                                                              )
    "object_coord" : "276056.0975,-116522.8888",//POI点的坐标(坐标类型需与该POI点的object_type相同)
    "coord_z": '0',//单位米, 坐标为GIS时决定POI图标高度; CAD时无效, 不用填
    "showtitle":"true",//true 显示提示文本(默认), false 不显示提示文本
    "showtitlerange":"30, 500",//此POI点显示title的镜头距离范围(单位米, 范围最小、最大距离; 在此范围内显示, 超出范围隐藏title, 注: showtitle属性为true时生效)
    "monitormouseoverlap":"ture"//此POI是否允许监听鼠标划过事件
    }
 shushipoiData_light = {
    "object_id" : "shushi_light", 
    "object_name": "光感舒适",
    "object_floor": "3",
    "object_type": "lightFeel",
    "coord_type": "1",                                            
    "object_coord" : "276176.3578,-138902. 4529",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }
shushipoiData_noise = {
    "object_id" : "shushi_noise", 
    "object_name": "噪声检测",
    "object_floor": "3",
    "object_type": "noise",
    "coord_type": "1",                                            
    "object_coord" : "294145.5555,-134071.3333",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }
 shushipoiData_air = {
    "object_id" : "shushi_air",
    "object_name": "空气舒适",
    "object_floor": "3",
    "object_type": "airSoft",
    "coord_type": "1",                                            
    "object_coord" : "297077,-123624",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }
 shushipoiData_broad = {
    "object_id" : "shushi_broad", 
    "object_name": "广播系统",
    "object_floor": "3",
    "object_type": "broadcast",
    "coord_type": "1",                                            
    "object_coord" : "297077,-103624",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }

    // 营养POI点

 yingyangpoiData_weibolu = {
    "object_id" : "yingyang_weibolu", 
    "object_name": "微波炉",
    "object_floor": "3",
    "object_type": "microwave",
    "coord_type": "1",                                            
    "object_coord" : "276176.3578,-138902. 4529",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }
yingyangpoiData_yingyang = {
    "object_id" : "yingyang_yingyang", 
    "object_name": "营养",
    "object_floor": "3",
    "object_type": "nutrition",
    "coord_type": "1",                                            
    "object_coord" : "294145.5555,-134071.3333",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }
yingyangpoiData_bingxiang = {
    "object_id" : "yingyang_bingxiang", 
    "object_name": "冰箱",
    "object_floor": "3",
    "object_type": "refrigerator",
    "coord_type": "1",                                            
    "object_coord" : "297077,-103624",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }

// 健身POI点
jianshenpoiData_jianshenfang = {
    "object_id" : "jianshen_jianshenfang", 
    "object_name": "健身房",
    "object_floor": "3",
    "object_type": "gym",
    "coord_type": "1",                                            
    "object_coord" : "276176.3578,-138902. 4529",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }
jianshenpoiData_jianshen= {
    "object_id" : "jianshen", 
    "object_name": "步数",
    "object_floor": "3",
    "object_type": "step",
    "coord_type": "1",                                            
    "object_coord" : "294145.5555,-134071.3333",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }
// 健身POI点
shuipoiData_shui = {
    "object_id" : "shui_shui", 
    "object_name": "水",
    "object_floor": "3",
    "object_type": "waterCleaner",
    "coord_type": "1",                                            
    "object_coord" : "276176.3578,-138902. 4529",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }
shuipoiData_water  = {
    "object_id" : "zonghe_water", 
    "object_name": "用水量检测",
    "object_floor": "3",
    "object_type": "water",
    "coord_type": "1",                                            
    "object_coord" : "280930.5555,-129875.3333",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }


//综合  poi点

zonghepoiData_dian = {
    "object_id" : "zonghe_dian",   //POI点的ID
    "object_name": "区域电量", //POI提示文本
    "object_floor": "3",//用于建筑楼层, 1 一层 (非必填)
    "object_type": "electric",//图标的类别 (图标的样式, 需双方沟通约定)//此项目中. 约定为：①cameraLine; ②buildingLine; ③portLine;
    "coord_type": "1",  //(0: 经纬度gis, 1: cad坐标                                                                              )
    "object_coord" : "276056.0975,-116522.8888",//POI点的坐标(坐标类型需与该POI点的object_type相同)
    "coord_z": '0',//单位米, 坐标为GIS时决定POI图标高度; CAD时无效, 不用填
    "showtitle":"true",//true 显示提示文本(默认), false 不显示提示文本
    "showtitlerange":"30, 500",//此POI点显示title的镜头距离范围(单位米, 范围最小、最大距离; 在此范围内显示, 超出范围隐藏title, 注: showtitle属性为true时生效)
    "monitormouseoverlap":"ture"//此POI是否允许监听鼠标划过事件
    }

zonghepoiData_water  = {
    "object_id" : "zonghe_water", 
    "object_name": "用水量检测",
    "object_floor": "3",
    "object_type": "water",
    "coord_type": "1",                                            
    "object_coord" : "280930.5555,-129875.3333",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }

zonghepoiData_camera  = {
    "object_id" : "zonghe_camera", 
    "object_name": "监控",
    "object_floor": "3",
    "object_type": "camera",
    "coord_type": "1",                                            
    "object_coord" : "294145.5555,-134071.3333",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }

zonghepoiData_entrance = {
    "object_id" : "zonghe_entrance", 
    "object_name": "门禁",
    "object_floor": "3",
    "object_type": "entrance",
    "coord_type": "1",                                            
    "object_coord" : "276176.3578,-138902. 4529",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }
    

zonghepoiData_meetingRoom= {
    "object_id" : "zonghe_meetingRoom", 
    "object_name": "会议室",
    "object_floor": "3",
    "object_type": "meetingRoom",
    "coord_type": "1",                                            
    "object_coord" : "284555,-115757",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }

zonghepoiData_kaoqin = {
    "object_id" : "zonghe_checkingIn", 
    "object_name": "考勤",
    "object_floor": "3",
    "object_type": "checkingIn",
    "coord_type": "1",                                            
    "object_coord" : "297077,-123624",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }

