const quizDB = [
    {
        question: "Q1: What is full form of HTML?",
        a: "Hello To My Land",
        b: "HyperText Mark Up lagnguage",
        c: "Hey Text Markup Language",
        d: "Hyper Text Markup Language",
        ans:"ans4"
    },
    {
        question: "Q2: What is full form of CSS?",
        a : "Cascade Style Sheet",
        b: "Cascade StyleSheet",
        c: "Cascade Score Sheet",
        d: "Cascade Summer Sheet",
        ans:"ans1"
    },
    {
        question: "Q3: What is full form of URL?",
        a : "Uniform Resouce Locator",
        b: "Universal Resource Locator",
        c: "Uniform Reset Locator",
        d: "Univeesal Resource Location",
        ans:"ans1"
    },
    {
        question: "Q4:2 + 2 = ?",
        a : 4,
        b: 6,
        c: 8,
        d: 1,
        ans:"ans1"
    },
    {
        question: "Q5:16 / 2 = ?",
        a : 4,
        b: 6,
        c: 8,
        d: 1,
        ans:"ans1"
    },
    {
        question: "Q6:4 * 2 = ?",
        a : 4,
        b: 6,
        c: 8,
        d: 1,
        ans:"ans3"
    } 

]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const summit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');


let questionCount = 0;
let score = 0;
const loadQuestion = ()=>{
    console.log(quizDB[0].question);
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
 
}
loadQuestion();



const getCheckedAnswer = ()=>{
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
        
    })
    return answer;
}
const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', ()=>{
    const checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer);

    deselectAll();

    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    }
    questionCount++;
    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
       showScore.innerHTML = `
       <h3>You score ${score}/${quizDB.length}</h3>
       <button class="btn" onclick="location.reload()">Play Again</button>`

       showScore.classList.remove('scoreArea');
    }
    
})





