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
  return null;
} 