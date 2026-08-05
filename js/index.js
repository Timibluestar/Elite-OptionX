// JavaScript Starts Here

console.log("Elite OptionX Website Loaded Successfully");

// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");

const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    menuBtn.innerHTML = navbar.classList.contains("active")

        ? '<i class="fas fa-times"></i>'

        : '<i class="fas fa-bars"></i>';

});

// Sticky Header

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

// Hero Fade-in Animation

window.addEventListener("load",()=>{

    const hero=document.querySelector(".hero-content");

    hero.style.opacity="0";

    hero.style.transform="translateY(40px)";

    setTimeout(()=>{

        hero.style.transition="all 1s ease";

        hero.style.opacity="1";

        hero.style.transform="translateY(0)";

    },300);

});


const tradeButtons = document.querySelectorAll(
".buy-btn, .sell-btn"
);

tradeButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        alert(
            "Create an account to start trading."
        );

    });

});

const tradeButtons=document.querySelectorAll(".trade-buttons button");

tradeButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        alert("Login or Create an Account to Start Trading.");

    });

});

// Wallet Card Animation

const walletCards = document.querySelectorAll(".wallet-card");

walletCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

const featureCards = document.querySelectorAll(".feature-card");

const featureObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

featureCards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all .6s ease";

    featureObserver.observe(card);

});

/*=========================
 TESTIMONIAL SLIDER
=========================*/

const testimonials = document.querySelectorAll(".testimonial");

const nextBtn = document.querySelector(".next");

const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

function showSlide(index){

    testimonials.forEach(slide=>{

        slide.classList.remove("active");

    });

    testimonials[index].classList.add("active");

}

nextBtn.addEventListener("click",()=>{

    currentSlide++;

    if(currentSlide>=testimonials.length){

        currentSlide=0;

    }

    showSlide(currentSlide);

});

prevBtn.addEventListener("click",()=>{

    currentSlide--;

    if(currentSlide<0){

        currentSlide=testimonials.length-1;

    }

    showSlide(currentSlide);

});

setInterval(()=>{

    currentSlide++;

    if(currentSlide>=testimonials.length){

        currentSlide=0;

    }

    showSlide(currentSlide);

},5000);

/*=========================
 FAQ ACCORDION
=========================*/

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        const icon = question.querySelector("span");

        if (answer.style.maxHeight) {

            answer.style.maxHeight = null;
            icon.textContent = "+";

        } else {

            document.querySelectorAll(".faq-answer").forEach(item => {

                item.style.maxHeight = null;

            });

            document.querySelectorAll(".faq-question span").forEach(item => {

                item.textContent = "+";

            });

            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.textContent = "−";

        }

    });

});

/*=========================
BACK TO TOP BUTTON
=========================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*=========================
NEWSLETTER FORM
=========================*/

const newsletter = document.querySelector(".newsletter");

newsletter.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Thank you for subscribing!");

    newsletter.reset();

});

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