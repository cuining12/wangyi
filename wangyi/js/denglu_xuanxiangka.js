            var zc_xuanxiang=document.querySelectorAll(".zcl1,.zcl2")
            for(var i=0;i<zc_xuanxiang.length;i++){
                zc_xuanxiang[i].index=i
                zc_xuanxiang[i].onclick=function(){
                    var zc=document.querySelectorAll(".zcl3")
                    for(var p=0;p<zc_xuanxiang.length;p++){
                        zc_xuanxiang[p].style.color="#000"
                        zc[p].style.display="none"
                    }
                    this.style.color="red"
                    zc[this.index].style.display="block"
                }
            }
