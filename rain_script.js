window.addEventListener("load", function(){
    var el = document.createElement("div");
    document.getElementById("load").appendChild(el);
    var frames, duplicate,  x, y;
    duplicate = document.getElementById("load").innerHTML;
    document.getElementById("load").innerHTML = duplicate.repeat(10);
    frames = document.getElementById("load").children;
    setInterval(function(){
        x = document.documentElement.clientWidth - 1, y = document.documentElement.clientHeight - 100;
        for(var i = 0; i < frames.length; i++){
            frames[i].setAttribute("style", "position:absolute; height:100px; width:1px;left:" + Math.random() * x +"px;top:" +
            Math.random()* +y + "px;");
            console.log("generated");
        }
    })
})

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
