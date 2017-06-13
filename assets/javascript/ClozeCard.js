var cardData = require('../../clozeCard.json');
console.log(cardData);

function ClozeCard(text, cloze) {
	this.text = text;
	this.cloze = cloze;
}

module.exports = ClozeCard;

var questionOneCloze = new ClozeCard('The Red Wings are the Detroit NHL team', 'The Red Wings');
//'The Red Wings'
console.log(questionOneCloze.cloze);
// '... are the Detroit NHL team'
console.log(questionOneCloze.partial);
//'The Red Wings are the Detroit NHL team'
console.log(questionOneCloze.fullText)


// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

var questionTwoCloze = new ClozeCard('The Blackhawks are the Chicago NHL team?', 'The Blackhawks');
// 'What is the name of the Chicago hockey team?'
console.log(questionTwoCloze.front);
// 'Blackhawks'
console.log(questionTwoCloze.back);

var questionThreeCloze = new ClozeCard('The Avalanche are the Colorado NHL team?', 'The Avalanche');
// 'What is the name of the Colorado hockey team?'
console.log(questionThreeCloze.front);
// 'Avalanche'
console.log(questionThreeCloze.back);

var questionFourCloze = new ClozeCard('The Blues are the St.Louis NHL team?', 'The Blues');
// 'What is the name of the St.Louis hockey team?'
console.log(questionFourCloze.front);
// 'Blues'
console.log(questionFourCloze.back);

var questionFiveCloze = new ClozeCard('The Sharks are the San Jose NHL team?', 'The Sharks');
// 'What is the name of the San Jose hockey team?'
console.log(questionFiveCloze.front);
// 'Sharks'
console.log(questionFiveCloze.back);