var command = process.argv[2];
var Basic = require('./basicCard.js');
var Cloze = require('./clozeCard.js');
var basicCard= require('../../basicCard.json');
var clozeCard = require('../../clozeCard.json');
var inquirer = require('inquirer');

//inquirer prompt to start game that runs playGame function

// function wannaStart(){
// var questions = [
//   {
//     type: 'confirm',
//     name: 'wannaStart',
//     message: 'Would you like to start the game?'
//   }
// ];

// inquirer.prompt(questions).then(function (answers) {
//   // console.log(JSON.stringify(answers, null, '  '));
//   if (answers.wannaStart === true){
//   	return('Please input node playgame.js and Basic or Cloze into the command line.');
//   }
//   else {
//   	return('Please answer Y to start the game!');
//   	// wannaStart();
//   }
// });

// }


var count = 0;
//play game function - initiates game 
var playGame = function(){
		// if process.argv[2] = Basic then run this
		if (command === "Basic" && count < 5){

			for (var i = 0; i < basicCard.length; i++){
			// console.log(basicCard[i]);
			var cardData = new Basic (basicCard[i].front, basicCard[i].back);
			// console.log(cardData);
			inquirer.prompt([
  				{
  					type: 'checkbox',
  					message: basicCard[i].front,
  					name: 'questions',
  					choices: [
  					{
  						name: 'The Blackhawks'
  					},
  					{
  						name: 'The Sharks'
  					},
  					{
  						name: 'The Avalanche'
  					},
  					{
  						name:'The Red Wings'
  					},
  					{
  						name: 'The Blues'
  					}]
  				}
  					]).then(function (answers) {
  						console.log(JSON.stringify(answers, null, '  '));
					});


			}
// prompt questions using inquirer
}

// if process.argv[2] = Cloze run this
else if (command === "Cloze" && count < 5){
	// loop through objects in the clozeCard.json file
	for (var i = 0; i < clozeCard.length; i++){
		// console.log(basicCard[i]);
		//store cloze cards in new variable called cardData
		var cardData = new Cloze (clozeCard[i].partial, clozeCard[i].cloze);
		// console.log(clozeCard[i].cloze + " " + clozeCard[i].partial);

	}


// prompt questions using inquirer

}
else{

}

}



// // initiate playGame function 
playGame();


// play again function that initiates play game function

// wannaStart();


