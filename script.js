const diceWrapper = document.querySelector(".dice-wrapper");

window.addEventListener("load", fetchAdvice);

diceWrapper.addEventListener("touchstart", function () {
  diceWrapper.blur();
});

diceWrapper.addEventListener("click", function () {
  diceWrapper.blur();
  fetchAdvice();
});

async function fetchAdvice() {
  try {
    const response = await fetch(
      `https://api.adviceslip.com/advice?param=${Math.random()}`
    );
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
