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