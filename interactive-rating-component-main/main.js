const submit = document.getElementById("submit");
const thankyouSection = document.getElementById("thankyou");

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