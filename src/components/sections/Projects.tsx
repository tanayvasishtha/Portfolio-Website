'use client'

import Image from 'next/image'

const projects = [
  {
    title: 'Building in Public Analyzer',
    description: 'AI-powered analytics combining Twitter & GitHub metrics for indie hackers.',
    image: '/buildinginpublic.png',
    live: 'https://building-in-public-analyzer.vercel.app',
  },
  {
    title: 'WeLoveQR',
    description: 'A modern QR code generator and manager for everyone.',
    image: '/WeLoveQr.png',
    live: 'https://weloveqr.netlify.app/',
  },
  {
    title: 'Credit Score Advisor',
    description: 'ML-powered app providing personalized credit score strategies.',
    image: '/Credit Score Analyser.png',
    live: 'https://credit-score-advisor.onrender.com',
  },
]

const tweets = [
  {
    image: '/tweet 1.png',
    url: 'https://x.com/TanayVasishtha/status/1876958565984006397',
  },
  {
    image: '/tweet 2.png',
    url: 'https://x.com/TanayVasishtha/status/1883391249358721423',
  },
]

export const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-transparent">
      <div className="container mx-auto container-padding">
        <h2 className="heading-2 mb-8 text-center">
          Featured <span className="text-cosmic-purple">Projects</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <div key={project.title} className="bg-white/10 border border-white/10 rounded-xl shadow-lg p-4 flex flex-col items-center w-full">
              <div className="w-full min-h-40 h-40 relative mb-4 rounded-lg overflow-hidden bg-black/30">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-cosmic-purple mb-2 text-center">{project.title}</h3>
              <p className="text-white/80 text-center mb-4">{project.description}</p>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full bg-cosmic-purple text-white font-semibold shadow hover:bg-stellar-gold hover:text-black transition w-full text-center">Live Preview</a>
            </div>
          ))}
        </div>
        <h2 className="heading-2 mb-8 text-center">Featured <span className="text-cosmic-purple">Posts</span></h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full">
          {tweets.map((tweet, i) => (
            <div key={tweet.url} className="w-full md:w-1/2 flex flex-col items-center gap-4">
              <div className="w-full min-h-60 h-80 relative rounded-lg overflow-hidden bg-black/30">
                <Image src={tweet.image} alt={`Tweet ${i + 1}`} fill className="object-contain" />
              </div>
              <a href={tweet.url} target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full bg-cosmic-purple text-white font-semibold shadow hover:bg-stellar-gold hover:text-black transition w-full text-center">View on Twitter</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
