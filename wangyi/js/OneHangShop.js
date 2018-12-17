            var manjianshop=document.getElementById("manjianshop")
            var jiajushop=document.getElementById("jiajushop")
            var ertongshop=document.getElementById("ertongshop")
            var meishishop=document.getElementById("meishishop")
            $.ajax({
                type:"get",
                url:"3.php",
                success:function(res){
                    var abc=JSON.parse(res)
                    var shangpinliebiao=""
                    for(var r=0;r<abc.length;r++){
                        shangpinliebiao+=`<li>
		                <div>
		                    <img src="${abc[r].tupian}" alt="">
		                    <h4>${abc[r].name}</h4>
		                    <p>${abc[r].lei}</p>
		                    <span>￥</span>
		                    <span>${abc[r].jiaqian}</span>
		                    <span>|</span>
		                    <span>${abc[r].danjia}</span>
		                    <button>立即购买</button>
                            <div class="clear"></div>
		                </div>
		            </li>`
                    }
                    shangpinliebiao+=`<div class="clear"></div>`
                    manjianshop.innerHTML=shangpinliebiao
                    jiajushop.innerHTML=shangpinliebiao
                    ertongshop.innerHTML=shangpinliebiao
                    meishishop.innerHTML=shangpinliebiao
                }
            })
        
        