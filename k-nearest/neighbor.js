
var points = [];

class Point {
  constructor() {
    this.x = Math.random() * width; // A random value along the x axis
    this.y = Math.random() * height; // A random value along the y axis
    this.class = floor(Math.random() * 2); // A random class: either 0 or 1
  }

  display() {
    stroke(0);
    strokeWeight(2);

    // Coloring the points. Points in class 1 are red, points in class 0 are green
    if (this.class == 1) {
      fill(255, 0, 0);
    } else {
      fill(0, 255, 0);
    }

    // Drawing a circle at the correct position
    ellipse(this.x, this.y, 20, 20);
  }
}

function setup() {
  for (var i = 0; i < 20; i++) {
  points.push(new Point());
}
  createCanvas(300, 300);
  test_point = new Point();
  test_point.display();
}

function draw() {
  background(255);

  for (var i = 0; i < points.length; i++) {
    points[i].display();
  }
}