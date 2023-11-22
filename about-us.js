const Primary = document.getElementsByClassName(".btn btn-primary");
const Secondary = document.getElementsByClassName(".btn btn-Secondary");
const Success = document.getElementsByClassName(".btn btn-Success");
const Danger = document.getElementsByClassName(".btn btn-Danger");
const Warning = document.getElementsByClassName(".btn btn-Warning");
const Info = document.getElementsByClassName(".btn btn-Info");
const contener = document.getElementById("contener");
const tite = document.getElementById("tite");
contener.addEventListener("click", (eo) => {
  switch (eo.target.className) {
    case "btn btn-primary":
      tite.innerText = "primary";
      tite.style.marginTop = "20px";
      break;
    case "btn btn-Secondary":
      tite.innerText = "Secondary";
      tite.style.marginTop = "20px";
      break;
    case "btn btn-Success":
      tite.innerText = "Success";
      tite.style.marginTop = "20px";
      break;
    case "btn btn-primary":
      tite.innerText = "primary";
      tite.style.marginTop = "20px";
      break;
    case "btn btn-primary":
      tite.innerText = "primary";
      tite.style.marginTop = "20px";
      break;
    case "btn btn-primary":
      tite.innerText = "primary";
      tite.style.marginTop = "20px";
      break;
    default:
      break;
  }
});
