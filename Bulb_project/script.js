const box = document.querySelector(".box");
const button = document.querySelector("button");
button.addEventListener("click", () => {
  if (button.textContent === "OFF") {
    button.textContent = "ON";
    button.classList.add("is-on");
    box.style.backgroundColor = "yellow";
  } else {
    button.textContent = "OFF";
    button.classList.remove("is-on");
    box.style.backgroundColor = "black";
  }
});
