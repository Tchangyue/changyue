document.write("<script type='text/javascript' src='//api.map.baidu.com/api?v=2.0&ak=vfFj4wWGy0ikMA7Zc9urNv3GGl9jFG6L'></script>"); 

var baiduMap = function (_where,longitude,latitude) {
    // 给出了默认值，可有可无
    var _longitude = (longitude == '' || longitude == null ? 108.651839 : longitude);
    var _latitude = (latitude == '' || latitude == null ? 21.96371 : latitude);
    var map = new BMap.Map(_where, {
                minZoom: 7,
                maxZoom: 14
            }); // 创建Map实例 并设置缩放最大最小级别 
            var print = new BMap.Point(_longitude, _latitude)
            map.centerAndZoom(print, 11); //初始化时，即可设置中心点和地图缩放级别。
            map.addControl(new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT}));  // 左上角，添加比例尺      
            map.addControl(new BMap.NavigationControl());//左上角，添加默认缩放平移控件
            map.addControl(new BMap.MapTypeControl({
                mapTypes:[
                    BMAP_NORMAL_MAP,
                    BMAP_HYBRID_MAP
                ]}));	  
            // map.openInfoWindow(infoWindow,point)
            // var marker = new BMap.Marker(print);  // 创建标注
            // map.addOverlay(marker);
            map.enableScrollWheelZoom(true);  // 鼠标缩放
            map.disableDragging(); //禁止拖拽
            // setTimeout(function () {
            //     map.setZoom(13); // 2秒后放大到15级
            //     // map.enableDragging(); //两秒后开启拖拽
            // }, 2000);
            var _style = document.getElementById(_where).style;
            _style.height = "100%";
            _style.width = "100%";
            _style.overflow = "hidden";
            _style.margin = "0";        
    return this;
};

// 使用方法 baiduMap(元素ID.经度（选填），纬度（选填）);

//  外部定义的元素box 大小样式为自定义