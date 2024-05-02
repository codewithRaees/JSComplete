// const card = document.querySelector(".card");
const container = document.querySelector(".txtname");
const par = document.querySelector("p");
const form = document.querySelector("form");
const h1 = document.querySelector("h1");

form.addEventListener("keypress", (e) => {
  console.log(e.key);
});

h1.addEventListener("keypress", (e) => {
  console.log(e.key);
  console.log(e.code);
});
