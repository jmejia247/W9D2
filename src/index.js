console.log("Webpack is working!")

const MovingObject = require("./moving_object.js");
window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function () {
    const canvasEl = document.getElementById("game-canvas");
    // const canvasEl = document.getElementsByTagName("canvas")[0];
    const ctx = canvasEl.getContext("2d");
})