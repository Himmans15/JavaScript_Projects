const totalscore={computerScore:0,playerScore:0}
 function getComputerChoices() {
    let rpsChoices=['Rock','Scissor','Paper']
    let computerChoice=rpsChoices[Math.floor(Math.random()*3)]
    return computerChoice
 }

 function getResult(playerChoice,computerChoice){
    let score;
    if(playerChoice===computerChoice){
    score=0 
    }else if(playerChoice==='Rock' && computerChoice==='Scissor'){
    score =1
     } else if(playerChoice==='Paper' && computerChoice==='Rock'){
    score =1
     }else if(playerChoice==='Scissor' && computerChoice==='Paper'){
    score =1
     }else{
        score=-1
     }
     return score
 }

 function showResult(score,playerChoice,computerChoice){
    const playerScore=document.getElementById('player-score')
    const hands= document.getElementById('hands')
    const result=document.getElementById('result')
    switch(score){
    case -1:
        result.innerText=`You Lose!`
        break;
    case 0:
        result.innerText=`It's a Draw`
        break;
    case 1:
        result.innerText=`You Win`
        break;
    }
    
    playerScore.innerText=`${Number(playerScore.innerText)+score}`
    hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
 }

 //caculate who won and shoe it on the screen
 function onClickRPS(playerChoice){
    const computerChoice=getComputerChoices()
    const score=getResult(playerChoice.value,computerChoice)
    showResult(score,playerChoice.value,computerChoice)
 }
 //Make the RPS buttons actively listen for a click and do something once a click is detected
 function playGames(){
    let rpsButtons=document.querySelectorAll('.rpsButton')
    rpsButtons.forEach(rpsButton=>{
        rpsButton.onclick=()=>onClickRPS(rpsButton)

        let endGameBtn=document.getElementById('endGameButton')
        endGameBtn.onclick=()=>endGame(totalscore)
    })
 }
 //endGame function for clear all the text on the DOM
 function endGame(totalscore){
    totalscore['playerScore']=0
    totalscore['computerScore']=0
    const playerScore=document.getElementById('player-score')
    const hands=document.getElementById('hands')
    const result=document.getElementById('result')
    playerScore.innerText = ''
    hands.innerText = ''
    result.innerText =  ''
 }
 playGames()
