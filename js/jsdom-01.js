/**
 * Esercizio 1: Selezione base
 * Crea un file HTML con questi elementi e selezionali:
 * 
 * <h1 id="titolo-principale">Il mio sito</h1>
 * <p id="descrizione">Questa è la descrizione</p>
 * <button >Clicca qui</button>
**/

let pagina = document;  // contiene tutto il testo della pagina HTML

// selettori
const h1 = document.querySelector('#titolo-principale');
const p = document.querySelector('#descrizione');
const btn = document.querySelector('button');

console.log(h1);
console.log(p);
console.log(btn);