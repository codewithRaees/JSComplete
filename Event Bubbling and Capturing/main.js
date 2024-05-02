const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const pink = document.querySelector(".pink");

green.addEventListener("click", () => {
  console.log("Green even listener");
});
blue.addEventListener("click", () => {
  console.log("blue even listener");
});
pink.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("pink even listener");
});
