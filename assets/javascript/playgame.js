var command = process.argv[2];
var Basic = require('./basicCard.js');
var Cloze = require('./clozeCard.js');
var basicCard= require('../../basicCard.json');
var clozeCard = require('../../clozeCard.json');
var inquirer = ('inquirer');

//inquirer prompt to start game that runs playGame function



// MAKE THIS ASYNCHRONOUS!!!!!!!!!



//play game function - initiates game 
function playGame(){
// if process.argv[2] = Basic then run this
if (command === "Basic"){

	for (var i = 0; i < basicCard.length; i++){
		// console.log(basicCard[i]);
		var cardData = new Basic (basicCard[i].front, basicCard[i].back);
		// console.log(cardData);
	}
// prompt questions using inquirer

}



// if process.argv[2] = Cloze run this
if (command === "Cloze"){
	// loop through objects in the clozeCard.json file
	for (var i = 0; i < clozeCard.length; i++){
		// console.log(basicCard[i]);
		//store cloze cards in new variable called cardData
		var cardData = new Cloze (clozeCard[i].partial, clozeCard[i].cloze);
		// console.log(clozeCard[i].cloze + " " + clozeCard[i].partial);
	}

// prompt questions using inquirer

}
}
// initiate playGame function 
playGame();


// play again function that initiates play game function




