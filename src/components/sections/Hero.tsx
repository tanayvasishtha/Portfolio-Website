'use client'

import { useEffect, useRef, useState } from 'react'

const roles = [
  'Web Developer',
  'Data Analyst',
  'UI/UX Designer',
  'Graphic Designer',
  'Writer',
  'AI/ML Developer',
  'Web3 Developer',
  'Generalist',
]

export const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)
  const [isErasing, setIsErasing] = useState(false)
  const typingTimeout = useRef<NodeJS.Timeout | null>(null)
  const cursorTimeout = useRef<NodeJS.Timeout | null>(null)

  // Typewriter effect (faster, always cycles)
  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined
    const currentText = roles[currentRole]
    if (typing && !isErasing) {
      if (displayed.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentText.slice(0, displayed.length + 1))
        }, 50)
      } else {
        timeout = setTimeout(() => setIsErasing(true), 900)
      }
    } else if (isErasing) {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(currentText.slice(0, displayed.length - 1))
        }, 30)
      } else {
        setIsErasing(false)
        setTyping(true)
        setCurrentRole((prev) => (prev + 1) % roles.length)
      }
    }
    typingTimeout.current = timeout ?? null
    return () => timeout && clearTimeout(timeout)
  }, [displayed, typing, isErasing, currentRole])

  // Blinking cursor effect
  useEffect(() => {
    let timeout: NodeJS.Timeout
    const blink = () => {
      setShowCursor((prev) => !prev)
      timeout = setTimeout(blink, 500)
    }
    blink()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Planet video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/planet.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ pointerEvents: 'none' }}
      />
      <div className="container mx-auto px-3 sm:px-4 z-10 flex flex-col items-center justify-center text-center relative">
        <div className="w-full max-w-2xl mx-auto py-20 sm:py-24 md:py-36">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
            Hi, I am <span className="text-cosmic-purple">Tanay Vasishtha</span>
          </h1>
          <div className="h-12 mb-4 flex items-center justify-center">
            <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-stellar-gold bg-black/40 px-4 py-2 rounded-lg shadow-lg inline-block animate-fade-in">
              I am{' '}
              <span className="text-stellar-gold">
                {displayed}
                <span className="text-white" style={{ opacity: showCursor ? 1 : 0 }}>|</span>
              </span>
            </span>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 font-normal drop-shadow">
            Ex-Research Intern at DESE, IISc · Web3 · Creative Media · Tech & Business Analysis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-cosmic-purple text-white font-semibold shadow transition hover:bg-stellar-gold hover:text-black focus:outline-none text-lg text-center"
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-black border border-white/20 text-white font-semibold shadow transition hover:bg-cosmic-purple hover:text-white focus:outline-none text-lg text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 