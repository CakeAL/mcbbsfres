// ==UserScript==
// @name         MCBBS 分人而色
// @namespace    https://space.bilibili.com/13161874
// @version      0.1
// @description  针对不同用户不同颜色
// @author       Cake_AL
// @match        https://*.mcbbs.net/*
// @grant        none
// ==/UserScript==

(function() {
    var users=['示例1','示例2'];
    var color=['#FFF0F5','#90EE90'];
    var url=window.location.href;
    if(url.match(/space&uid=/)=='space&uid='){
    }
    else {
        for (var i=0;i<users.length;i++){
            var person=jq("a:contains("+users[i]+")");
            person.parent().parent().parent().css("background-color",color[i]);
        }
    }
})();