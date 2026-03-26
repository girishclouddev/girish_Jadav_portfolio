import { useState, forwardRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { projects, categories } from '../data/projects'

function ExternalIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

const ProjectCard = forwardRef(function ProjectCard({ project, index }, ref) {
  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="glass rounded-2xl overflow-hidden card-hover group flex flex-col"
    >
      {/* Top gradient bar */}
      <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

      {/* Card header */}
      <div className={`p-6 pb-4 bg-gradient-to-br ${project.gradient} opacity-[0.08] absolute inset-0 rounded-2xl pointer-events-none`} />

      <div className="p-6 flex flex-col flex-1">
        {/* Stack badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-md bg-dark-700 border border-white/5 text-slate-400 font-mono"
            >
              {tech}
            </span>
          ))}
          {project.featured && (
            <span className="text-xs px-2.5 py-1 rounded-md bg-primary-600/20 border border-primary-500/30 text-primary-400 font-semibold">
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {project.loginInfo && (
          <p className="text-xs text-amber-400/70 bg-amber-400/5 border border-amber-400/10 rounded-lg px-3 py-2 mb-4 font-mono">
            Demo login: {project.loginInfo}
          </p>
        )}

        {/* Link */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-primary-600 hover:border-primary-500 transition-all duration-200 group/btn self-start"
        >
          <span>Live Preview</span>
          <ExternalIcon />
        </a>
      </div>
    </motion.div>
  )
})

export default function Projects() {
  const { ref, inView } = useInView()
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="section-padding bg-dark-800/20">
      <div ref={ref} className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-primary-400 font-mono text-sm tracking-widest uppercase">What I've Built</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mt-4 mb-8" />

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat.key}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.key
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                    : 'glass text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.label}
                <span className="ml-2 text-xs opacity-60">
                  ({cat.key === 'all' ? projects.length : projects.filter((p) => p.category === cat.key).length})
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
