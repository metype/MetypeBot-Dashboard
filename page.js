
let logo,bg,hight,scroll=0,discordlogo;

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
logo=loadImage("https://raw.githubusercontent.com/metype/MetypeBot-Dashboard/master/MetypeBot-Logo.png");
bg = loadImage("https://raw.githubusercontent.com/metype/MetypeBot-Dashboard/master/bgcolor.png");
discordlogo=loadImage("https://discordapp.com/assets/fc0b01fe10a0b8c602fb0106d8189d9b.png");
}

function draw() {
    background(150);
    discordlogo.resize(160,54.4);
    scroll = (scroll>0) ? 0:scroll;
    translate(0,scroll);
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
if(mouseX>(width/2)-400 && mouseX < (width/2)+400 && mouseY-scroll > 275 && mouseY-scroll<325) {
    fill(100); } else { fill(255); }
rect(width/2,300,800,50,20);
if(mouseX>(width/2)-400 && mouseX < (width/2)+400 && mouseY-scroll > 350 && mouseY-scroll<400) {
   fill(100); } else { fill(255); }
rect(width/2,375,800,50,20);
if(mouseX>(width/2)-400 && mouseX < (width/2)+400 && mouseY-scroll > 425 && mouseY-scroll<475) {
   fill(100); } else { fill(255); }
rect(width/2,450,800,50,20);
if(mouseX>(width/2)-400 && mouseX < (width/2)+400 && mouseY-scroll > 500 && mouseY-scroll<550) {
   fill(100); } else { fill(255); }
rect(width/2,525,800,50,20);
if(mouseX>(width/2)-400 && mouseX < (width/2)+400 && mouseY-scroll > 575 && mouseY-scroll<625) {
   fill(100); } else { fill(255); }
rect(width/2,600,800,50,20);
if(mouseX>(width/2)-400 && mouseX < (width/2)+400 && mouseY-scroll > 650 && mouseY-scroll<700) {
                   
   fill(100); } else { fill(255); }
rect(width/2,675,800,50,20);
if(mouseX>(width/2)-400 && mouseX < (width/2)+400 && mouseY-scroll > 725 && mouseY-scroll<775) {
   fill(100); } else { fill(255); }
rect(width/2,750,800,50,20);
if(mouseX>(width/2)-400 && mouseX < (width/2)+400 && mouseY-scroll > 800 && mouseY-scroll<850) {
   fill(100); } else { fill(255); }
rect(width/2,825,800,50,20);
if(mouseX>(width/2)-400 && mouseX < (width/2)+400 && mouseY-scroll > 875 && mouseY-scroll<925) {
   fill(100); } else { fill(255); }
rect(width/2,900,800,50,20);
fill(0);
text("Random",width/2,300)
text("Fun",width/2,375)
text("Moderation",width/2,450)
text("General",width/2,525)
text("Roleplay",width/2,600)
text("Commands",width/2,675)
text("Utility",width/2,750)
text("Mathematics",width/2,825)
text("Music",width/2,900)
cursor(ARROW);
if(mouseX>(width/2)-400 && mouseX < (width/2)+400 && mouseY-scroll > 275 && mouseY-scroll<325) {
    cursor(HAND)
    }
    if(mouseX>(width/2)-400 && mouseX < (width/2)+400 && mouseY-scroll > 350 && mouseY-scroll<400) {
        cursor(HAND)
        }
        if(mouseX>(width/2)-400 && mouseX < (width/2)+400 && mouseY-scroll > 425 && mouseY-scroll<475) {
            cursor(HAND)
            }
            if(mouseX>(width/2)-400 && mouseX < (width/2)+400 && mouseY-scroll > 500 && mouseY-scroll<550) {
                cursor(HAND)
                }
                if(mouseX>(width/2)-400 && mouseX < (width/2)+400 && mouseY-scroll > 575 && mouseY-scroll<625) {
                    cursor(HAND)
                    }
                    if(mouseX>(width/2)-400 && mouseX < (width/2)+400 && mouseY-scroll > 650 && mouseY-scroll<700) {
                        cursor(HAND)
                        }
                        if(mouseX>(width/2)-400 && mouseX < (width/2)+400 && mouseY-scroll > 725 && mouseY-scroll<775) {
                            cursor(HAND)
                            }
                            if(mouseX>(width/2)-400 && mouseX < (width/2)+400 && mouseY-scroll > 800 && mouseY-scroll<850) {
                                cursor(HAND)
                                }
                                if(mouseX>(width/2)-400 && mouseX < (width/2)+400 && mouseY-scroll > 875 && mouseY-scroll<925) {
                                    cursor(HAND)
                                    }
                                if(mouseX>width-discordlogo.width&&mouseY-scroll>0&&mouseY-scroll<discordlogo.height) {
                                    cursor(HAND)
                                }
                                // rect(width-discordlogo.width,0+scroll,discordlogo.width,scroll+discordlogo.height)
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
                                    if(mouseX>width-discordlogo.width&&mouseY-scroll>0&&mouseY-scroll<discordlogo.height) {
                                        // greet();
                                        link("https://discordapp.com/api/oauth2/authorize?client_id=363489065590325261&permissions=418768903&scope=bot","_blank")
                                    }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }

  function mouseWheel(event) {
    scroll -= 0.5*event.delta;
  }

  function link(url, winName, options) {
    winName && open(url, winName, options) || (location = url);
  }
