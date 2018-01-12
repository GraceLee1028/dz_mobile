/**
 * Created by lea on 2017/12/8.
 */
/*
 *公用
 * 公用的一些组件
 * 扩展的zepto方法
 * update 20171130 by lifeng
 */
/*----------js公用方法------------- start*/
if (!String.prototype.trim) {
    String.prototype.trim = function () {    //首尾空格 去掉
        var regEx = /(^\s*)|(\s*$)/g;
        return this.replace(regEx, '');
    };
}
window.CL = {
    tagList:[
        {
            "text": "促销",
            "children": [
                {
                    "id": "卖家促销",
                    "text": "卖家促销"
                },
                {
                    "id": "优惠促销",
                    "text": "优惠促销"
                },
                {
                    "id": "火热促销",
                    "text": "火热促销"
                },
                {
                    "id": "促销价",
                    "text": "促销价"
                },
                {
                    "id": "店铺促销",
                    "text": "店铺促销"
                },
                {
                    "id": "促销活动",
                    "text": "促销活动"
                },
                {
                    "id": "疯狂促销",
                    "text": "疯狂促销"
                },
                {
                    "id": "活动促销",
                    "text": "活动促销"
                },
                {
                    "id": "团购促销",
                    "text": "团购促销"
                },
                {
                    "id": "大促销",
                    "text": "大促销"
                },
                {
                    "id": "爆款促销",
                    "text": "爆款促销"
                },
                {
                    "id": "品牌促销",
                    "text": "品牌促销"
                },
                {
                    "id": "促销优惠",
                    "text": "促销优惠"
                },
                {
                    "id": "让利促销",
                    "text": "让利促销"
                },
                {
                    "id": "火爆促销",
                    "text": "火爆促销"
                },
                {
                    "id": "新店大促销",
                    "text": "新店大促销"
                },
                {
                    "id": "换季促销",
                    "text": "换季促销"
                },
                {
                    "id": "热卖促销",
                    "text": "热卖促销"
                },
                {
                    "id": "冲冠促销",
                    "text": "冲冠促销"
                },
                {
                    "id": "冲量促销",
                    "text": "冲量促销"
                }
            ]
        },
        {
            "text": "时间",
            "children": [
                {
                    "id": "节日大促",
                    "text": "节日大促"
                },
                {
                    "id": "夏季新品",
                    "text": "夏季新品"
                },
                {
                    "id": "春上新",
                    "text": "春上新"
                },
                {
                    "id": "生日专享",
                    "text": "生日专享"
                },
                {
                    "id": "天天团购",
                    "text": "天天团购"
                },
                {
                    "id": "周周精选",
                    "text": "周周精选"
                },
                {
                    "id": "国庆大促",
                    "text": "国庆大促"
                },
                {
                    "id": "早买早优惠",
                    "text": "早买早优惠"
                },
                {
                    "id": "夏季促销",
                    "text": "夏季促销"
                },
                {
                    "id": "秋冬新品",
                    "text": "秋冬新品"
                },
                {
                    "id": "春季新品",
                    "text": "春季新品"
                },
                {
                    "id": "秋季新品",
                    "text": "秋季新品"
                },
                {
                    "id": "秋装上新",
                    "text": "秋装上新"
                },
                {
                    "id": "年终盛典",
                    "text": "年终盛典"
                },
                {
                    "id": "新品尝鲜",
                    "text": "新品尝鲜"
                },
                {
                    "id": "新年促销",
                    "text": "新年促销"
                },
                {
                    "id": "春季促销",
                    "text": "春季促销"
                },
                {
                    "id": "注册周年庆",
                    "text": "注册周年庆"
                },
                {
                    "id": "新店大促",
                    "text": "新店大促"
                },
                {
                    "id": "新年大促",
                    "text": "新年大促"
                },
                {
                    "id": "百天好礼",
                    "text": "百天好礼"
                },
                {
                    "id": "中秋大促",
                    "text": "中秋大促"
                },
                {
                    "id": "多买多优惠",
                    "text": "多买多优惠"
                },
                {
                    "id": "春夏新品",
                    "text": "春夏新品"
                },
                {
                    "id": "年终促销",
                    "text": "年终促销"
                },
                {
                    "id": "反季促销",
                    "text": "反季促销"
                },
                {
                    "id": "冬上新",
                    "text": "冬上新"
                },
                {
                    "id": "开学季",
                    "text": "开学季"
                },
                {
                    "id": "年底大促",
                    "text": "年底大促"
                },
                {
                    "id": "秋冬上新",
                    "text": "秋冬上新"
                },
                {
                    "id": "秋冬新款",
                    "text": "秋冬新款"
                },
                {
                    "id": "国庆大放价",
                    "text": "国庆大放价"
                },
                {
                    "id": "新品抢购",
                    "text": "新品抢购"
                },
                {
                    "id": "国庆促销",
                    "text": "国庆促销"
                },
                {
                    "id": "秋季上新",
                    "text": "秋季上新"
                },
                {
                    "id": "春季上新",
                    "text": "春季上新"
                },
                {
                    "id": "夏季热卖",
                    "text": "夏季热卖"
                },
                {
                    "id": "夏季新款",
                    "text": "夏季新款"
                },
                {
                    "id": "新品上新",
                    "text": "新品上新"
                },
                {
                    "id": "夏不为利",
                    "text": "夏不为利"
                },
                {
                    "id": "春季新款",
                    "text": "春季新款"
                },
                {
                    "id": "冬季新品",
                    "text": "冬季新品"
                },
                {
                    "id": "夏季大促",
                    "text": "夏季大促"
                },
                {
                    "id": "年底促销",
                    "text": "年底促销"
                },
                {
                    "id": "秋上新",
                    "text": "秋上新"
                },
                {
                    "id": "春季大促",
                    "text": "春季大促"
                },
                {
                    "id": "新春大促",
                    "text": "新春大促"
                },
                {
                    "id": "六一大促",
                    "text": "六一大促"
                },
                {
                    "id": "年末大促",
                    "text": "年末大促"
                },
                {
                    "id": "节日促销",
                    "text": "节日促销"
                },
                {
                    "id": "夏上新",
                    "text": "夏上新"
                },
                {
                    "id": "秋装新品",
                    "text": "秋装新品"
                },
                {
                    "id": "六一促销",
                    "text": "六一促销"
                },
                {
                    "id": "周年庆",
                    "text": "周年庆"
                },
                {
                    "id": "新春促销",
                    "text": "新春促销"
                },
                {
                    "id": "6月大促",
                    "text": "6月大促"
                },
                {
                    "id": "劳动节专享",
                    "text": "劳动节专享"
                },
                {
                    "id": "春装上新",
                    "text": "春装上新"
                },
                {
                    "id": "夏季上新",
                    "text": "夏季上新"
                },
                {
                    "id": "周年店庆",
                    "text": "周年店庆"
                },
                {
                    "id": "圣诞狂欢",
                    "text": "圣诞狂欢"
                },
                {
                    "id": "开业促销",
                    "text": "开业促销"
                },
                {
                    "id": "年终大促销",
                    "text": "年终大促销"
                },
                {
                    "id": "新年快乐",
                    "text": "新年快乐"
                }
            ]
        },
        {
            "text": "优惠",
            "children": [
                {
                    "id": "手机享优惠",
                    "text": "手机享优惠"
                },
                {
                    "id": "卖家优惠",
                    "text": "卖家优惠"
                },
                {
                    "id": "巨优惠",
                    "text": "巨优惠"
                },
                {
                    "id": "优惠活动",
                    "text": "优惠活动"
                },
                {
                    "id": "专属优惠",
                    "text": "专属优惠"
                },
                {
                    "id": "品牌钜惠",
                    "text": "品牌钜惠"
                },
                {
                    "id": "店铺优惠",
                    "text": "店铺优惠"
                },
                {
                    "id": "购物优惠",
                    "text": "购物优惠"
                },
                {
                    "id": "优惠多多",
                    "text": "优惠多多"
                },
                {
                    "id": "新款优惠",
                    "text": "新款优惠"
                },
                {
                    "id": "超值优惠",
                    "text": "超值优惠"
                }
            ]
        },
        {
            "text": "价格",
            "children": [
                {
                    "id": "惊喜价",
                    "text": "惊喜价"
                },
                {
                    "id": "手机优惠价",
                    "text": "手机优惠价"
                },
                {
                    "id": "手机专属价",
                    "text": "手机专属价"
                },
                {
                    "id": "手机尊享价",
                    "text": "手机尊享价"
                },
                {
                    "id": "第二件半价",
                    "text": "第二件半价"
                },
                {
                    "id": "节日促销价",
                    "text": "节日促销价"
                },
                {
                    "id": "优惠价",
                    "text": "优惠价"
                },
                {
                    "id": "抢购价",
                    "text": "抢购价"
                },
                {
                    "id": "活动价",
                    "text": "活动价"
                },
                {
                    "id": "大减价",
                    "text": "大减价"
                },
                {
                    "id": "无线专属价",
                    "text": "无线专属价"
                },
                {
                    "id": "粉丝专属价",
                    "text": "粉丝专属价"
                },
                {
                    "id": "心动价",
                    "text": "心动价"
                },
                {
                    "id": "粉丝福利价",
                    "text": "粉丝福利价"
                },
                {
                    "id": "优惠减价",
                    "text": "优惠减价"
                },
                {
                    "id": "上新价",
                    "text": "上新价"
                },
                {
                    "id": "降价啦",
                    "text": "降价啦"
                },
                {
                    "id": "新品抢鲜价",
                    "text": "新品抢鲜价"
                },
                {
                    "id": "年货价",
                    "text": "年货价"
                },
                {
                    "id": "惠淘价",
                    "text": "惠淘价"
                },
                {
                    "id": "女神价",
                    "text": "女神价"
                },
                {
                    "id": "尝鲜价",
                    "text": "尝鲜价"
                },
                {
                    "id": "嘉年华价",
                    "text": "嘉年华价"
                },
                {
                    "id": "手淘扫码价",
                    "text": "手淘扫码价"
                },
                {
                    "id": "提前放价",
                    "text": "提前放价"
                },
                {
                    "id": "抢新价",
                    "text": "抢新价"
                },
                {
                    "id": "降价了",
                    "text": "降价了"
                },
                {
                    "id": "大促价",
                    "text": "大促价"
                },
                {
                    "id": "店庆活动价",
                    "text": "店庆活动价"
                },
                {
                    "id": "淘宝女装价",
                    "text": "淘宝女装价"
                }
            ]
        },
        {
            "text": "其他",
            "children": [
                {
                    "id": "好货也疯狂",
                    "text": "好货也疯狂"
                },
                {
                    "id": "店铺活动",
                    "text": "店铺活动"
                },
                {
                    "id": "积分加钱购",
                    "text": "积分加钱购"
                },
                {
                    "id": "粉丝专享",
                    "text": "粉丝专享"
                },
                {
                    "id": "感恩回馈",
                    "text": "感恩回馈"
                },
                {
                    "id": "疯狂抢购",
                    "text": "疯狂抢购"
                },
                {
                    "id": "狂欢继续",
                    "text": "狂欢继续"
                },
                {
                    "id": "女神新衣",
                    "text": "女神新衣"
                },
                {
                    "id": "全国包邮",
                    "text": "全国包邮"
                },
                {
                    "id": "大促",
                    "text": "大促"
                },
                {
                    "id": "满两件包邮",
                    "text": "满两件包邮"
                },
                {
                    "id": "狂欢不止",
                    "text": "狂欢不止"
                },
                {
                    "id": "买就减",
                    "text": "买就减"
                },
                {
                    "id": "掌柜推荐",
                    "text": "掌柜推荐"
                },
                {
                    "id": "狂欢大促",
                    "text": "狂欢大促"
                },
                {
                    "id": "狂欢返场",
                    "text": "狂欢返场"
                },
                {
                    "id": "活动中",
                    "text": "活动中"
                },
                {
                    "id": "年货大促",
                    "text": "年货大促"
                },
                {
                    "id": "回馈客户",
                    "text": "回馈客户"
                },
                {
                    "id": "全民疯抢",
                    "text": "全民疯抢"
                },
                {
                    "id": "商家推荐",
                    "text": "商家推荐"
                }
            ]
        }
    ],
    //检测是否是网址
    isUrl: function (val) {
        //console.log(val);
        if (val.indexOf("?")) {
            val = val.split("?")[0];
            var regUrl = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
            //var regUrl = /^(https?:\/\/)?/;
            return regUrl.test(val);
        }
        return false;
    },
    //逗号全角转半角
    toCDB:function(str){
        var tmp = "";
        for (var i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 65248 && str.charCodeAt(i) < 65375) {
                tmp += String.fromCharCode(str.charCodeAt(i) - 65248);
            }else {
                tmp += String.fromCharCode(str.charCodeAt(i));
            }
        }
        return tmp
    },
    isString: function (val) {
        return typeof val === "string";
    },
    isNumber: function (val) {
        return typeof val === "number";
    },
    isUndefined: function(val){
        return typeof val === "undefined";
    },
    isFunction:function(func){
        return func instanceof Function;
    },
    isArray: function (val) {
        return val instanceof Array;
    },
    //得到地址传递的参数，返回： 参数对象
    getUrlArgs: function(url){
        url = url || window.location.href;
        url = decodeURIComponent(url);
        var argsString = (url.indexOf('?') === -1)?"":url.substring(url.indexOf('?')+1);
        var arrObj={};
        if(argsString !== ""){
            argsString = argsString.split('&');
            for(var i=0;i<argsString.length;i++){
                var key = argsString[i].split('=')[0];
                arrObj[key] = argsString[i].split('=')[1];
            }
        }
        return arrObj;
    },
    /*数组删除项*/
    remove: function(arr, item){
        var newArr = [];
        for(var i = 0,len = arr.length;i < len;i++){
            if(arr[i]==item){
                continue;
            }
            newArr.push(arr[i]);
        }
        return newArr;
    },
    decimalDeal: function(value,decimal){//小数点处理，小数位为.00时，转换为整数
        decimal = decimal||2;
        value = value.toFixed(decimal).toString();
        if(parseInt(value.substring(value.indexOf('.')+1)) == 0){
            value = parseInt(value);
        }
        return value;
    },
    /**
     *时间戳转换成具体的时间，进行不同格式的显示
     * @param time 时间戳[毫秒]
     * @param typeFormat 返回时间的格式【默认格式：1】【1:2017年04月25日 07:15:10】
     * @returns {*}【 2:2017-04-25 07:15】 【3:2017-04-25 23:59】(某天时间的最后时间)【4：时间对象】
     */
    getTimeDetail: function (time, typeFormat) {
        var dateTime;
        typeFormat = typeFormat || 1;
        if(time === 'now'){
            dateTime = new Date();
        }else{
            dateTime = new Date(time);
        }
        var zeroAdd = function (val) {
            if (val < 10) {
                val = "0" + val;
            }
            return val;
        };
        var detail = {
            year: dateTime.getFullYear(),  //年
            month: zeroAdd(parseInt(dateTime.getMonth() + 1)),    //月
            date: zeroAdd(dateTime.getDate()),       //日
            hour: zeroAdd(dateTime.getHours()),   //时
            minute: zeroAdd(dateTime.getMinutes()),  //分
            second: zeroAdd(dateTime.getSeconds()),  //秒
            week: dateTime.getDay()       //星期几[0:表示星期天，1-6: 星期一到星期六]

        };
        if (typeFormat == 1) {
            return detail.year + "年" + detail.month + "月" + detail.date + "日    " + detail.hour + ":" + detail.minute + ":" + detail.second;
        }else if(typeFormat == 2){
            return detail.year + "-" + detail.month + "-" + detail.date +" "+ detail.hour + ":" + detail.minute;
        }else if(typeFormat == 3){
            return detail.year + "-" + detail.month + "-" + detail.date +" 23:59";
        }else if(typeFormat == 4){
            return detail.year + "-" + detail.month + "-" + detail.date;
        }else {
            return detail;
        }
    },
    compareTime: function(bt, et){//时间比较,return 【true：bt < et, false: bt>et】
        if(typeof bt === "string"){bt = new Date(bt.replace(/\-/g,'/'));}
        if(typeof et === "string"){
            et = new Date(et.replace(/\-/g,'/'));
        }
        if(bt < et){
            return true;
        }else{
            return false;
        }
    },
    //阻止默认事件
    preventDefault:function(e) {
        window.event? window.event.returnValue = false : e.preventDefault();
    },
    stopPropagation:function(e){
        window.event? window.event.cancelBubble = true : e.stopPropagation();
    }
};
window.$ = Zepto;
/*----------js公用方法-------------end*/
/*---------Zepto 方法扩展 start ------*/
window.ZeptoExtend = {
    /*模板控件 template-web 过滤器*/
    templateInit: function () {
        //对template模板设置全局变量
        template.defaults.imports.dateFormat = function (date, format) {
            //console.log(date);
            var date =new Date(date);
            if (format == 1) {
                date = window.CL.getTimeDetail(date, 1);
            } else if (format == 2) {
                date = window.CL.getTimeDetail(date, 2);
            }
            return date;
        };
    },
    /**
     * get 方式，返回类型 json【包含code,对code进行处理】
     * @param url
     * @param d
     * @param callback
     */
    ajaxByGet: function (url, d, callback,noload) {
        noload = noload ? true : false;
        if (!noload) {
            var loadIndex = window.LayerInit.load();
        }
        $.ajax({
            url: url,
            type: "GET",
            data: d,
            dataType: "json",
            success: function (data) {
                switch (data.code) {
                    case 1000:
                        layer.msg("服务端错误：" + data.msg);
                        break;
                    case 1002://系统授权过期
                        CL.authAli();//1688授权
                        break;
                    default://其它情况【包含成功】[无特殊情况，则属于10001成功]
                        if (data.msg != "") {
                            layer.msg(data.msg);
                        }
                        if (CL.isFunction(callback)) { callback(data); }
                }
                if (!noload) {
                    layer.close(loadIndex);
                }
            },
            error: function () {
                if (!noload) {
                    layer.close(loadIndex);
                }
                layer.msg("获取数据失败请稍后再试！");
            }
        });
    },
    /**pc端
     * post 方式，返回类型 json【包含code,对code进行处理】
     * @param url
     * @param d
     * @param callback
     */
    ajaxByPost: function (url, d, callback,noload) {
        noload = noload? true : false;
        if (!noload) {
            var loadIndex = window.LayerInit.load();
        }
        $.ajax({
            url: url,
            type:"POST",
            data: d,
            dataType:"json",
            success: function (data) {
                switch (data.code) {
                    case 1000:
                        layer.msg("服务端错误：" + data.msg);
                        break;
                    case 1002://系统授权过期
                        CL.authAli();//1688授权
                        break;
                    default://其它情况【包含成功】[无特殊情况，则属于10001成功]
                        if (data.msg != "") {
                            layer.msg(data.msg);
                        }
                        if (CL.isFunction(callback)) { callback(data); }
                }
                if (!noload) {
                    layer.close(loadIndex);
                }
            },
            error: function () {
                if (!noload) {
                    layer.close(loadIndex);
                }
                layer.msg('获取数据失败请稍后再试！');
            }
        });
    },
    limitNum: function (ele) { //文本框只能输入数字
        ele.on('keyup', function (event) {
            var $this = $(this);
            $this.val($this.val().trim().replace(/[^\d.]/g, ''));
        });
    }
};
//初始化时，根据现有的不同状态切换内容
$.fn.conToggle = function (options) {//.tabs-menu
    var $content_default = this;//默认显示的内容
    options = $.extend({
        content: "", //进行切换的内容
        isToggle:false, //是否切换，默认false【true:取代默认内容，false:依旧显示默认内容】
        showClass: "show"//隐藏的class 类
    }, options || {});
    var $content = $(options.content);
    if(options.isToggle){//取代默认
        $content_default.removeClass(options.showClass);
        $content.addClass(options.showClass);
    }else{
        $content_default.addClass(options.showClass);
        $content.removeClass(options.showClass);
    }
};
//单击时，根据现有的不同状态切换内容
$.fn.toggleClick = function (options) {//
    var $this = this;//默认显示的内容
    options = $.extend({
        content: "", //进行切换的内容
        data:"value", //通过data-××值来切换判断
        activeClass:"active",
        currentData:"",//data-xx的当前值
        callback: function(value){//
            console.log(value+"click以后的回调事件");
        }
    }, options || {});
    //console.log(options.currentData);
    //根据默认值 初始化 内容切换
    function toggle($ele){
        var d = $ele.data(options.data);
        if(d == options.currentData){
            $ele.addClass(options.activeClass);
        }else{
            $ele.removeClass(options.activeClass);
        }
    }
    function set(){
        $this.each(function(){
            toggle($(this));
        });
        if(options.content){
            var $content = $(options.content);
            $content.each(function () {
                toggle($(this));
            });
        }
        if (options.callback) {
            //console.log(options.currentData);
            options.callback(options.currentData.toString());
        }
    }
    set();
    $this.off("click").on("click",function(){
        var $current = $(this);
        options.currentData = $current.data(options.data);
        set();
    });
};
//头部切换
$.fn.tabs = function (options) {//.tabs
    var $this = this;//默认显示的内容
    options = $.extend({
        child: "li", //进行切换的内容
        data:"state", //通过data-××值来切换判断
        activeClass:"active",
        currentData:"",//data-xx的当前值
        callback: function(value){//
            console.log(value+"click以后的回调事件");
        }
    }, options || {});
    //console.log(options.currentData);
    //根据默认值 初始化 内容切换
    function toggle($ele){
        var d = $ele.data(options.data);
        if(d == options.currentData){
            $ele.addClass(options.activeClass);
        }else{
            $ele.removeClass(options.activeClass);
        }
    }
    function set(){
        if(options.child){
            var $child = $this.find(options.child);
            $child.each(function () {
                toggle($(this));
            });
        }
        if (options.callback) {
            //console.log(options.currentData);
            options.callback(options.currentData.toString());
        }
    }
    set();
    $this.find(options.child).on("click",function(){
        var $current = $(this);
        options.currentData = $current.data(options.data);
        set();
    });
};
//显示标签
$.fn.showTag = function (options) {
    var $this = this;//默认显示的内容
    options = $.extend({
        value:"卖家促销",//当前默认的选中值
        callback: function(value){//
            console.log(value+"click以后的回调事件");
        }
    }, options || {});
    var _children=[],_value =options.value;
    function hasVal(arr,value){
        var has = false;
        for(var i=0;i<arr.length;i++){
            var item = arr[i];
            if(item.id == value){
                has = true;
                break;
            }
        }
        return has;
    }
    function getChildren(text){
        var data = CL.tagList;
        for(var i= 0,len=data.length;i<len;i++){
            var item = data[i];
            if(item.text == text){//标签为该类型
                _children = item.children;
            }
        }
    }
    function addLeftHtml(){
        var leftHtml ='<ul class="tags-nav">';
        var data = CL.tagList;
        for(var i= 0,len=data.length;i<len;i++){
            var item = data[i];
            var has =hasVal(item.children,_value);
            if(has){//标签为该类型
                _children = item.children;
                leftHtml+='<li class="selected">'+item.text+'</li>';
            }else{
                leftHtml+='<li>'+item.text+'</li>';
            }
        }
        leftHtml+='</ul><div class="tags-list"></div>';
        $this.html(leftHtml);
    }
    function addRightHtml(children){
        var rightHtml='';
        for(var j= 0,length=children.length;j<length;j++){
            var child = children[j];
            if(_value == child.id ){
                rightHtml += '<span class="selected" data-id="'+child.id+'">'+child.text+'</span>';
            }else{
                rightHtml += '<span data-id="'+child.id+'">'+child.text+'</span>';
            }
        }
        $(".tags-list").html(rightHtml);
    }
    addLeftHtml();
    addRightHtml(_children);
    $this.slideShow();
    //子选择事件绑定。
    $(".tags-list").on("click","span",function(){
        var $span = $(this),value = $span.data("id");
        if(options.callback){
            options.callback(value);
        }
        $this.slideHide();
    });
    $this.on("click",function(){
        $this.slideHide();
    });
    var $navLi = $("li",".tags-nav");
    $navLi.on("click",function(e){
        var $tag = $(this),text = $tag.html();
        getChildren(text);
        addRightHtml(_children);
        $navLi.removeClass("selected");
        $tag.addClass("selected");
        CL.stopPropagation(e);
    });
};
//从右到左，显示
$.fn.slideRightShow = function(){
    var $this = this;
    $this.css("left","0");
};
//从左到右，隐藏
$.fn.slideRightHide = function(){
    var $this = this;
    $this.css("left","100%");
};
//从左到右，显示
$.fn.slideShow = function(){
    var $this = this;
    $this.css("left","0");
};
//从右到左，隐藏
$.fn.slideHide = function(){
    var $this = this;
    $this.css("left","-100%");
};
//从上到下，显示
$.fn.slideDown = function(){
    var $this = this;
    $this.css("top","100%");
};
//从下到上，隐藏
$.fn.slideUp = function(){
    var $this = this;
    $this.css("top","0");
};
//单选按钮
$.fn.checkClick = function(options){
    var $this = this;//默认显示的内容
    options = $.extend({
        callback:function(){//确定事件
            console.log("click");
        }
    }, options || {});
    $this.on("click",function(){
        var $label = $(this), $check = $label.find("input[type=checkbox]");
        var isCheck = $check.prop("checked");
        if(isCheck){
            $label.addClass("checked");
        }else{
            $label.removeClass("checked");
        }
        if(options.callback){
            options.callback($label,isCheck);
        }
    });
};
$.fn.freeArea = function(options){//设置包邮地区
    var $this = this;//默认显示的内容
    options = $.extend({
        container:"",
        type:1, //1:区分包邮和不包邮，2：不区分
        state:"0",//默认包邮【1:不包邮】
        limit:0,//最多能选中多少个【限制，默认没有】
        checkedData:[], //选中的地区值[10001,10002]
        callback:function(idStr,txtStr){//确定事件
            console.log(idStr);
            console.log(txtStr);
        }
    }, options || {});
    function checkHtml(){
        var html = "";
        var areaData = {
            110000: "北京",
            120000: "天津",
            130000: "河北",
            140000: "山西",
            150000: "内蒙古",
            210000: "辽宁",
            220000: "吉林",
            230000: "黑龙江",
            310000: "上海",
            320000: "江苏",
            330000: "浙江",
            340000: "安徽",
            350000: "福建",
            360000: "江西",
            370000: "山东",
            410000: "河南",
            420000: "湖北",
            430000: "湖南",
            440000: "广东",
            450000: "广西",
            460000: "海南",
            500000: "重庆",
            510000: "四川",
            520000: "贵州",
            530000: "云南",
            540000: "西藏",
            610000: "陕西",
            620000: "甘肃",
            630000: "青海",
            640000: "宁夏",
            650000: "新疆",
            710000: "台湾",
            810000: "香港",
            820000: "澳门",
            990000: "海外"
        };
        for(var key in areaData){
            var item = areaData[key];
            if(options.checkedData.indexOf(key)!=-1){
                html += '<label class="checkbox-inline checked"><input name="freeArea" data-value="'+key+'" type="checkbox" value="'+item+'" checked=true>'+item+'</label>';
            }else{
                html += '<label class="checkbox-inline"><input name="freeArea" data-value="'+key+'" type="checkbox" value="'+item+'" >'+item+'</label>';
            }
        }
        return html;
    }
    //头和躯干【有头的】
    function sectionHtml(){
        //添加html
        var html ='';
        if(options.type == 1){//区分
            html += '<ul class="tabs clearfix" id="areaTabs">\
            <li data-state="0" class="active">设置包邮</li>\
            <li data-state="1">设置不包邮</li>\
            </ul>';
        }
        html += '<section class="area-box clearfix"></section>';
        if(options.type == 1){//区分
            html += '<div class="btn-group">\
            <button type="button" class="btn close" id="close">取消</button>\
            <button type="button" class="btn btn-primary" id="areaSet">确定</button>\
            </div>';
        }
        return html;
    }
    //地区选中事件
    function checkClick($area){
        $area.find(".checkbox-inline").checkClick({
            callback: function($label,isCheck){
                var length = $("input[name='freeArea']:checked").length;
                if(!isCheck){
                    length = length+1;
                }
                if (options.limit>0&&length >options.limit) {
                    $.toast('设置不包邮地区最多排除'+options.limit+'个');
                    if(isCheck){
                        $label.find("input[name='freeArea']").prop('checked', false);
                        $label.removeClass('checked');
                    }
                }
            }
        });
    }
    $this.on("click",function(){
        options.checkedData = $this.attr("data-ids").split(",");
        options.state = $this.data("state");
        var firstCheckedData=options.checkedData;
        //给html绑定事件
        //切换
        var $finish = "",$areaBox = null,$container,$body;
        if(options.type == 1){//区分//关闭
            $container = $(".area-wrapper");
            $body =$("#areaList");
            $container.empty().append(sectionHtml());
            $("#close").on("click",function(){
                $body.slideDown();
            });
            $areaBox= $(".area-box");
            $finish = $("#areaSet");
            //切换
            $("#areaTabs").tabs({
                currentData:options.state,
                child:"li",
                callback:function(value){
                    if(value == options.state){
                        options.checkedData = firstCheckedData;
                    }else{
                        options.checkedData = [];
                    }
                    $areaBox.html(checkHtml());
                    checkClick($areaBox);
                }
            });
            $body.slideUp();
        }else if(options.type == 2){//不区分 满就送
            $container = $(options.container);
            var sHtml = sectionHtml();
            console.log('<h5>地区</h5>'+sHtml);
            $container.empty().html('<h5>地区</h5>'+sHtml);
            $areaBox = $(".area-box");
            $finish = $("#freeFinish");
            $areaBox.html(checkHtml());
            checkClick($areaBox);
            $container.show();
        }
        //确定事件
        $finish.on("click",function(){
            var arr = [], textArr = [];
            $("input[name='freeArea']:checked").each(function () {
                textArr.push($(this).val());
                arr.push($(this).data('value'));
            });
            arr = arr.join(',');
            textArr = textArr.join(',');
            $this.attr("data-ids",arr);
            if(options.type == 1){//区分
                $this.data("state",$("#areaTabs li.active").data("state"));
                $body.slideDown();
            }else if(options == 2){
                $container.hide();
            }
            if(options.callback){
                options.callback(arr,textArr);
            }
        });
    });
};
$.fn.pickerInit = function (options) {//选择器
    var $this = this;//默认显示的内容
    $this.picker({
        toolbarTemplate: '<header class="bar bar-nav"><h1 class="title">'+options.title+'</h1><button class="button button-link pull-right button-yes close-picker">确定</button></header>',
        cols: options.col
    });
};
$.fn.pickerTimeInit = function (options) {//时间选择
    var $this = this;//默认显示的内容
    $this.datetimePicker({
        toolbarTemplate: '<header class="bar bar-nav"><h1 class="title">'+options.title+'</h1><button class="button button-link pull-right button-yes close-picker">确定</button></header>'
    });
};
//添加宝贝中的 筛选插件
$.fn.order = function(options){
    var $this = this;//默认显示的内容
    options = $.extend({
        callback:function(){//确定事件
            console.log("click");
        }
    }, options || {});
    var data = [],$orderBox = $(".order-box"),$allLi = $this.find(".order>li");
    $allLi.on("click",function(){
        var $li = $(this),state = $li.data("state"),order = $li.data("order"),hasActive=$li.hasClass("active");
        if(state == "order"){//默认排序
            data = [{key:"0",value:'默认排序'},{key:"1",value:'库存'},{key:"2",value:'上架时间'}];
        }else if(state=="isSale"){//库存/在售
            data= [{key:'onsale',value:'出售中'},{key:'inventory',value:'仓库中'}];
        }
        if(hasActive){//关闭
            $orderBox.empty();
            $li.removeClass("active");
            $orderBox.css("height","0");
        }else{
            var html = "";
            $allLi.removeClass("active");
            $li.addClass("active");
            for(var i= 0,leng=data.length;i<leng;i++){
                var item = data[i];
                if(item.key == order){//当前选中项
                    html +='<li class="active" data-state="'+state+'" data-order="'+item.key+'">'+item.value+'</li>';
                }else{
                    html +='<li data-state="'+state+'" data-order="'+item.key+'">'+item.value+'</li>';
                }
            }
            $orderBox.html(html).css("height","auto");
            $orderBox.find("li").on("click",function(){
                var $liData = $(this),state = $liData.data("state"),order = $liData.data("order"),hasActive=$liData.hasClass("active");
                if(!hasActive){//未选中click
                    $li.removeClass("active");
                    $li.data("state",state);
                    $li.data("order",order);
                    $li.html("<span>"+$liData.html()+"</span>");
                }
                $orderBox.empty();
                $orderBox.css("height","0");
                $li.removeClass("active");
            });
        }
    });
};
window.layerM = {
    options: {
        shade:'background-color: rgba(0,0,0,.2)'//自定义遮罩的透明度
    },
    init: function (options) {
        options = options || {};
        window.layerM.options = $.extend({}, window.layerM.options, options);
    },
    loading:function(msg){
        var index = layer.open({
            type: 2,
            content: msg?msg:"",
            shade: layerM.options.shade
        });
        return index;
    },
    alert:function(msg){//信息
        layer.open({
            content:msg
            ,btn:"确定",
            shade: layerM.options.shade
        });
    },
    alertTitle: function(options){
        layer.open({
            title: [
                options.title,
                "background-color: #FF4351; color:#fff;"
            ],
            content:options.content,
            btn:options.btn||"确定",
            shade: layerM.options.shade
        });
    },
    msg: function(msg){//提示
        layer.open({
            content:msg
            ,style: 'width:auto;background-color:#01AAED; color:#fff; border:none;' //自定风格
            ,time: 3000,
            skin:"msg",
            shade:'background-color:rgba(0,0,0,0);'
        });
    },
    confirm: function(options){//询问框
        var loadIndex = layerM.loading();
        layer.open({
            content:options.content,
            btn: options.btn||["确定","取消"],
            yes: function(index){
                if(options.yes){options.yes();}
                layer.close(index);
            },
            success:function(){//成功弹窗后的事件
                layer.close(loadIndex);
                if(options.success){options.success(index);}
            },
            shade: layerM.options.shade
        });
    },
    bottomConfirm:function(options){//底部询问框
        //底部对话框
        layer.open({
            content:options.content,
            btn: options.btn||["确定","取消"],
            skin: 'footer',
            yes: function(index){
                if(options.yes){options.yes();}
                layer.close(index);
            },
            shade: layerM.options.shade
        });
    },
    openContent: function(options){
        var loadIndex = layerM.loading();
        //页面层
        options.height = options.height||200;
        var index = layer.open({
            type: 1,
            content:options.content,
            anim: "up",
            style: "position:fixed; bottom:0; left:0; width: 100%; height: "+options.height+"; padding:15px 0; border:none;",
            success:function(){//成功弹窗后的事件
                layer.close(loadIndex);
                if(options.success){options.success(index);}
            },
            shade: layerM.options.shade
        });
        return index;
    },
    openFullScreen:function(options){//全屏内容
        var loadIndex = layerM.loading();
        var index = layer.open({
            type: 1,
            content: options.content,
            anim: 'up',
            style: 'position:fixed; left:0; top:0; width:100%; height:100%; border: none; -webkit-animation-duration: .5s; animation-duration: .5s;',
            success:function(){//成功弹窗后的事件
                console.log("success");
                layer.close(loadIndex);
                if(options.success){options.success(index);}
            },
            shade: layerM.options.shade
        });
    }
};
(function (w, $) {
    //扩展常用的方法
    var home = {
        init: function () {
            ZeptoExtend.templateInit();
            layerM.init();
            home.navDeal();
        },
        //loading:function(){
        //    var $body = $("body");
        //    window.onload = function(){
        //        setTimeout(function(){
        //            $(".page-loader").fadeOut();
        //        },1000);
        //    };
        //},
        navDeal: function () {//处理主菜单的导航
            var pageData = ["", "", "", "agentorder"];
            var path = window.location.pathname, index = 0;
            //console.log(path.match(/\/agentorder\//gi));
            if (path.match(/agentorder/gi)!=null) {//一键下单
                index = 3;
            } else if (path.match(/stocksyn/gi)!=null) {//一键库存同步
                index = 2;
            } else if (path.match(/\/home\//gi) != null) {//首页
                index = 0;
            } else {//一键铺货
                index = 1;
            }
            $("#mainNav").find("li").each(function(){
                //console.log($(this).index());
                var $li = $(this), indexLi = $li.index();
                if (indexLi == index) {
                    if (!$li.hasClass("active")) {//如何依旧是当前的导航项，就不切换
                        $li.addClass("active");
                    }
                }else{
                    $li.removeClass("active");
                }
            });
        }
    };
    $(function () {
        home.init();
    });
})(window, Zepto);
/*---------Zepto 方法扩展 end ------*/