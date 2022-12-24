var greet = document.getElementById("xmas_greet");
function hi() {
  let lang = document.documentElement.lang.toLowerCase();
  var now = new Date();
  if (now.getMonth() === 11 && now.getDate() < 26) {
    if (lang === "en") {
      greet.innerHTML = "Merry Christmas!<br>      、";
    }
    else if (lang === "zh-cn") {
      greet.innerHTML = "圣诞快乐！<br>      、";
    }
    else if (lang === "zh-tw") {
      greet.innerHTML = "聖誕快樂！<br>      、"
    }
  }
}
function hi_() {
  greet.innerHTML = "&nbsp;";
}
function xmas_easter() {
  var xmas_r = Math.floor(Math.random() * 5);
  var easter = document.getElementById("xmas_easter");
  if (xmas_r === 1 || xmas_r === 2) {
    easter.src = '../xmas/xmas_tree_rocky_tp.png';
  }
}
(function () {
  var snowflakes = [],
    moveAngle = 0,
    animationInterval;

  /**
   * Generates a random number between the min and max (inclusive).
   * @method getRandomNumber
   * @param {Number} min
   * @param {Number} max
   * @return {Number}
   */
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Creates a new snowflake div and returns it.
   * @method createSnowflake
   * @return {HTMLElement}
   */
  function createSnowflake() {
    var el = document.createElement('div'),
      style = el.style;

    style.borderRadius = '100%';
    style.border = getRandomNumber(1, 4) + 'px solid white';
    style.position = 'fixed';
    style.zIndex = '999999';
    style.boxShadow = '0 0 2px rgba(255,255,255,0.8)';
    style.top = getRandomNumber(0, window.innerHeight) + 'px';
    style.left = getRandomNumber(0, window.innerWidth) + 'px';

    return el;
  }

  /**
   * Calls the moveSnowflake method for each of the snowflakes in the cache.
   * @method moveSnowflakes
   * @return {Void}
   */
  function moveSnowflakes() {
    var l = snowflakes.length,
      i;

    moveAngle += 0.01;

    for (i = 0; i < l; i++) {
      moveSnowflake(snowflakes[i]);
    }
  }

  /**
   * Moves an individual snowflake element using some simple math.
   * @method moveSnowflake
   * @param {HTMLElement} el
   * @return {Void}
   */
  function moveSnowflake(el) {
    var style = el.style,
      height = window.innerHeight,
      radius,
      top;

    radius = parseInt(style.border, 10);

    top = parseInt(style.top, 10);
    top += Math.cos(moveAngle) + 1 + radius / 2;

    if (top > height) {
      resetSnowflake(el);
    } else {
      style.top = top + 'px';
    }
  }

  /**
   * Puts the snowflake back at the top in a random horizontal start position.
   * @method resetSnowflake
   * @param {HTMLElement} el
   * @return {Void}
   */
  function resetSnowflake(el) {
    var style = el.style;

    style.top = '0px';
    style.left = getRandomNumber(0, window.innerWidth) + 'px';
  }

  /**
   * The kick-off method. Asks how many snowflakes to make and then makes them!
   * @method setup
   * @return {Void}
   */
  function setup() {
    var number = 256,
      particle,
      i;

    // Setup snow particles
    for (i = 0; i < number; i++) {
      particle = snowflakes[i] = createSnowflake();
      document.body.appendChild(particle);
    }

    // Set animation intervals
    animationInterval = setInterval(moveSnowflakes, 33);
  }

  setup();
}());
window.onload = xmas_easter();