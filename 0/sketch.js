let song;
let fft;
let particles = [];

function preload() {
  song = loadSound("../GhostDuet.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  fft = new p5.FFT();

  //  particle objects
  for (let i = 0; i < 200; i++) {
    particles.push(new Particle());
  }
  
  song.loop();
}

function draw() {
  background(20, 20, 40, 25); // trailing effect
  
  //  frequency spectrum
  let spectrum = fft.analyze();
  
  // visualize particles
  for (let p of particles) {
    p.update(spectrum);
    p.show();
  }
}

// particle class for movement
class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.size = random(5, 15);
    this.color = [random(0, 255, 255), random(232, 20), random(140, 25)];
  }

  update(spectrum) {
    // move particle
    this.pos.add(this.vel);

    // bounce off 
    if (this.pos.x < 0 || this.pos.x > width) this.vel.x *= -1;
    if (this.pos.y < 0 || this.pos.y > height) this.vel.y *= -1;

    // react low-frequency sound
    let lowFreq = fft.getEnergy(20, 100);
    if (lowFreq > 200) {
      this.pos.add(p5.Vector.random2D().mult(5));
    }
  }

  show() {
    noStroke();
    fill(...this.color, 150); // partially transparent
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}

function mouseClicked() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.loop();
  }
}
