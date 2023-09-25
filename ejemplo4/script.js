const canvasEl = document.getElementById("canvas");
const ctx = canvasEl.getContext("2d");
class Launcher{
    constructor (){
        this.y=canvasEl.height;
        this.x=canvasEl.width/2-25;
        this.w=3;
        this.h=10;
        this.direction;
        this.bg="red";
        this.missiles=[];
        this.render=function(){
            if(this.direcion==="left"){
                this.x-=5;
            }else if(this.direction==="right"){
                this.x+=5;
            }
            ctx.fillStyle=this.bg;
            for(let i = 0;i<this.missiles.length;i++){
                let m=this.missiles[i];
                ctx.fillRect(m.x,m.y--,m.w,m.h);
            }
        };
    }
}
class Ship{
    constructor(){
        this.w=50;
        this.h=50;
        this.x=canvasEl.width/2-this.w/2;
        this.y=canvasEl.height-this.h;
    }
    draw(){
        ctx.fillStyle="green";
        ctx.fillRect(0,0,this.w,this.h);
    }
}
const launcher=new Launcher();
const ship=new Ship();
document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case 'a':
            console.log("left");
            break;
        case 'd':
            console.log("right");
            break;
    }
});
document.addEventListener("keyup", (e) => {
    switch (e.key) {
        case 'p':
            launcher.missiles.push({
                x:launcher.x+launcher.w/2-2.5,
                y:launcher.y-10,
                w:launcher.w,
                h:launcher.h
            });         
            break;
    }
});
function animate(){
    ctx.clearRect(0,0,canvasEl.width,canvasEl.height);
    launcher.render();
    console.log(launcher.missiles);
};
setInterval(animate,10);