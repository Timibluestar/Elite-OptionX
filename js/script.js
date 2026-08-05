/*=========================
SMOOTH SCROLL
=========================*/

document.querySelector(".scroll-indicator").addEventListener("click",()=>{

window.scrollTo({

top:window.innerHeight,

behavior:"smooth"

});

});

/*=========================
MARKET SEARCH
=========================*/

const searchInput = document.getElementById("marketSearch");

if(searchInput){

searchInput.addEventListener("keyup",function(){

const filter=this.value.toLowerCase();

const cards=document.querySelectorAll(".live-market-card");

cards.forEach(card=>{

const text=card.textContent.toLowerCase();

card.style.display=text.includes(filter) ? "block":"none";

});

});

}

/*=========================
DEMO PRICE ANIMATION
=========================*/

const prices=document.querySelectorAll(".price");

setInterval(()=>{

prices.forEach(price=>{

const change=(Math.random()*4-2).toFixed(2);

price.style.transition="0.3s";

price.style.color=change>=0 ? "#22c55e":"#ef4444";

setTimeout(()=>{

price.style.color="#ffffff";

},500);

});

},4000);


/*====================================
FEATURE CARD ANIMATION
====================================*/

const featureCards = document.querySelectorAll(".feature-box");

const featureObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.2
});

featureCards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(60px)";

card.style.transition="0.8s";

featureObserver.observe(card);

});

/*====================================
COUNTER ANIMATION
====================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const counter = entry.target;

const target = Number(counter.dataset.target);

let current = 0;

const increment = Math.max(1, Math.ceil(target / 200));

function updateCounter(){

current += increment;

if(current >= target){

counter.textContent = target.toLocaleString();

return;

}

counter.textContent = current.toLocaleString();

requestAnimationFrame(updateCounter);

}

updateCounter();

counterObserver.unobserve(counter);

});

},{

threshold:0.4

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/*====================================
INSTRUMENT CARD ANIMATION
====================================*/

const instrumentCards = document.querySelectorAll(".instrument-card");

const instrumentObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.2
});

instrumentCards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(60px)";

card.style.transition=".8s";

instrumentObserver.observe(card);

});

/*====================================
PLATFORM CARD ANIMATION
====================================*/

const platformCards = document.querySelectorAll(".platform-card");

const platformObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.2
});

platformCards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(60px)";
    card.style.transition=".8s";

    platformObserver.observe(card);

});

/*====================================
TESTIMONIAL SLIDER
====================================*/

const track = document.querySelector(".testimonial-track");
const slides = document.querySelectorAll(".testimonial-card");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

function showSlide(index){

    track.style.transform = `translateX(-${index * 100}%)`;

}

if(nextBtn && prevBtn){

    nextBtn.addEventListener("click",()=>{

        currentSlide++;

        if(currentSlide >= slides.length){

            currentSlide = 0;

        }

        showSlide(currentSlide);

    });

    prevBtn.addEventListener("click",()=>{

        currentSlide--;

        if(currentSlide < 0){

            currentSlide = slides.length - 1;

        }

        showSlide(currentSlide);

    });

    setInterval(()=>{

        currentSlide++;

        if(currentSlide >= slides.length){

            currentSlide = 0;

        }

        showSlide(currentSlide);

    },5000);

}

/*====================================
FAQ ACCORDION
====================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    const question = item.querySelector(".faq-question");

    question.addEventListener("click",()=>{

        faqItems.forEach(other=>{

            if(other !== item){

                other.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});

/*====================================
NEWSLETTER
====================================*/

const newsletterForm = document.getElementById("newsletterForm");

if(newsletterForm){

newsletterForm.addEventListener("submit",function(e){

e.preventDefault();

const email = document.getElementById("newsletterEmail").value;

alert("Thank you for subscribing, " + email + "!");

newsletterForm.reset();

});

}

/*====================================
ABOUT HERO ANIMATION
====================================*/

const aboutHero = document.querySelector(".about-hero-content");

if(aboutHero){

aboutHero.style.opacity = "0";

aboutHero.style.transform = "translateY(50px)";

window.addEventListener("load",()=>{

setTimeout(()=>{

aboutHero.style.transition = "all 1s ease";

aboutHero.style.opacity = "1";

aboutHero.style.transform = "translateY(0)";

},300);

});

}

/*====================================
COMPANY STORY SCROLL ANIMATION
====================================*/

const storySection = document.querySelector(".company-story");

if(storySection){

const storyObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

storySection.classList.add("show-story");

}

});

},{
threshold:0.3
});

storyObserver.observe(storySection);

}

/*====================================
MISSION ANIMATION
====================================*/

const missionCards = document.querySelectorAll(".mission-card, .value-card");

const missionObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.2
});

missionCards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition=".8s";

missionObserver.observe(card);

});


/*====================================
TEAM CARD ANIMATION
====================================*/

const teamCards = document.querySelectorAll(".team-card");

const teamObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.2
});

teamCards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition=".8s";

teamObserver.observe(card);

});

/*====================================
TIMELINE ANIMATION
====================================*/

const timelineItems = document.querySelectorAll(".timeline-item");

const timelineObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.2
});

timelineItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(60px)";

item.style.transition=".8s";

timelineObserver.observe(item);

});


/*====================================
CTA SCROLL ANIMATION
====================================*/

const ctaSection = document.querySelector(".about-cta");

if(ctaSection){

const ctaObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

ctaSection.style.opacity="1";
ctaSection.style.transform="translateY(0)";

}

});

},{
threshold:0.3
});

ctaSection.style.opacity="0";
ctaSection.style.transform="translateY(50px)";
ctaSection.style.transition=".9s";

ctaObserver.observe(ctaSection);

}

/*====================================
MARKETS HERO ANIMATION
====================================*/

const marketsContent = document.querySelector(".markets-content");

if(marketsContent){

marketsContent.style.opacity="0";
marketsContent.style.transform="translateY(50px)";

window.addEventListener("load",()=>{

setTimeout(()=>{

marketsContent.style.transition="1s";

marketsContent.style.opacity="1";
marketsContent.style.transform="translateY(0)";

},300);

});

}

/*====================================
MARKET CARDS ANIMATION
====================================*/

const marketCards = document.querySelectorAll(".market-card");

const marketObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.2
});

marketCards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition=".8s";

marketObserver.observe(card);

});

/*====================================
LIVE MARKET DEMO UPDATES
====================================*/

function randomMove(value, step){

    return (value + ((Math.random() - 0.5) * step)).toFixed(4);

}

setInterval(()=>{

    document.getElementById("eurusd").textContent =
        randomMove(parseFloat(document.getElementById("eurusd").textContent),0.002);

    document.getElementById("gbpusd").textContent =
        randomMove(parseFloat(document.getElementById("gbpusd").textContent),0.002);

    document.getElementById("btcusd").textContent =
        (parseFloat(document.getElementById("btcusd").textContent)+(Math.random()-0.5)*120).toFixed(2);

    document.getElementById("ethusd").textContent =
        (parseFloat(document.getElementById("ethusd").textContent)+(Math.random()-0.5)*12).toFixed(2);

    document.getElementById("gold").textContent =
        (parseFloat(document.getElementById("gold").textContent)+(Math.random()-0.5)*3).toFixed(2);

},3000);

/*====================================
NEWS CARD ANIMATION
====================================*/

const newsCards = document.querySelectorAll(".news-card");

const newsObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.2
});

newsCards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition=".8s";

newsObserver.observe(card);

});

/*====================================
MARKET SEARCH & FILTER
====================================*/

const searchInput = document.getElementById("marketSearch");
const filterButtons = document.querySelectorAll(".filter-btn");
const marketItems = document.querySelectorAll(".market-item");

let activeFilter = "all";

// Filter by category
filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

activeFilter = button.dataset.filter;

filterMarkets();

});

});

// Search

searchInput.addEventListener("keyup",filterMarkets);

function filterMarkets(){

const searchValue = searchInput.value.toLowerCase();

marketItems.forEach(item=>{

const matchesCategory =
activeFilter==="all" ||
item.dataset.category===activeFilter;

const matchesSearch =
item.textContent.toLowerCase().includes(searchValue);

if(matchesCategory && matchesSearch){

item.style.display="block";

}else{

item.style.display="none";

}

});

}

/*====================================
WATCHLIST BUTTON
====================================*/

const favoriteButtons=document.querySelectorAll(".favorite-btn");

favoriteButtons.forEach(button=>{

button.addEventListener("click",()=>{

button.classList.toggle("active");

const icon=button.querySelector("i");

if(button.classList.contains("active")){

icon.classList.remove("far");
icon.classList.add("fas");

}else{

icon.classList.remove("fas");
icon.classList.add("far");

}

});

});

/*====================================
FAQ ACCORDION
====================================*/

const faqQuestions=document.querySelectorAll(".faq-question");

faqQuestions.forEach(question=>{

question.addEventListener("click",()=>{

const answer=question.nextElementSibling;

const icon=question.querySelector("i");

document.querySelectorAll(".faq-answer").forEach(item=>{

if(item!==answer){

item.style.display="none";

}

});

document.querySelectorAll(".faq-question i").forEach(i=>{

if(i!==icon){

i.classList.remove("fa-minus");
i.classList.add("fa-plus");

}

});

if(answer.style.display==="block"){

answer.style.display="none";

icon.classList.remove("fa-minus");
icon.classList.add("fa-plus");

}else{

answer.style.display="block";

icon.classList.remove("fa-plus");
icon.classList.add("fa-minus");

}

});

});

/*====================================
MARKET INFO ANIMATION
====================================*/

const infoCards=document.querySelectorAll(".info-card");

const infoObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.2
});

infoCards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(50px)";
card.style.transition=".8s";

infoObserver.observe(card);

});

/*====================================
EDUCATION HERO ANIMATION
====================================*/

const educationHero =
document.querySelector(".education-hero-content");

if(educationHero){

educationHero.style.opacity="0";

educationHero.style.transform="translateY(50px)";

window.addEventListener("load",()=>{

setTimeout(()=>{

educationHero.style.transition="1s";

educationHero.style.opacity="1";

educationHero.style.transform="translateY(0)";

},300);

});

}

/*====================================
COURSE CARD ANIMATION
====================================*/

const courseCards=document.querySelectorAll(".course-card");

const courseObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.2
});

courseCards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition=".8s";

courseObserver.observe(card);

});

/*====================================
GLOSSARY SEARCH & FILTER
====================================*/

const glossarySearch=document.getElementById("glossarySearch");
const letterButtons=document.querySelectorAll(".letter-btn");
const termCards=document.querySelectorAll(".term-card");

let activeLetter="all";

function filterGlossary(){

const search=glossarySearch.value.toLowerCase();

termCards.forEach(card=>{

const matchesLetter=
activeLetter==="all"||
card.dataset.letter===activeLetter;

const matchesSearch=
card.innerText.toLowerCase().includes(search);

card.style.display=
(matchesLetter&&matchesSearch)?"block":"none";

});

}

if(glossarySearch){

glossarySearch.addEventListener("keyup",filterGlossary);

}

letterButtons.forEach(button=>{

button.addEventListener("click",()=>{

letterButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

activeLetter=button.dataset.letter;

filterGlossary();

});

});

/*====================================
STRATEGY CARD ANIMATION
====================================*/

const strategyCards = document.querySelectorAll(".strategy-card");

const strategyObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.2});

strategyCards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition=".8s";

strategyObserver.observe(card);

});

/*====================================
ANALYSIS CARD ANIMATION
====================================*/

const analysisCards=document.querySelectorAll(".analysis-card, .tip-box");

const analysisObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.2});

analysisCards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition=".8s";

analysisObserver.observe(card);

});

/*====================================
FAQ ACCORDION
====================================*/

const faqButtons=document.querySelectorAll(".faq-btn");

faqButtons.forEach(button=>{

button.addEventListener("click",()=>{

const content=button.nextElementSibling;

button.classList.toggle("active");

content.style.display=
content.style.display==="block"?"none":"block";

});

});

/*====================================
NEWSLETTER
====================================*/

const newsletter=document.querySelector(".newsletter-form");

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you for subscribing!");

newsletter.reset();

});

}

/*====================================
FINAL CTA ANIMATION
====================================*/

const progressCards=document.querySelectorAll(".progress-card");

const progressObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.2
});

progressCards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition=".8s";

progressObserver.observe(card);

});

function updatePreview(file){

if(!file)return;

preview.src=
URL.createObjectURL(file);

document
.querySelector(".upload-success")
.style.display="block";

}

const method =
document.getElementById("depositMethod");

const amount =
document.querySelector("input[type='number']");

if(method){

method.onchange=()=>{

document.getElementById("receiptMethod")
.innerHTML=method.value;

};

}

if(amount){

amount.onkeyup=()=>{

document.getElementById("receiptAmount")
.innerHTML="$"+amount.value;

};

}

const withdrawForm =
document.getElementById("withdrawForm");

if(withdrawForm){

withdrawForm.addEventListener("submit",(e)=>{

e.preventDefault();

document.getElementById("withdrawModal")
.style.display="flex";

});

}

document
.getElementById("closeWithdrawModal")
.onclick=()=>{

document.getElementById("withdrawModal")
.style.display="none";

};

