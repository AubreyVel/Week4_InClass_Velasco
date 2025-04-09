"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Aubrey Velasco
      Date:   4-9-2025 

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions
// step3
let timeID;
// step4
let questionList = document.querySelectorAll("div#quiz input");
// step5
startQuiz.onclick = function () {

   overlay.className = "showquiz";

   timeID = window.setInterval(countdown, 1000);

}

// step 6
function countdown() { 
   if (timeLeft == 0){
      clearInterval(timeID)//6a

      let totalCorrect = checkAnswers()//6b
      
      if (totalCorrect == correctAnswers.length){
         window.alert("Congratulations, you got 100%");
      }
      else { //step 6c
         timeLeft = quizTime
         quizClock.value = timeLeft
         overlay.className = "hidequiz"
         window.alert("You got "+totalCorrect+" out of "+correctAnswers.length +" questions")
      }
   }
   else { //step 7
      timeLeft--;
      quizClock.value = timeLeft
   }
}














// // Declare the ID for timed commands
// let timeID;

// // and the node list for questions
// let questionList = document.querySelectorAll("div#quiz input");

// startQuiz.onclick = function()   
// {

// }


// function countdown() {
//    if (timeLeft ==0 ){
//       clearInterval(timeID);
//       let totalCorrect = correctAnswers.length;
//       if (totalCorrect == 5) {
//       window.alert("Congratulations, you got a 100%");
//       }
//       else {
//       window.alert("You got "+totalCorrect+" out of 5 questions")
//       }
//    }



// }


















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

