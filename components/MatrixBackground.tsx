"use client"

import { useEffect, useRef } from "react"

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const matrix =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}0123456789"
    const matrixArray = matrix.split("")

    const fontSize = 14

    let drops: number[] = []
    let visibleColumns = 0
    let baseColumns = 0 // 100% “base”
    let maxColumns = 0 // base + 100% extra
    let animationId: number
    let resizeTimeoutId: number | undefined

    const createDropsArray = (cols: number, prev?: number[]) => {
      const maxY = Math.floor(canvas.height / fontSize)
      const arr = new Array<number>(cols)

      for (let i = 0; i < cols; i++) {
        if (prev && prev[i] != null) {
          arr[i] = prev[i]
        } else {
          arr[i] = Math.floor(Math.random() * maxY)
        }
      }

      return arr
    }

    const updateColumns = () => {
      const colsForWidth = Math.max(Math.floor(canvas.width / fontSize), 1)

      if (baseColumns === 0) {
        // inicial: 100% + 100% extra
        baseColumns = colsForWidth
        maxColumns = baseColumns * 2
        drops = createDropsArray(maxColumns)
      } else if (colsForWidth > baseColumns * 1.9 || colsForWidth > maxColumns) {
        // chegou em ~190% -> esse passa a ser o novo 100% e ganha +100% extra
        baseColumns = colsForWidth
        maxColumns = baseColumns * 2
        drops = createDropsArray(maxColumns, drops)
      }

      visibleColumns = colsForWidth
    }

    const resizeCanvas = () => {
      const newWidth = window.innerWidth
      const newHeight = window.innerHeight

      let previousImageData: ImageData | null = null

      if (canvas.width > 0 && canvas.height > 0) {
        try {
          previousImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        } catch {
          previousImageData = null
        }
      }

      canvas.width = newWidth
      canvas.height = newHeight

      updateColumns()

      if (previousImageData) {
        // desenha o frame antigo no novo canvas (recorta se precisar)
        ctx.putImageData(previousImageData, 0, 0)
      }
    }

    const handleResize = () => {
      if (resizeTimeoutId !== undefined) {
        window.clearTimeout(resizeTimeoutId)
      }
      // debounce: só aplica o resize depois de parar de mexer
      resizeTimeoutId = window.setTimeout(() => {
        resizeCanvas()
      }, 120)
    }

    const draw = () => {
      // fundo com rastro
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < visibleColumns; i++) {
        const char =
          matrixArray[Math.floor(Math.random() * matrixArray.length)]

        const x = i * fontSize
        const y = drops[i] * fontSize

        ctx.fillStyle = "#0F4"
        ctx.fillText(char, x, y)

        if (Math.random() > 0.98) {
          ctx.fillStyle = "#F04"
          ctx.fillText(char, x, y)
        }

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }

      animationId = window.requestAnimationFrame(draw)
    }

    // inicializa
    resizeCanvas()
    window.addEventListener("resize", handleResize)
    animationId = window.requestAnimationFrame(draw)

    return () => {
      window.cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
      if (resizeTimeoutId !== undefined) {
        window.clearTimeout(resizeTimeoutId)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-20"
      style={{ zIndex: 1 }}
    />
  )
}
