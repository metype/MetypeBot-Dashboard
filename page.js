let logo,bg;

function setup() {
createCanvas(windowWidth,windowHeight);
logo=loadImage("https://raw.githubusercontent.com/metype/MetypeBot-Dashboard/master/MetypeBot-Logo.png");
bg = loadImage("https://raw.githubusercontent.com/metype/MetypeBot-Dashboard/master/bgcolor.png");
}

function draw() {
    imageMode(CORNER);
    bg.resize(width,logo.height*2);
    image(bg,0,0);
    imageMode(CENTER);
image(logo,width/2,logo.height);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }