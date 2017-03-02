window.onload=function(){
    var oBtn=document.getElementsByTagName("li");
    var oDiv=document.getElementById("content");
    var oArray=new Array("一月到了，该做点什么呢？","二月到了，动起来吧？","三月到了，花开了？"
        ,"四月到了，该做点什么呢？","五月到了，该做点什么呢？","六月到了，该做点什么呢？","七月到了，该做点什么呢？",
        "八月到了，该做点什么呢？","九月到了，该做点什么呢？","十月到了，该做点什么呢？","十一月到了，记得自己的生日哦！",
        "十二月到了，马上到元旦了");
    var i=0;
    for(i=0;i<oBtn.length;i++){
        oBtn[i].index=i;
        oBtn[i].onmouseover=function(){
            for(i=0;i<oBtn.length;i++){
                oBtn[i].className=" ";
            };
            this.className="active";
            oDiv.innerHTML=oArray[this.index];
        }
    };
}