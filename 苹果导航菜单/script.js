 document.onmousemove=function(ev){
     var oEvent=ev||event;
     var oDiv=document.getElementById("div1");
     var aImg=document.getElementsByTagName("img");
     var aIput=document.getElementsByTagName('input');
     var i=0;
     for(i=0;i<aImg.length;i++){

         var x=aImg[i].offsetLeft+aImg[i].offsetWidth/2;
         var y=aImg[i].offsetTop+oDiv.offsetTop+aImg[i].offsetHeight/2;
         a=x-oEvent.clientX;
         b=y-oEvent.clientY ;
         var dis=Math.sqrt(Math .pow(a,2)+Math.pow(b,2));
         var scale=1-dis/300;
         if(scale<0.5){
             aImg[i].width=64;
         }else {
             aImg[i].width =scale*128;

         }
     }
 }