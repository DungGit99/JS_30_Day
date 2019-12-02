
const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleMove(e) {
    // console.log(e.pageY, this.offsetTop, this.offsetHeight);
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%';
    // console.log(height);
    bar.style.height = height;
    const playbackRate = percent * (max - min) + min;
    bar.textContent = playbackRate.toFixed(2) + '×';

    // video.play() - start video
    video.playbackRate = playbackRate;
}
speed.addEventListener('mousemove', handleMove);