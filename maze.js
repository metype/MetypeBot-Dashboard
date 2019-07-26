var pathname = window. location. pathname; console. log(pathname);
const maz = pathname.split("?")[2];
const width = pathname.split("?")[1];
let maze;

function setup(){
createCanvas(windowWidth,windowHeight);
  for(let i=0;i<width;i++){
    for(int j=0;j<15;j++){
      maze[i][j] = maz.substring(i+(j*15),(i+(j*15)+1))
    }
  }
  console.log(maze);
}

function draw(){

}
