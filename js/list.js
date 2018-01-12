/**
 * Created by lea on 2017/12/8.
 */
(function(w){
    var listObj = {
        ms:null,
        init:function(){
            //设置列表的【未结束/已结束】切换，和展示
            var state = CL.getUrlArgs().state;
            $(".tabs").tabs({currentData:state?state:0});
            listObj.meScroll();
        },
        meScroll:function(){
            listObj.ms = new MeScroll("list", {
                up: {
                    callback: listObj.getData, //上拉加载的回调
                    isBounce: false //如果您的项目是在iOS的微信,QQ,Safari等浏览器访问的,建议配置此项.解析(必读)
                }
            });
        },
        getData:function(page){
            console.log("111");
            $.ajax({
                url: 'xxxxxx?num=' + page.num + "&size=" + page.size, //如何修改page.num从0开始 ?
                success: function(curPageData) {
                    //联网成功的回调,隐藏下拉刷新和上拉加载的状态;
                    //mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空,显示empty配置的内容;
                    //列表如果无下一页数据,则提示无更多数据,(注意noMoreSize的配置)

                    //方法一(推荐): 后台接口有返回列表的总页数 totalPage
                    //必传参数(当前页的数据个数, 总页数)
                    //mescroll.endByPage(curPageData.length, totalPage);

                    //方法二(推荐): 后台接口有返回列表的总数据量 totalSize
                    //必传参数(当前页的数据个数, 总数据量)
                    //mescroll.endBySize(curPageData.length, totalSize);

                    //方法三(推荐): 您有其他方式知道是否有下一页 hasNext
                    //必传参数(当前页的数据个数, 是否有下一页true/false)
                    //mescroll.endSuccess(curPageData.length, hasNext);
                    //设置列表数据
                    //setListData(curPageData);//自行实现
                },
                error: function(e) {
                    //联网失败的回调,隐藏下拉刷新和上拉加载的状态
                    listObj.ms.endErr();
                }
            });
        }
    };
    $(listObj.init);
})(window);