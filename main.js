SpeechRecognition = window.webkitSpeechRecognition
recognition = new SpeechRecognition()

    document.getElementById("text_box").value = ""
    recognition.start()

recognition.onresult = function (event) {
    console.log(event);
    content = event.results[0][0].transcript
    document.getElementById("text_box").innerHTML=content
    console.log(content);
    if(content=="selfie") {
        Speak()   
    }
}

function Speak() {
    synth = window.speechSynthesis
    Speak_data="Taking Your Selfie In 2 Seconds"
    var utterthis = new SpeechSynthesisUtterance(Speak_data)

    synth.speak(utterthis)
    Webcam.attach(camera)
    setTimeout(function(){
        Take_SnapShot()
        Save()
    },5000);
}

Webcam.set({
    width: 360,
    hieght: 250,
    image_format:'jpeg',
    jpeg_quality: 90
});

camera = document.getElementById("camera")

function Take_SnapShot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'">'
    })
}

function Save() {
    link=document.getElementById("link")
    image=document.getElementById("capture_image").src
    link.href=image
    link.click()
    window.onload=timedRefresh(5000)
}

function timedRefresh(timeoutPeriod) 
{ setTimeout("location.reload(true);",timeoutPeriod); }