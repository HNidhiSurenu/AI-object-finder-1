function setup(){
    canvas=createCanvas(600, 500)
    canvas.center()
    video=createCapture(VIDEO)
video.hide()
}
status=""
function start(){
objectdetector=ml5.objectDetector("cocossd", modelloaded)
document.getElementById("status").innerHTML="status: detecting objects"
}
document.getElementById("name").value
function modelloaded(){
    console.log("modelloaded")
    status="true"
}
function draw(){
    image(video, 0, 0, 380, 380)
}