var playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

const box = document.querySelector(".box");

function playListFunc(arr) {
  const ul = document.createElement("ul");

  arr.forEach((arrObj) => {
    let li = document.createElement("li");
    li.textContent = `Author:${arrObj.author}
    Song:${arrObj.song}`;
    ul.append(li);
  });
  return ul;
}

let playListUl = playListFunc(playList);
box.append(playListUl);

//3
const btnOpenModal = document.getElementById("btnOpen");
const btnCloseModal = document.getElementById("btnClose");
const modal = document.getElementById("modal");

btnOpenModal.addEventListener("click", () => {
  modal.classList.add("modal-active");
});

btnCloseModal.addEventListener("click", () => {
  modal.classList.remove("modal-active");
});

//4
const semaforBtn = document.getElementById("semaforBtn");
const semafor = document.querySelectorAll(".circle");

semaforBtn.addEventListener("click", () => {
  if (semafor[0].classList.contains("active")) {
    semafor[0].classList.remove("active");
    semafor[1].classList.add("active");
  } else if (semafor[1].classList.contains("active")) {
    semafor[1].classList.remove("active");
    semafor[2].classList.add("active");
  } else if (semafor[2].classList.contains("active")) {
    semafor[2].classList.remove("active");
    semafor[0].classList.add("active");
  }
});
