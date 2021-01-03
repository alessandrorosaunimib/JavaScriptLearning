//eventi
/*
document.querySelector('a').addEventListener('click', function(e){
   console.log('bottone cliccato') 
   e.preventDefault()
})
*/

document.querySelector('a').addEventListener('click', onclick);
function onclick(e) {
    console.log(e)
}

//eventi mouse: per vedere un evento commentare gli altri link.addEventListener

const link =document.querySelector('a');
link.addEventListener('dblclick', logEvent);
link.addEventListener('mousedown', logEvent); //quando viene schiacciato il pulsante
link.addEventListener('mouseup', logEvent); //quando viene rilasciato il pulsante
link.addEventListener('mouseover', logEvent); //quando il puntatore va sopra al link
link.addEventListener('mouseout', logEvent); //quando il puntatore va via dal link
link.addEventListener('mousemove', logEvent); //quando il puntatore va via dal link
function logEvent(e) {
    console.log(e.type)
}


const container = document.querySelector('div');
container.addEventListener('mousemove', logEvent1);
function logEvent1(e) {
    //console.log(e.offsetX, e.offsetY)
}
const cambia = document.getElementById('cambia');
//cambia.textContent = e.offsetX + ' ' + e.offsetY;

//eventi input e tastiera
const form = document.querySelector('#form');
const input = document.querySelector('#input')
input.addEventListener('keydown', logEvent2);
function logEvent2(e) {
    console.log(e.type)
}