'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Linkedin, Github, Mail } from 'lucide-react'

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/tanayvasishtha',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/tanayvasishtha',
    icon: Github,
  },
  {
    name: 'Email',
    url: 'mailto:tanayvasishtha@gmail.com',
    icon: Mail,
  },
]

const navigationLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Leadership', href: '#leadership' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

export const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <footer className="border-t border-cosmic-purple/20">
      <div className="container mx-auto container-padding py-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-display font-semibold text-cosmic-purple mb-4">
                Tanay Vasishtha
              </h3>
              <p className="text-light-gray mb-6">
                A passionate Computer Science Engineering student and aspiring software developer,
                focused on creating innovative solutions and making a positive impact through
                technology.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-cosmic-purple text-white flex items-center justify-center hover:bg-stellar-gold hover:text-black transition-colors"
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-display font-semibold text-cosmic-purple mb-4">
                Quick Links
              </h3>
              <nav className="grid grid-cols-2 gap-4">
                {navigationLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-light-gray hover:text-cosmic-purple transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="pt-8 border-t border-cosmic-purple/20">
            <p className="text-center text-light-gray">
              © {new Date().getFullYear()} Tanay Vasishtha. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 