var timer=document.getElementById(`timer`)
var scoreElement=document.getElementById(`score`)
var highestScore=document.getElementById(`highest-score`)
var quizElement=document.getElementById(`quiz`)
var submitElement=document.getElementById(`submit`)
var questions=[
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    }
  ];

//save last score
localStorage.setItem("Score",score) 

renderHighestScore()

//retrieve highest score 
function renderHighestScore(){
    var score=localStorage.getItem("Score")
if(actualScore>score){//need to declare actualScore
  highestScore.textContent="Highest score ",actualScore
}
else{
    highestScore.textContent="Highest score ",score
}
}

function buildQuiz(){
    // variable to store the HTML output
    var output = [];
  
    // for each question...
    questions.forEach(
      (currentQuestion, index) => {
  
        // variable to store the list of possible answers
         answers = [];
  
        // and for each available answer...
        for(letter in questions.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${index}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizElement.innerHTML = output.join('');
  }




//countdown function to set the timer 
function countdown(){
    var timeleft=6
    var timeInterval=setInterval(function(){
    if(timeleft>=1){
        timeleft--
        timer.textContent=timeleft+" Seconds remaining"
        
    } 
    else{
        timer.textContent=""
        clearInterval(timeInterval)
        buildQuiz()}
    },1000)
}


//displayQuestion after a set time interval 
function displayQuestion(){
    var i=0
    var timeInterval=setInterval(function(){
        if(question[i]===undefined){
            clearInterval(timeInterval)
        }
        else{
            quizElement.textContent=JSON.stringify(question[i][i])
            i++
        }

    },2000)
}



