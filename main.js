const display = document.getElementById("display-heart")
const button = document.getElementById("heart-button")

button.onclick = function () {
  display.textContent += "😍"
}