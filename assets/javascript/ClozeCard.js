module.exports = ClozeCard;

function ClozeCard(fullText, partial, cloze) {
	this.text = fullText;
	this.partial = partial;
	this.cloze = cloze;
}