let logo,bg,hight,scroll=0,home;

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
logo=loadImage("https://raw.githubusercontent.com/metype/MetypeBot-Dashboard/master/MetypeBot-Logo.png");
bg = loadImage("https://raw.githubusercontent.com/metype/MetypeBot-Dashboard/master/bgcolor.png");
home = loadImage("https://raw.githubusercontent.com/metype/MetypeBot-Dashboard/master/home.png");
}

function draw() {
    home.resize(32,32);
    background(150);
    imageMode(CORNER);
    bg.resize(width,logo.height*2);
    image(bg,0,0);
    imageMode(CENTER);
image(logo,width/2,logo.height);
rectMode(CENTER);
textAlign(CENTER,CENTER);
textSize(40);
text("Roleplay",width/2,225)
textSize(25);
rect(width/2,300,800,50,20);
rect(width/2,375,800,50,20);
rect(width/2,450,800,50,20);
rect(width/2,525,800,50,20);
text("kiss: Kisses a user.",width/2,300)
text("poke: Pokes a user.",width/2,375)
text("punch: Punches a user.",width/2,450)
text("slap: Slaps a user.",width/2,525)
image(home,home.width/2,home.height/2);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }

  function mousePressed() {
    if(mouseY<home.height&&mouseX<home.width) {
        link("index.html");
    }
}

link = function(href, target) {
    if (target !== undefined)  window.open(href, target);
    else                   window.location = href;
  };