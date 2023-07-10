const diceWrapper = document.querySelector(".dice-wrapper");

diceWrapper.addEventListener("touchstart", function () {
  diceWrapper.classList.add("hovered");
});

diceWrapper.addEventListener("click", async function () {
  diceWrapper.classList.remove("hovered");
  await new Promise((resolve) => setTimeout(resolve, 0));
  fetchAdvice();
});

window.addEventListener("load", fetchAdvice);

async function fetchAdvice() {
  try {
    const response = await fetch(
      `https://api.adviceslip.com/advice?t=${Math.random()}`
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
