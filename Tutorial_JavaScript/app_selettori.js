//SELETTORI

//getElementById()
console.log(document.getElementById('title'))

//prendere valore
console.log(document.getElementById('title').id)
console.log(document.getElementById('title').className)

//cambiare valore

//stile
document.getElementById('title').style.color='red';
document.getElementById('title').style.background='black';
document.getElementById('title').style.padding='7px';

//contenuto
document.getElementById('title').textContent='Tutorialone';
document.getElementById('title').innerText='Tutorialissimo';
document.getElementById('title').innerHTML='<span style="color: yellow">Tutorial con innerHTML</span>';

//query selector
document.querySelector('.subtitle').style.color='red'; //modifica solo il primo elemento che matcha

//getElementsByClassName
const righe = document.getElementsByClassName('riga');
console.log(righe);
righe[1].style.color='red';

const listaArray = Array.from(righe);
console.log(listaArray);
listaArray.forEach(function(item){
    item.style.color='orange'
})

const item1 = document.querySelectorAll('li');
console.log(item1);
const item2 = document.querySelector('li');
console.log(item2);

item1.forEach(function(li) {
    li.style.color='red'
})

for(let i=0; i<item1.length; i+=2) {
    item1[i].style.color='black'
}