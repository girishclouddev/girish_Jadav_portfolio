import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const expertise = [
  { icon: '⚡', label: 'Angular', desc: 'Enterprise dashboards & SPAs' },
  { icon: '⚛️', label: 'React', desc: 'Modern web applications' },
  { icon: '🔷', label: '.NET Core', desc: 'Scalable REST APIs' },
  { icon: '🗄️', label: 'SQL Server', desc: 'Database design & optimization' },
  { icon: '🤖', label: 'n8n Automation', desc: 'Workflow & process automation' },
  { icon: '📊', label: 'GTM / SEO', desc: 'Analytics & tracking setup' },
  { icon: '🌐', label: 'Hosting', desc: 'SiteGround, GoDaddy VM, Vercel' },
  { icon: '🎬', label: 'Video Tools', desc: 'HeyGen AI video production' },
]

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="section-padding bg-dark-800/30">
      <div ref={ref} className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-mono text-sm tracking-widest uppercase">Who I Am</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Avatar row */}
            <div className="flex items-center gap-4">
              <div className="relative flex-shrink-0">
                <div className="p-0.5 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg">
                  <img
                    src="/Girish Jadav.png"
                    alt="Girish Jadav"
                    className="w-16 h-16 rounded-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-green-400 border-2 border-dark-800" />
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-tight">Girish Jadav</p>
                <p className="text-primary-400 text-sm font-mono">Full Stack Developer</p>
                <p className="text-slate-500 text-xs mt-0.5">📍 Vadodara, India</p>
              </div>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed">
              I'm a <span className="text-white font-semibold">Full Stack Developer</span> with{' '}
              <span className="text-primary-400 font-bold">6+ years of experience</span> crafting
              production-grade web applications and automation systems that drive real business value.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My expertise spans the entire stack — from pixel-perfect Angular and React frontends
              to robust .NET Core APIs and optimized SQL Server databases. I thrive on solving complex
              problems and delivering solutions that are fast, scalable, and maintainable.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Beyond core development, I build intelligent automation workflows with <span className="text-accent-400">n8n</span>,
              set up comprehensive analytics tracking with <span className="text-accent-400">GTM</span>,
              and deploy production apps across various hosting environments.
            </p>

            {/* CTA links */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="mailto:girish.cloud.dev@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-primary-600/25"
              >
                Let's Talk
              </a>
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass hover:bg-white/10 text-white font-semibold transition-colors"
              >
                View Work
              </a>
            </div>
          </motion.div>

          {/* Right — Expertise Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {expertise.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                className="glass rounded-xl p-4 card-hover group cursor-default"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-sm font-semibold text-white group-hover:text-primary-400 transition-colors">{item.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
