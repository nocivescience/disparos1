import React, {useState, useEffect, useRef} from "react";
function CanvasComponent2() {
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
        function update(e) {
            switch (e.key) {
                case 'k':
                    setXPos(xPos => xPos+1);
                    break;
                case 'j':
                    setXPos(xPos => xPos-1);
                    break;
                default:
                    break;
            }
        }
        function loop() {
            draw();
            requestAnimationFrame(loop);
        }
        loop();
        window.addEventListener('keydown', update);
        return () => window.removeEventListener('keydown', update);
    }, [xPos]);
    return (
        <div>
            <canvas ref={canvasRef} width="700" height="400"/>
        </div>
    )
}
export default CanvasComponent2;