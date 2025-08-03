

function setup() {
  createCanvas(900, 600);
  background(0);
}


function draw(){
  var randX = random(0, width);
  var randY = random(0, height);

  noStroke();
  ellipse(randX, randY, 15, 15);


}

