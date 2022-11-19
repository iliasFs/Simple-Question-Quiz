let form = document.querySelector("#quiz-form");
let answerInputs = document.querySelectorAll(".answer");
let questions = document.querySelectorAll(".question-item");
let alert = document.querySelector("#alert");
let checkedAnswers = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkedAnswers = Array.from(answerInputs).filter((item) => {
    return item.checked == true;
  });

  let rightAnswers = checkedAnswers.filter((item) => item.value == "true");
  let wrongAnswers = checkedAnswers.filter((item) => item.value == "false");
  rightAnswers.forEach((item) => questions.classList.add("correct"));
  console.log(rightAnswers);
});
