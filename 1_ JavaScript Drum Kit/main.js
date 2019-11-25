

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add('playing');
    //  currentTime trả về vị trí hiện tại của audio
    audio.currentTime = 0;
    // The play() bắt đầu chạy audio hiện tại ;
    audio.play();
}
//
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
    console.log(e.propertyName);  
  }
const keys = Array.from(document.querySelectorAll('.key'));


keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);