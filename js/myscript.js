// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito.
// Infine scrivi sulla pagina nomecognomecolorepreferito19


// Chiedo il nome

var tuoNome = prompt('Scrivi qui il tuo nome:');

// Chiedo il cognome

var tuoCognome = prompt('Scrivi qui il tuo cognome:');

// Chiedo il colore preferito

var colorePreferito = prompt('Scrivi qui il tuo colore preferito:');

// aggiungo il numero 19

var numero = "19";

// Combino le risposte

var risultato = tuoNome + tuoCognome + colorePreferito + numero;


// output per l'utente

document.getElementById('welcome').innerHTML = "Ecco la tua password davvero poco credibile: " + risultato;
