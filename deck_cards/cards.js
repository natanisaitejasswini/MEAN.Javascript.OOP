// Create a Deck object constructor. A deck should have the following functionality:
//
  // The Deck should contain the 52 standard cards
  // The Deck should be able to shuffle
  // The Deck should be able to reset
  // The Deck should be able to deal a random card
  // Deal should return the card that was dealt and remove it from the deck

// Now create a Player object constructor. A Player should have the following functionality:
  //
  // The Player should have a name
  // The Player should have a hand
  // The Player should be able to take a card (use the deck.deal method)
  // The Player should be able to discard a card

  function Player(name){
  var playerName = name
  var playerHand = []
  this.takeCard = function(card){
    playerHand.push(card);
  }
  this.showHand = function(){
    console.log(playerHand);
  }
  this.discard = function(index){
    playerHand.splice(index,1);
  }
}

function Deck(){
  console.log(this);
  var deck = [];
  var suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
  var faces = ['Jack', 'Queen', 'King', 'Ace'];
  var isShuffled = false
  var generate = function(){
    for (var suit in suits) {
      // console.log(suits[suit]);
      for (var i = 2; i < 11; i++) {
        deck.push(i + ' of ' + suits[suit]);
      }
      for(var face in faces){
        deck.push(faces[face] + ' of ' + suits[suit])
      }
    }
    console.log("deck is " + deck);
  }
  generate()
  this.reset = function(){
    deck = [];
    generate();
  }
  this.shuffle = function(){
    isShuffled = true;
    var newDeck = [];
    for (var i = 0; i < deck.length; i++) {
      var spot = Math.floor(Math.random() * deck.length)
      // console.log(temp, deck[temp]);
      var temp = deck[i]
      deck[i]= deck[spot];
      deck[spot]=temp;
    }
    // console.log(deck);
  }
  this.deal = function(){
    if(isShuffled){
      return deck.pop()
    }else{
      this.shuffle()
      return deck.pop()
    }
  }
  this.showCards = function(){console.log(deck.length);}
}

 var playerDeck = new Deck();
 playerDeck.reset();
 playerDeck.shuffle();

 var Jeff = new Player('Dave')
 Jeff.showHand()
 Jeff.takeCard(playerDeck.deal())
 Jeff.showHand()
 Jeff.takeCard(playerDeck.deal())
 Jeff.showHand()
 Jeff.takeCard(playerDeck.deal())
 Jeff.showHand()
 Jeff.takeCard(playerDeck.deal())
 Jeff.showHand()
 Jeff.discard(1)
 Jeff.showHand()
 Jeff.discard(1)
 Jeff.showHand()