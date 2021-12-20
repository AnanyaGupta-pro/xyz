function preload(){

}
function setup(){
    canvas=createCanvas(1000,800);
    canvas.position(785,275);

    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function draw(){
image(video,0,0,600,600)
}
function take_snapshot(){
    save("SelfieWithFilter.png");
}
function modelLoaded(){
    console.log("Posenet is initialized")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);

        console.log("left ear x="+results[0].pose.leftEar.x);
        console.log("right ear x="+results[0].pose.rightEar.x);

        console.log("left ear y="+results[0].pose.leftEar.y);
        console.log("right ear y="+results[0].pose.rightEar.y);
    }
}