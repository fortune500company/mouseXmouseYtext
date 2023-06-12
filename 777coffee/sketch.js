
function setup() {
	createCanvas(windowWidth, windowHeight)
	background(0,255,0,60)
	
}

function draw() {
	if(mouseIsPressed){
		clear()
      	createCanvas(windowWidth, windowHeight)
	background(0,255,0,60)
	}
	noCursor()
  
    push();
	fill(237, 22, 229,20)
	textSize(80)
	textAlign(CENTER, CENTER)
	rotate(radians(10))
	text("☕7777777", mouseX, mouseY)
  pop();
	 
  push();
	translate(mouseX, height - mouseY)
	rotate(radians(180))
	text("☕🍬🍬🍬7777777", 0, 0)
    pop();
}