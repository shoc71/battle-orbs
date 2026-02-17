import { Boundary} from "./boundary.js";
import { Ball } from "./ball.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = Math.min(600, window.innerHeight * 0.8);
}

resizeCanvas(); 

const canvasWidth = Math.min(500, canvas.width - 25);
const canvasX = (canvas.width - canvasWidth) / 2;

const boundary = new Boundary(
    context,
    canvasX,
    50,
    canvasWidth,
    500
)

var ball1 = new Ball(context, boundary, {
    x: 100,
    y: 125,
    radius: 35,
    ballColor: "red",
    numberColor: "white",
    numberFont: '20px Arial',
    health: 100,
    velocityX: 3,
    velocityY: -2,
})

var ball2 = new Ball(context, boundary, {
    x: boundary.width - 100,
    y: 125,
    radius: 35,
    ballColor: "#00c900ff",
    numberColor: "white",
    numberFont: '20px Arial',
    health: 100,
    velocityX: 3,
    velocityY: 2,
})

function animate() {

    context.clearRect(0, 0, canvas.width, canvas.height);

    boundary.draw();
    ball1.draw();
    ball2.draw();

    requestAnimationFrame(animate)
}

window.addEventListener("resize", resizeCanvas());

animate();
