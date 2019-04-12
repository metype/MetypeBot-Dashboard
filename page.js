let logo;

function setup() {
createCanvas(windowWidth,windowHeight);
logo=loadImage("MetypeBot-Logo.png");
}

function draw() {
image(logo,width/2,logo.height);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }