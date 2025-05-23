'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

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
]

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'tanayvasishtha@gmail.com',
    href: 'mailto:tanayvasishtha@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8279501354',
    href: 'tel:+918279501354',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bhubaneswar, Odisha, India',
  },
]

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
      if (!serviceId || !templateId || !publicKey) {
        setStatus('error')
        return
      }
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      )
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto container-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-2 text-center mb-12">
            Get in <span className="text-cosmic-purple">Touch</span>
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-display font-semibold text-cosmic-purple mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <info.icon className="w-6 h-6 text-cosmic-purple flex-shrink-0" />
                      <div>
                        <p className="text-light-gray font-medium">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-stellar-gold hover:text-cosmic-purple transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-stellar-gold">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display font-semibold text-cosmic-purple mb-6">
                  Connect with Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-cosmic-purple text-white flex items-center justify-center hover:bg-stellar-gold hover:text-black transition-colors"
                    >
                      <link.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display font-semibold text-cosmic-purple mb-6">
                  Download Resume
                </h3>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cosmic-purple text-white rounded-full hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Download className="w-5 h-5" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-display font-semibold text-cosmic-purple mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-light-gray mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-space-black/50 border border-cosmic-purple/20 rounded-lg text-white focus:outline-none focus:border-cosmic-purple"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-light-gray mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-space-black/50 border border-cosmic-purple/20 rounded-lg text-white focus:outline-none focus:border-cosmic-purple"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-light-gray mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-space-black/50 border border-cosmic-purple/20 rounded-lg text-white focus:outline-none focus:border-cosmic-purple"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-light-gray mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-space-black/50 border border-cosmic-purple/20 rounded-lg text-white focus:outline-none focus:border-cosmic-purple resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-6 py-3 bg-cosmic-purple text-white rounded-full hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>

                {/* Show warning if EmailJS keys are not set */}
                {status === 'error' && (
                  <p className="text-red-500 text-center">Failed to send message. Please check your EmailJS keys or try again.</p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 