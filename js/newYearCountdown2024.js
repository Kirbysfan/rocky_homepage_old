document.getElementById("newYearStatus").style.width = "100%"
document.getElementById("newYearStatus").style.height = "8px"
document.getElementById("newYearStatus").style.overflow = "hidden"
document.getElementById("newYearStatusP").style.height = "8px"
document.getElementById("newYearStatusP").style.margin = "auto"
document.getElementById("newYearStatusP").style.backgroundColor = "#FFF";
const countDown = setInterval(() => {
    var countDownDate = new Date(`Jan 1, 2024 0:00:00`).getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (days < 1) {
        days = ""
    }
    let show;
    if (hours === 0 && minutes === 0 && seconds <= 60) {
        if (seconds < 10) {
            seconds = `0${seconds}`
        }
        show = seconds
    } else {
        if (hours < 10) {
            hours = `0${hours}`
        }
        if (minutes < 10) {
            minutes = `0${minutes}`
        }
        if (seconds < 10) {
            seconds = `0${seconds}`
        }
        show = `<h1>${days} ${hours}:${minutes}:${seconds}</h1>`;
    }


    document.getElementById("newYearCountdown").innerHTML = show;
    document.getElementById("newYearStatusP").style.width = `${(distance / 86400000) * 100}%`
    if (distance < 0) {
        clearInterval(countDown);
        document.getElementById("newYearStatus").style.display = "none"
        document.getElementById("newYearCountdown").innerHTML =
            `<h1>` +
            `<span class="purple">H</span>`+
            `<span class="red">a</span>`+
            `<span class="orange">p</span>`+
            `<span class="yellow">p</span>`+
            `<span class="green">y</span>`+
            `<span class="aqua">&nbsp</span>`+
            `<span class="blue">n</span>`+
            `<span class="purple">e</span>`+
            `<span class="red">w</span>`+
            `<span class="purple">&nbsp;</span>`+
            `<span class="blue">y</span>`+
            `<span class="aqua">e</span>`+
            `<span class="green">a</span>`+
            `<span class="yellow">r</span>`+
            `<span class="orange">!</span>`+
            `<span class="red">!</span>`+
            `<span class="purple">!</span>`+
            `</h1>`;
    }
}, 1000);