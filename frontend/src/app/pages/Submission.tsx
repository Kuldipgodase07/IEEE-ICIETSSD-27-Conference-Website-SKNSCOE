import { motion } from 'motion/react';
import { Upload, FileText, CheckCircle, Download, AlertCircle, ArrowRight, ExternalLink, Search, Users, ShieldCheck, Mail } from 'lucide-react';

const guidelines = [
  'Papers must be written in English',
  'Maximum 6 pages including references (IEEE format)',
  'Double-blind review — remove all author information',
  'Minimum 3 references, properly formatted in IEEE style',
  'Original and unpublished work only',
  'Similarity index must be below 20% (iThenticate)',
  'High-quality figures and tables at 300 DPI or above',
  'Equations numbered and properly formatted',
];

const steps = [
  { n: '01', icon: Download, title: 'Download Template', desc: 'Download the IEEE conference paper template (LaTeX or Word) from the IEEE website.', color: '#00629B' },
  { n: '02', icon: FileText, title: 'Prepare Paper', desc: 'Write your paper following IEEE formatting guidelines. Remove all author information for blind review.', color: '#00C2FF' },
  { n: '03', icon: Search, title: 'Check Plagiarism', desc: 'Ensure similarity index is below 20% before submission. Use tools like Turnitin or Grammarly.', color: '#10B981' },
  { n: '04', icon: Upload, title: 'Submit via CMT', desc: 'Submit your paper through Microsoft CMT system. Upload PDF only, max file size 10 MB.', color: '#FFC857' },
];

const reviewProcess = [
  { icon: FileText, title: 'Initial Screening', desc: 'Plagiarism check and adherence to formatting guidelines.' },
  { icon: Users, title: 'Double-Blind Review', desc: 'Each paper is reviewed by at least three independent experts.' },
  { icon: ShieldCheck, title: 'Decision & Feedback', desc: 'Authors receive notification of acceptance along with reviewer feedback.' },
  { icon: CheckCircle, title: 'Camera-Ready Submission', desc: 'Authors revise the paper based on feedback and submit the final version.' }
];

export function Submission() {
  return (
    <div id="submission" className="bg-background pt-20">
      
      {/* Deadline banner */}
      <div
        className="py-4 bg-slate-900 border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-warning" />
            <span className="text-white font-semibold">Submission Deadline:</span>
            <span className="text-warning font-bold">1 March 2027</span>
          </div>
          <div className="h-4 w-px hidden sm:block bg-slate-700" />
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-success" />
            <span className="text-white font-semibold">Notification:</span>
            <span className="text-success font-bold">15 March 2027</span>
          </div>
        </div>
      </div>

      {/* Steps */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-primary/10 text-primary">
              Step-by-Step Guide
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4" style={{ fontFamily: 'var(--font-manrope)' }}>Submission Process</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Follow these steps carefully to ensure your paper meets the conference requirements.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ n, icon: Icon, title, desc, color }, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm"
              >
                <div className="text-5xl font-black mb-4 leading-none opacity-20" style={{ color: color, fontFamily: 'var(--font-manrope)' }}>{n}</div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white shadow-sm border border-slate-100">
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <h3 className="font-bold text-slate-800 mb-2 text-lg" style={{ fontFamily: 'var(--font-manrope)' }}>{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute -right-4 top-14 z-10 text-slate-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guidelines & Peer Review */}
      <section className="py-24 bg-section-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="mb-10">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-primary/10 text-primary">
                  Author Instructions
                </span>
                <h2 className="text-3xl font-extrabold text-foreground" style={{ fontFamily: 'var(--font-manrope)' }}>Submission Guidelines</h2>
              </div>
              <div className="space-y-4">
                {guidelines.map((g, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0 text-success mt-0.5" />
                    <span className="text-slate-700 font-medium">{g}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-10">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-accent/10 text-accent">
                  Evaluation
                </span>
                <h2 className="text-3xl font-extrabold text-foreground" style={{ fontFamily: 'var(--font-manrope)' }}>Peer Review Process</h2>
              </div>
              <div className="relative pl-6 border-l-2 border-slate-200 space-y-8">
                 {reviewProcess.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative"
                    >
                      <div className="absolute w-4 h-4 bg-white border-2 border-primary rounded-full -left-[33px] mt-1.5" />
                      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm ml-2">
                        <div className="flex items-center gap-3 mb-2">
                          <step.icon className="w-5 h-5 text-primary" />
                          <h3 className="font-bold text-slate-800">{step.title}</h3>
                        </div>
                        <p className="text-sm text-slate-600">{step.desc}</p>
                      </div>
                    </motion.div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6" style={{ fontFamily: 'var(--font-manrope)' }}>Ready to Submit?</h2>
          <p className="text-slate-500 mb-10 text-lg">Use the Microsoft CMT submission portal. Create an account if you haven't already.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="flex items-center gap-2 px-8 py-3.5 rounded-md font-semibold text-white bg-primary hover:bg-secondary transition-colors"
            >
              Submit via CMT <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-8 py-3.5 rounded-md font-semibold text-primary border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              <Download className="w-4 h-4" />
              IEEE Template
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
