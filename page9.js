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
text("Mathematics",width/2,225)
textSize(25);
rect(width/2,300,800,50,20);
rect(width/2,375,800,50,20);
rect(width/2,450,900,50,20);
rect(width/2,525,800,50,20);
rect(width/2,600,800,50,20);
    rect(width/2,675,800,50,20);
text("pow: Gives a number to a specified power.",width/2,300)
    text("pi: Returns the value of PI.",width/2,675)
text("random: Gives a random number. Syntax '/random <min> <max>'",width/2,375)
text("realtime: Tells you the current time; Syntax : '/realtime <hour difference from GMT>'",width/2,450)
text("sqr: Gives the square of a number.",width/2,525)
text("sqrt: Gives the square root of a number.",width/2,600)
image(home,home.width/2,home.height/2);
cursor(ARROW);
if(mouseY+scroll<home.height && mouseY+scroll>0&&mouseX<home.width) {
  cursor(HAND);
}
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }

  function mousePressed() {
    if(mouseY+scroll<home.height && mouseY+scroll>0&&mouseX<home.width) {
        link("index.html");
    }
}
link = function(href, target) {
    if (target !== undefined)  window.open(href, target);
    else                   window.location = href;
  };
