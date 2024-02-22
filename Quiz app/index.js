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
    if(iscorrect){
    selectBtn.classList.add("correct");
    score++;
    }
   else
   selectBtn.classList.add("incorrect");
 Array.from(answerBtn.children).forEach(button=>{
    if(button.dataset.correct==="true"){
        button.classList.add("correct");
    }
    button.disabled=true;

});
nextButton.style.display="block";
}
function handleNextButton(){
    i++;
    if(i<qustions.length){
        showQuestion();
    }else{
        showscore();
    }
    
}
function showscore(){
    resetState();
    qustionElement.innerHTML=`you scored ${score}`;
    nextButton.innerHtml="play again";
    nextButton.style.display="block";
}
nextButton.addEventListener("click",()=>{
    if(i<qustions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();