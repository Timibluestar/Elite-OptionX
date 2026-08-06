const modal = document.getElementById("depositModal");

const reviewButtons = document.querySelectorAll(".btn-review");

const closeModal = document.querySelector(".close-modal");

reviewButtons.forEach(button=>{

button.addEventListener("click",()=>{

modal.style.display="flex";

});

});

closeModal.onclick=()=>{

modal.style.display="none";

};

window.onclick=(e)=>{

if(e.target===modal){

modal.style.display="none";

}

};

let scale = 1;
let rotation = 0;

const receipt = document.getElementById("receiptImage");

document.getElementById("zoomIn").onclick = () => {
    scale += 0.2;
    receipt.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
};

document.getElementById("zoomOut").onclick = () => {
    if (scale > 0.4) {
        scale -= 0.2;
        receipt.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
    }
};

document.getElementById("rotateImage").onclick = () => {
    rotation += 90;
    receipt.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
};