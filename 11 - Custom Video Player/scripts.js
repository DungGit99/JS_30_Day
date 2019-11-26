const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// on of video 
function togglePlay(){
    const method =video.paused ? 'play' : 'pause';
    video[method]();
}
// update button play video
function updateButton(){
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon ;
    console.log(icon);
}
// skip
function skip(){
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip); // 25 50 75 
}
// handle range video 
function handleRangeUpdate(){
    video[this.name] = this.value;
}
// handle progress
function handleProgress(){
    // currentTime : return the current position of the video
    // duration : return the length of the video 
    const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}
// 
function scrub(e){
    // offsetX : return the x-coordinate the mouse cursor ;
    // offsetWidth : return pixels including - padding border and scrollbar, but not the margin.
    const scrubTime = (e.offsetX/progress.offsetWidth)*video.duration;

    // update video 
    video.currentTime = scrubTime;
    console.log('...');
    

}
let mousedown = false;


progress.addEventListener('click',scrub);
progress.addEventListener('mousemove',(e)=>mousedown && scrub(e));
progress.addEventListener('mousedown',()=>mousedown=true && console.log('true')); // click mouse
progress.addEventListener('mouseup',()=>mousedown=false ); // 

video.addEventListener('timeupdate',handleProgress);
ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));
skipButtons.forEach(skipBtn => skipBtn.addEventListener('click',skip));

video.addEventListener('click',togglePlay);
toggle.addEventListener('click',togglePlay);

video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton)

