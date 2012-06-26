
function loadChallenges() {

	// AnimalChallenge

	var animalChallenge = new Challenge("Dieren", "Deze keer gaan we het over dieren hebben. Er zijn heel veel dieren. Sommige daarvan zijn heel bijzonder. Een paar daarvan komen we zometeen tegen.");

	var lizardPart = new ChallengePart("Welke hagedis kan over water lopen?", "Heel goed, het is inderdaad de basiliskhagedis, ook bekend als de Jezus Christus hagedis.");
	var tigerPart = new ChallengePart("In welke delen van de wereld kan je tijgers vinden", "Juist, tijgers zijn alleen nog in Azie te vinden.");
	var platypusPart = new ChallengePart("Wat is er speciaal aan het vogelbekdier?", "Inderdaad, het vogelbekdier is een van de weinige eierleggende zoogdieren.");

	lizardPart.addHint("Welk bekend (bijbels) persoon kon nog meer over water lopen?");
	tigerPart.addHint("Probeer de namen van verschillende tijgers op te zoeken.");
	platypusPart.addHint("Wat voor type dier legt eieren?");

	animalChallenge.addPart(lizardPart);
	animalChallenge.addPart(tigerPart);
	animalChallenge.addPart(platypusPart);


	// Sports Challenge

	var sportsChallenge = new Challenge("Sport", "Nu gaan we het over de Olympische spelen hebben. Elk jaar worden nieuwe records gevestigd. Ook Nederland staat vaak op het podium.");

	var dutchOlympicsPart = new ChallengePart("In welke sporten heeft Nederland goud gehaald op de Olympische zomerspelen?", "Ja, dat zijn er nogal wat: zwemmen, wielrennen, paardensport, atletiek, roeien, zeilen, hockey, judo, waterpolo, volleybal, gymnastiek, boogschieten, en boksen.");
	var sprintPart = new ChallengePart("Hoe hard loopt de wereldrecordhouder sprint op de 100 meter bij de mannen gemiddeld?","Inderdaad, rond de 38 kilometer per uur.");
	var fannyPart = new ChallengePart("Wie was de meest succesvolle Nederlandse atlete (atletiek) op de Olympische Spelen?", "Heel goed, dat was Fanny Blankers-Koen.");

	dutchOlympicsPart.addHint("Probeer een lijst te vinden van Nederlandse medaillewinnaars");
	sprintPart.addHint("1 meter per seconde is gelijk aan 3.6 kilometer per uur");
	fannyPart.addHint("Zij won goud op verschillende loopafstanden");

	sportsChallenge.addPart(dutchOlympicsPart);
	sportsChallenge.addPart(sprintPart);
	sportsChallenge.addPart(fannyPart);

	// Music Challenge
	// Music Challenge

	var musicChallenge = new Challenge("Muziek", "Er zijn heel veel soorten muziek. Ook zijn er veel instrumenten. Sommige muzikanten zijn over de hele wereld bekend geworden.");

	var beatlesPart = new ChallengePart("Welke popgroep is ook bekend van een foto op een zebrapad?","Correct, The Beatles op Abbey Road.");
	var instrumentPart = new ChallengePart("Wat voor type instrumenten zijn er?","Inderdaad; meestal gebruiken we de indeling blaasinstrumenten, snaarinstrumenten, slagwerk en elektronische instrumenten."); 
	var sensesPart = new ChallengePart("Welk zintuig werkte niet goed bij Ludwig van Beethoven?","Precies; zijn gehoor werd steeds slechter, tot hij uiteindelijk volledig doof was.");

	beatlesPart.addHint("De straat waarop het zebrapad ligt heet Abbey Road");
	instrumentPart.addHint("Denk aan de manier waarop of het ding waarmee je geluid maakt"); 
	sensesPart.addHint("Welk zintuig gebruik je het meest bij het maken van muziek?")

	musicChallenge.addPart(beatlesPart);
	musicChallenge.addPart(instrumentPart);
	musicChallenge.addPart(sensesPart);

	challenges = new Array();
	challenges.push(animalChallenge);
	challenges.push(sportsChallenge);
	challenges.push(musicChallenge);
	return challenges;
}