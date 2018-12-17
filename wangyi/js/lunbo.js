			// !ES6
            var lunbotu=document.querySelectorAll("#lunbo img")
			var timer;
			var lunbo_se=document.querySelectorAll(".lunbo_div p")
			var lunbo_l=document.querySelector(".lunbo_l")
			var lunbo_r=document.querySelector(".lunbo_r")
			var lunbo=document.getElementById("lunbo")
			var i=0
			lunbo_p_se()
			lunbo_dong()
			function lunbo_dong(){
				clearInterval(timer)
				timer=setInterval(function(){
					i++
					if(i>4){
						i=0
					}
					lunbotudong()
				},2000)
			}
            function lunbotudong(){
                for(var k=0;k<lunbotu.length;k++){
						lunbotu[k].style.opacity="0"
					}
					lunbotu[i].style.opacity="1"
					lunbo_p_se()
            }
			function lunbo_p_se(){
				for(var q=0;q<lunbo_se.length;q++){
					for(var w=0;w<lunbo_se.length;w++){
						lunbo_se[w].style.background="#fff"
					}
					lunbo_se[i].style.background="red"
				}
			}
            for(var e=0;e<lunbo_se.length;e++){
                lunbo_se[e].index=e;
                lunbo_se[e].onclick=function(){
                    i=this.index
                    console.log(i)
                    lunbotudong()
                    lunbo_p_se()
                    
                }
            }
			lunbo.onmouseover=function(){
				clearInterval(timer)
				lunbo_l.style.display="block"
				lunbo_r.style.display="block"
				lunbo_l.onclick=function(){
					i--
					if(i<0){
						i=4
					}
					for(var k=0;k<lunbotu.length;k++){
						lunbotu[k].style.opacity="0"
					}
					lunbotu[i].style.opacity="1"
					lunbo_p_se()
				}
				lunbo_r.onclick=function(){
					i++
					if(i>4){
						i=0
					}
					for(var k=0;k<lunbotu.length;k++){
						lunbotu[k].style.opacity="0"
					}
					lunbotu[i].style.opacity="1"
					lunbo_p_se()
				}
			}
			lunbo.onmouseout=function(){
				lunbo_dong()
				lunbo_l.style.display="none"
				lunbo_r.style.display="none"
			}
            