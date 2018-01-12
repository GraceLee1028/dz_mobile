/**
 * Created by lea on 2017/12/8.
 */
(function(w){
    var listObj = {
        init:function(){
            var state = CL.getUrlArgs().state;
            $(".tabs").tabs({currentData:state?state:0});
        }
    };
    $(listObj.init);
})(window);