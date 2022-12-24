var thanks = ["谢谢！！！ ^w^", "喵耶！谢谢你！！！(≧▽≦)", "谢谢喵！ 看着就好好吃！！！ o(≧▽≦)o ", "好棒的糖果耶！！！o((>ω< ))o", "谢谢你！！！我不会糟蹋你的家了！"];
var thanks1 = ["喵耶！！是棒棒糖！！！", "看着就好好吃耶！！！", "喵耶！！！ 谢谢你的棒棒糖！！！ o((>ω< ))o ", "谢谢你！！！我不会糟蹋你的家了！", "我爱棒棒糖！！！", "谢谢！！！ ^w^"];
var thanks2 = ["谢谢喵！ 这些巧克力看着就好好吃！！！", "谢谢你的巧克力喵！！！", "喵耶！！！ 我在想会不会有喵巧克力饼干！！！", "<em>开心地摇起尾巴</em>", "谢谢你！！！我不会糟蹋你的家了！"];
var thanks3 = ["喵！这是布丁吗？ (★ ω ★)", "喵耶！谢谢你！！！(≧▽≦)", "看起来好软好可爱！！！", "谢谢你！！！我不会糟蹋你的家了！", "看起来就好好吃耶！！！"];
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