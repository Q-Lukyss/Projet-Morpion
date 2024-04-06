
let joueur = "x";
let plateau =  { // Colonne puis Ligne
		11:"",
		12:"",
		13:"",
		21:"",
		22:"",
		23:"",
		31:"",
		32:"",
		33:""
};


function changerJoueur() {
	if(joueur == "x"){
		joueur = "o";
		document.querySelector(".message-jeu").innerHTML = "A joueur <span style='color:red;'>O</span> de jouer";
	}
	else {
		joueur = "x";
		document.querySelector(".message-jeu").innerHTML = "A joueur <span style='color:blue;'>X</span> de jouer";		
	}
	
}

function initialisation() {
	for (let c = 1; c < 4; c++) {
		for (let l = 1; l < 4; l++) {
			document.querySelector(".c"+c+"_l"+l).addEventListener("click", function() {
				jouer(c+""+l);
				}); // On ajoute un event pour rendre la case cliquable
			document.querySelector(".c"+c+"_l"+l).innerHTML = ""; // On supprime les rond et tout
			plateau[c+""+l] = ""; // On remet le plateau à zéro
		}
	}
	document.querySelector(".barre").innerHTML = ''; // on supprime les barres du gagnant
}

function afficherPlateau() {
	for (let c = 1; c < 4; c++) {
		for (let l = 1; l < 4; l++) {
			if (plateau[c+""+l] == "o") {
				document.querySelector(".c"+c+"_l"+l).innerHTML = '<div class="circle-container"><div class="circle"></div></div>';
			}
			if (plateau[c+""+l] == "x"){
				document.querySelector(".c"+c+"_l"+l).innerHTML = '<div class="cross"><div class="cross-branch-1"></div><div class="cross-branch-2"></div></div>';
			}
		}
	}
}

function jouer(caseGrille) {
	if (plateau[caseGrille] == "") { // si personne n'a joué ici...
		plateau[caseGrille] = joueur;
		afficherPlateau(); // On gère l'affichage du plateau
		estCeGagne(); // Est ce que qq1 a gagné ?
		changerJoueur();
	}
}

function estCeGagne(){ // est-ce que quelqu'un a gagné ?
	// Colonne identique
	if (plateau[11] != "" && plateau[11] == plateau[12] && plateau[12] == plateau[13]) {
		document.querySelector(".barre").innerHTML += '<div class="barre_'+plateau[11]+'4"></div>';
	}
	if (plateau[21] != "" && plateau[21] == plateau[22] && plateau[22] == plateau[23]) {
		document.querySelector(".barre").innerHTML += '<div class="barre_'+plateau[21]+'5"></div>';
	}
	if (plateau[31] != "" && plateau[31] == plateau[32] && plateau[32] == plateau[33]) {
		document.querySelector(".barre").innerHTML += '<div class="barre_'+plateau[31]+'6"></div>';
	}
	
	// Ligne identique
	if (plateau[11] != "" && plateau[11] == plateau[21] && plateau[21] == plateau[31]) {
		document.querySelector(".barre").innerHTML += '<div class="barre_'+plateau[11]+'1"></div>';
	}
	if (plateau[12] != "" && plateau[12] == plateau[22] && plateau[22] == plateau[32])  {
		document.querySelector(".barre").innerHTML += '<div class="barre_'+plateau[12]+'2"></div>';
	}
	if (plateau[13] != "" && plateau[13] == plateau[23] && plateau[23] == plateau[33])  {
		document.querySelector(".barre").innerHTML += '<div class="barre_'+plateau[13]+'3"></div>';
	}
	
	// En croix identique
	if (plateau[11] != "" && plateau[11] == plateau[22] && plateau[22] == plateau[33])  {
		document.querySelector(".barre").innerHTML += '<div class="barre_'+plateau[11]+'7"></div>';
	}
	if (plateau[13] != "" && plateau[13] == plateau[22] && plateau[22] == plateau[31])  {
		document.querySelector(".barre").innerHTML += '<div class="barre_'+plateau[13]+'8"></div>';
	}
	if(plateau[11] != "" && plateau[12] != "" && plateau[13] != "" && plateau[21] != "" && plateau[22] != "" && plateau[23] != "" && plateau[31] != "" && plateau[32] != "" && plateau[33] != "") {
		alert("vous etes nuls");
		document.querySelector(".message-jeu").innerHTML = "Vous êtes nuls tous les deux !";
	}
}

initialisation(); // On lance le jeu

