'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    title: 'Software Development',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 85 },
      { name: 'C/C++', level: 80 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Node.js', level: 80 },
      { name: 'React', level: 85 },
      { name: 'Bootstrap', level: 85 },
    ],
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      { name: 'Machine Learning', level: 85 },
      { name: 'Deep Learning', level: 80 },
      { name: 'Computer Vision', level: 85 },
      { name: 'Neural Networks', level: 80 },
      { name: 'Data Preprocessing', level: 90 },
      { name: 'OpenCV', level: 85 },
      { name: 'TensorFlow', level: 80 },
    ],
  },
  {
    title: 'Blockchain & Web3',
    skills: [
      { name: 'Smart Contracts', level: 85 },
      { name: 'Distributed Systems', level: 80 },
      { name: 'Tokenization', level: 85 },
      { name: 'Cryptography', level: 80 },
      { name: 'Blockchain Infrastructure', level: 85 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', level: 80 },
      { name: 'Cloud Computing', level: 85 },
      { name: 'Infrastructure Management', level: 80 },
      { name: 'Deployment', level: 85 },
    ],
  },
  {
    title: 'Creative Technologies',
    skills: [
      { name: 'UI/UX Design', level: 85 },
      { name: 'Graphic Design', level: 80 },
      { name: 'Adobe Creative Suite', level: 85 },
      { name: 'Figma', level: 90 },
      { name: 'Digital Media Production', level: 85 },
    ],
  },
  {
    title: 'Data Analytics',
    skills: [
      { name: 'Data Preprocessing', level: 90 },
      { name: 'Statistical Analysis', level: 85 },
      { name: 'Predictive Modeling', level: 85 },
      { name: 'Data Visualization', level: 80 },
    ],
  },
]

const SkillCard = ({ title, skills }: { title: string; skills: { name: string; level: number }[] }) => {
  return (
    <div className="bg-space-black/50 backdrop-blur-sm border border-cosmic-purple/20 rounded-xl p-6 hover:border-cosmic-purple/40 transition-colors">
      <h3 className="text-xl font-display font-semibold mb-6 text-cosmic-purple">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-2">
              <span className="text-light-gray">{skill.name}</span>
              <span className="text-stellar-gold">{skill.level}%</span>
            </div>
            <div className="h-2 bg-space-black rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-cosmic-purple to-stellar-gold"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto container-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-2 text-center mb-12">
            Core <span className="text-cosmic-purple">Competencies</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <SkillCard key={category.title} title={category.title} skills={category.skills} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 