var command = process.argv[2];
var basicCard = require('./basicCard.js');
var clozeCard = require('./clozeCard.js');
var arrayOfQuestions = require('../../basicCard.json');
// var arrayOfQuestions = JSON.parse(basicQ)

// console.log(arrayOfQuestions);
// var cardData = JSON.stringify(basicCard);

for (i = 0; i < arrayOfQuestions.length; i++){
	var basicQuestion = new basicCard(arrayOfQuestions[i].front, arrayOfQuestions[i].back);
    // clozeQuestion[i] = new clozeCard(arrayOfQuestions[i].back, arrayOfQuestions[i].cloze);
}

console.log(arrayOfQuestions[i].front, arrayOfQuestions[i].back);
// function playGame(){
// if (command === "Basic"){
	
// 	// var arrayOfQuestions = require('../../basicCard.json');
// 	for (var i = 0; i < arrayOfQuestions.length; i++){
//     	basicQuestion[i] = new basicCard(arrayOfQuestions[i].front, arrayOfQuestions[i].back);

//     	console.log(arrayOfQuestions[i].front + arrayOfQuestions[i].back);
//     }

// }
// if (command === "Cloze"){

// }


// }
// playGame();