$(function(){
	var oImages=$(".main_img img");
	var number=oImages.length;
	var index=0;
	for (var i=0;i<number;i++) {
		$(".main_1 .circle").append("<span></span>");
	}
	$(".main_1 .circle span").click(function(){
		clearInterval(time);
		index=$(this).index();
		slider(index);
	});
	$(".main_1 .circle span").mouseleave(function(){
		clearInterval(time);
		timer();
	});
	function slider(index){
		oImages.eq(index).fadeIn().parent().siblings().children('img').fadeOut();
		$(".main_1 .circle span").eq(index).css('backgroundColor','#424242').siblings().css({'backgroundColor': '#aaf'});
	}
	$(".arrow .slider-images-left").click(function(){
		clearInterval(time);
		index--;
		legalIndex();
		slider(index);
	});
	$(".arrow .slider-images-right").click(function(){
		clearInterval(time);
		index++;
		legalIndex();
		slider(index);
	});
	function legalIndex(){
		if(index>number-1)
			index=0;
		if(index<0)
			index=number-1;
	}
	var time=setInterval(function(){
		legalIndex();
		slider(index);
		index++;
	},2000);
	function timer(){
		time=setInterval(function(){
			legalIndex();
			slider(index);
			index++;
		},2000);
	}
	
})
