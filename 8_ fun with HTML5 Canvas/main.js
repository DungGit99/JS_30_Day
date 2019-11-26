const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = '#BADA55'; // first color
context.lineJoin = 'round';
context.lineCap = 'round';
context.globalCompositeOperation='multiply';
// context.lineWidth = 100;

let isDrawing = false ;
let lastX = 0;
let lastY = 0;
let direction = true ;

let hue = 0 ; // color  
function draw(e){
    if(!isDrawing) return; // stop when isDrawing = false
  

    context.strokeStyle = `hsl(${hue}, 100%, 50%)`; // set color when mousemove

    context.beginPath();
    context.moveTo(lastX,lastY); // start
    context.lineTo(e.offsetX,e.offsetY); 
    context.stroke();
    [lastX,lastY] = [e.offsetX,e.offsetY]; //Destructuring
    hue ++;
    if(hue >=360){
        hue=0 // set color = 0
    }
    if(context.lineWidth >=100 || context.lineWidth <=1 ){
        direction =!direction
    }
    if(direction){
        context.lineWidth ++; // to dần 
    }else{
        context.lineWidth --;
    }
   
}

canvas.addEventListener('mousemove',draw);

canvas.addEventListener('mousedown',(e)=>{
    isDrawing=true;
    [lastX,lastY] = [e.offsetX,e.offsetY];
});// when click => isDrawing = true => function draw excute => mousemove
canvas.addEventListener('mouseup',()=>isDrawing=false);
canvas.addEventListener('mouseout',()=>isDrawing=false);




