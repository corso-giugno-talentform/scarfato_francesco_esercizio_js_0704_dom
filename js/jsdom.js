/**
 * JavaScript DOM
**/

let pagina = document;  // contiene tutto il testo della pagina HTML

// selettori
// 1) selettore per ID

const span = document.querySelector('#test');
console.log(span);

// il carattere ` si ottiene con option + 9

const h1 = document.querySelector('h1');
h1.innerHTML = 'Hello!';