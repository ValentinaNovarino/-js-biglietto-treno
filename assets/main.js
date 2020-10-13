// chiedere i chilometri da percorrere, l'età al passeggero e verificare che vengano restituiti dei numeri

var chilometri = parseInt(prompt('Quanti chilometri devi percorrere?'));

var età = parseInt(prompt('Quanti anni hai?'));

console.log(chilometri);

document.getElementById('chilometri-tratta').innerHTML = chilometri;

console.log(età);

document.getElementById('età-passeggero').innerHTML = età;

// calcolare il prezzo generale del biglietto in base alla distanza da percorrere controllando che l'utente inserisca dei numeri. Il prezzo è di €0.21 / km

if (!isNaN(chilometri)) {
    console.log('è un numero');
    var prezzoGenerale = chilometri * 0.21;
    console.log(prezzoGenerale);
} else {
    console.log('non è un numero');
}

document.getElementById('prezzo-generale').innerHTML = prezzoGenerale;

// calcolare lo sconto in base all'età dell'utente. 20% per i minorenni 40% over 65

if (età < 18) {
    console.log('sconto 20% per minorenni');
    var prezzoMinori = prezzoGenerale * 20 / 100;
    console.log(prezzoGenerale * 20 / 100);
} else if (età >65) {
    console.log('sconto 40% per over 60');
    var prezzoOver = prezzoGenerale * 40 / 100;
    console.log(prezzoGenerale * 40 / 100);
} else {
    console.log('prezzo biglietto generale');
    var prezzoGenerale = chilometri * 0.21;
    console.log(chilometri * 0.21);
}

document.getElementById('prezzo-scontato').innerHTML = prezzoMinori;

document.getElementById('prezzo-scontato').innerHTML = prezzoOver;
