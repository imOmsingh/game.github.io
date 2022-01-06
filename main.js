var text="THIS IS THE ULTIMATE CHAMPIONSHIP."
var text_box=document.getElementById("main-text");
var cursor_color=document.getElementById("cursor-color");
var len=text.length;
var i=0;
function move(){
	text_box.innerHTML+=text[i];
	i=i+1;
	if(i<len){
		setTimeout(move,100);
	}
}
setTimeout(move,100);
var card_cont=document.getElementsByClassName("card-cont");
var scrwidth=window.innerHeight;


function run(){
	var card_top=card_cont[0].getBoundingClientRect().top;
	if (card_top<(scrwidth-50)){
		card_cont[0].style.transition="2s";
		card_cont[0].style.transform="translateX("+0+"px)";
	}
	else {
		card_cont[0].style.transition="0.1s";	
		card_cont[0].style.transform="translateX("+-500+"px)";	
	}
}

window.addEventListener('scroll', () => {
  run();
 })

var effect_1=document.getElementById("effect-1");
var effect_2=document.getElementById("effect-2");
var card_effect=document.getElementById("card-effect");
function rotate(){
	effect_1.style.transform="rotate("+-10+("deg)");
	effect_2.style.transform="rotate("+-20+("deg)");
	card_effect.style.transform="rotate("+15+("deg)");
}
function rotateback(){
	effect_1.style.transform="rotate("+0+("deg)");
	effect_2.style.transform="rotate("+0+("deg)");
	card_effect.style.transform="rotate("+0+("deg)");
}
window.addEventListener('scroll', () => {
  rundiv();
 })

var dev_cont=document.getElementById("dev_cont");

var scrw=window.innerWidth;
var nscrw=scrw/2;
var mover;
mover=nscrw-350;
function rundiv(){
	var dev_top=dev_cont.getBoundingClientRect().top;
	if (dev_top<scrwidth-250){
		dev_cont.style.transform="translateX("+(mover)+"px) skewX("+0+"deg)";
	}
}









