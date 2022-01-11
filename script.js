window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  //Vis start skærm
  /*document.querySelector("#forside_skaerm").classList.remove("hide");
  document
    .querySelector("#forside_knap")
    .addEventListener("click", removeScreen);*/

  document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}
/*
function removeScreen() {
  document.querySelector("#forside_skaerm").classList.add("hide");
}*/

function toggleMenu() {
  console.log("toggleMenu");
  document.querySelector("#topnav1").classList.toggle("hidden");

  let erSkjult = document
    .querySelector("#topnav1")
    .classList.contains("hidden");

  if (erSkjult == true) {
    document.querySelector("#menuknap").textContent = "☰";
  } else {
    document.querySelector("#menuknap").textContent = "X";
  }
}
