var points = [];

class Point {
  constructor() {
    // Leave some padding for axes
    this.x = random(40, width - 20);  
    this.y = random(20, height - 40);
    this.class = floor(Math.random() * 2);
  }

  display() {
    textSize(20);
    textAlign(CENTER, CENTER);
    if (this.class == 1) {
      text("⚔️", this.x, this.y);
    } else {
      text("🧙", this.x, this.y);
    }
  }
}

function setup() {
  createCanvas(300, 300);
  for (var i = 0; i < 20; i++) {
    points.push(new Point());
  }
}

function draw() {
  background(255);

  drawAxes();

  // Draw points
  for (var i = 0; i < points.length; i++) {
    points[i].display();
  }

  classifyMouse();
}
