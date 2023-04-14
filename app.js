let flag = true;
const toggle = document.getElementById("togg");
const navItems = document.getElementById("navItems");
const body = document.querySelector('body');
const navList =document.querySelector('.navList');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const anextBtn = document.getElementById('anext');
const aprevBtn = document.getElementById('aprev');
const swiper = document.querySelector('.swiper');
const slider = document.querySelectorAll('.slider');
console.log(slider.length);

console.log(navList);
console.log(body);

togg.addEventListener('click',()=>{
    if(flag) {
        toggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        body.classList.toggle('overflow-hidden');
        navList.classList.toggle('expand');
        navItems.classList.toggle('cj');
        flag = false;
    } else {
        toggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        body.classList.toggle('overflow-hidden');
        navList.classList.toggle('expand');
        navItems.classList.toggle('cj');
        flag = true;
    }
})
// toggle js
const slides = document.querySelectorAll(".slides");
console.log(slides.length);
let count=0;

function show() {
    slides[count].classList.toggle('d-none');
}
show();
nextBtn.onclick = () => {
    if(count<slides.length-1) {
        slides[count].classList.toggle('d-none');
        count++;
        slides[count].classList.toggle('d-none');
        console.log(count);
    } else {
        slides[count].classList.toggle('d-none');
        count = 0;
        slides[count].classList.toggle('d-none');
        console.log(count);
    }
}
prevBtn.onclick = () => {
    if(count>0) {
        slides[count].classList.toggle('d-none');
        count --;
        slides[count].classList.toggle('d-none');
        console.log(count);
    } else {
        slides[count].classList.toggle('d-none');
        count = slides.length-1;
        slides[count].classList.toggle('d-none');
        console.log(count);
    }
}
// swiper
let swipeCount =1;
for(let i=0;i<slider.length;i++){
    console.log(slider[i].id);
}
anextBtn.onclick = () => {
    if(swipeCount<slider.length){
        swipeCount++;
        anextBtn.href = `#slide${swipeCount}`;
        console.log(anextBtn.href);
    } else {
        swipeCount = 1;
        anextBtn.href = `#slide${swipeCount}`;
        console.log(anextBtn.href);
    }
}
aprevBtn.onclick = () => {
    if(swipeCount>1){
        swipeCount--;
        aprevBtn.href = `#slide${swipeCount}`;
        console.log(aprevBtn.href);
    } else {
        swipeCount = slider.length;
        aprevBtn.href = `#slide${swipeCount}`;
        console.log(aprevBtn.href);
    }
}
