var pathname = window. location. href; console. log(pathname);
const maz = pathname.split("?")[3];
const wdth = pathname.split("?")[1];
const hight = pathname.split("?")[2];
let maze=new Array(wdth*hight);

function setup(){
createCanvas(40*wdth,40*hight);
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
        line(i+20,J,i+20,j+20);
        break;
        case(2):
         line(i,J,i+20,j);
        break;
        case(3):
         line(i,J,i,j+20);
        break;
        case(4):
         line(i,J+20,i+20,j+20);
        break;
        case(5):
         line(i+20,J,i+20,j+20);
         line(i,J+20,i+20,j+20);
        break;
        case(6):
         line(i+20,J,i+20,j+20);
         line(i,J,i+20,j+20);
        break;
        case(7):
         line(i+20,J,i+20,j+20);
         line(i,J+20,i+20,j+20);
        break;
        case(8):
        line(i+20,J,i+20,j+20);
         line(i,J,i+20,j+20);
        break;
        case(9):
        line(i+20,J,i+20,j+20);
         line(i,J,i+20,j+20);
        line(i,J+20,i+20,j+20);
        break;
        case('a'):
        line(i,J,i+20,j+20);
         line(i,J,i+20,j+20);
        line(i,J+20,i+20,j+20);
        break;
        case('b'):
        
        break;
   }
  }
}
}
