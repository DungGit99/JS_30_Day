
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) ||[];

function addItem(e) {
    e.preventDefault(); // stop page load
    const text = this.querySelector('[name=item]').value;
    const item = {
        text, // es6 - text : text
        done: false
    }
    items.push(item);
    populateList(items, itemsList);

    localStorage.setItem('items',JSON.stringify(items));
    this.reset(); // reset input
    
}
// render html 
function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
          <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
            <label for="item${i}">${plate.text}</label>
          </li>
        `;
    }).join('');
}
// update done
function toggleDone(e){
    if(!e.target.matches('input')) return ;
    // console.log(e.target);
    const el = e.target;
    // console.log(el.dataset.index);
    const index = el.dataset.index;
    items[index].done =!items[index].done;
    localStorage.setItem('items',JSON.stringify(items));
    populateList(items,itemsList) ;
}
itemsList.addEventListener('click',toggleDone);

addItems.addEventListener('submit', addItem);
populateList(items,itemsList) // get localStorage