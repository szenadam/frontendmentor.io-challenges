const submit = document.getElementById("submit");
const thankyouSection = document.getElementById("thankyou");

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");

let selected = "";

submit.addEventListener("click", function (e) {
  thankyouSection.style.display = "block";
});

one.addEventListener("click", function (e) {
  console.log(selected);
  if (selected === "one") {
    one.classList.remove("selected");
    selected = "";
  } else {
    selected = "one";
    one.classList.add("selected");
  }
});

two.addEventListener("click", function (e) {
  console.log(selected);
  if (selected === "two") {
    two.classList.remove("selected");
  } else {
    two.classList.add("selected");
  }
});

three.addEventListener("click", function (e) {
  console.log(selected);
  if (selected === "three") {
    three.classList.remove("selected");
  } else {
    three.classList.add("selected");
  }
});

four.addEventListener("click", function (e) {
  if (selected === "four") {
    four.classList.remove("selected");
  } else {
    four.classList.add("selected");
  }
});

five.addEventListener("click", function (e) {
  if (selected === "five") {
    five.classList.remove("selected");
  } else {
    five.classList.add("selected");
  }
});
