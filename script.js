const diceImage = document.querySelector(".dice-wrapper");

diceImage.addEventListener("click", fetchAdvice);

window.addEventListener("load", fetchAdvice);

async function fetchAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    const advice = data.slip.advice;

    const adviceId = document.getElementById("adviceId");
    const adviceText = document.getElementById("adviceText");
    adviceId.textContent = `Advice #${data.slip.id}`;
    adviceText.innerHTML = `<q>${advice}</q>`;
  } catch (error) {
    console.log("Error fetching advice:", error);
  }
}
