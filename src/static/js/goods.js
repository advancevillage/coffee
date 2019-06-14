//@author: richard
const goods_menu_colors_show_canvas = "goods_menu_colors_show_canvas";
const goods_container_detail_attr_size_label = "goods_container_detail_attr_size_label";
const ClassSelector = ".";

function ShowGoodsColors() {
    //颜色属性设置
    $(ClassSelector + goods_menu_colors_show_canvas).each(function (index, value) {
        let color = $(value).attr("data-color");
        //设置颜色圈
        $(ClassSelector + goods_menu_colors_show_canvas + index).css({"background":color});
        //设置鼠标进入和离开事件
        $(ClassSelector + goods_menu_colors_show_canvas + index).mouseenter(function () {
            $(ClassSelector + goods_menu_colors_show_canvas + index).css({"width":"30px", "height":"30px","margin-top":0,"margin-left":0})
        });
        $(ClassSelector + goods_menu_colors_show_canvas + index).mouseleave(function () {
            $(ClassSelector + goods_menu_colors_show_canvas + index).css({"width":"24px", "height":"24px","margin-top":"3px","margin-left":"3px"})
        });

    });
    //尺码设置
    $(ClassSelector + goods_container_detail_attr_size_label).each(function (index, value) {
        $(ClassSelector + goods_container_detail_attr_size_label + index).mouseenter(function () {
            $(ClassSelector + goods_container_detail_attr_size_label + index).css({"opacity":1,"border":"1px solid black"})
        });
        $(ClassSelector + goods_container_detail_attr_size_label + index).mouseleave(function () {
            $(ClassSelector + goods_container_detail_attr_size_label + index).css({"opacity":0.5,"border":"1px solid grey"})
        })
    });
}

ShowGoodsColors();



