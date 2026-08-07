// assets/data/languages.js

const languages = [

"English",
"French",
"Spanish",
"Portuguese",
"German",
"Italian",
"Dutch",
"Arabic",
"Chinese (Simplified)",
"Chinese (Traditional)",
"Japanese",
"Korean",
"Hindi",
"Urdu",
"Russian",
"Turkish",
"Thai",
"Vietnamese",
"Malay",
"Indonesian",
"Swahili",
"Yoruba",
"Igbo",
"Hausa"

];

const languageSelect =
document.getElementById("language");

const languages=[

"English",
"French",
"Spanish",
"Portuguese",
"German",
"Italian",
"Arabic",
"Chinese",
"Japanese",
"Korean",
"Hindi",
"Urdu",
"Russian",
"Turkish",
"Thai",
"Yoruba",
"Igbo",
"Hausa"

];

languages.forEach(lang=>{

const option=
document.createElement("option");

option.value=lang;

option.textContent=lang;

languageSelect.appendChild(option);

});