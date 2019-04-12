let logo,bg;

function setup() {
createCanvas(windowWidth,windowHeight);
logo=loadImage("https://raw.githubusercontent.com/metype/MetypeBot-Dashboard/master/MetypeBot-Logo.png");
bg = loadImage();
}

function draw() {
    imageMode(CENTER);
image(logo,width/2,logo.height);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }