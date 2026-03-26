import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const education = [
  {
    degree: 'B.E. in Computer Engineering',
    year: '2014 — 2018',
    grade: 'Bachelor of Engineering',
    highlights: [
      'Core CS fundamentals: algorithms, data structures, DBMS, OS',
      'Software Engineering principles and project management',
      'Web technologies and application development',
      'Final year project: Web-based management system',
    ],
    gradient: 'from-primary-500 to-accent-500',
    icon: '🎓',
  },
  {
    degree: 'Diploma in Computer Engineering',
    year: '2011 — 2014',
    grade: 'Diploma',
    highlights: [
      'Foundation in programming: C, C++, Java',
      'Database management and SQL fundamentals',
      'Networking and system administration basics',
      'Hardware and software troubleshooting',
    ],
    gradient: 'from-emerald-500 to-teal-500',
    icon: '📚',
  },
]

const certifications = [
  { name: '.NET Core Development', issuer: 'Microsoft Learn', icon: '🏅' },
  { name: 'Angular Advanced', issuer: 'Udemy', icon: '🏅' },
  { name: 'React & Firebase', issuer: 'Coursera', icon: '🏅' },
  { name: 'n8n Workflow Automation', issuer: 'n8n Academy', icon: '🏅' },
]

export default function Education() {
  const { ref, inView } = useInView()

  return (
    <section id="education" className="section-padding bg-dark-800/20">
      <div ref={ref} className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-mono text-sm tracking-widest uppercase">Academic Background</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            Education & <span className="gradient-text">Credentials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass rounded-2xl p-8 card-hover"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}>
                  {edu.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight">{edu.degree}</h3>
                  <p className={`text-sm font-semibold mt-1 bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}>
                    {edu.grade}
                  </p>
                  <p className="text-slate-500 text-sm mt-1 font-mono">{edu.year}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {edu.highlights.map((item, hi) => (
                  <li key={hi} className="flex items-start gap-2 text-slate-400 text-sm">
                    <span className="text-primary-500 mt-1 flex-shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass rounded-2xl p-8"
        >
          <h3 className="text-lg font-bold text-white mb-6 text-center">Certifications & Continuous Learning</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                className="bg-dark-700/50 border border-white/5 rounded-xl p-4 text-center hover:border-primary-500/30 hover:bg-dark-600/50 transition-all duration-200"
              >
                <div className="text-2xl mb-2">{cert.icon}</div>
                <p className="text-sm font-semibold text-white leading-tight">{cert.name}</p>
                <p className="text-xs text-slate-500 mt-1">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
