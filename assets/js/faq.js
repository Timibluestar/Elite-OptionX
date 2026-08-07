/*=========================================
 FAQ ACCORDION
=========================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question=item.querySelector(".faq-question");

question.addEventListener("click",()=>{

faqItems.forEach(faq=>{

if(faq!==item){

faq.querySelector(".faq-answer").style.maxHeight=null;

faq.querySelector("span").textContent="+";

}

});

const answer=item.querySelector(".faq-answer");

const icon=item.querySelector("span");

if(answer.style.maxHeight){

answer.style.maxHeight=null;

icon.textContent="+";

}else{

answer.style.maxHeight=answer.scrollHeight+"px";

icon.textContent="−";

}

});

});


/*=========================================
 FAQ SEARCH
=========================================*/

const search=document.getElementById("faqSearch");

if(search){

search.addEventListener("keyup",()=>{

let value=search.value.toLowerCase();

faqItems.forEach(item=>{

const text=item.innerText.toLowerCase();

item.style.display=text.includes(value) ? "block":"none";

});

});

}


/*=========================================
 CATEGORY BUTTONS
=========================================*/

const buttons=document.querySelectorAll(".category");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

buttons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

});

});


/*=========================================
 SCROLL ANIMATION
=========================================*/

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

section.style.transform="translateY(50px)";

section.style.transition=".7s";

observer.observe(section);

});


/*=========================================
 SEARCH PLACEHOLDER EFFECT
=========================================*/

const placeholders=[
"Search deposits...",
"Search withdrawals...",
"Search trading...",
"Search account verification...",
"Search security..."
];

let i=0;

setInterval(()=>{

if(search){

search.placeholder=placeholders[i];

i++;

if(i>=placeholders.length){

i=0;

}

}

},3000);


/*=========================================
 PAGE LOADED
=========================================*/

window.addEventListener("load",()=>{

console.log("Elite OptionX FAQ Loaded");

});