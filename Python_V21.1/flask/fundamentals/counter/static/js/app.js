const incrementSlider = document.querySelector("#increment-val");
const incrementBtn = document.querySelector("#increment-btn");
const resetBtn = document.querySelector("#reset-btn");

incrementBtn.textContent = "+" + incrementSlider.value;
incrementSlider.addEventListener("input", (event) => {
  incrementBtn.textContent = "+" + event.target.value;
});
resetBtn.addEventListener("click", (event) => {
  document.location = "/destroy-session";
});
