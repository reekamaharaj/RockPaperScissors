var playerScore = 0;
var computerScore = 0;
var gameRound = 0;

function computerPlay (){
    var choices = ['Rock', 'Paper', 'Scissors'];
    var result = choices[Math.floor(Math.random() * choices.length)];
    return result;
}

const buttons = document.querySelectorAll('button');
var playerSelection;
buttons.forEach(function(button){
    button.addEventListener('click', buttonclick)
  })

function buttonclick(event){
    playerSelection = event.target.id;

    const divResult = document.createElement('h1');
    round(playerSelection, computerPlay())
    divResult.textContent = 'Score: You - ' + playerScore + ' Computer - ' + computerScore;
    document.body.appendChild(divResult);
    
    if (gameRound == 5){
        const divScore = document.createElement('h2');
        divScore.textContent = game();
        document.body.appendChild(divScore);

        playerScore = 0;
        computerScore = 0;
        gameRound = 0;

    }
}

function round(playerSelection, computerSelection){
    var player = playerSelection;
    gameRound ++;
    if (player == 'rock' && computerSelection == 'Rock'){
        computerScore ++;
        playerScore ++;
        return 'Rock and rock means its a tie!';
    }
    else if (player == 'rock' && computerSelection == 'Paper'){
        computerScore ++;
        return 'You lose! Paper beats rock.';
    }
    else if (player == 'rock' && computerSelection == 'Scissors'){
        playerScore ++;
        return 'You win! Rock beats scissors.';
    }
    else if (player == 'paper' && computerSelection == 'Paper'){
        computerScore ++;
        playerScore ++;
        return 'Paper and paper means its a tie!';
    }
    else if (player == 'paper' && computerSelection == 'Scissors'){
        computerScore ++;
        return 'You lose! Scissors beats paper.';
        
    }
    else if (player =='scissors' && computerSelection == 'Scissors'){
        computerScore ++;
        playerScore ++;
        return 'Scissors and scissors means its a tie!';
    }
    else if (player =='paper' && computerSelection == 'Rock'){
        playerScore ++;
        return 'You win! Paper beats rock.';
    }
    else if (player =='scissors' && computerSelection == 'Rock'){
        computerScore ++;
        return 'You lose! Rock beats scissors.';
    }
    else if (player =='scissors' && computerSelection == 'Paper'){
        playerScore ++;
        return 'You win! Scissors beats paper.';
    }
    else
        return 'Error';
}

function game(){
    for (var game = 0; game < 5; game++){
        if (playerScore > computerScore){
            return 'You win!';
        }
        else if (playerScore < computerScore){
            return 'You lose!';
        }
        else
            return 'It was a tie.';
    }
}



