/*=========================================
 CONTACT PAGE
=========================================*/

/* Reveal Sections */

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:.15});

sections.forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(40px)";
section.style.transition=".7s";

observer.observe(section);

});


/* Contact Form */

const form=document.querySelector(".contact-form form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const name=form.querySelector("input[type='text']");
const email=form.querySelector("input[type='email']");
const subject=form.querySelectorAll("input")[2];
const message=form.querySelector("textarea");

if(
name.value.trim()===""||
email.value.trim()===""||
subject.value.trim()===""||
message.value.trim()===""
){

alert("Please complete all required fields.");

return;

}

alert("Your message has been sent successfully.");

form.reset();

});

}


/* Newsletter */

const newsletter=document.querySelector(".newsletter-form");

if(newsletter){

newsletter.addEventListener("submit",function(e){

e.preventDefault();

const email=newsletter.querySelector("input");

if(email.value===""){

alert("Please enter your email.");

return;

}

alert("Thank you for subscribing!");

newsletter.reset();

});

}


/* Card Hover Effect */

document.querySelectorAll(".info-card,.office-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 20px 40px rgba(13,110,253,.25)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="0 10px 30px rgba(0,0,0,.08)";

});

});


/* Page Loaded */

window.addEventListener("load",()=>{

console.log("Elite OptionX Contact Page Loaded");

});