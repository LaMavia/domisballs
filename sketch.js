// 07:00:05
const f = 5
const balls = []
class Ball{
  constructor(r){
    this.x = random(width - 10)
    this.y = random(height - 10)
    this.r = r
    this.dx = random(-20,20) 
    this.dy = random(-20,20) 
  }

  update(){
    this.x += this.dx
    this.y += this.dy
    if(this.y + this.r / 2 >= height) this.dy *= -1 
    if(this.y - this.r / 2 <= 0) this.dy *= -1 
    if(this.x + this.r / 2 >= width) this.dx *= -1 
    if(this.x - this.r / 2 <= 0) this.dx *= -1
  }

  show(){
    fill(200,100,100)
    noStroke()
    ellipse(this.x, this.y, this.r)
  }
}
function setup() {
  createCanvas(800, 600);
  for(let i = 0;i < 10; i++){
    balls.push(new Ball(50))
  }
}

function draw() {
  stroke(255)
  background(21)
  balls.forEach(b => {
    b.update()
    b.show()
  })
}