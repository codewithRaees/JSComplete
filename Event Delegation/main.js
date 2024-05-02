const card = document.querySelector(".card");
const container = document.querySelector(".container");
let count = 1;
card.addEventListener("click", () => {
  const newcard = document.createElement("div");
  newcard.classList.add("heading");
  newcard.innerText = count++;
  // newcard.addEventListener("click", () => {
  //   newcard.remove();
  //   count--;
  // });
  container.append(newcard);
});
container.addEventListener("click", (e) => {
  if (e.target !== container) {
    e.target.remove();
    count--;
  }
});
// for (let i = 1; i <= 100; i++) {
//   const newimage = firstimage.cloneNode();
//   newimage.src = ``;
//   container.append(newimage);
// }

// for (let i = 2; i <= 100; i++) {
//   const newimage = document.createElement("img");
//   const paragraph = document.createElement("span");

//   newimage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
//   paragraph.innerText = i;
//   container.append(newimage, paragraph);
//   //   paragraph.remove();
// }
