'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, MapPin, GraduationCap, Target } from 'lucide-react'
import { Linkedin, Twitter } from 'lucide-react'

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section-padding bg-transparent">
      <div className="container mx-auto container-padding flex justify-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl w-full mx-auto"
        >
          <div className="backdrop-blur-lg bg-white/10 border border-white/10 rounded-2xl shadow-xl p-5 sm:p-8 md:p-12 flex flex-col gap-6">
            <h2 className="heading-2 text-center mb-2">
              About <span className="text-cosmic-purple">Me</span>
            </h2>
            <p className="text-base sm:text-lg text-white/90 text-center">
              Hey! I'm Tanay, a curious and creative tech generalist passionate about building things at the intersection of <span className="text-cosmic-purple font-semibold">AI, Web3, and Design</span>.<br />
              I love turning ideas into reality—whether it's coding smart solutions, designing beautiful interfaces, or analyzing data for impact. I thrive in collaborative, fast-paced environments and enjoy learning something new every day.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-cosmic-purple" />
                Bhubaneswar, Odisha, India
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-cosmic-purple" />
                3rd Year B.Tech CSE, KIIT University (GPA: 8.1)
              </div>
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-cosmic-purple" />
                Graduation: September 2026
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="mailto:tanayvasishtha@gmail.com"
                aria-label="Email"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-cosmic-purple text-white hover:bg-stellar-gold hover:text-black transition shadow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/tanayvasishtha"
                aria-label="LinkedIn"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-cosmic-purple text-white hover:bg-stellar-gold hover:text-black transition shadow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/TanayVasishtha"
                aria-label="Twitter"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-cosmic-purple text-white hover:bg-stellar-gold hover:text-black transition shadow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/tanayvasishtha"
                aria-label="GitHub"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-cosmic-purple text-white hover:bg-stellar-gold hover:text-black transition shadow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" /></svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 