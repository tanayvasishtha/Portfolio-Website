'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const leadershipRoles = [
  {
    organization: 'Enactus KIIT University',
    roles: [
      {
        title: 'Assistant Creative Director',
        period: 'March 2022 - Present',
        current: true,
        description: [
          'Lead technical team of 10+ members in digital content creation and management',
          'Implement data-driven strategies for social media optimization and engagement',
          'Develop multimedia presentations for national competitions using Adobe Creative Suite',
          'Drive innovation initiatives and creative project development',
        ],
      },
      {
        title: 'Actionist',
        period: 'March 2022 - April 2025',
        description: [
          'Active participant in social entrepreneurship initiatives',
          'Contributed to community development projects',
        ],
      },
    ],
  },
  {
    organization: 'Startup Grind Bhubaneswar',
    roles: [
      {
        title: 'Strategic Partnerships Lead',
        period: 'January 2024 - October 2024',
        description: [
          'Managed technical partnerships with startup incubators and technology companies',
          'Coordinated cross-functional teams for innovation summits and tech events',
          'Analyzed partnership data to optimize collaboration outcomes and networking',
        ],
      },
      {
        title: 'Volunteer',
        period: 'December 2023 - October 2024',
        description: [
          'Supported community building and startup ecosystem development',
        ],
      },
    ],
  },
  {
    organization: 'Khwaab KIIT',
    roles: [
      {
        title: 'Photographer',
        period: 'March 2022 - April 2025',
        description: [
          'Creative photography for university events and student activities',
          'Visual storytelling and media production',
        ],
      },
    ],
  },
]

const RoleCard = ({ role }: { role: typeof leadershipRoles[0]['roles'][0] }) => {
  return (
    <div className="bg-space-black/50 backdrop-blur-sm border border-cosmic-purple/20 rounded-xl p-6 hover:border-cosmic-purple/40 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-display font-semibold text-cosmic-purple">{role.title}</h3>
        {role.current && (
          <span className="px-3 py-1 text-sm bg-stellar-gold/20 text-stellar-gold rounded-full">
            Current
          </span>
        )}
      </div>
      <p className="text-stellar-gold mb-4">{role.period}</p>
      <ul className="space-y-2">
        {role.description.map((item, i) => (
          <li key={i} className="text-light-gray flex items-start">
            <span className="text-cosmic-purple mr-2">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

const OrganizationSection = ({ organization, index }: { organization: typeof leadershipRoles[0]; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="mb-12"
    >
      <h3 className="text-2xl font-display font-semibold text-cosmic-purple mb-6">
        {organization.organization}
      </h3>
      <div className="space-y-6">
        {organization.roles.map((role) => (
          <RoleCard key={role.title} role={role} />
        ))}
      </div>
    </motion.div>
  )
}

export const Leadership = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="leadership" className="section-padding">
      <div className="container mx-auto container-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-2 text-center mb-12">
            Leadership & <span className="text-cosmic-purple">Extracurricular</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            {leadershipRoles.map((organization, index) => (
              <OrganizationSection key={organization.organization} organization={organization} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 