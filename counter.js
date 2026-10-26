let commits = 0; /* amount of commits */

const commitButton = {
	onPress: 1,
	commitMultiplier: 1
};

function work() {	
	commits = commits + (commitButton.onPress * commitButton.commitMultiplier);
	document.getElementById("commits").innerHTML = commits;
}

const upgrade1Button = {
	price: 50,
	timesBought: 0,
	multiplier: 0.2,
	multiplierAddPerBuy: 0.2
};

function upgrade1() {
}
