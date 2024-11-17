let song;
let peaks = [];
let appleEmoji;

function preload() {
  song = loadSound("../apple.mp3");
  appleEmoji = "🍎"; 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100,225, 20);
  noLoop();

  // song's amplitude samples 
  peaks = song.getPeaks();

  // static visualization
  drawWaveform();
}

function drawWaveform() {
  translate(0, height/2); 

  let colors = [color(50, 123, 233, 90), color(200, 20, 223)];


  for (let i = 0; i < peaks.length - 1; i++) {
    let x1 = map(i, 0, peaks.length, 0, width);
    let y1 = peaks[i] * height / 2;

    stroke(colors[i % colors.length]);
    strokeWeight(1);

    // alternating line and emojis
    if (i % 2 === 0) {
      line(x1, 0, x1, y1); 
    }

    // apple emojis at each peak
    noStroke();
    textSize(12);
    textAlign(CENTER, CENTER);
    fill(2);
    text(appleEmoji, x1, y1);
  }}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  drawWaveform();
}
