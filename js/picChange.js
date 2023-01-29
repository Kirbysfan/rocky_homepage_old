var dt_en = ["Artwork by 語嫿", "Artwork by 薰凝", "Artwork by 朔"];
var dt_sc = ["喵绘师：语婳", "喵绘师：薰凝", "喵绘师：朔"];
var dt_tc = ["喵繪師：語嫿", "喵繪師：薰凝", "喵繪師：朔"];
var count = 1;
function change() {
    let lang = document.documentElement.lang.toLowerCase();
    var detail = document.getElementById("p_dt");
    var pic = document.getElementById("PicChange");
    count++;
    pic.src = '../ss/' + count + '.png';
    if (count > 3) {
        count = 1;
        pic.src = '../ss/' + count + '.png';
    }
    if (lang === "en") {
        detail.innerHTML = dt_en[count - 1];
    }
    else if (lang === "zh-cn") {
        detail.innerHTML = dt_sc[count - 1];
    }
    else if (lang == "zh-tw") {
        detail.innerHTML = dt_tc[count - 1];
    }
}
function change_minus() {
    let lang = document.documentElement.lang.toLowerCase();
    var detail = document.getElementById("p_dt");
    var pic = document.getElementById("PicChange");
    count--;
    pic.src = '../ss/' + count + '.png';
    if (count == 0) {
        count = 3;
        pic.src = '../ss/' + count + '.png';
    }
    if (lang === "en") {
        detail.innerHTML = dt_en[count - 1];
    }
    else if (lang === "zh-cn") {
        detail.innerHTML = dt_sc[count - 1];
    }
    else if (lang == "zh-tw") {
        detail.innerHTML = dt_tc[count - 1];
    }
}
function showButton() {
    var buttons = document.getElementById("c_button");
    buttons.style.display = "flex";
}
function hideButton() {
    var buttons = document.getElementById("c_button");
    buttons.style.display = "none";
}
setInterval("change()", 10000);