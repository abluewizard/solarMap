var speedMult;

var rHathor;
var thetaHathor;
var speedHathor;

var rEros;
var thetaEros;
var speedEros;

var rAine;
var thetaAine;
var thetaAine1;
var thetaAine2;
var speedAine;

var rFigga;
var thetaFrigga;
var speedFrigga;

var rCoR;
var thetaCoR;
var speedCoR;

var font,
  fontsize = 20

var textY;
var textX;

var moonText;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('assets/Roboto-Thin.ttf');
}

function setup() {
  createCanvas(1000, 800);
  moonText = "--------: \n-\n-";
  speedMult = 0.5;
  textY = 40;
  textX = 40
  // Initialize Hathor
  rHathor = height * 0.1;
  thetaHathor = 0;
  speedHathor = 0.02 * speedMult;

  // Initialize Eros
  rEros = height * 0.2;
  thetaEros = 4;
  speedEros = 0.01 * speedMult;

  // Initialize Aine
  rAine = height * 0.3;
  thetaAine = 8;
  thetaAine1 = 0;
  thetaAine2 = PI;
  speedAine = 0.005 * speedMult;

  // Initialize Frigga
  rFrigga = height * 0.4;
  thetaFrigga = 6;
  speedFrigga = 0.001 * speedMult;

  // Initialize CoR
  rCoR = height * 0.45;
  thetaCoR = 7;
  speedCoR = 0.0005 * speedMult;
}

function draw()
{

  background(51, 46, 60);

  // Translate the origin point to the center of the screen
  translate(width/2, height/2);
  ellipseMode(CENTER);
  //render Sun
  fill(132, 108, 91);
  ellipse(0, 0, 60, 60);

  //draw rings
  strokeWeight(1);
  noFill()
  stroke(69, 66, 90)
  ellipse(0, 0, rHathor * 2, rHathor * 2);
  ellipse(0, 0, rEros * 2, rEros * 2);
  strokeWeight(0.25);
  ellipse(0, 0, rAine * 2 - 20, rAine * 2 - 20);
  ellipse(0, 0, rAine * 2 + 20, rAine * 2 + 20);
  strokeWeight(4);
  ellipse(0, 0, rAine * 2, rAine * 2);
  strokeWeight(1);
  ellipse(0, 0, rFrigga * 2, rFrigga * 2);
  ellipse(0, 0, rCoR * 2, rCoR * 2);

  noStroke();
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
  drawHathor();
  drawEros();
  drawAine();
  drawFrigga();
  drawCoR();
  drawMoons();
}

function drawHathor()
{
  // Convert polar to cartesian
  var x = rHathor * cos(thetaHathor);
  var y = rHathor * sin(thetaHathor);
  let d = dist(mouseX - (width / 2), mouseY - (height / 2), x, y);
  if(d <= 20) {
    fill(160, 150, 140);
    moonText = "HATHOR: \n-Bast\n-";
  }
  else {
    fill(40, 30, 20);
  }
  ellipse(x, y, 20, 20);
  fill(255);
  text("Hathor", x+textX, y-textY);
  thetaHathor += speedHathor;
}

function drawEros()
{
  // Convert polar to cartesian
  var x = rEros * cos(thetaEros);
  var y = rEros * sin(thetaEros);
  let d = dist(mouseX - (width / 2), mouseY - (height / 2), x, y);
  if(d <= 32) {
    fill(234, 173, 147);
    moonText = "EROS: \n-Aphrodite\n-Vinus";
  }
  else {
    fill(176, 113, 86);
  }
  ellipse(x, y, 32, 32);
  noStroke();
  fill(255);
  text("Eros", x+textX, y-textY);
  thetaEros += speedEros;
}

function drawAine()
{
  // Convert polar to cartesian
  var x = rAine * cos(thetaAine);
  var y = rAine * sin(thetaAine);
  var x1 = 20 * cos(thetaAine1);
  var y1 = 20 * sin(thetaAine1);
  var x2 = 20 * cos(thetaAine2);
  var y2 = 20 * sin(thetaAine2);

  let d1 = dist(mouseX - (width / 2), mouseY - (height / 2), x + x1, y + y1);
  if(d1 <= 25) {
    fill(239, 212, 191);
    moonText = "AINE 1: \n-\n-";
  }
  else {
    fill(196, 162, 135);
  }
  ellipse(x + x1, y + y1, 25, 25);
  noStroke();
  fill(255);
  text("Aine 1", x + x1+textX, y + y1-textY);

  let d2 = dist(mouseX - (width / 2), mouseY - (height / 2), x + x2, y + y2);
  if(d2 <= 25) {
    fill(239, 212, 191);
    moonText = "AINE 2: \n-\n-";
  }
  else {
    fill(196, 162, 135);
  }
  ellipse(x + x2, y + y2, 25, 25);
  noStroke();
  fill(255);
  text("Aine 2", x + x2+textX, y + y2-textY);
  thetaAine += speedAine;
  thetaAine1+= 0.05 * speedMult;
  thetaAine2+= 0.05 * speedMult;
}

function drawFrigga()
{
  // Convert polar to cartesian
  var x = rFrigga * cos(thetaFrigga);
  var y = rFrigga * sin(thetaFrigga);
  let d = dist(mouseX - (width / 2), mouseY - (height / 2), x, y);
  if(d <= 32) {
    fill(255, 241, 226);
    moonText = "FRIGGA: \n-Gna\n-";
  }
  else {
    fill(252, 222, 190);
  }
  ellipse(x, y, 50, 50);
  noStroke();
  fill(255);
  text("Frigga", x+textX, y-textY);
  thetaFrigga += speedFrigga;
}

function drawCoR()
{
  // Convert polar to cartesian
  var x = rCoR * cos(thetaCoR);
  var y = rCoR * sin(thetaCoR);
  let d = dist(mouseX - (width / 2), mouseY - (height / 2), x, y);
  if(d <= 32) {
    fill(180, 180, 180);
    moonText = "CATHEDRAL OF REASON: \n-\n-";
  }
  else {
    fill(140, 140, 140);
  }
  ellipse(x, y, 10, 10);
  noStroke();
  fill(255);
  text("C.o.R.", x+textX, y-textY);
  thetaCoR += speedCoR;
}

function drawMoons()
{
  fill(255);
  textAlign(LEFT, TOP);
  text(moonText, (-width / 2) + 20, (height / 2) - 100);
}
