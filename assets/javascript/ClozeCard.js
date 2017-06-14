var basicCard = require('../../clozeCard.json');
var cardData = JSON.stringify(basicCard);

console.log(cardData);

function ClozeCard(text, cloze) {
	this.text = text;
	this.cloze = cloze;
}

module.exports = ClozeCard;


for (var i = 0; i < cardData.length; i++){
	
}