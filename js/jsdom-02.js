/**
 * Esercizio 2: Modifica contenuti
 * Partendo dall'HTML dell'esercizio 1:
 * 
 * 1. Cambia il titolo in "Benvenuto nel mio sito!"
 * 2. Cambia la descrizione in "Sito rinnovato con JavaScript"
 * 3. Cambia il testo del bottone in "Inizia ora"
**/

// selettori
const h1 = document.querySelector('#titolo-principale');
const p = document.querySelector('#descrizione');
const btn = document.querySelector('button');

h1.innerHTML = 'Benvenuto nel mio sito!';
p.innerHTML = 'Sito rinnovato con JavaScript';
btn.innerHTML = 'Inizia ora';