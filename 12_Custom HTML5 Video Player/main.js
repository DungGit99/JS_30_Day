
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked ;



function handleCheck(e){
    let isBetween = false ;
    if(e.shiftKey && this.checked){
        checkboxes.forEach(checkbox=>{
            console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked){
                isBetween =!isBetween;
                console.log('inbetween');
            }
            if(isBetween){
                checkbox.checked=true;
            }
        })        
    }
   lastChecked=this;
}
checkboxes.forEach(checkbox=>checkbox.addEventListener('click',handleCheck));
