// console.log("Webpack is working!")

// const MovingObject = require("./moving_object.js");
// window.MovingObject = MovingObject;

// document.addEventListener("DOMContentLoaded", function () {
//     const canvasEl = document.getElementById("game-canvas");
//     // const canvasEl = document.getElementsByTagName("canvas")[0];
//     const ctx = canvasEl.getContext("2d");
// })


console.log('webpack is working')
// const test = require('./test.js');
const MovingObject = require('./moving_object.js');
window.MovingObject = MovingObject;
// document.addEventListener('DOMContentLoaded', function () {
//     const canvasEl = document.getElementById("game-canvas");
//     canvasEl.height = 600;
//     canvasEl.width = 1000;

//     const ctx = canvasEl.getContext('2d');
//     ctx.fillStyle = 'black';
//     ctx.fillRect(20, 20, 1000, 600);
//     const mo = new MovingObject({
//         pos: [30, 30],
//         vel: [10, 10],
//         radius: 5,
//         color: "#00FF00"
//     });
//     mo.draw(ctx);
// });


document.addEventListener('DOMContentLoaded', function () {

    const canvasEl = document.getElementById('game-canvas');
    canvasEl.width = window.innerWidth;
    canvasEl.height = window.innerHeight;

    const ctx = canvasEl.getContext('2d');

    const mo = new MovingObject({
        pos: [0, 300],
        vel: [30, 30],
        radius: 50,
        color: "#00FF00"
    });

    const mo2 = new MovingObject({
        pos: [2435, 300],
        vel: [-30, 30],
        radius: 50,
        color: "#00FF00"
    });

    function drawTest() {
        debugger
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        mo.move(ctx);
        mo2.move(ctx);
    }
    setInterval(drawTest.bind(null, ctx), 100)

})