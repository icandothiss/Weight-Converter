const input = document.getElementById("lbsInput");
const output = document.getElementById("output");
const gramsOutput = document.getElementById("gramsOutput");
const kgOutput = document.getElementById("kgOutput");
const ozOutput = document.getElementById("ozOutput");

//eventlistener

input.addEventListener("input", inputPounds);

//functions

function inputPounds() {
  output.classList.remove("hidden");
  gramsOutput.innerHTML = input.value * 453.592;
  kgOutput.innerHTML = input.value * 0.453592;
  ozOutput.innerHTML = input.value * 16;
  if (input.value === "") {
    output.classList.add("hidden");
  }
}
