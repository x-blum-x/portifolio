"use client"

import { useEffect, useRef } from "react"

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Matrix characters
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}0123456789"
    const matrixArray = matrix.split("")

    const fontSize = 10
    const columns = canvas.width / fontSize

    // Array of drops - one per column
    const drops: number[] = []
    for (let x = 0; x < columns; x++) {
      drops[x] = 1
    }

    // Drawing the characters
    const draw = () => {
      // Black background with slight transparency for trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#0F4"
      ctx.font = fontSize + "px monospace"

      // Loop over drops
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)]

        // Draw character
        ctx.fillStyle = "#0F4"
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        // Add some red characters randomly
        if (Math.random() > 0.98) {
          ctx.fillStyle = "#F04"
          ctx.fillText(text, i * fontSize, drops[i] * fontSize)
        }

        // Reset drop to top randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        // Increment Y coordinate
        drops[i]++
      }
    }

    const interval = setInterval(draw, 35)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-20" style={{ zIndex: 1 }} />
}