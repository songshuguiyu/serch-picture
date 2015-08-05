// JavaScript Document
var area = document.getElementById("img-div");
area.innerHTML = area.innerHTML;
var imgWidth = 200;
area.scrollLeft = 0;
var time;
function startMove(){
	area.scrollLeft++;
	time = setInterval("scrollLeft()", 50);
	}
function scrollLeft(){
	
	if (area.scrollLeft % imgWidth == 0){
		clearInterval(time);
		setTimeout("startMove()", 2000);
		}
	else{
		  area.scrollLeft++;
		  if (area.scrollLeft >= area.scrollWidth/2){
			  area.scrollLeft = 0;
			  }
		}
	}