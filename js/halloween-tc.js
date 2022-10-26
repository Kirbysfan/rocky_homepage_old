var thanks = ["謝謝！！！ ^w^", "喵耶！謝謝你！！！ (≧▽≦)", "謝謝喵！看著就好好吃！！！ o(≧▽≦)o ", "好棒的糖果耶！！！ o((>ω< ))o", "謝謝你！！！我不會糟蹋你的家了！"];
var thanks1 = ["喵耶！！是棒棒糖！！！", "看著就好好吃耶！！！", "喵耶！！！謝謝你的棒棒糖！！！ o((>ω< ))o ", "謝謝你！！！我不會糟蹋你的家了！", "我愛棒棒糖！！！"];
var thanks2 = ["謝謝喵！這些巧克力看著就好好吃！！！", "謝謝你的巧克力喵！！！", "喵耶！！！我在想會不會有喵巧克力餅乾！！！", "<em>開心地搖起尾巴</em>", "謝謝你！！！我不會糟蹋你的家了！"];
var thanks3 = ["喵！這是布丁嗎？ (★ ω ★)", "喵耶！謝謝你！！！ (≧▽≦)", "看起來好軟好可愛！！！", "謝謝你！！！我不會糟蹋你的家了！", "看起來就好好吃耶！！！"];
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