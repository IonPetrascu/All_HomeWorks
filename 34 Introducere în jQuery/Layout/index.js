const headerTabs =Array.from(document.querySelectorAll(".header__tab"));
const bodyBoxes =Array.from(document.querySelectorAll(".box__body"));
console.log(headerTabs);

/* headerTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    alert(`${tab}`);
  });
}); */

const clearActiveClass = (element,className = "active")=>{
    element.find(item => item.classList.remove(`${className}`) )
}
const setActiveClass = (element,index,className = "active")=>{
    element[index].classList.add(`${className}`) 
}

const myFunc = (item, index) => {
  item.addEventListener("click", () => {
    console.log(item);

    clearActiveClass(headerTabs)
    clearActiveClass(bodyBoxes)
    setActiveClass(headerTabs,index)
    setActiveClass(bodyBoxes,index)
  });
};

headerTabs.forEach(myFunc);
