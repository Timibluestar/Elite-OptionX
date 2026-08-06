const approveBtn = document.getElementById("approveBtn");

const checks = document.querySelectorAll(
".verification-section input[type='checkbox']"
);

checks.forEach(box=>{

    box.addEventListener("change",()=>{

        const allChecked=[...checks].every(c=>c.checked);

        approveBtn.disabled=!allChecked;

    });

});