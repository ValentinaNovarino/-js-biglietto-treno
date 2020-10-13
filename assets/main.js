// chiedere i chilometri da percorrere e l'età al passeggero e verificare che l'utente inserisca un numero

var chilometri = parseInt(prompt('Quanti chilometri vuoi percorrere?'));

var età = parseInt(prompt('Quanti anni hai?'));

console.log(chilometri);

document.getElementById('chilometri-tratta').innerHTML = chilometri;

console.log(età);

document.getElementById('età-passeggero').innerHTML = età;

// calcolare il prezzo del biglietto in base alla distanza da percorrere. Considerando che il prezzo è di €0.21 / km

 if (!isNaN(chilometri)) {
    console.log('è un numero');
    var prezzoBigliettoGenerale = chilometri * 0.21;
    console.log(chilometri * 0.21);
} else {
    console.log('non è un numero');
}


// calcolare lo sconto in base all'età dell'utente. 20% per i minorenni 40% over 65
