'use client'
import { useState } from 'react'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Education } from '@/components/sections/Education'
import { Experience } from '@/components/sections/Experience'
import { Footer } from '@/components/sections/Footer'
import { Leadership } from '@/components/sections/Leadership'
import { Projects } from '@/components/sections/Projects'
import { Resume } from '@/components/sections/Resume'
import { Skills } from '@/components/sections/Skills'
import { SpaceBackground } from '@/components/SpaceBackground'
import { WormholeBackground } from '@/components/WormholeBackground'

export default function Home() {
  const [bgMode, setBgMode] = useState<'space' | 'wormhole'>('space')
  return (
    <main className="min-h-screen relative text-white overflow-x-hidden">
      {/* Background toggle button */}
      <button
        className="fixed top-4 right-4 z-50 px-4 py-2 rounded-full bg-black/60 text-white font-semibold shadow-lg border border-white/10 hover:bg-cosmic-purple hover:text-black transition"
        onClick={() => setBgMode(bgMode === 'space' ? 'wormhole' : 'space')}
        aria-label="Toggle background mode"
      >
        {bgMode === 'space' ? (
          <span>🌌 Space</span>
        ) : (
          <span>🌀 Wormhole</span>
        )}
      </button>
      {bgMode === 'space' ? <SpaceBackground /> : <WormholeBackground />}
      <div className="relative z-10">
        <Hero />
        <div className="relative w-full h-16 -mt-4 z-20">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0a0a0f" stopOpacity="1" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,40 Q720,120 1440,40 V80 H0 V40 Z" fill="url(#fade)" />
          </svg>
        </div>
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Leadership />
        <div className="section-divider" />
        <Education />
        <div className="section-divider" />
        <Resume />
        <div className="section-divider" />
        <Contact />
        <div className="section-divider" />
        <Footer />
      </div>
    </main>
  )
} 