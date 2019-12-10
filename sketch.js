var graphics;
var video;
var capture;

function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  graphics = createGraphics(300, 300);
  graphics.background('#660000');

  video = createGraphics(640, 480);
  video.background(0, 96, 128);
  angleMode(DEGREES);

  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
}

function draw() {
  // background("#003366");
  background('#660000')
  noStroke()

  //lights
  ambientLight(0)

  //cheange point light
  var locX = mouseX - height / 2;
  var locY = mouseY - width / 2;

  //turn on
  if (keyIsDown(UP_ARROW)) {
    ambientLight(200)
    pointLight(255, locX, locY, locX, locY, 50);
  }

  //change camera on key pressed
  if (keyIsDown(ENTER)) {
    changeCamera()
  }

  //video from the webcam
  video.image(capture, 0, 0, 640, 480)


  //change colors of the sphere
  for (var i = 0; i < graphics.height; i += 20) {
    graphics.fill(map(mouseX, 0, width, 0, 255), map(mouseY, 0, height, 0, 255), random(255));
    graphics.noStroke()
    graphics.rect(0, i, graphics.height , 10);
  }


  //shapes
  push()
  rotateZ(frameCount * 0.5);
  rotateX(frameCount * 0.5);
  rotateY(frameCount * 0.5);
  texture(video)
  box(200, 200, 200, 2, 2)
  pop()


  push()
  rotateZ(frameCount * 0.5);
  rotateX(frameCount * 0.5);
  translate(0, -300, -100)
  texture(graphics)
  sphere(80, 20, 20)
  pop()

  push()
  rotateZ(frameCount * 0.5);
  rotateY(frameCount * 0.5);
  translate(200, -300, -100);
  texture(graphics)
  sphere(80, 20, 20)
  pop()


  push()
  rotateX(frameCount * 0.5);
  rotateY(frameCount * 0.5);
  translate(100, -300, -100)
  texture(graphics)
  sphere(80, 20, 20)
  pop()


}


function changeCamera() {
  camera(200, 200, 200, 100, 0, 0, 1, 1, 0)
}
