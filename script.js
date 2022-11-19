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

  checkedAnswers.forEach((answer) => {
    const isCorrect = answer.value === "true";

    if (isCorrect) {
      answer.closest(".question-item").classList.add("correct");
      answer.closest(".question-item").classList.remove("incorrect");
    } else {
      answer.closest(".question-item").classList.add("incorrect");
      answer.closest(".question-item").classList.remove("correct");
    }
  });
  rightAnswers = checkedAnswers.filter((answer) => answer.value === "true");

  
   function showAlert(){
    
   }
  
  if(rightAnswers.length === 3){
    alert.style.display = "block";
}

setTimeout(()=>{
  alert.style.display = 'none'
  },1000)

});
