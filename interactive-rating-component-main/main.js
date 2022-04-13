const submit = document.getElementById("submit");

// 
const scores = document.querySelectorAll(".score");
scores.forEach((scoreElement) => {
  scoreElement.addEventListener("click", function () {
    scores.forEach((s) => {
      s.classList.remove("selected");
    });
    scoreElement.classList.add("selected");
  });
});

function onSubmit() {
  const startState = document.getElementById("start-state");
  const thankyouSection = document.getElementById("thankyou");
  startState.style.display = 'none';
  thankyouSection.style.display = 'block';
}