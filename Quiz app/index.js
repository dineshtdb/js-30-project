const qustions=[
     {
        qustion:"What is the largest animal in world",
        answer:[
            {text:"shark",correct:false},
            {text:"blue whale",correct:true},
            {text:"elephant",correct:false},
            {text:"cat",correct:false},
        ]
     },
     {
        qustion:"What is the smallext animal in world",
        answer:[
            {text:"shark",correct:false},
            {text:"blue whale",correct:false},
            {text:"elephant",correct:false},
            {text:"cat",correct:true},
        ]
     },
     
];

const qustionElement=document.getElementById("qustion");
const answerBtn=document.getElementById("buttons");
const nextButton=document.getElementById("nextBtn");

let i=0;
let score=0;
function startQuiz(){
    i=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();

    let currentQustion=qustions[i];
    let qustionNo= i+1;
    qustionElement.innerHTML= qustionNo+". "+currentQustion.qustion;
    currentQustion.answer.forEach(answer=>{
        const but=document.createElement("button");
        but.innerHTML=answer.text;
        but.classList.add("btn");
        answerBtn.appendChild(but);
        if(answer.correct){
            but.dataset.correct=answer.correct;
        }
        but.addEventListener("click",selectAnswer);
    })
}
function resetState(){
    nextButton.style.display="none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}
function selectAnswer(e){
    const selectBtn=e.target;
    const iscorrect=selectBtn.dataset.correct==="true";
    if(iscorrect)
    selectBtn.classList.add("correct");
   else
   selectBtn.classList.add("incorrect");
}
startQuiz();