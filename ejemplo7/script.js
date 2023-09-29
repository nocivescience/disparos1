const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
class Launcher{
    constructor(){
        this.x=canvas.width/2-25;
        this.y=canvas.height-40;
        this.w=4;
        this.h=10;
        this.direction;
        this.missiles=[];
        this.render=()=>{
            ctx.fillStyle="red";
            if(this.direction=="left"){
                this.x-=5;
            }else if(this.direction=="right"){
                this.x+=5;
            }
            this.missiles.forEach((m,i)=>{
                if(m.y<10){
                    this.missiles.splice(i,1);
                }
                ctx.fillRect(m.x,m.y--,m.w,m.h);
            });
        };
    }
}
const launcher=new Launcher();
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    launcher.render();
}
setInterval(animate,10);
document.addEventListener("keydown",(e)=>{
    e.preventDefault();
    switch(e.key){
        case "a":
            launcher.direction="left";
            launcher.x-=5;
            break;
        case "d":
            launcher.direction="right";
            launcher.x+=5;
            break;
    }
});
document.addEventListener("keyup",(e)=>{
    e.preventDefault();
    if(e.key=="p"){
        launcher.missiles.push({
            x:launcher.x+launcher.w/2-2.5,
            y:launcher.y-10,
            w:launcher.w,
            h:launcher.h
        });
    }
});