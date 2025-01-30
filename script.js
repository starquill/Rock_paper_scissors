let obj={userscore:0,Computersscore:0};

function input(obj){
    let userguess=prompt("Rock , Paper or scissors?","Rock/Paper/Scissors");

    userguess=userguess.toUpperCase();
    let guess=0;

    let computerguessno=Math.floor(Math.random()*3)
    if(userguess=="ROCK"){
        guess=0;
        output(computerguessno,guess,obj);
    }
    else if(userguess=="SCISSORS"){
        guess=1;
        output(computerguessno,guess,obj);
    }
    else if(userguess=="PAPER"){
        guess=2;
        output(computerguessno,guess,obj);
    }
    else{
        alert(`invalid input`);
        input(obj);
    }
}

function output(computerguessno,userguess,obj){
    let computerguess;
    if(computerguessno==0)
        computerguess="ROCK";
    else if(computerguessno==1)
        computerguess="SCISSORS";
    else
        computerguess="PAPER";

    if(computerguessno-userguess==0){
        alert(`Its a draw ,computer chose ${computerguess}.Your score: ${obj.userscore} and computerscore: ${obj.Computersscore}`);
        }
        else if(userguess-computerguessno==-2 || userguess-computerguessno==1){
        obj.Computersscore++;
        alert(`Computer wins ,computer chose ${computerguess}. Your score: ${obj.userscore} and computerscore: ${obj.Computersscore}`);
        }
        else {
        obj.userscore++;
        alert(`You won ,computer chose ${computerguess} . Your score: ${obj.userscore} and computerscore: ${obj.Computersscore}`);
        }
        input(obj);
}

input(obj);



