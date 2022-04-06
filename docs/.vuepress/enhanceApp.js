// 全局注册 Element 组件库
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
const systemConfig=require("./config/systemConfig");

export default ({
    Vue,
    options,
    router
}) => {

    //路由切换事件处理
    router.beforeEach((to, from, next) => {
        console.log("切换路由：", to.fullPath, from.fullPath);

        //是否开启百度统计
        if(systemConfig.isOpenBaiduStatistics){
            //触发百度的pv统计
            if (typeof _hmt != "undefined") {
                if (to.path) {
                    _hmt.push(["_trackPageview", to.fullPath]);
                    console.log("百度统计：", to.fullPath);
                }
            }
        }
        
        next();
    });

    Vue.use(Element)
}