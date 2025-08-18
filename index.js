
function changeText(){
    let fpara = document.getElementById('fpara');
    fpara.textContent = "Hello world";
}

let fpara = document.getElementById('fpara');

fpara.addEventListener('click', changeText);
  

fpara.removeEventListener('click', changeText);

let anchorElement = document.getElementById('youtube');

anchorElement.addEventListener('click', function(event) {
    event.preventDefault();
    anchorElement.textContent = "Click-Done";
}
);

let paras = document.querySelectorAll('p');
function alertevent(event) {
    alert("you have clicked on para: " + event.target.textContent);
}

function alertevent(event) {
    if(event.target.nodeName == 'SPAN') {
        alert("you have clicked on para: " + event.target.textContent);
    }
}

let myDiv = document.getElementById('wrapper');
myDiv.addEventListener('click', alertevent);

for(let i=0; i<paras.length; i++){
    let para = paras[i];
    para.addEventListener('click', alertevent);
}




