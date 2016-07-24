$(function(){
    var topimg=$(".topimg")[0];
    var shanchu=$(".shanchu",topimg)[0];
    shanchu.onclick=function(){
        topimg.style.display="none";
        topimg.style.height=0;
    }
    var llllb=$(".llllb")[0];
    var llllb1=$(".llllb1",llllb)[0];
    var llllb2=$(".llllb2",llllb)[0];
    var ooo3=$(".ooo3",llllb)[0];
    llllb1.onclick=function(){
        if(getStyle(llllb2,"display")=="none"){
            llllb2.style.display="block";
            llllb.style.backgroundColor="#EF194A";
            llllb.style.borderTop="2px solid #9E0D3D";
        }else if(getStyle(llllb2,"display")=="block"){
            llllb2.style.display="none";
            llllb.style.background="transparent";
            llllb.style.borderTop="transparent";
        }
    }
    ooo3.onclick=function(){
        llllb2.style.display="none";
        llllb.style.background="transparent";
        llllb.style.borderTop="transparent";
    }
})
$(function(){
	//banner轮播
	var banner1=$(".banner1",$(".banner")[0])[0];
	var imga=$("a",banner1);
	var lib=$("li",$(".btn2")[0]);
	var btn=$(".btn",banner1)[0];
	var num=0;
	var flag=true;
	lib[0].style.background="#C81623";
	for(var i=0;i<imga.length;i++){
		if(i==0){
			continue;
		}
		imga[i].style.opacity=0;
		lib[i].style.background="#666";
	}
	var t=setInterval(move1,2000);
	banner1.onmouseover=function(){
		clearInterval(t);
		btn.style.display="block";
	}
	banner1.onmouseout=function(){
		t=setInterval(move1,2000);
		btn.style.display="none";
	}
	function move1(){
		if(!flag){return;};
		flag=false;
		num++;
		if(num==imga.length){
			num=0;
		}
		for(var i=0;i<imga.length;i++){
			animate(imga[i],{opacity:0});
			lib[i].style.background="#666";
		}
		lib[num].style.background="#C81623";
		animate(imga[num],{opacity:1},function(){
			flag=true;
		});
	}
	function move2(){
		if(!flag){return;};
		flag=false;
		num--;
		if(num<0){
			num=imga.length-1;
		}
		for(var i=0;i<imga.length;i++){
			animate(imga[i],{opacity:0});
			lib[i].style.background="#666";
		}
		lib[num].style.background="#C81623";
		animate(imga[num],{opacity:1},function(){
			flag=true;
		});
	}
	var btn_l=$(".btn_l",$(".btn")[0])[0];
	var btn_r=$(".btn_r",$(".btn")[0])[0];
	btn_l.onclick=function(){
		move2();
	}
	btn_r.onclick=function(){
		move1();
	}
	for(var i=0;i<lib.length;i++){
		lib[i].index=i;
		lib[i].onmouseover=function(){
			if(!flag){return;};
			flag=false;
			for(var j=0;j<lib.length;j++){
				lib[j].style.background="#666";
				animate(imga[j],{opacity:0});
			}
			lib[this.index].style.background="#C81623";
			animate(imga[this.index],{opacity:1},function(){
				flag=true;
			});
			num=this.index;
		}
	}
	//品牌盛典右侧的节点轮播
	var ppsd3=$(".ppsd3",$(".ppsd")[0])[0];
	var ppsd2=$(".ppsd2",$(".ppsd")[0])[0];
	var btn1=$(".btn1",ppsd2)[0];
	var btnl1=$(".btn_l1",btn1)[0];
	var btnr1=$(".btn_r1",btn1)[0];
	var sflag=true;
	ppsd2.onmouseover=function(){
		btn1.style.display="block";
	}
	ppsd2.onmouseout=function(){
		btn1.style.display="none";
	}
	btnr1.onclick=function(){
		if(!sflag){return;};
		sflag=false;
		animate(ppsd3,{left:-1000},1000,function(){
			for(var i=0;i<4;i++){
				var first=firstChild(ppsd3);
				ppsd3.appendChild(first);
				ppsd3.style.left=0
				sflag=true;
			}
		})
	}
	btnl1.onclick=function(){
		if(!sflag){return};
		sflag=false;
		for(var i=0;i<4;i++){
			var first=firstChild(ppsd3);
			var last=lastChild(ppsd3);
			ppsd3.insertBefore(last,first);
			ppsd3.style.left=-1000+"px";
		}
		animate(ppsd3,{left:0},1000,function(){
			sflag=true;
		})
	}
})
$(function(){
 //1l选项卡
	var floor=$(".floor")[0];
	var tab=$(".table",floor)[0];
	var lia=$("li",tab);
	var span=$("span",tab);
	var fs2=$(".fs2",floor);
	fs2[0].style.display="block";
	lia[0].id="lia";
	span[0].style.display="none";
	for(var i=0;i<lia.length;i++){
		lia[i].index=i;
		lia[i].onmouseover=function(){
			for(var j=0;j<lia.length;j++){
				fs2[j].style.display="none";
				lia[j].id="";
			}
			for(var q=0;q<lia.length-1;q++){
				span[q].style.display="block";
			}
			fs2[this.index].style.display="block";
			lia[this.index].id="lia";
			if(this.index!=lia.length){
				span[this.index].style.display="none";
			}
		}
	}
 //1l轮播
	//获取元素
	var zj=$(".zj",fs2[0])[0];
	var box=$(".box",fs2[0])[0];
	var imga=$("a",box);
	var xyq=$(".xyq",fs2[0])[0];
	var btn3=$(".btn3",fs2[0])[0];
	var li=$("div",xyq);
	var widths=parseInt(getStyle(imga[0],"width"));
	var l=$(".btn_l1",btn3)[0];
	var r=$(".btn_r1",btn3)[0];
	var index=0;
	var next=0;
    var flag=true;
	//初始化状态
	li[0].style.background="#B61B1F";
	for(var i=0;i<imga.length;i++){
		if(i==0){
			continue;
		}
		imga[i].style.left=widths+"px";
	}
	//自动轮播
    var t=setInterval(move,2000);	
    function move(){
	    //更新next
    	next++;
    	//判断边界
    	if(next==imga.length){
    		next=0;
    	}
    	//imga[next]就位
    	imga[next].style.left=widths+"px";
    	//动画
    	animate(imga[index],{left:-widths});
    	animate(imga[next],{left:0},function(){
            flag=true;
        });
    	li[index].style.background="#3e3e3e";
    	li[next].style.background="#B61B1F";
    	//更新index
    	index=next;
    }
    
    //选项卡
    for(var i=0;i<li.length;i++){
    	li[i].index=i;
    	li[i].onclick=function(){
            if(this.index==index){
                return;
            }
    		//就位
            if(this.index>index){
                imga[this.index].style.left=widths+"px";
                li[index].style.background="#3e3e3e";
                li[this.index].style.background="#B61B1F";
                //动画
                animate(imga[index],{left:-widths});
                animate(imga[this.index],{left:0});
                //更新
                next=this.index;
                index=next;
            }else if(this.index<index){
                imga[this.index].style.left=-widths+"px";
                li[index].style.background="#3e3e3e";
                li[this.index].style.background="#B61B1F";
                //动画
                animate(imga[index],{left:widths});
                animate(imga[this.index],{left:0});
                next=this.index;
                index=next;
            }
        }
    }
    zj.onmouseover=function(){
    	clearInterval(t);
    	btn3.style.display="block";
    }
    zj.onmouseout=function(){
    	t=setInterval(move,2000);
    	btn3.style.display="none";
    }
    r.onclick=function(){
        if(flag){
            flag=false;
            move();
        }
    }
    l.onclick=function(){
        if(flag){
            flag=false;
            movel()
        }
    	
    }
    function movel(){
    	next--;
    	//判断边界
    	if(next<0){
    		next=imga.length-1;
    	}
    	//imga[next]就位
    	imga[next].style.left=-widths+"px";
    	//动画
    	animate(imga[index],{left:widths});
    	animate(imga[next],{left:0},function(){
            flag=true;
        });
    	li[index].style.background="#3e3e3e";
    	li[next].style.background="#B61B1F";
    	//更新index
    	index=next;
    }
})
$(function(){
 //2l选项卡
	var floor=$(".floor2")[0];
	var tab=$(".table",floor)[0];
	var lia=$("li",tab);
	var span=$("span",tab);
	var fs2=$(".fs5",floor);
	fs2[0].style.display="block";
	lia[0].id="lia";
	span[0].style.display="none";
	for(var i=0;i<lia.length;i++){
		lia[i].index=i;
		lia[i].onmouseover=function(){
			for(var j=0;j<lia.length;j++){
				fs2[j].style.display="none";
				lia[j].id="";
			}
			for(var q=0;q<lia.length-1;q++){
				span[q].style.display="block";
			}
			fs2[this.index].style.display="block";
			lia[this.index].id="lia";
			if(this.index!=lia.length){
				span[this.index].style.display="none";
			}
		}
	}
 //2l轮播
	//获取元素
	var zj=$(".box3",fs2[0])[0];
	var imga=$(".dd1",fs2[0]);
	var xyq=$(".xyq1",fs2[0])[0];
	var btn4=$(".btn4",fs2[0])[0];
	var li=$("div",xyq);
	var widths=parseInt(getStyle(imga[0],"width"));
	var l=$(".btn_l1",btn4)[0];
	var r=$(".btn_r1",btn4)[0];
	var index=0;
	var next=0;
    var flag=true;
	//初始化状态
	li[0].style.background="#B61B1F";
	for(var i=0;i<imga.length;i++){
		if(i==0){
			continue;
		}
		imga[i].style.left=widths+"px";
	}
	//自动轮播
    var t=setInterval(move,2000);	
    function move(){
	    //更新next
    	next++;
    	//判断边界
    	if(next==imga.length){
    		next=0;
    	}
    	//imga[next]就位
    	imga[next].style.left=widths+"px";
    	//动画
    	animate(imga[index],{left:-widths});
    	animate(imga[next],{left:0},function(){
            flag=true;
        });
    	li[index].style.background="#3e3e3e";
    	li[next].style.background="#B61B1F";
    	//更新index
    	index=next;
    }
    
    //选项卡
    for(var i=0;i<li.length;i++){
    	li[i].index=i;
    	li[i].onclick=function(){
            if(this.index==index){
                return;
            }
    		//就位
            if(this.index>index){
                imga[this.index].style.left=widths+"px";
                li[index].style.background="#3e3e3e";
                li[this.index].style.background="#B61B1F";
                //动画
                animate(imga[index],{left:-widths});
                animate(imga[this.index],{left:0});
                //更新
                next=this.index;
                index=next;
            }else if(this.index<index){
                imga[this.index].style.left=-widths+"px";
                li[index].style.background="#3e3e3e";
                li[this.index].style.background="#B61B1F";
                //动画
                animate(imga[index],{left:widths});
                animate(imga[this.index],{left:0});
                next=this.index;
                index=next;
            }
        }
    }
    zj.onmouseover=function(){
    	clearInterval(t);
    	btn4.style.display="block";
    }
    zj.onmouseout=function(){
    	t=setInterval(move,2000);
    	btn4.style.display="none";
    }
    r.onclick=function(){
        if(flag){
            flag=false;
            move();
        }
    }
    l.onclick=function(){
        if(flag){
            flag=false;
            movel()
        }
    	
    }
    function movel(){
    	next--;
    	//判断边界
    	if(next<0){
    		next=imga.length-1;
    	}
    	//imga[next]就位
    	imga[next].style.left=-widths+"px";
    	//动画
    	animate(imga[index],{left:widths});
    	animate(imga[next],{left:0},function(){
            flag=true;
        });
    	li[index].style.background="#3e3e3e";
    	li[next].style.background="#B61B1F";
    	//更新index
    	index=next;
    }
})
$(function(){
	//3l
	var floor=$(".floor3")[0];
	var tab=$(".table",floor)[0];
	var lia=$("li",tab);
	var span=$("span",tab);
	var fs2=$(".fs2",floor);
	fs2[0].style.display="block";
	lia[0].id="lia";
	span[0].style.display="none";
	for(var i=0;i<lia.length;i++){
		lia[i].index=i;
		lia[i].onmouseover=function(){
			for(var j=0;j<lia.length;j++){
				fs2[j].style.display="none";
				lia[j].id="";
			}
			for(var q=0;q<lia.length-1;q++){
				span[q].style.display="block";
			}
			fs2[this.index].style.display="block";
			lia[this.index].id="lia";
			if(this.index!=lia.length){
				span[this.index].style.display="none";
			}
		}
	}
	//获取元素
	var zj=$(".zj",fs2[0])[0];
	var box=$(".box",fs2[0])[0];
	var imga=$("a",box);
	var xyq=$(".xyq1",fs2[0])[0];
	var btn4=$(".btn4",fs2[0])[0];
	var li=$(".pppp1",xyq);
	var widths=parseInt(getStyle(imga[0],"width"));
	var l=$(".btn_l1",btn4)[0];
	var r=$(".btn_r1",btn4)[0];
	var index=0;
	var next=0;
    var flag=true;
	//初始化状态
	li[0].style.background="#B61B1F";
	for(var i=0;i<imga.length;i++){
		if(i==0){
			continue;
		}
		imga[i].style.left=widths+"px";
	}
	//自动轮播
    var t=setInterval(move,2000);	
    function move(){
	    //更新next
    	next++;
    	//判断边界
    	if(next==imga.length){
    		next=0;
    	}
    	//imga[next]就位
    	imga[next].style.left=widths+"px";
    	//动画
    	animate(imga[index],{left:-widths});
    	animate(imga[next],{left:0},function(){
            flag=true;
        });
    	li[index].style.background="#3e3e3e";
    	li[next].style.background="#B61B1F";
    	//更新index
    	index=next;
    }
    
    //选项卡
    for(var i=0;i<li.length;i++){
    	li[i].index=i;
    	li[i].onclick=function(){
            if(this.index==index){
                return;
            }
    		//就位
            if(this.index>index){
                imga[this.index].style.left=widths+"px";
                li[index].style.background="#3e3e3e";
                li[this.index].style.background="#B61B1F";
                //动画
                animate(imga[index],{left:-widths});
                animate(imga[this.index],{left:0});
                //更新
                next=this.index;
                index=next;
            }else if(this.index<index){
                imga[this.index].style.left=-widths+"px";
                li[index].style.background="#3e3e3e";
                li[this.index].style.background="#B61B1F";
                //动画
                animate(imga[index],{left:widths});
                animate(imga[this.index],{left:0});
                next=this.index;
                index=next;
            }
        }
    }
    zj.onmouseover=function(){
    	clearInterval(t);
    	btn4.style.display="block";
    }
    zj.onmouseout=function(){
    	t=setInterval(move,2000);
    	btn4.style.display="none";
    }
    r.onclick=function(){
        if(flag){
            flag=false;
            move();
        }
    }
    l.onclick=function(){
        if(flag){
            flag=false;
            movel()
        }
    	
    }
    function movel(){
    	next--;
    	//判断边界
    	if(next<0){
    		next=imga.length-1;
    	}
    	//imga[next]就位
    	imga[next].style.left=-widths+"px";
    	//动画
    	animate(imga[index],{left:widths});
    	animate(imga[next],{left:0},function(){
            flag=true;
        });
    	li[index].style.background="#3e3e3e";
    	li[next].style.background="#B61B1F";
    	//更新index
    	index=next;
    }
})
$(function(){
	//4l
	var floor=$(".floor3")[1];
	var tab=$(".table",floor)[0];
	var lia=$("li",tab);
	var span=$("span",tab);
	var fs2=$(".fs2",floor);
	fs2[0].style.display="block";
	lia[0].id="lia";
	span[0].style.display="none";
	for(var i=0;i<lia.length;i++){
		lia[i].index=i;
		lia[i].onmouseover=function(){
			for(var j=0;j<lia.length;j++){
				fs2[j].style.display="none";
				lia[j].id="";
			}
			for(var q=0;q<lia.length-1;q++){
				span[q].style.display="block";
			}
			fs2[this.index].style.display="block";
			lia[this.index].id="lia";
			if(this.index!=lia.length){
				span[this.index].style.display="none";
			}
		}
	}
	//获取元素
	var zj=$(".zj",fs2[0])[0];
	var box=$(".box",fs2[0])[0];
	var imga=$("a",box);
	var xyq=$(".xyq",fs2[0])[0];
	var btn4=$(".btn4",fs2[0])[0];
	var li=$(".pppp1",xyq);
	var widths=parseInt(getStyle(imga[0],"width"));
	var l=$(".btn_l1",btn4)[0];
	var r=$(".btn_r1",btn4)[0];
	var index=0;
	var next=0;
    var flag=true;
	//初始化状态
	li[0].style.background="#B61B1F";
	for(var i=0;i<imga.length;i++){
		if(i==0){
			continue;
		}
		imga[i].style.left=widths+"px";
	}
	//自动轮播
    var t=setInterval(move,2000);	
    function move(){
	    //更新next
    	next++;
    	//判断边界
    	if(next==imga.length){
    		next=0;
    	}
    	//imga[next]就位
    	imga[next].style.left=widths+"px";
    	//动画
    	animate(imga[index],{left:-widths});
    	animate(imga[next],{left:0},function(){
            flag=true;
        });
    	li[index].style.background="#3e3e3e";
    	li[next].style.background="#B61B1F";
    	//更新index
    	index=next;
    }
    
    //选项卡
    for(var i=0;i<li.length;i++){
    	li[i].index=i;
    	li[i].onclick=function(){
            if(this.index==index){
                return;
            }
    		//就位
            if(this.index>index){
                imga[this.index].style.left=widths+"px";
                li[index].style.background="#3e3e3e";
                li[this.index].style.background="#B61B1F";
                //动画
                animate(imga[index],{left:-widths});
                animate(imga[this.index],{left:0});
                //更新
                next=this.index;
                index=next;
            }else if(this.index<index){
                imga[this.index].style.left=-widths+"px";
                li[index].style.background="#3e3e3e";
                li[this.index].style.background="#B61B1F";
                //动画
                animate(imga[index],{left:widths});
                animate(imga[this.index],{left:0});
                next=this.index;
                index=next;
            }
        }
    }
    zj.onmouseover=function(){
    	clearInterval(t);
    	btn4.style.display="block";
    }
    zj.onmouseout=function(){
    	t=setInterval(move,2000);
    	btn4.style.display="none";
    }
    r.onclick=function(){
        if(flag){
            flag=false;
            move();
        }
    }
    l.onclick=function(){
        if(flag){
            flag=false;
            movel()
        }
    	
    }
    function movel(){
    	next--;
    	//判断边界
    	if(next<0){
    		next=imga.length-1;
    	}
    	//imga[next]就位
    	imga[next].style.left=-widths+"px";
    	//动画
    	animate(imga[index],{left:widths});
    	animate(imga[next],{left:0},function(){
            flag=true;
        });
    	li[index].style.background="#3e3e3e";
    	li[next].style.background="#B61B1F";
    	//更新index
    	index=next;
    }
})
$(function(){
	//5l
	var floor=$(".floor3")[2];
	var tab=$(".table",floor)[0];
	var lia=$("li",tab);
	var span=$("span",tab);
	var fs2=$(".fs2",floor);
	fs2[0].style.display="block";
	lia[0].id="lia";
	span[0].style.display="none";
	for(var i=0;i<lia.length;i++){
		lia[i].index=i;
		lia[i].onmouseover=function(){
			for(var j=0;j<lia.length;j++){
				fs2[j].style.display="none";
				lia[j].id="";
			}
			for(var q=0;q<lia.length-1;q++){
				span[q].style.display="block";
			}
			fs2[this.index].style.display="block";
			lia[this.index].id="lia";
			if(this.index!=lia.length){
				span[this.index].style.display="none";
			}
		}
	}
	//获取元素
	var zj=$(".zj",fs2[0])[0];
	var box=$(".box",fs2[0])[0];
	var imga=$("a",box);
	var xyq=$(".xyq",fs2[0])[0];
	var btn4=$(".btn4",fs2[0])[0];
	var li=$("div",xyq);
	var widths=parseInt(getStyle(imga[0],"width"));
	var l=$(".btn_l1",btn4)[0];
	var r=$(".btn_r1",btn4)[0];
	var index=0;
	var next=0;
    var flag=true;
	//初始化状态
	li[0].style.background="#B61B1F";
	for(var i=0;i<imga.length;i++){
		if(i==0){
			continue;
		}
		imga[i].style.left=widths+"px";
	}
	//自动轮播
    var t=setInterval(move,2000);	
    function move(){
	    //更新next
    	next++;
    	//判断边界
    	if(next==imga.length){
    		next=0;
    	}
    	//imga[next]就位
    	imga[next].style.left=widths+"px";
    	//动画
    	animate(imga[index],{left:-widths});
    	animate(imga[next],{left:0},function(){
            flag=true;
        });
    	li[index].style.background="#3e3e3e";
    	li[next].style.background="#B61B1F";
    	//更新index
    	index=next;
    }
    
    //选项卡
    for(var i=0;i<li.length;i++){
    	li[i].index=i;
    	li[i].onclick=function(){
            if(this.index==index){
                return;
            }
    		//就位
            if(this.index>index){
                imga[this.index].style.left=widths+"px";
                li[index].style.background="#3e3e3e";
                li[this.index].style.background="#B61B1F";
                //动画
                animate(imga[index],{left:-widths});
                animate(imga[this.index],{left:0});
                //更新
                next=this.index;
                index=next;
            }else if(this.index<index){
                imga[this.index].style.left=-widths+"px";
                li[index].style.background="#3e3e3e";
                li[this.index].style.background="#B61B1F";
                //动画
                animate(imga[index],{left:widths});
                animate(imga[this.index],{left:0});
                next=this.index;
                index=next;
            }
        }
    }
    zj.onmouseover=function(){
    	clearInterval(t);
    	btn4.style.display="block";
    }
    zj.onmouseout=function(){
    	t=setInterval(move,2000);
    	btn4.style.display="none";
    }
    r.onclick=function(){
        if(flag){
            flag=false;
            move();
        }
    }
    l.onclick=function(){
        if(flag){
            flag=false;
            movel()
        }
    	
    }
    function movel(){
    	next--;
    	//判断边界
    	if(next<0){
    		next=imga.length-1;
    	}
    	//imga[next]就位
    	imga[next].style.left=-widths+"px";
    	//动画
    	animate(imga[index],{left:widths});
    	animate(imga[next],{left:0},function(){
            flag=true;
        });
    	li[index].style.background="#3e3e3e";
    	li[next].style.background="#B61B1F";
    	//更新index
    	index=next;
    }
})
$(function(){
	//6l
	var floor=$(".floor6")[0];
	var tab=$(".table",floor)[0];
	var lia=$("li",tab);
	var span=$("span",tab);
	var fs2=$(".fs5",floor);
	fs2[0].style.display="block";
	lia[0].id="lia";
	span[0].style.display="none";
	for(var i=0;i<lia.length;i++){
		lia[i].index=i;
		lia[i].onmouseover=function(){
			for(var j=0;j<lia.length;j++){
				fs2[j].style.display="none";
				lia[j].id="";
			}
			for(var q=0;q<lia.length-1;q++){
				span[q].style.display="block";
			}
			fs2[this.index].style.display="block";
			lia[this.index].id="lia";
			if(this.index!=lia.length){
				span[this.index].style.display="none";
			}
		}
	}
	//获取元素
	var zj=$(".box5",fs2[0])[0];
	var imga=$(".dd2",zj);
	var xyq=$(".xyq1",fs2[0])[0];
	var btn4=$(".btn6",fs2[0])[0];
	var li=$("div",xyq);
	var widths=parseInt(getStyle(imga[0],"width"));
	var l=$(".btn_l1",btn4)[0];
	var r=$(".btn_r1",btn4)[0];
	var index=0;
	var next=0;
    var flag=true;
	//初始化状态
	li[0].style.background="#B61B1F";
	for(var i=0;i<imga.length;i++){
		if(i==0){
			continue;
		}
		imga[i].style.left=widths+"px";
	}
	//自动轮播
    var t=setInterval(move,2000);	
    function move(){
	    //更新next
    	next++;
    	//判断边界
    	if(next==imga.length){
    		next=0;
    	}
    	//imga[next]就位
    	imga[next].style.left=widths+"px";
    	//动画
    	animate(imga[index],{left:-widths});
    	animate(imga[next],{left:0},function(){
            flag=true;
        });
    	li[index].style.background="#3e3e3e";
    	li[next].style.background="#B61B1F";
    	//更新index
    	index=next;
    }
    
    //选项卡
    for(var i=0;i<li.length;i++){
    	li[i].index=i;
    	li[i].onclick=function(){
            if(this.index==index){
                return;
            }
    		//就位
            if(this.index>index){
                imga[this.index].style.left=widths+"px";
                li[index].style.background="#3e3e3e";
                li[this.index].style.background="#B61B1F";
                //动画
                animate(imga[index],{left:-widths});
                animate(imga[this.index],{left:0});
                //更新
                next=this.index;
                index=next;
            }else if(this.index<index){
                imga[this.index].style.left=-widths+"px";
                li[index].style.background="#3e3e3e";
                li[this.index].style.background="#B61B1F";
                //动画
                animate(imga[index],{left:widths});
                animate(imga[this.index],{left:0});
                next=this.index;
                index=next;
            }
        }
    }
    zj.onmouseover=function(){
    	clearInterval(t);
    	btn4.style.display="block";
    }
    zj.onmouseout=function(){
    	t=setInterval(move,2000);
    	btn4.style.display="none";
    }
    r.onclick=function(){
        if(flag){
            flag=false;
            move();
        }
    }
    l.onclick=function(){
        if(flag){
            flag=false;
            movel()
        }
    	
    }
    function movel(){
    	next--;
    	//判断边界
    	if(next<0){
    		next=imga.length-1;
    	}
    	//imga[next]就位
    	imga[next].style.left=-widths+"px";
    	//动画
    	animate(imga[index],{left:widths});
    	animate(imga[next],{left:0},function(){
            flag=true;
        });
    	li[index].style.background="#3e3e3e";
    	li[next].style.background="#B61B1F";
    	//更新index
    	index=next;
    }
})
$(function(){
	//7l
	var floor=$(".floor6")[1];
	var tab=$(".table",floor)[0];
	var lia=$("li",tab);
	var span=$("span",tab);
	var fs2=$(".fs5",floor);
	fs2[0].style.display="block";
	lia[0].id="lia";
	span[0].style.display="none";
	for(var i=0;i<lia.length;i++){
		lia[i].index=i;
		lia[i].onmouseover=function(){
			for(var j=0;j<lia.length;j++){
				fs2[j].style.display="none";
				lia[j].id="";
			}
			for(var q=0;q<lia.length-1;q++){
				span[q].style.display="block";
			}
			fs2[this.index].style.display="block";
			lia[this.index].id="lia";
			if(this.index!=lia.length){
				span[this.index].style.display="none";
			}
		}
	}
	//获取元素
	var zj=$(".box5",fs2[0])[0];
	var imga=$(".dd2",zj);
	var xyq=$(".xyq1",fs2[0])[0];
	var btn4=$(".btn6",fs2[0])[0];
	var li=$("div",xyq);
	var widths=parseInt(getStyle(imga[0],"width"));
	var l=$(".btn_l1",btn4)[0];
	var r=$(".btn_r1",btn4)[0];
	var index=0;
	var next=0;
    var flag=true;
	//初始化状态
	li[0].style.background="#B61B1F";
	for(var i=0;i<imga.length;i++){
		if(i==0){
			continue;
		}
		imga[i].style.left=widths+"px";
	}
	//自动轮播
    var t=setInterval(move,2000);	
    function move(){
	    //更新next
    	next++;
    	//判断边界
    	if(next==imga.length){
    		next=0;
    	}
    	//imga[next]就位
    	imga[next].style.left=widths+"px";
    	//动画
    	animate(imga[index],{left:-widths});
    	animate(imga[next],{left:0},function(){
            flag=true;
        });
    	li[index].style.background="#3e3e3e";
    	li[next].style.background="#B61B1F";
    	//更新index
    	index=next;
    }
    
    //选项卡
    for(var i=0;i<li.length;i++){
    	li[i].index=i;
    	li[i].onclick=function(){
            if(this.index==index){
                return;
            }
    		//就位
            if(this.index>index){
                imga[this.index].style.left=widths+"px";
                li[index].style.background="#3e3e3e";
                li[this.index].style.background="#B61B1F";
                //动画
                animate(imga[index],{left:-widths});
                animate(imga[this.index],{left:0});
                //更新
                next=this.index;
                index=next;
            }else if(this.index<index){
                imga[this.index].style.left=-widths+"px";
                li[index].style.background="#3e3e3e";
                li[this.index].style.background="#B61B1F";
                //动画
                animate(imga[index],{left:widths});
                animate(imga[this.index],{left:0});
                next=this.index;
                index=next;
            }
        }
    }
    zj.onmouseover=function(){
    	clearInterval(t);
    	btn4.style.display="block";
    }
    zj.onmouseout=function(){
    	t=setInterval(move,2000);
    	btn4.style.display="none";
    }
    r.onclick=function(){
        if(flag){
            flag=false;
            move();
        }
    }
    l.onclick=function(){
        if(flag){
            flag=false;
            movel()
        }
    	
    }
    function movel(){
    	next--;
    	//判断边界
    	if(next<0){
    		next=imga.length-1;
    	}
    	//imga[next]就位
    	imga[next].style.left=-widths+"px";
    	//动画
    	animate(imga[index],{left:widths});
    	animate(imga[next],{left:0},function(){
            flag=true;
        });
    	li[index].style.background="#3e3e3e";
    	li[next].style.background="#B61B1F";
    	//更新index
    	index=next;
    }
})
$(function(){
	//8l
	var floor=$(".floor6")[2];
	var tab=$(".table",floor)[0];
	var lia=$("li",tab);
	var span=$("span",tab);
	var fs2=$(".fs5",floor);
	fs2[0].style.display="block";
	lia[0].id="lia";
	span[0].style.display="none";
	for(var i=0;i<lia.length;i++){
		lia[i].index=i;
		lia[i].onmouseover=function(){
			for(var j=0;j<lia.length;j++){
				fs2[j].style.display="none";
				lia[j].id="";
			}
			for(var q=0;q<lia.length-1;q++){
				span[q].style.display="block";
			}
			fs2[this.index].style.display="block";
			lia[this.index].id="lia";
			if(this.index!=lia.length){
				span[this.index].style.display="none";
			}
		}
	}
	//获取元素
	var zj=$(".box5",fs2[0])[0];
	var imga=$(".dd2",zj);
	var xyq=$(".xyq1",fs2[0])[0];
	var btn4=$(".btn6",fs2[0])[0];
	var li=$("div",xyq);
	var widths=parseInt(getStyle(imga[0],"width"));
	var l=$(".btn_l1",btn4)[0];
	var r=$(".btn_r1",btn4)[0];
	var index=0;
	var next=0;
    var flag=true;
	//初始化状态
	li[0].style.background="#B61B1F";
	for(var i=0;i<imga.length;i++){
		if(i==0){
			continue;
		}
		imga[i].style.left=widths+"px";
	}
	//自动轮播
    var t=setInterval(move,2000);	
    function move(){
	    //更新next
    	next++;
    	//判断边界
    	if(next==imga.length){
    		next=0;
    	}
    	//imga[next]就位
    	imga[next].style.left=widths+"px";
    	//动画
    	animate(imga[index],{left:-widths});
    	animate(imga[next],{left:0},function(){
            flag=true;
        });
    	li[index].style.background="#3e3e3e";
    	li[next].style.background="#B61B1F";
    	//更新index
    	index=next;
    }
    
    //选项卡
    for(var i=0;i<li.length;i++){
    	li[i].index=i;
    	li[i].onclick=function(){
            if(this.index==index){
                return;
            }
    		//就位
            if(this.index>index){
                imga[this.index].style.left=widths+"px";
                li[index].style.background="#3e3e3e";
                li[this.index].style.background="#B61B1F";
                //动画
                animate(imga[index],{left:-widths});
                animate(imga[this.index],{left:0});
                //更新
                next=this.index;
                index=next;
            }else if(this.index<index){
                imga[this.index].style.left=-widths+"px";
                li[index].style.background="#3e3e3e";
                li[this.index].style.background="#B61B1F";
                //动画
                animate(imga[index],{left:widths});
                animate(imga[this.index],{left:0});
                next=this.index;
                index=next;
            }
        }
    }
    zj.onmouseover=function(){
    	clearInterval(t);
    	btn4.style.display="block";
    }
    zj.onmouseout=function(){
    	t=setInterval(move,2000);
    	btn4.style.display="none";
    }
    r.onclick=function(){
        if(flag){
            flag=false;
            move();
        }
    }
    l.onclick=function(){
        if(flag){
            flag=false;
            movel()
        }
    	
    }
    function movel(){
    	next--;
    	//判断边界
    	if(next<0){
    		next=imga.length-1;
    	}
    	//imga[next]就位
    	imga[next].style.left=-widths+"px";
    	//动画
    	animate(imga[index],{left:widths});
    	animate(imga[next],{left:0},function(){
            flag=true;
        });
    	li[index].style.background="#3e3e3e";
    	li[next].style.background="#B61B1F";
    	//更新index
    	index=next;
    }
})
$(function(){
	//9l
	var floor=$(".floor6")[3];
	var tab=$(".table",floor)[0];
	var lia=$("li",tab);
	var span=$("span",tab);
	var fs2=$(".fs5",floor);
	fs2[0].style.display="block";
	lia[0].id="lia";
	span[0].style.display="none";
	for(var i=0;i<lia.length;i++){
		lia[i].index=i;
		lia[i].onmouseover=function(){
			for(var j=0;j<lia.length;j++){
				fs2[j].style.display="none";
				lia[j].id="";
			}
			for(var q=0;q<lia.length-1;q++){
				span[q].style.display="block";
			}
			fs2[this.index].style.display="block";
			lia[this.index].id="lia";
			if(this.index!=lia.length){
				span[this.index].style.display="none";
			}
		}
	}
	//获取元素
	var zj=$(".box5",fs2[0])[0];
	var imga=$(".dd2",zj);
	var xyq=$(".xyq1",fs2[0])[0];
	var btn4=$(".btn6",fs2[0])[0];
	var li=$("div",xyq);
	var widths=parseInt(getStyle(imga[0],"width"));
	var l=$(".btn_l1",btn4)[0];
	var r=$(".btn_r1",btn4)[0];
	var index=0;
	var next=0;
    var flag=true;
	//初始化状态
	li[0].style.background="#B61B1F";
	for(var i=0;i<imga.length;i++){
		if(i==0){
			continue;
		}
		imga[i].style.left=widths+"px";
	}
	//自动轮播
    var t=setInterval(move,2000);	
    function move(){
	    //更新next
    	next++;
    	//判断边界
    	if(next==imga.length){
    		next=0;
    	}
    	//imga[next]就位
    	imga[next].style.left=widths+"px";
    	//动画
    	animate(imga[index],{left:-widths});
    	animate(imga[next],{left:0},function(){
            flag=true;
        });
    	li[index].style.background="#3e3e3e";
    	li[next].style.background="#B61B1F";
    	//更新index
    	index=next;
    }
    
    //选项卡
    for(var i=0;i<li.length;i++){
    	li[i].index=i;
    	li[i].onclick=function(){
            if(this.index==index){
                return;
            }
    		//就位
            if(this.index>index){
                imga[this.index].style.left=widths+"px";
                li[index].style.background="#3e3e3e";
                li[this.index].style.background="#B61B1F";
                //动画
                animate(imga[index],{left:-widths});
                animate(imga[this.index],{left:0});
                //更新
                next=this.index;
                index=next;
            }else if(this.index<index){
                imga[this.index].style.left=-widths+"px";
                li[index].style.background="#3e3e3e";
                li[this.index].style.background="#B61B1F";
                //动画
                animate(imga[index],{left:widths});
                animate(imga[this.index],{left:0});
                next=this.index;
                index=next;
            }
        }
    }
    zj.onmouseover=function(){
    	clearInterval(t);
    	btn4.style.display="block";
    }
    zj.onmouseout=function(){
    	t=setInterval(move,2000);
    	btn4.style.display="none";
    }
    r.onclick=function(){
        if(flag){
            flag=false;
            move();
        }
    }
    l.onclick=function(){
        if(flag){
            flag=false;
            movel()
        }
    	
    }
    function movel(){
    	next--;
    	//判断边界
    	if(next<0){
    		next=imga.length-1;
    	}
    	//imga[next]就位
    	imga[next].style.left=-widths+"px";
    	//动画
    	animate(imga[index],{left:widths});
    	animate(imga[next],{left:0},function(){
            flag=true;
        });
    	li[index].style.background="#3e3e3e";
    	li[next].style.background="#B61B1F";
    	//更新index
    	index=next;
    }
})
$(function(){
	//10l
	var floor=$(".floor10")[0];
	var tab=$(".table",floor)[0];
	var lia=$("li",tab);
	var span=$("span",tab);
	var fs2=$(".fs5",floor);
	fs2[0].style.display="block";
	lia[0].id="lia";
	span[0].style.display="none";
	for(var i=0;i<lia.length;i++){
		lia[i].index=i;
		lia[i].onmouseover=function(){
			for(var j=0;j<lia.length;j++){
				fs2[j].style.display="none";
				lia[j].id="";
			}
			for(var q=0;q<lia.length-1;q++){
				span[q].style.display="block";
			}
			fs2[this.index].style.display="block";
			lia[this.index].id="lia";
			if(this.index!=lia.length){
				span[this.index].style.display="none";
			}
		}
	}
	//获取元素
	var zj=$(".box5",fs2[0])[0];
	var imga=$(".dd2",zj);
	var xyq=$(".xyq1",fs2[0])[0];
	var btn4=$(".btn6",fs2[0])[0];
	var li=$("div",xyq);
	var widths=parseInt(getStyle(imga[0],"width"));
	var l=$(".btn_l1",btn4)[0];
	var r=$(".btn_r1",btn4)[0];
	var index=0;
	var next=0;
    var flag=true;
	//初始化状态
	li[0].style.background="#B61B1F";
	for(var i=0;i<imga.length;i++){
		if(i==0){
			continue;
		}
		imga[i].style.left=widths+"px";
	}
	//自动轮播
    var t=setInterval(move,2000);	
    function move(){
	    //更新next
    	next++;
    	//判断边界
    	if(next==imga.length){
    		next=0;
    	}
    	//imga[next]就位
    	imga[next].style.left=widths+"px";
    	//动画
    	animate(imga[index],{left:-widths});
    	animate(imga[next],{left:0},function(){
            flag=true;
        });
    	li[index].style.background="#3e3e3e";
    	li[next].style.background="#B61B1F";
    	//更新index
    	index=next;
    }
    
    //选项卡
    for(var i=0;i<li.length;i++){
    	li[i].index=i;
    	li[i].onclick=function(){
            if(this.index==index){
                return;
            }
    		//就位
            if(this.index>index){
                imga[this.index].style.left=widths+"px";
                li[index].style.background="#3e3e3e";
                li[this.index].style.background="#B61B1F";
                //动画
                animate(imga[index],{left:-widths});
                animate(imga[this.index],{left:0});
                //更新
                next=this.index;
                index=next;
            }else if(this.index<index){
                imga[this.index].style.left=-widths+"px";
                li[index].style.background="#3e3e3e";
                li[this.index].style.background="#B61B1F";
                //动画
                animate(imga[index],{left:widths});
                animate(imga[this.index],{left:0});
                next=this.index;
                index=next;
            }
        }
    }
    zj.onmouseover=function(){
    	clearInterval(t);
    	btn4.style.display="block";
    }
    zj.onmouseout=function(){
    	t=setInterval(move,2000);
    	btn4.style.display="none";
    }
    r.onclick=function(){
        if(flag){
            flag=false;
            move();
        }
    }
    l.onclick=function(){
        if(flag){
            flag=false;
            movel()
        }
    	
    }
    function movel(){
    	next--;
    	//判断边界
    	if(next<0){
    		next=imga.length-1;
    	}
    	//imga[next]就位
    	imga[next].style.left=-widths+"px";
    	//动画
    	animate(imga[index],{left:widths});
    	animate(imga[next],{left:0},function(){
            flag=true;
        });
    	li[index].style.background="#3e3e3e";
    	li[next].style.background="#B61B1F";
    	//更新index
    	index=next;
    }
})
$(function(){
	//天天低价
	var zzz2=$(".zzz2")[0]
	var t=setInterval(move,2000);
	function move(){
		var  top=zzz2.offsetTop;
		if(top>=0){
			zzz2.style.top=-720+"px";
			top=-720;
		}
		top+=120;
		animate(zzz2,{top:top})
	}
	var tit1=$(".tit1")[0];
	var imga=$("img",tit1);
	for(var i=0;i<imga.length;i++){
		imga[i].index=i;
		imga[i].onmouseover=function(){
			imga[this.index].style.marginLeft=-10+"px";
			// animate(imga[this.index],{marginLeft:-10})
		}
		imga[i].onmouseout=function(){
			imga[this.index].style.marginLeft=0+"px";
			// animate(imga[this.index],{marginLeft:0})
		}
	}
})
$(function(){
	//11l
	var floor=$(".floor3")[3];
	var tab=$(".table",floor)[0];
	var lia=$("li",tab);
	var span=$("span",tab);
	var fs2=$(".fs2",floor);
	fs2[0].style.display="block";
	lia[0].id="lia";
	span[0].style.display="none";
	for(var i=0;i<lia.length;i++){
		lia[i].index=i;
		lia[i].onmouseover=function(){
			for(var j=0;j<lia.length;j++){
				fs2[j].style.display="none";
				lia[j].id="";
			}
			for(var q=0;q<lia.length-1;q++){
				span[q].style.display="block";
			}
			fs2[this.index].style.display="block";
			lia[this.index].id="lia";
			if(this.index!=lia.length){
				span[this.index].style.display="none";
			}
		}
	}
	//获取元素
	var zj=$(".zj",fs2[0])[0];
	var box=$(".box",fs2[0])[0];
	var imga=$("a",box);
	var xyq=$(".xyq",fs2[0])[0];
	var btn4=$(".btn4",fs2[0])[0];
	var li=$("div",xyq);
	var widths=parseInt(getStyle(imga[0],"width"));
	var l=$(".btn_l1",btn4)[0];
	var r=$(".btn_r1",btn4)[0];
	var index=0;
	var next=0;
    var flag=true;
	//初始化状态
	li[0].style.background="#B61B1F";
	for(var i=0;i<imga.length;i++){
		if(i==0){
			continue;
		}
		imga[i].style.left=widths+"px";
	}
	//自动轮播
    var t=setInterval(move,2000);	
    function move(){
	    //更新next
    	next++;
    	//判断边界
    	if(next==imga.length){
    		next=0;
    	}
    	//imga[next]就位
    	imga[next].style.left=widths+"px";
    	//动画
    	animate(imga[index],{left:-widths});
    	animate(imga[next],{left:0},function(){
            flag=true;
        });
    	li[index].style.background="#3e3e3e";
    	li[next].style.background="#B61B1F";
    	//更新index
    	index=next;
    }
    
    //选项卡
    for(var i=0;i<li.length;i++){
    	li[i].index=i;
    	li[i].onclick=function(){
            if(this.index==index){
                return;
            }
    		//就位
            if(this.index>index){
                imga[this.index].style.left=widths+"px";
                li[index].style.background="#3e3e3e";
                li[this.index].style.background="#B61B1F";
                //动画
                animate(imga[index],{left:-widths});
                animate(imga[this.index],{left:0});
                //更新
                next=this.index;
                index=next;
            }else if(this.index<index){
                imga[this.index].style.left=-widths+"px";
                li[index].style.background="#3e3e3e";
                li[this.index].style.background="#B61B1F";
                //动画
                animate(imga[index],{left:widths});
                animate(imga[this.index],{left:0});
                next=this.index;
                index=next;
            }
        }
    }
    zj.onmouseover=function(){
    	clearInterval(t);
    	btn4.style.display="block";
    }
    zj.onmouseout=function(){
    	t=setInterval(move,2000);
    	btn4.style.display="none";
    }
    r.onclick=function(){
        if(flag){
            flag=false;
            move();
        }
    }
    l.onclick=function(){
        if(flag){
            flag=false;
            movel()
        }
    	
    }
    function movel(){
    	next--;
    	//判断边界
    	if(next<0){
    		next=imga.length-1;
    	}
    	//imga[next]就位
    	imga[next].style.left=-widths+"px";
    	//动画
    	animate(imga[index],{left:widths});
    	animate(imga[next],{left:0},function(){
            flag=true;
        });
    	li[index].style.background="#3e3e3e";
    	li[next].style.background="#B61B1F";
    	//更新index
    	index=next;
    }
})
$(function(){
	//楼层跳转
	var cw=document.documentElement.clientWidth;
	var ch=document.documentElement.clientHeight;
	var floor=$(".floor");
    var f1=$(".f1");
	var nav=$(".nav_l")[0];
	nav.style.display="none"
	var floorArr=[];
	for(var i=0;i<floor.length;i++){
		floorArr.push(floor[i].offsetTop);
	}
	//楼层跳转
	var flag=true;
	var sflag=true;
	var lis=$("li",nav);
	var nav_fs=$(".nav_fs");
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			flag=false;
			for(var j=0;j<lis.length;j++){
				nav_fs[j].style.display="none";
			}
			nav_fs[this.index].style.display="block";
			animate(document.body,{scrollTop:floorArr[this.index]},function(){
				flag=true;
			});
			animate(document.documentElement,{scrollTop:floorArr[this.index]},function(){
				flag=true;
			});
		}
		lis[i].onmouseover=function(){
			nav_fs[this.index].style.display="block";
		}
		lis[i].onmouseout=function(){
			nav_fs[this.index].style.display="none";
		}
	}
	//窗口滚动
	window.onscroll=function(){
		var obj=document.body.scrollTop?document.body:document.documentElement;
		var floors=obj.scrollTop;
		for(var i=0;i<floor.length;i++){
            if(ch+floors>=floorArr[i]+200){
                f1[i].style.backgroundPosition="0 0";
                var imgs=$("img",floor[i]);
                for(var j=0;j<imgs.length;j++){
                	// imgs[j].src=imgs[j].getAttribute("imgpath");
                }
            }
		}
		if(!flag) return;
		for(var i=0;i<floor.length;i++){
			if(ch+floors>=floorArr[i]+100){
				for(var j=0;j<lis.length;j++){
					nav_fs[j].style.display="none";
				}
				nav_fs[i].style.display="block";
			}
		}
		// 搜索框显现
        var llllb=$(".llllb")[0];
		if(ch+floors>=floorArr[0]){
			if(sflag){
				sflag=false;
			    nav.style.display="block";
                llllb.style.display="block";
		    }
		}else{
			if(!sflag){
				sflag=true;
			    nav.style.display="none";
                llllb.style.display="none";
		    }
		}
	}
    var back=$(".back")[0];
    back.onclick=function(){
        var obj=document.body.scrollTop?document.body:document.documentElement;
        animate(obj,{scrollTop:0});
    }
})
$(function(){
	var right=$(".right_n_c")[0];
	var divs=$(".right_1",right);
	var diva=$(".right_a1",right);
	for(var i=0;i<divs.length;i++){
		divs[i].index=i;
		divs[i].onmouseover=function(){
			for(var j=0;j<divs.length;j++){
				divs[j].style.background="#7a6e6e";
			}
			divs[this.index].style.background="#C81623";
			diva[this.index].style.background="#c81623";
            animate(diva[this.index],{left:-58})
        }
        divs[i].onmouseout=function(){
            divs[this.index].style.background="#7a6e6e";
            diva[this.index].style.background="#7a6e6e";
			animate(diva[this.index],{left:35})
		}
	}
})
$(function(){
	var right=$(".right_n_b")[0];
	var divs=$(".right_2",right);
	var diva=$(".right_a2",right);
	for(var i=0;i<divs.length;i++){
		divs[i].index=i;
		divs[i].onmouseover=function(){
			for(var j=0;j<divs.length;j++){
				divs[j].style.background="#7a6e6e";
			}
			divs[this.index].style.background="#C81623";
			diva[this.index].style.background="#c81623";
			animate(diva[this.index],{left:-58})
		}
		divs[i].onmouseout=function(){
			divs[this.index].style.background="#7a6e6e";
			diva[this.index].style.background="#7a6e6e";
			animate(diva[this.index],{left:35})
		}
	}
})
$(function(){
	var zj=$(".box5",$(".floor12")[0])[0];
	var imga=$(".dd2",zj);
	var xyq=$(".xyq1",zj)[0];
	var btn4=$(".btn6",zj)[0];
	var li=$("div",xyq);
	var widths=parseInt(getStyle(imga[0],"width"));
	var l=$(".btn_l1",btn4)[0];
	var r=$(".btn_r1",btn4)[0];
	var index=0;
	var next=0;
    var flag=true;
	//初始化状态
	li[0].style.background="#B61B1F";
	for(var i=0;i<imga.length;i++){
		if(i==0){
			continue;
		}
		imga[i].style.left=widths+"px";
	}
	//自动轮播
    var t=setInterval(move,2000);	
    function move(){
	    //更新next
    	next++;
    	//判断边界
    	if(next==imga.length){
    		next=0;
    	}
    	//imga[next]就位
    	imga[next].style.left=widths+"px";
    	//动画
    	animate(imga[index],{left:-widths});
    	animate(imga[next],{left:0},function(){
            flag=true;
        });
    	li[index].style.background="#3e3e3e";
    	li[next].style.background="#B61B1F";
    	//更新index
    	index=next;
    }
    
    //选项卡
    for(var i=0;i<li.length;i++){
    	li[i].index=i;
    	li[i].onclick=function(){
            if(this.index==index){
                return;
            }
    		//就位
            if(this.index>index){
                imga[this.index].style.left=widths+"px";
                li[index].style.background="#3e3e3e";
                li[this.index].style.background="#B61B1F";
                //动画
                animate(imga[index],{left:-widths});
                animate(imga[this.index],{left:0});
                //更新
                next=this.index;
                index=next;
            }else if(this.index<index){
                imga[this.index].style.left=-widths+"px";
                li[index].style.background="#3e3e3e";
                li[this.index].style.background="#B61B1F";
                //动画
                animate(imga[index],{left:widths});
                animate(imga[this.index],{left:0});
                next=this.index;
                index=next;
            }
        }
    }
    zj.onmouseover=function(){
    	clearInterval(t);
    	btn4.style.display="block";
    }
    zj.onmouseout=function(){
    	t=setInterval(move,2000);
    	btn4.style.display="none";
    }
    r.onclick=function(){
        if(flag){
            flag=false;
            move();
        }
    }
    l.onclick=function(){
        if(flag){
            flag=false;
            movel()
        }
    	
    }
    function movel(){
    	next--;
    	//判断边界
    	if(next<0){
    		next=imga.length-1;
    	}
    	//imga[next]就位
    	imga[next].style.left=-widths+"px";
    	//动画
    	animate(imga[index],{left:widths});
    	animate(imga[next],{left:0},function(){
            flag=true;
        });
    	li[index].style.background="#3e3e3e";
    	li[next].style.background="#B61B1F";
    	//更新index
    	index=next;
    }
})
$(function(){
	var zj=$(".box5",$(".floor12")[0])[1];
	var imga=$(".dd2",zj);
	var xyq=$(".xyq1",zj)[0];
	var btn4=$(".btn6",zj)[0];
	var li=$("div",xyq);
	var widths=parseInt(getStyle(imga[0],"width"));
	var l=$(".btn_l1",btn4)[0];
	var r=$(".btn_r1",btn4)[0];
	var index=0;
	var next=0;
    var flag=true;
	//初始化状态
	li[0].style.background="#B61B1F";
	for(var i=0;i<imga.length;i++){
		if(i==0){
			continue;
		}
		imga[i].style.left=widths+"px";
	}
	//自动轮播
    var t=setInterval(move,3000);	
    function move(){
	    //更新next
    	next++;
    	//判断边界
    	if(next==imga.length){
    		next=0;
    	}
    	//imga[next]就位
    	imga[next].style.left=widths+"px";
    	//动画
    	animate(imga[index],{left:-widths});
    	animate(imga[next],{left:0},function(){
            flag=true;
        });
    	li[index].style.background="#3e3e3e";
    	li[next].style.background="#B61B1F";
    	//更新index
    	index=next;
    }
    
    //选项卡
    for(var i=0;i<li.length;i++){
    	li[i].index=i;
    	li[i].onclick=function(){
            if(this.index==index){
                return;
            }
    		//就位
            if(this.index>index){
                imga[this.index].style.left=widths+"px";
                li[index].style.background="#3e3e3e";
                li[this.index].style.background="#B61B1F";
                //动画
                animate(imga[index],{left:-widths});
                animate(imga[this.index],{left:0});
                //更新
                next=this.index;
                index=next;
            }else if(this.index<index){
                imga[this.index].style.left=-widths+"px";
                li[index].style.background="#3e3e3e";
                li[this.index].style.background="#B61B1F";
                //动画
                animate(imga[index],{left:widths});
                animate(imga[this.index],{left:0});
                next=this.index;
                index=next;
            }
        }
    }
    zj.onmouseover=function(){
    	clearInterval(t);
    	btn4.style.display="block";
    }
    zj.onmouseout=function(){
    	t=setInterval(move,3000);
    	btn4.style.display="none";
    }
    r.onclick=function(){
        if(flag){
            flag=false;
            move();
        }
    }
    l.onclick=function(){
        if(flag){
            flag=false;
            movel()
        }
    	
    }
    function movel(){
    	next--;
    	//判断边界
    	if(next<0){
    		next=imga.length-1;
    	}
    	//imga[next]就位
    	imga[next].style.left=-widths+"px";
    	//动画
    	animate(imga[index],{left:widths});
    	animate(imga[next],{left:0},function(){
            flag=true;
        });
    	li[index].style.background="#3e3e3e";
    	li[next].style.background="#B61B1F";
    	//更新index
    	index=next;
    }
})