const div = document.getElementById("div");
let textarea = document.getElementById("textarea");

document.addEventListener("keydown", (event) => {
  if ((event.code == "KeyE" && event.ctrlKey) || event.metaKey) {
    textarea.classList.toggle("active");
    event.preventDefault();
  }
  if ((event.code == "KeyS" && event.ctrlKey) || event.metaKey) {
    event.preventDefault();
    textToDiv(textarea);
    textarea.classList.remove("active");
    textarea.value = "";
  }
});

function textToDiv(textarea) {
  let divText = document.createElement("div");
  divText.innerText = textarea.value;
  textarea.after(divText);
}

//size box

let x = "300px";
let y = "300px";
let box = document.querySelector(".box");
let smallBox = document.querySelector(".smallBox");
box.style.width = x;
box.style.height = y;
smallBox.addEventListener("mousedown", down);
function down() {
  document.addEventListener("mousemove", myFunction);
  smallBox.addEventListener("mouseup", place);
}
function place() {
  document.removeEventListener("mousemove", myFunction);
}
function myFunction(e) {
  x = e.clientX;
  y = e.clientY;
  box.style.width = x + "px";
  box.style.height = y + "px";
}
