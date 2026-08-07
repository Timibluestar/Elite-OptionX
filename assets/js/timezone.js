// assets/data/timezones.js

const timezones = Intl.supportedValuesOf
    ? Intl.supportedValuesOf("timeZone")
    : [];

    const timezones = [

"UTC-12",
"UTC-11",
"UTC-10",
"UTC-9",
"UTC-8",
"UTC-7",
"UTC-6",
"UTC-5",
"UTC-4",
"UTC-3",
"UTC-2",
"UTC-1",
"UTC",
"UTC+1",
"UTC+2",
"UTC+3",
"UTC+4",
"UTC+5",
"UTC+6",
"UTC+7",
"UTC+8",
"UTC+9",
"UTC+10",
"UTC+11",
"UTC+12"

];

const timezoneSelect=
document.getElementById("timezone");

const zones=[

"Africa/Lagos",
"Europe/London",
"America/New_York",
"Asia/Dubai",
"Asia/Tokyo",
"Australia/Sydney"

];

zones.forEach(zone=>{

const option=
document.createElement("option");

option.value=zone;

option.textContent=zone;

timezoneSelect.appendChild(option);

});