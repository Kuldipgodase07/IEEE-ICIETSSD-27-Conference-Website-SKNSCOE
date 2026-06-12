import { motion } from 'motion/react';
import { Mail, ArrowRight, Star, Award } from 'lucide-react';

const tiers = [
  {
    level: 'Platinum',
    color: '#94A3B8',
    textColor: '#0F172A',
    bgColor: '#F1F5F9',
    borderColor: '#E2E8F0',
    price: '₹2,00,000',
    size: 'h-24',
    benefits: ['Logo on all materials', 'Premium booth space', '5 complimentary registrations', 'Keynote slot opportunity', 'Featured in proceedings', 'Social media spotlight', 'VIP dinner invitation'],
    sponsors: ['TechCorp India', 'GlobalTech Solutions'],
  },
  {
    level: 'Gold',
    color: '#F59E0B',
    textColor: '#78350F',
    bgColor: '#FEF3C7',
    borderColor: '#FDE68A',
    price: '₹1,00,000',
    size: 'h-20',
    benefits: ['Logo on key materials', 'Exhibition space', '3 complimentary registrations', 'Featured in proceedings', 'Social media mention'],
    sponsors: ['InnovateTech', 'EcoEnergy Corp', 'SmartSystems Ltd'],
  },
  {
    level: 'Silver',
    color: '#9CA3AF',
    textColor: '#1F2937',
    bgColor: '#F3F4F6',
    borderColor: '#E5E7EB',
    price: '₹50,000',
    size: 'h-16',
    benefits: ['Logo on selected materials', '1 complimentary registration', 'Listed in proceedings'],
    sponsors: ['DataMinds AI', 'CloudBridge', 'NanoTech India'],
  },
  {
    level: 'Academic Partners',
    color: 'var(--color-primary)',
    textColor: 'var(--color-primary)',
    bgColor: 'var(--color-primary-light)',
    borderColor: 'var(--color-primary-border)',
    price: 'MoU Based',
    size: 'h-14',
    benefits: ['Academic collaboration', 'Research exchange', 'Co-branded events'],
    sponsors: ['IIT Bombay', 'NIT Surathkal', 'COEP Pune', 'VIT Vellore'],
  },
  {
    level: 'IEEE Partners',
    color: 'var(--color-accent)',
    textColor: 'var(--color-accent)',
    bgColor: 'rgba(0,194,255,0.08)',
    borderColor: 'rgba(0,194,255,0.2)',
    price: 'Technical Sponsor',
    size: 'h-14',
    benefits: ['IEEE Technical Sponsorship', 'IEEE Xplore indexing', 'IEEE branding'],
    sponsors: ['IEEE Maharashtra Section', 'IEEE ComSoc', 'IEEE PES India'],
  },
];

export function Sponsors() {
  return (
    <div id="sponsors" className="bg-background pt-20">
      
      {/* Sponsor wall */}
      <section className="py-24 bg-section-background border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {tiers.map(({ level, color, bgColor, borderColor, size, sponsors, benefits }, ti) => (
            <motion.div
              key={level}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ti * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold shadow-sm" style={{ background: bgColor, border: `1px solid ${borderColor}`, color }}>
                  {ti === 0 && <Star className="w-4 h-4 fill-current" />}
                  {ti === 1 && <Award className="w-4 h-4" />}
                  {level}
                </div>
                <div className="flex-1 h-px bg-slate-200" />
              </div>
              <div className="flex flex-wrap gap-6">
                {sponsors.map((name) => (
                  <div
                    key={name}
                    className={`flex items-center justify-center px-10 ${size} rounded-3xl bg-white font-extrabold text-slate-800 hover:-translate-y-1 transition-all cursor-pointer border border-slate-200 shadow-sm hover:shadow-md text-lg`}
                    style={{ minWidth: 200, fontFamily: 'var(--font-manrope)' }}
                  >
                    {name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why sponsor */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-primary/10 text-primary">
              Why Sponsor?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900" style={{ fontFamily: 'var(--font-manrope)' }}>Sponsorship Benefits</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Global Visibility', desc: '500+ participants from 20+ countries — perfect platform for brand exposure.', color: 'var(--color-primary)' },
              { title: 'Research Network', desc: 'Connect with leading researchers and potential R&D collaborators.', color: 'var(--color-accent)' },
              { title: 'Talent Pipeline', desc: 'Identify and recruit top engineering talent from premier institutions.', color: 'var(--color-success)' },
              { title: 'IEEE Association', desc: 'IEEE technically sponsored event — lends prestige to your brand.', color: 'var(--color-secondary)' },
            ].map(({ title, desc, color }) => (
              <div key={title} className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm transition-all hover:shadow-md">
                <div className="w-14 h-14 rounded-2xl mb-6 bg-white border border-slate-100 shadow-sm flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full" style={{ background: color }} />
                </div>
                <h3 className="text-slate-900 font-extrabold mb-3 text-xl" style={{ fontFamily: 'var(--font-manrope)' }}>{title}</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6" style={{ fontFamily: 'var(--font-manrope)' }}>Become a Sponsor</h2>
          <p className="text-slate-600 font-medium text-lg mb-10 leading-relaxed">Download our sponsorship brochure to view detailed benefits per tier or contact us to discuss custom partnership opportunities tailored to your organization's goals.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-primary hover:bg-secondary transition-colors"
            >
              Download Prospectus <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="mailto:icietss2027@skncoe.edu.in"
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-primary bg-white border border-slate-200 hover:border-primary/20 shadow-sm hover:shadow transition-all"
            >
              <Mail className="w-5 h-5" /> Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
