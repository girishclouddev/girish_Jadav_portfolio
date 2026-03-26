import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const experiences = [
  {
    period: '2022 — Present',
    title: 'Senior Full Stack Developer',
    company: 'Freelance & Contract',
    type: 'Remote',
    highlights: [
      'Built and maintained enterprise Angular dashboards for Govirtual platform serving thousands of users',
      'Architected n8n automation workflows for email campaigns, CRM syncs, and data pipelines',
      'Developed React-based applications with Firebase/Supabase backends deployed on Vercel',
      'Set up GTM tracking, SEO structures, and analytics pipelines for multiple client websites',
      'Managed production hosting on SiteGround and GoDaddy VM environments',
    ],
    gradient: 'from-primary-500 to-accent-500',
    icon: '🚀',
  },
  {
    period: '2019 — 2022',
    title: 'Full Stack Developer',
    company: 'Software Development',
    type: 'Full-time',
    highlights: [
      'Developed Angular-based evaluation and assessment systems with complex rule engines',
      'Built .NET Core REST APIs serving mobile and web frontends with SQL Server databases',
      'Implemented role-based access control systems and user management modules',
      'Collaborated on agile teams, delivering sprint goals and production deployments',
      'Integrated third-party APIs and payment gateways into existing platforms',
    ],
    gradient: 'from-emerald-500 to-teal-500',
    icon: '💼',
  },
  {
    period: '2018 — 2019',
    title: 'Junior Web Developer',
    company: 'Web Agency',
    type: 'Full-time',
    highlights: [
      'Built responsive websites and landing pages with HTML, CSS, JavaScript',
      'Assisted in Angular frontend development for internal tools',
      'Managed client communication and requirement gathering',
      'Maintained and updated existing web properties and CMS platforms',
    ],
    gradient: 'from-amber-500 to-orange-500',
    icon: '🌱',
  },
]

export default function Experience() {
  const { ref, inView } = useInView()

  return (
    <section id="experience" className="section-padding bg-dark-900">
      <div ref={ref} className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-mono text-sm tracking-widest uppercase">Career Journey</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-accent-500/30 to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full glass border-2 border-primary-500/50 flex items-center justify-center text-lg z-10">
                  {exp.icon}
                </div>

                {/* Spacer for timeline center */}
                <div className="hidden md:block flex-1" />

                {/* Card */}
                <div className="flex-1 ml-16 md:ml-0">
                  <div className="glass rounded-2xl p-6 card-hover">
                    {/* Period + type */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${exp.gradient} text-white font-semibold`}>
                        {exp.period}
                      </span>
                      <span className="text-xs text-slate-500 border border-slate-700 rounded-full px-3 py-1">
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-primary-400 text-sm font-medium mb-4">{exp.company}</p>

                    <ul className="space-y-2">
                      {exp.highlights.map((item, hi) => (
                        <li key={hi} className="flex items-start gap-2 text-slate-400 text-sm">
                          <span className="text-primary-500 mt-1 flex-shrink-0">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
