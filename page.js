let logo,bg,hight,scroll=0;

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
logo=loadImage("https://raw.githubusercontent.com/metype/MetypeBot-Dashboard/master/MetypeBot-Logo.png");
bg = loadImage("https://raw.githubusercontent.com/metype/MetypeBot-Dashboard/master/bgcolor.png");
}

function draw() {
    scroll = (scroll>0) ? 0:scroll;
    scroll = (scroll<-150) ? -150:scroll;
    translate(0,scroll);
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
rect(width/2,600,800,50);
rect(width/2,675,800,50);
rect(width/2,750,800,50);
text("Random",width/2,300)
text("Fun",width/2,375)
text("Moderation",width/2,450)
text("General",width/2,525)
text("Roleplay",width/2,600)
text("Commands",width/2,675)
text("Utility",width/2,750)
}

function mousePressed() {
    if(mouseX>(width/2)-400 && mouseX < (width/2)+400 && mouseY-scroll > 275 && mouseY-scroll<325) {
        link("random.html");
        }
        if(mouseX>(width/2)-400 && mouseX < (width/2)+400 && mouseY-scroll > 350 && mouseY-scroll<400) {
            link("fun.html");
            }
            if(mouseX>(width/2)-400 && mouseX < (width/2)+400 && mouseY-scroll > 425 && mouseY-scroll<475) {
                link("moderation.html");
                }
                if(mouseX>(width/2)-400 && mouseX < (width/2)+400 && mouseY-scroll > 500 && mouseY-scroll<550) {
                    link("general.html");
                    }
                    if(mouseX>(width/2)-400 && mouseX < (width/2)+400 && mouseY-scroll > 575 && mouseY-scroll<625) {
                        link("roleplay.html");
                        }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }

  function mouseWheel(event) {
    scroll -= 0.5*event.delta;
  }

  link = function(href, target) {
    if (target !== undefined)  window.open(href, target);
    else                   window.location = href;
  };