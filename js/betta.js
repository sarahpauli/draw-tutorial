const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

const step1 = document.getElementById("s1");
const step2 = document.getElementById("s2");
const step3 = document.getElementById("s3");
const step4 = document.getElementById("s4");
const step5 = document.getElementById("s5");
const step6 = document.getElementById("s6");

// Progress Bar 

let currentActive = 1;

next.addEventListener("click", ()=>{
    currentActive++;
    if (currentActive > circles.length){
        currentActive = circles.length;
    }
    update();

    if (currentActive == 1) {
        step1.style.display = "flex";
    } else if (currentActive == 2) {
        step1.style.display = "none";
        step2.style.display = "flex";
    } else if (currentActive == 3){
        step2.style.display = "none";
        step3.style.display = "flex";
    } else if (currentActive == 4){
        step3.style.display = "none";
        step4.style.display = "flex";
    } else if (currentActive == 5){
        step4.style.display = "none";
        step5.style.display = "flex";
    } else if (currentActive == 6){
        step5.style.display = "none";
        step6.style.display = "flex";
    }
});

prev.addEventListener("click", ()=>{
    currentActive--;
    if (currentActive < 1){
        currentActive = 1;
    }
    update();
    if (currentActive == 6) {
        step6.style.display = "flex";
    } else if (currentActive == 5) {
        step6.style.display = "none";
        step5.style.display = "flex";
    } else if (currentActive == 4) {
        step5.style.display = "none";
        step4.style.display = "flex";
    } else if (currentActive == 3){
        step4.style.display = "none";
        step3.style.display = "flex";
    } else if (currentActive == 2){
        step3.style.display = "none";
        step2.style.display = "flex";
    } else if (currentActive == 1){
        step2.style.display = "none";
        step1.style.display = "flex";
    }
});

function update(){
    circles.forEach((circle, idx) => {
        if (idx < currentActive){
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    const actives = document.querySelectorAll(".active");

    progress.style.width = ((actives.length -1) / (circles.length -1)) * 100 + "%";

    if (currentActive === 1){
        prev.disabled = true;
    } else if (currentActive === circles.length){
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}
