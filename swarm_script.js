const context = document.querySelector('canvas').getContext("2d");

const screen = {
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight
};

context.canvas.width = screen.width;
context.canvas.height = screen.height;

class Swarm {
    constructor(radius, x, y, v, color){
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.v = v;
        this.color = color;
    }

    draw(){
        context.beginPath();
        context.arc(this.x, this.y, this.radius, Math.PI * 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
    }

    fall(){
        this.x += this.v.x;
        this.y += this.v.y;
    }
}

let swarm = [];

for(let i =0; i<200; i++){
    let radius = 5;
    let x = Math.random() * 200 + 1;
    let y = Math.random() * 200 + 1;
    let v = {
        x: 6,
        y: 4 
    };
    let color = "rgba(255, 255, 255, .8)"

    swarm.push(new Swarm(radius, x, y, v, color));
}

function loop() {
    context.fillStyle = "black";
    context.fillRect(screen.x, screen.y, screen.width, screen.height);

    for(let i = 0; i< swarm.length; i++){
        swarm[i].draw()
        swarm[i].fall()

        if(swarm[i].y - swarm[i].radius >= screen.height){
            swarm[i].v.y *= -1;
        }
        if(swarm[i].y + swarm[i].radius <= 0){
            swarm[i].v.y *= -1;
        }

        if(swarm[i].x -swarm[i].radius <= 0 || swarm[i].x -swarm[i].radius >= screen.width){
            swarm[i].v.x *= -1;
        }
        
    }
    window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
var startButton = document.getElementById("btn");
startButton.addEventListener("click", startAnimation);


function startAnimation(event){
    if(this.textContent === "Play"){
        console.log('clicked play')
        this.textContent = "Pause"
        requestAnimationFrame(loop)
    }
    if(this.textContent === "Pause"){
        console.log('clicked pause')
        cancelAnimationFrame(cancel);
        this.textContent = "Play"
    }
}
