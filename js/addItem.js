/**
 * Created by lea on 2017/12/12.
 * 添加宝贝
 */
(function (w) {
    //扩展常用的方法
    var addObj = {
        options:{
            type:1 //1:打折[默认]
        },
        init: function (options) {
            $(".order-header").order();
        }
    };
    $(addObj.init);
})(window);