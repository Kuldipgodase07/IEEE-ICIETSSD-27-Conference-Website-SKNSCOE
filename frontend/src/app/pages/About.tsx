import { motion } from 'motion/react';
import { Lightbulb, Cog, Microscope, Globe2, Leaf, Users, Globe, BookOpen, Award } from 'lucide-react';

const highlights = [
  { label: 'Sustainable Development', icon: Leaf, color: '#10B981' },
  { label: 'Engineering Innovation', icon: Lightbulb, color: '#00C2FF' },
  { label: 'Research Excellence', icon: Microscope, color: '#00629B' },
  { label: 'Technology Advancement', icon: Cog, color: '#FFC857' },
  { label: 'Global Collaboration', icon: Globe2, color: '#0A4D8C' },
  { label: 'IEEE Publication', icon: Award, color: '#00629B' },
];

export function About() {
  return (
    <div id="about" className="bg-background pt-20">
      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center">


            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map(({ icon: Icon, label, color }, i) => (
                <div key={label} className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-white shadow-sm border border-slate-100">
                    <Icon className="w-7 h-7" style={{ color }} />
                  </div>
                  <div className="font-bold text-slate-800" style={{ fontFamily: 'var(--font-inter)' }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
