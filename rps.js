var result=document.getElementById("output");
//ASK FOR PLAYER NAME//
var HumanName=prompt("Human Player Enter Your Name");
var ComputerName="My Machine";
var ComputerPlayer="";
if(HumanName==""){
    alert("enter the name");
    result.innerHTML="Please enter the name"
    throw new Error("");  
}
alert("hello," + HumanName +" !Welocome to the game");
//ASK FOR STATEMENT//
var HumanPlayer=prompt("Choose Rock,Paper or Scissors(please fill into the uppercase)");
if(HumanPlayer!="ROCK"&&HumanPlayer!="PAPER"&&HumanPlayer!="SCISSORS"){
    result.innerHTML="oops!you choose the wrong Statement";
   throw new Error("");
    }     
var HumanPlayer_1=HumanPlayer.toUpperCase();
var ComputerPlayer_Value=Math.floor(Math.random()*3);
if(ComputerPlayer_Value==0){
    ComputerPlayer="Rock";
}
else if(ComputerPlayer_Value==1)
{
    ComputerPlayer="paper";
}
else{
    ComputerPlayer="Scissors";
}
var ComputerPlayer_1=ComputerPlayer.toUpperCase();
//MATCH DRAWN CONDITION//
if(HumanPlayer_1==ComputerPlayer_1){
    result.innerHTML="match drawn";
}
//IF P:AYER_1 CHOOSE PAPER//
else if(HumanPlayer_1=="PAPER"){
    if(ComputerPlayer_1=="SCISSORS"){
        result.innerHTML=ComputerName+ " win";
        
    }
    else{
        if(ComputerPlayer_1=="ROCK"){
            result.innerHTML=HumanName + " win";
        }
    }
}
//IF PLAYER_1 CHOOSE ROCK//
else if(HumanPlayer_1=="ROCK"){
    if(ComputerPlayer_1=="SCISSORS"){
        result.innerHTML=HumanName + " win";
    }
    else{
        if(ComputerPlayer_1=="PAPER"){
            result.innerHTML=ComputerName + " win";
        }
    }
}
  //IF P:AYER_1 CHOOSE SCISSORS//
else if(HumanPlayer_1=="SCISSORS"){
    if(ComputerPlayer_1=="PAPER"){
        result.innerHTML=HumanName + " win";
    }
    else{
        result.innerHTML=ComputerName + " win";
        }
}
//console.log(HumanPlayer_1);
//console.log(ComputerPlayer_Value);
//console.log(ComputerPlayer_1);