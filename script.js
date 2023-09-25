function initCanvas(){
    let canvasEl=document.getElementById("canvas");
    let ctx=canvasEl.getContext("2d");
    const cH= ctx.canvas.height;
    const cW= ctx.canvas.width;
    let enemies=[];
    class Launcher {
        constructor() {
            this.y = cH;
            this.x = cW / 2 - 25;
            this.w = 50;
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
        ctx.clearRect(0,0,cW,cH);
        myLauncher.render();
    }
    setInterval(animate,10);
    document.addEventListener("keydown", (e)=>{
        if(e.key==='a'){
            myLauncher.direction="left";
            console.log("left");
        }
    });
    document.addEventListener("keyup", (e)=>{
        if(e.key==='p'){
            myLauncher.missiles.push({
                x:myLauncher.x+myLauncher.w/2-2.5,
                y:myLauncher.y-10,
                w:5,
                h:10
            });
        }
    });
}
window.addEventListener("load",initCanvas);