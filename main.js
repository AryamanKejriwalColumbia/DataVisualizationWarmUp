
// Color Palette:
// Background -> F2E9E4
// Seconds -> 9A8C98
// Minutes -> 4A4E69
// Hours -> 22223B
// Ticks -> C9ADA7

class Time {
  constructor(h, m, s) {
    this.hour = h;
    this.minute = m;
    this.second = s;
  }
  
  get_time() {
    return [this.hour, this.minute, this.second]
  }
}

let current_time = new Time(0, 0, 0);
let last_time = new Time(0, 0, 0);

function setup() {
  createCanvas(700, 700);
  current_time = new Time(hour(), minute(), second());
}

function draw() {
  background("#F2E9E4");
  noStroke();
  
  last_time = current_time;
  current_time = new Time(hour(), minute(), second());
  
  if(current_time.get_time()[1] != last_time.get_time()[1]) {
    console.log(current_time.get_time()[1]);
  }
  
  t = current_time.get_time();
  
  
  display_ticks();
  display_time(t[0]%12, t[1], t[2]);
}

function display_ticks() {
  
  rectMode(CENTER);
  fill("#C9ADA7");
  
  translate(width/2, height/2);
  rect(width*0.425, 0, width/25, height/100, width/200);
  
  for(let i = 0; i < 11; i++) {
    rotate(TWO_PI/12);
    rect(width*0.425, 0, width/25, height/100, width/200);
  }
  
  rotate(TWO_PI/12);
  translate(-width/2, -height/2);
  
}

function display_time(hour, minute, second) {
  
  translate(width/2, height/2);
  rotate(PI + HALF_PI);
  translate(-width/2, -height/2);
  
  fill("#9A8C98");
  if(hour != 0) {
    arc(width/2, height/2, width*0.65, height*0.65, 0, map(hour, 0, 12, 0, TWO_PI), PIE);
  } else {
    arc(width/2, height/2, width*0.65, height*0.65, 0, 0.05, PIE);
  }
  
  fill("#4A4E69");
  if(minute != 0) {
    arc(width/2, height/2, width*0.5, height*0.5, 0, map(minute, 0, 60, 0, TWO_PI), PIE);
  } else {
    arc(width/2, height/2, width*0.5, height*0.5, 0, 0.05, PIE);
  }
  
  noStroke();
  fill("#22223B");
  if(second != 0) {
    arc(width/2, height/2, width*0.35, height*0.35, 0, map(second, 0, 60, 0, TWO_PI), PIE);
  } else {
    arc(width/2, height/2, width*0.35, height*0.35, 0, 0.05, PIE);
  }
}
