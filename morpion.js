const playerTurn = {
    player1: false,
    player2: false
}
const morpionGrid = {
    c1_l1: false,
    c2_l1: false,
    c3_l1: false,
    c1_l2: false,
    c2_l2: false,
    c3_l2: false,
    c1_l3: false,
    c2_l3: false,
    c3_l3: false
}
//POUR LES CROIX
const c1_l1_cross = () => { 
    if(morpionGrid.c1_l1 == false && playerTurn.player1 == true)
    {
        document.querySelector('.c1_l1').innerHTML = '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>';
        morpionGrid.c1_l1 = true;
        togglePlayer();
    } else return
}
const c1_l2_cross = () => { 
    if(morpionGrid.c1_l2 == false && playerTurn.player1 == true)
    {
        document.querySelector('.c1_l2').innerHTML = '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>';
        morpionGrid.c1_l2 = true;
        togglePlayer();
    } else return
}
const c1_l3_cross = () => { 
    if(morpionGrid.c1_l3 == false && playerTurn.player1 == true)
    {
        document.querySelector('.c1_l3').innerHTML = '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>';
        morpionGrid.c1_l3 = true;
        togglePlayer();
    } else return
}
const c2_l1_cross = () => { 
    if(morpionGrid.c2_l1 == false && playerTurn.player1 == true)
    {
        document.querySelector('.c2_l1').innerHTML = '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>';
        morpionGrid.c2_l1 = true;
        togglePlayer();
    } else return
}
const c2_l2_cross = () => { 
    if(morpionGrid.c2_l2 == false && playerTurn.player1 == true)
    {
        document.querySelector('.c2_l2').innerHTML = '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>';
        morpionGrid.c2_l2 = true;
        togglePlayer();
    } else return
}
const c2_l3_cross = () => { 
    if(morpionGrid.c2_l3 == false && playerTurn.player1 == true)
    {
        document.querySelector('.c2_l3').innerHTML = '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>';
        morpionGrid.c2_l3 = true;
        togglePlayer();
    } else return
}
const c3_l1_cross = () => { 
    if(morpionGrid.c3_l1 == false && playerTurn.player1 == true)
    {
        document.querySelector('.c3_l1').innerHTML = '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>';
        morpionGrid.c3_l1 = true;
        togglePlayer();
    } else return
}
const c3_l2_cross = () => { 
    if(morpionGrid.c3_l2 == false && playerTurn.player1 == true)
    {
        document.querySelector('.c3_l2').innerHTML = '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>';
        morpionGrid.c3_l2 = true;
        togglePlayer();
    } else return
}
const c3_l3_cross = () => { 
    if(morpionGrid.c3_l3 == false && playerTurn.player1 == true)
    {
        document.querySelector('.c3_l3').innerHTML = '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>';
        morpionGrid.c3_l3 = true;
        togglePlayer();
    } else return
}
//POUR LES CERCLES
const c1_l1_circle = () => { 
    if(morpionGrid.c1_l1 == false && playerTurn.player2 == true)
    {
        document.querySelector('.c1_l1').innerHTML = '<div class="circle-container"><div class="circle"></div></div>';
        morpionGrid.c1_l1 = true;
        togglePlayer();
    } else return
} 
const c1_l2_circle = () => { 
    if(morpionGrid.c1_l2 == false && playerTurn.player2 == true)
    {
        document.querySelector('.c1_l2').innerHTML = '<div class="circle-container"><div class="circle"></div></div>';
        morpionGrid.c1_l2 = true;
        togglePlayer();
    } else return
} 
const c1_l3_circle = () => { 
    if(morpionGrid.c1_l3 == false && playerTurn.player2 == true)
    {
        document.querySelector('.c1_l3').innerHTML = '<div class="circle-container"><div class="circle"></div></div>';
        morpionGrid.c1_l3 = true;
        togglePlayer();
    } else return
} 
const c2_l1_circle = () => { 
    if(morpionGrid.c2_l1 == false && playerTurn.player2 == true)
    {
        document.querySelector('.c2_l1').innerHTML = '<div class="circle-container"><div class="circle"></div></div>';
        morpionGrid.c2_l1 = true;
        togglePlayer();
    } else return
} 
const c2_l2_circle = () => { 
    if(morpionGrid.c2_l2 == false && playerTurn.player2 == true)
    {
        document.querySelector('.c2_l2').innerHTML = '<div class="circle-container"><div class="circle"></div></div>';
        morpionGrid.c2_l2 = true;
        togglePlayer();
    } else return
} 
const c2_l3_circle = () => { 
    if(morpionGrid.c2_l3 == false && playerTurn.player2 == true)
    {
        document.querySelector('.c2_l3').innerHTML = '<div class="circle-container"><div class="circle"></div></div>';
        morpionGrid.c2_l3 = true;
        togglePlayer();
    } else return
} 
const c3_l1_circle = () => { 
    if(morpionGrid.c3_l1 == false && playerTurn.player2 == true)
    {
        document.querySelector('.c3_l1').innerHTML = '<div class="circle-container"><div class="circle"></div></div>';
        morpionGrid.c3_l1 = true;
        togglePlayer();
    } else return
} 
const c3_l2_circle = () => { 
    if(morpionGrid.c3_l2 == false && playerTurn.player2 == true)
    {
        document.querySelector('.c3_l2').innerHTML = '<div class="circle-container"><div class="circle"></div></div>';
        morpionGrid.c3_l2 = true;
        togglePlayer();
    } else return
} 
const c3_l3_circle = () => { 
    if(morpionGrid.c3_l3 == false && playerTurn.player2 == true)
    {
        document.querySelector('.c3_l3').innerHTML = '<div class="circle-container"><div class="circle"></div></div>';
        morpionGrid.c3_l3 = true;
        togglePlayer();
    } else return
} 

const startGame = () => {
    playerTurn.player1 = true;
        document.querySelector('.game-info').innerHTML = `<h3>Tour du joueur 1 en bleu avec les croix</h3><button onclick="handleGame();">Fin du tour</button>`
        document.querySelector('.c1_l1').addEventListener('click', c1_l1_cross);       
        document.querySelector('.c2_l1').addEventListener('click', c2_l1_cross);
        document.querySelector('.c3_l1').addEventListener('click', c3_l1_cross);
        document.querySelector('.c1_l2').addEventListener('click', c1_l2_cross);
        document.querySelector('.c2_l2').addEventListener('click', c2_l2_cross);
        document.querySelector('.c3_l2').addEventListener('click', c3_l2_cross);
        document.querySelector('.c1_l3').addEventListener('click', c1_l3_cross);  
        document.querySelector('.c2_l3').addEventListener('click', c2_l3_cross);
        document.querySelector('.c3_l3').addEventListener('click', c3_l3_cross);
        document.querySelector('main').addEventListener('click', handleGame);
        document.querySelector('main').addEventListener('click', handleTie);
        document.addEventListener('click', handleWin);
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
const handleGame = () => {
    //togglePlayer();
    if(playerTurn.player1){
        console.log('here mofo')
        document.querySelector('.game-info').innerHTML = `<h3>Tour du joueur 1 en bleu avec les croix</h3><button onclick="handleGame()">Fin du tour</button>`
        document.querySelector('.c1_l1').addEventListener('click', c1_l1_cross);       
        document.querySelector('.c2_l1').addEventListener('click', c2_l1_cross);
        document.querySelector('.c3_l1').addEventListener('click', c3_l1_cross);
        document.querySelector('.c1_l2').addEventListener('click', c1_l2_cross);
        document.querySelector('.c2_l2').addEventListener('click', c2_l2_cross);
        document.querySelector('.c3_l2').addEventListener('click', c3_l2_cross);
        document.querySelector('.c1_l3').addEventListener('click', c1_l3_cross);  
        document.querySelector('.c2_l3').addEventListener('click', c2_l3_cross);
        document.querySelector('.c3_l3').addEventListener('click', c3_l3_cross);
    }
    else {
        document.querySelector('.game-info').innerHTML = `<h3>Tour du joueur 2 en rouge avec les cercles</h3><button onclick="handleGame();">Fin du tour</button>`;
        /*REMOVE ALL EVENT*/
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_cross);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_cross);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_cross);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_cross);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_cross);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_cross);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_cross); 
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_cross);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_cross);
        /*ADD EVENT POUR LES RONDS*/
        document.querySelector('.c1_l1').addEventListener('click', c1_l1_circle);       
        document.querySelector('.c2_l1').addEventListener('click', c2_l1_circle);
        document.querySelector('.c3_l1').addEventListener('click', c3_l1_circle);
        document.querySelector('.c1_l2').addEventListener('click', c1_l2_circle);
        document.querySelector('.c2_l2').addEventListener('click', c2_l2_circle);
        document.querySelector('.c3_l2').addEventListener('click', c3_l2_circle);
        document.querySelector('.c1_l3').addEventListener('click', c1_l3_circle);  
        document.querySelector('.c2_l3').addEventListener('click', c2_l3_circle);
        document.querySelector('.c3_l3').addEventListener('click', c3_l3_circle);


    }
}
const handleWin = () => {
    /*CAS DES TROIX BARRES DE VICTOIRE HORIZONTALES JOUEUR1*/
    if(document.querySelector('.c1_l1').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>' 
    && document.querySelector('.c2_l1').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>'
    && document.querySelector('.c3_l1').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>'){
        document.querySelector('.game-info').innerHTML = `<h3>Victoire du Joueur 1</h3></button>`;
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_cross);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_cross);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_cross);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_cross);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_cross);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_cross);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_cross); 
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_cross);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_cross);
       
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_circle);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_circle);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_circle);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_circle);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_circle);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_circle);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_circle);  
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_circle);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_circle);

        document.querySelector('main').innerHTML += '<div class="barre_cross1"></div>'
    }
    if(document.querySelector('.c1_l2').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>' 
    && document.querySelector('.c2_l2').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>'
    && document.querySelector('.c3_l2').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>'){
        document.querySelector('.game-info').innerHTML = `<h3>Victoire du Joueur 1</h3></button>`;
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_cross);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_cross);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_cross);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_cross);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_cross);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_cross);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_cross); 
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_cross);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_cross);
       
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_circle);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_circle);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_circle);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_circle);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_circle);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_circle);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_circle);  
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_circle);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_circle);

        document.querySelector('main').innerHTML += '<div class="barre_cross2"></div>'
    }
    if(document.querySelector('.c1_l3').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>' 
    && document.querySelector('.c2_l3').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>'
    && document.querySelector('.c3_l3').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>'){
        document.querySelector('.game-info').innerHTML = `<h3>Victoire du Joueur 1</h3></button>`;
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_cross);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_cross);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_cross);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_cross);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_cross);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_cross);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_cross); 
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_cross);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_cross);
       
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_circle);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_circle);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_circle);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_circle);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_circle);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_circle);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_circle);  
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_circle);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_circle);

        document.querySelector('main').innerHTML += '<div class="barre_cross3"></div>'
    }
    /*CAS DES TROIX BARRES DE VICTOIRE HORIZONTALES JOUEUR1*/
    if(document.querySelector('.c1_l1').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>' 
    && document.querySelector('.c1_l2').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>'
    && document.querySelector('.c1_l3').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>'){
        document.querySelector('.game-info').innerHTML = `<h3>Victoire du Joueur 1</h3></button>`;
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_cross);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_cross);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_cross);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_cross);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_cross);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_cross);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_cross); 
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_cross);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_cross);
       
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_circle);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_circle);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_circle);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_circle);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_circle);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_circle);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_circle);  
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_circle);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_circle);

        document.querySelector('main').innerHTML += '<div class="barre_cross4"></div>'
    }
    if(document.querySelector('.c2_l1').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>' 
    && document.querySelector('.c2_l2').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>'
    && document.querySelector('.c2_l3').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>'){
        document.querySelector('.game-info').innerHTML = `<h3>Victoire du Joueur 1</h3></button>`;
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_cross);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_cross);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_cross);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_cross);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_cross);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_cross);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_cross); 
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_cross);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_cross);
       
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_circle);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_circle);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_circle);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_circle);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_circle);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_circle);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_circle);  
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_circle);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_circle);

        document.querySelector('main').innerHTML += '<div class="barre_cross5"></div>'
    }
    if(document.querySelector('.c3_l1').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>' 
    && document.querySelector('.c3_l2').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>'
    && document.querySelector('.c3_l3').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>'){
        document.querySelector('.game-info').innerHTML = `<h3>Victoire du Joueur 1</h3></button>`;
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_cross);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_cross);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_cross);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_cross);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_cross);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_cross);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_cross); 
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_cross);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_cross);
       
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_circle);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_circle);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_circle);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_circle);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_circle);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_circle);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_circle);  
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_circle);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_circle);

        document.querySelector('main').innerHTML += '<div class="barre_cross6"></div>'
    }
    /*CAS DES BARRES DE VICTOIRE OBLIQUE JOUEUR1*/
    if(document.querySelector('.c1_l1').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>' 
    && document.querySelector('.c2_l2').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>'
    && document.querySelector('.c3_l3').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>'){
        document.querySelector('.game-info').innerHTML = `<h3>Victoire du Joueur 1</h3></button>`;
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_cross);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_cross);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_cross);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_cross);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_cross);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_cross);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_cross); 
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_cross);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_cross);
       
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_circle);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_circle);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_circle);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_circle);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_circle);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_circle);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_circle);  
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_circle);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_circle);

        document.querySelector('main').innerHTML += '<div class="barre_cross7"></div>'
    }
    if(document.querySelector('.c3_l1').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>' 
    && document.querySelector('.c2_l2').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>'
    && document.querySelector('.c1_l3').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>'){
        document.querySelector('.game-info').innerHTML = `<h3>Victoire du Joueur 1</h3></button>`;
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_cross);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_cross);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_cross);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_cross);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_cross);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_cross);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_cross); 
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_cross);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_cross);
       
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_circle);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_circle);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_circle);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_circle);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_circle);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_circle);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_circle);  
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_circle);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_circle);

        document.querySelector('main').innerHTML += '<div class="barre_cross8"></div>'
    }
    /*CAS DES TROIX BARRES DE VICTOIRE HORIZONTALES JOUEUR2*/

    //enCours
    if(document.querySelector('.c1_l1').innerHTML == '<div class="circle-container"><div class="circle"></div></div>' 
    && document.querySelector('.c2_l1').innerHTML == '<div class="circle-container"><div class="circle"></div></div>'
    && document.querySelector('.c3_l1').innerHTML == '<div class="circle-container"><div class="circle"></div></div>'){
        document.querySelector('.game-info').innerHTML = `<h3>Victoire du Joueur 2</h3></button>`;
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_cross);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_cross);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_cross);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_cross);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_cross);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_cross);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_cross); 
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_cross);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_cross);
       
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_circle);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_circle);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_circle);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_circle);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_circle);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_circle);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_circle);  
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_circle);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_circle);

        document.querySelector('main').innerHTML += '<div class="barre_circle1"></div>'
    }
    if(document.querySelector('.c1_l2').innerHTML == '<div class="circle-container"><div class="circle"></div></div>' 
    && document.querySelector('.c2_l2').innerHTML == '<div class="circle-container"><div class="circle"></div></div>'
    && document.querySelector('.c3_l2').innerHTML == '<div class="circle-container"><div class="circle"></div></div>'){
        document.querySelector('.game-info').innerHTML = `<h3>Victoire du Joueur 2</h3></button>`;
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_cross);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_cross);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_cross);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_cross);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_cross);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_cross);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_cross); 
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_cross);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_cross);
       
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_circle);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_circle);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_circle);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_circle);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_circle);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_circle);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_circle);  
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_circle);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_circle);

        document.querySelector('main').innerHTML += '<div class="barre_circle2"></div>'
    }
    if(document.querySelector('.c1_l3').innerHTML == '<div class="circle-container"><div class="circle"></div></div>' 
    && document.querySelector('.c2_l3').innerHTML == '<div class="circle-container"><div class="circle"></div></div>'
    && document.querySelector('.c3_l3').innerHTML == '<div class="circle-container"><div class="circle"></div></div>'){
        document.querySelector('.game-info').innerHTML = `<h3>Victoire du Joueur 2</h3></button>`;
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_cross);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_cross);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_cross);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_cross);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_cross);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_cross);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_cross); 
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_cross);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_cross);
       
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_circle);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_circle);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_circle);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_circle);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_circle);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_circle);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_circle);  
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_circle);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_circle);

        document.querySelector('main').innerHTML += '<div class="barre_circle3"></div>'
    }
    /*CAS DES TROIX BARRES DE VICTOIRE HORIZONTALES JOUEUR1*/
    if(document.querySelector('.c1_l1').innerHTML == '<div class="circle-container"><div class="circle"></div></div>' 
    && document.querySelector('.c1_l2').innerHTML == '<div class="circle-container"><div class="circle"></div></div>'
    && document.querySelector('.c1_l3').innerHTML == '<div class="circle-container"><div class="circle"></div></div>'){
        document.querySelector('.game-info').innerHTML = `<h3>Victoire du Joueur 2</h3></button>`;
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_cross);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_cross);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_cross);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_cross);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_cross);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_cross);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_cross); 
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_cross);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_cross);
       
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_circle);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_circle);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_circle);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_circle);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_circle);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_circle);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_circle);  
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_circle);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_circle);

        document.querySelector('main').innerHTML += '<div class="barre_circle4"></div>'
    }
    if(document.querySelector('.c2_l1').innerHTML == '<div class="circle-container"><div class="circle"></div></div>' 
    && document.querySelector('.c2_l2').innerHTML == '<div class="circle-container"><div class="circle"></div></div>'
    && document.querySelector('.c2_l3').innerHTML == '<div class="circle-container"><div class="circle"></div></div>'){
        document.querySelector('.game-info').innerHTML = `<h3>Victoire du Joueur 2</h3></button>`;
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_cross);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_cross);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_cross);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_cross);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_cross);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_cross);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_cross); 
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_cross);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_cross);
       
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_circle);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_circle);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_circle);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_circle);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_circle);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_circle);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_circle);  
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_circle);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_circle);

        document.querySelector('main').innerHTML += '<div class="barre_circle5"></div>'
    }
    if(document.querySelector('.c3_l1').innerHTML == '<div class="circle-container"><div class="circle"></div></div>' 
    && document.querySelector('.c3_l2').innerHTML == '<div class="circle-container"><div class="circle"></div></div>'
    && document.querySelector('.c3_l3').innerHTML == '<div class="circle-container"><div class="circle"></div></div>'){
        document.querySelector('.game-info').innerHTML = `<h3>Victoire du Joueur 2</h3></button>`;
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_cross);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_cross);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_cross);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_cross);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_cross);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_cross);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_cross); 
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_cross);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_cross);
       
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_circle);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_circle);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_circle);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_circle);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_circle);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_circle);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_circle);  
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_circle);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_circle);

        document.querySelector('main').innerHTML += '<div class="barre_circle6"></div>'
    }
    /*CAS DES BARRES DE VICTOIRE OBLIQUE JOUEUR1*/
    if(document.querySelector('.c1_l1').innerHTML == '<div class="circle-container"><div class="circle"></div></div>' 
    && document.querySelector('.c2_l2').innerHTML == '<div class="circle-container"><div class="circle"></div></div>'
    && document.querySelector('.c3_l3').innerHTML == '<div class="circle-container"><div class="circle"></div></div>'){
        document.querySelector('.game-info').innerHTML = `<h3>Victoire du Joueur 2</h3></button>`;
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_cross);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_cross);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_cross);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_cross);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_cross);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_cross);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_cross); 
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_cross);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_cross);
       
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_circle);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_circle);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_circle);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_circle);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_circle);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_circle);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_circle);  
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_circle);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_circle);

        document.querySelector('main').innerHTML += '<div class="barre_circle7"></div>'
    }
    if(document.querySelector('.c3_l1').innerHTML == '<div class="circle-container"><div class="circle"></div></div>' 
    && document.querySelector('.c2_l2').innerHTML == '<div class="circle-container"><div class="circle"></div></div>'
    && document.querySelector('.c1_l3').innerHTML == '<div class="circle-container"><div class="circle"></div></div>'){
        document.querySelector('.game-info').innerHTML = `<h3>Victoire du Joueur 2</h3></button>`;
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_cross);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_cross);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_cross);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_cross);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_cross);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_cross);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_cross); 
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_cross);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_cross);
       
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_circle);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_circle);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_circle);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_circle);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_circle);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_circle);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_circle);  
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_circle);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_circle);

        document.querySelector('main').innerHTML += '<div class="barre_circle8"></div>'
    }
}

const handleTie = ()=>{
    if(
    (document.querySelector('.c1_l1').innerHTML == '<div class="circle-container"><div class="circle"></div></div>' || document.querySelector('.c1_l1').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>') &&       
    (document.querySelector('.c2_l1').innerHTML == '<div class="circle-container"><div class="circle"></div></div>' || document.querySelector('.c2_l1').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>') &&
    (document.querySelector('.c3_l1').innerHTML == '<div class="circle-container"><div class="circle"></div></div>' || document.querySelector('.c3_l1').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>') &&
    (document.querySelector('.c1_l2').innerHTML == '<div class="circle-container"><div class="circle"></div></div>' || document.querySelector('.c1_l2').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>') &&
    (document.querySelector('.c2_l2').innerHTML == '<div class="circle-container"><div class="circle"></div></div>' || document.querySelector('.c2_l2').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>') &&
    (document.querySelector('.c3_l2').innerHTML == '<div class="circle-container"><div class="circle"></div></div>' || document.querySelector('.c3_l2').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>') &&
    (document.querySelector('.c1_l3').innerHTML == '<div class="circle-container"><div class="circle"></div></div>' || document.querySelector('.c1_l3').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>') && 
    (document.querySelector('.c2_l3').innerHTML == '<div class="circle-container"><div class="circle"></div></div>' || document.querySelector('.c2_l3').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>') &&
    (document.querySelector('.c3_l3').innerHTML == '<div class="circle-container"><div class="circle"></div></div>' || document.querySelector('.c3_l3').innerHTML == '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>')
    ){
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_cross);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_cross);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_cross);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_cross);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_cross);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_cross);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_cross); 
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_cross);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_cross);
       
        document.querySelector('.c1_l1').removeEventListener('click', c1_l1_circle);       
        document.querySelector('.c2_l1').removeEventListener('click', c2_l1_circle);
        document.querySelector('.c3_l1').removeEventListener('click', c3_l1_circle);
        document.querySelector('.c1_l2').removeEventListener('click', c1_l2_circle);
        document.querySelector('.c2_l2').removeEventListener('click', c2_l2_circle);
        document.querySelector('.c3_l2').removeEventListener('click', c3_l2_circle);
        document.querySelector('.c1_l3').removeEventListener('click', c1_l3_circle);  
        document.querySelector('.c2_l3').removeEventListener('click', c2_l3_circle);
        document.querySelector('.c3_l3').removeEventListener('click', c3_l3_circle);
        document.querySelector('main').style.opacity = '0.7';
        document.querySelector('.game-info').innerHTML = `<h3>Egalité</h3></button>`;
    }
}
