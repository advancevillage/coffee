//@author: richard
const goods_menu_colors_show_canvas = "goods_menu_colors_show_canvas";
const ClassSelector = ".";

function ShowGoodsColors() {
    $(ClassSelector + goods_menu_colors_show_canvas)
        .drawArc({
            fillStyle: '#36b',
            strokeWidth: 0,
            x: 15, y: 15,
            radius: 11,
            ccw: true,
            inDegrees: false

        })
        .drawLine({
            strokeStyle: '#fff',
            strokeWidth: 2,
            x1: 9,  y1: 16,
            x2: 13, y2: 20,
            x3: 22, y3: 12,
        });
}

ShowGoodsColors();



