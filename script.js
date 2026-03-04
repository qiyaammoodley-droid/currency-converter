function convertCurrency(){

let amount = document.getElementById("amount").value
let from = document.getElementById("fromCurrency").value
let to = document.getElementById("toCurrency").value

const rates = {
ZAR:1,
USD:0.054,
BTC:0.0000014
}

let result = (amount / rates[from]) * rates[to]

document.getElementById("result").innerText =
amount + " " + from + " = " + result.toFixed(4) + " " + to
}
