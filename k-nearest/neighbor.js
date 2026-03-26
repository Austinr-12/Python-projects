
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


function classifyMouse() {
  let distances = [];

  for (var i = 0; i < points.length; i++) {
    let distance = dist(points[i].x, points[i].y, mouseX, mouseY);
    distances.push([distance, points[i].class]);
  }

  distances.sort((a, b) => a[0] - b[0]);
}


let numZero = 0;
let numOne = 0;

// Looping through the 3 nearest neighbors and counting the classes
for (var i = 0; i < 3; i++) {
  if (distances[i][1] == 1) {
    numOne++;
  } else {
    numZero++;
  }
}


noStroke();


ellipse(mouseX, mouseY, 10, 10);