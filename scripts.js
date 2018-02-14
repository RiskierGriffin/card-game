function initialize(){
    function Card(value,suit,imgSrc){
        this.value = value;
        this.suit = suit;
        this.imgSrc = imgSrc;
    }
    card = new Card(2,"clubs","images/cards/2c.png");
    alert(card.value);
}