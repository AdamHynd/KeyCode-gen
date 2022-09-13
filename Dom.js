const displaykey = document.querySelector('.key h2')
const displaykeycode = document.querySelector('.keyCode')
const keyCodeDiv= document.querySelector('.keyCode')

window.addEventListener('keydown',(e)=> {
 displaykey.innerText = e.key;
 displaykeycode.innerText = e.keycode;
 if(e.keycode === 32){
    displaykey.innerText `'space '` ;
 }
}) 
