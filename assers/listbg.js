function getElementsByClassName(className,tagName){
	var ele=[],all=document.getElementsByTagName(tagName||"*");
	for(var i=0;i<all.length;i++){
		if(all[i].className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'))){
		ele[ele.length]=all[i];
	}
}
	return ele;
}
window.onload=function(){
	var oLi = getElementsByClassName("hover","li");
	for(var i=0;i<oLi.length;i++)
	{
		oLi[i].onmouseover=function(){
			this.style.background="#E6F8F9"
		};
		oLi[i].onmouseout=function(){
			this.style.background=""
		}
	}
	
	
}