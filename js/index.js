const cards = document.querySelectorAll('.poker-cards');

//move the cards 
$(".poker-cards").draggable();


//flip the cards
function flipCard(){
	this.classList.toggle('flip');


};



cards.forEach(card => card.addEventListener('click', flipCard));


//function to deal the cards
$(function(){
	var parent = $('.poker-game');
	var img = parent.children()
	while (img.length){
		parent.append(img.splice(Math.floor(Math.random() * img.length),1)[0]);
	}
});



//class to set up the positions of the card after click the button

class PropietiesItem{
	constructor(firstX, secondX, thirdX, firstY,secondY,thirdY,fourthY, mfirstY){
		this.firstX = firstX;
		this.secondX = secondX
		this.thirdX = thirdX;
		this.firstY = firstY;
		this.secondY = secondY;
		this.thirdY = thirdY;
		this.fourthY = fourthY;
		this.mfirstY = mfirstY;
	}
}


var propieties = new PropietiesItem(5,150,450,400,670,740,810,570)


//variable to track the clicks
var clicks = 0;

//variable to store the sound
var sound = document.getElementById('sound');
//function to deal the cards
function start(){
	sound.play();
	clicks++;
	console.log(clicks);

	if(clicks === 1){
		/*<------------------------------------------------------------------------------------------------>*/
		$('.poker-cards').eq(1).offset({top:propieties.firstX, left:propieties.firstY});
		$('.poker-cards').eq(2).offset({top:propieties.firstX, left:propieties.firstY});
		$('.poker-cards').eq(3).offset({top:propieties.firstX, left:propieties.firstY});
		$('.poker-cards').eq(4).offset({top:propieties.firstX, left:propieties.firstY});
		/*<-------------------------------------------------------------------------------------------------->*/
		$('.poker-cards').eq(5).offset({top:propieties.secondX, left:propieties.mfirstY});
	  	$('.poker-cards').eq(6).offset({top:propieties.secondX, left:propieties.secondY});
		$('.poker-cards').eq(7).offset({top:propieties.secondX, left:propieties.thirdY});
		$('.poker-cards').eq(8).offset({top:propieties.secondX, left:propieties.fourthY});	
		$('.poker-cards').eq(5).removeClass("click",flipCard); // remove the class to flip the card
		$('.poker-cards').eq(6).removeClass("click",flipCard);
		$('.poker-cards').eq(7).removeClass("click",flipCard);
		$('.poker-cards').eq(8).removeClass("click",flipCard);	
		
		/*<--------------------------------------------------------------------------------------------------->*/
		$('.poker-cards').eq(9).offset({top:propieties.thirdX, left:propieties.firstY});
		$('.poker-cards').eq(10).offset({top:propieties.thirdX, left:propieties.firstY});
		$('.poker-cards').eq(11).offset({top:propieties.thirdX, left:propieties.firstY});
		$('.poker-cards').eq(12).offset({top:propieties.thirdX, left:propieties.firstY});

	}else if(clicks === 2){
		$('.poker-cards').eq(13).offset({top:propieties.firstX, left:propieties.firstY});
		$('.poker-cards').eq(14).offset({top:propieties.firstX, left:propieties.firstY});
		$('.poker-cards').eq(15).offset({top:propieties.firstX, left:propieties.firstY});
		$('.poker-cards').eq(16).offset({top:propieties.firstX, left:propieties.firstY});

		$('.poker-cards').eq(17).offset({top:propieties.thirdX, left:propieties.firstY});
		$('.poker-cards').eq(18).offset({top:propieties.thirdX, left:propieties.firstY});
		$('.poker-cards').eq(19).offset({top:propieties.thirdX, left:propieties.firstY});
		$('.poker-cards').eq(20).offset({top:propieties.thirdX, left:propieties.firstY});

	}else if(clicks === 3){
		$('.poker-cards').eq(21).offset({top:propieties.firstX, left:propieties.firstY});
		$('.poker-cards').eq(22).offset({top:propieties.firstX, left:propieties.firstY});
		$('.poker-cards').eq(23).offset({top:propieties.firstX, left:propieties.firstY});
		$('.poker-cards').eq(24).offset({top:propieties.firstX, left:propieties.firstY});

		$('.poker-cards').eq(25).offset({top:propieties.thirdX, left:propieties.firstY});
		$('.poker-cards').eq(26).offset({top:propieties.thirdX, left:propieties.firstY});
		$('.poker-cards').eq(27).offset({top:propieties.thirdX, left:propieties.firstY});
		$('.poker-cards').eq(28).offset({top:propieties.thirdX, left:propieties.firstY});
	}else if(clicks === 4){
		$('.poker-cards').eq(29).offset({top:propieties.firstX, left:propieties.firstY});
		$('.poker-cards').eq(30).offset({top:propieties.firstX, left:propieties.firstY});
		$('.poker-cards').eq(31).offset({top:propieties.firstX, left:propieties.firstY});
		$('.poker-cards').eq(32).offset({top:propieties.firstX, left:propieties.firstY});

		$('.poker-cards').eq(33).offset({top:propieties.thirdX, left:propieties.firstY});
		$('.poker-cards').eq(34).offset({top:propieties.thirdX, left:propieties.firstY});
		$('.poker-cards').eq(35).offset({top:propieties.thirdX, left:propieties.firstY});
		$('.poker-cards').eq(36).offset({top:propieties.thirdX, left:propieties.firstY});
	}else if(clicks === 5){
		$('.poker-cards').eq(37).offset({top:propieties.firstX, left:propieties.firstY});
		$('.poker-cards').eq(38).offset({top:propieties.firstX, left:propieties.firstY});
		$('.poker-cards').eq(39).offset({top:propieties.firstX, left:propieties.firstY});
		$('.poker-cards').eq(40).offset({top:propieties.firstX, left:propieties.firstY});

		$('.poker-cards').eq(41).offset({top:propieties.thirdX, left:propieties.firstY});
		$('.poker-cards').eq(42).offset({top:propieties.thirdX, left:propieties.firstY});
		$('.poker-cards').eq(43).offset({top:propieties.thirdX, left:propieties.firstY});
		$('.poker-cards').eq(44).offset({top:propieties.thirdX, left:propieties.firstY});

	}else if(clicks === 6){
		$('.poker-cards').eq(45).offset({top:propieties.firstX, left:propieties.firstY});
		$('.poker-cards').eq(46).offset({top:propieties.firstX, left:propieties.firstY});
		$('.poker-cards').eq(47).offset({top:propieties.firstX, left:propieties.firstY});
		$('.poker-cards').eq(48).offset({top:propieties.firstX, left:propieties.firstY});

		$('.poker-cards').eq(49).offset({top:propieties.thirdX, left:propieties.firstY});
		$('.poker-cards').eq(50).offset({top:propieties.thirdX, left:propieties.firstY});
		$('.poker-cards').eq(51).offset({top:propieties.thirdX, left:propieties.firstY});
		$('.poker-cards').eq(52).offset({top:propieties.thirdX, left:propieties.firstY});
	}
};

//array to store the players
var  players = [];

var player1 = prompt("Enter the name of the first player");
var player2 = prompt("Enter the name of the second player");

players[0] = player1;
players[1] = player2;

//variable to track who is playing
var whoseTurn = 0;
console.log(players[whoseTurn]);
$("#playing").text("Playing: "+players[whoseTurn]);

//function to change the player
$("#playing").dblclick(function(){
	if(whoseTurn == 0){
		whoseTurn = 1;
		$("#playing").text("Playing: "+players[whoseTurn]);

	}else if(whoseTurn == 1){
		whoseTurn = 0;
		$("#playing").text("Playing: "+players[whoseTurn]);
	}
});

//div  to display the players
$("#palyerone").text(players[0]);
$("#palyertwo").text(players[1]);



//variables to track the points
var score1 = 0;
var score2 = 0;
var cardsone  = 0;
var cardstwo = 0;


let clickedCard  = false;
let firstCard, secondCard;



//function to identify the cards clicked and the score for each player 
$(".poker-cards").click(function(){
	if(!clickedCard){
		clickedCard = true;
		firstCard = this;
	}else{
		clickedCard = false;
		secondCard = this;
	
	if(firstCard.dataset.cards == secondCard.dataset.cards){
		if(whoseTurn == 0){
			if(firstCard.dataset.cards == "one" && secondCard.dataset.cards == "one"){
				score1 = score1+=2
				cardsone = cardsone+=2;
				$("#cardsone").text("Cards: "+cardsone);
				$("#scoreone").text("Score: "+score1);
				firstCard.style.left = "80%"
				firstCard.style.top = "20%"
				secondCard.style.left = "80%"
				secondCard.style.top = "20%"
			}else if(firstCard.dataset.cards ==  secondCard.dataset.cards ){
				firstCard.style.left = "80%"
				firstCard.style.top = "20%"
				secondCard.style.left = "80%"
				secondCard.style.top = "20%"
				cardsone = cardsone+=2;
				$("#cardsone").text("Cards: "+cardsone);

			}/*
				
			}*/


			if(firstCard.dataset.score == "blackHeart" || secondCard.dataset.score == "blackHeart"){
				console.log("2 corazones")
				score1 = score1 + 1;
				$("#scoreone").text("Score: " +score1)
				cardsone = cardsone+=2;
				$("#cardsone").text("Cards: "+cardsone);
			}else if(firstCard.dataset.score == "bigTen" || secondCard.dataset.score == "bigTen"){
				console.log("2 puntos");
				score1 = score1 + 2;
				$("#scoreone").text("Score: "+score1);
				cardsone = cardsone+=2;
				$("#cardsone").text("Cards: "+cardsone);
			}


			//
		}else if(whoseTurn == 1){   //code for the second player
			if(firstCard.dataset.cards == "one"  && secondCard.dataset.cards == "one"){
				score2 = score2+=2
				$("#scoretwo").text("Score: " + score2)
				cardstwo = cardstwo+=2;
				$("#cardstwo").text("Cards: "+cardstwo);
				firstCard.style.left = "80%"
				firstCard.style.top = "350px"
				secondCard.style.left = "80%"
				secondCard.style.top = "350px"
				
			
			}else if(firstCard.dataset.cards ==  secondCard.dataset.cards ){
				firstCard.style.left = "80%"
				firstCard.style.top = "350px"
				secondCard.style.left = "80%"
				secondCard.style.top = "350px"
				cardstwo = cardstwo+=2;
				$("#cardstwo").text("Cards: "+cardstwo);

			}


			if(firstCard.dataset.score == "blackHeart" || secondCard.dataset.score == "blackHeart"){
				console.log("2 corazones")
				score2 = score2 + 1;
				$("#scoretwo").text("Score: " +score2)
				cardstwo = cardstwo+=2;
				$("#cardstwo").text("Cards: "+cardstwo);
			}else if(firstCard.dataset.score == "bigTen" || secondCard.dataset.score == "bigTen"){
				console.log("2 puntos");
				score2 = score2 + 2;
				$("#scoretwo").text("Score: "+score2)
				cardstwo = cardstwo+=2;
				$("#cardstwo").text("Cards: "+cardstwo);;
			}


		}   
	}
}
})