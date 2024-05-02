// // const card = document.querySelector(".card");
const container = document.querySelector(".txtname");
// const par = document.querySelector("p");
const form = document.querySelector("form");

// container.addEventListener("click", () => {
//   console.log("Input Clicked");
// });

// container.addEventListener("dblclick", () => {
//   console.log("Double Clicked");
// });
// container.addEventListener("input", (e) => {
//   console.log(e.target.value);
//   par.innerText = e.target.value;
// });
form.addEventListener("click", (e) => {
  console.log(e);
});
container.addEventListener("keypress", (e) => {
  console.log("KeyDown event Fired");
});
