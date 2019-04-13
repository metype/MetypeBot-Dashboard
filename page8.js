let logo,bg,hight,scroll=0,home;

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
logo=loadImage("https://raw.githubusercontent.com/metype/MetypeBot-Dashboard/master/MetypeBot-Logo.png");
bg = loadImage("https://raw.githubusercontent.com/metype/MetypeBot-Dashboard/master/bgcolor.png");
home = loadImage("https://raw.githubusercontent.com/metype/MetypeBot-Dashboard/master/home.png");
}

function draw() {
    scroll = (scroll>0) ? 0:scroll;
    scroll = (scroll<-100) ? -100:scroll;
    translate(0,scroll)
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
text("Utility",width/2,225)
textSize(25);
rect(width/2,300,800,50);
rect(width/2,375,800,50);
rect(width/2,450,800,50);
rect(width/2,525,800,50);
text("help: Give a list of commands, or information for a specific command.",width/2,300)
text("prefix: Shows or sets the command prefix.",width/2,375)
text("ping: Checks the bot's ping to the Discord server.",width/2,450)
text("eval: Executes JavaScript code.",width/2,525)
image(home,home.width/2,home.height/2);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }

  function mousePressed() {
    if(mouseY+scroll<home.height && mouseY+scroll>0&&mouseX<home.width) {
        link("index.html");
    }
}

function mouseWheel(event) {
    scroll -= 0.5*event.delta;
  }

link = function(href, target) {
    if (target !== undefined)  window.open(href, target);
    else                   window.location = href;
  };