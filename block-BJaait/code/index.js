// Create a drag and drop list
// - You can add new item to the list
// - You should be able to drag and drop the items in the list
// - Follow this article (https://web.dev/drag-and-drop/) while creating this drag and drop list

// let ul = document.querySelector('ul');
// let itemToAdd = document.getElementById('item-input');
// let listOfItems = document.querySelector('.item-list');
let addBtn = document.getElementById('add-btn');

let form =  document.querySelector('form');
let ul = document.querySelector('ul');
var remove = document.querySelector('.draggable');

let listArr = [];

function createUI(listArr, ul){
    ul.innerHTML ="";
    listArr.forEach(listInfo => {
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.draggable = true;
        p.classList.add('draggable');
        p.innerText = listInfo.list;
        li.append(p);
        ul.append(li);
        addEventsDragAndDrop(p)
    });
}

addBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let input = document.querySelector('input');
    let list = input.value;
      listArr.push({list});
      createUI(listArr, ul);
      input.value = '';
  });
  function dragStart(event){
    this.style.opacity = 0.4;
    dragSrcEl = this;
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/html', this.innerHTML);
}
function dragStart(e) {
    this.style.opacity = '0.4';
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  };
  
  function dragEnter(e) {
    this.classList.add('over');
  }
  
  function dragLeave(e) {
    e.stopPropagation();
    this.classList.remove('over');
  }
  
  function dragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
  }
  
  function dragDrop(e) {
    if (dragSrcEl != this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
  }
  
  function dragEnd(e) {
    let listItems = document.querySelectorAll('.draggable');
    [].forEach.call(listItems, function(item) {
      item.classList.remove('over');
    });
    this.style.opacity = '1';
  }
  
  function addEventsDragAndDrop(el) {
    el.addEventListener('dragstart', dragStart, false);
    el.addEventListener('dragenter', dragEnter, false);
    el.addEventListener('dragover', dragOver, false);
    el.addEventListener('dragleave', dragLeave, false);
    el.addEventListener('drop', dragDrop, false);
    el.addEventListener('dragend', dragEnd, false);
  }
  
  let listItems = document.querySelectorAll('.draggable');
  [].forEach.call(listItems, function(item) {
    addEventsDragAndDrop(item);
  });





