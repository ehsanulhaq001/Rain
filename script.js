let rain;
let speed;
let color;
window.onload = function() {
    setup();
    setInterval(draw, 1000 / 100);
}

function setup() {
    cnv = document.querySelector("#canvas");
    cnv.width = window.innerWidth;
    cnv.height = window.innerHeight;
    color = document.querySelector("#color").value;
    cnv.style.backgroundColor = color;
    ctx = cnv.getContext("2d");
    speed = document.querySelector("#speed").value;

    rain = new Array(Math.floor(cnv.width / 3));
    for (let i = 0; i < rain.length; i++) {
        rain[i] = new Rain();
    }
}

function draw() {
    color = document.querySelector("#color").value;
    cnv.style.backgroundColor = color;
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    for (let i = 0; i < rain.length; i++) {
        rain[i].show();
        if (rain[i].y > cnv.height) {
            rain[i] = new Rain();
        }
        rain[i].update();
    }

}