const playerTurn = {
    player1: false,
    player2: false
}
const morpionGrid = {
    11: '',
    21: '',
    31: '',
    12: '',
    22: '',
    32: '',
    13: '',
    23: '',
    33: ''
}
const togglePlayer = () => {
    playerTurn.player1 == true 
    ? 
    (
        playerTurn.player1 = false,  playerTurn.player2 = true
    ) 
    : 
    (
        playerTurn.player1 = true, playerTurn.player2 = false
    );
}

const startGame = () => {
    playerTurn.player1=true;
	for (let c = 1; c < 4; c++) {
		for (let l = 1; l < 4; l++) {
			document.querySelector(".c"+c+"_l"+l).addEventListener("click", handleGame(c+""+l));
		}
	}
}

const handleGame = (coordonnée) => {
    if (morpionGrid[coordonnée]){
        console.log('hi')
    } 
    else console.log('fail')
}

const handleDisplay = (coordonnée) => {
    for(let c = 1; c < 4; c++){
        for(let l = 1; l < 4; l++){
            if(morpionGrid[coordonnée] == 'x')
            document.querySelector(".c"+c+"_l"+l).innerHTML = '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>';
            if(morpionGrid[coordonnée] == 'o'){
                document.querySelector(".c"+c+"_l"+l).innerHTML = '<div class="circle-container"><div class="circle"></div></div>';
            }
        }
    }
}




