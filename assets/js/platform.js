/*=====================================
 PLATFORM PAGE
=====================================*/

// Sticky Header

window.addEventListener("scroll", () => {

const header = document.querySelector(".header");

if(window.scrollY > 80){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});


/*=====================================
 SCROLL ANIMATION
=====================================*/

const cards = document.querySelectorAll(
".feature-card, .device-grid div, .tools-grid div, .security-grid div"
);

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

cards.forEach(card=>observer.observe(card));


/*=====================================
 HOVER EFFECT
=====================================*/

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});


/*=====================================
 SMOOTH SCROLL
=====================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/*=====================================
 CTA BUTTON
=====================================*/

const cta=document.querySelector(".platform-cta .btn-primary");

if(cta){

cta.addEventListener("click",()=>{

console.log("Redirecting to Register...");

});

}


/*=====================================
 PAGE LOADED
=====================================*/

window.addEventListener("load",()=>{

console.log("Elite OptionX Platform Loaded Successfully.");

});

// Highlight cards on hover
document.querySelectorAll(".market-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 20px 40px rgba(13,110,253,.25)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "0 10px 25px rgba(0,0,0,.08)";
    });
});

// Fade in sections while scrolling
const sections = document.querySelectorAll("section");

const reveal = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.15 });

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all .6s ease";
    reveal.observe(section);
});