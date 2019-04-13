let logo,bg,hight,scroll=0,home;

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
logo=loadImage("https://raw.githubusercontent.com/metype/MetypeBot-Dashboard/master/MetypeBot-Logo.png");
bg = loadImage("https://raw.githubusercontent.com/metype/MetypeBot-Dashboard/master/bgcolor.png");
home = loadImage();
}

function draw() {
    background(150);
    imageMode(CORNER);
    bg.resize(width,logo.height*2);
    image(bg,0,0);
    imageMode(CENTER);
image(logo,width/2,logo.height);
rectMode(CENTER);
textAlign(CENTER,CENTER);
textSize(25);
rect(width/2,300,800,50);
rect(width/2,375,800,50);
rect(width/2,450,800,50);
rect(width/2,525,800,50);
text("coinflip: Flips a coin.",width/2,300)
text("roll: Rolls a die.",width/2,375)
text("genmaze: Generates a maze.",width/2,450)
text("rps: \"Rock, Paper, or Scissors\" with the bot.",width/2,525)
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }