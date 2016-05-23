window.onload=function(){
	console.log('clientWidth: ' + document.body.clientWidth);
	console.log('clientHeight: ' + document.body.clientHeight);
	console.log('offsetWidth: ' + document.body.offsetWidth);
	console.log('offsetHeight: ' + document.body.offsetHeight);
	console.log('scrollWidth: ' + document.body.scrollWidth);
	console.log('scrollHeight: ' + document.body.scrollHeight);
	console.log('scrollTop: ' + window.scrollTop);
	console.log('scrollLeft: ' + window.scrollLeft);
	console.log('screenTop: ' + window.screenTop);
	console.log('screenLeft: ' + window.screenLeft);
	console.log('screen height: ' + window.screen.height);
	console.log('screen width: ' + window.screen.width);
	console.log('screen availHeight: ' + window.screen.availHeight);
	console.log('screen availWidth: ' + window.screen.availWidth);




	var music = $('#music');
	var audio = $('#audio');
	var page1 = $('#page1');
	var page2 = $('#page2');
	var page3 = $('#page3');

	audio.addEventListener('ended',function(){
		music.setAttribute('class','');
		//this.style.animationPlayState = 'paused';
		//this.style.webkitAnimationPlayState = 'paused';
	});
	// click music
	music.addEventListener('touchstart',function(event){
			if(audio.paused){
				audio.play();
				this.setAttribute('class','play');
			}else{
				audio.pause();
				this.setAttribute('class','');
			}
	},false);
	//click page1
	page1.addEventListener('touchstart',function(){
		page1.style.display = 'none';
		page2.style.display = 'block';
		page3.style.display = 'block';
		page3.style.top = '100%';
		setTimeout(function(){
			page2.setAttribute('class','page fadeOut');
			page3.setAttribute('class','page fadeIn');
		},5500);
	},false);
};

function $(select){
	return document.querySelector(select);
}