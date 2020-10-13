// chiedere i chilometri da percorrere e impostare che vengano restituiti dei numeri e non delle stringhe

var chilometri = parseInt(prompt('Quanti chilometri devi percorrere?'));

// calcolare il prezzo generale del biglietto in base alla distanza da percorrere e chiedere l'età del passeggero solo se l'utente inserisce un valore numerico alla prima domanda. Il prezzo è di €0.21 / km

if (!isNaN(chilometri)) {

    var età = parseInt(prompt('Quanti anni hai?'));

    // console.log(chilometri);

    document.getElementById('chilometri-tratta').innerHTML = chilometri;

    // console.log(età);

    document.getElementById('età-passeggero').innerHTML = età;

    // console.log('è un numero');

    var prezzoGenerale = chilometri * 0.21;

    // console.log(prezzoGenerale);

    document.getElementById('prezzo-generale').innerHTML = prezzoGenerale;

    // calcolare lo sconto in base all'età dell'utente. 20% per i minorenni 40% over65

    var prezzoScontato = prezzoGenerale;

    if (età < 18) {
        console.log('sconto 20% per minorenni');
        var sconto = prezzoGenerale * 20 / 100;

        prezzoScontato = prezzoGenerale - sconto;
        // console.log(prezzoGenerale * 20 / 100);
    } else if (età >65) {
        console.log('sconto 40% per over 60');
        var sconto = prezzoGenerale * 40 / 100;

        prezzoScontato = prezzoGenerale - sconto;
        // console.log(prezzoGenerale * 40 / 100);
    } else {
        console.log('prezzo biglietto generale');
    }

    document.getElementById('prezzo-scontato').innerHTML = prezzoScontato;



} else {
    console.log('non è un numero');
}
