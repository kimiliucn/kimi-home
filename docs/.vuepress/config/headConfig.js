//头部配置
module.exports = [
    ['link', {
        rel: 'icon',
        href: '/images/logo/home.png'
    }],
    ["meta", {
        name: "author",
        content: "滔滔程序猿"
    }],
    ["meta", {
        name: "keywords",
        content: "kimi-home,开源项目,开源项目主页模板,主页模板,开箱即用的开源项目主页模板,vuePress,专注于写作,Vue,webpack,生成静态的HTML"
    }],
    //添加百度统计
    [
        "script",
        {},
        `var _hmt = _hmt || [];
        (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?eaeb6fef50277a8cf277d4ebfe8149f4";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
        })();`
    ]
]