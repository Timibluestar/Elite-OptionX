console.log("Elite OptionX Admin Panel Loaded");
/*====================================
INVESTOR SEARCH
====================================*/

const search = document.getElementById("investorSearch");

if(search){

search.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

document.querySelectorAll("#investorTable tbody tr")

.forEach(row=>{

row.style.display=row.innerText
.toLowerCase()
.includes(value)

? ""

: "none";

});

});

}

/*====================================
KYC REVIEW MODAL
====================================*/

const kycModal = document.getElementById("kycModal");

document.querySelectorAll(".review-btn").forEach(button => {

    button.addEventListener("click", () => {

        kycModal.style.display = "flex";

    });

});

document.getElementById("closeKycModal")?.addEventListener("click", () => {

    kycModal.style.display = "none";

});
/*====================================
DEPOSIT REVIEW MODAL
====================================*/

const depositModal =
document.getElementById("depositReviewModal");

document.querySelectorAll(".reviewDeposit").forEach(button=>{

button.onclick=()=>{

depositModal.style.display="flex";

};

});

document
.getElementById("closeDepositReview")
?.addEventListener("click",()=>{

depositModal.style.display="none";

});

function animateCounter(id,end,duration=1800){

    const element=document.getElementById(id);

    if(!element) return;

    let start=0;

    const increment=end/(duration/16);

    const timer=setInterval(()=>{

        start+=increment;

        if(start>=end){

            start=end;

            clearInterval(timer);

        }

        element.textContent=Math.floor(start).toLocaleString();

    },16);

}

animateCounter("totalInvestors",1285);

animateCounter("pendingApprovals",17);

animateCounter("pendingKyc",12);

animateCounter("supportTickets",4);

animateCounter("activeUsers",963);