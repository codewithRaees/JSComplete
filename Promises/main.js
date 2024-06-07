const btnResolve = document.querySelector(".btn-promise");
const btnReject = document.querySelector(".btn-reject");
const p = new Promise((resolve, reject) => {
  btnResolve.addEventListener("click", () => {
    resolve("Resolve by clicking the button");
    // console.log(p);
  });
  btnReject.addEventListener("click", () => {
    reject("Rejected by clicking the button.");
    console.log(p);
  });
});

p.then((data) => {
  console.log(data);
})
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Finally promises completed");
  });
