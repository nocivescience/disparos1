import { useEffect, useRef, useState } from "react";
function CanvasComponent() {
    const canvasRef = useRef(null);
    const [xPos, setXPos] = useState(0);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'green';
            ctx.fillRect(xPos, 10, 150, 100);
        }
        function update() {
            setXPos(xPos => xPos+.01);
        }
        function loop() {
            draw();
            update();
            requestAnimationFrame(loop);
        }
        loop();
    }, [xPos]);
    return (
        <div>
            <canvas ref={canvasRef} width="400" height="400"/>
        </div>
    )
}
export default CanvasComponent;