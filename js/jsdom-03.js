/**
 * Esercizio 3: Lista della spesa
 * Crea una lista della spesa dinamica:
 * 
 * <h2>Lista della spesa</h2>
 * <ul id="spesa"></ul>
 * const spesa = ['Pane', 'Latte', 'Uova', 'Pasta', 'Pomodori'];
 * 
 * Stampa tutti gli elementi nella lista
 * Risultato atteso:
 * • Pane
 * • Latte
 * • Uova
 * • Pasta
 * • Pomodori
**/

const spesa = ['Pane', 'Latte', 'Uova', 'Pasta', 'Pomodori'];
let carrello = document.querySelector('#spesa');


spesa.forEach(function (prodotto) {
    carrello.innerHTML += `<li>${prodotto}</li>`;
});