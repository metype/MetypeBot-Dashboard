var pathname = window. location. href; console. log(pathname);
const maz = pathname.split("?")[3];
const wdth = pathname.split("?")[1];
const hight = pathname.split("?")[2];
let maze=new Array(wdth*hight);

function setup(){
createCanvas(10*wdth,10*hight);
  for(let i=0;i<wdth*hight;i++){
maze[i] = maz.substring(i,i+1);
  }
  console.log(maze);
}

function draw(){
background(51);
  showMaze(maze);
}


function showMaze(m) {
  for(let i=0;i<wdth;i++){
   for(let j=0;j<hight;j++){
    switch(m[i*j+wdth]==0){
      case(1):
        
        break;
        case(2):
        
        break;
        case(3):
        
        break;
        case(4):
        
        break;
        case(5):
        
        break;
        case(6):
        
        break;
        case(7):
        
        break;
        case(8):
        
        break;
        case(9):
        
        break;
        case(a):
        
        break;
        case(b):
        
        break;
   }
  }
}
}
