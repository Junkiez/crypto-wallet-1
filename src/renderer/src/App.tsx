'use client'

import { useEffect, useState } from 'react'
import { SpaceBackground } from '@/components/space-background'
import { TronLogo } from './components/tron-logo'
import { FloatingElements } from './components/floating-elements'

const loadingMessages = [
  { min: 0, max: 15, message: 'Initializing TronWatch Wallet...' },
  { min: 15, max: 30, message: 'Connecting to TRON Network...' },
  { min: 30, max: 45, message: 'Securing your assets...' },
  { min: 45, max: 60, message: 'Loading blockchain data...' },
  { min: 60, max: 75, message: 'Synchronizing with DeFi protocols...' },
  { min: 75, max: 90, message: 'Preparing your portfolio...' },
  { min: 90, max: 100, message: 'Almost ready...' }
]

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Page() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#f5f0eb]">
      <SpaceBackground />
      <FloatingElements />
      <div className="z-10 flex flex-col items-center justify-between h-full py-16">
        <Content />
      </div>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function Content() {
  const [progress, setProgress] = useState(0)
  const [currentMessage, setCurrentMessage] = useState(loadingMessages[0].message)

  useEffect(() => {
    const duration = 8000 // 8 seconds total loading time
    const interval = 500 // Update every 50ms
    const increment = (100 / duration) * interval

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = Math.min(prev + increment, 100)

        // Update message based on progress
        const message = loadingMessages.find(
          (msg) => newProgress >= msg.min && newProgress < msg.max
        )
        if (message) {
          setCurrentMessage('Security Сheck') //message.message)
        }

        if (newProgress >= 100) {
          clearInterval(timer)
        }

        return newProgress
      })
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <div className="text-transparent">.</div>

      <div className="w-[600px] relative z-10 flex flex-col items-center justify-center h-full gap-8 px-8">

          <TronLogo progress={progress} />


        {/* Loading Message */}
        <div className="text-center">
          <h2 className="text-3xl text-red-500 font-bold text-red-400 mb-2 animate-fade-in">
            {currentMessage}
          </h2>
          <p className="text-md text-stone-500 font-mono">Verifying security standarts</p>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full max-w-2xl">
          {/* Progress Bar Background */}
          <div className="relative h-3 bg-white/50 backdrop-blur-sm rounded-full overflow-hidden shadow-lg border border-white/30">
            {/* Animated Progress Fill */}
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#ff5c4d] via-[#ff7a6d] to-[#ff5c4d] rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>

            {/* Glow Effect */}
            <div
              className="absolute top-0 left-0 h-full bg-[#ff5c4d] rounded-full blur-xl opacity-50 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Progress Percentage Indicator */}
          <div className="relative mt-4">
            <div
              className="absolute -top-2 transition-all duration-300 ease-out"
              style={{ left: `calc(${progress}% - 20px)` }}
            >
              <div className="bg-[#ff5c4d] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                {Math.round(progress)}%
              </div>
            </div>
          </div>
        </div>

        <p className="text-lg text-red-400 tracking-wider">Syncing with blockchain network</p>
      </div>
      <p className="text-md text-stone-400 uppercase tracking-wider">
        Secure • Decentralized • Transparent
      </p>
    </>
  )
}
