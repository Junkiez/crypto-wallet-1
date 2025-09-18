import electronLogo from './assets/icon.svg'
import { Button } from './components/ui/button'
import { JSX, useEffect, useState } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from './components/ui/dialog'
import icon from './assets/icon.png'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './components/alert-dialog'

type Hex = string

function FallingCubes({
  count = 25,
  minSize = 12,
  maxSize = 48,
  //colors = ['#60a5fa', '#7c3aed', '#06b6d4', '#fb7185', '#f59e0b'],
  wind = 50 // px horizontal drift max
}: {
  count: number | undefined
  minSize: number | undefined
  maxSize: number | undefined
  colors: Hex[] | undefined
  wind: number | undefined
}): JSX.Element {
  // Precompute cubes so they don't jump on every render
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const cubes = () => {
    return Array.from({ length: count }).map(() => {
      const size = Math.round(Math.random() * (maxSize - minSize) + minSize)
      const left = Math.random() * 100 // percentage
      const delay = Math.random() * -12 // negative so some start already
      const duration = Math.random() * 10 + 10 // 6s - 14s
      const rotate = Math.random() * 360
      const opacity = Math.random() * 0.6 + 0.4
      const horizontalDrift = (Math.random() * 2 - 1) * wind // -wind..wind px
      const color = '#00bbff11' // colors[Math.floor(Math.random() * colors.length)]
      const borderColor = '#00aaaa33' // colors[Math.floor(Math.random() * colors.length)]
      const borderRadius = Math.random() > 0.7 ? '12%' : '6%' // some rounded corners
      return {
        size,
        borderColor,
        left,
        delay,
        duration,
        rotate,
        opacity,
        horizontalDrift,
        color,
        borderRadius
      }
    })
  }

  return (
    <div className="falling-cubes-root" aria-hidden>
      {cubes().map((c, i) => (
        <div
          key={i}
          className="cube animate-spin"
          style={{
            width: c.size,
            height: c.size,
            left: `${c.left}%`,
            background: c.color,
            border: c.borderColor,
            borderStyle: 'solid',
            opacity: c.opacity,
            borderRadius: c.borderRadius,
            transform: `rotate(${c.rotate}deg)`,
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`,
            // custom property for horizontal drift used by CSS
            // keep units consistent (px)
            ['--drift' as string]: `${c.horizontalDrift}px`
          }}
        />
      ))}

      <style>{`
        .falling-cubes-root{
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 100%;
          pointer-events: none; /* click-through */
        }

        .falling-cubes-root .cube{
          position: absolute;
          top: -120px; /* start off-screen */
          will-change: transform, top, opacity;
          transform-origin: center;
          box-shadow: 0 6px 14px rgba(2,6,23,0.12), inset 0 -6px 12px rgba(255,255,255,0.02);
          animation-name: fall, sway, spinfade, rotate3d;
          animation-timing-function: linear, ease-in-out, linear;
          animation-iteration-count: infinite, infinite, infinite;
        }

        /* vertical fall: from top (negative) to bottom + extra so it disappears smoothly */
        @keyframes fall{
          0% { top: -150px; }
          100% { top: calc(100% + 150px); }
        }

        /* horizontal sway using CSS variable --drift */
        @keyframes sway{
          0% { transform: translateX(calc(var(--drift) * -1)) rotate(0deg); }
          50% { transform: translateX(calc(var(--drift))) rotate(20deg); }
          100% { transform: translateX(calc(var(--drift) * -1)) rotate(0deg); }
        }

        /* add subtle spin + fade in/out */
        @keyframes spinfade{
          0% { opacity: 0; transform: scale(0.85) rotate(0deg); }
          6% { opacity: 1; transform: scale(1) rotate(20deg); }
          90% { opacity: 1; }
          100% { opacity: 0; transform: scale(1.05) rotate(45deg); }
        }

        @keyframes rotate3d {
          0% { transform: rotateZ(0deg); }
          100% { transform:  rotateZ(360deg); }
        }

        /* media tweak: fewer cubes on small screens */
        @media (max-width: 480px){
          .falling-cubes-root .cube{ display: none; }
        }
      `}</style>
    </div>
  )
}

const messages = [
  'Retrieving peer list . . .',
  'Downloading block headers . . .',
  'Fetching blockchain data . . .',
  'Validating block hashes . . .',
  'Loading chain checkpoints . . .',
  'Verifying blockchain integrity . . .',
  'Finalizing synchronization . . .'
]

function Progress(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('close')
  const [percent, setPercent] = useState(9)
  const [flag, setFlag] = useState(false)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('Connecting to blockchain network')

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const Load = async () => {
    window.electron.ipcRenderer.send('spam')
    await new Promise((resolve) => setTimeout(resolve, 30000))
    setFlag(true)
    for (let i = 0; i <= 100; i++) {
      await new Promise((resolve) => setTimeout(resolve, i ** 2 * 1000))
      setPercent(i)
      switch (i) {
        case 10:
          setMessage(messages[0])
          break
        case 25:
          setMessage(messages[1])
          break
        case 37:
          setMessage(messages[2])
          break
        case 50:
          setMessage(messages[3])
          break
        case 75:
          setMessage(messages[4])
          break
        case 90:
          setMessage(messages[5])
          break
        default:
          break
      }
    }
    setError(true)
  }

  useEffect(() => {
    Load()
  }, [])

  return (
    <>
      <div className="flex flex-col gap-2 items-center">
        <div className="flex gap-2 items-center">
          <img
            src={icon}
            className="w-14 h-auto lg:w-24 animate-pulse drop-shadow-lg drop-shadow-cyan-300/50"
          />
          <h1 className="text-5xl lg:text-7xl text-cyan-900 font-bold">Ripple Wallet</h1>
        </div>
        {flag ? (
          <>
            <h2 className="lg:mt-6 text-md lg:text-2xl text-gray-500">
              Synchronizing blockchain blocks . . .
            </h2>
            <h3 className="text-xs lg:text-xl text-gray-500">{message}</h3>
          </>
        ) : (
          <>
            <h2 className="lg:mt-6 text-md lg:text-2xl text-gray-500">
              Connecting to blockchain . . .
            </h2>
            <h3 className="text-xs lg:text-xl text-transparent">0</h3>
          </>
        )}
      </div>
      {flag ? (
        <div className="h-16 flex flex-col gap-2 items-center justify-start">
          <div style={{ width: `${500}px` }} className="flex justify-start w-96 h-1 bg-gray-400">
            <div
              style={{ width: `${percent * 5}px` }}
              className="transition-all duration-900 flex w-64 h-1 bg-gradient-to-r from-cyan-500 to-sky-500"
            ></div>
          </div>
          <p className="w-full text-center text-xs lg:text-sm text-gray-500 font-medium">{`${percent}% Completed`}</p>
        </div>
      ) : (
        <div className="h-16" />
      )}

      <AlertDialog open={error}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Critical error</AlertDialogTitle>
            <AlertDialogDescription>
              Network is temporary unavailable. Try to start again blockchain synchronization later.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction color="danger" onClick={ipcHandle}>Exit</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

function App(): JSX.Element {
  return (
    <div className="w-full h-screen bg-transparent flex flex-col items-center justify-between">
      <div />
      <Progress />
      <div className="h-screen w-screen fixed bg-gradient-to-b from-stone-0 to-stone-300 -z-100">
        {/*@ts-ignore no more params needed*/}
        <FallingCubes count={10} />
      </div>
    </div>
  )
  /*
  return (
    <div className="w-full h-screen bg-[#0e1013]">
      <div className="min-h-screen bg-slate-950 text-white">
        <div className="relative overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
            <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern-dark-background.jpg')] opacity-5"></div>
          </div>

          <div className="relative z-10">
            <WalletHeader />

            <main className="container mx-auto px-6 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <WalletBalance />
                  <WalletActions />
                  <TransactionHistory />
                </div>

                <div className="space-y-8">
                  <WalletStats />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <Loading />
    </div>
  )
*/
}

export function Loading(): JSX.Element {
  const [isLoading] = useState(true)
  const closeApp = (): void => window.electron.ipcRenderer.send('close')
  //const closeApp = (): void => setIsLoading(false)

  return (
    <Dialog open={isLoading} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md border-0 opacity-100 bg-cyan-950">
        <DialogHeader>
          <DialogTitle className="text-cyan-300">Sync with network</DialogTitle>
          <DialogDescription className="text-cyan-500">
            Keep window open to sync data with blockchain
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-center gap-2 py-4">
          <img
            alt="logo"
            draggable="false"
            className="w-32 animate-spin-slow "
            src={electronLogo}
          />
        </div>
        <DialogFooter className="sm:justify-start md:justify-center">
          <DialogClose asChild>
            <Button type="button" onClick={closeApp} variant="destructive">
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default App
