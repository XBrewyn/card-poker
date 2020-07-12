## Feedback
### Lenguague
All files, comments, functions ...whatever, should be in english [File](https://github.com/jochylazala/card-poker/tree/master/css).
 
### Clean code
I could see in this project your code isn't organize and also you're 
repeating the same code so many times for example: 
1. You could use a loop to simplify those lines [File](https://github.com/jochylazala/card-poker/blob/master/js/index.js#L61).
```
  $('.poker-cards').eq(13).offset({top:propieties.firstX, left:propieties.firstY});
  $('.poker-cards').eq(14).offset({top:propieties.firstX, left:propieties.firstY});
  $('.poker-cards').eq(15).offset({top:propieties.firstX, left:propieties.firstY});
  $('.poker-cards').eq(16).offset({top:propieties.firstX, left:propieties.firstY});
  $('.poker-cards').eq(17).offset({top:propieties.thirdX, left:propieties.firstY});
  $('.poker-cards').eq(18).offset({top:propieties.thirdX, left:propieties.firstY});
  $('.poker-cards').eq(19).offset({top:propieties.thirdX, left:propieties.firstY});
  $('.poker-cards').eq(20).offset({top:propieties.thirdX, left:propieties.firstY});
```
2. The same here [File](https://github.com/jochylazala/card-poker/blob/master/js/index.js#L196).
```
  firstCard.style.left = "80%"
  firstCard.style.top = "20%"
  secondCard.style.left = "80%"
  secondCard.style.top = "20%"
```
3. In this case you can use Javascript to simplify the HTML code [File](https://github.com/jochylazala/card-poker/blob/master/index.html). If you have some question about it ask me.
 ```
    <div class="poker-cards" data-cards="one">
      <img class="front-card" src="cards/bg_c1.gif">
      <img class="back-card" src="cards/back.jpg">
    </div>

    <div class="poker-cards" data-cards="two">
      <img class="front-card" src="cards/bg_c2.gif">
      <img class="back-card" src="cards/back.jpg">
    </div>
```
4. The code should be indented. You can see in this example the [CSS code](https://github.com/jochylazala/card-poker/blob/master/css/main.css#L2) should have 2 spaces and also here [Javascript code](https://github.com/jochylazala/card-poker/blob/master/js/index.js#L9)

You can watch this tutorial about [clean code](https://www.youtube.com/watch?v=WrbDaqKyhP4). 

### Object-oriented programming (OOP)
One of reasons most important thing in this project is use `Object-oriented programming`. You should know some concept about `Object-oriented programming`
like `inherit`, `attributes`, `methods`, `instance or object`, `method constructor`, `varibles class`, `varibles instance`, `polymorphism`...etc. If you want, you can watch
this tutorial to have some idea what I'm talking about [PDO](https://www.youtube.com/watch?v=5Ohme4A2Weg&list=PLU8oAlHdN5BlvPxziopYZRd55pdqFwkeS&index=24).

### Don't use Libaries
`jQuery` is a `JavaScript` library designed to simplify `HTML DOM` tree traversal and manipulation. You shouldn't use any libaries can help you, 
you should build your own `tools`. This is one of those reasons to this `mini-project`.

### Documentation
This project should have a documentation where you can explain all details about it.

### Folder Structure
  Here I've put an example as you can organize your mini-project.

  ```bash
   card-poker
   ├── app - Inside this folder should be all your classes.
   │   ├── cards.js
   │   ├── table.js
   |   ├── user.js
   |   └── main.js
   │
   ├── static
   │   ├── css
   │   |    ├── style.css
   │   |    └── main.css
   │   |
   │   └── images
   |       └─── cards - inside this folder should be all your cards images
   │
   ├── index.html
   └── README.rm
```
