import { motion } from 'framer-motion'

const techBadges = ['Angular', 'React', '.NET Core', 'SQL Server', 'n8n', 'Tailwind']

const floatingOrb = (className) => (
  <div className={`absolute rounded-full blur-3xl opacity-20 animate-pulse-slow ${className}`} />
)

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-dark-900">
      {/* Background orbs */}
      {floatingOrb('w-96 h-96 bg-primary-600 -top-32 -left-32')}
      {floatingOrb('w-80 h-80 bg-accent-600 top-1/2 -right-20')}
      {floatingOrb('w-64 h-64 bg-primary-500 bottom-20 left-1/3')}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-max section-padding w-full pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">

          {/* ── LEFT: Text content ── */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-300 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for freelance & full-time opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-4 leading-none"
            >
              <span className="text-white">Girish </span>
              <span className="gradient-text">Jadav</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg font-medium text-primary-400 mb-5 font-mono"
            >
              Full Stack Developer
              <span className="text-slate-600 mx-2">|</span>
              Angular · React · .NET Core
              <span className="text-slate-600 mx-2">|</span>
              Automation Expert
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-400 max-w-lg mb-8 leading-relaxed lg:mx-0 mx-auto"
            >
              Building scalable web apps, automation systems, and high-performance digital experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(59,130,246,0.4)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('projects')}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold text-lg shadow-lg shadow-primary-600/20 hover:shadow-primary-600/40 transition-shadow"
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('contact')}
                className="px-8 py-4 rounded-xl glass text-white font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Tech Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2"
            >
              {techBadges.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.07 }}
                  className="px-4 py-1.5 rounded-full text-xs font-medium bg-dark-700 border border-white/10 text-slate-300 hover:border-primary-500/50 hover:text-primary-300 transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-10 flex gap-8 justify-center lg:justify-start"
            >
              {[
                { value: '6+', label: 'Years Exp.' },
                { value: '12+', label: 'Projects' },
                { value: '100%', label: 'Dedication' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-3xl font-black gradient-text">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary-500 via-accent-500 to-primary-600 opacity-20 blur-2xl animate-pulse-slow" />

              {/* Gradient border ring */}
              <div className="relative p-1 rounded-full bg-gradient-to-br from-primary-500 via-accent-500 to-primary-600 shadow-2xl shadow-primary-600/30">
                {/* Inner dark ring */}
                <div className="p-1 rounded-full bg-dark-900">
                  {/* Photo */}
                  <motion.img
                    src="/Girish Jadav.png"
                    alt="Girish Jadav — Full Stack Developer"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                    className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover object-top"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Floating badge — top right */}
              <motion.div
                initial={{ opacity: 0, scale: 0, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                className="absolute -top-2 -right-2 glass rounded-2xl px-3 py-2 text-center shadow-xl border border-white/10"
              >
                <div className="text-xl font-black gradient-text leading-none">6+</div>
                <div className="text-[10px] text-slate-400 mt-0.5 whitespace-nowrap">Years Exp.</div>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                initial={{ opacity: 0, scale: 0, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 1.0, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-2 -left-4 glass rounded-2xl px-3 py-2 shadow-xl border border-white/10 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <span className="text-xs text-slate-300 whitespace-nowrap">Open to Work</span>
              </motion.div>

              {/* Decorative dots */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
                  backgroundSize: '8px 8px',
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-8 bg-gradient-to-b from-slate-500 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  )
}
