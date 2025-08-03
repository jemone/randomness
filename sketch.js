var c;

function setup() {
  createCanvas(900, 600);
  background(0);



}


function draw(){

  background(0);
  c =new Tickler(width/2, height/2);
  c.draw();

}

class Tickler{

  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 20;
  }

  draw(){

    fill(255);

    var d = dist(this.x, this.y, mouseX, mouseY);

    if (d<this.size/2){
      this.x = random(this.x, this.x+10);
      this.y = random(this.y, this.y+10);
    }

    ellipse(this.x, this.y, this.size, this.size);
 
  }
}


