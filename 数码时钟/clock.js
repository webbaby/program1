
var aNum=null;
var g_Img=[];
var g_Imgweek=null;
var g_Week=[
    "one","two","three","four","five","six","seven"
];
window.onload=function(){
    var oDiv=document.getElementById("clock");
    var a_Img=oDiv.getElementsByTagName("img");
    var i = 0;
    for (i = 0; i < a_Img.length; i++) {
        if (!isNaN(parseInt(a_Img[i].alt))) {
            g_Img.push(a_Img[i]);
        }
    }
    g_Img.push(a_Img[(a_Img.length)-1]);
    function toDouble(num){
        if(num<10){
            return "0"+num;
        }
        else{
            return ""+num;
        }
    };
    function getTimeNum() {
        var oDate=new Date();
        var aNumber=[];
        var iWeek=(oDate.getDay()+6)%7;
        var str =''+oDate.getFullYear()+toDouble(oDate.getMonth()+1)+toDouble(oDate.getDate())+toDouble(oDate.getHours())+
            toDouble(oDate.getMinutes())+toDouble(oDate.getSeconds())+iWeek;
        aChar=str.split('');
        for(i=0;i<aChar.length;i++){
            aNumber[i]=parseInt(aChar[i]);
        }
        return aNumber;

    }
    var aNum=getTimeNum();
    function timeNow() {
        aNum=getTimeNum();
        for(i=0;i<g_Img.length;i++){
            if(i==g_Img.length-1){
                g_Img[i].src='images/'+g_Week[aNum[i]]+'.png';
            }
            else{
                g_Img[i].src='images/'+aNum[i]+'.png';
            }
        }
    }
    timeNow();
    setInterval(timeNow,1000);



}