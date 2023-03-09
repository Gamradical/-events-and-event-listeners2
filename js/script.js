var fans = document.querySelector(".fans");
var fish = document.querySelector(".fish");
var pets = document.querySelector(".pets");
var toggle = document.querySelector("#toggle");
var ball = document.querySelector(".ball");
var cat = document.querySelector("h1");
var body = document.querySelector("body");

fans.addEventListener("mouseover", function () {
  fans.innerText = "123K";
});
fish.addEventListener("mouseover", function () {
  fish.innerText = "47K";
});
pets.addEventListener("mouseover", function () {
  pets.innerText = "20K";
});

toggle.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    ball.classList.remove("move-right");
    cat.innerText = "Stealth Quincy";
  } else {
    body.classList.add("light");
    ball.classList.add("move-right");
    cat.innerText = "Party Quincy";
  }
});
