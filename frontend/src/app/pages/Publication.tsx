import { motion } from 'motion/react';
import { FileText, Shield, Search, Download, AlertCircle, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  { step: 1, title: 'Submit Paper', desc: 'Submit your full paper through the Microsoft CMT submission system following the IEEE template.', icon: FileText, color: '#00629B' },
  { step: 2, title: 'Blind Review', desc: 'Each paper undergoes double-blind peer review by at least 3 expert reviewers.', icon: Search, color: '#00C2FF' },
  { step: 3, title: 'Decision', desc: 'Authors receive detailed reviewer feedback along with accept/revision/reject decision.', icon: CheckCircle, color: '#10B981' },
  { step: 4, title: 'Camera Ready', desc: 'Accepted authors submit the final camera-ready version with IEEE copyright form.', icon: Shield, color: '#FFC857' },
  { step: 5, title: 'IEEE Xplore', desc: 'Published papers are indexed in IEEE Xplore Digital Library after the conference.', icon: BookOpen, color: '#0A4D8C' },
];

const policies = [
  {
    icon: Search,
    color: '#00629B',
    title: 'Double Blind Review',
    points: [
      'All submitted papers undergo double-blind peer review',
      'Author identities are not revealed to reviewers',
      'Minimum 3 reviewers per paper',
      'Detailed constructive feedback provided',
    ],
  },
  {
    icon: Shield,
    color: '#FFC857',
    title: 'Plagiarism Policy',
    points: [
      'All submissions checked using iThenticate',
      'Maximum 20% similarity allowed',
      'Self-plagiarism is also checked',
      'Immediate rejection for violations',
    ],
  },
  {
    icon: AlertCircle,
    color: '#EF4444',
    title: 'Publication Ethics',
    points: [
      'Adherence to IEEE PSPB Operations Manual',
      'All authors must consent to submission',
      'Concurrent submission not allowed',
      'Paper must not be under review elsewhere',
    ],
  },
  {
    icon: FileText,
    color: '#10B981',
    title: 'Copyright',
    points: [
      'IEEE Copyright Form must be submitted',
      'Transfer of copyright to IEEE upon acceptance',
      'Authors retain right to use in teaching',
      'Open access options available',
    ],
  },
];

export function Publication() {
  return (
    <div id="publication" className="bg-background pt-20">
      
      {/* IEEE Xplore banner */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden"
          >
             <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(0, 194, 255, 0.4) 0%, transparent 60%)' }} />
            <div className="text-center sm:text-left z-10">
              <div className="text-xs font-bold uppercase tracking-widest mb-3 text-accent">Official Publication Partner</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2" style={{ fontFamily: 'var(--font-manrope)' }}>IEEE Xplore® Digital Library</h2>
              <p className="text-slate-400 font-medium">Globally indexed · DOI assigned · Scopus & Web of Science eligible</p>
            </div>
            <a
              href="#"
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-primary-foreground bg-primary hover:bg-secondary transition-colors z-10"
            >
              Learn More <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Publication process */}
      <section className="py-24 bg-section-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-primary/10 text-primary">
              End-to-End Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground" style={{ fontFamily: 'var(--font-manrope)' }}>Publication Process</h2>
          </div>
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden sm:block absolute top-[44px] left-[10%] right-[10%] h-1 bg-slate-200" />
            
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 sm:gap-6 relative z-10">
              {steps.map(({ step, title, desc, icon: Icon, color }, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 bg-white border-[6px] border-section-background shadow-lg transition-transform hover:scale-105"
                  >
                    <Icon className="w-10 h-10" style={{ color }} />
                  </div>
                  <div className="font-bold text-slate-900 mb-2 text-lg" style={{ fontFamily: 'var(--font-manrope)' }}>{title}</div>
                  <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-primary/10 text-primary">
              Editorial Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground" style={{ fontFamily: 'var(--font-manrope)' }}>Publication Policies</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {policies.map(({ icon: Icon, color, title, points }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-white border border-slate-100 shadow-sm">
                  <Icon className="w-7 h-7" style={{ color }} />
                </div>
                <h3 className="text-slate-900 font-extrabold mb-5 text-xl" style={{ fontFamily: 'var(--font-manrope)' }}>{title}</h3>
                <ul className="space-y-3">
                  {points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                      <span className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: color }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Template download */}
      <section className="py-24 bg-section-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6" style={{ fontFamily: 'var(--font-manrope)' }}>Paper Templates</h2>
          <p className="text-slate-500 mb-12 text-lg">Download the official IEEE conference paper templates. Papers must strictly follow the IEEE formatting guidelines.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: 'IEEE LaTeX Template', subtitle: 'Recommended for technical papers', color: '#00629B' },
              { title: 'IEEE Word Template', subtitle: 'Microsoft Word compatible', color: '#00C2FF' },
            ].map(({ title, subtitle, color }) => (
              <a
                key={title}
                href="#"
                className="flex items-center gap-6 p-6 rounded-2xl bg-white text-left hover:-translate-y-1 hover:shadow-lg transition-all border border-slate-200 shadow-sm"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 bg-slate-50 border border-slate-100">
                  <Download className="w-8 h-8" style={{ color }} />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-lg mb-1" style={{ fontFamily: 'var(--font-manrope)' }}>{title}</div>
                  <div className="text-sm font-medium text-slate-500">{subtitle}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
