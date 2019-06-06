const list_item_goods_sku = "list_item_goods_sku";
const list_item_goods_sku_footer = "list_item_goods_sku_footer";
const list_item_goods_sku_header_left_canvas = "list_item_goods_sku_header_left_canvas_";
const sku_class = [];


function GoodsListTrigger() {
    $(ClassSelector + list_item_goods_sku).each(function(index, value){
        sku_class[index]  = $(value).attr("class").substring(list_item_goods_sku.length).trim()
        let saleAttribute = $(value).attr("data-sale-attribute");
        GoodsSaleAttribute(ClassSelector + list_item_goods_sku_header_left_canvas + sku_class[index], saleAttribute)
    });
    sku_class.forEach(function (value) {
        let sku_key = ClassSelector + value;
        $(sku_key).mouseover(function(){
            $(sku_key + " > " + ClassSelector + list_item_goods_sku_footer).show();
            //$(sku_key).css({"border": "1px solid black"}); //有点问题 显示时样式错乱
        });
        $(sku_key).mouseleave(function () {
            $(sku_key + " > " + ClassSelector + list_item_goods_sku_footer).hide();
            //$(sku_key).css({"border": "initial"});
        });
    });
}

function GoodsSaleAttribute(class_id, value) {
    $(class_id)
        .drawLine({
        strokeStyle: '#ff0',
        fillStyle: '#ff0',
        strokeWidth: 2,
        x1: 148, y1: 0,
        x2: 0, y2: 0,
        x3: 0, y3: 148,
        closed: true
    }).drawText({
        strokeStyle: '#f00',
        strokeWidth: 2,
        x: 55, y: 55,
        fontSize: 48,
        fontFamily: 'cursive',
        text: value,
        rotate: -45
    });
}

GoodsListTrigger();
