class Deck {
    constructor() {
        this.deck = []
        this.dealt_cards = []
    }
    generate_deck() {
        let card = (suit, value) => {
            this.name = value + ' of ' + suit;
            this.suit = suit;
            this.value = value;
            return {name:this.name, suit:this.suit, value:this.value};
        }
        let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        let suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];

        for(let i = 0; i < suits.length; i++) {
            for(let j = 0; j < values.length; j++) {
                this.deck.push(card(suits[i], values[j]));
            }
        }
    }
    print() {
        if(this.deck.length == 0) {
            console.log('The deck has been generated');
        } else {
            for(let i = 0; i < this.decks.length; i++) {
                console.log(this.deck[i]);
            }
        }
    }
    
}