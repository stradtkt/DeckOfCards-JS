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
    shuffle() {
        let index = this.deck.length, temp_val, random_idx;
        while(0 != index) {
            random_idx = Math.floor(Math.random() * index);
            index -= 1;
            temp_val = this.deck[index];
            this.dexk[index] = this.deck[random_idx];
            this.deck[random_idx] = temp_val;
        }
    }
    deal() {
        let card = this.deck.shift();
        this.dealt_cards.push(card);
        return card;
    }
    replace() {
        this.deck.unshift(this.dealt_cards.shift())
    }
    clear_deck() {
        this.deck = []
    }
};
deck = new Deck()
deck.generate_deck()
deck.shuffle()
console.log(deck.deal())