/**
 * Created by lea on 2017/12/12.
 */
(function (w) {
    var byCreate = {
        init: function () {
            //扩展常用的方法
            w.Create.init({
                type:3
            });
            byCreate.formDataInit();
        },
        formDataInit:function(){
            //包邮条件
            var $actType = $("#actType"),$freeNum = $("#freeNum"),$freeUnit = $("#freeUnit"),$freeIF = $("#freeIF");
            $actType.pickerInit({
                title:"请选择包邮条件",
                col:[
                    {
                        textAlign: 'center',
                        values: ["无条件","满元","满件"]
                    }
                ]
            });
            $actType.on("change",function(){
                console.log($(this).val());
                var $this = $(this),val = $this.val();
                if(val=="无条件"){
                    $freeIF.hide();
                }else if(val=="满元"){
                    $freeIF.show();
                    $freeNum.val("39");
                    $freeUnit.html("元");
                }else{//满件
                    $freeIF.show();
                    $freeNum.val("3");
                    $freeUnit.html("件");
                }
            });
            //包邮地区
            var $freeBtn = $("#freeBtn");
            $freeBtn.freeArea({
                type:1,
                limit:"5",
                callback:function(idStr,txtStr){//确定事件
                    var state = $freeBtn.data("state");
                    var html = state=="0"?"包邮：":"不包邮：";
                    html=txtStr==""?"":html+txtStr;
                    $("#freeSpan").html(html);
                }
            });
        }
    };
    $(function () {
        byCreate.init();
    });
})(window);
