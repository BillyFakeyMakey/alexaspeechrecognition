window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let alexa = new SpeechRecognition();
//czasem to daje error i trzeba wtedy zmienic alexa.start na () => alexa.start()
window.addEventListener('click', function(){
    document.body.innerHTML = 'Start nasłuchiwania'
    return alexa.start();
});

alexa.addEventListener('result', function(event){
    console.log(event.results[0][0].transcript);
});

alexa.addEventListener('end', function(event){
    document.body.innerHTML = 'Koniec nasłuchiwania'
    
});