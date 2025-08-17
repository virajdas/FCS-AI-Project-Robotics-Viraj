let text = document.getElementById("text");
let background = document.getElementById("parallax-1");
let earth = document.getElementById("parallax-2");
let robot = document.getElementById("parallax-3");

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    text.style.marginTop = value * 0.5 + "px";
    earth.style.top = value * -0.05 + "px";
    robot.style.top = value * -0.5 + "px";
});