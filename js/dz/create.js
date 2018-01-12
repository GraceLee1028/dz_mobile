/**
 * Created by lea on 2017/12/12.
 */
(function (w) {
    var dzCreate = {
        init: function () {
            //扩展常用的方法
            w.Create.init({
                type:1
            });
            dzCreate.formDataInit();
        },
        formDataInit:function(){
        }
    };
    $(function () {
        dzCreate.init();
    });
})(window);
