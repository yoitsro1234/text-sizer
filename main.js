function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(550, 550);
    canvas.position = (560, 150);

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses);
}

function draw(){
    background ("#A9B8CA");
}

function modelLoaded(){
    console.log("yep done. what second page?");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results, "sub 2 yoitsro1234 & yoitsro5678");
    }
}