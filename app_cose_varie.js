/*
//Variabili
//var, let, const
//usa let e const, var è un tipo vecchio

let oggi = new Date().toString();
//console.log(oggi);

const compleanno = new Date('06-05-1996');
compleanno.setMonth(4);
console.log(compleanno);
*/

/*
//Ternary operator
const id = 100;
id === 100? console.log('id è 100') : console.log('id nno è 100')
*/

/*
//Immediatly invoked function expression
(function saluta(nome) {
    console.log('hello ' + nome);
})('mario')
*/

/*
const persona = {
    nome: 'mario',
    cognome: 'rossi',
    saluta: function(nome, cognome) {
        console.log('Ciao ragazzi io sono '+ nome +' '+ cognome)
    },
}

persona.saluta(persona.nome, persona.cognome)
*/

/*
for (let i=0; i<=10; i++) {
    if(i===8) {
        console.log('sono una papera')
        continue //senza continue samperebbe anche l'8
    }

    console.log(i)
}
*/

/*
const fruits = ['apple', 'banana', 'kiwi', 'ananas'];

for(let i=0; i<fruits.length; i++) {
    console.log(fruits[i])
}


fruits.forEach(function(value, index, array){

})

const newFruits = fruits.map(function(value, index){
    return index
})

console.log(newFruits)

const persona = {
    name: 'billy',
    eta: 18,
    hobby: 'basket',
}

for(let x in persona){
    console.log(persona[x])
}
*/

//WINDOW OBJECT
console.log(window)
window.alert('ciao')
window.prompt()