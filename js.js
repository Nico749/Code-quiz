var timerElement = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var myBtn1=document.getElementById('submitscore')
var myBtn2=document.getElementById(`btn2`)
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
//var quizAnswer=document.createElement("p")
//quizAnswer.setAttribute("id","key")


// function to generate timer 
var timeLeft = 30;
function countdown() {
  
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
  li1.addEventListener("click",function(){
    timeLeft+=20
  })
  listEl.appendChild(li2);
  li2.addEventListener("click",function(){
    timeLeft+=20
  })
  listEl.appendChild(li3);
  li3.addEventListener("click",function(){
    var message=document.createElement("p")
    message.textContent="Correct"
    li3.appendChild(message)
    setTimeout(nextQuestion2, 1500);
  })
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
  li3.addEventListener("click",function(){
    setTimeout(nextQuestion3, 1500);
  })
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
  listEl.appendChild(li2);
  listEl.appendChild(li3);
  li3.addEventListener("click",function(){
     setTimeout(takeScore, 1500);
  })
}

myBtn2.addEventListener("click",nextQuestion1)
myBtn1.addEventListener("click",takeScore)


function takeScore() {
  var x = document.createElement("input")
  var y= document.createElement("input")
  var btn=document.createElement("button")
  x.setAttribute("type", "text")
  x.setAttribute("placeholder", "Username")
  x.setAttribute("id","username")
  y.setAttribute("type", "text")
  y.setAttribute("placeholder", "Score")
  y.setAttribute("id","score")
  var text = document.createTextNode("Submit");
  btn.appendChild(text)
  document.body.appendChild(btn)
  document.body.appendChild(x)
  document.body.appendChild(y)
  
  //these 2 lines don't work
  var nickname = document.querySelector("#username").value;
  var totalscore = document.querySelector("#score").value;
  
  btn.addEventListener("click", function(event) {
  //alert("great")
  event.preventDefault();
  localStorage.setItem("username", nickname);
  localStorage.setItem("totalscore", totalscore);
  renderLastScore();
  }
);
}

function renderLastScore() {
  //alert("ciao")
 var name = localStorage.getItem("username");
 // var score = localStorage.getItem("totalscore");
  var x = document.createElement("p")
  var y= document.createElement("p")
  document.body.appendChild(x)
  document.body.appendChild(y)
  x.textContent = name;
  //y.textContent = score;
}




