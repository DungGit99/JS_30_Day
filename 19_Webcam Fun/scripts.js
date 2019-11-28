const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(localMediaStream => {
            console.log(localMediaStream);
            video.srcObject = localMediaStream;
            video.play();
        })
        .catch(err => {
            console.log(`oh no!!!`);
        })
}
function painToCanavas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height) ;
        let pixels = ctx.getImageData(0,0,width,height);
        // pixels = redEffect(pixels);
        pixels = rgbSplit(pixels);
        ctx.globalAlpha = 0.1 ;
        ctx.putImageData(pixels,0,0);
    }, 16)
}
// take a photo 
function takePhoto() {
    // 
    snap.currentTime = 0;
    snap.play();
    // take the data 
    const data = canvas.toDataURL('images/jpeg'); // url image
    const link =  document.createElement('a'); // create <a></a>
    link.href =data; // url of image
    link.setAttribute('download','handsome'); // handsome: name image
    link.innerHTML = `<img src=${data} all="my image" />`
    // link.textContent ='Download Image'; // text content of tag <a></a>
    // <div class ='strip'></div>
    strip.insertBefore(link,strip.firstChild);
}
//
function redEffect(pixels){
    for(let i=0; i<pixels.data.length ; i+=4){
        pixels.data[i+0] = pixels.data[i+0]+100; // Red 
        pixels.data[i+1] = pixels.data[i+1]-50; // Green
        pixels.data[i+2] = pixels.data[i+2]*0.5; // Blue 
    }
    return pixels;
}
//
function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i+=4) {
      pixels.data[i - 150] = pixels.data[i + 0]; // RED
      pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
      pixels.data[i - 550] = pixels.data[i + 2]; // Blue
    }
    return pixels;
  }

getVideo();
video.addEventListener('canplay', painToCanavas);