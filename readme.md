##MCBBS 分人而色
---
####描述
这是一个用于mcbbs的JavaScript脚本。
可以针对用户进行高亮

---
####设置
在Tampermonkey管理面板界面点击MCBBS 分人而色。
在
```
    var users=['示例1','示例2'];
    var color=['#FFF0F5','#90EE90'];
```
第一个数组中可以添加你希望高亮的用户名，每个用户名加双引号或单引号（不要使用中文引号）,每个用户名之间以“,”半角逗号隔开。
第二个数组中添加对应的颜色（最好使用16进制颜色），具体添加与上面一样。要对应。
附：[16进制颜色表](https://www.sioe.cn/yingyong/yanse-rgb-16/)
写完后记得上方文件→保存（或者按Ctrl+S）

---
####实际使用效果
![](https://i.loli.net/2020/03/22/vIHaKAucmZ8gsqw.png)

---
####其他用法
如果你不喜欢某个人，不想看Ta发的帖子，可以在颜色设置为"#000000"（黑色）。

---
####安装及源代码
安装地址（请先确保你的浏览器安装了Tampermonkey）：<https://greasyfork.org/zh-CN/scripts/398433-mcbbs-%E5%88%86%E4%BA%BA%E8%80%8C%E8%89%B2>
源代码地址：<https://github.com/CakeAL/mcbbsfres>

---
####其他事项
什么，你页面炸了，那不关我事。
什么，有bug，怎么会，都是我故意设置的（不是）。
什么，你觉得我写的特别垃圾，那就对了，反正我觉得也没人会用。