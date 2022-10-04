function preload(){

}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}  
function gotPoses(resullts) 
{
    if(resullts.lenght > 0){
        console.log(resullts);
        console.log("nose x =" + resullts[0].pose.nose.y);
        console.log("nose y =" + resullts[0].pose.nose.y);
    }
}





function modelLoaded() 
{
    console.log('PoseNet Is Initalized');
}

function draw(){
    image(video, 0, 0, 300, 300);
}


function take_snapshot(){
    save('myFilterImage.png');
}