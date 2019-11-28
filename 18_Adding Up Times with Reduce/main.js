
const timeNode = Array.from(document.querySelectorAll('[data-time]')); //covert to Array

const seconds = timeNode.map(node => node.dataset.time)
                        .map(timecode => {
                            const [mins, secs] = timecode.split(':').map(parseFloat)
                            return (mins * 60) + secs;
                        })
                        .reduce((total, videoSeconds) => total + videoSeconds);

let secondsLeft = seconds;
// hours
const hours = Math.floor(secondsLeft / 3600);
// mins
secondsLeft = secondsLeft % 3600;
const mins = Math.floor(secondsLeft / 60);
// seconds
secondsLeft = secondsLeft % 60;
console.log(hours, mins, secondsLeft);




