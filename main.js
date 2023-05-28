  nosex = 0
  nosey = 0
  function preload(){
    clown_nose = loadImage('https://i.postimg.cc/SKVB8hbg/Clown-Nose-PNG-Pic.png')
  }
   





function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet = ml5.poseNet(video,modelloaded);
    posenet.on('pose', gotposes)
    
}
function gotposes(results){
if(results.length>0) {
    console.log(results);
    nosex = results[0].pose.nose.x-15;
    nosey = results[0].pose.nose.y-15;

    console.log("nosex = " + results[0].pose.nose.x);
    console.log("nosey = " + results[0].pose.nose.y);
}
}
function modelloaded(){
    console.log("Model has been initalized")
}
function take_snapshot_filter(){
    save('filterized.png')
}
function draw(){
    image(video,0,0,300,300);
   // stroke(200,150,120)
    //fill(200,125,210)
    //circle(nosex,nosey,20);
   image(clown_nose,nosex,nosey,30,30);
}

