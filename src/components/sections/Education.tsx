'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, GraduationCap } from 'lucide-react'

// Add type definitions at the top
type EducationType = {
  degree: string;
  institution: string;
  period: string;
  current?: boolean;
  details: {
    gpa?: string;
    courses: string[];
  };
};

type CertificationType = {
  title: string;
  issuer: string;
  period: string;
  description?: string;
};

// Update the arrays with explicit types
const education: EducationType[] = [
  {
    degree: 'Bachelor of Technology (B.Tech) in Computer Science and Engineering',
    institution: 'KIIT University',
    period: 'September 2022 - September 2026',
    current: true,
    details: {
      gpa: '8.1/10.0',
      courses: [
        'Data Structures',
        'Algorithms',
        'Database Systems',
        'Machine Learning',
        'Cloud Computing',
        'Operating Systems',
      ],
    },
  },
  {
    degree: 'High School Diploma in PCM (Physics, Chemistry, Mathematics)',
    institution: 'K. L. International School',
    period: 'Completed March 2022',
    details: {
      courses: [
        'Physics',
        'Chemistry',
        'Mathematics',
        'Computer Science',
        'English',
      ],
    },
  },
];

const certifications: CertificationType[] = [
  {
    title: 'Leadership Program 2024 (Cohort 3)',
    issuer: 'Aspire Institute',
    period: 'August 2024 - November 2024',
    description: 'Organizational Leadership and Management',
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
  {
    title: 'Bitcoin Enterprise Course Certificate',
    issuer: 'Professional Development',
    period: '2023',
  },
  {
    title: '34 Things to Know about Carbon and Climate',
    issuer: 'Environmental Technology',
    period: '2023',
  },
];

const EducationCard = ({ education }: { education: EducationType }) => {
  return (
    <div className="bg-space-black/50 backdrop-blur-sm border border-cosmic-purple/20 rounded-xl p-6 hover:border-cosmic-purple/40 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-display font-semibold text-cosmic-purple">{education.degree}</h3>
        {education.current && (
          <span className="px-3 py-1 text-sm bg-stellar-gold/20 text-stellar-gold rounded-full">
            Current
          </span>
        )}
      </div>
      <p className="text-light-gray mb-2">{education.institution}</p>
      <p className="text-stellar-gold mb-4">{education.period}</p>

      {education.details.gpa && (
        <div className="mb-4">
          <p className="text-light-gray">
            <span className="text-cosmic-purple">GPA:</span> {education.details.gpa}
          </p>
        </div>
      )}

      <div>
        <h4 className="text-stellar-gold font-medium mb-2">Key Courses</h4>
        <div className="flex flex-wrap gap-2">
          {education.details.courses.map((course) => (
            <span
              key={course}
              className="px-3 py-1 text-sm bg-cosmic-purple/20 text-cosmic-purple rounded-full"
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

const CertificationCard = ({ certification }: { certification: CertificationType }) => {
  return (
    <div className="bg-space-black/50 backdrop-blur-sm border border-cosmic-purple/20 rounded-xl p-6 hover:border-cosmic-purple/40 transition-colors">
      <h3 className="text-xl font-display font-semibold text-cosmic-purple mb-2">
        {certification.title}
      </h3>
      <p className="text-light-gray mb-2">{certification.issuer}</p>
      <p className="text-stellar-gold mb-2">{certification.period}</p>
      {certification.description && (
        <p className="text-light-gray">{certification.description}</p>
      )}
    </div>
  )
}

export const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto container-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-2 text-center mb-12">
            Education & <span className="text-cosmic-purple">Certifications</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-6 h-6 text-cosmic-purple" />
                <h3 className="text-2xl font-display font-semibold text-cosmic-purple">
                  Academic Background
                </h3>
              </div>
              <div className="space-y-6">
                {education.map((edu) => (
                  <EducationCard key={edu.degree} education={edu} />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-6 h-6 text-cosmic-purple" />
                <h3 className="text-2xl font-display font-semibold text-cosmic-purple">
                  Professional Development
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert) => (
                  <CertificationCard key={cert.title} certification={cert} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 