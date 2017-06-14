var basicCard = require('../../basicCard.json');
var cardData = JSON.stringify(basicCard);

// console.log(cardData);

function BasicCard (front, back){
	this.front = front;
	this.back = back;
}

module.exports = BasicCard;

// for (var i = 0; i < cardData.length; i++){
// 	console.log(cardData);
// 		var cards = cardData = new BasicCard (basicCard.front, basicCard.back);
// 	console.log(cards);
// 	// cardData[i].printInfo();
// }


