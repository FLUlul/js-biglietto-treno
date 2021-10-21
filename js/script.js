/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

-il prezzo del biglietto è definito in base ai km (0.21 € al km)

-va applicato uno sconto del 20% per i minorenni

-va applicato uno sconto del 40% per gli over 65.

L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */


const output = document.getElementById("out");
const outputSale = document.getElementById("out-sale");

/* ask user the NUMBER of km he needs to travel */
const km = parseInt(prompt("Insert the km you have to travel"));
console.log(km); //console debug

/* ask the AGE of the user */
const age = parseInt(prompt("Insert your age"));
console.log(age); //console debug

/* calculate the km insert by user * 0.21 in price*/
let unitPrice = km * 0.21;
console.log("full price is: " ,unitPrice); //console debug

/* if the user is < 18 the result in price is - 20% 
and if the user is > 65 the result in price is - 40%*/

let percentile;
let sale;

if (age < 18) {
    percentile = (20 / 100) * unitPrice;
    console.log("the percentile to subtract" ,percentile); //console debug

    sale = (unitPrice - percentile).toFixed(2);
    console.log("the final price under 18 is: ", sale); //console debug

    outputSale.innerHTML = `Your Ticket costs ${unitPrice}€`
    output.innerHTML = `Your Ticket costs ${sale}€ with 20% sale`
} else if (age > 65) {
    percentile = (40 / 100) * unitPrice;
    console.log("the percentile to subtract" ,percentile); //console debug

    sale = (unitPrice - percentile).toFixed(2);
    console.log("the final price over 65 is: ", sale); //console debug

    outputSale.innerHTML = `Your Ticket costs ${unitPrice}€`
    output.innerHTML = `Your Ticket costs ${sale}€ with 40% sale`
} else {
    output.innerHTML = `Your Ticket costs ${unitPrice}€`
    console.log("the final price is: ",unitPrice) //console debug
}


/* output the final price with max 2 decimals */
