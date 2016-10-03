// scrollreveal
window.sr = ScrollReveal({
	duration:2000,
	reset:true
});

sr.reveal('#scene-0',{
	viewFactor:0.5
});

sr.reveal('#scene-1',{
	viewFactor:0.5,
	afterReveal:function(){
		var bgWidth = $('#background-1').width()

		$("#oreo-1")
			.animate({
				top:"150px",
				left: "+=" + (bgWidth*0.5),
				width:"300px",
				height:"300px"

			},2500,function(){
				console.log('oreo has falled!')
			})
	},
	beforeReset:function(){
		$('#oreo-1')
			.css({
				top:"-100px",
				left: "100px",
				width: "450px",
				height: "450px",
			})
	}
});

sr.reveal('#scene-2',{
	viewFactor:0.5
});

sr.reveal('#scene-5',{
	viewFactor:0.5
});

