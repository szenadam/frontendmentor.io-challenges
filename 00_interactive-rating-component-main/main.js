let selected = '';

const scores = document.querySelectorAll(".score");
scores.forEach((scoreElement) => {
  scoreElement.addEventListener("click", function () {
    scores.forEach((s) => {
      s.classList.remove("selected");
    });
    selected = scoreElement.textContent;
    scoreElement.classList.add("selected");
  });
});

function onSubmit() {
  const startState = document.getElementById("start-state");
  const thankyouSection = document.getElementById("thankyou");
  startState.style.display = 'none';
  thankyouSection.style.display = 'flex';
  const selectedText = `You selected ${selected} out of 5`;
  const selectedElement = document.getElementById('selected-element');
  selectedElement.innerText = selectedText;
}