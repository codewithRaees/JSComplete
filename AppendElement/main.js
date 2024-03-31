// const firstimage = document.querySelector("img");
const container = document.querySelector(".container");

// for (let i = 1; i <= 100; i++) {
//   const newimage = firstimage.cloneNode();
//   newimage.src = ``;
//   container.append(newimage);
// }

for (let i = 2; i <= 100; i++) {
  const newimage = document.createElement("img");
  const paragraph = document.createElement("span");

  newimage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  paragraph.innerText = i;
  container.append(newimage, paragraph);
  //   paragraph.remove();
}
