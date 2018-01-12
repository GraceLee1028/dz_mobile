/**
 * Created by lea on 2017/12/12.
 */
(function (w) {
    //扩展常用的方法
    var CreateObj = {
        options:{
            type:1, //1:打折[默认]
            tag:"卖家促销"  //默认值为卖家促销
        },
        init: function (options) {
            CreateObj.options = $.extend(CreateObj.options, options || {});
            CreateObj.formDataInit();
        },
        formDataInit:function(){
            $("#tag").on("click",function(){
                var $tag = $(this);
                console.log("tag click++++++++++++");
                $("#tagsList").showTag({
                    value:CreateObj.options.tag,
                    callback:function(value){
                        console.log(value);
                        CreateObj.options.tag = value;
                        $tag.val(value);
                    }
                });
            });
            $("#startTime").pickerTimeInit({title:"请选择开始时间"});
            $("#endTime").pickerTimeInit({title:"请选择结束时间"});
            var $range = $("#range");
            $range.pickerInit({
                title:"请选择活动范围",
                col:[
                    {
                        textAlign: 'center',
                        values: ["全部参与","部分参与"]
                    }
                ]
            });
            $range.on("change",function(){
                console.log($(this).val());
            });
        }
    };
    w.Create = CreateObj;
})(window);