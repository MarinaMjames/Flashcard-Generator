var clozeCard = require('../../clozeCard.json');

// console.log(cardData);

function ClozeCard(partial, cloze) {
	this.partial = partial;
	this.cloze = cloze;
}

module.exports = ClozeCard;
