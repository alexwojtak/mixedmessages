
//assign list of quotes to an array. 
let quotesList = ["I'm not looking for another as I wander in my time, walk me to the corner, our steps will always rhyme - Leonard Cohen, Hey that;s no wy to say goodbye", "There were three of us this morning, I'm the only one this evening, but I must go on. - Leonard Cohen, The Partisan"];


function selectQuote(){
	return(Math.floor(Math.random()*quotesList.length));
}

let returnedQuote = quotesList[selectQuote()];

console.log(returnedQuote);
