# Markdown
## 基本介绍
Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档。  
Markdown 语言在 2004 由约翰·格鲁伯（英语：John Gruber）创建。  
Markdown 编写的文档可以导出 HTML 、Word、图像、PDF、Epub 等多种格式的文档。  
Markdown 编写的文档后缀为 .md, .markdown。  



## 标题
Markdown 标题有两种格式：  
**1、使用 "=" 和 "-" 标记一级和二级标题**  
```
我展示的是一级标题
=================

我展示的是二级标题
-----------------
```

::: details   点击查看效果
<img :src="$withBase('/images/markdown/title_01.png')" alt="效果展示">
:::


**2、使用 "#" 标记标题**  
使用 "#" 号可表示 1-6 级标题，一级标题对应一个 "#" 号，二级标题对应两个 "#" 号，以此类推;最多为6级标题。
```
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

::: details   点击查看效果
<img :src="$withBase('/images/markdown/title_02.png')" alt="效果展示">
:::



## 字体
Markdown 可以使用以下几种字体：
```
*斜体文本 方法一*  
_斜体文本 方法二_  

**粗体文本 方法一**  
__粗体文本 方法二__  

***粗体+斜体文本 方法一***  
___粗体+斜体文本 方法二___  

~~删除线~~ 

<u>下划线</u>

<center>文本居中</center>

<p align="right">又对齐</p>
```

::: details   点击查看效果
<img :src="$withBase('/images/markdown/font_01.png')" alt="效果展示">
:::



## 分割线
你可以在一行中用三个以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。你也可以在星号或是减号中间插入空格。下面每种写法都可以建立分隔线：
```
***

* * *

*****

- - -

----------
```

::: details   点击查看效果
<img :src="$withBase('/images/markdown/hr_01.png')" alt="效果展示">
:::



## 段落
Markdown 段落没有特殊的格式，直接编写文字就好了，有两种书写方式，如下：  
**1.在需要换行后面使用两个以上空格**  
<img :src="$withBase('/images/markdown/stage_01.png')" alt="效果展示">

**2.直接使用回车，使用空行来换行**  
<img :src="$withBase('/images/markdown/stage_02.png')" alt="效果展示">



## 列表
Markdown 支持有序列表和无序列表。  
无序列表使用星号(*)、加号(+)或是减号(-)作为列表标记，这些标记后面要添加一个空格，然后再填写内容：

### 无序列表
```
* 第1项
* 第2项
+ 第3项
+ 第4项
- 第5项
- 第6项
```

::: details   点击查看效果
<img :src="$withBase('/images/markdown/ul_01.png')" alt="效果展示">
:::


### 有序列表
```
1. 第1项
2. 第2项
3. 第3项
```

::: details   点击查看效果
<img :src="$withBase('/images/markdown/ul_02.png')" alt="效果展示">
:::


### 列表嵌套
```
1. 第一项
    * 第1.1项
    * 第1.2项
2. 第二项
    + 第2.1项
    + 第2.2项
3. 第二项
    - 第3.1项
    - 第3.2项
```

::: details   点击查看效果
<img :src="$withBase('/images/markdown/ul_03.png')" alt="效果展示">
:::




## 引用 / 区块
Markdown 区块引用是在段落开头使用 ">" 符号 ，然后后面紧跟一个**空格**符号：

### 基本使用
```
> 区块引用
> 基本使用
```

::: details   点击查看效果
<img :src="$withBase('/images/markdown/quote_1.png')" alt="效果展示">
:::


### 区块嵌套
```
> 最外层
> > 第一层嵌套
> > >第二层嵌套
> > > >第三次嵌套
```

::: details   点击查看效果
<img :src="$withBase('/images/markdown/quote_2.png')" alt="效果展示">
:::


### 区块中使用列表
```
> 区块中使用列表
> 1. 第一项
> 2. 第二项
> + 第三项
> - 第四项
> * 第五项
```

::: details   点击查看效果
<img :src="$withBase('/images/markdown/quote_3.png')" alt="效果展示">
:::



### 列表中使用区块
```
* 第一项
    > 我是区块
* 第二项
    > 我是区块
```

::: details   点击查看效果
<img :src="$withBase('/images/markdown/quote_4.png')" alt="效果展示">
:::




## 代码
```
    //1.使用一个" ` "标记单行代码。
    `<p>这是单行代码</p>`嘿嘿

    //2.使用三个 " ` " 标记代码块。
    ```
    <ul>
        <li>这是代码块</li>
        <li>这是代码块</li>
        <li>这是代码块</li>
    </ul>
    ```
    //3.使用四个空格 或者 一个制表符号（Tab）也可以作为代码块。
    这是四个空格
    这是一个制表符号（Tab键）
```

::: details   点击查看效果
<img :src="$withBase('/images/markdown/code_01.png')" alt="效果展示">
:::




## 链接
```
//方法一：[链接名称](链接地址)  
[这是百度地址](https://www.baidu.com)  

//方法二：<链接地址>
<https://www.baidu.com>
```

::: details   点击查看效果
<img :src="$withBase('/images/markdown/link_01.png')" alt="效果展示">
:::



## 图片
Markdown图片语法如下：
```
//方法一：
![alt 属性文本](https://napi.mlearning365.com/Storage/master/product/thumbs310/310_202112311724104849810.png)

![alt 属性文本](https://napi.mlearning365.com/Storage/master/product/thumbs310/310_202112311724104849810.png "嘿嘿")

//方法二：
<img src="https://napi.mlearning365.com/Storage/master/product/thumbs310/310_202112311724104849810.png" width="50%">
```

::: details   点击查看效果
![alt 属性文本](https://napi.mlearning365.com/Storage/master/product/thumbs310/310_202112311724104849810.png)

![alt 属性文本](https://napi.mlearning365.com/Storage/master/product/thumbs310/310_202112311724104849810.png "嘿嘿")

<img src="https://napi.mlearning365.com/Storage/master/product/thumbs310/310_202112311724104849810.png" width="50%">
:::



## 表格
```
|  表头   | 表头   |  表头   | 表头   |
|  ----  | ----   |   ----  | ----  |
| 单元格  | 单元格 |   单元格 | 单元格|
| 单元格  | 单元格 |   单元格 | 单元格|
```

::: details 点击查看效果
|  表头   | 表头   |  表头   | 表头   |
|  ----  | ----   |   ----  | ----  |
| 单元格  | 单元格 |   单元格 | 单元格|
| 单元格  | 单元格 |   单元格 | 单元格|
:::


## Markdown 扩展
### 提示信息
```
::: tip 
提示信息
::: 

::: warning
这是警告信息
:::

::: danger 
这是危险信息
:::

::: details  
这是详情
:::

```

::: details 点击查看效果
<img :src="$withBase('/images/markdown/msg_01.png')" alt="homeimg">
:::



### Emoji表情
> [点击查看更多Emoji表情](https://www.webfx.com/tools/emoji-cheat-sheet/)

```
:100:
:game_die:
:smile:
:sunny:
:snail:
:octopus:
:tropical_fish:
:fish:
:whale:
:whale2:
:dolphin:
```
::: details 点击查看效果
:100:
:game_die:
:smile:
:sunny:
:snail:
:octopus:
:tropical_fish:
:fish:
:whale:
:whale2:
:dolphin:
:::



## Markdown 高级 

### 支持的 HTML 元素
```
不在 Markdown 涵盖范围之内的标签，都可以直接在文档里面用 HTML 撰写。
目前支持的 HTML 元素有：
使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑
这是：<b>文本加粗</b>
这是：<i>文本倾斜</i>
这是：<em>文本倾斜</em>
这是：<sub>下标文本</sub>
这是：<sup>上标文本</sup>
这是：<br/>
```
::: details 点击查看效果
使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑
这是：<b>文本加粗</b>  
这是：<i>文本倾斜</i>  
这是：<em>文本倾斜</em>  
这是：<sub>下标文本</sub>  
这是：<sup>上标文本</sup>  
这是换行：<br/>  
:::




### 转义
```
使用"\"进行转义。
```

::: details 点击查看效果
**文本加粗**  
\*\*文本加粗（正常显示星号）\*\*
:::
