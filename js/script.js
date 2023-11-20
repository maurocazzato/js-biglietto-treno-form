// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca



// generare ticket
const buttonGenera = document.getElementById("Genera");
const Biglietto = document.getElementById("Biglietto");

buttonGenera.addEventListener("click",

function() {
    Biglietto.classList.add("active");

        
    // input Nome user
    const inputNome = document.querySelector("#User");
    console.log(inputNome);
    console.log(inputNome.value)

    // risultato nome user
    document.getElementById("nomeuser").innerHTML = inputNome.value;

    // input età user
    const inputEta = document.querySelector(parseInt("userEta"));
    console.log(userEta);
    console.log(userEta.value)

    // input km user
    const inputKm = document.querySelector(parseInt("Kmuser"));
    console.log(Kmuser);
    console.log(Kmuser.value)

    // prezzo al km
    const prezzoKm = (Kmuser.value * 0.21);
    console.log(prezzoKm);

    // calcolo in base all'età dell'user
    if (userEta.value < 18){
        sconto =  ((prezzoKm * 20) / 100);
        risultato = prezzoKm - sconto ;
        risultato = risultato.toFixed(2);
    }else if (userEta.value >= 65){
        sconto = ((prezzoKm * 40) / 100);
        risultato = prezzoKm - sconto ;
        risultao = risultato.toFixed(2);
    } else{
        risultato = (Kmuser.value * 0.21);
        risultao = risultato.toFixed(2);
    }

        console.log(risultato); 

    // risultato
    document.getElementById("risultato").innerHTML = risultato + "€";



    // tipologia di biggleitto
    if (userEta.value < 18){
        ticket = "Bigleitto ridotto";
    }else if (userEta.value >= 65){
        ticket = "Bigleitto ridotto";
    } else{
        ticket = "Bigleitto intero";
    }
    console.log(ticket)
    console.log(ticket.value)
    // risultato nome user
    document.getElementById("offerta").innerHTML = ticket;


    // definire la carrozza
    const nCarrozza = Math.floor(Math.random() * 10);
    console.log(nCarrozza);
    console.log(nCarrozza.value);
    // risultato nome user
    document.getElementById("carrozza").innerHTML = nCarrozza;

    // definire codice CP
    const codeCP = Math.floor(Math.random() * 100000);
    console.log(codeCP);
    console.log(codeCP.value);
    // risultato nome user
    document.getElementById("codiceCP").innerHTML = codeCP;



}
);

