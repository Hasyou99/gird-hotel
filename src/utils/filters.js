function isf(imghash){
	if(!imghash){
		return "";
	}
	var s1 = imghash.slice(0,1);
	var s2 = imghash.slice(1,3);
	var s3 = imghash.slice(3);
	var s4 = imghash.slice(32);
	return "http://fuss10.elemecdn.com/"+s1+"/"+s2+"/"+s3+"."+s4;
}

function addPrefix(part){
	if(!part){
		return "";
	}
	return "//fuss10.elemecdn.com"+part;
}

function distanceFilter(dis){
	return (dis/1000).toFixed(2);
}

function blured(u){
	return u+"?imageMogr/thumbnail/!40p/blur/50x40/";
}


export {isf,addPrefix,distanceFilter,blured}


