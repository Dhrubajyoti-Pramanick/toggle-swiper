let flag = true;
const toggle = document.getElementById("togg");
const navItems = document.getElementById("navItems");
const body = document.querySelector('body');
console.log(body);
const navList =document.querySelector('.navList');
console.log(navList);

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

// for(let i=0;i<slides.length;i++){
//     if(document.getElementById('next').onclick = ()=>{
//         if(count<3) {
//             count++;
//             slides[count].classList.toggle('d-block');
//         } else {
//             count = 0;
//             slides[count].classList.toggle('d-block');
//         }
//     });
// }