const canvasEl = document.getElementById("canvas");
const ctx = canvasEl.getContext("2d");
let enemies=[];
class Launcher {
    constructor() {
        this.y = ctx.canvas.height;
        this.x = ctx.canvas.width / 2 - 25;
        this.w = 10;
        this.h = 50;
        this.direction;
        this.bg = "blue";
        this.missiles = [];
        this.render = function () {
            if (this.direction === "left") {
                this.x -= 5;
            } else if (this.direction === "right") {
                this.x += 5;
            }
            ctx.fillStyle = this.bg;
            for (var i = 0; i < this.missiles.length; i++) {
                let m = this.missiles[i];
                ctx.fillRect(m.x, m.y--, m.w, m.h);
            }
        };
    }
}
const myLauncher=new Launcher();
function animate(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    myLauncher.render();
    console.log(myLauncher.missiles);
}
document.addEventListener("keydown", (e) => {
    if (e.key === 'a') {
        myLauncher.direction = "left";
        console.log("left");
    }else if (e.key === 'd') {
        console.log("right");
    }else if (e.key === 'p') {
        console.log("shoot");
    }
});
document.addEventListener("keyup", (e) => {
    if (e.key === 'p') {
        myLauncher.missiles.push({
            x:myLauncher.x+myLauncher.w/2-2.5,
            y:myLauncher.y-10,
            w:5,
            h:10
        });
    }
});
setInterval(animate, 10);