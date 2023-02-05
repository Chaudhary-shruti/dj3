song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;


function setup() {
    canvas = createCanvas(600, 500);
    canvas.position(400, 150);
    video = createCapture(VIDEO);
    video.position(350,150)
    //video.hide();
    poseNet = ml5.posenet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function draw() {
    image(video, 0, 0, 600, 500);
}
function preload() {
    song1 = loadSound("hp.mp3");
    song2 = loadSound("malang.mp3");

}
function modelLoaded() {
    console.log('poseNet is initialized');
}
function gotPoses() {
    if (results.lenght > 0) {
        console.log(results)
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
}

function play() {
    song1.play();
    song.setVolume(1);
    song.rate(1);
}