//creare elementi
const myLi = document.createElement('li');

//aggiungi classe
myLi.className = 'mia_classe';

//aggiungi attributo
myLi.title ='titolo';

//creare text node e appendere
myLi.appendChild(document.createTextNode('ciao'));

//aggiungere li a ul
document.querySelector('ul').appendChild(myLi);

console.log(myLi);

//rimpiazzare gli elementi
const primoLi = document.getElementById('primo-li');
console.log(primoLi);

const nuovoLi = document.createElement('li');
console.log(nuovoLi);
nuovoLi.id = primoLi.id;
nuovoLi.appendChild(document.createTextNode('1 new'));

const ul = document.querySelector('ul');
ul.replaceChild(nuovoLi, primoLi);

//eliminare elelmenti
const lis = document.querySelectorAll('li');
console.log(lis[3]);
lis[4].remove();

console.log(ul);
ul.removeChild(lis[3]);