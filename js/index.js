//variable to store the cards
const cards = document.querySelectorAll('.poker-cards')



//function to move the cards using jquery
$(function(){
	$(".poker-cards").draggable();

})

//array to store the players
var players = [];

var player1 = prompt("Enter the  name of the first player");
var player2 = prompt("Enter the  name of the second player");
players[0] = player1;
players[1] = player2;

//variable to track who is playing
var whoseTurn = 0;
console.log(players[whoseTurn]);


	$(".poker-cards").dblclick(function(){
		if (whoseTurn == 0){
		whoseTurn = 1;
		console.log(players[whoseTurn]);
	}else if(whoseTurn == 1){
		whoseTurn = 0;
		console.log(players[whoseTurn]);
	}
	})


//function to flip the cards
function flipCard(){
	this.classList.toggle('flip');

}

//function to shuffle the  DOM 
$(function(){
	var parent = $(".poker-game");
	var img  = parent.children();
	while (img.length){
		parent.append(img.splice(Math.floor(Math.random() * img.length),1)[0]);
	}
});

//class to set up  the propieties and attribute  of the cards
class PropietiesItem{
	constructor(firstX, secondX, thirdX, firstY,secondY,thirdY,fourthY){
		this.firstX = firstX;
		this.secondX = secondX
		this.thirdX = thirdX;
		this.firstY = firstY;
		this.secondY = secondY;
		this.thirdY = thirdY;
		this.fourthY = fourthY;
	}
}

var propieties = new PropietiesItem(25,250,450,400,470,540,610)

//variable to track the clicks
var clicks = 0;


//function to set up the initial position of the cards to start the game

function start(){
	clicks++;
	console.log(clicks);
	if(clicks === 1){
		/*<------------------------------------------------------------------------------------------------>*/
		$('.poker-cards').eq(1).offset({top:propieties.firstX, left:propieties.firstY});
		$('.poker-cards').eq(2).offset({top:propieties.firstX, left:propieties.secondY});
		$('.poker-cards').eq(3).offset({top:propieties.firstX, left:propieties.thirdY});
		$('.poker-cards').eq(4).offset({top:propieties.firstX, left:propieties.fourthY});
		/*<-------------------------------------------------------------------------------------------------->*/
		$('.poker-cards').eq(5).offset({top:propieties.secondX, left:propieties.firstY});
		$('.poker-cards').eq(6).offset({top:propieties.secondX, left:propieties.secondY});
		$('.poker-cards').eq(7).offset({top:propieties.secondX, left:propieties.thirdY});
		$('.poker-cards').eq(8).offset({top:propieties.secondX, left:propieties.fourthY});
		/*<--------------------------------------------------------------------------------------------------->*/
		$('.poker-cards').eq(9).offset({top:propieties.thirdX, left:propieties.firstY});
		$('.poker-cards').eq(10).offset({top:propieties.thirdX, left:propieties.secondY});
		$('.poker-cards').eq(11).offset({top:propieties.thirdX, left:propieties.thirdY});
		$('.poker-cards').eq(12).offset({top:propieties.thirdX, left:propieties.fourthY});

	}else if(clicks === 2){
		$('.poker-cards').eq(13).offset({top:propieties.firstX, left:propieties.firstY});
		$('.poker-cards').eq(14).offset({top:propieties.firstX, left:propieties.secondY});
		$('.poker-cards').eq(15).offset({top:propieties.firstX, left:propieties.thirdY});
		$('.poker-cards').eq(16).offset({top:propieties.firstX, left:propieties.fourthY});

		$('.poker-cards').eq(17).offset({top:propieties.thirdX, left:propieties.firstY});
		$('.poker-cards').eq(18).offset({top:propieties.thirdX, left:propieties.secondY});
		$('.poker-cards').eq(19).offset({top:propieties.thirdX, left:propieties.thirdY});
		$('.poker-cards').eq(20).offset({top:propieties.thirdX, left:propieties.fourthY});

	}else if(clicks === 3){
		$('.poker-cards').eq(21).offset({top:propieties.firstX, left:propieties.firstY});
		$('.poker-cards').eq(22).offset({top:propieties.firstX, left:propieties.secondY});
		$('.poker-cards').eq(23).offset({top:propieties.firstX, left:propieties.thirdY});
		$('.poker-cards').eq(24).offset({top:propieties.firstX, left:propieties.fourthY});

		$('.poker-cards').eq(25).offset({top:propieties.thirdX, left:propieties.firstY});
		$('.poker-cards').eq(26).offset({top:propieties.thirdX, left:propieties.secondY});
		$('.poker-cards').eq(27).offset({top:propieties.thirdX, left:propieties.thirdY});
		$('.poker-cards').eq(28).offset({top:propieties.thirdX, left:propieties.fourthY});
	}else if(clicks === 4){
		$('.poker-cards').eq(29).offset({top:propieties.firstX, left:propieties.firstY});
		$('.poker-cards').eq(30).offset({top:propieties.firstX, left:propieties.secondY});
		$('.poker-cards').eq(31).offset({top:propieties.firstX, left:propieties.thirdY});
		$('.poker-cards').eq(32).offset({top:propieties.firstX, left:propieties.fourthY});

		$('.poker-cards').eq(33).offset({top:propieties.thirdX, left:propieties.firstY});
		$('.poker-cards').eq(34).offset({top:propieties.thirdX, left:propieties.secondY});
		$('.poker-cards').eq(35).offset({top:propieties.thirdX, left:propieties.thirdY});
		$('.poker-cards').eq(36).offset({top:propieties.thirdX, left:propieties.fourthY});
	}else if(clicks === 5){
		$('.poker-cards').eq(37).offset({top:propieties.firstX, left:propieties.firstY});
		$('.poker-cards').eq(38).offset({top:propieties.firstX, left:propieties.secondY});
		$('.poker-cards').eq(39).offset({top:propieties.firstX, left:propieties.thirdY});
		$('.poker-cards').eq(40).offset({top:propieties.firstX, left:propieties.fourthY});

		$('.poker-cards').eq(41).offset({top:propieties.thirdX, left:propieties.firstY});
		$('.poker-cards').eq(42).offset({top:propieties.thirdX, left:propieties.secondY});
		$('.poker-cards').eq(43).offset({top:propieties.thirdX, left:propieties.thirdY});
		$('.poker-cards').eq(44).offset({top:propieties.thirdX, left:propieties.fourthY});

	}else if(clicks === 6){
		$('.poker-cards').eq(45).offset({top:propieties.firstX, left:propieties.firstY});
		$('.poker-cards').eq(46).offset({top:propieties.firstX, left:propieties.secondY});
		$('.poker-cards').eq(47).offset({top:propieties.firstX, left:propieties.thirdY});
		$('.poker-cards').eq(48).offset({top:propieties.firstX, left:propieties.fourthY});

		$('.poker-cards').eq(49).offset({top:propieties.thirdX, left:propieties.firstY});
		$('.poker-cards').eq(50).offset({top:propieties.thirdX, left:propieties.secondY});
		$('.poker-cards').eq(51).offset({top:propieties.thirdX, left:propieties.thirdY});
		$('.poker-cards').eq(52).offset({top:propieties.thirdX, left:propieties.fourthY});
	}

};


cards.forEach(card => card.addEventListener('click', flipCard));
