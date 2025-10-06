"use client"

import coin from "../assets/logo.png"

export function FloatingElements() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 animate-float-slow">
        <img src={coin} className="opacity-25 w-24" />
      </div>

      <div className="absolute top-40 right-20 animate-float-medium">
        <img src={coin} className="opacity-25 w-32" />
      </div>

      <div className="absolute bottom-32 left-1/7 animate-float-fast">
        <img src={coin} className="opacity-25 w-24" />
      </div>

      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-[#ff5c4d] rounded-full opacity-30 animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-[#ff7a6d] rounded-full opacity-40 animate-float-medium" />
      <div className="absolute top-1/2 left-1/3 w-5 h-5 bg-[#ffb3a7] rounded-full opacity-20 animate-float-fast" />

      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-[#ff5c4d] rounded-full opacity-40 animate-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  )
}
