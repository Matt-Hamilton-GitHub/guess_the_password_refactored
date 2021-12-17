
var words = ["ability","achieve","acquire","actions","actress"];
var randomNum = Math.floor(Math.random() * words.length)
var chosenWord = words[randomNum]
var chosenId = randomNum
var attampts = 3

d3.select('#guesses-remaining').text("Quesses Remaining " + attampts);

console.log(chosenWord);
console.log(chosenId);
//display Words 
words.forEach(function(word,id){
d3.select('#word-list')
        .append('li')
        .text(word)
        .attr('id','l'+ id)
})

d3.select('#start').on('click', function (){
 
    d3.select('#game-screen')
        .classed('show',true)
        .attr('class', 'show')
        console.log(d3.select('#game-screen').node());

    
})

d3.selectAll('li').on('click', function () {

var userId = d3.event.target.id[1]
var matchingLetters = 0
var userWord = words[userId]
if (userWord === chosenWord){
  d3.select('#winner').attr('class','show')
  d3.selectAll('li').remove();
}else{
  attampts-=1

  for( var x = 0; x < chosenWord.length; x++){
    for(  var i = 0; i < userWord.length; i++){
      if(chosenWord[x]=== userWord[i]){
        console.log(`${chosenWord[x]} == ${userWord[i]}`)
        matchingLetters+=1;
      }
    }
  }

  var selector = `#l${userId}`
  d3.select(selector).text(`${words[userId]} --> Matching Letters: ${matchingLetters}`);
  matchingLetters = 0
  if(attampts === 0){
    d3.select('#loser').attr('class', 'show');
    d3.selectAll('li').remove();
  }
}

d3.select('#guesses-remaining').text("Quesses Remaining " + attampts);

})