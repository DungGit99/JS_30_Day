
const trigger = document.querySelectorAll('a');
const highlight =  document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight); 

function highlightLink(){
    // getBoundingClientRect : return the size of an element and position relative to the viewport 
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords) ;

    const  coords ={
        width : linkCoords.width,
        height : linkCoords.height,
        top : linkCoords.top + window.scrollY,
        left : linkCoords.left + window.scrollX
    }
    // tag span - hover 
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
   
}
trigger.forEach(a=>a.addEventListener('mouseenter',highlightLink));
