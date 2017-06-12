
function scrollAnimate(el,to,duration){
	var time = 1000/60;
	var fro = el.scrollTop;
	var offset = to - fro;
	var frameCount = duration/time;//
	var offPerFrame = offset/frameCount;
	var currentFrame = 0;//
	var timer;
	function next(){
		fro+=offPerFrame;
		el.scrollTop = fro;
		currentFrame++;
		if(currentFrame<frameCount){
			timer = requestAnimationFrame(next);
		}else{
			el.scrollTop = to;
		}
	}
	next();
}


export default scrollAnimate;
