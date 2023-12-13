const startButton = document.querySelector(".start-button");
const startElements= document.querySelector(".intro-page");

const questionElements=document.querySelector(".question-page");
const answerElements = document.querySelectorAll(".answer");
let questionNumber = document.querySelector('#question-number-change');
let questionName = document.querySelector('#question');
let answerOne = document.querySelector('#answer-one');
let answerTwo = document.querySelector('#answer-two');
let currentQuestion = 1;
let extroScore = 0;
let introScore = 0;
let jScore = 0;
let pScore = 0;
let nScore = 0;
let tScore = 0;
let sScore = 0;
let fScore = 0;
let firstCat = '';
let secondCat = '';
let thirdCat = '';
let fourthCat = '';

const resultElements = document.querySelector(".result-page");
let resultAnimal = document.querySelector("#result-animal");
let resultDescription=document.querySelector('#result-description');

const backButton = document.querySelector('.back-button');
const restartButton = document.querySelector('#result-restart');

questionElements.style.display='none';
backButton.style.display = 'none';
resultElements.style.display='none';



startButton.addEventListener('click',function(){
    startElements.style.display='none';
    questionElements.style.display='block';
})

answerOne.addEventListener('click',function(){
    switch(currentQuestion){
        case 1:
            extroScore += 2;
            pScore += 1;
            break;
        
        case 2:
            extroScore += 3;
            break;
        
        case 3:
            jScore += 3;
            break;
        case 4:
            tScore += 3;
            break;
        case 5:
            sScore +=3;
            break;
    }    
})

answerTwo.addEventListener('click',function(){
    switch(currentQuestion){
        case 1:
            introScore += 2;
            jScore += 1;
            break;
        case 2:
            introScore += 3;
            break;
        case 3:
            pScore += 3;
            break;
        case 4:
            fScore += 3;
            break;
        case 5:
            nScore += 3;
            break;
    }    
})



for (var i=0;i<answerElements.length; i++)
    answerElements[i].addEventListener('click',function(){
       //write a function that includes going to next page
        switch(currentQuestion){
            case 1:
                //add the increase in data value to use in result
                changeQuestionPage('You finally have a day off! Would you,','Go to a party and shake all my stress off!','Watch a movie in my cozy room alone.');
                
                break;
            case 2:
                changeQuestionPage('Your exams are next week! What is on your desk?',"A scheduler, to make sure I'm on track!","I don't have a schedule, all I need is a nice cup of coffee!");
                break;
            case 3:
                changeQuestionPage('You are watching a movie, and the main character starts crying. You start,',"Googleing the actor's name, since they are so good at acting!",'Crying with the actor, holding tissues in your hand.');
                break;
            case 4:
                changeQuestionPage('You are walking home, and you see a double-rainbow! You,','Take a photo, or stand for a second to admire its beauty.','Make a wish, since rainbows mean good luck!');
                break;
            case 5:
                showResult()
                
        }

    })


function changeQuestionPage(question,answer1,answer2){
    currentQuestion += 1;
    questionNumber.innerHTML = currentQuestion;
    questionName.innerHTML = question;
    answerOne.innerHTML= answer1;
    answerTwo.innerHTML = answer2;

}

function endQuiz(){
    window.location.reload(true);
}

function showResult(){
    questionElements.style.display='none';
    resultElements.style.display = 'block';

    if(extroScore>introScore){
        firstCat= 'E';
    }else{
        firstCat= 'I';
    }
    
    if(nScore > sScore){
        secondCat='N';
    }else{
        secondCat='S';
    }
    
    if(fScore>tScore){
        thirdCat='F';
    }else{
        thirdCat='T';
    }
    
    if(pScore>jScore){
        fourthCat='P';
    }else{
        fourthCat='J';
    }


    finalResult = firstCat + secondCat + thirdCat + fourthCat;
    let finalAnimal = ''
    switch(finalResult){
        case 'ENFP': finalAnimal = 'Dolphin';
            break;
        case 'INFP':finalAnimal = 'Rabbit';
            break;
        case 'INTP':finalAnimal = 'Owl';
            break;
        case 'ENTP':finalAnimal = 'Fox';
            break;
        case 'ENFJ':finalAnimal = 'Dog';
            break;
        case 'INFJ':finalAnimal = 'Giraffe';
            break;
        case 'INTJ':finalAnimal = 'Tiger';
            break;
        case 'ENTJ':finalAnimal = 'Bear';
            break;
        case 'ESFP':finalAnimal = 'Otter';
            break;
        case 'ISFP':finalAnimal = 'Panda';
            break;
        case 'ESFJ':finalAnimal = 'Whale';
            break;
        case 'ISFJ':finalAnimal = 'Elephant';
            break;
        case 'ESTP':finalAnimal = 'Zebra';
            break;
        case 'ISTP':finalAnimal = 'Cat';
            break;
        case 'ESTJ':finalAnimal = 'Bear';
            break;
        case 'ISTJ':finalAnimal = 'Hippo';
            break;
    }

    resultAnimal.innerHTML = finalAnimal;
}


restartButton.addEventListener('click',function(){
    window.location.reload(true);
})

        