let button = document.createElement('button');
button.innerText = 'Clear colection list '
document.body.appendChild(button);

button.onclick = function(){
 localStorage.clear()
}


let colection = localStorage.getItem('colection');
let colectionArray = JSON.parse(colection);
