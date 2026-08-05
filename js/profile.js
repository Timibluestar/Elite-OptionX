const dropZone=document.getElementById("dropZone");
const fileInput=document.getElementById("profileImage");
const preview=document.getElementById("profilePreview");

dropZone.onclick=()=>fileInput.click();

fileInput.onchange=e=>{

const file=e.target.files[0];

if(file){

preview.src=URL.createObjectURL(file);

}

};

dropZone.addEventListener("dragover",(e)=>{

e.preventDefault();

dropZone.classList.add("active");

});

dropZone.addEventListener("dragleave",()=>{

dropZone.classList.remove("active");

});

dropZone.addEventListener("drop",(e)=>{

e.preventDefault();

const file=e.dataTransfer.files[0];

if(file){

preview.src=URL.createObjectURL(file);

}

});

/*====================================
POPULATE DROPDOWNS
====================================*/

function fillSelect(selectId, items, placeholder, formatter) {

    const select = document.getElementById(selectId);

    if (!select) return;

    select.innerHTML = `<option value="">${placeholder}</option>`;

    items.forEach(item => {

        const option = document.createElement("option");

        if (typeof item === "string") {

            option.value = item;
            option.textContent = item;

        } else {

            option.value = item.code;
            option.textContent = formatter ? formatter(item) : item.name;

        }

        select.appendChild(option);

    });

}

fillSelect("country", countries, "Select Country", c => c.name);

fillSelect("language", languages, "Select Language");

fillSelect(
    "currency",
    currencies,
    "Select Currency",
    c => `${c.code} — ${c.name}`
);

fillSelect("timezone", timezones, "Select Time Zone");

const countrySelect =
document.getElementById("country");

const countries = [

"Afghanistan",
"Albania",
"Algeria",
"Andorra",
"Angola",
"Argentina",
"Australia",
"Austria",
"Belgium",
"Brazil",
"Canada",
"China",
"Denmark",
"Egypt",
"Finland",
"France",
"Germany",
"Ghana",
"India",
"Indonesia",
"Ireland",
"Italy",
"Japan",
"Kenya",
"Malaysia",
"Mexico",
"Morocco",
"Nigeria",
"Norway",
"Pakistan",
"Portugal",
"Qatar",
"Russia",
"Saudi Arabia",
"Singapore",
"South Africa",
"Spain",
"Sweden",
"Switzerland",
"Turkey",
"United Arab Emirates",
"United Kingdom",
"United States",
"Zimbabwe"

];

countries.sort();

countries.forEach(country=>{

const option =
document.createElement("option");

option.value=country;

option.textContent=country;

countrySelect.appendChild(option);

});

function populateSelect(id, data){

const select=document.getElementById(id);

if(!select) return;

select.innerHTML="<option>Select</option>";

data.forEach(item=>{

const option=document.createElement("option");

option.value=item;

option.textContent=item;

select.appendChild(option);

});

}

populateSelect("country",countries);
populateSelect("language",languages);
populateSelect("currency",currencies);
populateSelect("timezone",timezones);