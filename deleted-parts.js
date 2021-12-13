var question = "who founded rome"
var answers=["yo","tu","el"]
const myQuestions = [
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
//from this lane on code need to be tested
function displayMessage(){
    //mainEl.textContent=myQuestions[0].question;
    for (var i =0;i<myQuestions.length;i++){
    mainEl.textContent=JSON.stringify(myQuestions[i]);
  }}