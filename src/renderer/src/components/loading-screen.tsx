"use client"

import { useEffect, useRef, useState } from "react"


const messages = [
  'Retrieving peer list',
  'Downloading block headers',
  'Fetching blockchain data',
  'Validating block hashes',
  'Loading chain checkpoints',
  'Verifying blockchain integrity',
  'Finalizing synchronization'
]

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  //const [flag, setFlag] = useState(false)
  const [_, setError] = useState(false)
  const [message, setMessage] = useState('Initializing synchronization')

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const Load = async () => {
    window.electron.ipcRenderer.send('spam')
    await new Promise((resolve) => setTimeout(resolve, 30000))
    //setFlag(true)
    for (let i = 0; i <= 100; i++) {
      await new Promise((resolve) => setTimeout(resolve, i < 30 ? i ** 2 * 500 : i ** 2 * 1300))
      setProgress(i)
      switch (i) {
        case 4:
          setMessage(messages[0])
          break
        case 10:
          setMessage(messages[1])
          break
        case 25:
          setMessage(messages[2])
          break
        case 37:
          setMessage(messages[3])
          break
        case 50:
          setMessage(messages[4])
          break
        case 75:
          setMessage(messages[5])
          break
        case 90:
          setMessage(messages[6])
          break
        default:
          break
      }
    }
    setError(true)
  }

  useEffect(() => {
    Load()
  }, [onComplete])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const updateSize = () => {
      canvas.width = 300
      canvas.height = 300
    }
    updateSize()

    let animationFrame: number
    let rotation = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Save context
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(rotation)

      // Draw 3D cube effect with multiple layers
      const layers = 3
      for (let i = 0; i < layers; i++) {
        const size = 60 - i * 15
        const offset = i * 10
        const alpha = 1 - i * 0.3

        // Create gradient for 3D effect
        const gradient = ctx.createLinearGradient(-size, -size, size, size)
        gradient.addColorStop(0, `rgba(100, 116, 139, ${alpha})`)
        gradient.addColorStop(0.5, `rgba(139, 92, 246, ${alpha})`)
        gradient.addColorStop(1, `rgba(59, 130, 246, ${alpha})`)

        // Draw cube faces
        ctx.fillStyle = gradient
        ctx.shadowBlur = 20
        ctx.shadowColor = "rgba(139, 92, 246, 0.5)"

        // Front face
        ctx.fillRect(-size + offset, -size + offset, size * 2, size * 2)

        // Side face (3D effect)
        ctx.fillStyle = `rgba(59, 130, 246, ${alpha * 0.6})`
        ctx.beginPath()
        ctx.moveTo(size + offset, -size + offset)
        ctx.lineTo(size + offset + 20, -size + offset - 20)
        ctx.lineTo(size + offset + 20, size + offset - 20)
        ctx.lineTo(size + offset, size + offset)
        ctx.closePath()
        ctx.fill()

        // Top face (3D effect)
        ctx.fillStyle = `rgba(100, 116, 139, ${alpha * 0.8})`
        ctx.beginPath()
        ctx.moveTo(-size + offset, -size + offset)
        ctx.lineTo(-size + offset + 20, -size + offset - 20)
        ctx.lineTo(size + offset + 20, -size + offset - 20)
        ctx.lineTo(size + offset, -size + offset)
        ctx.closePath()
        ctx.fill()
      }

      ctx.restore()

      // Animate rotation
      rotation += 0.02

      animationFrame = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className="tic-tac fixed inset-0 z-50 flex items-center justify-center bg-black backdrop-blur-sm">

      <div className="absolute flex flex-col items-center gap-8">
        {/* 3D Canvas Spinner */}
        <div className="relative">
          <div className="ping-pong"/>
        </div>

        {/* Progress Bar */}
        <div className="w-64 space-y-3">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary via-accent to-primary transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {Math.floor(Math.min(progress, 100))}%
            </p>
            <p className="text-sm text-muted-foreground mt-1">{message}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
