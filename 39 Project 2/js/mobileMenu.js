const burger = document.querySelector(".burger");
const mobileNav = document.querySelector(".header__nav");


burger.addEventListener("click",()=>{
    burger.classList.toggle("active")
    mobileNav.classList.toggle("mobile-active")
    document.body.classList.toggle("no-scroll")
})