const password=document.getElementById("password");

const toggle=document.getElementById("togglePassword");

toggle.addEventListener("click",()=>{

if(password.type==="password"){

password.type="text";

toggle.classList.remove("fa-eye");

toggle.classList.add("fa-eye-slash");

}else{

password.type="password";

toggle.classList.remove("fa-eye-slash");

toggle.classList.add("fa-eye");

}

});

const form=document.getElementById("loginForm");

form.addEventListener("submit",(e)=>{

e.preventDefault();

const email=document.getElementById("email").value.trim();

const pass=password.value.trim();

if(email===""||pass===""){

alert("Please enter your email and password.");

return;

}

alert("Login successful (demo).");

form.reset();

password.type="password";

toggle.classList.remove("fa-eye-slash");

toggle.classList.add("fa-eye");

});
/*==========================
COUNTRY LIST
===========================*/

const countrySelect = document.getElementById("country");

if (countrySelect) {

    const countries = [

        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Korea",
        "North Macedonia",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Korea",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Vatican City",
        "Venezuela",
        "Vietnam",
        "Yemen",
        "Zambia",
        "Zimbabwe"

    ];

    countries.sort();

    countries.forEach(country => {

        const option = document.createElement("option");

        option.value = country;

        option.textContent = country;

        countrySelect.appendChild(option);

    });

}

/*=========================
FORGOT PASSWORD
=========================*/

const forgotForm = document.getElementById("forgotForm");

if(forgotForm){

forgotForm.addEventListener("submit",(e)=>{

e.preventDefault();

const button=document.getElementById("resetBtn");

button.disabled=true;

button.innerHTML="Sending...";

setTimeout(()=>{

button.innerHTML="Send Reset Link";

button.disabled=false;

forgotForm.style.display="none";

document.getElementById("successMessage").style.display="block";

},2000);

});

}

/*=========================
EMAIL VERIFICATION
=========================*/

const verifyForm=document.getElementById("verifyForm");

if(verifyForm){

const inputs=document.querySelectorAll(".code-input");

inputs.forEach((input,index)=>{

input.addEventListener("input",()=>{

if(input.value.length===1 && index<inputs.length-1){

inputs[index+1].focus();

}

});

});

let seconds=60;

const timer=document.getElementById("timer");

const resend=document.getElementById("resendBtn");

const countdown=setInterval(()=>{

seconds--;

timer.textContent=seconds;

if(seconds<=0){

clearInterval(countdown);

resend.disabled=false;

timer.textContent="0";

}

},1000);

resend.addEventListener("click",()=>{

alert("A new verification code would be sent by the server.");

resend.disabled=true;

});

verifyForm.addEventListener("submit",(e)=>{

e.preventDefault();

const success=document.getElementById("verifySuccess");

verifyForm.style.display="none";

success.style.display="block";

});

}

/*=========================
RESET PASSWORD
=========================*/

const resetPasswordForm = document.getElementById("resetPasswordForm");

if(resetPasswordForm){

const password=document.getElementById("newPassword");

const confirm=document.getElementById("confirmNewPassword");

const bar=document.getElementById("strengthBar");

const text=document.getElementById("strengthText");

const toggle=document.getElementById("toggleNewPassword");

toggle.addEventListener("click",()=>{

if(password.type==="password"){

password.type="text";

toggle.classList.replace("fa-eye","fa-eye-slash");

}else{

password.type="password";

toggle.classList.replace("fa-eye-slash","fa-eye");

}

});

password.addEventListener("input",()=>{

let score=0;

if(password.value.length>=8) score++;

if(/[A-Z]/.test(password.value)) score++;

if(/[0-9]/.test(password.value)) score++;

if(/[^A-Za-z0-9]/.test(password.value)) score++;

switch(score){

case 1:

bar.style.width="25%";

bar.style.background="red";

text.textContent="Weak Password";

break;

case 2:

bar.style.width="50%";

bar.style.background="orange";

text.textContent="Fair Password";

break;

case 3:

bar.style.width="75%";

bar.style.background="gold";

text.textContent="Good Password";

break;

case 4:

bar.style.width="100%";

bar.style.background="limegreen";

text.textContent="Strong Password";

break;

default:

bar.style.width="0%";

text.textContent="Password Strength";

}

});

resetPasswordForm.addEventListener("submit",(e)=>{

e.preventDefault();

if(password.value!==confirm.value){

alert("Passwords do not match.");

return;

}

resetPasswordForm.style.display="none";

document.getElementById("passwordSuccess").style.display="block";

});

}