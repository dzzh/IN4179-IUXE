function Hint(text, time) {
	this.text = text;
	this.time = time;
}

function ChallengePart(text, done) {
	this.text = text;
	this.done = done;
	this.hints = new Array();
	this.currentHint = 0;
	
	this.nextHint = function() {
		var res = this.hints[this.currentHint];
		this.currentHint++;
		return res;
	};
	
	this.addHint = function(text, time) {
		this.hints.push(new Hint(text, time));
	};
}

function Challenge(name, introd) {
	this.parts = new Array();
	this.currentPart = 0;
	this.name = name;
	this.introd = introd;
	
	this.nextPart = function() {
		var res = this.parts[this.currentPart];
		this.currentPart++;
		return res;
	};
	
	this.hasNext = function() {
		return this.currentPart < this.parts.length;
	}
	
	this.addPart = function(challengePart) {
		this.parts.push(challengePart);
	};
}

// Not a constructor, but a single object: the timer, for the hints.
var timer = new Object();
timer.time = 0;
timer.stop = function() {
	//TODO: implement
};
timer.start = function() {
	//TODO: implement
};
timer.reset = function() {
	//TODO: implement
};