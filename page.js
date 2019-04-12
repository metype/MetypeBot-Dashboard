function setup() {
createCanvas(windowWidth,windowHeight);
}

function draw() {
ellipse(10,10,mouseX,mouseY);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }