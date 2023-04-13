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
