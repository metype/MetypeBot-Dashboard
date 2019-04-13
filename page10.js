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
    scroll = (scroll<-600) ? -600:scroll;
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
text("Music",width/2,225)
textSize(25);
rect(width/2,300,800,50);
rect(width/2,375,800,50);
rect(width/2,450,800,50);
rect(width/2,525,800,50);
rect(width/2,600,800,50);
rect(width/2,675,800,50);
rect(width/2,750,800,50);
rect(width/2,825,800,50);
rect(width/2,900,800,50);
rect(width/2,975,800,50);
rect(width/2,1050,800,50);
rect(width/2,1125,800,50);
rect(width/2,1200,800,50);
text("Play: Queue a song/playlist by URL or name.",width/2,300)
text("remove: Remove a song from the queue by position in the queue.",width/2,375)
text("help: Help for commands.",width/2,450)
text("skip: Skip a song or songs with skip [number]",width/2,525)
text("leave: Leaves the voice channel.",width/2,600)
text("search: Searchs for up to 10 videos from YouTube.",width/2,675)
text("pause: Pauses playing music.",width/2,750)
text("resume: Resumes a paused queue.",width/2,825)
text("volume: Changes the volume output of the bot.",width/2,900)
text("queue: View the current queue.",width/2,975)
text("loop: Sets the loop state for the queue.",width/2,1050)
text("clear: Clears the entire queue.",width/2,1125)
text("np: Shows the now playing text.",width/2,1200)
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