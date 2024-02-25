
function myFunction() 
{
var randomNumber1=Math.floor(Math.random() * 6)+1;
var randomConcatSrc= "./images/"+ "dice" + randomNumber1 + ".png";
var alternativeText1="A six-sided dice showing "+ randomNumber1;
document.querySelectorAll("img")[0].setAttribute("src", randomConcatSrc);
/*document.getElementsByClassName("img1")[0].src="./images/dice6.png";*/
document.querySelectorAll("img")[0].setAttribute("alt", alternativeText1); 

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomConcat= "./images/"+ "dice" + randomNumber2 + ".png";
var alternativeText2="A six-sided dice showing"+ randomNumber2;
document.querySelectorAll("img")[1].setAttribute("src", randomConcat );
document.querySelectorAll("img")[1].setAttribute("alt", alternativeText2); 

if (randomNumber1 > randomNumber2) {
    document.querySelector(".winner").innerHTML = "Player 1 Wins! 🚩";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector(".winner").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector(".winner").innerHTML = "Draw!";
  }
  document.querySelector(".game").textContent="Reload Fun";
  document.querySelector(".game").setAttribute("onClick", "myReset()"); 
  
}
function myReset()
{
    location.reload();
}





