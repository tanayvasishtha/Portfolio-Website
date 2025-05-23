'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    company: 'Adani Ports and Special Economic Zone (APSEZ)',
    role: 'Data Analyst Intern',
    period: 'May 12, 2025 - July 12, 2025',
    current: true,
    description: [
      'Developing and implementing technical solutions for port logistics optimization',
      'Working on digital transformation initiatives for maritime operations infrastructure',
      'Collaborating with cross-functional teams on enterprise software development',
      'Contributing to automation systems for cargo handling and port management efficiency',
    ],
  },
  {
    company: 'Timechain Labs',
    role: 'Blockchain Developer Intern',
    period: 'June 2024 - November 2024',
    description: [
      'Developed and implemented blockchain protocols for digital asset tokenization',
      'Designed secure transaction systems using cryptographic hashing algorithms',
      'Optimized smart contract performance and security measures',
      'Collaborated with distributed teams on blockchain infrastructure development',
    ],
  },
  {
    company: 'Indian Institute of Science (IISc)',
    role: 'Research Engineer Intern',
    period: 'May 2024 - July 2024',
    description: [
      'Engineered machine learning algorithms for drone-based accident detection achieving 95% accuracy',
      'Implemented computer vision techniques using Python and OpenCV for real-time image processing',
      'Developed data preprocessing pipeline for training object detection models',
      'Collaborated with research team on model optimization and testing protocols',
    ],
  },
  {
    company: 'Oasis Infobyte',
    role: 'UI/UX Design Intern',
    period: 'March 2024 - April 2024',
    description: [
      'Designed user interfaces for web and mobile applications using Figma and Adobe Creative Suite',
      'Created responsive design systems and component libraries',
      'Conducted user research and implemented feedback for design improvements',
      'Developed brand identity elements including logos and marketing materials',
    ],
  },
]

const TimelineItem = ({ experience, index }: { experience: typeof experiences[0]; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative pl-4 pb-8 md:pl-0 md:pr-8 md:pb-12 ${index % 2 === 0 ? 'md:pl-0 md:pr-8 md:text-right' : 'md:pl-8'}`}
    >
      <div className="absolute left-0 top-0 w-3 h-3 md:w-4 md:h-4 rounded-full bg-cosmic-purple border-4 border-space-black" />
      <div className="absolute left-1 top-4 bottom-0 w-0.5 bg-cosmic-purple/20 md:left-2" />

      <div className="bg-space-black/50 backdrop-blur-sm border border-cosmic-purple/20 rounded-xl p-4 md:p-6 hover:border-cosmic-purple/40 transition-colors">
        <div className="flex items-center justify-between mb-3 md:mb-4 flex-wrap gap-2">
          <h3 className="text-lg md:text-xl font-display font-semibold text-cosmic-purple">{experience.company}</h3>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-0">
          <h4 className="text-base md:text-lg font-medium text-light-gray">{experience.role}</h4>
          <div className="flex items-center gap-2">
            <p className="text-stellar-gold text-sm md:text-base">{experience.period}</p>
            {experience.current && (
              <span className="px-2 py-0.5 md:px-3 md:py-1 text-xs md:text-sm bg-stellar-gold/20 text-stellar-gold rounded-full ml-2">
                Current
              </span>
            )}
          </div>
        </div>
        <ul className="space-y-2 mt-2">
          {experience.description.map((item, i) => (
            <li key={i} className="text-light-gray flex items-start text-sm md:text-base">
              <span className="text-cosmic-purple mr-2">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto container-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-2 text-center mb-12">
            Professional <span className="text-cosmic-purple">Experience</span>
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-cosmic-purple/20" />
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <TimelineItem key={experience.company} experience={experience} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 