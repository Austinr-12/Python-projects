class Point {
  constructor() {
    this.x = Math.random() * width; // A random value along the x axis
    this.y = Math.random() * height; // A random value along the y axis
    this.class = floor(Math.random() * 2); // A random class: either 0 or 1
  }
}