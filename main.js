prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("Snapshot").innerHTML = "<img id='captured_image' src='" + data_uri + "'>";
    });
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/d1xrWb1fn/model.json" , modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}

function speak_this(){
    synth = window.speechSynthesis;
    synth_data_1 = "the first prediction is " + prediction_1;
    synth_data_2 = "and the second prediction is " + prediction_2;
    utter_this = new SpeechSynthesisUtterance(synth_data_1 + synth_data_2);
    synth.speak(utter_this);
}