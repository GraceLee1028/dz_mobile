/**
 * Created by lea on 2017/12/12.
 */
(function (w) {
    var mjsCreate = {
        init: function () {
            //扩展常用的方法
            w.Create.init({
                type:1
            });
            mjsCreate.conToggle();
        },
        conToggle:function(){
            //添加优惠
            $("#mjsAdd").on("click",function(){
                var $detailBox = $("#mjsDetailBox");
                var index = layerM.openContent({
                    height:"80%",
                    content:$detailBox.html(),
                    success:function(){
                        $detailBox.empty();
                        var $layuiCont = $(".layui-m-layercont");
                        $layuiCont.find(".checkbox-inline").checkClick({
                            callback: function($label,isCheck){
                                console.log($label);
                            }
                        });
                        mjsCreate.freeDeal();
                        var close = function(){
                            $detailBox.html($layuiCont.html());
                            layer.close(index);
                        };
                        //取消
                        $("#detailCancel").on("click",function(){
                            close();
                        });
                        //设置优惠
                        $("#detailSet").on("click",function(){
                            close();
                        });
                    }
                })
            });
            //下一步
            $("#nextBtn").on("click",function(){
                $("#mjsFirst").slideRightHide();
                $("#mjsSecond").slideRightShow();
            });
            //上一步
            $("#preBtn").on("click",function(){
                $("#mjsFirst").slideRightShow();
                $("#mjsSecond").slideRightHide();
            });
        },
        freeDeal:function(){//相关包邮的处理
            var $freeBtn = $("#freeBtn");
            $freeBtn.freeArea({
                container:"#mjsFreeArea",
                type:2,
                limit:"5",
                checkedData:[], // 选中项
                callback:function(idStr,txtStr){//确定事件
                    console.log(idStr);
                    console.log(txtStr);
                    $("#mjsFreeArea").hide();
                }
            });
        }
    };
    $(function () {
        mjsCreate.init();
    });
})(window);
