var louceng_a=document.querySelectorAll(".louceng a")
            window.onscroll=function(){
                fu()
            }
            var fn=()=>{
                for(var i=0;i<louceng_a.length;i++){
                    louceng_a[i].style.background="#f03048"
                }
            }
            for(var q=0;q<louceng_a.length;q++){
                louceng_a[q].onmouseover=function(){
                    
                    fn()
                    fu()
                    this.style.background="#b42436"
                }
                louceng_a[q].onmouseout=function(){
                    fn()
                    fu()
                }
            }
            var fu=()=>{
                var louceng=document.querySelector(".louceng")
                var a=document.documentElement.scrollTop
                if(a>=571&&a<=6164){
                    louceng.style.display="block"
                }else{
                    louceng.style.display="none"
                }
                if(a>=571&&a<1486){
                    fn()
                    louceng_a[1].style.background="#b42436"
                }else if(a>=1486&&a<2144){
                    fn()
                    louceng_a[2].style.background="#b42436"
                }else if(a>=2144&&a<2802){
                    fn()
                    louceng_a[3].style.background="#b42436"
                }else if(a>=2802&&a<3181){
                    fn()
                    louceng_a[4].style.background="#b42436"
                }else if(a>=3181&&a<4118){
                    fn()
                    louceng_a[5].style.background="#b42436"
                }else if(a>=4181&&a<4497){
                    fn()
                    louceng_a[6].style.background="#b42436"
                }else if(a>=4497&&a<4876){
                    fn()
                    louceng_a[7].style.background="#b42436"
                }else if(a>=4876&&a<5255){
                    fn()
                    louceng_a[8].style.background="#b42436"
                }else if(a>=5255){
                    fn()
                    louceng_a[9].style.background="#b42436"
                }
            }