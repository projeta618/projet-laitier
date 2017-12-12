function customZoom(zoom_level,ratio){
	document.body.firstElementChild.style.mstransformOrigin = '0 0';
	document.body.firstElementChild.style.transformOrigin = '0 0';
	if(zoom_level==1)
	{
		document.body.firstElementChild.style.msTransform = 'scale('+(zoom_level)+')';
		document.body.firstElementChild.style.transform = 'scale('+(zoom_level)+')';
		document.body.firstElementChild.style.marginTop = '0px';
		document.body.firstElementChild.style.marginLeft= '0px';
	}
	else
	{
		document.body.firstElementChild.style.msTransform = 'scale('+(zoom_level)+')';
		document.body.firstElementChild.style.transform = 'scale('+(zoom_level)+')';
		if(navigator.appVersion.indexOf("MSIE 9")>0)
		{
			marginTop = Math.floor(0.5 * (window.innerHeight - document.body.firstElementChild.style.height.replace('px','')));
			marginLeft= Math.floor(0.5 * (window.innerWidth - document.body.firstElementChild.style.width.replace('px','')));
			document.body.firstElementChild.style.marginTop = marginTop + 'px';
			document.body.firstElementChild.style.marginLeft= marginLeft + 'px';
		}
		else
		{
			marginTop = Math.floor(0.5 * (window.innerHeight - zoom_level * document.body.firstElementChild.style.height.replace('px','')));
			marginLeft= Math.floor(0.5 * (window.innerWidth - zoom_level * document.body.firstElementChild.style.width.replace('px','')));
			document.body.firstElementChild.style.marginTop = Math.max(0,marginTop) + 'px';
			document.body.firstElementChild.style.marginLeft= Math.max(0,marginLeft) + 'px';
		}

		document.body.style.width = '100%';
		document.body.style.height = '0';
		document.body.style.overflow = 'hidden';
	}
}
function customScaleThisScreen(){
customZoom(1);
var widthRatio = window.innerWidth / document.body.scrollWidth;
var heightRatio = window.innerHeight / document.body.scrollHeight;
customZoom(Math.min(widthRatio, heightRatio));
}
window.onresize = customScaleThisScreen;
window.onload = customScaleThisScreen;