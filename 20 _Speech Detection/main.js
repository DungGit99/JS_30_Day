window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true ;

const words = document.querySelector('.words');
let p = document.createElement('p');
words.appendChild(p);

recognition.addEventListener('result',e =>{
    console.log(e);
})
recognition.start();
