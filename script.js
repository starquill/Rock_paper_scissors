const playbtn=document.getElementById("playbutton");
const rockbtn=document.querySelector(".rock");
const paperbtn=document.querySelector(".paper");
const scissorbtn=document.querySelector(".scissors");
const okbtn=document.querySelector(".okbutton");
const winnerText=document.querySelector("#winner");
const popup=document.querySelector("#popup");
const scoreboard=document.querySelector("#scoreboard");
const userChoice=document.querySelector(".yourChoice");
const computerChoice=document.querySelector(".computerChoice");
const score=document.querySelector(".score");

function setChoiceButtonsState(state) {
    rockbtn.disabled = !state;
    paperbtn.disabled = !state;
    scissorbtn.disabled = !state;
}

setChoiceButtonsState(false); 

let obj={userscore:0,Computersscore:0};

playbtn.addEventListener("click",()=>{
    playbtn.style.visibility="hidden";
    obj.userscore=0;
    obj.Computersscore=0;
    setChoiceButtonsState(true);
    scoreboard.style.display="block"; 
    score.textContent=`Score: You ${obj.userscore} - ${obj.Computersscore} Computer`;
})

rockbtn.addEventListener("click",()=>{
    if(!rockbtn.disabled) roundwinner(generator(),0);
})
scissorbtn.addEventListener("click",()=>{
    if(!scissorbtn.disabled)roundwinner(generator(),1);
})
paperbtn.addEventListener("click",()=>{
    if(!paperbtn.disabled)roundwinner(generator(),2);
})

function generator(){
    return Math.floor(Math.random()*3);
}

function winner(obj){
    if(obj.Computersscore==5)
    pop("You lost..Its never late..One more try?.");
    else if(obj.userscore==5)
    pop("You win!!!");

}

function roundwinner(comp,user){
      if(user==0){
        userChoice.textContent="Your choice:Rock";
      }
      else if(user==1){
        userChoice.textContent="Your choice:Scissors";
      }
      else if(user==2){
        userChoice.textContent="Your choice:Paper";
      }
      if(comp==0){
        computerChoice.textContent="Computer choice:Rock";
      }
      else if(comp==1){
        computerChoice.textContent="Computer choice:Scissors";
      }
      else if(comp==2){
        computerChoice.textContent="Computer choice:Paper";
      }
      if(comp==user)
        return;
      else if(user-comp==-2 || user-comp==1)
        obj.Computersscore++;
      else
        obj.userscore++;
      if(obj.Computersscore==5 || obj.userscore==5)
        setChoiceButtonsState(false); 
      score.textContent=`Score: You ${obj.userscore} - ${obj.Computersscore} Computer`;
    winner(obj);
}

function pop(element){
    winnerText.textContent=element;
    popup.style.display="flex";
    scoreboard.style.display = "none";

}

okbtn.addEventListener("click",()=>{
    popup.style.display="none";
    obj.Computersscore=0;
    obj.userscore=0;
    playbtn.style.visibility="visible";
    scoreboard.style.display="none";
})