var numSquares = 6;

var color = ArrRandomColor(numSquares);

var squares= document.querySelectorAll(".square");

var pickedColor = randomColor();

var colorDisplay= document.getElementById("colorDisplay");

var messageDisplay=document.getElementById("messageDisplay");

var resetButton = document.getElementById("reset");

var h1 = document.querySelector("h1");

var easyButton = document.querySelector("#easyButton");

var hardButton = document.querySelector("#hardButton");

colorDisplay.textContent=pickedColor;

easyButton.addEventListener("click",function(){
   easyButton.classList.add("selected");
   hardButton.classList.remove("selected");
   numSquares=3
   color = ArrRandomColor(numSquares);
   pickedColor = randomColor();
   colorDisplay.textContent=pickedColor;
   for (var i = 0; i < squares.length; i++) {
   	if(color[i]){
   	squares[i].style.backgroundColor=color[i];
   }else{
   	squares[i].style.display="none";
   }
}
})

hardButton.addEventListener("click",function(){
   hardButton.classList.add("selected");
   easyButton.classList.remove("selected");
   numSquares =6;
    color = ArrRandomColor(numSquares);
   pickedColor = randomColor();
   colorDisplay.textContent=pickedColor;

   for (var i = 0; i < squares.length; i++) {
   	squares[i].style.backgroundColor=color[i];
   
   	squares[i].style.display="block";
   
}})

resetButton.addEventListener("click",function(){
	color = ArrRandomColor(numSquares);
	this.textContent = "New colors!!";
    messageDisplay.textContent="";

	pickedColor = randomColor();
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor=color[i];
	}
	colorDisplay.textContent=pickedColor;
	h1.style.backgroundColor="steelblue";
})

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor=color[i];
	squares[i].addEventListener("click",function(){
		var colorClicked=this.style.backgroundColor;
		 
		 if (pickedColor===colorClicked)
		 {
		
			messageDisplay.textContent="correct!";
	      resetButton.textContent="Play Again?";

	      changeColor(colorClicked);
	      h1.style.backgroundColor=colorClicked;
		   
		}
		 else
		  {
			messageDisplay.textContent="Try Again!!!!";
			this.style.backgroundColor="black";
		}
	})
}
function changeColor(color){
	for (var i = 0; i < squares.length; i++) {
   		 squares[i].style.backgroundColor=color;
     }
}
function randomColor(){
	var random= Math.floor(Math.random()*color.length);
	return color[random];
}
function ArrRandomColor(num){
	var arr=[];
	for (var i = 0; i < num; i++) {
		
        arr[i] = randomColorGenerator();
	}
	return arr;
}
function randomColorGenerator(){
	var r = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		return "rgb(" + r + ", " + g + ", " + b + ")";
}