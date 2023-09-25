function initCanvas() {
    const canvasEl = document.getElementById("canvas");
    const ctx = canvasEl.getContext("2d");
    class Launcher {
        constructor() {
            this.y = ctx.canvas.height;
            this.x = ctx.canvas.width / 2 - 25;
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
                };
                ctx.fillStyle = this.bg;
                for (var i = 0; i < this.missiles.length; i++) {
                    let m = this.missiles[i];
                    ctx.fillRect(m.x, m.y--, m.w, m.h)
                };
            };
        }
    }
    const launcher = new Launcher();
    function animate() {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        launcher.render();
    }
    setInterval(animate, 10);
    document.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "a":
                launcher.direction = "left";
                break;
            case "d":
                launcher.direction = "right";
                break;
        }
    });
    document.addEventListener("keyup", (e) => {
        if (e.key === "p") {
            launcher.missiles.push({
                x: launcher.x + launcher.w / 2 - 2.5,
                y: launcher.y - 10,
                w: 5,
                h: 10
            });
        }
    });
}
window.addEventListener("load", initCanvas);