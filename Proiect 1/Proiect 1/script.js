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

AOS.init();




   
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
let cookiecook = getCookie("cookiecook"),
cookiewin = document.getElementsByClassName('cookie_notice')[0];    
if (cookiecook != "no") {
 
    cookiewin.style.display="block"; 
    
    document.getElementById("cookie_close").addEventListener("click", function(){
        cookiewin.style.display="none";    
       
        let date = new Date;
        date.setDate(date.getDate() + 1);    
        document.cookie = "cookiecook=no; path=/; expires=" + date.toUTCString();               
    });
}