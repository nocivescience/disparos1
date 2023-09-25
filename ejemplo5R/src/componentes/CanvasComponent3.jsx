import React, { useRef, useEffect, useState } from 'react'
const CanvasComponent3 = () => {
    const canvasRef = useRef(null)
    const [xPos, setXPos] = useState(0)
    const [yPos, setYPos] = useState(0)
    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.fillStyle = 'green'
            ctx.fillRect(xPos, yPos, 150, 100)
        }
        function update(e) {
            switch (e.key) {
                case 'ArrowUp':
                    setYPos(yPos => yPos - 1)
                    break
                case 'ArrowDown':
                    setYPos(yPos => yPos + 1)
                    break
                case 'ArrowLeft':
                    setXPos(xPos => xPos - 1)
                    break
                case 'ArrowRight':
                    setXPos(xPos => xPos + 1)
                    break
            }
        }
        function loop() {
            draw()
            requestAnimationFrame(loop)
        }
        loop()
        window.addEventListener('keydown', update)
        return () => window.removeEventListener('keydown', update)
    }, [xPos, yPos])
    return (
        <div>
            <canvas ref={canvasRef} width="400" height="400"/>
        </div>
    )
}
export default CanvasComponent3;