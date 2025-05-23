'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download } from 'lucide-react'

const skills = {
  'Software Development': ['Python', 'Java', 'C/C++', 'JavaScript', 'HTML/CSS', 'Node.js', 'React', 'Bootstrap'],
  'AI & Machine Learning': ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Neural Networks', 'Data Preprocessing', 'OpenCV', 'TensorFlow'],
  'Blockchain & Web3': ['Smart Contracts', 'Distributed Systems', 'Tokenization', 'Cryptography', 'Blockchain Infrastructure'],
  'Cloud & DevOps': ['AWS', 'Cloud Computing', 'Infrastructure Management', 'Deployment'],
  'Creative Technologies': ['UI/UX Design', 'Graphic Design', 'Adobe Creative Suite', 'Figma', 'Digital Media Production'],
  'Data Analytics': ['Data Preprocessing', 'Statistical Analysis', 'Predictive Modeling', 'Data Visualization'],
}

const experience = [
  {
    company: 'Adani Ports and Special Economic Zone (APSEZ)',
    role: 'Software Engineer Intern',
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
]

const education = [
  {
    degree: 'Bachelor of Technology (B.Tech) in Computer Science and Engineering',
    institution: 'KIIT University',
    period: 'September 2022 - September 2026',
    current: true,
    gpa: '8.1/10.0',
  },
  {
    degree: 'High School Diploma in PCM (Physics, Chemistry, Mathematics)',
    institution: 'K. L. International School',
    period: 'Completed March 2022',
  },
]

const certifications = [
  {
    title: 'Leadership Program 2024 (Cohort 3)',
    issuer: 'Aspire Institute',
    period: 'August 2024 - November 2024',
  },
  {
    title: 'AWS Cloud Foundations',
    issuer: 'Amazon Web Services',
    period: '2024',
  },
  {
    title: 'Harvard CS50 Python Programming',
    issuer: 'Harvard University',
    period: '2023',
  },
]

const projects = [
  {
    title: 'Building in Public Analyzer',
    description: 'AI-powered analytics combining Twitter & GitHub metrics for indie hackers',
    technologies: ['Next.js', 'Tailwind CSS', 'Twitter API', 'GitHub API'],
    features: [
      'Real-time scoring algorithms',
      'Profile insights integration',
      'Trend analysis dashboard',
      'Community building metrics',
    ],
  },
  {
    title: 'Credit Score Improvement Advisor',
    description: 'Machine learning-powered application providing personalized credit score strategies',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit', 'Random Forest', 'Gradient Boosting'],
    features: [
      'Predictive modeling algorithms',
      'Personalized recommendation engine',
      'Progress tracking dashboard',
      'Financial health analytics',
    ],
    metrics: {
      'Random Forest Classifier': '87.45% accuracy',
      'Gradient Boosting Regressor': 'R² = 0.9232',
    },
  },
]

export const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="resume" className="section-padding">
      <div className="container mx-auto container-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
            <h2 className="heading-2">
              Professional <span className="text-cosmic-purple">Resume</span>
            </h2>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-cosmic-purple text-white rounded-full hover:bg-opacity-90 transition-colors w-full md:w-auto justify-center"
            >
              <Download className="w-5 h-5" />
              <span>Download PDF</span>
            </a>
          </div>

          {/* Contact Information */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-cosmic-purple mb-2">Tanay Vasishtha</h1>
            <p className="text-light-gray mb-2 text-base sm:text-lg">Software Engineer | AI/ML Developer | Blockchain Researcher</p>
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 text-sm text-light-gray">
              <a href="mailto:tanayvasishtha@gmail.com" className="hover:text-cosmic-purple">tanayvasishtha@gmail.com</a>
              <span className="hidden sm:inline">•</span>
              <a href="tel:+918279501354" className="hover:text-cosmic-purple">+91 8279501354</a>
              <span className="hidden sm:inline">•</span>
              <span>Bhubaneswar, Odisha, India</span>
            </div>
          </div>

          {/* Experience */}
          <h3 className="text-xl font-display font-semibold text-cosmic-purple mb-4">Professional Experience</h3>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.company} className="bg-space-black/50 backdrop-blur-sm border border-cosmic-purple/20 rounded-xl p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                  <div>
                    <h4 className="text-lg font-semibold text-cosmic-purple">{exp.company}</h4>
                    <p className="text-light-gray">{exp.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-stellar-gold">{exp.period}</p>
                    {exp.current && (
                      <span className="text-sm text-stellar-gold">Current</span>
                    )}
                  </div>
                </div>
                <ul className="list-disc list-inside text-light-gray space-y-1 mt-2">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <h3 className="text-xl font-display font-semibold text-cosmic-purple mb-4 mt-8">Education</h3>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.degree} className="bg-space-black/50 backdrop-blur-sm border border-cosmic-purple/20 rounded-xl p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                  <div>
                    <h4 className="text-lg font-semibold text-cosmic-purple">{edu.degree}</h4>
                    <p className="text-light-gray">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-stellar-gold">{edu.period}</p>
                    {edu.current && (
                      <span className="text-sm text-stellar-gold">Current</span>
                    )}
                  </div>
                </div>
                {edu.gpa && (
                  <p className="text-light-gray mt-2">GPA: {edu.gpa}</p>
                )}
              </div>
            ))}
          </div>

          {/* Skills */}
          <h3 className="text-xl font-display font-semibold text-cosmic-purple mb-4 mt-8">Technical Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-space-black/50 backdrop-blur-sm border border-cosmic-purple/20 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg font-semibold text-cosmic-purple mb-3">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-cosmic-purple/20 text-cosmic-purple rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Projects */}
          <h3 className="text-xl font-display font-semibold text-cosmic-purple mb-4 mt-8">Key Projects</h3>
          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.title} className="bg-space-black/50 backdrop-blur-sm border border-cosmic-purple/20 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg font-semibold text-cosmic-purple mb-2">{project.title}</h4>
                <p className="text-light-gray mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-cosmic-purple/20 text-cosmic-purple rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="list-disc list-inside text-light-gray space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                {project.metrics && (
                  <div className="mt-4 space-y-2">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-light-gray">
                        <span>{key}</span>
                        <span className="text-stellar-gold">{value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Certifications */}
          <h3 className="text-xl font-display font-semibold text-cosmic-purple mb-4 mt-8">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div key={cert.title} className="bg-space-black/50 backdrop-blur-sm border border-cosmic-purple/20 rounded-xl p-4 sm:p-6">
                <h4 className="text-lg font-semibold text-cosmic-purple mb-2">{cert.title}</h4>
                <p className="text-light-gray">{cert.issuer}</p>
                <p className="text-stellar-gold text-sm">{cert.period}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 