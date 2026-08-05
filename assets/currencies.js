// assets/data/currencies.js

const currencies = [

{code:"USD",name:"US Dollar"},
{code:"EUR",name:"Euro"},
{code:"GBP",name:"British Pound"},
{code:"CAD",name:"Canadian Dollar"},
{code:"AUD",name:"Australian Dollar"},
{code:"CHF",name:"Swiss Franc"},
{code:"JPY",name:"Japanese Yen"},
{code:"CNY",name:"Chinese Yuan"},
{code:"NGN",name:"Nigerian Naira"},
{code:"ZAR",name:"South African Rand"},
{code:"GHS",name:"Ghanaian Cedi"},
{code:"KES",name:"Kenyan Shilling"},
{code:"AED",name:"UAE Dirham"},
{code:"SAR",name:"Saudi Riyal"},
{code:"INR",name:"Indian Rupee"},
{code:"PKR",name:"Pakistani Rupee"}

];

const currencies = [

"USD",
"EUR",
"GBP",
"CAD",
"AUD",
"NGN",
"GHS",
"KES",
"ZAR",
"AED",
"SAR",
"JPY",
"CNY",
"INR"

];

const currencySelect =
document.getElementById("currency");

const currencies=[

"USD - US Dollar",
"EUR - Euro",
"GBP - British Pound",
"CAD - Canadian Dollar",
"AUD - Australian Dollar",
"CHF - Swiss Franc",
"JPY - Japanese Yen",
"CNY - Chinese Yuan",
"NGN - Nigerian Naira",
"ZAR - South African Rand",
"AED - UAE Dirham",
"SAR - Saudi Riyal"

];

currencies.forEach(currency=>{

const option=
document.createElement("option");

option.value=currency;

option.textContent=currency;

currencySelect.appendChild(option);

});