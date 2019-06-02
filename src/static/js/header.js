const navigate = "header_nav_item";
const navigate_sub =  "header_nav_sub_nav_";
const navigate_class = [];
const ClassSelector = ".";


function init() {
    // 获取导航栏ClassID
    $("#header_nav ul li").each(function(index,value){
        let cid = $(value).attr("class").substring(navigate.length).trim();
        navigate_class[index] = cid;
    });

    //@brief: 导航栏 mouseover 有且仅有一个可以显示
    //@brief: 展开页 进入时显示，离开时消失
    navigate_class.forEach(function (value,index){
        let cid = ClassSelector + value;
        let subcid = ClassSelector + navigate_sub + value;
        $(subcid).mouseenter(function () {
            $(subcid).show();
        });
        $(subcid).mouseleave(function () {
            $(subcid).hide();
        });
        $(cid).mouseover(function(){
            navigate_class.forEach(function (v,k) {
                let temp = ClassSelector + navigate_sub + v;
                if ( k === index) {
                    $(temp).show();
                } else {
                    $(temp).hide();
                }
            });
        });
    });
    // 活动专区 倒计时初始化
    $('#list_activity_area_countdown').countdown('2019/06/03', function(event) {
        $(this).html(event.strftime('%H:%M:%S'));
    });
}

init();






