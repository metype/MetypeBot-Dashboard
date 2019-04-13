
let logo,bg,hight,scroll=0,discordlogo;

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
logo=loadImage("https://raw.githubusercontent.com/metype/MetypeBot-Dashboard/master/MetypeBot-Logo.png");
bg = loadImage("https://raw.githubusercontent.com/metype/MetypeBot-Dashboard/master/bgcolor.png");
discordlogo=loadImage("https://discordapp.com/assets/fc0b01fe10a0b8c602fb0106d8189d9b.png");
}

function draw() {
    discordlogo.resize(160,54.4);
    scroll = (scroll>0) ? 0:scroll;
    scroll = (scroll<-300) ? -300:scroll;
    translate(0,scroll);
    background(150);
    imageMode(CORNER);
    bg.resize(width,logo.height*2);
    image(bg,0,0);
    image(discordlogo,width-discordlogo.width,0);
    imageMode(CENTER);
image(logo,width/2,logo.height);
rectMode(CENTER);
textAlign(CENTER,CENTER);
textSize(40);
text("Home",width/2,225)
textSize(25);
rect(width/2,300,800,50,20);
rect(width/2,375,800,50,20);
rect(width/2,450,800,50,20);
rect(width/2,525,800,50,20);
rect(width/2,600,800,50,20);
rect(width/2,675,800,50,20);
rect(width/2,750,800,50,20);
rect(width/2,825,800,50,20);
rect(width/2,900,800,50,20);
text("Random",width/2,300)
text("Fun",width/2,375)
text("Moderation",width/2,450)
text("General",width/2,525)
text("Roleplay",width/2,600)
text("Commands",width/2,675)
text("Utility",width/2,750)
text("Mathematics",width/2,825)
text("Music",width/2,900)
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
                        if(mouseX>(width/2)-400 && mouseX < (width/2)+400 && mouseY-scroll > 650 && mouseY-scroll<700) {
                            link("commands.html");
                            }
                            if(mouseX>(width/2)-400 && mouseX < (width/2)+400 && mouseY-scroll > 725 && mouseY-scroll<775) {
                                link("utility.html");
                                }
                                if(mouseX>(width/2)-400 && mouseX < (width/2)+400 && mouseY-scroll > 800 && mouseY-scroll<850) {
                                    link("mathematics.html");
                                    }
                                    if(mouseX>(width/2)-400 && mouseX < (width/2)+400 && mouseY-scroll > 875 && mouseY-scroll<925) {
                                        link("music.html");
                                        }
                                    if(mouseX>width-discordlogo.width&&mouseY+scroll>0&&mouseY+scroll<discordlogo.height) {
                                        link("https://discordapp.com/api/oauth2/authorize?client_id=363489065590325261&permissions=418768903&scope=bot")
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
