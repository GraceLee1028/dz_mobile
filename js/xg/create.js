/**
 * Created by lea on 2017/12/12.
 */
(function (w) {
    var xgCreate = {
        init: function () {
            //扩展常用的方法
            w.Create.init({
                type:2
            });
            xgCreate.formDataInit();
        },
        formDataInit:function(){

        }
    };
    $(function () {
        xgCreate.init();
    });
})(window);
