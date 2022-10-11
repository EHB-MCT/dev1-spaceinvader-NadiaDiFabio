"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawLine();

function drawLine() {

context.fillStyle = "black";
context.beginPath();
context.rect(50, 50, 300, 300);
context.fill();

context.fillStyle = "#00ff00";
context.beginPath();
context.rect(75, 75, 250, 50);
context.fill();

context.fillStyle = "#00ff00";
context.beginPath();
context.rect(125, 175, 150, 50);
context.fill();

context.fillStyle = "#00ff00";
context.beginPath();
context.rect(75, 225, 50, 50);
context.fill();

context.fillStyle = "#00ff00";
context.beginPath();
context.rect(275, 225, 50, 50);
context.fill();

context.fillStyle = "#00ff00";
context.beginPath();
context.rect(175, 275, 50, 50);
context.fill();

}



