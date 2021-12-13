var timerElement = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var myBtn=document.getElementById(`btn1`);
var myBtn2=document.getElementById(`btn2`)
var myBtn3=document.getElementById(`btn3`)
var myBtn4=document.getElementById(`btn4`)
var scoreEl=document.getElementById(`finalscore`)
var questions= ["Who invented JavaScript?","Which one of these is a JavaScript package manager?","Which tool can you use to ensure code quality?"]
var answers=[{a: "Douglas Crockford",b: "Sheryl Sandberg",c: "Brendan Eich"},
              {a: "Node.js", b: "TypeScript", c: "npm"},
              {a: "jQuery",b: "RequireJS",c: "ESLint"}]
var solutions=["c","c","c"]
var quizEl = document.createElement("div");
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var question=document.createElement("p")
var quizAnswer=document.createElement("p")
quizAnswer.setAttribute("id","key")
var score=0
scoreEl.textContent=score
// function to generate timer 
function countdown() {
  var timeLeft = 30;
  var time = setInterval(function () {
    if (timeLeft >= 1) {
      timerElement.textContent = timeLeft;
      timeLeft--;
    } else {
      timerElement.textContent = '';
      clearInterval(time);
      // Call the `displayMessage()` function
      //nextQuestion2();
    }
  }, 1000);
}

myBtn.addEventListener("click",countdown)

//first question
function nextQuestion1(){
  countdown()
  question.textContent=questions[0]
  li1.textContent = answers[0].a;
  li2.textContent = answers[0].b;
  li3.textContent = answers[0].c;
  document.body.appendChild(quizEl);
  quizEl.appendChild(question);
  quizEl.appendChild(listEl);
  listEl.appendChild(li1);
  listEl.appendChild(li2);
  listEl.appendChild(li3);
  document.body.appendChild(quizAnswer)
  quizAnswer.textContent="Your answer: "
}
//second question 
function nextQuestion2(){
  question.textContent=questions[1]
  li1.textContent = answers[1].a;
  li2.textContent = answers[1].b;
  li3.textContent = answers[1].c;
  document.body.appendChild(quizEl);
  quizEl.appendChild(question);
  quizEl.appendChild(listEl);
  listEl.appendChild(li1);
  listEl.appendChild(li2);
  listEl.appendChild(li3);
  document.body.appendChild(quizAnswer)
  quizAnswer.textContent="Your answer: "
  }

  //third question 
function nextQuestion3(){
  question.textContent=questions[2]
  li1.textContent = answers[2].a;
  li2.textContent = answers[2].b;
  li3.textContent = answers[2].c;
  document.body.appendChild(quizEl);
  quizEl.appendChild(question);
  quizEl.appendChild(listEl);
  listEl.appendChild(li1);
  listEl.appendChild(li2);
  listEl.appendChild(li3);
  document.body.appendChild(quizAnswer)
  quizAnswer.textContent="Your answer: "
  }

myBtn2.addEventListener("click",nextQuestion1)
myBtn3.addEventListener("click",nextQuestion2)
myBtn4.addEventListener("click",nextQuestion3)

document.addEventListener("keydown", keydownAction);
//take the user input and validation
function keydownAction(event) {
  var keyPress = event.key;
  if(keyPress==1||keyPress==2||keyPress==3){
     document.querySelector("#key").textContent = "Your answer: "+keyPress;
     score++
}
else {document.querySelector("#key").textContent = "Your answer is not valid"}
  
}