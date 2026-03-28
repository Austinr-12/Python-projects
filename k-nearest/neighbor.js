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

if (numOne > numZero) {
  fill(255, 0, 0);
} else {
  fill(0, 255, 0);
}

ellipse(mouseX, mouseY, 10, 10);