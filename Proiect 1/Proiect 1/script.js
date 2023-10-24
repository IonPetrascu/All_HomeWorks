btnMobile = document.querySelector(".nav-icon-btn");
btn = document.querySelector(".nav-icon");
navItems = document.querySelector(".nav__items");
headerWrapper = document.querySelector(".header__wrapper");

header = document.getElementById(header);

btnMobile.addEventListener("click",()=>{
    
    btn.classList.toggle("nav-icon--active");
    if(btn.classList.contains("nav-icon--active")){
        navItems.style.display = "flex";


       
        headerWrapper.style.alignItems = "center";
        headerWrapper.style.justifyContent = "center";
        headerWrapper.style.flexDirection = "column";
        navItems.style.flexDirection = "column";

        

    }else{
        navItems.style.display = "none";
        headerWrapper.style.justifyContent = "space-between";
        headerWrapper.style.flexDirection = "row";
    }
})