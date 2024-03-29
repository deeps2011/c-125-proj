noseX=0;
noseY=0;
function preload()
{
    clown_nose = loadImage('https://i.postimg.cc/N0Hhjqkk/5fee75b2f8a8b12f541d824bb3f26ee7-vintage-brown-st-patrick-mustache.webp');
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-35;
        noseY = results[0].pose.nose.y-10;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
;    }
}
function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function draw()
{
    image(video, 0, 0, 300, 300);
    
    image(clown_nose, noseX, noseY, 70, 40);

}

function take_snapshot()
{
    save('myFilterImage.png');
}

