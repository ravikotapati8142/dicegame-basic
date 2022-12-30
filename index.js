var randomNumber=Math.floor(Math.random()*6)+1;
var randomImg="dice"+randomNumber+".png";
var RandomSource="images/"+randomImg;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",RandomSource);
 /*------------------------*/
 var randomnumber2=Math.floor(Math.random()*6)+1;
 var randomImage2="dice"+randomnumber2+".png";
 var RandomSource2="images/"+randomImage2;
 var image2=document.querySelectorAll("img")[1];
 image2.setAttribute("src",RandomSource2);

 if(randomNumber>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
 }
 else if(randomnumber2>randomNumber){
    document.querySelector("h1").innerHTML="Player 2 wins!";
 }
 else{
    document.querySelector("h1").innerHTML="Draw!";
 }