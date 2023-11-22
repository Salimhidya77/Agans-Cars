document.getElementById("buy");
document.getElementById("buy1");
document.getElementById("buy2");

const bebo = document.getElementById("buy");
const aeo = document.getElementById("buy1");
const beo = document.getElementById("buy2");
const khyan = document.getElementById("khyan");
const toot = document.getElementById("toot");
const change = document.getElementById("change");
const boody = document.getElementById("boody");

// bebo.style.color = "orange";
// bebo.style.backgroundColor = "red";

const header = document.querySelector(".header");

// header .remove()

const mgga = document.getElementById("mgga");
const tittle = document.createElement("h1");
mgga.prepend(tittle);
const ooo = () => {
  mgga.append(tittle);
  tittle.classList.add("mgg");
  tittle.innerText = "Cairo Motor For Seals Cars ";
};
// mgga.style.marginTop="220px"
setTimeout(ooo, 3000);
const big = document.querySelector(".big");

bebo.addEventListener("click", (eo) => {
  big.style.display = "block";
  eo.preventDefault();
  khyan.style.display = "none";
});
aeo.addEventListener("click", (eo) => {
  big.style.display = "block";
  khyan.style.display = "none";
});
beo.addEventListener("click", (eo) => {
  big.style.display = "block";
  khyan.style.display = "none";
});
const boot = document.getElementById("boot");
boot.addEventListener("click", (eo) => {
  khyan.style.display = "block";
  toot.style.display = "none";

  setTimeout(() => {
    khyan.style.display = "none";
    big.style.display = "none";
  }, 3000);
});
change.addEventListener("click", (eo) => {
  boody.classList.toggle("dark");
});
