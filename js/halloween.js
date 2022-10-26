var thanks = ["Thank you!!! ^w^", "Awweeee! Thank you!(≧▽≦)", "Thannnnks! They looks so delicious!!! o(≧▽≦)o ", "How nice these candies are!!!o((>ω< ))o", "Thank you!!! I won't spoil your home this time!"];
var thanks1 = ["Awwww It's lollipop!!!", "It looks so so delicious!!!", "Aweeeee! Thank you 4 the lollipop!!! o((>ω< ))o ", "Thank you!!! I won't spoil your home this time!", "I love lollipop!!!", "Thank you!!! ^w^"];
var thanks2 = ["Thannks! These chocolate looks delicious!!!", "Thank you for the chocolate!!!", "Aweeee! I wonder if there's meow chcolate cookies!", "<em>wags my tail</em>", "Thank you!!! I won't spoil your home this time!"];
var thanks3 = ["Wow! Is this pudding? (★ ω ★)", "Awweeee! Thank you!(≧▽≦)", "This looks so soft! So cute!", "Thank you!!! I won't spoil your home this time!", "It looks so so delicious!!!"];
var num= 0;
var numl= 0;
var p=document.getElementById("halloween_text");
function giveCandy1(){
    p.innerHTML=thanks[Math.floor(Math.random()*5)];
}
function giveCandy2(){
    p.innerHTML=thanks1[Math.floor(Math.random()*5)];
}
function giveCandy3(){
    p.innerHTML=thanks2[Math.floor(Math.random()*5)];
}
function giveCandy4(){
    p.innerHTML=thanks3[Math.floor(Math.random()*5)];
}