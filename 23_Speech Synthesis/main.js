
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"],[name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

let voices = []; 
const msg = new SpeechSynthesisUtterance(); // all speach
msg.text = document.querySelector('[name="text"]').value;

function populateVoices(){
    voices = this.getVoices(); // get all voices
    console.log(voices);
    voicesDropdown.innerHTML = voices
        .map(voice =>`<option value="${voice.name}">${voice.name} (${voice.lang})</option>`).join('');  
}
// find voice === value 
function setVoice(){
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
}

function toggle(startOver = true){
    speechSynthesis.cancel(); 
    if(startOver){
        speechSynthesis.speak(msg);
    }
}
function setOption(){
    console.log(this.name,this.value);
    msg[this.name] =this.value ;
    toggle();
}
options.forEach(option => option.addEventListener('change',setOption));
voicesDropdown.addEventListener('change',setVoice);
speechSynthesis.addEventListener('voiceschanged',populateVoices);

speakButton.addEventListener('click',toggle);
stopButton.addEventListener('click',()=>toggle(false))
// c1
// stopButton.addEventListener('click',function(){
//     toggle(false);
// })
// c2  
// stopButton.addEventListener('click',toggle.bind(null,false));