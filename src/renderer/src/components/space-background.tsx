"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import type * as THREE from "three"

function AnimatedStars() {
  const starsRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.x = state.clock.getElapsedTime() * 0.02
      starsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03
    }
  })

  return <Stars ref={starsRef} radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
}
export function SpaceBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <AnimatedStars />
      </Canvas>
    </div>
  )
}
