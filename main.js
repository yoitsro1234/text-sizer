noseX = 0;
noseY = 0;
rwX = 0;
lwX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(550, 550);
    canvas.position = (560, 150);

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses);
}


function modelLoaded(){
    console.log("modEl loadEd");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results, "SUBSCRIBE TO YOITSRO1234");
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x ="+ noseX + "nose y = " + noseY);
        lwX = results[0].pose.leftWrist.x;
        rwX = results[0].pose.rightWrist.x;
        difference = floor(lwX - rwX);
        console.log(rwX + " "+ lwX + " "+ difference+ "SUBSCRIBE TO YOITSRO");
    }
}


function draw(){
    background ('969A97');
    fill("cyan");
    stroke("blue");
    text(RohanShah, 100, 200);
    textSize(difference);
    document.getElementById("side").innerHTML = "Width and Height will be: "+difference+" pixels.";
}
