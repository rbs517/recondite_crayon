var x;
var y;
var f= 2;
var t;
   
function setup() { 
  createCanvas(400, 400);
  frameRate(f); 
  x= random (0, width);
  y= random (0, height);
  t= 8;
} 

function draw() { 
  background(255);
  var colors = [ "white", "blue", "red", "orange", "yellow", "green", "blue", "purple", "brown", "black", "grey"];
   		for (i=0; i<colors.length; i++){
        fill(random(255), random(255), random(255));
     		text(colors[i],random (x),random(y));
        //textSize(random(5, 5));
        textSize(t++);
   			}
} 

function mousePressed() {
	f = f + 1;
  frameRate(f);
}