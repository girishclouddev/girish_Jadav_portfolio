import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const skillGroups = [
  {
    category: 'Frontend',
    gradient: 'from-blue-500 to-cyan-400',
    icon: '🎨',
    skills: [
      { name: 'Angular', level: 95 },
      { name: 'React', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'TypeScript', level: 85 },
      { name: 'HTML / CSS', level: 98 },
    ],
  },
  {
    category: 'Backend',
    gradient: 'from-violet-500 to-purple-400',
    icon: '⚙️',
    skills: [
      { name: '.NET Core', level: 88 },
      { name: 'REST APIs', level: 92 },
      { name: 'C#', level: 85 },
      { name: 'Node.js', level: 72 },
    ],
  },
  {
    category: 'Database',
    gradient: 'from-emerald-500 to-teal-400',
    icon: '🗄️',
    skills: [
      { name: 'SQL Server', level: 90 },
      { name: 'Firebase', level: 85 },
      { name: 'Supabase', level: 80 },
      { name: 'PostgreSQL', level: 75 },
    ],
  },
  {
    category: 'Tools & DevOps',
    gradient: 'from-orange-500 to-amber-400',
    icon: '🛠️',
    skills: [
      { name: 'n8n Automation', level: 90 },
      { name: 'GTM / SEO', level: 85 },
      { name: 'Vercel / GitHub', level: 92 },
      { name: 'HeyGen', level: 80 },
    ],
  },
]

function SkillBar({ name, level, inView, delay }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="text-slate-300 font-medium">{name}</span>
        <span className="text-slate-500 font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-dark-600 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref, inView } = useInView()

  return (
    <section id="skills" className="section-padding bg-dark-900">
      <div ref={ref} className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-mono text-sm tracking-widest uppercase">What I Know</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              className="glass rounded-2xl p-6 card-hover"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.gradient} flex items-center justify-center text-lg shadow-lg`}>
                  {group.icon}
                </div>
                <h3 className="font-bold text-white">{group.category}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    inView={inView}
                    delay={gi * 0.1 + si * 0.08 + 0.3}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Icon Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 glass rounded-2xl p-6"
        >
          <p className="text-center text-slate-500 text-sm font-mono mb-6 tracking-widest uppercase">Technologies I work with daily</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Angular', 'React', 'TypeScript', '.NET Core', 'C#', 'SQL Server',
              'Firebase', 'Supabase', 'n8n', 'Tailwind CSS', 'Vercel', 'GitHub',
              'GTM', 'Node.js', 'REST APIs', 'HeyGen',
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-dark-700 border border-white/5 text-slate-300 text-sm hover:border-primary-500/50 hover:text-primary-300 hover:bg-dark-600 transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
