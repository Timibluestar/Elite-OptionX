console.log("Elite OptionX Dashboard Loaded");
/*====================================
DASHBOARD GREETING
====================================*/

const hour = new Date().getHours();
const heading = document.querySelector(".dashboard-header h2");

if (heading) {

    let greeting = "Welcome";

    if (hour < 12) {

        greeting = "Good Morning";

    } else if (hour < 18) {

        greeting = "Good Afternoon";

    } else {

        greeting = "Good Evening";

    }

    heading.textContent = `${greeting}, John Doe`;

}

/*====================================
PROFILE IMAGE PREVIEW
====================================*/

const uploadInput = document.querySelector('.upload-btn input');
const avatarImage = document.querySelector('.profile-avatar img');

if (uploadInput && avatarImage) {

    uploadInput.addEventListener('change', function () {

        const file = this.files[0];

        if (file) {

            avatarImage.src = URL.createObjectURL(file);

        }

    });

}

/*====================================
AUTO SELECT DEPOSIT METHOD
====================================*/

const depositButtons =
document.querySelectorAll(".deposit-btn");

depositButtons.forEach(button=>{

button.onclick=()=>{

const select =
document.getElementById("depositMethod");

if(!select) return;

switch(button.dataset.method){

case "btc":
select.selectedIndex=0;
break;

case "eth":
select.selectedIndex=1;
break;

case "usdt":
select.selectedIndex=2;
break;

case "giftcard":
select.selectedIndex=5;
break;

}

document
.getElementById("depositForm")
.scrollIntoView({

behavior:"smooth"

});

};

});

/*====================================
COPY WALLET ADDRESS
====================================*/

document.querySelectorAll(".copy-btn").forEach(button=>{

button.onclick=()=>{

const input=document.getElementById(

button.dataset.copy

);

navigator.clipboard.writeText(

input.value

);

button.innerHTML="✔ Copied";

setTimeout(()=>{

button.innerHTML="Copy Address";

},2000);

};

});

/*====================================
USDT NETWORK SWITCH
====================================*/

const usdtWallets = {

    TRC20: {

        address: "YOUR_TRC20_WALLET",

        qr: "../images/qr/usdt-trc20.png"

    },

    ERC20: {

        address: "YOUR_ERC20_WALLET",

        qr: "../images/qr/usdt-erc20.png"

    },

    BEP20: {

        address: "YOUR_BEP20_WALLET",

        qr: "../images/qr/usdt-bep20.png"

    }

};

const networkSelect = document.getElementById("usdtNetwork");

if(networkSelect){

function updateWallet(){

const network = networkSelect.value;

document.getElementById("walletAddress").value =
usdtWallets[network].address;

document.getElementById("walletQR").src =
usdtWallets[network].qr;

}

networkSelect.addEventListener("change", updateWallet);

updateWallet();

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

/*====================================
WITHDRAWAL REQUEST
====================================*/

const withdrawForm = document.getElementById("withdrawForm");

if(withdrawForm){

withdrawForm.addEventListener("submit",function(e){

e.preventDefault();

alert(
"Your withdrawal request has been submitted successfully.\n\nStatus: Pending Admin Approval."
);

});

}

/*====================================
WITHDRAWAL CALCULATOR
====================================*/

const withdrawInput = document.getElementById("withdrawAmount");

if(withdrawInput){

withdrawInput.addEventListener("input",function(){

const amount = parseFloat(this.value)||0;

/*
Example Fee

Later PHP can calculate
based on account level
*/

const fee = amount*0.02;

const receive = amount-fee;

document.getElementById("withdrawFee").innerHTML=
"$"+fee.toFixed(2);

document.getElementById("receiveAmount").innerHTML=
"$"+receive.toFixed(2);

document.getElementById("receiptAmount").innerHTML=
"$"+amount.toFixed(2);

document.getElementById("receiptFee").innerHTML=
"$"+fee.toFixed(2);

document.getElementById("receiptReceive").innerHTML=
"$"+receive.toFixed(2);

});

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

/*====================================
TRANSACTION FILTER (UI)
====================================*/

const filterType = document.getElementById("filterType");
const filterStatus = document.getElementById("filterStatus");

if (filterType && filterStatus) {

    filterType.addEventListener("change", () => {
        console.log("Selected Type:", filterType.value);
    });

    filterStatus.addEventListener("change", () => {
        console.log("Selected Status:", filterStatus.value);
    });

}

/*====================================
TRANSACTION SEARCH
====================================*/

const searchInput =
document.getElementById("transactionSearch");

if(searchInput){

searchInput.addEventListener("keyup",function(){

const filter=this.value.toLowerCase();

const rows=document.querySelectorAll(

"#transactionTable tbody tr"

);

rows.forEach(row=>{

row.style.display=

row.innerText.toLowerCase().includes(filter)

? ""

: "none";

});

});

}

/*====================================
RECEIPT MODAL
====================================*/

document.querySelectorAll(".view-btn").forEach(btn=>{

btn.onclick=()=>{

document.getElementById("transactionModal")
.style.display="flex";

};

});

document.getElementById("closeReceipt").onclick=()=>{

document.getElementById("transactionModal")
.style.display="none";

};
