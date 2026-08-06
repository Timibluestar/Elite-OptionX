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

new Chart(document.getElementById("financeChart"),{

type:"line",

data:{

labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],

datasets:[

{

label:"Deposits",

data:[12000,18000,15000,21000,24000,27000,32000],

borderColor:"#16a34a",

backgroundColor:"rgba(22,163,74,.15)",

fill:true,

tension:.4

},

{

label:"Withdrawals",

data:[5000,8000,6000,9000,11000,10000,13000],

borderColor:"#dc2626",

backgroundColor:"rgba(220,38,38,.15)",

fill:true,

tension:.4

}

]

}

});

new Chart(document.getElementById("investorChart"),{

type:"bar",

data:{

labels:["Jan","Feb","Mar","Apr","May","Jun"],

datasets:[{

label:"New Investors",

data:[80,110,95,140,170,210],

backgroundColor:"#2563eb"

}]

}

});

new Chart(document.getElementById("assetChart"),{

type:"doughnut",

data:{

labels:["BTC","ETH","USDT","Gift Cards"],

datasets:[{

data:[40,25,30,5],

backgroundColor:[

"#f7931a",

"#627eea",

"#26a17b",

"#8b5cf6"

]

}]

}

});

new Chart(document.getElementById("revenueChart"),{

type:"line",

data:{

labels:["Q1","Q2","Q3","Q4"],

datasets:[{

label:"Revenue",

data:[120000,180000,250000,340000],

borderColor:"#9333ea",

backgroundColor:"rgba(147,51,234,.15)",

fill:true,

tension:.4

}]

}

});

//Investor Search

//Status Filter

//Country Filter

//Bulk Actions

//Pagination

//Table Sorting

Export

//Dropdown Actions

const selectAll = document.getElementById("selectAll");

if (selectAll) {

    selectAll.addEventListener("change", function () {

        document.querySelectorAll(".investor-table tbody input[type='checkbox']")
            .forEach(box => {

                box.checked = this.checked;

            });

    });

}