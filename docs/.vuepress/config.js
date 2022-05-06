const headConfig=require("./config/headConfig");
const pluginsConfig=require("./config/pluginsConfig");
const {zh_navConfig,en_navConfig} =require("./config/navConfig");

module.exports = {
    title: 'kimi-home', // 项目标题
    description: 'kimi-home是一款开箱即用的开源项目主页模板，基于vuePress开发。以最少的配置帮助你专注于写作，享受 Vue + WebPack + ElementUI + Markdown 的开发体验，高性能生成静态的HTML。 ', // 项目描述
    base: "/", // 项目根路径
    dest: "dist", // 打包后的文件夹路径
    // 标签中的额外内容
    head: headConfig,
    // 插件
    plugins: pluginsConfig,
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        logo: "/images/logo/home.png",
        editLinks: true,
        sidebarDepth: 3, // 同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        repo: 'Tkimiliu/kimi-home', // 你的仓库
        repoLabel: 'GitHub', // 导航栏上的文本
        docsDir: 'docs',
        // 语言配置
        locales: {
            // 简体中文
            "/": {
                label: "简体中文",
                selectText: "选择语言",
                editLinkText: "在GitHub上编辑此页面",
                lastUpdated: '最后修改时间', // 文档更新时间：每个文件git最后提交的时间
                nav: zh_navConfig,
                sidebar: {
                    // 指南
                    '/zh/guide/': [{
                        title: '文档指南',
                        collapsable: false,
                        children: genGuideSidebar('/zh')
                    }],
                    //Markdown
                    '/zh/markdown/':[{
                        title: 'Markdown',
                        collapsable: false,
                        children: genMarkdownSidebar('/zh')
                    }]
                }
            },
            // English
            "/en/": {
                label: "English",
                selectText: "Languages",
                editLinkText: "Edit this page on GitHub",
                lastUpdated: 'Last Update Time', // 文档更新时间：每个文件git最后提交的时间
                nav: en_navConfig,
                sidebar: {
                    // 指南
                    '/en/guide/': [{
                        title: 'Guide',
                        collapsable: false,
                        children: genGuideSidebar('/en')
                    }],
                    //Markdown
                    '/en/markdown/':[{
                        title: 'Markdown',
                        collapsable: false,
                        children: genMarkdownSidebar('/en')
                    }]
                }
            }
        }
    },
    // 语言配置
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
            description: 'kimi-home是一款开箱即用的开源项目主页模板，基于vuePress开发。以最少的配置帮助你专注于写作，享受 Vue + WebPack + ElementUI + Markdown 的开发体验，高性能生成静态的HTML。'
        },
        '/en/': {
            lang: 'en-US',
            description: 'kimi-home is an out of the box open source project home page template, which is developed based on vuepress. Help you focus on writing with minimal configuration, enjoy the development experience of Vue + webpack + elementui + markdown, and generate static HTML with high performance.'
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@public': './public'
            }
        }
    },
};

// 生成左侧导航栏
//指南
function genGuideSidebar(type = '') {
    const mapArr = [
        '/guide/',
        '/guide/directory-structure'
    ]
    return mapArr.map(i => {
        return type + i
    })
}
// Markdown
function genMarkdownSidebar(type = '') {
    const mapArr = [
        '/markdown/'
    ]
    return mapArr.map(i => {
        return type + i
    })
}