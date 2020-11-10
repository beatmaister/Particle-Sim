const context = document.querySelector('canvas').getContext("2d");

const screen = {
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight
};
let spark = [];
let sparkIndex = 0;
var cancel = "";
context.canvas.width = screen.width;
context.canvas.height = screen.height;

class Particle {
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



for(let i =0; i<100; i++){
    let radius = Math.random() * 10 + 5;
    let x = screen.width / 2;
    let y = screen.height / 2;
    let color = "hsl("+parseInt(Math.random()*360, 10)+", 50%, 50%)";
    let v = {
        x: Math.random() * 2 - 1,
        y: Math.random() * -3 
    };

    spark.push(new Particle (radius, x, y, v, color));
}
for(let i =0; i<100; i++){
    let radius = Math.random() * 10 + 5;
    let x = screen.width / 2;
    let y = screen.height / 2;
    let color = "hsl("+parseInt(Math.random()*360, 10)+", 50%, 50%)";
    let v = {
        x: Math.random() * 2 - 1,
        y: Math.random() * 3 
    };

    spark.push(new Particle (radius, x, y, v, color));
}
for(let i =0; i<100; i++){
    let radius = Math.random() * 10 + 5;
    let x = screen.width / 2;
    let y = screen.height / 2;
    let color = "hsl("+parseInt(Math.random()*360, 10)+", 50%, 50%)";
    let v = {
        x: Math.random() * 3,
        y: Math.random() * 2 - 1 
    };

    spark.push(new Particle (radius, x, y, v, color));
}
for(let i =0; i<100; i++){
    let radius = Math.random() * 10 + 5;
    let x = screen.width / 2;
    let y = screen.height / 2;
    let color = "hsl("+parseInt(Math.random()*360, 10)+", 50%, 50%)";
    let v = {
        x: Math.random() * -3,
        y: Math.random() * 2 - 1
    };

    spark.push(new Particle (radius, x, y, v, color));
}



function loop() {
    context.fillStyle = "black";
    context.fillRect(screen.x, screen.y, screen.width, screen.height);
    
    for(let i = 0; i< spark.length; i++){
        spark[i].draw()
        spark[i].fall()
        if(spark[i].y >= screen.height || spark[i].y <=0){
            spark[i].y = screen.height / 2,
            spark[i].x = screen.width / 2,
            spark[i].v.x = Math.random() * 2 - 1,
            spark[i].v.y = Math.random() * 2 - 1
        }
        if(spark[i].x >= screen.width || spark[i].x <=0){
            spark[i].y = screen.height / 2,
            spark[i].x = screen.width / 2,
            spark[i].v.x = Math.random() * 2 - 1,
            spark[i].v.y = Math.random() * 2 - 1
        }
        
          
    }
    requestAnimationFrame(loop);
    
}
var startButton = document.getElementById("btn");
startButton.addEventListener("click", startAnimation);
window.requestAnimationFrame(loop)

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



