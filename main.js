Webcam.set({
    width: 100,
    height: 100,
    image_format: 'png',
    png_quality: 90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img class="img-responsive img-thumbnail" id="captured_image" src="'+data_uri+'"/>'
    });
}
console.log('ml5 version', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/cJFTQdXTE/model.json',modelLoaded);
function modelLoaded(){
    console.log('Your Camera Is Working, We Take The Image And Seeing For The Model.')
}