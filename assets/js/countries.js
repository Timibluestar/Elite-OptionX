// assets/data/countries.js

const countries = Intl.supportedValuesOf
    ? Intl.supportedValuesOf("region")
          .map(code => ({
              code,
              name: new Intl.DisplayNames(
                  ["en"],
                  { type: "region" }
              ).of(code)
          }))
          .filter(c => c.name)
          .sort((a,b)=>a.name.localeCompare(b.name))
    : [];

    const countries = [

"United States",
"United Kingdom",
"Canada",
"Australia",
"Nigeria",
"Ghana",
"Kenya",
"South Africa",
"France",
"Germany",
"Italy",
"Spain",
"Portugal",
"China",
"Japan",
"India",
"Pakistan",
"UAE",
"Saudi Arabia",
"Brazil",
"Mexico"

];