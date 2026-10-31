let commits = 0; /* amount of commits */

function updateCommits(){
	document.getElementById("commits").textContent = commits; // "replaces" the commit count with what it should be
}

const commitButton = { // this is the "the main bit", add 1, and multiply by the multiplier
	onPress: 1,
	commitMultiplier: 1
};

function gitCommit() { // this is the commit button. runs everytime the button is clicked
	commits = commits + (commitButton.onPress * commitButton.commitMultiplier); // the onPress will remain 1 until future updates
	updateCommits();
}

const upgrade1 = { // upgrade1 properties
	price: 50,
	priceInceaseMult: 1.5,
	timesBought: 0,
	multiplier: 0.2,
	multiplierAddPerBuy: 0.2
};

function upgrade1Button() { // the upgrade1 button function. runs after every time the button is clicked
		commits = commits - upgrade1.price; // taking away the commits
		upgrade1.timesBought++; // add 1 to the amount of times the upgrade was bought
		commitButton.commitMultiplier = commitButton.commitMultiplier + upgrade1.multiplier; // adding to the commit multiplier
		upgrade1.price = upgrade1.price * upgrade1.priceIncreaseMult; // increase the price
		upgrade1.multiplier = upgrade1.multiplier + upgrade1.multiplierAddPerBuy; // increase the upgrade1 multiplier
		// update the values to the screen
		updateCommits();
		document.getElementById("upgrade1TimesBought").textContent = upgrade1.timesBought;
		document.getElementById("commitsMultiplier").textContent = commitButton.commitMultiplier;
		document.getElementById("upgrade1Price").textContnet = upgrade1.price;
		document.getElementById("upgrade1Multiplier").textConent = upgrade1.multiplier;
}
