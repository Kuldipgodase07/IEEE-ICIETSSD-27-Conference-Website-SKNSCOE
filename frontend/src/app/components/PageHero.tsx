import { motion } from 'motion/react';

interface PageHeroProps {
  tag?: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ tag, title, subtitle }: PageHeroProps) {
  return (
    <section
      className="relative pt-36 pb-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #051729 0%, #0A192F 50%, #0D2240 100%)' }}
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,194,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,194,255,1) 1px,transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      {/* Top-right glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, #00629B 0%, transparent 70%)', transform: 'translate(35%,-35%)' }}
      />
      {/* Bottom-left accent */}
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, #00C2FF 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {tag && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background: 'rgba(0,194,255,0.12)', border: '1px solid rgba(0,194,255,0.3)', color: '#00C2FF' }}
          >
            {tag}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="text-white text-4xl sm:text-5xl lg:text-6xl max-w-4xl mx-auto font-extrabold leading-tight"
          style={{ fontFamily: 'var(--font-manrope)' }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-slate-400 mt-6 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed font-medium"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
