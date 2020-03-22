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
    var color=["#FF2800","#FF5000","#FF7800","#FFA000","#FFC800","#FFF000",
                "#D7FF00","#AFFF00","#87FF00","#5FFF00","#37FF00","#0FFF00",
                "#00FF28","#00FF50","#00FF78","#00FFA0","#00FFC8","#00FFF0",
                "#00D7FF","#00AFFF","#0087FF","#005FFF","#0037FF","#000FFF",
                "#2800FF","#5000FF","#7800FF","#A000FF","#C800FF","#F000FF",
                "#FF00D7","#FF00AF","#FF0087","#FF005F","#FF0037","#FF000F","#FF0000"];
    var url=window.location.href;
    if(url.match(/space&uid=/)=='space&uid='){
    }
    else {
        var c=0;
        jq("tbody").each(function(){
            jq(this).css("background-color",color[c]);
            c++;
            if(c==37){
                c=0;
            }
        });
    }
})();